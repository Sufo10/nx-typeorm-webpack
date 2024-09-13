import { BaseEntity } from '../base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('product_meta')
export class ProductMetaEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: false })
  sku: string;

  @Column({ type: 'simple-array', nullable: true })
  image: string[];

  @Column({
    type: 'bigint',
    nullable: false,
    transformer: {
      to(value: any) {
        return BigInt(value);
      },
      from(value: any) {
        return BigInt(value);
      },
    },
  })
  price: number;

  @Column({ type: 'jsonb', nullable: true, default: {} })
  variant?: object;

  @Column({ type: 'bool', default: false, nullable: false })
  isDefault?: boolean;

  @Column({ nullable: false })
  stock: number;

  @ManyToOne(() => ProductEntity, (product) => product.productMeta)
  product: ProductEntity;
}
