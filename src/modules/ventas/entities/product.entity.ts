@Entity('products', {schema:'ventas'})

export class ProductEntity{
    @PrimaryGenerateColumn('sv')
    id:number
}