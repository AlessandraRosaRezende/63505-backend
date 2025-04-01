import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private config: ConfigService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException(
        'Missing required fields',
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.usersService.create(createUserDto);
    return { status: 'success', data: user };
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    const xablau = this.config.get<string>('XABLAU'); // acessando as variáveis de ambiente
    console.log(xablau);
    return { status: 'success', data: users };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { status: 'success', data: user };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userUpdated = await this.usersService.update(id, updateUserDto);
    return { status: 'success', data: userUpdated };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const userDeleted = await this.usersService.remove(id);
    if (userDeleted.deletedCount) {
      return { status: 'success', message: 'User deleted' };
    }
  }

  @Post(':uid/documents')
  @UseInterceptors(FilesInterceptor('files')) // 'files' é o nome do campo no formulário
  async uploadDocuments(
    @Param('uid') uid: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body('type') type: string, // Recebe o tipo de arquivo do corpo da requisição
  ) {
    return this.usersService.addDocuments(uid, files);
  }
}
