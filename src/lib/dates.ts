/** A date like "21 Oct 2026" (Indian English), for articles and the legal pages. */
export const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
