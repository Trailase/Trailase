export function errorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.cause && typeof error.cause === 'object') {
    const cause = error.cause as { error?: unknown };
    if (typeof cause.error === 'string') return cause.error;
  }
  return fallback;
}

export function isNotFound(error: unknown) {
  return errorMessage(error, '').toLowerCase().includes('not found');
}
