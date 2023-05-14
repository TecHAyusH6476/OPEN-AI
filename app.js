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
app.use('/', (req, res) => {
  res.send('hello worlds')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
