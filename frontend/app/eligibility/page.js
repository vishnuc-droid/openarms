'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12.5 9 18 20 6" /></svg>
);
const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);

function EligibilityForm() {
  const searchParams = useSearchParams();
  const insurance = searchParams.get('insurance') || '';
  const isPrivatePay = insurance === 'Private Pay';

  const [form, setForm] = useState({
    dob: '',
    servicesFor: '',
    parentGuardianName: '',
    relationshipToClient: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    memberId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const showDependentFields = form.servicesFor === 'My child' || form.servicesFor === 'Another dependent';

  if (submitted) {
    return (
      <div className="oa-contact-success">
        <span className="oa-contact-success-icon"><IconCheck /></span>
        <h3>You&rsquo;re All Set</h3>
        <p>Thank you for sharing this information. Our team will use it to help confirm eligibility and follow up with you soon.</p>
      </div>
    );
  }

  return (
    <form className="oa-contact-form" onSubmit={handleSubmit}>
      <label className="oa-contact-field"><span>Date of Birth*</span><input type="date" name="dob" value={form.dob} onChange={handleChange} required /></label>

      <label className="oa-contact-field"><span>Who are services for?*</span>
        <select name="servicesFor" value={form.servicesFor} onChange={handleChange} required>
          <option value="" disabled>Select an option</option>
          <option value="Myself">Myself</option>
          <option value="My child">My child</option>
          <option value="Another dependent">Another dependent</option>
        </select>
      </label>

      {showDependentFields && (
        <div className="oa-contact-form-row">
          <label className="oa-contact-field"><span>Parent/Guardian Name*</span><input name="parentGuardianName" value={form.parentGuardianName} onChange={handleChange} required /></label>
          <label className="oa-contact-field"><span>Relationship to Client*</span><input name="relationshipToClient" value={form.relationshipToClient} onChange={handleChange} required /></label>
        </div>
      )}

      <label className="oa-contact-field"><span>Physical Address*</span><input name="address" value={form.address} onChange={handleChange} required /></label>

      <div className="oa-contact-form-row">
        <label className="oa-contact-field"><span>City*</span><input name="city" value={form.city} onChange={handleChange} required /></label>
        <label className="oa-contact-field"><span>State*</span><input name="state" value={form.state} onChange={handleChange} required /></label>
      </div>

      <label className="oa-contact-field"><span>ZIP Code*</span><input name="zip" value={form.zip} onChange={handleChange} required /></label>

      {!isPrivatePay && (
        <label className="oa-contact-field"><span>Insurance / Medicaid Member ID</span><input name="memberId" value={form.memberId} onChange={handleChange} /></label>
      )}

      <button type="submit" className="fs-btn fs-req-btn-primary oa-contact-submit">
        <IconSend />
        Submit
      </button>
    </form>
  );
}

export default function EligibilityPage() {
  return (
    <main className="fs-page">
      <section className="oa-connect-section oa-eligibility-section">
        <div className="fs-container" style={{ maxWidth: 640 }}>
          <div className="oa-connect-form-card">
            <h1 className="oa-eligibility-heading">Thank You for Connecting With Open Arms</h1>
            <p className="oa-eligibility-sub">To help us confirm eligibility and prepare for your visit, please complete the information below.</p>
            <Suspense fallback={null}><EligibilityForm /></Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
