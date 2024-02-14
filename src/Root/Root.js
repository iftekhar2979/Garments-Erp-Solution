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

export default Root;