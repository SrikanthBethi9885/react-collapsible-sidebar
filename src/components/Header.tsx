import React from 'react';

const Header = () => {
    return (
        <div style={{
            maxWidth: '100%',
            height: '80px',
            backgroundColor: '#555',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '15px',
        }}>
            <h2>Welcome to Header</h2>
        </div>
    );
};

export default Header;
