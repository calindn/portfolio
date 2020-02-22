import React, { Component } from 'react';
import './Experience.css';

export default class Experience extends Component {
    render() {
        return (
            <section className='experience' id='experience'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Work  Experience</h1>
                        <h5>Past and current jobs</h5>
                    </div>
                    <div className='timeline' data-aos='fade-down' data-aos-delay='300'>
                        <ul>
                            <li className='date' data-date='2008 - 2011'>
                                <h1>Facebook</h1>
                                <p>
                                    Some random text Some random text Some random text 
                                    Some random text Some random text Some random text Some random text
                                </p>
                            </li>
                            <li className='date' data-date='2002 - 2007'>
                                <h1>Microsoft</h1>
                                <p>
                                    Some random text Some random text Some random text 
                                    Some random text Some random text Some random text Some random text
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
    </section>
        )
    }
}
