import React, { useState, useEffect } from 'react';

import './main.css';
import imageOne from './images/svgTwo.svg'
import imageTwo from './images/svgImage.svg';
import { CardsOne } from './cards';
import $ from 'jquery';


export const App = () => {
    
    return  <>
    <h1>Welcome to react app</h1>
    <div className="img-fluid">
    <img src={imageTwo} alt="image" className="img-fluid imageResize" />

    </div>
    <p>So this webpage was made to support react, but the backend is managed 
        with webpack, leading to a lighter and more accessible fashion.
        I dont use .jsx files. The web is set to use typescript files, so components are .tsx
        I added some gifs and svgs. These lasts should resize perfectly with the screen.  </p>
    <CardsOne/>
    <a href="./pageTwo.html">
<button type="button" className="btn btn-danger">go page two</button>
</a>
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