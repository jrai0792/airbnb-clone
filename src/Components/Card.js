import React from 'react';
import card1 from '../images/card1.png';

export default function Card() {
  return (
    <div className="card">
      <img src={card1} className="card--image"/>
      <div className="card--stats">
        <i class="fa fa-solid fa-star"></i>
        <span>5.0</span>
        <span className="gray">(30)</span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  ) 
}