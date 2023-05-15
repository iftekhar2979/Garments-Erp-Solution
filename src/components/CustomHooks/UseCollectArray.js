import { useState } from 'react';

const UseCollectArray = () => {
    const [val, setVal] = useState([Array(0)]);
  const handleAdd = (e) => {
    e.preventDefault();
    
    const valueArray = [...val, []];
    setVal(valueArray);
  };
  const handleChange = (onChangeValue, index) => {
    const inputData = [...val];
    inputData[index] = onChangeValue.target.value;
    setVal(inputData);
  };
  const handleRemove = (index) => {
    const deleteValue = [...val];
    deleteValue.splice(index, 1);
    setVal(deleteValue);
  };

return {handleAdd,handleChange,handleRemove,val,setVal}
};

export default UseCollectArray;