require('dotenv').config();
const express = require('express');
const handlebars = require('express-handlebars');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const viewRoutes = require('./routes/viewRoutes');
const cartRoutes = require('./routes/cartRoutes');
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

connectDB();

const app = express();
const PORT = process.env.PORT;

// Configuração do Handlebars
app.engine('handlebars', handlebars.engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  helpers: {
    or: function (a, b) {
      return a || b;
    },
    eq: function (a, b) {
      return a === b;
    },
    isAdmin: function (user) {
      return user && user.role === 'admin';
    }
  },
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/users', userRoutes);
app.use('/', viewRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});