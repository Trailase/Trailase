import type { Metadata } from 'next';
import { loadAdminPage } from '@/lib/server/admin-page';
import { AdminDashboard } from '@/views/admin/dashboard';
import { AdminLogin } from '@/views/admin/login';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const page = await loadAdminPage();
  if (!page.authenticated) return <AdminLogin configured={page.configured} />;

  return <AdminDashboard name="Rodolfo Perez Tobar" stats={page.stats} system={page.system} />;
}
