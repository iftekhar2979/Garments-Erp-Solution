import { useState } from 'react';

const UseCollectArray = () => {
    const [val, setVal] = useState([Array(0)]);
    const [quant, setQuant] = useState([Array(0)]);
      //totalQuantity,
  const [totalQuanity,setTotalQuantity]=useState(0)
  const handleAdd = (e) => {
    e.preventDefault();
    const valueArray = [...val, []];
   console.log('value',val)
    setVal(valueArray);
  
  };
  const handleSingleAdd=(e)=>{
    e.preventDefault();
    const quantArray = [...quant, []];
    console.log('quantArray',quantArray)
    setQuant(quantArray)
  }
  const handleSingleRemove = (e,index) => {
    e.preventDefault()
    const deleteValue = [...quant];
    console.log('deleteValue',deleteValue)
    deleteValue.splice(index, 1);
    setQuant(deleteValue);
  };
  const handleChange = (onChangeValue, index) => {
    const inputData = [...val];
    inputData[index] = onChangeValue.target.value;
    setVal(inputData);
  };
  const handleChangeOther = (onChangeValue, index) => {
    const inputData = [...quant];
    inputData[index] = onChangeValue.target.value;
    setQuant(inputData);
  };
  const handleRemove = (index) => {
    const deleteValue = [...val];
    deleteValue.splice(index, 1);
    setVal(deleteValue);
  };

return {handleAdd,handleChange,handleChangeOther,handleSingleAdd,handleSingleRemove,quant, handleRemove,val,setVal,totalQuanity}
};

export default UseCollectArray;