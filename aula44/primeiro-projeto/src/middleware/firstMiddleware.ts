import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class FirstMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`${req.method} at ${req.url} - ${new Date()}`);
    next();
  }
}
