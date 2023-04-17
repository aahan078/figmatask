import React from 'react'
import '../src/footer.css'
export default function Footer() {
  return (
    <div className='container-fluid foot-box'>
        
        <div className='container text-center foot-txt '>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12 gy-2  foot-boxes ' >
                    <h4 className='footer-h-txt'>Customer Service</h4>
                    <ul>
                        <li>
                        Terms & Conditions 
                        </li>
                        <li>
                        Shipping
                        </li>
                        <li>
                        Claims & Returns 
                        </li>
                        <li>
                        Cookie Policy
                        </li>

                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 gy-2 gx-2 foot-boxes ' >
                <h4 className='footer-h-txt'>Company</h4>
                    <ul>
                        <li>
                        ChaBil Limited
                        </li>
                        <li>
                        NZBN # 9429050733958
                        </li>
                        <li>
                        contact@chabil.co.nz
                        </li>
                        

                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 gy-2 gx-2  ' >
                <h4 className='footer-h-txt'> Follow use</h4>
                    <ul>
                        <li>
                        Instagram
                        </li>
                        <li>
                        Facebook
                        </li>
                        <li>
                        TikTok
                        </li>
                        

                    </ul>
                </div>
                
            </div>
          
        </div>
    </div>
  )
}
