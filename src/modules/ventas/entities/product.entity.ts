import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('products', {schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:number
    @CreateDateColumn({
        name:'Create_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',

    })
    createAt:Date;
    @UpdateDateColumn({
        name:'update_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })

    updateAp:Date;
    @DeleteDateColumn({
        name:'delete_date',
        type:'timestamp',
        nullable:true,
    })
    deleteAp:Date;

    //Columnas

    @Column('varchar', {
        name:'title',
        comment:'nombre del producto',
    })
    title:string;
    @Column('number', {
        name:'price',
        comment:'precio con 2 decimales del producto'
    })
    price:number;
    @Column('text', {
        name:'Description',
        comment: 'Descripcion del producto'
    })
    description:string;
}