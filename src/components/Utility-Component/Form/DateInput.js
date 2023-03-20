import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const DateInput = ({label,selected,onSelect}) => {
    // const [selected, setSelected] = useState(new Date());
    // let footer = <p>Please pick a day.</p>;
    // if (selected) {
    //   footer = <p>You picked {format(selected, 'PP')}.</p>;
    // }
//    console.log(format(selected,'PP'))
    return (
        <div className='my-4 shadow-sm'>
            <label className='label text-center text-xl '>{label}</label>
             <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
   
      
    />
        </div>
    );
};

export default DateInput;