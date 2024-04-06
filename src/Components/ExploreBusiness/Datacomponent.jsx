import React from 'react';
import './style.css'; // Import CSS file for styling

const DataComponent = () => {
  const data = [
    {
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      points: ['Point 1', 'Point 2', 'Point 3']
    },
    {
      title: 'Title 2',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/150',
      points: ['Point 1', 'Point 2', 'Point 3']
    },
    // Add more data objects for additional titles, texts, images, and points testtt
  ];

  return (
    <div className="data-container">
      {data.map((item, index) => (
        <div className="data-item" key={index}>
          <h2 className="title">{item.title}</h2>
          <p className="text">{item.text}</p>
          <img src={item.imageUrl} alt={item.title} className="image" />
          <ul className="points">
            {item.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
