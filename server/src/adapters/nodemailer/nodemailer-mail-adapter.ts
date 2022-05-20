import nodemailer from 'nodemailer';
import {MailAdapter, SendMailData } from "../mail-adapter";

// Credenciais Mailtrap
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7d3bd17c93bc0b",
        pass: "815be0f9542d66"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Paulo <batata@feedget.com>',
            subject,
            html: body,
        });
    }
}
