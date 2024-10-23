const generator = require("generate-password");

const password = generator.generateMultiple(5, {
  length: 16,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
});

// 'uEyMTw32v9'
console.log(password);
