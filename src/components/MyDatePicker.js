import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="">
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 px-4 py-2 rounded-md w-full datepicker"
      />
    </div>
  );
};

export default MyDatePicker;
