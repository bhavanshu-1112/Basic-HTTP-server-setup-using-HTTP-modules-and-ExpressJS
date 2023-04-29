const express = require('exrpress');

const PORT = 3000;

const app = express(); // create express server object

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/', (req, res) => {
    res.send("hi everyone");
    res.json({
        message  :" ok"
    })
})
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})
