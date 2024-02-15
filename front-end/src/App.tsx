import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ReviewProvider } from "./context/reviewContext";
import { ProductList } from "./pages/product-list/ProductList";
import { Reviews } from "./pages/reviews/Reviews";
import { MainPage } from "./pages/main/Main";

function App() {
  return (
    <Router>
      <ReviewProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Layout>
      </ReviewProvider>
    </Router>
  );
}

export default App;
