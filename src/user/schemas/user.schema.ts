import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccountSchema, Account } from './account.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ type: [AccountSchema], default: [] })
  connectedAccounts: Account[];
}

export const UserSchema = SchemaFactory.createForClass(User);
console.log({ AccountSchema, UserSchema });
