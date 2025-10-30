
import { getStorefrontUrl, getHeaders } from './config';

export interface CheckoutData {
  order: {
    email?: string;
    bill_address_attributes?: {
      firstname: string;
      lastname: string;
      address1: string;
      city: string;
      phone: string;
      zipcode: string;
      state_name: string;
      country_iso: string;
    };
    ship_address_attributes?: {
      firstname: string;
      lastname: string;
      address1: string;
      city: string;
      phone: string;
      zipcode: string;
      state_name: string;
      country_iso: string;
    };
  };
}

export const checkoutApi = {
  updateCheckout: async (data: CheckoutData, token?: string) => {
    const response = await fetch(getStorefrontUrl('/checkout'), {
      method: 'PATCH',
      headers: getHeaders(token),
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update checkout');
    }
    
    return response.json();
  },

  completeCheckout: async (token?: string) => {
    const response = await fetch(getStorefrontUrl('/checkout/complete'), {
      method: 'POST',
      headers: getHeaders(token),
    });
    
    if (!response.ok) {
      throw new Error('Failed to complete checkout');
    }
    
    return response.json();
  },
};