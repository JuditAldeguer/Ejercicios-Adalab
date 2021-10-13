const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get('/response-with-json', (req, res) => {
  res.json({ result: 'Esto es un JSON' });
});

app.get('/redirect-to-adalab', (req, res) => {
  res.redirect('https://adalab.es');
});

app.get('/response-with-file-pdf', (req, res) => {
  res.sendFile(__dirname + '/files/example.pdf');
});

app.get('/download-a-file', (req, res) => {
  res.download(__dirname + '/files/example.pdf', 'ejemplo.pdf');
});

app.get('/response-with-html', (req, res) => {
  const date = new Date();
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
      </head>
      <body class="page">
        <header>
          <h1>Express: Respondiendo con un HTML</h1>
          <h2>Hoy es: ${date}</h2>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get('/response-with-404-status-error', (req, res) => {
  // more info about http status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
  res.status(404).json({
    errorCode: 'data-not-found',
    errorMessage: 'Data not found',
  });
});

//errores comunes - responder más de 1 vez
app.get('/new-user', (req, res) => {
  console.log(`¿Has the response been sent? ${res.headersSent}`);
  if (req.query.name === undefined) {
    res.json({ result: 'invalid name' });
  }

  console.log(`¿Has the response been sent? ${res.headersSent}`);
  if (req.query.email === undefined) {
    res.json({ result: 'invalid email' });
  }
});
