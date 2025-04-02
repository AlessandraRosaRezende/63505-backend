import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({
    description: "Product name",
    example: "Notebook",
  })
  name: string;

  @ApiProperty({
    description: "Product price",
    example: 1500,
  })
  price: number;

  @ApiProperty({
    description: "Product description",
    example: "A high-performance laptop",
  })
  description: string;

  @ApiProperty({
    description: "Product category",
    example: "Electronics",
  })
  category: string;

  @ApiProperty({
    description: "Product stock",
    example: 10,
  })
  stock: number;
}
