import react, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react';
import SizeTable from './SizeTable';
import RestTable from './RestTable';
import { ViewContextProvider } from '../../../../contextApi/ViewContext';
import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';
import { totalCount } from '../../../../CustomHooks/totalCounting';
import { useDispatch, useSelector } from 'react-redux';
import { calculateGrandDeliveryAndRestTotal, pushingDetailOfDeliveryOrder } from '../../../../../Redux/Features/DELIVERY_TABLE/deliverytable';

const intialSizes = { XS: 0, XXS: 0, S: 0, L: 0, M: 0, XL: 0, XXL: 0,XXXL:0, lwhSize: 0, singleInput: 0 }
const DetailTable = ({ poDetails, isCheacked, }) => {
  const { sizeName,} = useContext(ViewContextProvider)
  //redux delivery size
  const [sizes, setSizes] = useState({ XS: 0, XXS: 0, S: 0, L: 0, M: 0, XL: 0, XXL: 0,XXXL:0, lwhSize: 0, singleInput: 0 })
  const [totalOrder, setTotalOrder] = useState({})
  const [restObject, setRestObject] = useState()
  const [value, setValue] = useState(0)
  const dispatchRedux = useDispatch()

  const [keyName, setkeyName] = useState('')
  const { style, colorName, size, restSize, deliverySize, totalQuantity, restQuantity, deliveryStyleId } = poDetails
  useDocumentTitle('Order Details')

  let { restSize: rest = {}, size: sized, totalQuantity: totalSizes, colorName: color, sizeName: NameOfSize, style: styleName, deliveryStyleId: deliveryId = {} } = poDetails
  //  first mount it will push the objects in by size of poDetails data. if there 3 poDetail it will push 3 if 4 it will push 4
  useEffect(() => {
    const newObj = {
      colorName: color,
      style: styleName,
      sizeName: NameOfSize,
      restSize: {},
      deliverySize: sizes,
      size: sized,
      deliveryQuantity: 0,
      restQuantity: 0,
      totalQuantity: totalSizes,
      deliveryStyleId: deliveryId
    }
    dispatchRedux(pushingDetailOfDeliveryOrder(newObj))
  }, [poDetails])

  // redux step
  useEffect(() => {
    let restObj = {}
    if (restSize && restQuantity !== 0) {
      restObj = Object.keys(intialSizes).reduce((prevObj, keys) => {
        prevObj[keys] = (rest[keys] || 0) - (sizes[keys] || 0)
        if (isNaN(prevObj[keys])) {
          prevObj[keys] = 0;
        }
        return prevObj;
      }, {});
    }
    const newObj = {
      colorName: color,
      style: styleName,
      sizeName: NameOfSize,
      restSize: restObj,
      deliverySize: sizes,
      size: sized,
      deliveryQuantity: totalCount(sizes),
      restQuantity: totalCount(restObj),
      totalQuantity: totalSizes,
      deliveryStyleId: deliveryId
    }
    setTotalOrder(newObj)
    dispatchRedux(pushingDetailOfDeliveryOrder(newObj))
    dispatchRedux(calculateGrandDeliveryAndRestTotal())
  }, [sizes, setTotalOrder])

  // Alert if Quantity is bigger than the Rest
  useEffect(() => {
    const objKeys = Object.keys(sizes)
   
    if(restSize){
      const findKey = objKeys?.find(item => item === keyName)
      if (value > restSize[findKey]) {
        alert('You are giving more From the rest value ')
      }
    }
  }, [sizes, value, keyName])

  const handleDeliveryChange = useCallback((e) => {
    setValue(e.target.value)
    setkeyName(e.target.name)
    setSizes((oldSizes) => {
      return { ...oldSizes, [e.target.name]: parseFloat(e.target.value) }
    })
  }
    , [])

  let restTable
  if (!poDetails.restSize) {
    restTable = 'NO REST QUANTITY LEFT'
  }
  // console.log(totalOrder)
  if (poDetails.restSize  && totalOrder?.restSize) {
    restTable =
      <>
        <RestTable
          options={sizeName}
          defaultValue={totalOrder?.restSize}
          total={totalOrder?.restQuantity}
        ></RestTable>
      </>
  }
  return (
    <tr className='w-full'>
      <td className='border px-2 text-2xl text-bold  w-32' >
        <p>{style}</p>
      </td>
      <td className='border  w-66'>
        {poDetails?.sizeName ?

          <textarea
            type='text'
            className='text-md p-2 h-16 w-full overflow-hidden border border-md'
            name='sizeName'
            defaultValue={poDetails?.sizeName}
          ></textarea> :
          <textarea
            type='text'
            className='text-md p-2 h-16 w-full border overflow-hidden border-md'
            name='colorName'
            defaultValue={colorName}
          ></textarea>
        }

      </td>
      <td className='border w-48'>
        <SizeTable
          options={sizeName}
          defaultValue={poDetails?.size}
          total={totalQuantity}
        ></SizeTable>
      </td>
      <td className='border w-48'>
        <SizeTable
          options={sizeName}
          isCheacked={isCheacked}
          total={totalCount(sizes)}
          defaultValue={0}
          sizeChange={handleDeliveryChange}
        ></SizeTable>
      </td>
      <td className='border w-48'>
        {
          restTable
        }
      </td>

    </tr>


  )
};

export default DetailTable;