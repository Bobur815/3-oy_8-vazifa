import userRouter from "./User.routes.js";
import postRouter from "./Post.routes.js";
import categoryRouter from "./Category.routes.js";

const routes = (app) => {
    app.use("/api/users", userRouter);
    app.use("/api/posts", postRouter);
    app.use("/api/categories", categoryRouter);
};

export default routes;
