import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import SvgComponent from './SvgComponent';
import './App.css';

const App = () => {
  const [backgroundImage1, setBackgroundImage1] = useState(null);
  const [backgroundImage2, setBackgroundImage2] = useState(null);
  const [gradientColor1, setGradientColor1] = useState('#ffffff');
  const [gradientColor2, setGradientColor2] = useState('#000000');

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange1 = (color) => {
    setGradientColor1(color.hex);
  };

  const handleColorChange2 = (color) => {
    setGradientColor2(color.hex);
  };

  return (
    <div className="App">
      <div className="wrapper" style={{ backgroundImage: `linear-gradient(to bottom, ${gradientColor1}, ${gradientColor2})` }}>
        <div className="wrapper_inner" style={{ backgroundImage: `url(${backgroundImage1})` }}>
          <div className="b_cover_wrap">
            <div className="b_cover">
              {backgroundImage2 && <img src={backgroundImage2} alt="" />}
            </div>
            <SvgComponent />
          </div>
        </div>
      </div>

      <ul className="input_wrap">
        <li>
          Overlay: <input type="file" onChange={(event) => handleImageUpload(event, setBackgroundImage1)} />
        </li>
        <li>
          Cover: <input type="file" onChange={(event) => handleImageUpload(event, setBackgroundImage2)} />
        </li>
        <li>
          Gradient Color 1:
          <SketchPicker color={gradientColor1} onChangeComplete={handleColorChange1} />
        </li>
        <li>
          Gradient Color 2:
          <SketchPicker color={gradientColor2} onChangeComplete={handleColorChange2} />
        </li>
      </ul>
    </div>
  );
};

export default App;
