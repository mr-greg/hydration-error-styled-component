"use client";
import React from 'react'
import StyledExample from './StyledExample'

export default function Example() {
  return (
    <StyledExample>
        <div className='name'>
            <h4>Grégory.jsx</h4>
        </div>
        <div className='menu'>
            <div className='nav-container'>
                <a href="">Accueil</a>
                <a href="">À propos</a>
                <a href="">Projets</a>
            </div>
            <button>Contact</button>
        </div>
    </StyledExample>
  )
}