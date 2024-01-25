import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
const MyChart = ({ Data }) => {
    
    const {weight,height}=Data;
    const calculateBMI = () => {
      const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
  
      let category = '';
      let color = '';
  
      if (bmiValue < 18.5) {
        category = 'Underweight';
        color = 'rgba(52, 152, 219, 0.7)';
      } else if (bmiValue < 25) {
        category = 'Normal weight';
        color = 'rgba(46, 204, 113, 0.7)';
      } else if (bmiValue < 30) {
        category = 'Overweight';
        color = 'rgba(243, 156, 18, 0.7)';
      } else {
        category = 'Obese';
        color = 'rgba(231, 76, 60, 0.7)';
      }
  
      return {
        bmiValue,
        category,
        color,
      };
    };
  
    
    const { bmiValue, category, color } = calculateBMI();
  
    
    const data = {
      labels: ['BMI'],
      datasets: [
        {
          label: 'BMI',
          data: [bmiValue],
          backgroundColor: [color],
          borderWidth: 1,
        },
      ],
    };
  
    
    
  
    return (
        <div className='chartcontainer'>
           <p className='datainfo'> Your BMI: {bmiValue} - {category}</p>
       
        <p className='datainfo'>Weight: {weight} kg</p>
        <p className='datainfo'>Height: {height} cm</p>
  
        <Bar data={data}  />
  
       
      </div>
    );
  };
  
  export default MyChart;
MyChart.js



