
import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartApi, Cart } from '@/lib/api/cart';
import { useAuth } from './AuthContext';

interface CartContextType {
  cart: Cart | null;
  addToCart: (variantId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  refreshCart: () => Promise<void>;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const { token } = useAuth();

  const refreshCart = async () => {
    try {
      const cartData = await cartApi.getCart(token || undefined);
      setCart(cartData);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [token]);

  const addToCart = async (variantId: string, quantity: number) => {
    const updatedCart = await cartApi.addToCart(variantId, quantity, token || undefined);
    setCart(updatedCart);
  };

  const removeFromCart = async (lineItemId: string) => {
    const updatedCart = await cartApi.removeFromCart(lineItemId, token || undefined);
    setCart(updatedCart);
  };

  const itemCount = cart?.data.attributes.item_count || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        refreshCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};