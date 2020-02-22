import React, { Component } from 'react';
import './Skills.css';
import html_css_img from '../../images/skills/html_css.png';
import js_img from '../../images/skills/js_logo.png';
import react_img from '../../images/skills/react_logo1.png';

export default class Skills extends Component {
    render() {
        return (
            <section className='skills' id='skills'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Skills</h1>
                        <h5>main skills</h5>
                    </div>
                    <div className='my-skills'>
                        <div className='skill' data-aos='fade-in' data-aos-delay='300'>
                            <div className='icon-html-css-container'>
                                <img src={html_css_img} />
                            </div>
                            <h1>HTML &amp; CSS</h1>
                            <progress max='100' value='80'></progress>
                        </div>
                        <div className='skill' data-aos='fade-in' data-aos-delay='600'>
                            <div className='icon-js-container'>
                                <img src={js_img} />
                            </div>
                            <h1>Javascript</h1>
                            <progress max='100' value='80'></progress>
                        </div>
                        <div className='skill' data-aos='fade-in' data-aos-delay='900'>
                            <div className='icon-container'>
                                <img src={react_img} />
                            </div>
                            <h1>React.js</h1>
                            <progress max='100' value='75'></progress>
                        </div>
                    </div>
                </div>
    </section>
        )
    }
}
