import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserPlants1629757641187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_plants',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'plant_id', type: 'integer' },
          { name: 'user_id', type: 'integer' },
          { name: 'nickname', type: 'text' },
          { name: 'description', type: 'text', isNullable: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
        foreignKeys: [
          {
            name: 'PlantUserPlant',
            referencedTableName: 'plants',
            referencedColumnNames: ['id'],
            columnNames: ['plant_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'UserUserPlant',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_plants');
  }
}
