import '../Opinion/Opinion.scss';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgOpinion from '../../../Asetss/imgopinin.png';
import User_1 from '../../../Asetss/user_1.png';
import User_2 from '../../../Asetss/user_2.png';
import User_3 from '../../../Asetss/user_3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <>
    <div className='col-12' id='Swiper_Opinion'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
             <Swiper
    
         modules={[ Pagination,Autoplay,A11y ]}
         slidesPerView={1}
         
         id='swiperopinio'
          //  navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide className='Swip_slid'>
        <div>
        <h2>Donor Opinion</h2>
        <p>   I proudly donate blood on a regular basis because it gives others something
         they desperately need to survive. Just knowing I can make a difference in 
         someone else's life makes me feel great!   </p>
         <img src={User_1} alt="" />
         <h6>Brandon Munson</h6>
         <span>CTO, Fulcrum Design, USA</span>
        </div>
 
    </SwiperSlide>
    <SwiperSlide className='Swip_slid'>
    <div>
        <h2>Donor Opinion</h2>
        <p>   I proudly donate blood on a regular basis because it gives others something
         they desperately need to survive. Just knowing I can make a difference in 
         someone else's life makes me feel great!   </p>
         <img src={User_2} alt="" />
         <h6>Munson Brandon</h6>
         <span>CTO, Fulcrum Design, USA</span>
        </div>
    </SwiperSlide>
    <SwiperSlide className='Swip_slid'>
    <div>
        <h2>Recipient Opinion</h2>
        <p>   I proudly donate blood on a regular basis because it gives others something
         they desperately need to survive. Just knowing I can make a difference in 
         someone else's life makes me feel great!   </p>
         <img src={User_3} alt="" />
         <h6>Logan Munson</h6>
         <span>CTO, Fulcrum Design, USA</span>
        </div>
    </SwiperSlide>


       </Swiper> 
        </div>
        <div className='col-6 img_Opinio'>
          <img src={ImgOpinion} alt="" />
        </div>

    </div>
      
    </>

  );
};