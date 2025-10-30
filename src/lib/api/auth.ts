
import { getStorefrontUrl, getHeaders } from './config';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  password_confirmation: string;
  first_name?: string;
  last_name?: string;
}

export interface AuthResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      email: string;
      store_credits: number;
      completed_orders: number;
    };
  };
  meta: {
    token: string;
  };
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(getStorefrontUrl('/account'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ user: credentials }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return response.json();
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await fetch(getStorefrontUrl('/account'), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ user: data }),
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    
    return response.json();
  },

  getAccount: async (token: string) => {
    const response = await fetch(getStorefrontUrl('/account'), {
      method: 'GET',
      headers: getHeaders(token),
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch account');
    }
    
    return response.json();
  },
};