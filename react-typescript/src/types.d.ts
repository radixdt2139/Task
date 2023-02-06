import { ReactElement } from "react";

export interface Pokedex {
    pages:   number;
    records: number;
    data:    Datum[];
    message: string;
    status:  boolean;
}

export interface Product {
    _id:                      ID;
    title:                    string;
    description:              string[] | string;
    sku?:                     string;
    price:                    number;
    category:                 number;
    manage_stock?:            String;
    stock_quantity?:          number;
    image:                    string[];
    partnerid:                string;
    created_id:               string;
    display_id:               number;
    created_date:             String;
    created_ip:               String;
    status:                   number;
    updated_date?:            String;
    updated_id?:              string;
    updated_ip?:              String;
    desciption?:              string;
    product_has_variant?:     String;
    specification?:           string;
    category_name:            string;
    discount_value?:          number | string;
    price_after_discount?:    number;
    global_usage_limit?:      number;
    minimum_cart_amount?:     number;
    maximum_cart_amount?:     number;
    global_individual_limit?: number;
    discount_type?:           String;
    product_variant:          ProductVariant[];
}

export interface ID {
    $oid: string;
}

export enum AtedIP {
    The172316173 = "172.31.6.173",
}

export enum DiscountType {
    FixedPrice = "Fixed Price",
    Percentage = "Percentage",
}

export enum ManageStock {
    No = "no",
    Yes = "yes",
}

export interface ProductVariant {
    _id:           ID;
    sku:           string;
    color:         string;
    size:          string;
    stock_quality: number;
    price:         number | string;
    product_image: string;
    product_id:    number;
    partnerid:     string;
    created_id:    string;
    status:        number;
    created_date:  String;
    created_ip:    String;
    updated_date?: String;
    updated_id?:   string;
    updated_ip?:   String;
}
export interface CategoryJson {
    data:    Datum[];
    message: string;
    status:  boolean;
}

export interface category {
    _id:                      ID;
    name:                     string;
    description:              string;
    partnerid:                string;
    created_id:               string;
    display_id:               number;
    created_date:             String;
    created_ip:               string;
    status:                   number;
    desciption?:              string;
    image?:                   string;
    updated_date?:            String;
    updated_id?:              string;
    updated_ip?:              string;
    discount_value?:          number | string;
    global_usage_limit?:      number;
    minimum_cart_amount?:     number;
    maximum_cart_amount?:     number;
    global_individual_limit?: number;
    discount_type?:           string;
}

export interface ID {
    $oid: string;
}
type infiniteScrollProps = {
    onBottomHit: () => void;
    isLoading: boolean;
    hasMoreData: boolean;
    loadOnMount: boolean;
    children: ReactElement
  };

  type initialStateType={
    products:Product[],
    categories:category[]
  }