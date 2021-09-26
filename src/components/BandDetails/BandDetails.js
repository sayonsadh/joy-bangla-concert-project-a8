import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons';
import './BandDetails.css';

const BandDetails = (props) => {
    
    // data distructaring... 
    const {img,Band, create, album, Singer, cost} = props.band;
    
    // FontAwesomeIcon ...
    const addIcon = <FontAwesomeIcon icon={faPlus} />
    const microphone = <FontAwesomeIcon icon={faMicrophoneAlt} />

    return (
        
            // band details...
            <div className='band-cart'>
            <img src={img} alt="" />
            <div className='band-details'>
            <p>Band Name        : {Band}</p>
            <p>Vocal {microphone}      : <small  className='vocal'>{Singer}</small></p>
            <p>Band start from : {create}</p>
            <p>Total Album      : {album}</p>
            <p>Band Rent Cost        : ${cost}</p>
            <button onClick={()=>props.selectBand(Band,cost)}>{addIcon} select this band</button>
            </div>
        </div>
    );
};

export default BandDetails;