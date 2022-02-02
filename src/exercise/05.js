// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from "react";
import "../box-styles.css";

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// HTML uses the class attribute, JSX uses className attribute

function Box({ className = "", style, ...otherProps }) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ fontStyle: `italic`, ...style }} //The order of style matters, otherwide it is going to override
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box className="box--small" style={{ backgroundColor: "lightblue" }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box className="box--medium" style={{ backgroundColor: "pink" }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box className="box--large" style={{ backgroundColor: "orange" }}>
    large orange box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>sizeless box</Box>
    </div>
  );
}

export default App;
