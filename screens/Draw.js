import React, { useRef, useState } from 'react';

const DrawingPage = () => {
  const [color, setColor] = useState('black');
  const [isDrawing, setIsDrawing] = useState(false);
  const [penThickness, setPenThickness] = useState(4);
  const [eraserSize, setEraserSize] = useState(10);
  const canvasRef = useRef(null);

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const bounds = canvas.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    context.fillStyle = color;
    const size = color === 'white' ? eraserSize : penThickness;
    context.fillRect(x, y, size, size);
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (newColor === 'white') {
      setPenThickness(eraserSize);
    } else {
      setPenThickness(4);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = image;
    link.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFDE7', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px' }}>
        <button onClick={() => alert('Home')} style={{ background: 'none', border: 'none' }}>
          <img src="Gluki.png" alt="Home" style={{ width: '50px', height: '50px' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Level: 1 | Score: 1000</span>
        </div>
      </div>
      <h1 style={{
        backgroundColor: '#FFC107',
        color: 'black', 
        width: '90%', 
        textAlign: 'center',
        padding: '10px 20px',
        borderRadius: '20px', 
        margin: '20px auto', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
      }}>Express your creativity about T1D</h1>
      <canvas ref={canvasRef} width={window.innerWidth - 20} height={window.innerHeight / 2}
        onMouseDown={handleMouseDown} onMouseMove={draw} onMouseUp={handleMouseUp} onMouseOut={handleMouseUp}
        style={{ border: '5px solid #FFC107', cursor: 'crosshair', backgroundColor: 'white' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button style={{
          margin: '0 5px',
          backgroundColor: '#f0f0f0',
          border: '1px solid black'
        }} onClick={() => setPenThickness(penThickness + 1)}>+</button>
        <span style={{
          width: '30px',
          textAlign: 'center',
          lineHeight: '30px',
          marginTop: '5px',
          fontSize: '20px'
        }}>{penThickness}</span>
        <button style={{
          margin: '0 5px',
          backgroundColor: '#f0f0f0',
          border: '1px solid black'
        }} onClick={() => setPenThickness(Math.max(1, penThickness - 1))}>-</button>
        {/* <button style={{
          backgroundColor: 'red',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '20px',
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
          borderRadius: '20px',
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
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
          margin: '0 5px'
        }} onClick={() => handleColorChange('black')}>Black</button> */}
        {['black','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].map((rainbowColor) => (
          <button key={rainbowColor} style={{
            backgroundColor: rainbowColor,
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            cursor: 'pointer',
            margin: '0 5px'
          }} onClick={() => handleColorChange(rainbowColor)}>
            {rainbowColor[0].toUpperCase()}
          </button>
        ))}

      </div>
      <div>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => handleColorChange('white')}>
          <img src="assets/eraser.png" alt="Eraser" style={{ width: '30px', height: '30px' }} />
        </button>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleClear}>
          <img src="assets/trash.png" alt="Clear" style={{ width: '40px', height: '40px' }} />
        </button>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleSave}>
          <img src="assets/save.png" alt="Save" style={{ width: '30px', height: '30px' }} />
        </button>
      </div>
    </div>
  );
};

export default DrawingPage;
