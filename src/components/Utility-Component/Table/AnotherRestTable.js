import react from 'react';

const AnotherRestTable = ({ defaultValue, options, total, value }) => {

    return (
        <table className='my-2'>
            <tbody>
                {options?.map((singleSize, i) => {

                    return (
                        <tr key={i}>
                            {defaultValue[singleSize] ? <td>{singleSize.toUpperCase()} : </td> : ''}
                            {defaultValue[singleSize] ?
                                <td>
                                    <td
                                        className='border w-20 bg-gray-200 text-center'
                                        name={singleSize}
                                    >
                                        {defaultValue[singleSize]}

                                    </td>
                                </td>:''}


                        </tr>
                    );
                })}
                <tr>
                    <td >Total : </td>
                    {
                        total ?
                            <td className="font-bold"> {isNaN(total) ? 0: total}</td>
                            :
                            <td className="font-bold"> NO Qty Left</td>
                    }

                </tr>
            </tbody>
        </table>
    )
};
export default AnotherRestTable;