import { useState } from 'react';
import './Calculator.css';

function Calculator(){
    const[value, setValue]= useState("");


    const clearVal = () =>{
        console.log("backspace bef:",value);
        setValue(value.toString().slice(0,-1)); // 0 to end-1 
        console.log("backspace aft:",value);
    }


    const calculateVal = () =>{
        if(value==""){
            alert("No value to evaluate");

        }
        else{
            setValue(eval(value)); // Updating value
            console.log("calculate val:",value);

        }
    }

    


    return(
    <div className='container'>
        
        <div className="sub-container">

            <div className="screenInput">
            <input type="text" id="myInput" value={value} readOnly/>
            </div>

            <div className="calcBtn">
            <button className="myBtn" type="button" value="C" onClick={clearVal}>C</button>
            <button className="myBtn" type="button" value="M+" onClick={(e)=>{setValue(value + e.target.value)}}>M+</button>
            <button className="myBtn" type="button" value="%" onClick={(e)=>{setValue(value + e.target.value)}}>%</button>
            <button className="myBtn" type="button" value="/" onClick={(e)=>{setValue(value + e.target.value)}}>/</button>
            <button className="myBtn" type="button" value="7" onClick={(e)=>{setValue(value + e.target.value)}}>7</button>
            <button className="myBtn" type="button" value="8" onClick={(e)=>{setValue(value + e.target.value)}}>8</button>
            <button className="myBtn" type="button" value="9" onClick={(e)=>{setValue(value + e.target.value)}}>9</button>
            <button className="myBtn blackColorBtn" id="mytest" type="button" value="*" onClick={(e)=>{setValue(value + e.target.value)}}>X</button>
            <button className="myBtn" type="button" value="4" onClick={(e)=>{setValue(value + e.target.value)}}>4</button>
            <button className="myBtn" type="button" value="5" onClick={(e)=>{setValue(value + e.target.value)}}>5</button>
            <button className="myBtn" type="button" value="6" onClick={(e)=>{setValue(value + e.target.value)}}>6</button>
            <button className="myBtn blackColorBtn" type="button" value="-" onClick={(e)=>{setValue(value + e.target.value)}}>-</button>
            <button className="myBtn" type="button" value="1" onClick={(e)=>{setValue(value + e.target.value)}}>1</button>
            <button className="myBtn" type="button" value="2" onClick={(e)=>{setValue(value + e.target.value)}}>2</button>
            <button className="myBtn" type="button" value="3" onClick={(e)=>{setValue(value + e.target.value)}}>3</button>
            <button className="myBtn blackColorBtn" type="button" value="+" onClick={(e)=>{setValue(value + e.target.value)}}>+</button>
            <button className="myBtn" type="button" value="0" onClick={(e)=>{setValue(value + e.target.value)}}>0</button>
            <button className="myBtn" type="button" value="." onClick={(e)=>{setValue(value + e.target.value)}}>.</button>
            <button className="myBtn blackColorBtn" type="button" value="=" onClick={calculateVal}>=</button>
            <button className="myBtn2 blackColorBtn" type="button" value="**" onClick={(e)=>{setValue(value + e.target.value)}}>X<sup>2</sup></button>


            </div>

        </div>

    </div>
    );
}

export default Calculator;