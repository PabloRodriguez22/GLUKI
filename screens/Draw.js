import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, TouchableOpacity, Text } from 'react-native';

const DrawingPage = () => {
  const [color, setColor] = useState('black'); // Default color is black
  const [isDrawing, setIsDrawing] = useState(false); // State to manage whether the mouse is down for drawing
  const canvasRef = useRef(null);

  // Function to handle the drawing on canvas
  const draw = (e) => {
    if (!isDrawing) return; // Only draw if isDrawing is true
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const bounds = canvas.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    context.fillStyle = color;
    context.fillRect(x, y, 4, 4);  // Draw a small rectangle as the brush
  };

  // Handle mouse down event to start drawing
  const handleMouseDown = (e) => {
    setIsDrawing(true); // Set isDrawing to true to start drawing
    draw(e); // Start drawing immediately on mouse down
  };

  // Handle mouse up and mouse out events to stop drawing
  const handleMouseUp = () => {
    setIsDrawing(false); // Set isDrawing to false to stop drawing
  };

  const handleColorChange = (newColor) => {
    setColor(newColor); // Change the current drawing color
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png"); // Create a PNG image URL
    const link = document.createElement('a'); // Create a link
    link.download = 'my-drawing.png'; // Set the filename for download
    link.href = image; // Set the href to the image URL
    link.click(); // Simulate a click to trigger the download
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFDE7', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px' }}>
        <button onClick={() => alert('Home')} style={{ background: 'none', border: 'none' }}>
          <img src="Gluki.png" alt="Home" style={{ width: '50px', height: '50px' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img src="Gluki.png" alt="User Icon" style={{ marginRight: '10px' }} /> */}
          <span>Level: 1 | Score: 1000</span>
        </div>
      </div>
      <h1 style={{
        backgroundColor: '#FFC107', // Change to match your color theme
        color: 'black', // Text color
        width: '250px', // Same width as the canvas
        textAlign: 'center',
        padding: '10px 20px',
        borderRadius: '20px', // Adjust for desired oval shape
        margin: '20px auto', // Centers the title
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // Optional shadow for depth
      }}>Express your creativity about T1D</h1>
      <canvas ref={canvasRef} width={window.innerWidth - 20} height={window.innerHeight / 2}
        onMouseDown={handleMouseDown} onMouseMove={draw} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp}
        style={{ border: '5px solid #FFC107', cursor: 'crosshair', backgroundColor: 'white' }} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button style={{
          backgroundColor: 'red',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '20px', // Half of width and height to make it perfectly round
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          margin: '0 5px'
        }} onClick={() => handleColorChange('red')}>Red</button>
        <button style={{
          backgroundColor: 'blue',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '20px', // Half of width and height to make it perfectly round
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          margin: '0 5px'
        }} onClick={() => handleColorChange('blue')}>Blue</button>
        <button style={{
          backgroundColor: 'black',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '20px', // Half of width and height to make it perfectly round
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          margin: '0 5px'
        }} onClick={() => handleColorChange('black')}>Black</button>
        <button style={{ margin: '0 5px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleColorChange('white')}>
          <img src="assets/eraser.png" alt="Home" style={{ width: '30px', height: '30px' }} />

        </button>
        <button style={{ margin: '0 5px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleClear}>
          <img src="assets/trash.png" alt="Home" style={{ width: '40px', height: '40px' }} />
        </button>
        <button style={{ margin: '0 5px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleSave}>
          <img src="assets/save.png" alt="Home" style={{ width: '30px', height: '30px' }} />
        </button>
      </div>
    </div>
  );
};

export default DrawingPage;
