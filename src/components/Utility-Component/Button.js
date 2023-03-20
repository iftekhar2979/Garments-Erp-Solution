import React from 'react';

const Button = ({className,type,handleClick,children}) => {
    return (
        <div className='flex justify-center'>
            <button type={type} className={className} onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Button;