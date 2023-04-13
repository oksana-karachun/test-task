export const DAYS: { value: string }[] = [];

for (let i = 1; i <= 31; i++) {
  DAYS.push({ value: i.toString() });
}

export const YEARS: { value: string }[] = [];

for (let i = new Date().getFullYear(); i >= 1900; i--) {
  YEARS.push({ value: i.toString() });
}
