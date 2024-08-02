import React, { useState } from 'react';

const ColorChangeCard = () => {
    // State to keep track of the background color
    const [bgColor, setBgColor] = useState('white');

    // Function to handle color change
    const handleChange = (color) => {
        setBgColor(color);
    };

    // Style for buttons to ensure consistent width
    const buttonStyle = {
        width: '100px', // Set the desired width for all buttons
    };

    return (
        <div 
            className='d-flex justify-content-center align-items-center vh-100' 
            style={{ backgroundColor: bgColor }}
        >
            <div className='card w-50'>
                <div className='d-flex flex-nowrap justify-content-center'>
                    <button 
                        type="button" 
                        className="btn btn-primary m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#007bff')}
                    >
                        Blue
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-secondary m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#6c757d')}
                    >
                        Gray
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-success m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#28a745')}
                    >
                        Green
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#dc3545')}
                    >
                        Red
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-warning m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#ffc107')}
                    >
                        Yellow
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-info m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#17a2b8')}
                    >
                        Cyan
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-light m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#f8f9fa')}
                    >
                        Light gray
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-dark m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('#343a40')}
                    >
                        Dark gray
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-white bordered-2 m-1" 
                        style={buttonStyle} 
                        onClick={() => handleChange('white')}
                    >
                        White
                    </button> 
                </div>
            </div>
        </div>
    );
}

export default ColorChangeCard;
