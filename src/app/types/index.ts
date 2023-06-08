export interface GetAllResponse {
  limit: number;
  skip: number;
  total: number;
}

export interface BadRequestResponse {
  message: string;
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

interface CartPayloadProduct {
  id: number;
  quantity: number;
}

export interface CartPayload {
  userId: number;
  products: CartPayloadProduct[];
}

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountedPercentage: number;
  discountedPrice: number;
}

export interface CartResponse {
  id: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
  products: CartProduct[];
}

export interface GetUserCartResponse extends GetAllResponse {
  carts: CartResponse[];
}

export interface SelectOption {
  label: string;
  value: number | string;
}
