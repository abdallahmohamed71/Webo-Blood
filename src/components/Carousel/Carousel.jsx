import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import './Carousel.scss'
import DONATE from '../DONATE/DONATE';
export default function Carousel() {
  return (
    <>
     <DONATE />
     <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Autoplay]}
      navigation
      className="main-carousel my-5 "
    >
      <SwiperSlide className='bg1' id='bg1'>
        {/* <img className='w-100 object-fit-cover h-100' src={bg} alt=''/> */}
        <div>
          <h3>Donate blood,save life !</h3>
          <h2>
          YOUR BLOOD                                      
          <br />
          CAN BRING SMILE
          <br />
          IN OTHER PERSON FACE
          </h2>
          <div>
            <a href="#" >Donate Now</a>
            <a href="#" className='btn_2'>CALL : 411-009-872-333</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg2' id='bg2'>
        {/* <img className='w-100 object-fit-cover h-100' src={bg} alt=''/> */}
        <div>
          <h3>Donate blood,save life !</h3>
          <h2>
          DONATE BLOOD
          <br />
           AND INSPIRES OTHERS.
          </h2>
      
            <a href="#">Donate Now</a>
        
        </div>
      </SwiperSlide>

    </Swiper>
    </>
   
  )
}

{/* <SwiperSlide>
<img className='w-100 object-fit-cover h-100' src='/assets/images/3.jpg' alt=''/>
</SwiperSlide>
<SwiperSlide>
<img className='w-100 object-fit-cover h-100' src='/assets/images/4.jpg' alt=''/>
</SwiperSlide> */}