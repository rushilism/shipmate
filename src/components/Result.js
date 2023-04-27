import { ConfigProvider, Radio } from 'antd'
import React from 'react'
import Features from './Features'
import SearchResult from './SearchResult'

const Result = () => {
    return (
        <>
        <hr/>
        <div className='bottom'>
           
           <Features /> 
            <div className='selectors'>

                <div className='selector-div'>
                    <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off" />
                    <label className="btn btn-secondary" for="option1" id="option1" >Best Value 5-5 days. $3,121</label>

                    <input type="radio" className="btn-check select-btn" name="options" id="option2" autocomplete="off" />
                    <label className="btn btn-secondary" for="option2" id="option2" >Quickest 5-5 days. $3,121</label>


                    <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off" />
                    <label className="btn btn-secondary" for="option3" id="option3" >Cheapest 5-5 days. $3,121</label>
                </div>
                <SearchResult />

            </div>
          
        </div>
        
        </>
    )
}

export default Result
