import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

// Para usar JSON:
app.use(express.json());

// req = request, res = response
app.post('/feedbacks', async (req, res) => {
    // Se não fizer esta desestrututação, precisa usar os campos como "req.body.type" e etc
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type, // Short syntax: quando a var tem o mesmo nome do campo, não precisa declara "type: type,". Basta usar "type,"
            comment,
            screenshot,
        }
    })

    return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
    console.log('... HTTP server running');
})
