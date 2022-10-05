import Sequelize from 'sequelize';
import { Column, CreatedAt, DataType,   Model, Table, UpdatedAt } from 'sequelize-typescript';


@Table({ tableName: 'movies', createdAt: false, updatedAt: false  })
export class Movie extends Model {


    @Column({ type: DataType.INTEGER, unique: true, allowNull: false , primaryKey: true, autoIncrement:true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false })
    time: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.FLOAT, allowNull: true })
    rating: number;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}


