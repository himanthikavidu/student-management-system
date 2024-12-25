import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  indexNo: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column('float')
  gpa: number;
}