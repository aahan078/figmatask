import React from 'react'
import '../src/section1.css'
import cover from '../src/images/Cover Photo.png'
import shirt from '../src/images/shirt.png'
import sweater from '../src/images/sweater.png'
import pant from '../src/images/pant.png'

export default function Section1() {
  return (
    <div>
        <div className='container'>
            <img className='cover-img fluid' src={cover} alt='cover' ></img>
            <div className='container box--1 p-5'>
                
                <h4 className='h4-txt mt-2'>A star has been born</h4>
                <p >“We believe that childhood is a celebration, and the colorful prints and cute characters we design are inspired by the joy and love children bring into our lives. We celebrate childhood by supporting babies,children, and families with creative designs, quality materials and a sustainable vision for our newborn stars of the future”</p>
                </div>
                
                <div className='box--2 p-4'>
                <div className="container">
               <div className="row">
                <div className="col-lg-4 col-sm-12 gy-2">
                <div className='subbox--1 p-2'>
                    <div className='dashed-box'>
                     <img src={shirt} alt='shirt'></img>
                     <h4>All Natural</h4>
                     <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                 </div>
               <div className="col-lg-4 col-md-6 col-sm-12 gy-2">
               <div className='subbox--1 p-2'>
                    <div className='dashed-box'>
                     <img src={sweater} alt='shirt'></img>
                     <h4>Danish Design</h4>
                     <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                </div>
               <div className="col-lg-4 col-md-6 col-sm-12 gy-2">
               <div className='subbox--1 p-2'>
                    <div className='dashed-box'>
                     <img src={pant}  alt='shirt'></img>
                     <h4>Sustainable</h4>
                     <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
               </div>
               </div>
          </div>
                </div>
            </div>
        </div>
   

  )
}
