import React, { useState } from 'react'

function Theme() {
    const themes = [
        {
            colorHeading: "#2C3639", // light theme
            colorText: "#3F4E4F",
            bg: "#F9F5EB",
        },
        {
            colorHeading: "#EAE3D2", // dark theme
            colorText: "#F9F5EB",
            bg: "#100720",
        },
      ];

      const [selected, setSelected] = useState(1);
      
  return (
    <div style={{backgroundColor : themes[selected].bg}}>
   <select 
        value={selected}
        onChange={e => setSelected(e.target.value)}
    >
       <option value={0}>Light Theme</option>
       <option value={1}>Dark Theme</option>
   </select>

   <h2 style={{color : themes[selected].colorHeading}}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   </h2>
   <p style={{color : themes[selected].colorText}}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
       placeat necessitatibus, vitae laboriosam in quos, nesciunt modi
       error sit porro, reprehenderit voluptatem dolore libero
       incidunt. Illo mollitia fugit quam inventore?
   </p>
</div>
  )
}

export default Theme