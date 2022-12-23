import { Link } from "react-router-dom";
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.png';
import pic3 from '../pic3.png';
import pic4 from '../pic4.jpg';
import pic5 from '../pic5.jpg';

const HomePage = () => {
    return (
        <div>
            <div className="homeTitle">
                <h1>Rally for Pink</h1>
                <br />
                <h4 style={{fontStyle:'oblique'}}>search for breast cancer-related events near you</h4>
            </div>
            <div className="homeContainer">
                <div>
                    <h3>
                        As a verb, "rally" means to recover in health, spirits, or poise. <br /> <br />
                        As a noun, it's a mass meeting of people to show support for a cause. <br /> <br />
                        Get your rally on in every sense of the word. Use this site to search for events near you. If you don't find it, create it and share it so others can attend too.<br /> <br />
                        Join in on the fight against breast cancer! 
                    </h3>
                </div>
                {/* <div>
                    <h3>slideshow of event pics</h3>
                </div> */}

                <div id="slideshow">
                    <div class="slide-wrapper">
                        <div class="slide">
                            <span class="slide-number">
                                <img src={pic1} alt="carousel1" 
                                
                                // style={{width:'600px', height:'300px'}} 

                                />
                            </span>
                        </div>
                        <div class="slide">
                            <span class="slide-number">
                                <img src={pic2} alt="carousel2" 
                                
                                // style={{width:'600px', height:'300px'}}
                                 />
                            </span>
                        </div>
                        <div class="slide">
                            <span class="slide-number">
                                <img src={pic3} alt="carousel3" 
                                
                                // style={{width:'600px', height:'300px'}} 

                                />
                            </span>
                        </div>
                        <div class="slide">
                            <span class="slide-number">
                                <img src={pic4} alt="carousel4" 
                                
                                // style={{width:'600px', height:'300px'}} 



                                />
                            </span>
                        </div>
                        <div class="slide">
                            <span class="slide-number">
                                <img src={pic5} alt="carousel5" 
                                
                                // style=
                                // {{width:'600px', height:'300px'}}

                                 />
                            </span>
                        </div>
                    </div>
                </div>


                <div className="homeAuthBttns">
                    <Link to='/signup' style={{textDecoration: 'none'}}>
                        <button>Sign Up</button>
                    </Link>
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <button>Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;