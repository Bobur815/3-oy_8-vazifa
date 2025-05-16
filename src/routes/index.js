import fileRouter from './File.routes.js';
import userRouter from './User.routes.js';

export default [
  { url: '/users', funk: userRouter },
  { url:'/files',funk:fileRouter}

];

