// ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Checkout = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      padding: '20px',
    },
    heading: {
      fontSize: '3rem',
      color: 'rgba(210,105,30,1)',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '40px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.2rem',
      color: '#fff',
      backgroundColor: 'rgba(210,105,30,1)',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: 'rgba(210,105,30,0.8)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You for Your Purchase!</h1>
      <p style={styles.paragraph}>Your order has been placed successfully.</p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};
