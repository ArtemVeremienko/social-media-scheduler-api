// publication.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  PublicationStatus,
  PublicationStatuses,
  SocialPlatform,
  SocialPlatforms,
} from 'src/constants';
import { ValuesOf } from 'src/utils/typeHelpers';

// Extract literal value types for strong typing
export type PlatformValue = ValuesOf<typeof SocialPlatform>;
export type PublicationStatus = ValuesOf<typeof PublicationStatus>;

// Defines the interface for the Publication document (if standalone)
export type PublicationDocument = Publication & Document;

// @Schema({ _id: false }) is used to prevent Mongoose from creating an _id for this subdocument
@Schema({ _id: false })
export class Publication {
  // Uses the extracted literal values for Mongoose enum validation
  @Prop({
    type: String,
    required: true,
    enum: SocialPlatforms,
  })
  platform: PlatformValue;

  // The text of the post/description, with a maxlength limit
  @Prop({ type: String, maxlength: 2200 })
  caption?: string;

  // ID assigned by the platform after successful publication
  @Prop({ type: String, default: null })
  publishedId: string;

  // Publication status with enum and default value
  @Prop({
    type: String,
    required: true,
    enum: PublicationStatuses,
    default: PublicationStatus.DRAFT,
  })
  status: PublicationStatus;
}

export const PublicationSchema = SchemaFactory.createForClass(Publication);
