import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlants1629390606105 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plants',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'type_id', type: 'integer' },
          { name: 'description', type: 'text' },
          { name: 'image_url', type: 'text' },
          { name: 'common_name', type: 'text', isUnique: true },
          { name: 'scientific_name', type: 'text', isUnique: true },
          { name: 'temperature_min', type: 'integer' },
          { name: 'temperature_max', type: 'integer' },
          { name: 'watering_frequency', type: 'integer' },
          { name: 'fertilize_frequency', type: 'integer' },
          { name: 'toxicity_description', type: 'text' },
          { name: 'sun_exposure', type: 'text' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
        foreignKeys: [
          {
            name: 'PlantTypePlant',
            referencedTableName: 'plant_types',
            referencedColumnNames: ['id'],
            columnNames: ['type_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plants');
  }
}
