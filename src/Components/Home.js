import React from 'react'
import '../Styles/Home-css.css';
import img from '../Images/img_prag.jpg';
export default function Home() {
    return (
        <div>
            <div className='container1'>
                <div className='photo1'>
                    <img src={img} className='photo'></img>
                </div>
                <div className='content'>
                    Hi <span className='wave'>👋</span><br />
                    I am <span>Pragati Kabra</span>
                    <br />
                    Currently pursuing Bachelor degree in the field of Computer science.
                    <br />
                    


                </div>
            </div>
        </div>
    )
}
