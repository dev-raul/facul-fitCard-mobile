import { parseISO, format } from 'date-fns'

export function formatDate(date) {
  const dateIso = parseISO(date);
  return format(dateIso, 'dd/MM/yyyy');
}