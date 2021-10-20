import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const {key,name,img,description} = props.service
    return (
        <div >
            <div className="">
                <div className="col">
                    <div className="card service shadow">
                        <img className="p-3 card-img-top" src={img}  alt="..."/>
                        <div className="card-body">
                            <h5> {name}</h5>
                            <p className="card-text">{description}</p>
                            <Link to={`/details/${key}`}><button className="info_btn2">Details</button></Link>
                            
                        </div>                        
                    </div>
                </div> 
            </div>                     
        </div>
    );
};

export default SingleService;