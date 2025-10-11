import { Platform } from '../schemas/account.schema';

export class CreateAccountDto {
  platform: Platform;

  accountId: string;

  username: string;

  accessToken: string;

  refreshToken: string;
}
