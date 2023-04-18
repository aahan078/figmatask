import React from 'react'
import '../src/newslater.css'

export default function Newslatter() {
  return (
    <div className='container'>
        <div className='p-5 newslater-box--1'>
        <div className=' news--txt'>
            <h4>Subscribe to our ChaBil newsletter</h4>
            <p>Sign up to our newsletter, and be the first to know. Receive information on new product releases,and read all the heartwarming stories from our ChaBil Cancer Foundation.</p>
        </div>
        <div className='p-2 news-inputs'>
            <input type='text' placeholder='name'></input>
            <input type='text' placeholder='email'></input>
            <span><button className=' btn--2'>Subscribe</button></span>
            
        </div>
        <div className='container news-checkbox '>
        <input type='checkbox'></input>
        <p>Yes, I would like to subscribe the the newsletter from ChaBil, and receive information about new product releases,
executive benfits, competitions and ChaBil Cancer Foundation. I can unsubscribe from the newsletter at any time.
<br/>
<br/>
We thank you for staying in contact with us. </p>
        </div>
       
        </div>
    </div>
  )
}
