import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../services/user.service';

@ApiTags('API User')
@Controller('api/users')
export class ApiUserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @HttpCode(200)
  async getAll() {
    return await this.userService.find();
  }
}
