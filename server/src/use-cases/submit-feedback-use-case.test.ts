import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

/**
 * Teste espião (spies)
 * jest.fn = função espião. Sem funcionalidade.
 * Se alguma das funções for removida da classe SubmitFeedbackUseCase, o teste que usa esta função não passa
 */
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy }, // Um objeto com um único método create que faz nada. Apenas para testes.
    { sendMail: sendMailSpy }
)

test('Soma de 2 + 2', () =>{
    expect(2 + 2).toBe(4)
});

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment:'example comment',
            screenshot: 'data:image/png;base64,121544544d44dsdsdsdsvdscdsdsdsc4d4sfddfvdf4df4vd4fdv4f4dvf4vd4fvd4',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment:'example comment',
            screenshot: 'data:image/png;base64,121544544d44dsdsdsdsvdscdsdsdsc4d4sfddfvdf4df4vd4fdv4f4dvf4vd4fvd4',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment:'',
            screenshot: 'data:image/png;base64,121544544d44dsdsdsdsvdscdsdsdsc4d4sfddfvdf4df4vd4fdv4f4dvf4vd4fvd4',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment:'example comment',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });
});
