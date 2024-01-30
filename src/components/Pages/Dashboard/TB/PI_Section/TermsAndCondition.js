import react from 'react';
import signature from '../../../../../Assets/IMG_4571.png'
import './TermsAndCondition.css'
const TermsAndCondition = (props) => {
    return (
        <div className='mx-2 calibri '>
            <table >
                <tbody className='leading-3 text-black' contentEditable='true'>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt] leading-3">PI Value and Date </td>
                        <td><span class="font-semibold text-md">:</span>
                            <span class="text-[10pt] ml-[5px] ">30 days from the date of PI issue.</span>

                        </td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Product Name </td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">100% Export Oriented Garments Accessories.</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Delivery</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">1. Factory Standard Packing. 2. Partial Shipment Allowed.</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Origin</td>
                        <td><span class="font-semibold text-md">:</span> <span class="text-[10pt] ml-[5px] ">Bangladesh</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Quantity/Quality </td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">Any claim of goods regarding Quality & Quantity should be informed<br /> <span className='ml-[8px]'> within
                            05 (Five) days after delivery. No claim will be accepted after the said period.</span></span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Incoterms </td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">CPT</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt] ">Payment Method </td>
                        <td><span class="text-[10pt] text-md font-semibold">:</span>
                            <span className=' ml-[5px] text-[10pt]'>

                            LC issuing bank must be confirmed with advising bank payment will be made At Sight.
                                <br />
                                <span className='ml-[8px]'>
                                Interest must be paid from the expiry date of maturity date from opener's account.

                                </span>
                                <br />
                                <span className='ml-[8px]'>
                                Maturity date will be counted from the date of Delivery Challan signed by the client.

                                </span>
                               
                            </span>

                        </td>
                    </tr>

                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Other Charges </td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">Any discrepancy charges related with late acceptance of our submitted documents or
                            <br />
                            <span className='ml-[8px]'>
                                any other
                                reason caused from the openers end should be borne by the L/C opener.</span><br />
                            <span className='ml-[8px]'> The ABC Sourcing & International
                                will not bear any such charges. Moreover, 0.5% will be </span><br />
                            <span className='ml-[8px]'> charged per day on the L/C value as penalty which to
                                be paid by the L/C </span>
                            <br /> <span className='ml-[8px]'>opener in case of the late payment from the due date.</span></span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Shipment Mode </td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">By Delivery Truck/VAN</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Insurance</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px]  ">Covered by the buyer. For any bag that will be used to pack dark color garments ,<br/><span className='ml-[8px]'> please advise at the time of
                            placing the order,  that we can treat them accordingly </span> <br/><span className='ml-[8px]'> during our production,</span></span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">L/C Requirement</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px]">Expiry and Presentation should be At least - 21 days after the date  of shipment.<br/><span className='ml-[8px]'>
                            L/C to be opened as per the terms of this PI otherwise the full amendment</span><br/><span className='ml-[8px]'>
                            and advising charge to be paid by buyer.</span></span></td>
                    </tr>

                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">Advising Bank</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">JAMUNA BANK LTD, KONABARI BRANCH, KONABARI, GAZIPUR, BANGLADESH.<br/> <span className='ml-[8px]'>
                            SWIFT No : JAMUBDDHTFP , ACCOUNT NUMBER : 00160210022869</span></span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">H.S Code</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">6217.10.00 & 6305.33.00</span></td>
                    </tr>
                    <tr>
                        <td class="w-36 font-bold flex items-start text-[10pt]">BIN NO</td>
                        <td><span class="font-semibold text-md">:</span><span class="text-[10pt] ml-[5px] ">004500319-0103</span>
                        </td>
                    </tr>

                </tbody>
            </table>
           
            {/* <img src={signature} alt="" /> */}
        </div>

    )
};
export default TermsAndCondition;