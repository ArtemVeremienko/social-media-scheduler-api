// post.schema.ts

import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Publication, PublicationSchema } from './publication.schema'; // Import the embedded schema
import { PublicationStatus } from 'src/constants';

// Defines the interface for the Post document
export type PostDocument = Post & Document;

// @Schema({ timestamps: true }) adds createdAt and updatedAt fields
@Schema({ timestamps: true })
export class Post {
  // 1:N Relationship (Reference to the 'User' model)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; // Use Types.ObjectId for strong type checking

  @Prop({ required: true })
  contentUrl: string;

  @Prop({ required: true })
  scheduledDate: Date;

  // Embedded array of publication details
  @Prop({
    type: [PublicationSchema],
    default: [],
    // Custom Validation is applied directly in the @Prop options
    validate: {
      validator: (v: Publication[]) => v && v.length > 0,
      message: 'A post must be scheduled for at least one platform!',
    },
  })
  publications: Publication[];

  @Virtual({
    get(this: Post) {
      return this.publications.some(
        (pub) => pub.status === PublicationStatus.PUBLISHED,
      );
    },
  })
  isPublished: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
