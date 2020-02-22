import React, { Component, Fragment } from 'react'
import $ from 'jquery'; 
import './Intro.css';
import bg_video from './clouds2.mp4';

export default class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openClass: ''
        }
    }
    clickMenu = (e) => {
        let target = e.target;
        console.log(target);
        if (this.state.openClass === 'open'){
            this.setState({openClass: ''});
        }
        else
            this.setState({openClass: 'open'});  
    }
    handleClick = () => {
        this.setState({openClass: ''});
        
    }
    scrollDown = (elem) => {
        let selector = elem.target.href.substring(elem.target.href.indexOf('#'));
        let maxValue = document.querySelector(selector).getBoundingClientRect().top + window.scrollY - 100;
        $('html, body').animate({
            scrollTop: maxValue
        },1900);
    }

    render() {
        
        return (
                <section className='header'>
                    <div class='full-screen-video-container'>
                        <video autoPlay loop muted>
                            <source src={bg_video} type='video/mp4' />
                        </video>
                    </div>
                    <div onClick={(e) => {
                        this.clickMenu(e);
                    }}className={this.state.openClass + ' menu-toggler'}>
                        <div className='bar half start'></div>
                        <div className='bar'></div>
                        <div className='bar half end'></div>
                    </div>
                    <nav className={this.state.openClass + ' top-nav'}>
                        <ul className='nav-list'>
                            <li>
                                <a onClick={() => this.handleClick()} href='index.html' className='nav-link'>Home</a>
                            </li>
                            <li>
                                <a onClick={(e) => {this.handleClick()
                                                    this.scrollDown(e)}
                                                    } href='#about' className='nav-link'>About</a>
                            </li>
                            <li>
                                <a onClick={(e) => {this.handleClick()
                                                    this.scrollDown(e)}
                                                    } href='#services' className='nav-link'>Services</a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                        this.handleClick()
                                        this.scrollDown(e)
                                    }
                                    } href='#portfolio' className='nav-link'>Portfolio</a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    this.handleClick()
                                    this.scrollDown(e)
                                }
                                } href='#experience' className='nav-link'>Experience</a>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    this.handleClick()
                                    this.scrollDown(e)
                                }
                                } href='#contact' className='nav-link'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='landing-text'>
                        {/* <h1>Calin Dodon</h1> */}
                        <h5>Front End Engineer</h5>
                    </div>
                </section>
        )
    }
}
