import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div className='service-container text-center'>
            
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>Name :{name}</button>
        </div>
    );
};

export default Service;