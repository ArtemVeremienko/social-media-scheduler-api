import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postModel.create(createPostDto);
  }

  async findAll() {
    return await this.postModel.find();
  }

  async findOne(id: string) {
    return await this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }
}
