import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // Hide popup after 3 seconds
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className={`popup ${visible ? 'visible' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default Popup;
