import React from 'react'
import image from './images/laura.png'

function Card() {
  return (
    <section>
        <div className='card'>
            <div className='card--image'>
                <img src={image} className='avatar'/>
            </div>
            <div className='card--header'>
                <h2 className='card--name'>Laura Smith</h2>
                <p className='card--skill'>Frontend Developer</p>
                <p className='card--website'>laurasmith.website</p>
            </div>

            <div className='card--content card--btn'>
                <button className='button btn--email'><i class="fa-solid fa-envelope"></i>Email</button>
                <button className='button btn--linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>

            <div className='card--content'>
                <h3>About</h3>
                <p>
                    I am a frontend developer with a particular interest
                    in making thing simple and automating daily task. I try 
                    to keep up with security and best practice, and am always
                    to looking for new things to learn.
                </p>
                <br></br>
                <h3>Interests</h3>
                <p>
                    Food expert. Music scholar. Reader. Inter fanatic. Bacon Buff. 
                    Enterpreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>

            <div className='social--icons'>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-github"></i>
            </div>
        </div>
    </section>
  )
}

export default Card