import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSoils1629383323841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'soils',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'name', type: 'text', isUnique: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('soils');
  }
}
