
import { getPaymentUrl, getHeaders } from './config';

export interface ARRequest {
  message_type: 'AR';
  payment_id: string;
}

export interface ARResponse {
  transaction_id: string;
  bank_id: string;
}

export interface AERequest {
  message_type: 'AE';
  payment_id: string;
  bank_id: string;
  account_no: string;
  transaction_id: string;
}

export interface DRRequest {
  message_type: 'DR';
  payment_id: string;
  transaction_id: string;
  otp: string;
}

export const paymentApi = {
  authenticationRequest: async (paymentId: string): Promise<ARResponse> => {
    const response = await fetch(getPaymentUrl(), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        message_type: 'AR',
        payment_id: paymentId,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Authentication request failed');
    }
    
    return response.json();
  },

  accountEntry: async (data: Omit<AERequest, 'message_type'>): Promise<void> => {
    const response = await fetch(getPaymentUrl(), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        message_type: 'AE',
        ...data,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Account entry failed');
    }
  },

  debitRequest: async (data: Omit<DRRequest, 'message_type'>): Promise<void> => {
    const response = await fetch(getPaymentUrl(), {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        message_type: 'DR',
        ...data,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Debit request failed');
    }
  },
};