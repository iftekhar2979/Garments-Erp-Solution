import react, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react';
import SizeTable from './SizeTable';
import RestTable from './RestTable';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import { UidGenarate, detailTableState } from './Reducer/intialState';
import { detailTableFunction } from './Reducer/reducerFunction';

const DetailTable = ({ poDetails, isCheacked, }) => {
  const { sizeName, detailContextDispatch, detailTableContext } = useContext(ViewContextProvider)
  const [totalRestNewSize, setTotalRestNewSize] = useState({})
  const [value, setValue] = useState(0)
  const [keyName, setkeyName] = useState('')
  const { style, colorName, size, restSize, deliverySize, totalQuantity,restQuantity } = poDetails
 
  const [detailTable, dispatch] = useReducer(detailTableFunction, detailTableState)
  console.log(restQuantity)
  useEffect(() => {
    dispatch({ type: 'REST_CHANGES', payload: restSize })
    dispatch({ type: 'SIZE_CHANGES', payload: size, totalQuantity: totalQuantity })
    dispatch({ type: 'COLOR_AND_STYLE_CHANGES', colorName: colorName,sizeName:poDetails.sizeName, style: style })
  }, [restSize, colorName,poDetails.sizeName, dispatch])

  useEffect(() => {
    let restObj = Object.keys(detailTable.deliverySize).reduce((prevObj, keys) => {
      prevObj[keys] = detailTable.oldrestSize[keys] - detailTable.deliverySize[keys];
      if (isNaN(prevObj[keys])) {
        prevObj[keys] = 0;
      }
      return prevObj;
    }, {});

    detailTable.restSize = restObj
    setTotalRestNewSize(restObj)
  }, [detailTable,])
  useLayoutEffect(() => {
    const del = Object.values(detailTable?.deliverySize)
    const newRest = Object.values(detailTable?.restSize)
    const reducedNewRest = newRest?.reduce((prev, cur) => prev + cur, 0)
    const reduceDelivery = del?.reduce((prev, cur) => prev + cur, 0)
    detailTable.deliveryQuantity = isNaN(reduceDelivery) ? 0 : reduceDelivery
    detailTable.restQuantity = reducedNewRest
    setTotalRestNewSize(newRest)
  }, [detailTable, detailTable?.restSize, detailTable?.deliverySize])

  useEffect(() => {
    const restSize = detailTable.oldrestSize
    const objKeys = Object.keys(restSize)
    const findKey = objKeys?.find(item => item === keyName)

    if (value > restSize[findKey]) {
      alert('You are giving more of the rest value')
    }
  }, [detailTable, value, keyName])
  const handleDeliveryChange = useCallback((e) => {
    setValue(e.target.value)
    setkeyName(e.target.name)
    dispatch({ type: 'DELIVERY_CHANGES', [e.target.name]: parseFloat(e.target.value), name: e.target.name, id: UidGenarate() })
  }, [detailTable.deliveryQuantity, detailContextDispatch])
  useEffect(() => {
    if (isCheacked) {
      detailContextDispatch({ type: 'COUNT_DETAIL_TABLE_DELIVERY_QUANTITY', payload: detailTable })

    } else {
      detailContextDispatch({ type: 'REMOVE_DETAIL_TABLE_DELIVERY_QUANTITY', payload: detailTable })
    }

  }, [isCheacked])
  return (
    <>
    {
      restQuantity ?

      <>
 <tr className='w-full'>
        <td className='border px-2  w-32' >
          <p>{style}</p>
        </td>
        <td className='border  w-66'>
          {poDetails?.sizeName ?
          
          <textarea
          type='text'
          className='text-md p-2 h-16 w-full border border-md'
          name='sizeName'
          defaultValue={poDetails?.sizeName}
        ></textarea>:
        <textarea
          type='text'
          className='text-md p-2 h-16 w-full border border-md'
          name='colorName'
          defaultValue={colorName}
        ></textarea>
        }
          
        </td>
        <td className='border w-48'>
          <SizeTable
            options={sizeName}
            defaultValue={size}
            total={totalQuantity}
          ></SizeTable>
        </td>
        <td className='border w-48'>
          <SizeTable
            options={sizeName}
            isCheacked={isCheacked}
            total={detailTable?.deliveryQuantity}
            defaultValue={0}
            sizeChange={handleDeliveryChange}
          ></SizeTable>
        </td>

        <td className='border w-48'>
          <RestTable
            options={sizeName}
            defaultValue={detailTable.restSize ? detailTable.restSize : restSize}
            total={detailTable.restQuantity ? detailTable.restQuantity : restSize}

          ></RestTable>
        </td>
      
      </tr>
    </>
    :<></>
    }
     </>

  )
};

export default DetailTable;