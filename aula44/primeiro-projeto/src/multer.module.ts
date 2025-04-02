import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Diretório onde os arquivos serão salvos
    }),
  ],
})
export class MulterConfigModule {}
