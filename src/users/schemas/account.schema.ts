import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SocialPlatform, SocialPlatforms } from 'src/constants';
import { ValuesOf } from 'src/utils/typeHelpers';

export type Platform = ValuesOf<typeof SocialPlatform>;

@Schema({ _id: false })
export class Account {
  @Prop({ required: true, enum: SocialPlatforms })
  platform: Platform;

  @Prop({ required: true })
  accountId: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  accessToken: string;

  @Prop({ required: true })
  refreshToken: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
