import React from 'react';
import Photogrid from "../images/photo-grid.jpg";

export default function Hero() {
  return (
    <section>
      <img src={Photogrid} alt="grid" className="photo-grid"/>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
    </section>
  )
}