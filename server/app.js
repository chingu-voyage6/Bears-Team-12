const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// support parsing of application/json type post data
app.use(express.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
