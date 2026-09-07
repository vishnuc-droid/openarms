export default function AppointmentStepIndicator({ step }) {
  return (
    <div className="oa-step-indicator" role="note" aria-label={`Step ${step} of 2`}>
      <span className={`oa-step-indicator-badge${step === 1 ? ' oa-step-indicator-badge--active' : ''}`}>1</span>
      <span className="oa-step-indicator-label">
        {step === 1 ? 'Step 1 of 2 – Appointment Request' : 'Step 2 of 2 – Eligibility Information'}
      </span>
      <span className={`oa-step-indicator-badge${step === 2 ? ' oa-step-indicator-badge--active' : ''}`}>2</span>
    </div>
  );
}
