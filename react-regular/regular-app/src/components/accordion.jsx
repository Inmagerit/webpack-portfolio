import React, { useState } from 'react';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          <div
            onClick={() => handleToggle(index)}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              background: activeIndex === index ? '#f0f0f0' : '#fff',
              cursor: 'pointer',
              color: 'black', 
            }}
          >
            {section.title}
          </div>
          {activeIndex === index && (
            <div style={{ padding: '8px', border: '1px solid #ddd' }}>
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
