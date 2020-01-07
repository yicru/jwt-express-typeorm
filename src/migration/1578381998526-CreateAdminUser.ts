import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../entity/User';

export class CreateAdminUser1578381998526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.username = 'admin';
    user.password = 'secret';
    user.hashPassword();
    user.role = 'ADMIN';
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
