'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchSubmissions, updateSubmissionStatus } from '@/lib/api';

const SERVICE_LABELS = {
  'adult-counseling': 'Adult & Individual Counseling',
  'family-therapy': 'Family Counseling',
  'marriage-counseling': 'Marriage & Couples Therapy',
  'depression-anxiety-counseling': 'Depression & Anxiety Counseling',
  'grief-counseling': 'Grief & Loss Counseling',
  'child-counseling': 'Child & Adolescent Counseling',
  'family-support': 'Family Support Services',
  'parenting-classes': 'Parenting Support & Classes',
  'foster-care': 'Foster Care & Adoption Support',
  'pro-bono-counseling': 'Pro Bono Counseling',
  'general-contact': 'General Contact Form',
  'training-request': 'Training Request',
  'careers': 'Careers Application',
};

const STATUS_META = {
  new: { label: 'New', color: '#1d6fd6', bg: '#e8f1fd' },
  contacted: { label: 'Contacted', color: '#a4740a', bg: '#fdf3e0' },
  closed: { label: 'Closed', color: '#3a7d4f', bg: '#e7f5ec' },
};

const IconPerson = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="8" r="3.4" /><path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
  </svg>
);
const IconSearch = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.4-3.4" />
  </svg>
);
const IconCalendar = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4" width="18" height="17" rx="2.5" /><path d="M3 9h18" /><path d="M8 2v4M16 2v4" />
  </svg>
);
const IconDownload = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M4 20h16" />
  </svg>
);
const IconDots = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
    <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" />
  </svg>
);

