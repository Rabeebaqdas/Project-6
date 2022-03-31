import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const boxes = document.querySelectorAll('.box');
  window.addEventListener("scroll",checkBoxes);

    function checkBoxes () {
      const trigger = window.innerHeight / 5 * 4;
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < trigger) {
         box.classList.add('show');
       
          
        }else{
           box.classList.remove('show');
       
        }
       
      })
    }
    checkBoxes()
 
  return (
    <div className="App">
      <h1>Scroll to see the animation</h1>
      <div className='box'><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
      <div className='box' ><h2>Content</h2></div>
    </div>
  );
}

export default App;
