import React from 'react';

const Heading = ({heading}) => {
    return (
        <>
            <h1 className="text-3xl my-4 text-center">{heading}</h1>
            <div className="divider"></div> 
            </>
    );
};

export default Heading;