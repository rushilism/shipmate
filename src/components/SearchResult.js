import React from 'react'
import location from '../assets/location.svg';
import plane from '../assets/Vector.svg'
import { ServicesData as data } from '../data';
import { Rate } from 'antd';
import { Link } from 'react-router-dom';



const SearchResult = () => {



  return (
    <>
     <div className='search-result' >
      {data.map((datas) => (
       

          <div className='service-result my-3' key={datas.id} >

            <div className='service-left'>
              <div className='status' style={{marginBottom:'15px'}}>
                <p className='best-value'><div className='circle'></div>{datas.value}</p>
                <p className='Express'>{datas.speed}</p>
                <div className='sl'></div>
                <p className='time'>{datas.time}</p>
              </div>
              <div className='status my-2'>
                <p className='route'><img className='mx-1' style={{ width: '16px' }} alt='' src={location} />{datas.from}</p>
                <div className='hl mx-2'></div>
                <img alt='' src={plane} />
                <div className='hl mx-2'></div>
                <p className='route'><img className='mx-1' style={{ width: '16px' }} alt='' src={location} />{datas.to}</p>
              </div>
              <div className='status'>
                <p className='route1'> <img className='mx-1' style={{ width: '20px', height: '15px' }} alt='' src={datas.sellerImg} /> {datas.seller}</p>

                <Rate className='mx-2 padding-bottom-10' style={{ color: '#6F57E9' }} disabled defaultValue={datas.rating} />

              </div>
            </div>
            <div className='vll'></div>
            <div className='right-service'>
              <p className='service-price my-1'>{datas.priceUSA}</p>
             <Link to={'/booking'}> <button className='select-btn'>Select</button> </Link> 
              <p className='view-details my-1'>View details</p>
            </div>
          </div>

       
      ))
      }
      </div>
    </>
  )
}

export default SearchResult
