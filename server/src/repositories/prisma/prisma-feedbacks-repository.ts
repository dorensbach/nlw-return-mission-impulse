import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";
import { prisma } from '../../prisma';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type, // Short syntax: quando a var tem o mesmo nome do campo, não precisa declarar "type: type,". Basta usar "type,"
                comment,
                screenshot,
            }
        });
    }
}
