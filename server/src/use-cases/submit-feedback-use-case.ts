import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from"../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    // Principio da inversão de dependência: Não fixar uma lib, como o prisma.
    // Usar a interface no construtor, e quando quiser mudar de lib, basta implementar uma nova classe que implementa a interface (dentro de repositories)
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (!type) {
            throw new Error('Type is required.');
        }

        if (!comment) {
            throw new Error('Comment is required.');
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}
