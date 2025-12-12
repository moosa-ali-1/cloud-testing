import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
// Health check endpoint
app.get('/healthz', (req, res) => {
    res.status(200).send('Healthy');
});


const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
