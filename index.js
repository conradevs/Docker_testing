import mongoose from 'mongoose'
import express from 'express'
 
const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipe: String,
  state: String,
}))

const app = express()
 
mongoose.connect('mongodb://colo:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/create', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipe: 'Horse', state: 'healthy' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
