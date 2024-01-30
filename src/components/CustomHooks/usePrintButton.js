import react, { useState } from 'react';

const usePrintButton = () => {
    const [block, setBlock] = useState(false)
    const handlePrint = () => {
        setBlock(true)
        setTimeout(() => {
            window.print()
            setBlock(false)
        }, 10);

    }
    return {block,setBlock,handlePrint}
};
export default usePrintButton;