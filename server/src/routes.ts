import express from 'express';
import nodemailer from 'nodemailer';
import { SubmitFeedbackUseCase } from"./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";

export const routes = express.Router()

// Credenciais Mailtrap
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7d3bd17c93bc0b",
        pass: "815be0f9542d66"
    }
});

// req = request, res = response
routes.post('/feedbacks', async (req, res) => {
    // Se não fizer esta desestrututação, precisa usar os campos como "req.body.type" e etc
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    );

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

//     await transport.sendMail({
//         from: 'Equipe Feedget <oi@feedget.com>',
//         to: 'Paulo <batata@feedget.com>',
//         subject: 'Novo feedback',
//         html: [
//             `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
//             `<p>Tipo do feedback: ${type}</p>`,
//             `<p>Comentário: ${comment}</p>`,
//             `</div>`
//         ].join('\n')
//     });

    return res.status(201).send();
});
