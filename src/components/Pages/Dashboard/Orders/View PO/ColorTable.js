import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import { totalCount } from '../../../../CustomHooks/totalCounting';
import InputDropDown from '../../../../Utility-Component/Form/InputDropDown';
import { intialState, UidGenarate } from './Reducer/intialState';
import { reducerFunction } from './Reducer/reducerFunction';
import RestTable from './RestTable';
import SizeTable from './SizeTable';

const ColorTable = ({ options, status,style }) => {
  let [colorStates, dispatch] = useReducer(reducerFunction, intialState);
  const [totalQuan, setTotalQuan] = useState();
  const [isCheacked,setisCheacked]=useState(false)
  const colorName = useRef();
  const adminNote = useRef();
  const {poState,context,contextDispatch}=useContext(ViewContextProvider)
  const {
    totalQuantity,
    restSize,
    restQuantity,
    deliveryQuantity,
  } = colorStates;
  useEffect(()=>{
    dispatch({type:'COMPLETE_DATE',payload:poState?.targetDate})
    dispatch({type:'STYLE',payload:style})
    
  },[poState,style])
  useEffect(() => {
    colorStates.totalQuantity = totalCount(colorStates.size);
    colorStates.id = UidGenarate()
    colorStates.deliveryQuantity = totalCount(colorStates.deliverySize);
    colorStates.restQuantity = totalCount(colorStates.restSize);
    let restObj = Object.keys(colorStates.size).reduce((prevObj, keys) => {
      prevObj[keys] = colorStates.size[keys] - colorStates.deliverySize[keys];
      if (isNaN(prevObj[keys])) {
        prevObj[keys] = 0;
      }
      return prevObj;
    }, {});
    colorStates.restSize=restObj
    setTotalQuan({totalQuantity,deliveryQuantity})
  }, [colorStates.totalQuantity,totalQuantity,deliveryQuantity, colorStates.deliverySize, colorStates,setTotalQuan]);
  //total quantities of size handle Change
  const sizeChange = useCallback(
    (e) => {
      let values = e.target.value;
      if (isNaN(values)) {
        values = 0;
      }
      dispatch({
        type: 'SIZECHANGES',
        [e.target.name]: parseFloat(values),
        property: e.target.name,
        totalQty: colorStates.totalQuantity,
      });
    },
    [colorStates.totalQuantity]
  );
  //delivery quantities of size handle Change
  const deliverySizeChange = (e) => {
    let values = e.target.value;
    if (isNaN(values)) {
      values = 0;
    }
    dispatch({
      type: 'DELIVERYSIZECHANGES',
      [e.target.name]: parseFloat(values),
      property: e.target.name,
    });
  };
  useEffect(()=>{
    if(isCheacked){
      contextDispatch({type:'ADD_ON_CONTEXT',payload:colorStates})
      
    }else{
      contextDispatch({type:'REMOVE_FROM_CONTEXT',payload:colorStates})
    }
  },[isCheacked])

  return (
    <>
      <tr className='w-full'>
        <td className='border  w-36'>
          <input
            type='text'
            className='text-md p-2 h-16 w-full border border-md'
            name='colorName'
            ref={colorName}
            onChange={(e)=>dispatch({type:'COLOR_NAME',[e.target.name]:e.target.value,property:e.target.name})}
          />
        </td>
        <td className='border w-36'>
          <SizeTable
            options={options}
            total={totalQuantity}
            defaultValue={0}
            sizeChange={sizeChange}
          ></SizeTable>
          
        </td>
        <td className='border w-36'>
          <SizeTable
            options={options}
            total={deliveryQuantity}
            sizeChange={deliverySizeChange}
            defaultValue={0}
          ></SizeTable>
        </td>

        <td className='border w-36'>
          <RestTable      
          options={options}
          total={restQuantity}
          defaultValue={restSize}
          />
        </td>
        <td className='border w-24'>
          <p>{poState?.targetDate}</p>
        </td>
        <td className='border w-24'>
          <textarea
            className='textarea textarea-bordered w-full'
            placeholder='admin Note'
            name='adminNote'
            ref={adminNote}
            onChange={(e)=>dispatch({type:'ADMIN_NOTE',[e.target.name]:e.target.value,property:e.target.name})}
          ></textarea>
        </td>
        <td className='border w-36 '>
          <InputDropDown
            sectionName={'status'}
            className='w-full'
            options={status}
            handleInputDropdown={(e)=>dispatch({type:'STATUS',[e.target.name]:e.target.value,property:e.target.name})}
            placeholder={'Status'}
          ></InputDropDown>
        </td>
        <td className='border w-16'>
        <input type="checkbox" checked={`${isCheacked?'checked':''}`} onChange={()=>setisCheacked(!isCheacked)} className="checkbox" />
        </td>
      </tr>
    </>
  );
};

export default ColorTable;
