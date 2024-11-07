import React from 'react';
import '../CSS/bar.css'; // Ensure you have the CSS in this file

const data = [
  { value: '50%', name: 'Matt' },
  { value: '40%', name: 'Steve' },
  { value: '70%', name: 'Mark' },
  { value: '22%', name: 'Jade' },
  { value: '35%', name: 'Ray' },
  { value: '40%', name: 'Oliver' },
  { value: '85%', name: 'Barry' },
  { value: '36%', name: 'Felicity' },
  { value: '88%', name: 'Malcom' },
  { value: '62%', name: 'Ted' },
];

const AnimatedBarGraph = () => {
  return (
    <div className="igFrameBar">
      {data.map((item, index) => (
        <div
          key={index}
          className={`igData igData${index + 1}`}
          style={{
            height: '0px',
            animation: `showBar${index + 1} 1.2s ${0.1 + index * 0.1}s forwards`
          }}
        >
          <div className="label">{item.value}</div>
          <div className="name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBarGraph;
