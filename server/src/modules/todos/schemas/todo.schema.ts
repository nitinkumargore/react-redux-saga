import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo{
    @Prop
    id:string;

    @Prop
    name:string;

    @Prop
    isActive:boolean;

    @Prop
    isDone:boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

/*
OR you can define it simply as below 

export const TodoSchema = new mongoose.Schema({
  id: string,
  name: staring,
  isActive: boolean,
  isDone: boolean
});

*/