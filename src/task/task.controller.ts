import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetTasksQuery } from './queries/impl/get-tasks.query';

@Controller('task')
export class TaskController {

    constructor(private queryBus:QueryBus){}

    @Get()
    async getAll(){
        return await this.queryBus.execute(new GetTasksQuery());
    }
}
