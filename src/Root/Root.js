<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import useDocumentTitle from '../components/CustomHooks/useDocumentTitle';
import Spinner from '../components/Utility-Component/Spinner';

const Root = () => {
    useDocumentTitle('ABC SOURCING AND INTERNATIONAL')
    // useDocumentTitle('XYZ SOURCING AND INTERNATIONAL')

return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>

    </>
);
}
=======
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className=''>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900

export default Root;