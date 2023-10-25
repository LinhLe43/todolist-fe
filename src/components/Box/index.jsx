import React, { useState } from 'react'
import "./Box.css";

function Box() {
    let initalColor = [
        "#3498db",
        "#9b59b6",
        "#e74c3c",
        "#2c3e50",
        "#d35400",
    ];

  const [colors, setColors] = useState(initalColor);

  const addMoreBox = () => {
      setColors([...colors, ...initalColor]);  //Spread operator (ES6)
  }

  const deleteBox = (index) => {
    // filter: lọc mảng => trả về màng mới, không ảnh hưởng đến mảng ban đầu (ES6)
    let newColors = colors.filter((color, i) => i != index);
    setColors(newColors);
  }
  return (
    <div className="wrap">
        <h1> JS DOM</h1>
        <button 
            id="btn"
            onClick={addMoreBox}>More boxes</button>
        <h4 id="score"> 
            Total box:<span class="points">{colors.length}</span>
        </h4>

        <div className="boxes">
          {colors.map((color, index) =>(
            <div 
                key={index}
                className='box'
                style={{backgroundColor : color}}
                onClick={() => deleteBox(index)}
            ></div>
          ))}
        </div>
    </div>
  
  )
}

export default Box