const Cart = require('../models/Cart');
const Product = require('../models/Product');

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [{ product: productId, quantity: quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += parseInt(quantity);
      } else {
        cart.items.push({ product: productId, quantity: quantity });
      }
    }

    await cart.save();
    res.redirect('/cart');
  } catch (error) {
    res.status(500).send('Erro ao adicionar produto ao carrinho');
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = req.user;
    let cart = await Cart.findOne({ user: userId }).populate('items.product');
    const isAdminOrPremium = user && (user.role === 'admin' || user.role === 'premium');

    if (!cart) {
      return res.render('cart', { cart: null, title: 'Carrinho', user, isAdminOrPremium });
    }

    // Verifica se os produtos ainda existem
    const validItems = [];
    for (const item of cart.items) {
      if (item.product) { // Adiciona esta verificação
        const product = await Product.findById(item.product._id);
        if (product) {
          validItems.push(item);
        }
      }
    }

    cart.items = validItems;
    await cart.save();
    res.render('cart', { cart, title: 'Carrinho', user, isAdminOrPremium });
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao buscar carrinho');
  }
};


const updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    await Cart.findOneAndUpdate(
      { user: userId, 'items.product': productId },
      { $set: { 'items.$.quantity': quantity } }
    );

    res.redirect('/cart');
  } catch (error) {
    res.status(500).send('Erro ao atualizar quantidade do item');
  }
};

const removeItem = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user.id;

    await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } }
    );

    res.redirect('/cart');
  } catch (error) {
    res.status(500).send('Erro ao remover item do carrinho');
  }
};

module.exports = { addToCart, getCart, updateQuantity, removeItem };