import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Space } from 'antd';
const Features = () => {
    return (
        <Space id='space'>

            <div className='features'>


                <h6 className='feature-p mx-5 my-2'><b>3 Top Quote</b><p className='mx-2' id='unbold'>(6 in Total)</p></h6>
                <span className='f-span'>
                    <h6 className='feature-p mx-5 my-4'><b>Filters</b></h6>
                    <DownOutlined className='f-icon' />
                </span>
                <span className='f-span'>
                    <h6 className='feature-p mx-5 my-4'><b>Price</b></h6>
                    <DownOutlined className='f-icon' />
                </span>
                <span className='f-span'>
                    <h6 className='feature-p mx-5 my-4'><b>Seller</b></h6>
                    <DownOutlined className='f-icon' />
                </span>
                <span className='f-span'>
                    <h6 className='feature-p mx-5 my-4'><b>Modes</b></h6>
                    <DownOutlined className='f-icon' />
                </span>


            </div>
        </Space>
    )
}

export default Features
