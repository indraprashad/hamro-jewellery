
import { getStorefrontUrl, getHeaders } from './config';

export interface Product {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string;
    price: string;
    display_price: string;
    slug: string;
    images: Array<{
      url_original: string;
      url_product: string;
      url_small: string;
    }>;
  };
}

export interface ProductsResponse {
  data: Product[];
  meta: {
    count: number;
    total_count: number;
    total_pages: number;
  };
}

export const productsApi = {
  getProducts: async (params?: {
    page?: number;
    per_page?: number;
    filter?: Record<string, string>;
  }): Promise<ProductsResponse> => {
    const searchParams = new URLSearchParams();
    
    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.per_page) searchParams.set('per_page', params.per_page.toString());
    if (params?.filter) {
      Object.entries(params.filter).forEach(([key, value]) => {
        searchParams.set(`filter[${key}]`, value);
      });
    }
    
    const url = `${getStorefrontUrl('/products')}?${searchParams.toString()}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return response.json();
  },

  getProduct: async (id: string): Promise<{ data: Product }> => {
    const response = await fetch(getStorefrontUrl(`/products/${id}`), {
      method: 'GET',
      headers: getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    return response.json();
  },
};