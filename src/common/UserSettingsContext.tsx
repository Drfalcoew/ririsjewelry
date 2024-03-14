import React, { createContext, useReducer, useContext } from 'react';
import CacheService from './CacheService'; // Adjust the import path as needed
import { ShoppingCartProps } from '../model/Models';


// Extend the shape of the settings state to include user login state
export type UserSettingsState = {
  cart: ShoppingCartProps;
};

// Define new action types for user login state changes
export type UserSettingsAction =
  | { type: 'SET_CART'; payload: ShoppingCartProps }
  | { type: 'UPDATE_ITEM_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'CLEAR_CART' };


// Create a context with an undefined initial value
const UserSettingsContext = createContext<{
  state: UserSettingsState;
  dispatch: React.Dispatch<UserSettingsAction>;
} | undefined>(undefined);

const cache = new CacheService();

// Update the reducer function to handle new actions
const userSettingsReducer = (state: UserSettingsState, action: UserSettingsAction): UserSettingsState => {
  switch (action.type) {
    case 'SET_CART':
      cache.set('myCart', action.payload);
      return { ...state, cart: action.payload };
    case 'UPDATE_ITEM_QUANTITY': {
      const newItems = state.cart.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      cache.set('myCart', { ...state.cart, items: newItems });
      return { ...state, cart: { ...state.cart, items: newItems }};
    }
    case 'REMOVE_ITEM': {
      const newItems = state.cart.items.filter(item => item.id !== action.payload.id);
      cache.set('myCart', { ...state.cart, items: newItems });
      return { ...state, cart: { ...state.cart, items: newItems }};
    }
    case 'CLEAR_CART':
      cache.set('myCart', { items: [], total: 0 });
      return { ...state, cart: { items: [], total: 0 }
    };
    default:
      return state;
  }
};


// Set initial state values for userLoggedIn and userData
export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userSettingsReducer, {
    cart: cache.get('myCart') || { items: [], total: 0 },
  });

  return (
    <UserSettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

// Custom hook to use the context
export const useUserSettings = () => {
  const context = useContext(UserSettingsContext);
  if (context === undefined) {
    throw new Error('useUserSettings must be used within a UserSettingsProvider');
  }
  return context;
};
