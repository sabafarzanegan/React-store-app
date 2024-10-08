export type NavLinks = {
  name: string;
  path: string;
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: string;
    price: string;
    shipping: boolean;
    colors: string[];
  };
};

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type ProductResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  page?: number;
  shipping?: boolean;
};

export type productRespobseWithParams = ProductResponse & { params: params };

export type singleproduct = {
  data: Product;
  meta: {};
};

export type cartItem = {
  cartId: string;
  productId: number;
  title: string;
  image: string;
  price: number;
  productColor: string;
  amount: number;
  company: string;
};

export type cartState = {
  cartItem: cartItem[];
  cartTotal: number;
  numItemsIncart: number;
  tax: number;
  shipping: number;
  orderTotal: number;
};

export type Checkout = {
  name: string;
  address: string;
  chargeTotal: string;
  orderTotal: string;
  cartItems: cartItem[];
  numItemsInCart: number;
};

export type Order = {
  id: number;
  attributes: {
    address: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    orderTotal: string;
    cartItems: cartItem[];
    numItemsInCart: number;
  };
};

export type orderMeta = {
  pagination: Pagination;
};

export type orderResponse = {
  data: Order[];
  meta: orderMeta;
};
