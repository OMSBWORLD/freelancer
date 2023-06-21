import React from 'react';
import '../src/Free.css'
import logo from '../src/assets/Payme.png'
import girl from '../src/assets/girl.png'
import planday from '../src/assets/planday.png'
import bright from '../src/assets/bright.png'
import pear from '../src/assets/pear.png'
import umbr from '../src/assets/umbr.png'
import star from '../src/assets/Star.png'
import man from '../src/assets/man.png'
import mstar from '../src/assets/mstar.png'
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import logo2 from '../src/assets/logo2.png'





 function Freee (){
    return(
        <div>
            <div className='main-parent'>
                <div className='main'>
                    <div className='nav-parent'>
                        <div className='nav'>
                            <div className='nav-one'>
                                <img src={logo}alt="" />
                                <a href="">Home</a><a href="">About</a><a href="">Testimonials</a><a href="">Contact</a> 
                            </div>
                            <div className='nav-two'>
                                <a href="">Sign in</a><a href=""><button>Sign up</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='one-parent'>
                        <div className='one'>
                                <div className='one-one-parent'>
                                    <div className='one-one'>
                                        <h1>Providing Best</h1>
                                        <h2>WEB Services</h2>
                                        <p> Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                                        <div className='b-parent'>
                                            <div className='b'><a href=""><button style={{background: '#25A4AD', color: '#ffffff', border: 'none', height: '40px', width: '120px'}}>Get Started</button ></a><a href=""><button style={{background: '#ffffff', color: '#25A4AD',border: '1px solid #25A4AD', height: '40px', width: '120px'}}>Explore</button></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='one-two'><img src={girl} alt="" /></div>
                        </div>
                    </div>
                    <div className='two-parent'>
                        <div className='two'>
                            <div className='plan'><img src={planday} alt="" /></div> <img src={umbr} alt="" /><img src={pear} alt="" /><img src={bright} alt="" /> <div className='plan'><img src={planday} alt="" /></div>
                        </div>
                    </div>
                    <div className='three-parent'>
                        <div className='three'>
                                <div><h3 style={{color: '#313131', fontSize: '50px',fontFamily: 'Gilroy-Thin'}} >Best </h3><h3 style={{color: '#25A4AD', fontSize: '50px',  fontFamily: 'Gilroy-SemiBold'}} >Services</h3></div>
                                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                        </div>
                    </div>
                    <div className='four-parent'>
                        <div className='four'>
                            <div className='four-one'>
                                <div className='four-one-one'>
                                        <h4 style={{color: '#ffffff',fontSize: '30px', width: '45%', textAlign: 'center'}}>Web Development</h4>
                                        <div className='img'><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
                                </div>
                                <div className='four-one-two'>
                                        <h4 style={{color: '#ffffff',fontSize: '30px', width: '30%', textAlign: 'center'}}> Web Designing</h4>
                                        <div className='img'><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
                                </div>
                            </div>
                            <div className='four-two'>
                                <div className='four-two-one'>
                                        <h4 style={{color: '#ffffff',fontSize: '30px', width: '45%', textAlign: 'center'}}>Database Management</h4>
                                        <div className='img'><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
                                </div>
                                <div className='four-two-two'>
                                        <h4 style={{color: '#ffffff',fontSize: '30px', width: '45%', textAlign: 'center'}}>SEO</h4>
                                        <div className='img'><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='five-parent'>
                        <div className='five'>
                                <a href=""><button>Explore All</button></a>
                        </div>
                    </div>
                    <div className='sp'>
                    <div className='three-parent'>
                        <div className='three'>
                                <div><h3 style={{color: '#313131', fontSize: '50px',fontFamily: 'Gilroy-Thin'}}>Our</h3><h3 style={{color: '#25A4AD', fontSize: '50px',  fontFamily: 'Gilroy-SemiBold'}}>Features</h3></div>
                                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                        </div>
                    </div>
                    <div className='six-parent'>
                        <div className='six'>
                            <div className='six-one-parent'>
                                <div className='six-one'>
                                    <h4>Work Load</h4>
                                    <p>Outward clothes promise at gravity <br/> do excited. Sufficient particular <br/> impossible by reasonable oh <br/> expression is. Yet preference <br/> connection unpleasant yet <br/> melancholy but end appearance.</p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                            <div className='six-two-parent'>
                                <div className='six-two'>
                                    <h4>Time Tracking</h4>
                                    <p>Outward clothes promise at gravity <br/> do excited. Sufficient particular <br/> impossible by reasonable oh <br/> expression is. Yet preference <br/> connection unpleasant yet <br/> melancholy but end appearance.</p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                            <div className='six-three-parent'>
                                <div className='six-three'>
                                    <h4>Collaborations</h4>
                                    <p>Outward clothes promise at gravity <br/> do excited. Sufficient particular <br/> impossible by reasonable oh <br/> expression is. Yet preference <br/> connection unpleasant yet <br/> melancholy but end appearance.</p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                            <div className='six-four-parent'>
                                <div className='six-four'>
                                    <h4>Kanban</h4>
                                    <p>Outward clothes promise at gravity <br/> do excited. Sufficient particular <br/> impossible by reasonable oh <br/> expression is. Yet preference <br/> connection unpleasant yet <br/> melancholy but end appearance.</p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='five-parent'>
                        <div className='five'>
                                <a href=""><button>Explore All</button></a>
                        </div>
                    </div>
                    </div>
                    <div className='three-parent'>
                        <div className='three'>
                                <div><h3 style={{color: '#313131', fontSize: '38px',fontFamily: 'Gilroy-Thin'}}>What </h3><h3 style={{color: '#25A4AD', fontSize: '38px',  fontFamily: 'Gilroy-SemiBold'}}>Clients </h3><h3 style={{color: '#313131', fontSize: '38px',fontFamily: 'Gilroy-Thin'}}>Say </h3></div>
                                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                        </div>
                    </div>
                    <div className='seven-parent'>
                        <div className='seven'>
                            <div className='seven-one'>
                                <img src={man} alt="" />
                            </div>
                            <div className='seven-two-parent'>
                                <div className='seven-two'>
                                    <h2>Best Developers</h2>
                                    <p>Outward clothes promise at gravity do excited. Sufficient particular impossible <br/> by reasonable oh expression is. Yet preference connection unpleasant yet<br/> melancholy but end appearance. And excellence partiality estimating <br/>terminated day everything.</p>
                                    <div className='s-img'><img src={mstar} alt="" /><img src={mstar} alt="" /><img src={mstar} alt="" /><img src={mstar} alt="" /><img src={mstar} alt="" /></div>
                                    <div>
                                        <h3>Robert Johnson</h3>
                                        <p>Director at Behance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='eight-parent'>
                        <div className='eight'>
                            <button><AiOutlineArrowLeft/></button><button><AiOutlineArrowRight/></button>
                        </div>
                    </div>
                    <div className='nine-parent'>
                        <div className='nine'>
                            <div className='nine-one'> <h3 style={{color: '#313131', fontSize: '50px',fontFamily: 'Gilroy-Thin'}}>Our </h3><h3 style={{color: '#25A4AD', fontSize: '50px',  fontFamily: 'Gilroy-SemiBold'}}> Pricing Plan</h3></div>
                            <div className='nine-two'>
                                <div className='nine-two-one'>
                                    <h3>For Starter</h3>
                                    <h1>$59</h1>
                                    <div>
                                        <div> <p>Feedback Categorization</p></div>
                                        <div><p>Features prioritization</p></div>
                                        <div><p>Real-time collaboration</p></div>
                                        <div><p>Feedback loop notifications</p></div>
                                        <div><p>Essential dev tools integrations</p></div>
                                    </div>
                                    <button>Request Demo</button>
                                </div>
                                <div className='nine-two-two'>
                                    <h3>For Teams</h3>
                                    <h1>$99</h1>
                                    <div>
                                        <div>  <p>Feedback Categorization</p></div>
                                        <div> <p>Features prioritization</p></div>
                                        <div> <p>Real-time collaboration</p></div>
                                        <div><p>Feedback loop notifications</p></div>
                                        <div> <p>Essential dev tools integrations</p></div>
                                    </div>
                                    <button>Request Demo</button>
                                </div>
                                <div className='nine-two-three'>
                                    <h3>For Company</h3>
                                    <h1>Custom</h1>
                                    <div>
                                        <div><p>Feedback Categorization</p></div>
                                        <div><p>Feedback loop notifications</p></div>
                                        <div><p>Essential dev tools integrations</p></div>
                                    </div>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ten-parent'>
                        <div className='ten'>
                            <div className='ten-one'> <h3 style={{color: '#25A4AD', fontSize: '38px',  fontFamily: 'Gilroy-SemiBold'}}>FAQs</h3></div>
                            <div className='ten-two'>
                                <div className='ten-two-sub'><div  className='ten-two-sub-one'><AiOutlineMinus/></div><div><h4>she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h4></div></div>
                                <div>
                                    <div><p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p></div>
                                </div>
                            </div>
                            <div className='ten-three'>
                                <div className='ten-three-sub'>
                                    <div  className='ten-three-sub-one'>< AiOutlinePlus/></div>
                                    <div><h4>And excellence partiality estimating terminated day everything?</h4></div>
                                </div>
                            </div>
                            <div className='ten-four'>
                               <div className='ten-four-sub'>
                                    <div  className='ten-four-sub-one'>< AiOutlinePlus/></div>
                                    <div><h4>Latter person am secure of estate genius at?</h4></div>
                               </div>
                            </div>
                            <div className='ten-five'>
                                <div className='ten-five-sub'>
                                    <div className='ten-five-sub-one'>< AiOutlinePlus/></div>
                                    <div><h4>Whatever landlord yourself at by pleasure of children be?</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className='footer'>
                            <div className='footer-one'><h1> People who are<br/> ready took these courses!</h1></div>
                            <div className='footer-two'><button>Schedule demo</button></div>
                            <div className='footer-three'>
                                <div className='f-one'>
                                    <div className='footer-three-one'>
                                        <img src={logo2} alt="" />
                                        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className='f-two'>
                                    <div className='footer-three-two'>
                                        <h5>Links</h5>
                                        <p>Overons</p>
                                        <p>Social Media</p>
                                        <p>Counters</p>
                                        <p>Contact</p>
                                    </div>
                                    <div className='footer-three-three'>
                                        <h5>Company</h5>
                                        <p>Terms & Conditions</p>
                                        <p>Privacy Policy</p>
                                        <p>Contact</p>
                                    </div>
                                    <div className='footer-three-four'>
                                        <h5>Get in touch</h5>
                                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                                        <p>085-132567</p>
                                        <p>info@payme.net</p>
                                    </div>
                                </div>
                            </div> 
                            <div className='footer-four'><p>© 2021 Payme. All rights reserved</p></div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
 }
 export default Freee;