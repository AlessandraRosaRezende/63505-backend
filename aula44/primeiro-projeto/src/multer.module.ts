import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      dest: join(__dirname, '..', 'uploads'), // Diretório onde os arquivos serão salvos
    }),
  ],
})
export class MulterConfigModule {}
