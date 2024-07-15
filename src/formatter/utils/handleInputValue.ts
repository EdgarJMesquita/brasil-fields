export function handleInputValue(value: any): string {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value?.target?.value === 'string') {
    return value.target.value;
  }
  return value;
}
