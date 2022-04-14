import React from 'react';

const Footer = () => {
    const date = new Date()
    const year =date.getFullYear()

    return (
        <div>
           <p className='text-center mt-5'>copy right @  {year}</p>
        </div>
    );
};

export default Footer;