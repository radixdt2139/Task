import  { useCallback,  useState } from "react";
import {  useSelector } from 'react-redux';
import "./App.css";
import ProductListing from "./components/ProductListing";
import { Product } from "./types";
import InfiniteScroll from "./components/InfiniteScroll";
import { State } from "./state";

function App() {

  const state = useSelector((state: State) => state.product);

  const [Products, setProducts] = useState<Product[]>([]);
  const products = state.products;
  const categories = state.categories;
  const NUMBERS_PER_PAGE = 4;
  let hasMore=Products.length<products.length
  function performIntersection(arr1: Product[], arr2: Product[]) {
    const intersectionResult = arr1.filter((x) =>
      arr2.some((y) => y._id === x._id)
    );

    return intersectionResult;
  }
  const filterProducts = (value: String, text: String) => {
    if (!value && !text) {
      setProducts(products);
    }
    if (value && !text) {

      const data = products.filter((item) => {
        return item.category === parseInt(value.toString());
      });

      setProducts(data);
    }
    if (!value && text) {

      const data = products.filter((item) => {
        return item.title
          .toLowerCase()
          .replace(" ", "")
          .includes(text.toString().replace("", ""));
      });
      setProducts(data);
    }
    if (value && text) {

      const data = products.filter((item) => {
        return item.category === parseInt(value.toString());
      });
      const data1 = products.filter((item) => {
        return item.title.toLowerCase().includes(text.toString());
      });
      const result = performIntersection(data, data1);

      setProducts(result);
    }
  };
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

 const loadMoreProducts= useCallback(
    () => {

      setPage(page+1 );

      setLoading(true);

      const newProducts = products.slice(
        page * NUMBERS_PER_PAGE,
        page * NUMBERS_PER_PAGE + 4
      );

      setProducts((products) => [...Products, ...newProducts]);
      setLoading(false);
    },
    [page,products,setPage,setProducts,Products],
  )



  return (
    <div className="App">
      <h1 className="text-center mt-3">Products</h1>
      <InfiniteScroll
        hasMoreData={hasMore}
        isLoading={loading}
        onBottomHit={loadMoreProducts}
        loadOnMount={true}
      >
        <ProductListing
        hasMore={hasMore}
          products={Products}
          categories={categories}
          filterProducts={filterProducts}
        />
      </InfiniteScroll>
    </div>
  );
}

export default App;
