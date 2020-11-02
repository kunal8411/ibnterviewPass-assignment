import React from 'react';
import './card.styles.css'
export  const Card = (props)=>(
    <div className="card-container">
        
        <img
      src={props.city.image}
      alt="city" 
      width="240" height="150"
        />

<h2>{props.city.name}</h2>
        
        
        
    </div>
)
   
