const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function submitForm(payload) {
  const res = await fetch(`${API_URL}/api/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || 'Something went wrong. Please try again.');
  }
  return res.json();
}

export async function adminLogin(email, password) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || 'Login failed.');
  }
  return res.json();
}

export async function fetchSubmissions(token, { service, status, page = 1, limit = 25 } = {}) {
  const params = new URLSearchParams();
  if (service) params.set('service', service);
  if (status) params.set('status', status);
  params.set('page', page);
  params.set('limit', limit);

  const res = await fetch(`${API_URL}/api/submissions?${params.toString()}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 401) {
    throw new Error('UNAUTHORIZED');
  }
  if (!res.ok) throw new Error('Failed to load submissions.');
  return res.json();
}

export async function updateSubmissionStatus(token, id, status) {
  const res = await fetch(`${API_URL}/api/submissions/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update status.');
  return res.json();
}

export { API_URL };
