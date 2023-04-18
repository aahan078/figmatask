import React from 'react'
import '../src/section2.css'
import '../src/section1.css'
import  animal from '../src/images/Vadder.png'
import animal2 from '../src/images/jomfru.png'
import animal3 from '../src/images/Love1.png'
import animal4 from '../src/images/Fisk.png'
import animal5 from '../src/images/Tvilling.png'
import animal6 from '../src/images/krebs.png'
import animal7 from '../src/images/skytte.png'
import animal8 from '../src/images/vandmand.png'
import animal9 from '../src/images/Vadder.png'
import animal10 from '../src/images/jomfru.png'
import animal11 from '../src/images/Love1.png'
import animal12 from '../src/images/Fisk.png'

export default function Section2() {
  return (
    <div>
        <div className='container'>
 <div className='container box--1 p-2'>
                
                <h4 className='h4-txt h4-txt--2 mt-2'>“Signs of the Zodiac” Collection</h4>
                <p id='p-txt--1' >“Signs of the Zodiac” Collection” is a story about 12 amazing characters - each with their own strong personality.
                Our inspiration to this series of baby teethers comes from the Western astrology, and the zodiac signs are named after the constellations of ancient Greece.
                
                {/* <details><summary>Show more</summary>
                <p>

The collection is proudly produced from own illustrations, and the material is 100% natural rubber and
100% sustainable and biodegradable. Each character is carefully hand-painted and presented in the most
beautiful box with colorful illustrations, which forever will decorate the children’s room.

This is not just another baby teether! This is a piece of art, and will be a beautiful memory from the
childhood.

On the inside of each box, you will find a heartwarming poem - uniquely written for the little new star
in the family.

We wish you a fantastic journey in life.</p>
                </details> */}
 

</p>

<button className='btn--1'>Shop Now</button>



</div>

<div className="container img-box--1">
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
      <div className='img-box--2'>
        <img src={animal} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal2} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal3} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal4} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal5} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal6} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal7} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal8} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal9} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2 ">
    <div className='img-box--2'>
        <img src={animal10} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12  gy-2 ">
    <div className='img-box--2'>
        <img src={animal11} alt='animals'></img>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12 gy-2">
    <div className='img-box--2'>
        <img src={animal12} alt='animals'></img>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}
