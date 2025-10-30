
export const API_CONFIG = {
  BASE_URL: 'https://yalula.dcpl.bt',
  STOREFRONT_API: '/api/v2/storefront',
  PAYMENT_API: '/api/v1/rma_payments',
  TIMEOUT: 30000,
} as const;

export const getStorefrontUrl = (path: string) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.STOREFRONT_API}${path}`;
};

export const getPaymentUrl = () => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.PAYMENT_API}`;
};

export const getHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};