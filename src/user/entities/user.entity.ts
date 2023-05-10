import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'User'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string
}