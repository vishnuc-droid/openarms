'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchSubmission, updateSubmission, updateSubmissionStatus, deleteSubmission } from '@/lib/api';

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
  'local-referrals': 'Local Referrals',
  'general-contact': 'General Contact Form',
  'training-request': 'Training Request',
  'careers': 'Careers Application',
  'churches-faith-training': 'Churches & Faith-Based Training',
  'community-outreach': 'Community Outreach & Support',
  'school-staff-training': 'School Staff & Educator Training',
};

const CONTACT_METHOD_LABELS = { phone: 'Phone', email: 'Email', either: 'Either' };

const STATUS_META = {
  new: { label: 'New', color: '#1d6fd6', bg: '#e8f1fd' },
  contacted: { label: 'Contacted', color: '#a4740a', bg: '#fdf3e0' },
  closed: { label: 'Closed', color: '#3a7d4f', bg: '#e7f5ec' },
};

const EDITABLE_FIELDS = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'name', label: 'Full Name' },
  { key: 'email', label: 'Email', required: true },
  { key: 'phone', label: 'Phone' },
  { key: 'insurance', label: 'Insurance' },
  { key: 'insuranceOther', label: 'Insurance (Other)' },
  { key: 'contactMethod', label: 'Contact Method' },
  { key: 'topic', label: 'Topic' },
  { key: 'message', label: 'Message', multiline: true },
];

const ELIGIBILITY_FIELDS = [
  { key: 'dob', label: 'Date of Birth' },
  { key: 'servicesFor', label: 'Services For' },
  { key: 'parentGuardianName', label: 'Parent/Guardian Name' },
  { key: 'relationshipToClient', label: 'Relationship to Client' },
  { key: 'address', label: 'Address' },
  { key: 'city', label: 'City' },
  { key: 'state', label: 'State' },
  { key: 'zip', label: 'ZIP Code' },
  { key: 'memberId', label: 'Insurance/Medicaid Member ID' },
];

const IconArrowLeft = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
);

