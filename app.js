const express = require('express')
const app = express()

const stringMap = {
  hello: 'Hi how are you',
  goodbye: 'See you later',
  thanks: 'Thank you very much',
}

app.get('/map/:stringParam', (req, res) => {
  const stringParam = req.params.stringParam
  const mappedString = stringMap[stringParam] || 'No mapping found'
  res.send(mappedString)
})

// Add error 404 handling
app.use((req, res, next) => {
  if (
    req.originalUrl === '/map/:stringParam' &&
    !stringMap[req.params.stringParam]
  ) {
    res.status(404).send('The requested resource was not found.')
  } else {
    next()
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
