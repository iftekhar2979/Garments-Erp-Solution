import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const DateInput = ({label,selected,onSelect,defaultMonth}) => {

    return (
        <div className='my-4 shadow-sm'>
            <label className='label text-center text-xl '>{label}</label>
             <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      defaultMonth={defaultMonth}
   
      
    />
        </div>
    );
};

export default DateInput;