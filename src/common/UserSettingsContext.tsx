import React, { createContext, useReducer, useContext } from 'react';
import CacheService from './CacheService'; // Adjust the import path as needed


// Extend the shape of the settings state to include user login state
export type UserSettingsState = {
  darkMode: boolean;
  accentColor: string;
};

// Define new action types for user login state changes
type UserSettingsAction =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_ACCENT_COLOR'; payload: string }

// Create a context with an undefined initial value
const UserSettingsContext = createContext<{
  state: UserSettingsState;
  dispatch: React.Dispatch<UserSettingsAction>;
} | undefined>(undefined);

const cache = new CacheService();

// Update the reducer function to handle new actions
const userSettingsReducer = (state: UserSettingsState, action: UserSettingsAction): UserSettingsState => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      cache.set('darkMode', !state.darkMode);
      return { ...state, darkMode: !state.darkMode };
    case 'SET_ACCENT_COLOR':
      cache.set('accentColor', action.payload);
      return { ...state, accentColor: action.payload };
    default:
      return state;
  }
};

// Set initial state values for userLoggedIn and userData
export const UserSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userSettingsReducer, {
    darkMode: cache.get('darkMode') || false, // default dark mode value (dark : light) => ('#282c34' : '#e0e0e0')
    accentColor: cache.get('accentColor') || '#455A64' // default accent color
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
