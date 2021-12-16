import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Task } from "src/task/dto/task.dto";
import { PrismaService } from "../../../prisma/prisma.service";
import { GetTasksQuery } from "../impl/get-tasks.query";

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksHandler> {
    constructor(private readonly PrismaService: PrismaService){}
    async execute(query: GetTasksHandler): Promise<Task[]> {
        return await this.PrismaService.task.findMany();
    }
}
