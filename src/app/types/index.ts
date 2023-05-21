export interface GetAllResponse {
  limit: number;
  skip: number;
  total: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface GetAllProductsResponse extends GetAllResponse {
  products: Product[];
}
