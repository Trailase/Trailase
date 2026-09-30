import { Camera, CheckCircle2, ClipboardList, Clock, LogOut, TriangleAlert } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { logout } from '@/lib/server/admin-actions';
import type { InspectionStats } from '@/models/inspections/service';

type System = {
  nodeVersion: string;
  environment: string;
  appUrl: string;
  uptimeSeconds: number;
  contactEmail: boolean;
  bookingLink: boolean;
  indexable: boolean;
};

type Props = { name: string; stats: InspectionStats; system: System };

const dateTime = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'UTC',
});
const weekday = new Intl.DateTimeFormat('en', { weekday: 'short', timeZone: 'UTC' });

function formatUptime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export function AdminDashboard({ name, stats, system }: Props) {
  const tiles = [
    { label: 'Inspections', value: stats.total, icon: ClipboardList },
    { label: 'Pending', value: stats.pending, icon: Clock },
    {
      label: 'Completed',
      value: `${stats.completed} (${stats.completionRate}%)`,
      icon: CheckCircle2,
    },
    { label: 'Photos captured', value: stats.photos, icon: Camera },
    { label: 'Flagged areas', value: stats.flaggedAreas, icon: TriangleAlert },
  ];
  const peak = Math.max(1, ...stats.daily.map((day) => day.count));

  const checks = [
    { label: 'Contact form email', ok: system.contactEmail },
    { label: 'Booking link', ok: system.bookingLink },
    { label: 'Search indexing', ok: system.indexable },
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Admin</p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">
            Welcome back, {name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here's what's happening across Trailase.
          </p>
        </div>
        <form action={logout}>
          <Button type="submit" variant="outline" size="sm">
            <LogOut className="size-4" aria-hidden /> Sign out
          </Button>
        </form>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Key numbers">
        {tiles.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="p-5">
              <Icon className="size-4 text-muted-foreground" aria-hidden />
              <p className="mt-3 text-2xl font-semibold tabular-nums">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Inspections created, last 7 days</CardTitle>
            <CardDescription>UTC days, all operators.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex h-40 items-end gap-3">
              {stats.daily.map((day) => (
                <li
                  key={day.date}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-1"
                >
                  <span className="text-xs tabular-nums text-muted-foreground">{day.count}</span>
                  <div
                    className="w-full rounded-t bg-primary"
                    style={{ height: `${Math.max(day.count ? 6 : 2, (day.count / peak) * 100)}%` }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {weekday.format(new Date(`${day.date}T00:00:00Z`))}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System</CardTitle>
            <CardDescription>
              {system.environment} · Node {system.nodeVersion} · up{' '}
              {formatUptime(system.uptimeSeconds)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="truncate text-muted-foreground">{system.appUrl}</p>
            {checks.map(({ label, ok }) => (
              <div key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <Badge variant={ok ? 'default' : 'secondary'}>{ok ? 'On' : 'Off'}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent inspections</CardTitle>
          <CardDescription>
            Stored in memory, so this list resets whenever the server restarts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {stats.recent.length === 0 ? (
            <p className="text-sm text-muted-foreground">No inspections yet.</p>
          ) : (
            <ul className="divide-y">
              {stats.recent.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <div className="min-w-0">
                    <p className="truncate font-medium">{item.roomLabel}</p>
                    <p className="text-xs text-muted-foreground">
                      {dateTime.format(new Date(item.createdAt))} UTC · {item.photoCount} photos
                    </p>
                  </div>
                  <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                    {item.status}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
