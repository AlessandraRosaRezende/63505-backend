import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.log('Log - Returning Hello World!');
    this.logger.error('Error - Returning Hello World!');
    this.logger.warn('Warn - Returning Hello World!');
    this.logger.debug('Debug - Returning Hello World!');
    this.logger.verbose('Verbose - Returning Hello World!');
    this.logger.fatal('Fatal - Returning Hello World!');
    return 'Hello World!';
  }

  getCumprimento(): string {
    return 'Olá, Mundo!';
  }
}
