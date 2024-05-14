import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
<<<<<<< HEAD
import { isEmptyObj, totalCount } from '../../../../CustomHooks/totalCounting';
import { contextState, intialState, singleIntialState, UidGenarate } from './Reducer/intialState';
import { grandReducer, reducerFunction, singleStateFunction } from './Reducer/reducerFunction';
import RestTable from './RestTable';
import SizeTable from './SizeTable';
import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';
import { useDispatch, useSelector } from 'react-redux';
import { changeSize, idGenerator, id_ColorName_SizeName_StyleChanging, restSizeChanging, sizeChanging, totalQuantityCalculation } from '../../../../../Redux/Features/Size-Calculation-Totals/sizeCalculationSlice';
import { pushSingleDetailsOfOrderDetails, calculateGrandTotalAndRestTotal } from '../../../../../Redux/Features/Order_Details/orderDetails';

const ColorTable = ({ options, isCheacked, style }) => {
  const { poState } = useContext(ViewContextProvider)
  let [colorStates, dispatch] = useReducer(reducerFunction, intialState);

  const { details = [] } = useSelector(state => state.orderDetails)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [idGenerate, setIdGernerate] = useState('')
  const [totalOrder, setTotalOrder] = useState({})
  const dispatchRedux = useDispatch()
  useDocumentTitle('Add Order Details')
  let inputRef = useRef()
  const [sizes, setSizes] = useState({})
  const [updated, setUpdated] = useState([]);

  let id_Color_Size_style

  useEffect(() => {
    const idGenerate = { id: UidGenarate() }
    const styles = { style: style }
    setIdGernerate(idGenerate)
    dispatchRedux(idGenerator(idGenerate))

  }, [])
  useEffect(() => {
    id_Color_Size_style = {
      style: style,
      sizeName: size,
      colorName: color,
      size: sizes,
      restSize: sizes,
      totalQuantity: totalCount(sizes),
      restQuantity: totalCount(sizes),
      deliveryStyleId:idGenerate?.id
    }
    id_Color_Size_style = { ...id_Color_Size_style, ...idGenerate }
    // console.log(id_Color_Size_style)
    setTotalOrder(id_Color_Size_style)
  }, [color, size, sizes])
  useEffect(() => {
    dispatchRedux(pushSingleDetailsOfOrderDetails(totalOrder))
    dispatchRedux(calculateGrandTotalAndRestTotal())

  }, [totalOrder])

=======
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
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
  //total quantities of size handle Change
  const sizeChange = useCallback(
    (e) => {
      let values = e.target.value;
<<<<<<< HEAD
      const sizeChange = {
        [e.target.name]: values
      }

      setSizes((oldSizes) => {
        return { ...oldSizes, [e.target.name]: parseFloat(values) }
      })

      dispatchRedux(calculateGrandTotalAndRestTotal())
      dispatchRedux(changeSize(sizeChange))
      dispatchRedux(restSizeChanging(sizeChange))
      dispatchRedux(totalQuantityCalculation())

    },
    [colorStates.totalQuantity]
  );
  // console.log(sizes)
  const handleInput = () => {
    setUpdated(inputRef.current.value.split(' '))
  }

  const handleValue = (e) => {
    setSize(e.target.value)
  }
  const handleColor = (e) => {
    setColor(e.target.value)


  }
  
  return (
    <>
      <tr className=''>
        <td className='border  w-72 px-2'>
          {
            poState?.sizeSystem === 'L-W-H' ?
              <textarea
                type='text'
                className='text-md p-2 h-16 w-full border border-md'
                name='sizeName'

                required
                onChange={(e) => handleValue(e)}
              ></textarea>
              :
              <textarea
                type='text'
                className='text-md p-2 h-16 w-full border border-md'
                name='colorName'
                required
                onChange={(e) => handleColor(e)}
              ></textarea>
          }

        </td>
        {poState?.cartoonSticker &&
          <td className='w-48 px-2'>
            <textarea type='text'
              className='text-md p-2 h-16 w-full border border-md'
              name='poNumber'
              required
              onChange={(e) => dispatch({ type: 'PO_NUMBER', payload: e.target.value })}
            ></textarea>


          </td>}

        <td className='border w-52 px-2'>

          <SizeTable
            options={options}
            total={totalCount(sizes)}
            defaultValue={''}
            sizeChange={sizeChange}
            isCheacked={isCheacked}
            classNames={'size'}
            copied={updated}
          ></SizeTable>

        </td>
        <td className='border w-52 px-2'>
          <RestTable
            options={options}
            total={totalCount(sizes)}
            defaultValue={sizes}
          />
        </td>

      </tr>

=======
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
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    </>
  );
};

export default ColorTable;
