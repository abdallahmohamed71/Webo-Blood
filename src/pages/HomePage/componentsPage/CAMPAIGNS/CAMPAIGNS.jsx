import '../CAMPAIGNS/CAMPAIGNS.scss';
import Even1 from '../../Asetss/even_1.png';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <>
    <div className='col-12' id='CAMPAIGNS'>
    <div className='col-12 col-lg-6 col-md-12 col-sm-12 info_CAMPAIGNS'>
         <h2>OUR CAMPAIGNS</h2>
         <span></span>
         <p>All over the world we have arranged total 
          sixty thousands donation campaign and visit thousands 
          of other venues on various occasions.</p>
          <a href="#">Load All Campaigns</a>
        </div>
        <div className='col-12 col-lg-6 col-md-12 col-sm-12 even_camp'>
      
          <Swiper
    
    modules={[ Pagination,Autoplay,A11y ]}
    slidesPerView={1}
    
    id='swiperCamp'
     //  navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log('slide change')}
>
<SwiperSlide  id='Swip_slid'>
<div className=' col-6 img_CAMPAIGNS'>
            <img src={Even1} alt="" />
          </div>
          <div className=' col-6 content_CAMPAIGNS'>
            <a href="#"><FontAwesomeIcon icon={faCalendar} />   14 June, 2018</a>
             <h4><a href="#">Blood Donation Camp</a></h4>
             <div>
             Lorem ipsum dolor sit amet turadipi scing elit lobort
              issim consecte lodign pharetra. Lobort qssim tronsecte 
              diagnosis sharetrx mauris gone do.
             </div>
             <div>
              <a href="#"><FontAwesomeIcon icon={faClock} />  10.00 - 3.00</a>
              <a href="#"> <FontAwesomeIcon icon={faLocationDot} />  California, USA</a>
             </div>
          </div>

</SwiperSlide>
<SwiperSlide id='Swip_slid'>
<div className=' col-6 img_CAMPAIGNS'>
            <img src={Even1} alt="" />
          </div>
          <div className=' col-6 content_CAMPAIGNS'>
            <a href="#"><FontAwesomeIcon icon={faCalendar} />   14 June, 2018</a>
             <h4><a href="#">Blood Donation Camp</a></h4>
             <div>
             Lorem ipsum dolor sit amet turadipi scing elit lobort
              issim consecte lodign pharetra. Lobort qssim tronsecte 
              diagnosis sharetrx mauris gone do.
             </div>
             <div>
              <a href="#"><FontAwesomeIcon icon={faClock} />  10.00 - 3.00</a>
              <a href="#"> <FontAwesomeIcon icon={faLocationDot} />  California, USA</a>
             </div>
          </div>
</SwiperSlide>
<SwiperSlide id='Swip_slid'>
<div className=' col-6 img_CAMPAIGNS'>
            <img src={Even1} alt="" />
          </div>
          <div className=' col-6 content_CAMPAIGNS'>
            <a href="#"><FontAwesomeIcon icon={faCalendar} />   14 June, 2018</a>
             <h4><a href="#">Blood Donation Camp</a></h4>
             <div>
             Lorem ipsum dolor sit amet turadipi scing elit lobort
              issim consecte lodign pharetra. Lobort qssim tronsecte 
              diagnosis sharetrx mauris gone do.
             </div>
             <div>
              <a href="#"><FontAwesomeIcon icon={faClock} />  10.00 - 3.00</a>
              <a href="#"> <FontAwesomeIcon icon={faLocationDot} />  California, USA</a>
             </div>
          </div>
</SwiperSlide>


  </Swiper> 
        </div>
      

    </div>
      
    </>

  );
};