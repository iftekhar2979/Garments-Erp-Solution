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
import { contextState, intialState, singleIntialState, UidGenarate } from './Reducer/intialState';
import { grandReducer, reducerFunction, singleStateFunction } from './Reducer/reducerFunction';
import RestTable from './RestTable';
import SizeTable from './SizeTable';

const ColorTable = ({ options,  isCheacked,  style }) => {
  let [colorStates, dispatch] = useReducer(reducerFunction, intialState);
  const [totalQuan, setTotalQuan] = useState();
 
  const { poState, contextDispatch, } = useContext(ViewContextProvider)
  const {
    totalQuantity,
    restSize,
    restQuantity,
    deliveryQuantity,
  } = colorStates;
//  const {sizeSystem}=poState
  useEffect(() => {
    dispatch({ type: 'STYLE', payload: style })
  }, [poState, style])
  // console.log(poState?.sizeSystem)
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
    colorStates.restSize = restObj
    setTotalQuan({ totalQuantity, deliveryQuantity })

  }, [colorStates.totalQuantity, totalQuantity, deliveryQuantity, colorStates.deliverySize, colorStates, setTotalQuan]);
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
  const deliverySizeChange = useCallback(
    (e) => {

      let values = e.target.value;
      if (isNaN(values)) {
        values = 0;
      }
      dispatch({
        type: 'DELIVERYSIZECHANGES',
        [e.target.name]: parseFloat(values),
        property: e.target.name,
      });

    }, [])

  useEffect(() => {
    if (isCheacked) {
      contextDispatch({ type: 'ADD_ON_CONTEXT', payload: colorStates })
      console.log(colorStates)

    } else {
      contextDispatch({ type: 'REMOVE_FROM_CONTEXT', payload: colorStates })
    }

  }, [isCheacked])

  return (
    <>
      <tr className='w-full'>
        <td className='border  w-48'>
          {
            poState?.sizeSystem==='L-W-H'?
            <textarea
            type='text'
            className='text-md p-2 h-16 w-full border border-md'
            name='sizeName'
            required
            onChange={(e) => dispatch({ type: 'SIZE_NAME', [e.target.name]: e.target.value, property: e.target.name })}
          ></textarea>
          :
          <textarea
            type='text'
            className='text-md p-2 h-16 w-full border border-md'
            name='colorName'
            required
            onChange={(e) => dispatch({ type: 'COLOR_NAME', [e.target.name]: e.target.value, property: e.target.name })}
          ></textarea>
          }
          
        </td>
        <td className='border w-48'>
          <SizeTable
            options={options}
            total={totalQuantity}
            defaultValue={''}
            sizeChange={sizeChange}
            isCheacked={isCheacked}
          ></SizeTable>

        </td>
        <td className='border w-48'>
          <SizeTable
            options={options}
            total={deliveryQuantity}
            sizeChange={deliverySizeChange}
            isCheacked={isCheacked}
            defaultValue={''}
          ></SizeTable>
        </td>

        <td className='border w-48'>
          <RestTable
            options={options}
            total={restQuantity}
            defaultValue={restSize}
          />
        </td>
        <td className='border w-24'>
          <input type="checkbox" className="checkbox"/>
        </td>
      </tr>

    </>
  );
};

export default ColorTable;
