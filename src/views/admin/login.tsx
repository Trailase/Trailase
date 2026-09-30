'use client';

import { Lock } from 'lucide-react';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type LoginState, login } from '@/lib/server/admin-actions';

const initialState: LoginState = { error: null };

export function AdminLogin({ configured }: { configured: boolean }) {
  const [state, action, pending] = useActionState(login, initialState);
  const error = configured
    ? state.error
    : 'Admin access is not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD.';

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-sm items-center px-4 py-16">
      <Card className="w-full">
        <CardHeader>
          <Lock className="mb-2 size-5 text-primary" aria-hidden />
          <CardTitle className="text-xl">Admin sign in</CardTitle>
          <CardDescription>Restricted area.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" autoComplete="username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
            {error ? (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            ) : null}
            <Button type="submit" className="w-full" disabled={pending || !configured}>
              {pending ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
