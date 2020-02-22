import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

export default class Contact extends Component {

    
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('submited !');
        const elements = e.target.elements;
        const name = elements['name'].value;
        const email = elements['email'].value;
        const text = elements['subject'].value;
        elements['subject'].value = '';
        elements['email'].value = '';
        elements['name'].value = '';

        const url = 'https://portfolio-backend-mail.herokuapp.com/';
        const toSendData = {
            name,
            email,
            text
        };
        axios.post(url, toSendData)
            .then(res => console.log('Data sent'))
            .catch(err => console.log(err.data));
    }

    render() {
        return (
            <section className='contact' id='contact'>
                <div className='container'>
                    <div className='section-heading'>
                        <h1>Contact</h1>
                    </div>
                    <form onSubmit = {(e) => this.handleFormSubmit(e)} action='' data-aos='fade-up' data-aos-delay='300'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' placeholder='Enter your name...' required />
                        <label htmlFor='name'>Email:</label>
                        <input type='email' id='email' name='email' placeholder='Enter your email...' required />
                        <label htmlFor='subject'>Subject:</label>
                        <textarea name='subject' id='subject' cols='10' rows='10'></textarea>
                        <input type='submit' value='Submit' />
                    </form>
                </div>
    </section>
        )
    }
}
