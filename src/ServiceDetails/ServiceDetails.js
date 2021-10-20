import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const [service, setService] = useState([])

    useEffect(() =>{
        fetch("./services.JSON")
        .then(res => res.json())
        .then(data =>setService(data))
    })
    return (
        <div className="container py-5">
        <h2 className="my-3">HOW CAN WE HELP YOU?</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {
                service.map(service=><SingleService
                key={service.key}
                service={service}
                
                ></SingleService>)
            }
        </div>
       
        
    </div>
    );
};

export default ServiceDetails;
