import React, { FC, useRef } from "react";
import { category, Product } from "../types";

interface ProductListingProps {
  products: Product[];
  categories: category[];
  filterProducts: (value: String, text: String) => void;
  hasMore: Boolean;
}

const ProductListing: FC<ProductListingProps> = ({
  products,
  categories,
  filterProducts,
  hasMore,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  return (
    <>
      <div className="row mt-5 mx-3 ">
        <div className="col-6">
          {" "}
          <select
            className="form-control"
            ref={select}
            onChange={() => {
              filterProducts(
                select.current?.value || "",
                input.current?.value || ""
              );
            }}
          >
            <option value="">please select category</option>
            {categories.map((item) => {
              return (
                <option key={item._id.$oid} value={`${item.display_id}`}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-6">
          {" "}
          <input
            className="form-control"
            onChange={() => {
              filterProducts(
                select.current?.value || "",
                input.current?.value || ""
              );
            }}
            ref={input}
            type="text"
            placeholder="search the text"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="row mx-5 mt-5">
        {products.length > 0 ?
          products.map((product) => {
            return (
              <div
                key={product._id.$oid + product.created_date}
                className="col-6"
                style={{ height: "24rem" }}
              >
                <div className="card">
                  <div className="row">
                    <div className="col-6">
                      {" "}
                      <img
                        width={"200px"}
                        height={"200px"}
                        src={`${product.image[0]}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="col-6">
                      <div>
                        {" "}
                        <span>Title : </span>{" "}
                        <span className="card-text">{product.title}</span>
                      </div>
                      <div>
                        {" "}
                        <span>Category : </span>
                        <span>{product.category}</span>
                      </div>
                      <div>
                        {" "}
                        <span>Price : </span>
                        <span>
                          <del> {product.price} </del>{" "}
                          {product.price_after_discount}{" "}
                        </span>
                      </div>
                      <div>
                        {" "}
                        <span>Status : </span>
                        <span>{product.status}</span>
                      </div>
                      <div>
                        {" "}
                        <span>Stock Quantity : </span>
                        <span>{product.stock_quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }):<h3>No Found Any Data</h3>}
        {!hasMore && <h1 className="mb-5">You reached at the End.....</h1>}
      </div>
    </>
  );
};

export default ProductListing;
