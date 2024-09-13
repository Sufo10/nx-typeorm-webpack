import { BaseEntity } from '../base.entity';
import { UserEntity } from './user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('carts')
export class CartEntity extends BaseEntity {
  @OneToOne(() => UserEntity, (user) => user.cart)
  @JoinColumn()
  user: UserEntity | string;

  @Column({ type: 'simple-array', nullable: false })
  productMetaId: string[];
}
