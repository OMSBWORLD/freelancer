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
                                <div><h3 style={{color: '#313131', fontSize: '50px'}}>Best </h3><h3 style={{color: '#25A4AD', fontSize: '50px'}}>Services</h3></div>
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
                                <div><h3 style={{color: '#313131', fontSize: '50px'}}>Our</h3><h3 style={{color: '#25A4AD', fontSize: '50px'}}>Features</h3></div>
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
                                <div><h3 style={{color: '#313131', fontSize: '38px'}}>What </h3><h3 style={{color: '#25A4AD', fontSize: '38px'}}>Clients </h3><h3 style={{color: '#313131', fontSize: '38px'}}>Say </h3></div>
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
                                    <h1>Robert Johnson</h1>
                                    <p>Director at Behance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
 export default Freee;