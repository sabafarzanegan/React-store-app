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
  shipping?: string;
};

export type productRespobseWithParams = ProductResponse & { params: params };
