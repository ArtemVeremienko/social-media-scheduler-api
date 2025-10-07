import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class BasicAuthGuard extends AuthGuard('basic') {
  constructor(private reflector: Reflector) {
    super();
  }

  /**
   * Overrides the canActivate method to check for the @Public() decorator.
   */
  canActivate(context: ExecutionContext) {
    // 1. Check for handler-level metadata (method)
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(), // Check method handler
      context.getClass(), // Check controller class
    ]);

    // 2. If the @Public() decorator is present, skip authentication entirely
    if (isPublic) {
      return true; // Access granted, skipping Passport authentication
    }

    // 3. Otherwise, proceed with the default AuthGuard logic
    // This will invoke the 'basic' strategy's validate() method
    return super.canActivate(context);
  }
}
