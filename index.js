const express = require("express");
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function handleListening() {
 console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);