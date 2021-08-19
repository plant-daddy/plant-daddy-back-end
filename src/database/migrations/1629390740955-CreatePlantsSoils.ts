import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlantsSoils1629390740955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plants_soils',
        columns: [
          { name: 'plant_id', type: 'integer', isPrimary: true },
          { name: 'soil_id', type: 'integer', isPrimary: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
        foreignKeys: [
          {
            name: 'PlantPlantSoil',
            referencedTableName: 'plants',
            referencedColumnNames: ['id'],
            columnNames: ['plant_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'SoilPlantSoil',
            referencedTableName: 'soils',
            referencedColumnNames: ['id'],
            columnNames: ['soil_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plants_soils');
  }
}
