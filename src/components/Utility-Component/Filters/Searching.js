import react, { useState } from 'react';
import { HiSearch } from "react-icons/hi";
const Searching = ({handleSearch,placeholder}) => {
  const [text,setText]=useState('')
  const handleKeyPress=(event)=>{
    if (event.key === 'Enter') {
     handleSearch(text)
    }
  }
 
    return (
        <div className="mb-3 flex justify-center mt-6 mx-4">
  <div className="relative mb-4 flex w-[200px] flex-wrap items-stretch justify-center">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder={placeholder}
      onChange={(e)=>setText(e.target.value)}
      onKeyPress={handleKeyPress} 
      />

   
    <button onClick={()=>handleSearch(text)} type='submit' className='hover:text-white hover:bg-green-400 w-8'>
    <HiSearch size={30}/>
    </button>
  </div>
</div>
    )
};
export default Searching;