import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user',
}

@Entity() //Create user entity
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  phone: number;
  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;
}
