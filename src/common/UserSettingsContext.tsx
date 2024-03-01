import React, { createContext, useReducer, useContext } from 'react';
import CacheService from './CacheService'; // Adjust the import path as needed
import { ShoppingCartProps } from '../model/Models';


// Extend the shape of the settings state to include user login state
export type UserSettingsState = {
  cart: ShoppingCartProps;
};

// Define new action types for user login state changes
type UserSettingsAction =
  | { type: 'SET_CART'; payload: ShoppingCartProps };

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
    default:
      return state;
  }
};

// Set initial state values for userLoggedIn and userData
export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userSettingsReducer, {
    cart: cache.get('myCart') || 
      { items: [{ id: 1, title: 'Product 1', description: 'Product 1 description', price: 499, quantity: 1, image: 'https://via.placeholder.com/150' }, 
      { id: 1, title: 'Product 1', description: 'Product 1 description', price: 599, quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 1, title: 'Product 1', description: 'Product 1 description', price: 499, quantity: 1, image: 'https://via.placeholder.com/150' }, 
      { id: 1, title: 'Product 1', description: 'Product 1 description', price: 599, quantity: 1, image: 'https://via.placeholder.com/150' }], total: 1098 },
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
