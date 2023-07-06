import React from "react";
import './Awards.css'

const Awards=()=>{
    return (
        <section className="awards-wrapper">
            <div className="paddings innerWidth awards-cont">
            <div className="r-head flexColStart">
                    <span className="orangeText">Prizes &</span>
                    <span className="primaryText">Awards</span>
                </div>

                <div className=" a-card ">
                                    <div className="flexColStart x-card ">
                                    <img src='/award.jpg' className="a-img" alt="card" />
                                    
                                    <span className="aText ">
                                        <span>Best Paper Award</span>
                                    </span>
                                    </div>

                                    <div  className="flexColStart x-card">
                                    <img src='/award.jpg' className="a-img" alt="card" />
                                    
                                    <span className="aText ">
                                        <span>Session Paper Award</span>
                                    </span>
                                    </div>

                                    <div  className="flexColStart x-card">
                                    <img src='/award.jpg' className="a-img" alt="card" />
                                    
                                    <span className="aText ">
                                        <span>Best Paper Award</span>
                                    </span>
                                    </div>
                                    <div  className="flexColStart x-card">
                                    <img src='/award.jpg' className="a-img" alt="card" />
                                    
                                    <span className="aText ">
                                        <span>Best Paper Award</span>
                                    </span>
                                    </div>
                                 
                                    
                 </div>
            </div>
        </section>

    )
}

export default Awards