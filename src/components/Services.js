import React from 'react'
import { Data as services} from '../data';


const Services = () => {
    return (
        <div className='services'>
            <p className='service-header'>Services</p>
            <div className='row'>
                {services.map((data) => (
                    <div className='service mx-2 col-lg-3' key={data.id}>
                    <span className='serivice-top'>
                        <img alt='' src={data.imgUrl} />
                        <p className='service-title mx-3 my-2'>{data.title}</p> 
                    </span>
                    <span className='line'></span>
                    <p className='service-content'>{data.content}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Services
