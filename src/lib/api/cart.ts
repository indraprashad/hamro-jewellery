
import { getStorefrontUrl, getHeaders } from './config';

export interface CartItem {
  id: string;
  quantity: number;
  variant_id: string;
}

export interface Cart {
  data: {
    id: string;
    type: string;
    attributes: {
      number: string;
      item_count: number;
      total: string;
      display_total: string;
    };
  };
}

export const cartApi = {
  getCart: async (token?: string): Promise<Cart> => {
    const response = await fetch(getStorefrontUrl('/cart'), {
      method: 'GET',
      headers: getHeaders(token),
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch cart');
    }
    
    return response.json();
  },

  addToCart: async (variantId: string, quantity: number, token?: string): Promise<Cart> => {
    const response = await fetch(getStorefrontUrl('/cart/add_item'), {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify({
        variant_id: variantId,
        quantity,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }
    
    return response.json();
  },

  removeFromCart: async (lineItemId: string, token?: string): Promise<Cart> => {
    const response = await fetch(getStorefrontUrl('/cart/remove_line_item'), {
      method: 'DELETE',
      headers: getHeaders(token),
      body: JSON.stringify({
        line_item_id: lineItemId,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
    
    return response.json();
  },
};