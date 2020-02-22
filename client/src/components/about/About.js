import React, { Component, Fragment } from 'react';
// import profile from '../../images/profile.jpeg';
import profile from '../../images/laptop_grayscale.jpg';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <section id='about' className='about'>
                    <div className='container'>
                        <div className='profile-img' data-aos='fade-right' data-aos-delay='300'>
                            <img src={profile} alt='' />
                        </div>
                        <div className='about-details' data-aos='fade-left' data-aos-delay='600'>
                            <div className='about-heading'>
                                <h1>About</h1>
                                <h5>Myself</h5>
                            </div>
                            <p>
                              My name is Calin Dodon, I am studying Computer Science at Polytechnical University of Bucharest, currently in the 
                                4th year. I like Web Development and all my free time is devoted to this field of technology.
                            </p>

                            <div className='social-media'>
                                <ul className='nav-list'>
                                    <li>
                                        <a href='#' className='icon-link'>
                                            <i className='fab fa-facebook-square'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='icon-link'>
                                            <i className='fab fa-twitter-square'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='icon-link'>
                                            <i className='fab fa-dribbble-square'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </Fragment>
        )
    }
}
