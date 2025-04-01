import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      let folder = './uploads/documents';
      if (file.mimetype.startsWith('image/')) {
        if (req.body.type === 'profile') {
          folder = './uploads/profiles';
        } else if (req.body.type === 'product') {
          folder = './uploads/products';
        }
      }
      cb(null, folder);
    },
    filename: (req, file, cb) => {
      try {
        console.log('File:', file);
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
        cb(null, `${randomName}${extname(file.originalname)}`); 
      } catch (error) {
        console.error('Erro na função filename:', error);
        cb(error, '');
      }
    },
  }),
};