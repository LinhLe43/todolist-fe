import React, { useEffect, useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("#333333");

    useEffect(() => {
        let newColor = changeColor();
        setColor(newColor);
    }, [count]);

    const add = () => {
        setCount(count+1);
    }

    function subtract() {
        setCount(count-1);
    }

    const changeColor = () => {
        if(count > 0) {
            return "green";
        } else if (count < 0) {
            return "red";
        } else return "#333333"
    }

    // const color = changeColor();

    // const color = count === 0 ? "#33333" : count > 0 ? "green" : "red";

  return (
    <div className="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style={{color : color}}>{count}</h1>
            <div className="btn-container">
                <button 
                    className="btn counterBtn prevBtn" 
                    onClick={subtract}>
                        Trừ
                    </button>
                <button 
                    className="btn counterBtn nextBtn"
                    onClick={add}>
                        Cộng
                    </button>
            </div>
            {console.log("render")}
        </div>
    );
}

export default Counter