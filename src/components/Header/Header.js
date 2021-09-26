import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGuitar, faHandSpock} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    
    // FontAwesomeIcon... 
    const guiter = <FontAwesomeIcon icon={faGuitar} />
    const handSpock = <FontAwesomeIcon icon={faHandSpock} />

    return (
        
        // header part ..
        <div className='header'>
            <nav>
                <a href="/buy ticket">Buy Ticket</a>
                <a href="/address">Address</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrVyEFNJviL52si4HpCihYYRUbvN5dIyO3w&usqp=CAU" alt="" />
            <h1>JOY BANGLA CONCERT</h1>
            <h4>Rock on 7th March... {guiter} {handSpock} {guiter}</h4>
            <h3>Total Budget For Concert -- 3 Million Tk</h3>
        </div>
    );
};

export default Header;