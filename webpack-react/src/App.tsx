import React, { useState, useEffect } from 'react';

import './main.css';
import imageOne from './images/svgTwo.svg'
import imageTwo from './images/svgImage.svg';
import { CardsOne } from './cards';
import $ from 'jquery'

export const App = () => {
    return  <>
    <h1>Welcome to react app</h1>
    <div className="img-fluid">
    <img src={imageTwo} alt="image" className="img-fluid imageResize" />

    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Et fugit dolores iusto quaerat placeat dignissimos, 
        velit fuga a vel perspiciatis repudiandae non in 
        aliquid recusandae
         magnam tempora illo esse asperiores?</p>
    <CardsOne/>
    </>
}

export const AppTwo = () =>{
    
    return <>
    <h1>hello,welcome</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum placeat ut quibusdam at quo fugit, laudantium hic 
        error tempore molestiae magni accusantium 
        aut culpa dicta consequuntur ipsa aliquid distinctio magnam.</p>
        <div className="img-fluid">
    <img src={imageOne} alt="image" className="img-fluid imageResize" />
    <div id='apiDiv'></div>

    </div>
        <a href="./index.html">
<button type="button" className="btn btn-danger">go back home</button>
</a>
    </>
}

export default AppTwo