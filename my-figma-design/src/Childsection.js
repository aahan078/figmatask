import React from 'react'
import '../src/child.css'
import childimg from '../src/images/Image 4.png'

export default function Childsection() {
  return (

    <div className='container'>
    
        <div className='d-flex justify-content-around  childbox--1'>
            <h4 className='mt-5'>Do you want to know more about
                Child Cancer Foundation?
                <br/>
                <span className='sub-h4'>You can read more here</span> </h4>
<img src={childimg} alt='image'></img>
        </div>
    
    </div>
  )
}
