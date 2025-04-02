import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor( @InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll() {
    const allProducts = await this.productModel.find();
    return allProducts;
  }

  async findOne(id: string) {
    const product = await this.productModel.findOne({ _id: id });
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productModel.findOneAndUpdate(
      { _id: id },
      updateProductDto,
      { new: true },
    );
    return updatedProduct;
  }

  async remove(id: string) {
    await this.productModel.deleteOne({ _id: id });
  }
}
