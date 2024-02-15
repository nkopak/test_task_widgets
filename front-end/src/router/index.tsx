import { RouteObject, createBrowserRouter } from "react-router-dom";
import { PathEnum } from "../consts/enums";
import { ProductList } from "../pages/product-list/ProductList";
import { MainPage } from "../pages/main/Main";
import { Reviews } from "../pages/reviews/Reviews";

export const routes = {
  root: {
    path: PathEnum.main,
    element: <MainPage />,
  } satisfies RouteObject,

  produts: {
    path: PathEnum.products,
    element: <ProductList />,
  } satisfies RouteObject,

  reviews: {
    path: PathEnum.reviews,
    element: <Reviews />,
  } satisfies RouteObject,
} as const;

export const router = createBrowserRouter(Object.values(routes));
