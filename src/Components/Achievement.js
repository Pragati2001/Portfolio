import React from 'react';
import cb from '../Images/coding_block.png';
import coursera from '../Images/coursera.jpg';
import gs from '../Images/gs-scoc.png';
import scaler from '../Images/scaler.png';
import comp_vis from '../Images/comp_vis.jpg';
import app from '../Images/app.jpg';
import '../Styles/Achieve_style.css';
export default function Achievement() {
    return (
        <div>
            {/* <div className='achieve-heading'>ACHIEVEMENTS-GALLERY</div> */}
            <div className='achieve'>
                <div className='b1'><img src={cb} className='one_div'></img>
                <div className='two_div'>
                    Completed DSA/Algo Online Course from Coding Blocks
                    </div> 
                    </div>
                <div className='b2'>
                    <img src={gs} className='gs'></img>
                    <div className='partb2'>
                    Contributed in Girlscript winter of code between September 2021 to November 2021
                    </div>
                </div>
                <div className='b3'><img src={scaler} className='scaler'></img>
                <ul>
                    <li>Completed 6 Months Fellowship Programme in Software Engineering in Scaler Academy</li>
                    <li>Specialization in DSA and Backend Engineering</li>
                </ul>
                </div>
                <div className='b4'><img src={app} className='app'></img>
                <div className='b4part2'>Completed Android App Development Course from Udemy</div></div>
                <div className='b5'><img src={comp_vis}></img>
                    <ul>
                        <li>Completed Computer Vision A-Z Course from Udemy</li>
                    </ul>
                </div>
                <div className='b6'>
                    <img src={coursera} className='cousera'></img>
                <div className='part2'>
                    Completed AWS Computer Vision Course from Coursera
                </div>
                </div>
            </div>
        </div>
    )
}
