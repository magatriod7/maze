import routes from "./router";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "MAZE";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};