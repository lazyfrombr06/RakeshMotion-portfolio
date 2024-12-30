import { React, useRef } from "react";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowDown  } from "react-icons/fa";

import { FaWhatsapp,FaXTwitter,FaInstagram,FaSquareYoutube,FaLinkedinIn   } from "react-icons/fa6";

import sloka_clint from './media/sloka.jpeg'
import yeBook from './media/yebook.jpeg'
import unaccademy from './media/unacademy.avif'
import vichitra4u from './media/vichitra4u.jpeg'
import Rakeshmotion from './media/rakeshMotion.jpg'
import Rcrtificate from './media/rakesh ertificate.pdf'


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollRef = useRef(null);
  return (
    <>
     <motion.div className="progress-bar" style={{ scaleX }} />
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div id="main">
          <div className="inner">
            <div id="container01" className="style2 container default">
              <div className="wrapper">
                <div className="inner" data-onvisible-trigger="1">
                  <p id="text01" className="style4">
                  My expertise lies in Content Edits and Motion Graphics
                  </p>
                  <h1 id="text69" className="style2">
                    Rakesh Motion
                  </h1>
                  <p id="text73" className="style1">
                    <span className="p">
                      Generated over 30 million views for my clients!
                    </span>
                  </p>
                  <ul id="buttons03" className="style1 buttons">
                    <li>
                      <a href="#one" className="button n01">
                        <span className="label">Hire Me!</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr id="divider05" className="style1 full screen" />
            <div
              id="container02"
              data-scroll-id="one"
              data-scroll-behavior="center"
              data-scroll-offset="0"
              data-scroll-speed="3"
              data-scroll-invisible="1"
              className="style1 container default"
            >
              <div className="wrapper" id="one">
                <div className="inner" data-onvisible-trigger="1">
                  <div id="image01" className="image">
                    <span className="frame">
                      <img src={Rakeshmotion} alt="" />
                    </span>
                  </div>
                  <h3 id="text04" className="style7">
                    About MySelf
                  </h3>
                  <p id="text07" className="style1">
                    <span className="p">
                      I am a dynamic and enthusiastic college student dedicated
                      to ​pursuing a degree in communications. My fervor lies in
                      the ​realms of motion graphics and video editing.
                    </span>
                    <span className="p">
                      Through out my dedicated 1+ year of experiences in video
                      editing. I have had the privilege of working with more
                      than 35+ Clients around the World. So if you are looking
                      to build your audience by engaging videos. So reach out me
                      through Dm and "Lets build your content together."
                    </span> <br />
                    <span className="certificateofrakeshgorai">You can check my certifcate: <a href={Rcrtificate} className="Click-here-for-certificate">Click here..</a></span>
                  </p>
                  <ul id="icons01" className="style2 icons">
                    <li>
                      <a className="n01" href="#four">
                        <FaArrowDown />
                        <span className="label">Arrow Down</span>
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 40 40"
                      >
                        <polygon
                          points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1"
                          vectorEffect="non-scaling-stroke"
                        ></polygon>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr id="divider04" className="style1 full screen" />
            <div
              id="container03"
              data-scroll-id="two"
              data-scroll-behavior="center"
              data-scroll-offset="0"
              data-scroll-speed="3"
              data-scroll-invisible="1"
              className="style1 container default"
            >
              <div className="wrapper">
                <div className="inner" data-onvisible-trigger="1">
                  <h3 id="text13" className="style7">
                    Long Form Editing
                  </h3>
                  <div id="video04" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube.com/embed/SrUJ4hiGYtQ?si=WUOagNxvYIuzFg_5"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <div id="video07" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube.com/embed/jh76vboaoWc?si=oh1fbLU3zN3HBSJ4"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <div id="video01" className="video">
                    <div className="frame">
                      <iframe
                        // src="https://www.youtube-nocookie.com/embed/WMquWKohkHQ?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        src="https://www.youtube.com/embed/drqDLNmihkw?si=TMWrZiqauxfEWso8"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <ul id="icons05" className="style2 icons">
                    <li>
                      <a className="n01" href="#four">
                        <FaArrowDown />
                        <span className="label">Arrow Down</span>
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 40 40"
                      >
                        <polygon
                          points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1"
                          vectorEffect="non-scaling-stroke"
                        ></polygon>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr id="divider01" className="style1 full screen" />
            <div
              id="container04"
              data-scroll-id="three"
              data-scroll-behavior="center"
              data-scroll-offset="0"
              data-scroll-speed="3"
              data-scroll-invisible="1"
              className="style1 container default"
            >
              <div className="wrapper">
                <div className="inner" data-onvisible-trigger="1">
                  <h3 id="text10" className="style7">
                    Short Form Editing
                  </h3>
                  <div id="video06" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/vIxA2dDfcz4?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <div id="video08" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/e8xQi_o2q5U?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <div id="video05" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/nmg0yTrGJL8?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>

                  <ul
                    id="icons02"
                    className="style2 icons"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <li>
                      <a className="n01" href="#four">
                        <FaArrowDown />
                        <span className="label">Arrow Down</span>
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 40 40"
                      >
                        <polygon
                          points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1"
                          vectorEffect="non-scaling-stroke"
                        ></polygon>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


{/* my clints */}
<hr id="divider08" className="style1 full screen" />

        <h2 id="text11" className="style3">
            Clients I have worked with
          </h2>
          <div
            id="container09"
            className="style6 container columns full screen"
          >
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger={1}>
                <a href="https://www.instagram.com/shlloka/">
                  <div
                    id="image02"
                    className="style11 image"
                    data-position="center"
                  >
                    <span className="frame">
                      <img src={sloka_clint} alt="" />
                    </span>
                  </div>
                  <p id="text17" className="style11">
                  Shlloka Joshii - <u>57.2K followers</u>
                  </p>
                </a>
                <a href="https://www.instagram.com/payalineurope/?hl=en">
                  <div
                    id="image04"
                    className="style12 image"
                    data-position="center"
                  >
                    <span className="frame">
                      <img src={yeBook} alt="" />
                    </span>
                  </div>
                  <p id="text15" className="style10 style11">
                  yebook- <u>97.5K followers</u>
                  </p>
                </a>
              </div>
            </div>
        </div>
       
        {/* second container clint */}
        <div
            id="container09"
            className="style6 container columns full screen"
          >
            <div className="wrapper">
              <div className="inner" data-onvisible-trigger={1}>
               
                <a href="https://www.youtube.com/@Vichitra4u">
                  <div
                    id="image04"
                    className="style12 image"
                    data-position="center"
                  >
                    <span className="frame">
                      <img src={vichitra4u} alt="" />
                    </span>
                  </div>
                  <p id="text15" className="style10 style11">
                  Vichitra 4u- <u>4.47M subscribers</u>
                  </p>
                </a>

                <a href="https://www.instagram.com/shlloka/">
                  <div
                    id="image02"
                    className="style11 image"
                    data-position="center"
                  >
                    <span className="frame">
                      <img src={unaccademy} alt="" />
                    </span>
                  </div>
                  <p id="text17" className="style11">
                  Unacademy - <u>917K followers</u>
                  </p>
                </a>
              </div>
            </div>
        </div>

{/* my clints end cont. */}







            <hr id="divider08" className="style1 full screen" />
            {/* <div
              id="container05"
              data-scroll-id="four"
              data-scroll-behavior="previous"
              data-scroll-offset="0"
              data-scroll-speed="3"
              data-scroll-invisible="1"
              className="style1 container default"
            >
              <div className="wrapper">
                <div className="inner" data-onvisible-trigger="1">
                  <p id="text20" className="style4">
                    My clients
                  </p>
                  <h2 id="text31" className="style2">
                    Testimonials
                  </h2>
                  <p id="text46" className="style1">
                    Here's what my clients said about my services and what type
                    of experience they have with me and my services. Making
                    Client satisfiy is my first priority.
                  </p>
                  <div id="gallery01" className="style1 gallery">
                    <div className="inner">
                      <ul>
                        <li>
                          <a
                            href="assets/images/gallery01/5a134f88_original.jpg?v=c5049fd8"
                            className="thumbnail n01"
                          >
                            <span className="frame">
                              <img
                                src="assets/images/gallery01/5a134f88.jpg?v=c5049fd8"
                                alt="Faucibus nisl tincidunt"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/images/gallery01/6b3765dc_original.jpg?v=c5049fd8"
                            className="thumbnail n02"
                          >
                            <span className="frame">
                              <img
                                src="assets/images/gallery01/6b3765dc.jpg?v=c5049fd8"
                                alt="Sit amet commodo"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/images/gallery01/9b924881_original.jpg?v=c5049fd8"
                            className="thumbnail n03"
                          >
                            <span className="frame">
                              <img
                                src="assets/images/gallery01/9b924881.jpg?v=c5049fd8"
                                alt="Elementum curabitur"
                              />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="assets/images/gallery01/7b91a975_original.jpg?v=c5049fd8"
                            className="thumbnail n04"
                          >
                            <span className="frame">
                              <img
                                src="assets/images/gallery01/7b91a975.jpg?v=c5049fd8"
                                alt="Magna aliquam dolor"
                              />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="video02" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/-sC0AgbZq-s?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                  <div id="video03" className="video">
                    <div className="frame">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/wDoNS62wmSI?autoplay=0&rel=0&loop=0&controls=1&cc_load_policy=0"
                        allowfullscreen="1"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* testemenials are commented because there is nothing to add yet */}

            <p id="text20" className="style13">
              ⭐⭐⭐⭐⭐
            </p>
            <p id="text12" className="style8">
              <u>- Client</u>
            </p>
            <h2 id="text03" className="style7">
              <span style={{ color: "#E2E2B6" }}>Rakesh</span> is the guy..."
            </h2>
            <ul id="buttons03" className="style6 buttons">
              <li>
                <a href="https://wa.me/918709591361" className="button n01 whatsapp-msg-me-a-tag">
                < FaWhatsapp className="fawhatsappmsgme" /> 
                  <span className="label">Message me</span>
                </a>
              </li>
            </ul>
            <br />
            <br />

            <ul id="icons04" className="style2 icons">
              <li>
                <a className="n01" href="#four">
                  <FaArrowDown />
                  <span className="label">Arrow Down</span>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <polygon
                    points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1"
                    vectorEffect="non-scaling-stroke"
                  ></polygon>
                </svg>
              </li>
            </ul>
            {/* <hr id="divider09" className="style1 full screen" /> */}
            {/* <div
              id="container06"
              data-scroll-id="five"
              data-scroll-behavior="center"
              data-scroll-offset="0"
              data-scroll-speed="3"
              data-scroll-invisible="1"
              className="style1 container default"
            >
              <div className="wrapper">
                <div className="inner" data-onvisible-trigger="1">
                  <p id="text16" className="style4">
                    Editing Prices
                  </p>
                  <h2 id="text09" className="style2">
                    Premium
                  </h2>
                  <h3 id="text03" className="style7">
                    $80
                  </h3>
                  <p id="text89" className="style1">
                    <span className="p">
                      So for this premium package a client should have a raw
                      footage, branding assets and script ( ensure 100 accuracy
                      in the caption) so we both are ready for project.
                    </span>
                    <span className="p">
                      The quality of edits you will get in this pack is uploaded
                      above!
                    </span>
                  </p>
                  <div id="list02" className="style1 list">
                    <ul>
                      <li>
                        <p>3d Animations & Motion Graphics</p>
                      </li>
                      <li>
                        <p>Color Grading</p>
                      </li>
                      <li>
                        <p>Sound Designing & Transitions</p>
                      </li>
                      <li>
                        <p>3 Revsions & 1 day delivery time</p>
                      </li>
                    </ul>
                  </div>
                  <ul id="buttons02" className="style1 buttons">
                    <li>
                      <a
                        href="https://www.instagram.com/mohi.visuals?igsh=MWttc25vZ3Y5c2FkcQ=="
                        className="button n01"
                      >
                        <span className="label">Order now</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/mohi.visuals?igsh=MWttc25vZ3Y5c2FkcQ=="
                        className="button n02"
                      >
                        <span className="label">More Details</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <hr id="divider03" className="style1 full screen" />
            <ul id="icons03" className="style1 icons">
  <li style={{ opacity: 1, transform: 'none' }}>
    <a className="n01" href="https://x.com/Rakeshmotions?t=-Huu6yks0iB14NeDPDlz-Q&s=08">
      <FaXTwitter/>
      <span className="label">Twitter</span>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <polygon points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1" vectorEffect="non-scaling-stroke"></polygon>
    </svg>
  </li>
  <li style={{ opacity: 1, transform: 'none' }}>
    <a className="n02" href="https://www.instagram.com/rakesh.motion/">
      <FaInstagram />
      <span className="label">Instagram</span>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <polygon points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1" vectorEffect="non-scaling-stroke"></polygon>
    </svg>
  </li>
  <li style={{ opacity: 1, transform: 'none' }}>
    <a className="n03" href="https://youtube.com/shorts/vIxA2dDfcz4?si=m3Xu_JmTJCXaGhy9">
      <FaSquareYoutube />
      <span className="label">YouTube</span>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <polygon points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1" vectorEffect="non-scaling-stroke"></polygon>
    </svg>
  </li>
  <li style={{ opacity: 1, transform: 'none' }}>
    <a className="n04" href="https://www.linkedin.com/in/rakesh-gorai-b8480a326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <FaLinkedinIn />
      <span className="label">Linkedin</span>
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
      <polygon points="3.6,10.5 3.6,29.5 20,39 36.4,29.5 36.4,10.5 20,1" vectorEffect="non-scaling-stroke"></polygon>
    </svg>
  </li>
</ul>

            <p id="text05" className="style3">
              © rakeshmotion. All rights reserved.
            </p>
            <div id="credits" className="icc-credits">
              <span>
                <a href="https://brajesh.tech" target="_blank" rel="noreferrer">Website developed by Brajesh Thakur. Visit brajesh.tech for more projects</a>
              </span>
            </div> 
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
}

export default App;
