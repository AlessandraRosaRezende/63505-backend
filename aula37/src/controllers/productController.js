const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const owner = req.user.role === 'premium' ? req.user.email : 'admin';
    const product = new Product({ name, price, owner });
    await product.save();
    res.redirect('/products');
  } catch (error) {
    res.status(500).send('Erro ao criar produto');
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send('Produto não encontrado');
    }
    if (req.user.role === 'premium' && product.owner !== req.user.email && req.user.role !== 'admin') {
      return res.status(403).send('Acesso negado');
    }
    product.name = name;
    product.price = price;
    await product.save();
    res.redirect('/products');
  } catch (error) {
    res.status(500).send('Erro ao atualizar produto');
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send('Produto não encontrado');
    }
    if (req.user.role === 'premium' && product.owner !== req.user.email && req.user.role !== 'admin') {
      return res.status(403).send('Acesso negado');
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send('Erro ao excluir produto');
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    const user = req.user;
    const isAdminOrPremium = user && (user.role === 'admin' || user.role === 'premium');
    res.render('products', { products, title: 'Produtos', user: user, isAdminOrPremium: isAdminOrPremium });
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
};

const renderAddProduct = (req, res) => {
  res.render('addProduct', { title: 'Adicionar Produto' });
};

const renderEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) {
      return res.status(404).send('Produto não encontrado');
    }
    res.render('editProduct', { product, title: 'Editar Produto' });
  } catch (error) {
    res.status(500).send('Erro ao buscar produto');
  }
};

module.exports = { createProduct, updateProduct, deleteProduct, getProducts, renderAddProduct, renderEditProduct };