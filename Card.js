import React from 'react';
import './Card.css';
import img1 from './download.png';

export const Card = () => {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <img src={img1} className="img" alt="Course" />
                    <button className="button">All Levels</button>
                    <p className="font">Responsive Website with HTML, CSS</p>
                    <p className="font2">Colorful content with clear code</p>
                </div>

                <div>
                    <img src={img1} className="img" alt="Course" />
                    <button className="button">All Levels</button>
                    <p className="font">Complete Angular 11 SPA Course</p>
                    <p className="font2">Grab attention to your application</p>
                </div>

                <div>
                    <img src={img1} className="img" alt="Course" />
                    <button className="button">All Levels</button>
                    <p className="font">Full ReactJS + Hooks Course</p>
                    <p className="font2">Use React to rejuvenate your app</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
