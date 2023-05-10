import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  async update(id: number, updateUserDto: CreateUserDto) {
    const user = await this.findOne(id);
    user.name = updateUserDto.name
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
