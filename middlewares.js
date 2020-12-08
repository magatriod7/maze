import routes from "./router";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MAZE";
  res.locals.routes = routes;
  next();
};