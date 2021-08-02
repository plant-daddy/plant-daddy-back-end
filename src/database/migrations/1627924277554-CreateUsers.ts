import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1627924277554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'serial' },
          { name: 'username', type: 'text', isUnique: true },
          { name: 'email', type: 'text', isUnique: true },
          { name: 'password', type: 'text' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
