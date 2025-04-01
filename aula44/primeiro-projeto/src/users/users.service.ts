import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const userUpdated = await this.userModel.updateOne(
      { _id: id },
      updateUserDto,
    );
    if (userUpdated.matchedCount != 0) {
      const userUpdatedData = await this.userModel.findOne({ _id: id });
      return userUpdatedData;
    }
    return userUpdated;
  }

  async remove(id: string) {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const userRemoved = await this.userModel.deleteOne({ _id: id });
    return userRemoved;
  }

  async addDocuments(uid: string, files: Express.Multer.File[]): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const documents = files.map((file) => ({
      name: file.originalname,
      reference: `/uploads/documents/${file.filename}`, // Ajuste o caminho conforme necessário
    }));

    user.documents.push(...documents);
    user.documentStatus = 'uploaded'; // Atualiza o status do documento
    return user.save();
  }

  async login(uid: string): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('Usuário não encontrado',  HttpStatus.NOT_FOUND);
    }

    user.last_connection = new Date();
    return user.save();
  }

  async logout(uid: string): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('Usuário não encontrado',  HttpStatus.NOT_FOUND);
    }

    user.last_connection = new Date();
    return user.save();
  }
}
