import React from "react";
import cover from "../images/about.png";
import white from "../images/white.png";
import "../Pages/about.css";
import toy from '../images/Tvilling.png'

export default function Aboutchabil() {
  return (
    <div className="container">
      <div className="about-cover-img">
        <img src={cover}></img>
      </div>

      <div className="container  about-txt-area">
        <h4 className="text-center about-h4-txt">About ChaBil</h4>
        <div className="row text-center gx-5 p-5 ">
          <div className="col-lg-6 col-sm-12 mt-2 about-p-txt">
            <p>
              <p>Being a parent is for many the ultimate change in life. We
                celebrate the beauty of childhood, in its perfect imperfect way.
                In life </p>
              <p>we need to embrace all the ups and downs – they
                will all become part of us, and our memories.</p>
              <p>Memories come in many diverse ways. Some we would like not
                to think about, and others we love to bring back to life and
                celebrate them.</p>
              <p>Childhood should be filled with lots of love and great
                memories, and we must always be curious and have dreams for our
                future.</p>

              <div className="with-love-txt">
                With love <br />
                Stine Richardt
                <br /> Founder and owner of ChaBil
              </div>
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 mt-2 about-p-txt">

            <p>Creating ChaBil is part of my dream. A dream about creating high
              quality designs and products that embrace life and childhood.</p>

            <p>For all my life I have embraced the creative aspects, and
              they have been unfolding since my early days. I am born and raised
              in Copenhagen (Denmark) but lived 9 years in New Zealand. At that
              time, I graduated from Christchurch Design School.</p>
            <p>After my time in New Zealand, I collected lots of
              inspiration from New York, where I lived for more than two years.
              Now we are back in New Zealand, but this time as family. Being a
              mom now gives me the opportunity to use my creativity in a
              different way, and to create unique signature designs and
              versatile products, that hopefully will become a memory of your
              life, or the memory of your little ones.</p>


          </div>
        </div>
      </div>

      <div className="container white-ele">
        <div className="row text-center gx-5  p-5">
          <div className="col-lg-6 col-sm-12">
            <img src={white} alt="animal"></img>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h4 className="ele-h4">From idea to life</h4>
            <p className="ele-p-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.<br /> <br /> Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <br /> <br /> Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-img-area--1">
        <div className="bg-txt--1">
          <h4>
            A star has been born, and we wish you a fantastic journey in life …
          </h4>
        </div>

      </div>

      <div className="container toy-area">
        
         <div className="row gx-5 gy-2  p-5 ">
          <div className="col-lg-6  col-sm-12">
            <div className="abt-txt-area--2">
              <h4>Inspiration & Vision</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            
          </div>
          <div className="col-lg-6  col-sm-12 abt-toy">
          <img src={toy} alt="toy"></img>
          </div>
        </div></div>
       
      
    </div>
  )
}
