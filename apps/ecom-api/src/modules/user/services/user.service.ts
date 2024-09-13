import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '@/libs/service/abstract.service';
import { UserEntity } from '@ecom-entities/user.entity';

@Injectable()
export class UserService extends AbstractService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly itemRepository: Repository<UserEntity>
  ) {
    super(itemRepository);
  }
}