export default function LeadDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [token, setToken] = useState(null);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem('oa_admin_token');
    if (!t) {
      router.push('/admin/login');
      return;
    }
    setToken(t);
  }, [router]);

  const load = useCallback(async () => {
    if (!token || !id) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchSubmission(token, id);
      setItem(data.item);
      setForm(data.item);
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
  }, [token, id, router]);

  useEffect(() => {
    load();
  }, [load]);

  const handleFieldChange = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const fields = {};
      [...EDITABLE_FIELDS, ...ELIGIBILITY_FIELDS].forEach(({ key }) => { fields[key] = form[key] ?? ''; });
      const data = await updateSubmission(token, id, fields);
      setItem(data.item);
      setForm(data.item);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setForm(item);
    setEditing(false);
    setError('');
  };

  const handleStatusChange = async (status) => {
    try {
      const data = await updateSubmissionStatus(token, id, status);
      setItem(data.item);
      setForm(data.item);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    setError('');
    try {
      await deleteSubmission(token, id);
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.message);
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <main style={styles.page}>
        <div style={styles.container}><p style={styles.emptyState}>Loading…</p></div>
      </main>
    );
  }

  if (!item) {
    return (
      <main style={styles.page}>
        <div style={styles.container}>
          <p style={styles.error}>{error || 'Lead not found.'}</p>
          <Link href="/admin/dashboard" style={styles.backLink}><IconArrowLeft /> Back to dashboard</Link>
        </div>
      </main>
    );
  }

  const meta = STATUS_META[item.status] || STATUS_META.new;
  const date = new Date(item.createdAt);

  return (
    <main style={styles.page}>
      <header style={styles.topbar}>
        <Link href="/" style={styles.logoLink}>
          <img src="/images/logo-full.png" alt="Open Arms Initiative" style={styles.logo} />
        </Link>
        <button onClick={() => { localStorage.removeItem('oa_admin_token'); router.push('/admin/login'); }} style={styles.logoutBtn}>Log Out</button>
      </header>

      <div style={styles.container}>
        <Link href="/admin/dashboard" style={styles.backLink}><IconArrowLeft /> Back to all submissions</Link>

        <div style={styles.titleRow}>
          <div>
            <h1 style={styles.heading}>{item.name || `${item.firstName || ''} ${item.lastName || ''}`.trim() || 'Lead Detail'}</h1>
            <p style={styles.subheading}>
              {SERVICE_LABELS[item.service] || item.service} · Submitted {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })} at {date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
            </p>
          </div>
          <div style={styles.headerActions}>
            {!editing && (
              <button onClick={() => setEditing(true)} style={styles.secondaryBtn}>Edit</button>
            )}
            <button onClick={() => setConfirmDelete(true)} style={styles.dangerBtn} disabled={deleting}>Delete</button>
          </div>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.card}>
          <div style={styles.cardSection}>
            <span style={styles.sectionLabel}>Status</span>
            <div style={styles.statusRow}>
              <span style={{ ...styles.statusPill, color: meta.color, background: meta.bg }}>
                <span style={{ ...styles.statusDot, background: meta.color }} />
                {meta.label}
              </span>
              <div style={styles.statusButtons}>
                {['new', 'contacted', 'closed'].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(s)}
                    disabled={item.status === s}
                    style={item.status === s ? styles.statusBtnActive : styles.statusBtn}
                  >
                    Mark as {STATUS_META[s].label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.divider} />

          <div style={styles.fieldsGrid}>
            {EDITABLE_FIELDS.map(({ key, label, required, multiline }) => (
              <div key={key} style={multiline ? styles.fieldFull : styles.field}>
                <span style={styles.sectionLabel}>{label}{required ? '*' : ''}</span>
                {editing ? (
                  multiline ? (
                    <textarea
                      value={form[key] || ''}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      style={styles.textarea}
                      rows={4}
                    />
                  ) : (
                    <input
                      value={form[key] || ''}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      style={styles.input}
                    />
                  )
                ) : (
                  <p style={styles.fieldValue}>
                    {key === 'contactMethod'
                      ? (CONTACT_METHOD_LABELS[item[key]] || item[key] || '—')
                      : (item[key] || '—')}
                  </p>
                )}
              </div>
            ))}
          </div>

          {(item.eligibilityCompletedAt || editing) && (
            <>
              <div style={styles.divider} />
              <div style={styles.cardSection}>
                <span style={styles.sectionLabel}>
                  Eligibility Information {item.eligibilityCompletedAt ? `— Completed ${new Date(item.eligibilityCompletedAt).toLocaleString()}` : '— Not yet completed'}
                </span>
              </div>
              <div style={{ ...styles.fieldsGrid, marginTop: '0.75rem' }}>
                {ELIGIBILITY_FIELDS.map(({ key, label }) => (
                  <div key={key} style={styles.field}>
                    <span style={styles.sectionLabel}>{label}</span>
                    {editing ? (
                      key === 'servicesFor' ? (
                        <select value={form[key] || ''} onChange={(e) => handleFieldChange(key, e.target.value)} style={styles.input}>
                          <option value="">—</option>
                          <option value="Myself">Myself</option>
                          <option value="My child">My child</option>
                          <option value="Another dependent">Another dependent</option>
                        </select>
                      ) : (
                        <input
                          value={form[key] || ''}
                          onChange={(e) => handleFieldChange(key, e.target.value)}
                          style={styles.input}
                        />
                      )
                    ) : (
                      <p style={styles.fieldValue}>{item[key] || '—'}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {editing && (
            <div style={styles.editActions}>
              <button onClick={handleCancelEdit} style={styles.secondaryBtn} disabled={saving}>Cancel</button>
              <button onClick={handleSave} style={styles.primaryBtn} disabled={saving}>{saving ? 'Saving…' : 'Save Changes'}</button>
            </div>
          )}

          <div style={styles.divider} />
          <div style={styles.fieldsGrid}>
            <div style={styles.field}>
              <span style={styles.sectionLabel}>Source Page</span>
              <p style={styles.fieldValue}>{item.source || '—'}</p>
            </div>
            <div style={styles.field}>
              <span style={styles.sectionLabel}>Last Updated</span>
              <p style={styles.fieldValue}>{new Date(item.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {confirmDelete && (
        <div style={styles.modalOverlay} onClick={() => !deleting && setConfirmDelete(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>Delete this lead?</h3>
            <p style={styles.modalText}>
              This will permanently remove {item.name || item.email} from your submissions. This cannot be undone.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => setConfirmDelete(false)} style={styles.secondaryBtn} disabled={deleting}>Cancel</button>
              <button onClick={handleDelete} style={styles.dangerBtn} disabled={deleting}>{deleting ? 'Deleting…' : 'Delete Permanently'}</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
  page: { minHeight: '100vh', background: '#f5f6f9', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' },
  topbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 2rem', background: '#fff', borderBottom: '1px solid #eceef2' },
  logoLink: { display: 'flex', alignItems: 'center' },
  logo: { height: 40, width: 'auto', display: 'block' },
  logoutBtn: { padding: '0.55rem 1.1rem', borderRadius: 8, border: '1px solid #d7dae0', background: '#fff', color: '#374151', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' },
  container: { maxWidth: 900, margin: '0 auto', padding: '2rem' },
  backLink: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1d6fd6', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1.25rem' },
  titleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' },
  heading: { margin: 0, fontSize: '1.7rem', fontWeight: 800, color: '#12151f' },
  subheading: { margin: '0.35rem 0 0', fontSize: '0.9rem', color: '#6b7280' },
  headerActions: { display: 'flex', gap: '0.6rem' },
  error: { color: '#c0392b', marginBottom: '1rem' },
  card: { background: '#fff', borderRadius: 14, border: '1px solid #e6e8ec', boxShadow: '0 1px 3px rgba(16,24,40,0.04)', padding: '1.75rem' },
  cardSection: { display: 'flex', flexDirection: 'column', gap: '0.6rem' },
  sectionLabel: { fontSize: '0.78rem', color: '#8a90a0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' },
  statusRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' },
  statusPill: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.85rem', borderRadius: 999, fontSize: '0.85rem', fontWeight: 600 },
  statusDot: { width: 6, height: 6, borderRadius: '50%' },
  statusButtons: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' },
  statusBtn: { padding: '0.45rem 0.9rem', borderRadius: 8, border: '1px solid #d7dae0', background: '#fff', color: '#374151', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' },
  statusBtnActive: { padding: '0.45rem 0.9rem', borderRadius: 8, border: '1px solid #1d6fd6', background: '#eaf1fd', color: '#1d6fd6', fontSize: '0.82rem', fontWeight: 600, cursor: 'default' },
  divider: { height: 1, background: '#eef0f3', margin: '1.5rem 0' },
  fieldsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  fieldFull: { display: 'flex', flexDirection: 'column', gap: '0.4rem', gridColumn: '1 / -1' },
  fieldValue: { margin: 0, fontSize: '0.95rem', color: '#20242e', whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  input: { padding: '0.55rem 0.75rem', borderRadius: 8, border: '1px solid #d7dae0', fontSize: '0.9rem', color: '#20242e' },
  textarea: { padding: '0.55rem 0.75rem', borderRadius: 8, border: '1px solid #d7dae0', fontSize: '0.9rem', color: '#20242e', resize: 'vertical', fontFamily: 'inherit' },
  editActions: { display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginTop: '1.5rem' },
  primaryBtn: { padding: '0.6rem 1.3rem', borderRadius: 9, border: 'none', background: '#1d6fd6', color: '#fff', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' },
  secondaryBtn: { padding: '0.6rem 1.3rem', borderRadius: 9, border: '1px solid #d7dae0', background: '#fff', color: '#374151', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' },
  dangerBtn: { padding: '0.6rem 1.3rem', borderRadius: 9, border: '1px solid #f0b4ac', background: '#fdecea', color: '#c0392b', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' },
  emptyState: { padding: '3rem', textAlign: 'center', color: '#8a90a0' },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(15,18,26,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' },
  modal: { background: '#fff', borderRadius: 14, padding: '1.75rem', maxWidth: 420, width: '100%', boxShadow: '0 20px 50px rgba(16,24,40,0.25)' },
  modalTitle: { margin: '0 0 0.6rem', fontSize: '1.15rem', fontWeight: 800, color: '#12151f' },
  modalText: { margin: '0 0 1.4rem', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.5 },
  modalActions: { display: 'flex', justifyContent: 'flex-end', gap: '0.6rem' },
};
