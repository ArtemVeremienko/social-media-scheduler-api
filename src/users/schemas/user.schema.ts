import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccountSchema, Account } from './account.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [AccountSchema], default: [] })
  connectedAccounts: Account[];
}

export const UserSchema = SchemaFactory.createForClass(User);
