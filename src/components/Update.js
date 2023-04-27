import React, { useState } from 'react';
import {  ConfigProvider, Steps } from 'antd';
import Booking from '../pages/Booking';
const Update = ({current, setCurrent}) => {
 

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <>
    <ConfigProvider
         theme={{
                token: {
                  colorPrimary: '#D3B0FF',
                  
                },
                }}
    >
 <div className='update'>
        <div className='step'>
              
      <Steps
        labelPlacement='vertical'
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Search'
          },
          {
            title: 'Results'
          },
          {
            title: 'Booking'
          },
        ]}
      />
      </div>
      </div>
      </ConfigProvider>
    </>
  );
};

export default Update;
