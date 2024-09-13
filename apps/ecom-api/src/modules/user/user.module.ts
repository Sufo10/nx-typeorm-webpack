import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@ecom-entities/user.entity';
import { ApiUserController } from './controllers/api-user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ApiUserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
