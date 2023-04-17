import React from 'react'
import '../src/elephantbox.css'
import elephant from '../src/images/elephant.png'
import { Button } from 'react-bootstrap/Button';
import {AiFillHeart} from '../node_modules/react-icons/ai'



export default function Elephantbox() {
  return (
    <div className='container'>

<div className=" elephant-box--1 p-5">
  <div className="row">
    <div className="col-lg-6 col-sm-12">
    <img src={elephant} alt='animal'></img>
    </div>
    <div className="col mt-5 txt--2">
      <h4 className='h-txt--1'>Free shipping or support
      Child Cancer Foundation <span className='heart--1'><AiFillHeart/></span> </h4>
      <p className='mt-5 p-txt--1'>
      We want to make a difference to the ones, who need some
special attention and care. That’s why we have created the 
Child Cancer Foundation, and we support kids who have
been diagnosed with cancer.
<br/>
We are more than happy to provide you with a free shipping,
or you can support our Child Cancer Foundation as part of
your shipping costs.
      </p>

      <button className='btn--1'>Shop Now</button>
    </div>
  
  </div>
</div>
        


    </div>
  )
}
