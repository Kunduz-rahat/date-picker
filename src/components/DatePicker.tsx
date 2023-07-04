import React from "react";

interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}
export const DatePicker = ({ value, onChange, min, max }: DatePickerProps) => {
  return <div>DatePicker</div>;
};

export default DatePicker;
