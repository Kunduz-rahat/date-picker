import { useMemo, useState } from "react";

interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}
const months = [
  "January",
  "Febriary",
  "March",
  "April",
  "May",
  "June",
  "Jule",
  "August",
  "Seprember",
  "Octomber",
  "November",
  "December",
];
interface DataCellItem {
  day: number;
  month: number;
  year: number;
}
const getDaysAmountInMonth = (year: number, month: number) => {
  const nextMonthDay = new Date(year, month + 1, 1);
  //mutates the date object
  nextMonthDay.setMinutes(-1);
  return nextMonthDay.getDate();
};
export const DatePicker = ({ value, onChange, min, max }: DatePickerProps) => {
  const [panelYear] = useState(() => value.getFullYear());
  const [panelMonth] = useState(() => value.getMonth());
  const [year, month, day] = useMemo(() => {
    const currentYear = value.getFullYear();
    const currentDay = value.getDate();
    const currentMonth = months[value.getMonth()];
    return [currentDay, currentMonth, currentYear];
  }, [value]);

  const getPrevMonthDays = () => {};

  const getNextMonthDays = () => {};
  
  const getCurrentMonthDays = (
    year: number,
    month: number,
    numberOfDays: number
  ) => {
    const dateCells: DataCellItem[] = [];
    for (let i = 1; i < numberOfDays; i++) {
      dateCells.push({ year, month, day: i });
    }
    return dateCells;
  };
  const dateCells = useMemo(() => {
    const items: DataCellItem[] = [];
    const daysInAMonth = getDaysAmountInMonth(panelYear, panelMonth);
    console.log(daysInAMonth);
    return items;
  }, [panelMonth, panelYear]);

  const onDateSelect = () => {};

  const nextYear = () => {};

  const prevYear = () => {};

  const nextMonth = () => {};

  const prevMonth = () => {};

  return (
    <div>
      <div>
        {day}
        {month}
        {year}
      </div>
    </div>
  );
};

export default DatePicker;
