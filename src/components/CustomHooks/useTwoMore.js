import { useState } from 'react';

const UseCollectArray = () => {
    const [val, setVal] = useState([Array(0)]);
    const [quant, setQuant] = useState([Array(0)]);
      //totalQuantity,
  const [totalQuanity,setTotalQuantity]=useState(0)
  const handleAdd = (e) => {
    e.preventDefault();
    
    const valueArray = [...val, []];
    const quantArray = [...quant, []];
    setVal(valueArray);
    setQuant(quantArray)
  };
  const handleChange = (onChangeValue, index) => {
    const inputData = [...val];
    inputData[index] = onChangeValue.target.value;
    setVal(inputData);
  };
  const handleChangeOther = (onChangeValue, index) => {
    const inputData = [...quant];
    inputData[index] = parseFloat(onChangeValue.target.value);
    const totalQuantities=inputData.reduce((acc,cur)=>{
      return acc+cur
    },0)
   
    setTotalQuantity(totalQuantities)
    setQuant(inputData);
  };
  const handleRemove = (index) => {
    const deleteValue = [...val];
    deleteValue.splice(index, 1);
    setVal(deleteValue);
  };

return {handleAdd,handleChange,handleChangeOther,quant, handleRemove,val,setVal,totalQuanity}
};

export default UseCollectArray;