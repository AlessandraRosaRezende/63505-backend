import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Array<Product>;

  constructor() {
    this.products = [];
  }
  create(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: this.products.length + 1,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((u) => u.id === id);
    if (!product)
      throw new HttpException('Product not Found', HttpStatus.NOT_FOUND);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.indexOf(product);
    this.products[index] = { ...product, ...updateProductDto };
    return this.products[index];
  }

  remove(id: number) {
    this.products = this.products.filter((u) => u.id !== id);

    return this.products;
  }
}
