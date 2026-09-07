const path = require('path');
const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const LOGO_CID = 'oa-logo';
const LOGO_PATH = path.join(__dirname, '..', '..', '..', 'frontend', 'public', 'images', 'logo-full.png');

// Simple inline icons (as small circular badges) per field label — purely cosmetic, safe to extend.
const FIELD_ICONS = {
  Name: '&#128100;',
  Email: '&#9993;',
  Phone: '&#128222;',
  Service: '&#9877;',
  'Payment/Insurance': '&#128737;',
  'Preferred Contact Method': '&#128172;',
  Message: '&#128172;',
  'Date of Birth': '&#127874;',
  'Services For': '&#128101;',
  'Parent/Guardian': '&#128100;',
  Address: '&#127968;',
  'Insurance/Medicaid Member ID': '&#128179;',
};

function buildNotificationHtml({ heading, intro, rows, footerNote }) {
  const rowsHtml = rows
    .filter((row) => row)
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eef0f3;width:34px;vertical-align:top;">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#eaf1fd;font-size:14px;">${FIELD_ICONS[label] || '&#8226;'}</span>
          </td>
          <td style="padding:12px 8px;border-bottom:1px solid #eef0f3;font-size:12.5px;font-weight:700;color:#5b6b73;width:170px;vertical-align:middle;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px 12px 8px;border-bottom:1px solid #eef0f3;font-size:14.5px;color:#20242e;vertical-align:middle;">${escapeHtml(value) || '—'}</td>
        </tr>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#eef2f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 18px rgba(16,24,40,0.08);">
            <tr>
              <td style="padding:26px 28px 20px;text-align:center;">
                <img src="cid:${LOGO_CID}" alt="Open Arms Initiative" height="42" style="display:inline-block;height:42px;width:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="background:linear-gradient(135deg,#0170ED 0%,#00AFF7 100%);padding:22px 28px;">
                <h1 style="margin:0 0 4px;font-size:20px;font-weight:800;color:#ffffff;">${escapeHtml(heading)}</h1>
                <p style="margin:0;font-size:13.5px;color:rgba(255,255,255,0.9);line-height:1.5;">${escapeHtml(intro)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 12px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            ${footerNote ? `
            <tr>
              <td style="padding:0 28px 24px;">
                <p style="margin:0;font-size:12.5px;color:#9aa1b0;font-style:italic;">${escapeHtml(footerNote)}</p>
              </td>
            </tr>` : '<tr><td style="padding-bottom:8px;"></td></tr>'}
          </table>
          <p style="margin:18px 0 0;font-size:11.5px;color:#9aa5b1;">Automated notification from the Open Arms Initiative website.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendTeamNotification({ subject, text, html }) {
  const to = process.env.TEAM_NOTIFICATION_EMAIL;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const t = getTransporter();

  if (!t || !to) {
    console.warn('[mailer] Skipping notification — SMTP or TEAM_NOTIFICATION_EMAIL not configured:', subject);
    return;
  }

  try {
    await t.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments: html ? [{ filename: 'logo-full.png', path: LOGO_PATH, cid: LOGO_CID }] : [],
    });
  } catch (err) {
    console.error('[mailer] Failed to send notification:', err.message);
  }
}

module.exports = { sendTeamNotification, buildNotificationHtml };