function toCsvValue(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [serviceFilter, setServiceFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [search, setSearch] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const limit = 25;

  useEffect(() => {
    const t = localStorage.getItem('oa_admin_token');
    if (!t) {
      router.push('/admin/login');
      return;
    }
    setToken(t);
  }, [router]);

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchSubmissions(token, { service: serviceFilter, status: statusFilter, page, limit });
      setItems(data.items);
      setTotal(data.total);
    } catch (err) {
      if (err.message === 'UNAUTHORIZED') {
        localStorage.removeItem('oa_admin_token');
        router.push('/admin/login');
        return;
      }
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, serviceFilter, statusFilter, page, router]);

  useEffect(() => {
    load();
  }, [load]);

  const handleLogout = () => {
    localStorage.removeItem('oa_admin_token');
    router.push('/admin/login');
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateSubmissionStatus(token, id, status);
      setItems((prev) => prev.map((it) => (it._id === id ? { ...it, status } : it)));
    } catch (err) {
      setError(err.message);
    }
  };

  const visibleItems = useMemo(() => {
    return items.filter((it) => {
      if (startDate && new Date(it.createdAt) < new Date(startDate)) return false;
      if (endDate && new Date(it.createdAt) > new Date(`${endDate}T23:59:59`)) return false;
      if (search) {
        const q = search.toLowerCase();
        const haystack = [it.name, it.firstName, it.lastName, it.email, it.phone, it.message]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [items, startDate, endDate, search]);

  const handleExport = () => {
    const header = ['Date', 'Service', 'Name', 'Email', 'Phone', 'Message', 'Status'];
    const rows = visibleItems.map((it) => [
      new Date(it.createdAt).toLocaleString(),
      SERVICE_LABELS[it.service] || it.service,
      it.name || `${it.firstName || ''} ${it.lastName || ''}`.trim(),
      it.email,
      it.phone || '',
      it.message || '',
      it.status,
    ]);
    const csv = [header, ...rows].map((r) => r.map(toCsvValue).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <main style={styles.page}>
      <header style={styles.topbar}>
        <Link href="/" style={styles.logoLink}>
          <img src="/images/logo-full.png" alt="Open Arms Initiative" style={styles.logo} />
        </Link>
        <button onClick={handleLogout} style={styles.logoutBtn}>Log Out</button>
      </header>

      <div style={styles.container}>
        <div style={styles.titleRow}>
          <div>
            <h1 style={styles.heading}>Form Submissions</h1>
            <p style={styles.subheading}>View and manage all form submissions from your website.</p>
          </div>
          <button onClick={handleExport} style={styles.exportBtn}>
            <IconDownload />
            Export
          </button>
        </div>

        <div style={styles.filterCard}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Service</label>
            <select
              value={serviceFilter}
              onChange={(e) => { setServiceFilter(e.target.value); setPage(1); }}
              style={styles.select}
            >
              <option value="">All Services</option>
              {Object.entries(SERVICE_LABELS).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Status</label>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              style={styles.select}
            >
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div style={styles.dateRange}>
            <IconCalendar style={{ color: '#9aa1b0' }} />
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={styles.dateInput} />
            <span style={{ color: '#9aa1b0' }}>–</span>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={styles.dateInput} />
          </div>

          <div style={styles.searchWrap}>
            <input
              placeholder="Search submissions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.searchInput}
            />
            <IconSearch style={styles.searchIcon} />
          </div>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.card}>
          {loading ? (
            <p style={styles.emptyState}>Loading…</p>
          ) : visibleItems.length === 0 ? (
            <p style={styles.emptyState}>No submissions found.</p>
          ) : (
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Date Submitted</th>
                    <th style={styles.th}>Service</th>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Phone</th>
                    <th style={styles.th}>Message</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleItems.map((it) => {
                    const meta = STATUS_META[it.status] || STATUS_META.new;
                    const date = new Date(it.createdAt);
                    return (
                      <tr key={it._id}>
                        <td style={styles.td}>
                          <div style={{ fontWeight: 600 }}>{date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                          <div style={styles.tdSub}>{date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}</div>
                        </td>
                        <td style={styles.td}>
                          <div style={styles.serviceCell}>
                            <span style={styles.serviceIcon}><IconPerson /></span>
                            <span>{SERVICE_LABELS[it.service] || it.service}</span>
                          </div>
                        </td>
                        <td style={styles.td}>{it.name || `${it.firstName || ''} ${it.lastName || ''}`.trim() || '—'}</td>
                        <td style={styles.td}><a href={`mailto:${it.email}`} style={styles.link}>{it.email}</a></td>
                        <td style={styles.td}>{it.phone || '—'}</td>
                        <td style={{ ...styles.td, maxWidth: 240 }}>
                          {it.topic && <div style={styles.topicTag}>{it.topic}</div>}
                          <span style={styles.messageText}>{it.message || (it.topic ? '' : '—')}</span>
                        </td>
                        <td style={styles.td}>
                          <span style={{ ...styles.statusPill, color: meta.color, background: meta.bg }}>
                            <span style={{ ...styles.statusDot, background: meta.color }} />
                            {meta.label}
                          </span>
                        </td>
                        <td style={{ ...styles.td, position: 'relative' }}>
                          <button
                            onClick={() => setOpenMenuId(openMenuId === it._id ? null : it._id)}
                            style={styles.dotsBtn}
                            aria-label="Actions"
                          >
                            <IconDots />
                          </button>
                          {openMenuId === it._id && (
                            <div style={styles.actionMenu} onMouseLeave={() => setOpenMenuId(null)}>
                              {['new', 'contacted', 'closed'].map((s) => (
                                <button
                                  key={s}
                                  onClick={() => { handleStatusChange(it._id, s); setOpenMenuId(null); }}
                                  style={styles.actionMenuItem}
                                >
                                  Mark as {STATUS_META[s].label}
                                </button>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div style={styles.footerRow}>
            <span style={styles.resultsLabel}>Showing {visibleItems.length ? 1 : 0} to {visibleItems.length} of {total} results</span>
            {totalPages > 1 && (
              <div style={styles.pagination}>
                <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} style={styles.pageBtn}>Previous</button>
                <span style={styles.pageNum}>{page}</span>
                <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)} style={styles.pageBtn}>Next</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f5f6f9',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.85rem 2rem',
    background: '#fff',
    borderBottom: '1px solid #eceef2',
  },
  logoLink: { display: 'flex', alignItems: 'center' },
  logo: { height: 40, width: 'auto', display: 'block' },
  logoutBtn: {
    padding: '0.55rem 1.1rem',
    borderRadius: 8,
    border: '1px solid #d7dae0',
    background: '#fff',
    color: '#374151',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  container: { maxWidth: 1400, margin: '0 auto', padding: '2rem' },
  titleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
  },
  heading: { margin: 0, fontSize: '1.9rem', fontWeight: 800, color: '#12151f' },
  subheading: { margin: '0.35rem 0 0', fontSize: '0.95rem', color: '#6b7280' },
  exportBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    padding: '0.65rem 1.2rem',
    borderRadius: 9,
    border: 'none',
    background: '#1d6fd6',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  filterCard: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    background: '#fff',
    border: '1px solid #e6e8ec',
    borderRadius: 14,
    padding: '1.25rem 1.5rem',
    marginBottom: '1.5rem',
  },
  filterGroup: { display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: 190 },
  filterLabel: { fontSize: '0.82rem', color: '#4b5160', fontWeight: 600 },
  select: {
    padding: '0.6rem 0.75rem',
    borderRadius: 9,
    border: '1px solid #d7dae0',
    background: '#fff',
    fontSize: '0.88rem',
    color: '#374151',
  },
  dateRange: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.55rem 0.85rem',
    borderRadius: 9,
    border: '1px solid #d7dae0',
    background: '#fff',
  },
  dateInput: { border: 'none', outline: 'none', fontSize: '0.85rem', color: '#374151', width: 110 },
  searchWrap: { position: 'relative', flex: 1, minWidth: 220 },
  searchInput: {
    width: '100%',
    padding: '0.6rem 2.4rem 0.6rem 0.9rem',
    borderRadius: 9,
    border: '1px solid #d7dae0',
    fontSize: '0.88rem',
    color: '#374151',
    boxSizing: 'border-box',
  },
  searchIcon: { position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#9aa1b0' },
  error: { color: '#c0392b', marginBottom: '1rem' },
  card: {
    background: '#fff',
    borderRadius: 14,
    border: '1px solid #e6e8ec',
    boxShadow: '0 1px 3px rgba(16,24,40,0.04)',
    overflow: 'hidden',
  },
  emptyState: { padding: '3rem', textAlign: 'center', color: '#8a90a0' },
  tableWrap: { overflowX: 'auto' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem' },
  th: {
    textAlign: 'left',
    padding: '0.9rem 1.25rem',
    borderBottom: '1px solid #e6e8ec',
    color: '#374151',
    fontWeight: 700,
    fontSize: '0.85rem',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '1rem 1.25rem',
    borderBottom: '1px solid #eef0f3',
    verticalAlign: 'top',
    color: '#20242e',
  },
  tdSub: { fontSize: '0.78rem', color: '#8a90a0', marginTop: 2 },
  serviceCell: { display: 'flex', alignItems: 'center', gap: '0.6rem', maxWidth: 220 },
  serviceIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: '50%',
    background: '#eaf1fd',
    color: '#1d6fd6',
    flexShrink: 0,
  },
  link: { color: '#1d6fd6', textDecoration: 'none' },
  topicTag: { fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', marginBottom: '0.2rem' },
  messageText: { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' },
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.3rem 0.75rem',
    borderRadius: 999,
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  statusDot: { width: 6, height: 6, borderRadius: '50%' },
  dotsBtn: {
    border: 'none',
    background: 'transparent',
    color: '#6b7280',
    cursor: 'pointer',
    padding: '0.3rem',
    borderRadius: 6,
  },
  actionMenu: {
    position: 'absolute',
    right: '1.25rem',
    top: '2.4rem',
    zIndex: 10,
    background: '#fff',
    border: '1px solid #e6e8ec',
    borderRadius: 10,
    boxShadow: '0 8px 24px rgba(16,24,40,0.12)',
    minWidth: 160,
    overflow: 'hidden',
  },
  actionMenuItem: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '0.6rem 0.9rem',
    border: 'none',
    background: '#fff',
    fontSize: '0.85rem',
    color: '#374151',
    cursor: 'pointer',
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.25rem',
    borderTop: '1px solid #eef0f3',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  resultsLabel: { fontSize: '0.85rem', color: '#6b7280' },
  pagination: { display: 'flex', gap: '0.6rem', alignItems: 'center' },
  pageBtn: {
    padding: '0.45rem 1rem',
    borderRadius: 8,
    border: '1px solid #d7dae0',
    background: '#fff',
    color: '#374151',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
  pageNum: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    background: '#1d6fd6',
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
};
