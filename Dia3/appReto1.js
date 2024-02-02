const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Petición recibida del cliente');
    console.log(req.headers['user-agent']);
    console.log(req.method);
    console.log(req.url);
    res.status(200).json({ok: true, message:'Recibido!'})
}
)

app.get('/bye', (req, res) => {
    res.status(200).json({ok:true, message: 'Adios!'})
})

app.listen(3000)