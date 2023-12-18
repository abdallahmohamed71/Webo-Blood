import React from 'react'
import "../WhoWeAre/WhoWeAre.scss";
import ImgVedio from '../../Asetss/img_vedio.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function WhoWeAre() {
  return (
    <>
    <div className='col-12' id='Who_We_Are'>
     <div className='col-12 Who_We_Are'>
     <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12  Who_We_Are_Text '>
     
            <h2>Who We Are?</h2>
            <span></span>
            <p>Blood Buddies is for public donation center with blood donation members in the changing health care system.</p>
            <ul>
                <li>Specialist blood donors and clinical supervision.</li>
                <li>Increasing communication with our members.</li>
                <li>High quality assessment, diagnosis and treatment.</li>
                <li>Examine critically to ensure alignment.</li>
                <li>The extra care of a multi-disciplinary team.</li>
                
            </ul>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 img_vedio'>
        <figure>
            <a href="#">
            <FontAwesomeIcon icon={faPlay} />
                  
            </a>
            <img src={ImgVedio} alt="" />
        </figure>

        </div>
     </div>
    </div>
    
    </>
  )
}
