import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class BookEntity {
  @Column()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;
}
