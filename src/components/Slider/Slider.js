import React, {useState} from 'react';
import ImgComp from '../ImgComp';
import'./Slider.css';
import i1 from '../../pics/4.jpg';
import i2 from '../../pics/5.jpg';
import i3 from '../../pics/6.jpg';


function Slider () {
    let sliderArr = [<ImgComp src={i1}/> ,<ImgComp src={i2}/> ,<ImgComp src={i3}/>];
    const [x, setX] = useState(0)
    const moveLeft = () => {
        console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length -1 )) : setX(x + 100);
    }

    const moveRight = () => {
        console.log(x);
        (x === -100 * (sliderArr.length -1 ))?setX(0) : setX(x - 100);
    }

    return (
        <div className="slider">
           {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                   );
               })}
               <button id="goLeft" onClick={moveLeft}>&#62;</button>
               <button id="goRight" onClick={moveRight}>&#60;</button>
        </div>
    );
}

export default Slider;