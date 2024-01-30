import react, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDeliveryStatementMutation, useGetSinglePiStatementQuery } from '../../../../../Redux/Features/api/apiSlice';
import Spinner from '../../../../Utility-Component/Spinner';
import { format } from 'date-fns';
import PiValueList from './PiValueList';
import { UidGenarate } from '../../Orders/View PO/Reducer/intialState';
import TermsAndCondition from './TermsAndCondition';
import 'react-quill/dist/quill.snow.css';
import signature from '../../../../../Assets/IMG_4571.png'
import logo from '../../../../../Assets/ABC-Logo-2.png'
import axios from 'axios';
import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';
import MakingDollarConvert from '../../../../CustomHooks/Functions.js/numberToWord';


import DeliveryStatement from '../DeliveryStatement/DeliveryStatement';
const headings = [
    { heading: 'S.L.', class: "w-12 text-center b_b text-[9pt] text-black mx-2" },
    { heading: "Description Of Goods", class: "w-66 text-center b_b text-[9pt] text-black mx-2" },
    { heading: "Length x Width (CM)", class: "w-60 text-center b_b text-[9pt] text-black mx-2" },
    { heading: 'Color', class: "w-24 text-center b_b text-[9pt] text-black mx-2" },
    { heading: 'Size', class: "w-24 text-center b_b text-[9pt] text-black mx-2" },
    { heading: 'Quantity', class: "w-32 text-right b_b text-[9pt] text-black px-2" },
    { heading: 'Unit Price', class: "w-28 text-center b_b text-[9pt] text-black " },
    { heading: 'Total Amount', class: "w-44 text-center b_b text-[9pt] text-black mx-2" },
]
const lastBorder = [
    { heading: '', class: "w-16 text-center b_b text-[9pt] text-black mx-2" },
    { heading: "Total", class: "w-60 text-center b_b text-[9pt] text-black mx-2" },
    { heading: "", class: "w-56 text-center b_b text-[9pt] text-black mx-2" },
    { heading: '', class: "w-24 text-center b_b text-[9pt] text-black mx-2" },
    { heading: '', class: "w-24 text-center b_b text-[9pt] text-black mx-2" },
    { heading: 'Quantity', class: "w-32 text-right b_b text-[9pt] text-black px-2" },
    { heading: '', class: "w-28 text-center b_b text-[9pt] text-black mx-2" },
    { heading: 'Total Amount', class: "w-44 text-center b_b text-[9pt] text-black mx-2" },
]
const PiStatement = () => {
    const params = useParams()
    const [edit, setEdit] = useState(false)
    const [state, setState] = useState(headings)
    let [block, setBlock] = useState(false)
    const [deliveryStatement, setDeliveryStatement] = useState(false)
    const [lastBordered, setlastBordered] = useState(lastBorder)
    const { data: singlePi, isLoading, isError } = useGetSinglePiStatementQuery(params?.id, {
        refetchOnMountOrArgChange: true
    })
    const [getDeliveryStatement, { data: deliveryStat, isSuccess }] = useGetDeliveryStatementMutation()

    useDocumentTitle(`PI NUMBER :${singlePi?.piNumber}`)
    if (isLoading) {
        return <Spinner />
    }
    const { companyName = '', createdAt, location = '', piNumber, buyerName = '', piValue = [],tbNumbers=[], totalAmount = 0, totalQuantity, _id } = singlePi
    const handleDel = (index) => {
        let item = state.filter((item, i) => i !== index)
        let itemSecond = lastBordered.filter((item, i) => i !== index)
        if (index == 2) {
            item[1].class = 'w-[448px] text-center b_b text-[9pt] text-black mx-2'
        }
        if (index == 3) {
            item[1].class = `w-[368px] text-center b_b text-[9pt] text-black mx-2`
        } if (index == 4) {
            item[1].class = `w-[368px] text-center b_b text-[9pt] text-black mx-2`
        }
        if (item.length === 6) {
            item[1].class = 'w-[496px] text-center b_b text-[9pt] text-black mx-2'
        }
        if (item.length === 5) {
            item[1].class = 'w-[704px] text-center b_b text-[9pt] text-black mx-2'
        }
        setState(item)
        setlastBordered(itemSecond)
    }
    const handlePrint = () => {
        setBlock(true)
        setTimeout(() => {
            setBlock(false)
            window.print()
        }, 10);
    }
    const handleEditChange = (e) => {
        setTimeout(() => {
            axios.patch(`${process.env.REACT_APP_DEVELOPMENT_URL}/piName/${_id}`, { piNumber: e.target.value })
                .then(res => console.log(res.json))
                .catch(err => console.log(err))
        }, 800)
    }
    const handleDeliveryStatement = () => {
        setDeliveryStatement(!deliveryStatement)
        getDeliveryStatement([...tbNumbers])
    }
    return (
        <>
            <section className='backgroundWaterMark'>
            {!block &&  <>
             <input type="checkbox" className="toggle toggle-warning mt-4 ml-6" onClick={handleDeliveryStatement} /> 
             <span className={`relative bottom-2 left-2 rounded-md ${deliveryStatement?'bg-green-300':'bg-red-300'}`}>{deliveryStatement?'Delivery Statement':"Proforma Invoice"}</span>
             </>}
             {deliveryStatement && <DeliveryStatement deliveryStatement={deliveryStat} buyerName={buyerName} piNumber={singlePi?.piNumber}/>}
             {!deliveryStatement && 
             <> <div className='leading-4 text-black timesNewRoman'>
                    <div class="mx-2 flex">
                        <img src={logo} alt="" class="h-20 " />
                        <div className='flex flex-col justify-center ml-4'>
                            <h2 className='text-center text-3xl font-bold  font-MonoSerit piHeading' >The ABC Sourcing And International</h2>
                            <h5 className='text-center text-xl font-bold piHeading timesNewRoman'>An Unique Trims Solution</h5>
                        </div>

                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: 'black', marginBottom: '2px' }}></div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
                    <div className='text-center text-xl  italic font-semibold  underline underLineOffset calibri'>Proforma Invoice <span style={{ width: '153px', height: '1px', backgroundColor: 'black' }}></span></div>
                    <div className='flex justify-between mt-2'>
                        <h2 class="mx-2 flex">Date <span className='ml-10'>: {format(new Date(createdAt), 'dd-MM-yyyy')}</span> </h2>
                        {!edit ? <h2 class="" onClick={() => setEdit(true)}>PI Number : {piNumber}</h2> : <div className=''>PI Number : <input type='text' defaultValue={piNumber} onBlur={handleEditChange} /></div>}
                    </div>
                    <div class="ml-2 ">To <span className='ml-[49px]'>: {companyName}</span>
                    </div>
                    <div class="ml-2 ">Address <span className='ml-[13px]'>: {location}</span>
                    </div>
                    <div class="ml-2 ">Buyer <span className='ml-[27px]'>: {buyerName}</span>
                    </div>
                    <div class="ml-2 ">Season <span className='ml-[21px]'>: </span>
                    </div>
                </div>
                <div>
                    <table class="my-2 mx-2 b_b calibri" contentEditable='true'> 
                        <thead class="border">
                            {
                                state?.map((itemName, index) => {
                                    return (<th className={itemName.class} >{itemName.heading}
                                        <span className={`${block && 'hidden'} hover:bg-red-600 ml-6 cursor-pointer `} onClick={() => handleDel(index)}>X</span>
                                    </th>)
                                })
                            }
                        </thead>
                        <tbody>
                         
                            {
                                piValue?.map((item, i) =>{
                                    const { productName, color, totalQuantity, amount, perPics, size = '', length = '' } = item
                                    return (
                                        <>
                                        <tr class="border text-black"  >
                                            {
                                                state?.map((itemName, index) => {
                                                    const { heading } = itemName
                                                    switch (heading) {
                                                        case 'S.L.':
                                                            return <td className={itemName.class} >{i + 1}</td>
                                                            break;
                                                        case 'Description Of Goods':
                            
                                                            return <td className={itemName.class} >{productName}</td>
                                                            break;
                                                        case 'Length x Width (CM)':
                                                            return <td className={itemName.class} >{length}</td>
                                                            break;
                                                        case 'Color':
                                                            return <td className={itemName.class} >{color}</td>
                                                            break;
                                                        case 'Size':
                                                            return <td className={itemName.class} >{size}</td>
                                                            break;
                                                        case 'Quantity':
                                                            return <><td className={itemName.class} >
                                                                {totalQuantity}
                            
                                                            </td>
                                                            </>
                                                            break;
                                                        case 'Unit Price':
                                                            return <td className={itemName.class} ><p className='flex justify-between mx-2'><span >$</span> <span>{perPics}</span></p></td>
                                                            break;
                                                        case 'Total Amount':
                                                            return <td className={itemName.class} ><p className='flex justify-between mx-2'><span >$</span> <span>{amount}</span></p></td>
                                                            break;
                                                        default:
                                                            return <td className={itemName.class} >{itemName.heading}</td>
                                                            break;
                                                    }
                            
                            
                                                })
                                            }
                                         
                                        </tr>
                                    </>
                                    )
                                })
                            }
                            <tr class="border">
                                {
                                    lastBordered?.map(itemName => {
                                        if (itemName.heading === 'Quantity') {
                                            return <th className={itemName.class} style={{marginLeft:'0.5rem'}}>{totalQuantity}</th>
                                        }
                                        if (itemName.heading === 'Total Amount') {
                                            return <th className={itemName.class}><p className='flex justify-between mx-2'><span className='font-normal'>$</span> <span>{totalAmount.toFixed(2)}</span></p></th>

                                        }
                                        return (<th className={itemName.class}>{itemName.heading}</th>)
                                    })
                                }
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2 class="mx-2 font-semibold text-[8pt] text-black italic">( In Words: US DOLLAR {MakingDollarConvert(totalAmount)?.toUpperCase()} ONLY )</h2>
                <h2 class="mx-2 font-semibold underline text-[12pt] underLineOffset text-black mx-2">Terms And Condition </h2>

                <TermsAndCondition />
                </>
             }
                <div className='text-right'>
                    <button className={`${block && 'hidden'} btn btn-primary `} onClick={handlePrint}>Print this out!</button>
                </div>
            </section>
            {!deliveryStatement && <footer class="w-full pt-4">
                <div className='flex justify-between '>
                    <div >
                        <p className='text-[8pt] text-black'>Client Acceptance</p>
                        <p className='text-[7pt]  mt-14 text-black'>Authorised Signature</p>

                    </div>
                    <div className='text-[7pt] m-0'>
                        <p className='text-[8pt] text-black'>The ABC Sourcing & International</p>
                        <ul>
                            <img src={signature} alt="" className=' relative right-8' />
                            <li className='text-center text-black'>Authorised Signature</li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
                <div class="container mx-auto text-center text-black mx-2">
                    <p className='text-center piHeading  font-semibold '>Mobile : 01906-297660, 01906-2997661 Mail : store@theabcsi.com</p>
                    <p className='text-center piHeading font-semibold'>Rajabari Road, Konabari, Gazipur</p>
                </div>
            </footer>}

        </>

    )
};
export default PiStatement;