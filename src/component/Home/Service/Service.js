import React from 'react';

const Service = ({service}) => {
    const {name,img,description,price}=service;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="" />
            <p>{description}</p>
            <button>Name :{name}</button>
        </div>
    );
};

export default Service;