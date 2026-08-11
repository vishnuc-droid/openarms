import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Open Arms Initiative | Mental Health & Family Support in Oklahoma City',
  description: 'Open Arms Initiative offers expert mental health counseling, trauma-informed care, foster care support, and family therapy in Oklahoma City. Get compassionate care today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
