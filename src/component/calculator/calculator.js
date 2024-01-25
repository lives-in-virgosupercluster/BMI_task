

import React from 'react'
import { useState } from 'react';
import MyChart from '../chartcontainer/chartcontainer';
export const Calculator = () => {
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [bmiData, setBmiData] = useState(null);
    const onSubmit=async(e)=>{
     e.preventDefault();
     if(height==='' || weight==='' || age===''){
      alert('height,weight and age should not be null');
      return ;
     }
     if(parseInt(height)<120){
      alert('height must be greater than 120 cm and less than 200 cm');

      return;

     }
     if(parseInt(weight)<50 || parseInt(weight)>200){
      alert('Weight must be more than 50 and less than 200')
      return ;
     }
  
     const response= await fetch('/api/calculate-bmi',{
      method:'POST',
      headers:{  
        'Content-Type':'application/json',
      },
      body:JSON.stringify({weight,height}),

     }); 
     
     if(response.ok){
      const data=await response.json();
      setBmiData(data);
     }

    }
  return (
    <div className='container'>
    <form onSubmit={onSubmit} className='submitform'>
  
    
      <div className='grid'>
      <label>Gender:</label>
      <label>Age:</label>
      <div className='gendercontainer'>
        <button type="button" onClick={() => setGender('male')} style={{ marginRight: '10px' }} className='btn'>
          Male
        </button>
        <button type="button" onClick={() => setGender('female')} className='btn'>
          Female
        </button>
        </div>
     
        
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
        className='inp'
      />
     
     <label>Height:</label>
      <label>Weight:</label>
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter height in cm"
        className='inp'
      />
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter weight in Kg"
        className='inp'
       
      />
   

   <div className='containerbtn'>
      <button type="submit" className='submitbtn'>Calculate</button>
    </div>
      
     
    
    </div>
    
    
      
    

   
  </form>
  {bmiData && <MyChart Data={bmiData}></MyChart>}
  </div>
  )
}
