import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SocialPlatform } from 'src/constants';

type Platform = (typeof SocialPlatform)[keyof typeof SocialPlatform];

@Schema({ _id: false })
export class Account {
  @Prop({ required: true, enum: Object.values(SocialPlatform) })
  platform: Platform;

  @Prop({ required: true })
  accountId: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  accessToken: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
