export const SocialPlatform = {
  TIKTOK: 'tiktok',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
} as const;

export const SocialPlatforms = Object.values(SocialPlatform);

export const PublicationStatus = {
  DRAFT: 'Draft',
  SCHEDULED: 'Scheduled',
  PUBLISHED: 'Published',
  ERROR: 'Error',
} as const;

export const PublicationStatuses = Object.values(PublicationStatus);
