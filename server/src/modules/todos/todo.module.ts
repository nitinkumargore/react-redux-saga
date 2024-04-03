import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosController } from './todo.controller';
import {Todo, TodoSchema} from './schemas/todo.schema';


@Module({
  imports:[MongooseModule.forFeature([{name:Todo.name, schema:TodoSchema} ])],
  controllers: [TodosController],
  providers:[TodoService]
})
export class TodosModule {}

