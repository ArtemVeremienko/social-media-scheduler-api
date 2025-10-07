import { SetMetadata } from '@nestjs/common';

// Define a constant key for the metadata
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Custom decorator to mark a route as public (unauthenticated).
 * Usage: @Public()
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
