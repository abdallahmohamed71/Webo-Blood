import React from 'react'
import '../NumbeDonors/NumberDonors.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse,faBuilding,faUsers,faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';

import CountUp from 'react-countup';
export default function NumberDonors() {


  return (
    <>
      <div className='col-12' id='NumberDonors'>
        <div>
        <FontAwesomeIcon icon={faHeartPulse} />
         <h3>
    <CountUp
    className="account-balance"
     start={0}
     end={2758}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
  />
         </h3>
          <h2>Success Smile</h2>
        </div>
        <div>
        <FontAwesomeIcon icon={faStethoscope} />
          <h3>
          <CountUp
    className="account-balance"
    start={0}
    end={3235}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
  />
          </h3>
          
          <h2>Happy Donors</h2>
        </div>
        <div>
        <FontAwesomeIcon icon={faUsers} />
          <h3>
          <CountUp
    className="account-balance"
    start={0}
    end={3568}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
      />
          </h3>
          <h2>Happy Recipient</h2>
        </div>
        <div>
        <FontAwesomeIcon icon={faBuilding} />
          <h3>
          <CountUp
    className="account-balance"
    start={0}
    end={1364}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
  />
          </h3>
          <h2>Total Awards</h2>
        </div>
      </div>
    </>
  )
}
