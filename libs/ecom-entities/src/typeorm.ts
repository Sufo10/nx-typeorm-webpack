import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import {
  AddressEntity,
  UserEntity,
  TransactionEntity,
  CartEntity,
  OrderEntity,
  OrderItemEntity,
  PaymentMethodEntity,
  ProductEntity,
  ProductMetaEntity,
  ReviewEntity,
  SchoolDiscountEntity,
  CategoryEntity,
  DiscountEntity,
} from './entities';

dotenv.config();

const migrationsPath = path.join(__dirname, 'migrations');

const migrationFiles = fs
  .readdirSync(migrationsPath)
  .filter((file) => file.endsWith('.ts'));

const migrations = migrationFiles.map((file) => {
  const className = 'Migration' + file.split('-')[0];
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(path.join(migrationsPath, file))[className];
});

export const TYPEORM_CONFIG: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env.DB_HOST}`,
  port: Number(process.env.DB_PORT),
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  entities: [
    AddressEntity,
    CartEntity,
    CategoryEntity,
    DiscountEntity,
    OrderEntity,
    OrderItemEntity,
    PaymentMethodEntity,
    ProductEntity,
    ProductMetaEntity,
    ReviewEntity,
    SchoolDiscountEntity,
    TransactionEntity,
    UserEntity,
  ],
  migrations,
  migrationsTableName: 'migrations',
  synchronize: false,
  logging: true,
  cache: {
    duration: 86400 * 1000,
    type: 'ioredis',
    options: {
      host: 'localhost',
      port: 6379,
    },
  },
};

const dataSource = new DataSource(TYPEORM_CONFIG);
export default dataSource;
