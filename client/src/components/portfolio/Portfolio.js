import React, { Component } from 'react';
import './Portfolio.css';
import ecomm_img from '../../images/portfolio/ecomm-main-page.png';
import audio_synth_img from '../../images/portfolio/audio-synth-page.png';
import chat_room from '../../images/portfolio/chat-room.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
export default class Portfolio extends Component {
    
    render() {
        return (
            <section className='portfolio' id='portfolio'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Portfolio</h1>
                        <h5>View some of my recent work</h5>
                    </div>
                    <div className='portfolio-item'>
                        <div id='ecomm-container' className='portfolio-img has-margin-right' data-aos='fade-right' data-aos-delay='300'>
                            <a href='https://ecomm-smartphone.netlify.com/' target='_blank'><img src={ecomm_img} alt='' /></a>
                        </div>
                        <div className='portfolio-description' data-aos='fade-left' data-aos-delay='600'>
                            <h5>Web Development</h5>
                            <h1>Ecomm Phone Website</h1>
                            <p>
                               E-commerce solution for smartphones using PayPal Checkout. Responsive design. Implemented with React.
                            </p>
                            <div className='details'>
                                <a href='https://github.com/calind41/ecomm-phone-website' target='_blank'><FontAwesomeIcon className='github' icon={faGithub} /></a>
                                <a href='https://ecomm-smartphone.netlify.com/' target='_blank'><FontAwesomeIcon className='link' icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-item'>
                        <div className='portfolio-description has-margin-right'data-aos='fade-right' data-aos-delay='900'>
                            <h5>Web Development</h5>
                            <h1>Digital Audio Synthesizer</h1>
                            <p>
                               Includes applying filters over sound, 
                               mixing sample mp3 audio sounds, 
                               visualizing your own uploaded mp3 files and recording and saving resulted music files.
                               Implemented in plain JS, using Tone.js library
                            </p>
                            <div className='details'>
                                <a href='https://github.com/calind41/DigitalAudioSynthesizer' target='_blank'><FontAwesomeIcon className='github' icon={faGithub} /></a>
                                <a href='https://audio-synth.netlify.com/' target='_blank'><FontAwesomeIcon className='link' icon={faLink} /></a>
                            </div>
                        </div>
                        <div className='synth-img portfolio-img' data-aos='fade-left' data-aos-delay='1200'>
                            <a href='https://audio-synth.netlify.com/' target='_blank'><img src={audio_synth_img} alt='' /></a>
                        </div>
                    </div>
                    <div className='portfolio-item'>
                        <div className='chat-room-img portfolio-img has-margin-right' data-aos='fade-right' data-aos-delay='1500'>
                            <a href='https://socketio-chat-app.netlify.com/' target='_blank'><img src={chat_room} alt='' /></a>
                        </div>
                        <div className='portfolio-description' data-aos='fade-left' data-aos-delay='1800'>
                            <h5>Web Development</h5>
                            <h1>Simple Chat App</h1>
                            <p>
                                An app that allows you to talk to people that are located in the same chat room as you.
                                Implemented with React, Node, Socket.io
                            </p>
                            <div className='details'>
                                <a href='https://github.com/calind41/chat-app-socketio' target='_blank'><FontAwesomeIcon className='github' icon={faGithub} /></a>
                                <a href='https://socketio-chat-app.netlify.com' target='_blank'><FontAwesomeIcon className='link' icon={faLink} /></a>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
        )
    }
}
