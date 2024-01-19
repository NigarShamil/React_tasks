import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './style.css'
 
export default function Accordion() {
  const [data, setData] = useState([
    { title: "Accordion#1", content: "some content#1" },
    { title: "Accordion#2", content: "some content#2" },
    { title: "Accordion#3", content: "some content#3" }
  ]);
 
  const [activeItem, setActiveItem] = useState(null);
 
  const accordionClick = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
  };
 
  useEffect(() => {
    console.log('Active item changed:', activeItem);
  }, [activeItem]);
 
  return (
    <div className="container">
      <div className="accordion">
        {data.map((item) => (
          <div className="accordion-item" key={item.title}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" onClick={() => accordionClick(item)}>
                {item.title}
                <span className='icon'>
                {activeItem === item ?  <ExpandLessIcon />:<ExpandMoreIcon/>}</span>
              </button>
            </h2>
            {activeItem === item && (
              <div className="accordion-content">
                <strong>{item.content}</strong>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
 
};