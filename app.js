const express = require('express')
const checklistRouter = require('./src/routes/checklist')

const app = express()

//middleware
//verificar se exite algum json na requisição
app.use(express.json())

app.use('/checklist', checklistRouter)

app.listen(3000, () => {
  console.log('Server is running')
})