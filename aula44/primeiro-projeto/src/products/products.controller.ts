import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
    type: Product,
  })
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto);
    return { status: 'success', product };
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'List of all products.',
    type: [Product],
  })
  async findAll() {
    const products = await this.productsService.findAll();
    return { status: 'success', products };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one product by id' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully retrieved.',
    type: Product,
  })
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      return { status: 'error', message: 'Product not found' };
    }
    return { status: 'success', product };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
    type: Product,
  })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      return { status: 'error', message: 'Product not found' };
    }
    const updatedProduct = await this.productsService.update(id, updateProductDto);
    return { status: 'success', product: updatedProduct };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({
    status: 204,
    description: 'The product has been successfully deleted.'
  })
  async remove(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    if (!product) {
      return { status: 'error', message: 'Product not found' };
    }
    await this.productsService.remove(id);
    return { status: 'success', message: 'Product deleted successfully' };
  }
}
