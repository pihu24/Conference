import React from "react";
import './Ann.css'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { SliderSettings } from "../../utils/common";
const Ann=()=>{
    return(

        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Conference</span>
                    <span className="primaryText">Announcements</span>
                </div>

                <Swiper  {...SliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card,i)=>(
                            <SwiperSlide key={i}> 
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="card" />
                                    
                                    <span className="secondaryText r-id">
                                    <span>@</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )

}

export default Ann

const SliderButtons=()=>{

    const swiper=useSwiper();
    return (
        <div className="flexCenter r-buttons">
 
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>

        </div>
    );
};