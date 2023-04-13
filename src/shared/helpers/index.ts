export const DAYS: { value: string }[] = [];

for (let i = 1; i <= 31; i++) {
  DAYS.push({ value: i.toString() });
}

export const YEARS: { value: string }[] = [];

for (let i = new Date().getFullYear(); i >= 1900; i--) {
  YEARS.push({ value: i.toString() });
}

const getMonthNumber = (monthAbbreviation: string) => {
  const monthAbbreviations = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthIndex = monthAbbreviations.indexOf(monthAbbreviation);

  return monthIndex + 1;
};

export const calculateAge = (birthdate: {
  month: string;
  day: any;
  year: any;
}) => {
  const { month, day, year } = birthdate;
  const monthNumber = getMonthNumber(month);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - year;

  if (
    currentMonth < monthNumber ||
    (currentMonth === monthNumber && currentDay < day)
  ) {
    age--;
  }

  return age;
};
