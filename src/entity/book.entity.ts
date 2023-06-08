import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;
}
