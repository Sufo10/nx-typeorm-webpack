import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

declare global {
  interface BigInt {
    toJSON(): number;
  }
}

BigInt.prototype.toJSON = function () {
  return Number(this);
};

(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      if (
        !origin ||
        process.env.NODE_ENV === 'local' ||
        JSON.parse(process.env.ALLOWED_ORIGINS).indexOf(origin) !== -1
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS.'));
      }
    },
    credentials: true,
  });
  await app.listen(5000, () => Logger.log(`Listening on port 5000`));
})();
