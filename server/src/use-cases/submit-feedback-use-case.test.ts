import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} }, // Um objeto com um único método create que faz nada. Apenas para testes.
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment:'example comment',
            screenshot: 'test.jpg',
        })).resolves.not.toThrow();
    });
});

test('Soma de 2 + 2', () =>{
    expect(2 + 2).toBe(4)
});
