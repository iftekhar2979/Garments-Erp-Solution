import React, {
    useCallback,
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState
  } from 'react';
  import { ViewContextProvider } from '../../../../contextApi/ViewContext';
  import { isEmptyObj, totalCount } from '../../../../CustomHooks/totalCounting';
  import { contextState, intialState, singleIntialState, UidGenarate } from './Reducer/intialState';
  import { grandReducer, reducerFunction, singleStateFunction } from './Reducer/reducerFunction';
  import RestTable from './RestTable';
  import SizeTable from './SizeTable';
  import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';
  import { useDispatch, useSelector } from 'react-redux';
  import { changeSize, idGenerator, id_ColorName_SizeName_StyleChanging, restSizeChanging, sizeChanging, totalQuantityCalculation } from '../../../../../Redux/Features/Size-Calculation-Totals/sizeCalculationSlice';
  import { pushSingleDetailsOfOrderDetails, calculateGrandTotalAndRestTotal } from '../../../../../Redux/Features/Order_Details/orderDetails';
  
  const EditTable = ({ options, isCheacked, style }) => {
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
  
    //total quantities of size handle Change
    const sizeChange = useCallback(
      (e) => {
        let values = e.target.value;
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
  
      </>
    );
  };
  
  export default EditTable;
  