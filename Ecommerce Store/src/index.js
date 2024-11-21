import ReactDOM from "react-dom/client";
import Headers from "./Components/Header/Headers";
import "./index.css";
import "./Components/style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Components/Body/Body";
import Error from "./Components/Error";
import { useState, useEffect, useContext } from "react";
import ProductContext, { AuthContext } from "./Context/ProductContext";
import SearchFilterContext from "./Context/ProductContext";

import ProductDetails from "./Components/Product/ProductDetails";
import CartDetail from "./Components/Shoppingcart/CartDetail";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { useLocation } from "react-router-dom";

import Login from "./Components/Login";
import LoginContext from "./Context/LoginContext";
import { Toaster } from "react-hot-toast";

import { Suspense } from "react";
import Shimmer from "./Components/Product/Shimmer";
import ShimmerLoad from "./Components/Product/ShimmerLoad";
import { lazy } from "react";
import Footer from "./Components/Body/Footer";
const Audio = lazy(() => import("./Components/Category/Audio"));
const Mobile = lazy(() => import("./Components/Category/Mobile"));
const Gaming = lazy(() => import("./Components/Category/Gaming"));
const Tv = lazy(() => import("./Components/Category/Tv"));

function AppLayout() {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  localStorage.setItem("product", JSON.stringify(filterProduct));
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.in/api/products");

    const json = await data.json();

    setProduct(json.products);

    setFilterProduct(json.products);
    setLoad(false);
  };

  const category = [];

  for (let i in product) {
    if (!category.includes(product[i]["category"])) {
      category.push(product[i]["category"]);
    }
  }
  let location = useLocation();
  return (
    <>
      <Provider store={store}>
        <ProductContext>
          <LoginContext>
            {location.pathname !== "/cart" && location.pathname !== "/login" ? (
              <Headers
                category={category}
                product={product}
                setProduct={setProduct}
                filterProduct={filterProduct}
              />
            ) : null}
            <Outlet
              context={{
                category,
                product,
                filterProduct,
                setProduct,
                setFilterProduct,
                load,
              }}
            />
            {location.pathname !== "/cart" && location.pathname !== "/login" ? (
              <Footer />
            ) : null}
            <Toaster />
          </LoginContext>
        </ProductContext>
      </Provider>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/audio",
        element: (
          <Suspense fallback={<ShimmerLoad />}>
            <Audio />
          </Suspense>
        ),
      },
      {
        path: "/mobile",
        element: (
          <Suspense fallback={<ShimmerLoad />}>
            <Mobile />
          </Suspense>
        ),
      },
      {
        path: "/gaming",
        element: (
          <Suspense fallback={<ShimmerLoad />}>
            <Gaming />
          </Suspense>
        ),
      },
      {
        path: "/tv",
        element: (
          <Suspense fallback={<ShimmerLoad />}>
            <Tv />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
