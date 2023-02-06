
import products from '../../assets/products.json'
import Categories from '../../assets/categories.json'

import { initialStateType } from "../../types";

const initialState = {
    products:products.data,
    categories:Categories.data

};

export const productReducer = (state: initialStateType = initialState) => {


      return state;
  }

