import { BaseEntity } from '../base.entity';
import { ProductEntity } from './product.entity';
import {
  Entity,
  Tree,
  Column,
  TreeChildren,
  TreeParent,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'categories' })
@Tree('materialized-path')
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'text', nullable: false })
  image: string;

  @TreeChildren()
  children: CategoryEntity[];

  @TreeParent()
  parent: CategoryEntity;

  @ManyToMany(() => ProductEntity, (product) => product.categories)
  products: ProductEntity[];
}
