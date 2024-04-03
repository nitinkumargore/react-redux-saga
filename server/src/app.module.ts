import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './modules/todos/todo.module';

@Module({
  imports: [TodosModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
