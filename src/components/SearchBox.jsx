import React from 'react';
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <>
         <div className="searchBox position-relative d-flex align-items-center"> 
            <IoMdSearch className='me-2'/>
            <input type="text" placeholder='Search here...' />
         </div>
        </>
    );
}
export default SearchBox