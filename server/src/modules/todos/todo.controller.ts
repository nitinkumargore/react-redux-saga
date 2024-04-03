import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

// interface Todo {
//   id: number;
//   text: string;
//   active: boolean;
//   done: boolean;
// }
interface Todo {
  id: string;
  name: string;
  isActive: boolean;
  isDone: boolean;
}

let todos: Todo[] = [
  'NestJS',
  'GraphQL',
  'Apollo',
  'TypeScript',
  'React',
  'Redux',
  'React Query',
  'Angular',
  'Vue',
  'D3',
  'Svelte',
  'SolidJS',
  'NextJS',
  'AWS',
].map((name, index) => ({
  id: uuidv4(),
  name: `Learn ${name}`,
  isActive: true,
  isDone: false,
}));

@Controller('todos')
export class TodosController {
  constructor() {}

  @Get()
  async index(): Promise<Todo[]> {
    return todos.filter(({ isActive }) => isActive);
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Todo> {
    return todos.find((todo) => todo.id === (id));
  }

  @Post()
  async create(@Body() { name }: { name: string }): Promise<Todo> {
    const todo = {
      id: uuidv4(),
      name,
      isActive: true,
      isDone: false,
    };
    todos.push(todo);
    return todo;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Todo): Promise<Todo> {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...data } : todo,
    );

    return data;
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<string> {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, active: false } : todo,
    );
    return id;
  }
}
