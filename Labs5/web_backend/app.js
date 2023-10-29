import express from 'express'
import {createTour, deleteTour, getTour, getTours, updateTour} from "./db.js";
import cors from 'cors'

const PORT = 5000

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/tours", async (req, res) => {
    const tours = await getTours()
    res.send(tours)
})

app.get("/api/tours/:id", async (req, res) => {
    const id = req.params.id
    const note = await getTour(id)
    res.send(note)
})

app.post("/api/tours", async (req, res) =>{
    const {country, duration, cost, description} = req.body
    const tour = await createTour(country, duration, cost, description)
    res.send(tour)
})

app.delete("/api/tours/:id", async (req, res) => {
    const id = req.params.id
    const tour = await deleteTour(id)
    res.send(tour)
})

app.put("/api/tours/:id", async (req, res) => {
    const {id, country, duration, cost, description } = req.body
    const tour = await updateTour(id, country, duration, cost, description)
    res.send(tour)
})

app.listen(PORT, () => {
    console.log(`server started in port: ${PORT}`)
})