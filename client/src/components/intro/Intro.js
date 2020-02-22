import React, { Component, Fragment } from 'react'
import $ from 'jquery';
import Typed from 'react-typed';
import './Intro.css';
import bg_video from './clouds2.mp4';
import { slide as Menu } from 'react-burger-menu'

// import bg_video from './upview.mp4';
let openMenu = false;
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
        console.log('handleClick called')
    }
    scrollDown = (elem) => {
        console.log('scrollDown called');
        let selector = elem.target.href.substring(elem.target.href.indexOf('#'));
        let maxValue = document.querySelector(selector).getBoundingClientRect().top + window.scrollY - 100;
        $('html, body').animate({
            scrollTop: maxValue
        },1900);
    }


    render() {
        let typed = new Typed('#typed', {
            stringsElement: '#typed-strings'
        });

        
        $(document).ready(function(){
            $('#nav-icon3').click(function(){
                console.log('called ');
                if (openMenu) {
                    $('.nav-list').removeClass("non-zero-height");
                    $('#typed-strings').removeClass("displayNone");
                    openMenu = false;
                    
                } else {
                    $('.nav-list').addClass("non-zero-height");
                    $('#typed-strings').addClass("displayNone");
                    openMenu = true;
                    
                }
                $(this).toggleClass('open');
            });
            
        });
        return (
                <section className='header'>
                    <div className='full-screen-video-container'>
                        <video autoPlay loop muted>
                            <source src={bg_video} type='video/mp4' />
                        </video>
                    </div>
                    <div onClick={(e) => {
                        this.clickMenu(e);
                    }} className={this.state.openClass + ' menu-toggler'}>
                    </div>
                    <div id="nav-icon3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav style={styleTopNav} className='top-nav' >
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
                                                    } href='#services' className='nav-link'>Skills</a>
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
                                } href='#contact' className='nav-link'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div id='typed-strings' className='landing-text'>
                        <Typed
                            id='typed-instance'
                            strings={['Hello there!','Welcome to my page']}
                            typeSpeed={50}
                            backSpeed={40}
                            loop
                            style={styledObj}
                        />

                    </div>
                </section>
        )
    }
}

// console.log('log ',$(window).width());

const styledObj = {
    fontSize: $(window).width() > 600 ? '5rem' : '3rem',
    position: 'relative',
    // top: '23rem'
}

const styleTopNav = {
    height: $(window).width() > 600 ? '12vh' : (openMenu ? '12vh' : '0vh')
}
