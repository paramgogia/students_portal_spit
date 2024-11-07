import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import '../CSS/piechart.css';

const PieChart = () => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = pieChartRef.current;
      if (!element) return;
  
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 1.5;
  
      // Check if the element's center is within a certain threshold of the viewport's center
      const threshold = 50; // Adjust this value if necessary
  
      if (Math.abs(elementCenter - viewportCenter) < threshold) {
        requestAnimationFrame(createPieCharts); // Trigger animation with requestAnimationFrame for smoother experience
        window.removeEventListener('scroll', handleScroll); // Remove listener after animation is triggered
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case the component is already in view
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to calculate slice size
  const sliceSize = (dataNum, dataTotal) => {
    return (dataNum / dataTotal) * 360;
  };

  // Function to add a slice to the pie chart
  const addSlice = (id, sliceSize, pieElement, offset, sliceID, color) => {
    $(pieElement).append(`<div class='slice ${sliceID}'><span></span></div>`);
    offset = offset - 1;
    const sizeRotation = -179 + sliceSize;

    $(`${id} .${sliceID}`).css({
      transform: `rotate(${offset}deg) translate3d(0,0,0)`,
    });

    $(`${id} .${sliceID} span`).css({
      transform: `rotate(${sizeRotation}deg) translate3d(0,0,0)`,
      backgroundColor: color,
    });
  };

  // Recursive function to iterate over slices and add them
  const iterateSlices = (id, sliceSize, pieElement, offset, dataCount, sliceCount, color) => {
    const maxSize = 179;
    const sliceID = `s${dataCount}-${sliceCount}`;

    if (sliceSize <= maxSize) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize - maxSize, pieElement, offset + maxSize, dataCount, sliceCount + 1, color);
    }
  };

  // Function to create the pie chart
  const createPie = (id) => {
    const listData = [];
    let listTotal = 0;
    let offset = 0;
    const pieElement = `${id} .pie-chart__pie`;
    const dataElement = `${id} .pie-chart__legend`;

    let color = [
      '#12086f',
      '#2b35af',
      '#4361ee',
      '#4895ef',
      '#4cc9f0'
    ];

    

    $(`${dataElement} span`).each(function () {
      listData.push(Number($(this).html()));
    });

    for (let i = 0; i < listData.length; i++) {
      listTotal += listData[i];
    }

    for (let i = 0; i < listData.length; i++) {
      const size = sliceSize(listData[i], listTotal);
      iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
      $(`${dataElement} li:nth-child(${i + 1})`).css('border-color', color[i]);
      offset += size;
    }
  };

  // Function to shuffle the array
 /* const shuffle = (a) => {
    let j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  };*/

  // Function to create all pie charts
  const createPieCharts = () => {
    createPie('.pieID--micro-skills');
    createPie('.pieID--categories');
    createPie('.pieID--operations');
  };

  return (
    
    <div className="pie1" id='pie'>
      <div className="wrapper" ref={pieChartRef}>
        <div style={{
          fontFamily: 'Inter',
          fontSize: '40px',
          color: '#3e2078',
          textAlign: 'center',
          // marginLeft: '80px',
          fontWeight: '800'
        }}>Some of Our Highlights</div>
        
        <div className="pie-charts">
          <div className="pieID--micro-skills pie-chart--wrapper" >
            
            <div className="pie-chart">
              <div className="pie-chart__pie"></div>
              <ul className="pie-chart__legend">
                <li>
                  <em>Elite</em>
                  <span>28</span>
                </li>
                <li>
                  <em>Super Dream</em>
                  <span>48.4</span>
                </li>
                <li>
                  <em>Dream</em>
                  <span>21.5</span>
                </li>
                <li>
                  <em>Normal</em>
                  <span>2.2</span>
                </li>
              </ul>
            </div>
            <div style={{fontSize: '30px',
          color: '#3e2078',
          fontFamily:'Inter',
          fontWeight: '700',
          marginTop: '40px'}}>
            CTC wise percentage placement
          </div>
          </div>

          <div className="pieID--categories pie-chart--wrapper">
            <div className="pie-chart">
              <div className="pie-chart__pie"></div>
              <ul className="pie-chart__legend">
                <li>
                  <em>Placement</em>
                  <span>85</span>
                </li>
                <li>
                  <em>Higher Students</em>
                  <span>15</span>
                </li>
              </ul>
            </div>
          <div style={{fontSize: '30px',
          color: '#3e2078',
          fontFamily:'Inter',
          fontWeight: '700',
          marginTop: '90px'}}>
            Categoric Selection of Students
            </div>
          </div>

          <div className="pieID--operations pie-chart--wrapper">
          
            <div className="pie-chart">
              <div className="pie-chart__pie"></div>
              <ul className="pie-chart__legend">
                <li>
                  <em>IIT Bombay</em>
                  <span>55.4</span>
                </li>
                <li>
                  <em>IIT Patna</em>
                  <span>20.4</span>
                </li>
                <li>
                  <em>IIT Bombay(others)</em>
                  <span>4.1</span>
                </li>
                <li>
                  <em>Inhouse</em>
                  <span>14.3</span>
                </li>
                <li>
                  <em>Others</em>
                  <span>6.1</span>
                </li>
              </ul>
            </div>
            <div style={{fontSize: '30px',
          color: '#3e2078',
          fontFamily:'Inter',
          fontWeight: '700', 
          marginTop: '10px'}}>
              Research Internship of Students
          </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default PieChart;
