const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const parseDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return { year: parseInt(year), month: parseInt(month), day: parseInt(day) };
};

export const getNameOfMonth = (month: number) => MONTHS[month - 1];
