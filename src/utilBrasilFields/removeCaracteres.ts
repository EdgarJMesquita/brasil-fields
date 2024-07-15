export function removeCaracteres(value: string) {
  return value.replace(/[^a-zA-Z\d]/g, '');
}
