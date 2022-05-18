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
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })
    }
}
