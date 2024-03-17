// index.js

function generateRandomColorCode() {
    const letters = '0123456789ABCDEF';
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
      colorCode += letters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
  }
  
  const colorCode = generateRandomColorCode();
  console.log('Random color code:', colorCode);
  