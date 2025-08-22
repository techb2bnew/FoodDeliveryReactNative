import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  cartTotal: 0,
  selectedItem: null,
  searchQuery: '',
  selectedCategory: 'all',
  favorites: [],
  orders: [
    {
      id: 'ORD001',
      date: '2024-01-15',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 24.99,
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      items: ['Chicken Burger', 'French Fries'],
      total: 18.50,
      status: 'Delivered'
    }
  ],
  addresses: [
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Downtown, City 12345',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      address: '456 Business Ave, Office District, City 12345',
      isDefault: false
    }
  ]
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload
      };

    case 'LOGOUT':
      AsyncStorage.removeItem('user'); // remove from storage also
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        cart: []
      };

    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      let newCart;

      if (existingItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: newCart,
        cartTotal: newCart.reduce((total, item) => total + (item.price * item.quantity), 0)
      };

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: filteredCart,
        cartTotal: filteredCart.reduce((total, item) => total + (item.price * item.quantity), 0)
      };

    case 'UPDATE_CART_QUANTITY':
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      return {
        ...state,
        cart: updatedCart,
        cartTotal: updatedCart.reduce((total, item) => total + (item.price * item.quantity), 0)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        cartTotal: 0
      };

    case 'SET_SELECTED_ITEM':
      return {
        ...state,
        selectedItem: action.payload
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };

    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload
      };

    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };

    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      };

    case 'UPDATE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(addr =>
          addr.id === action.payload.id ? action.payload : addr
        )
      };

    case 'DELETE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(addr => addr.id !== action.payload)
      };

    case 'SET_DEFAULT_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(addr => ({
          ...addr,
          isDefault: addr.id === action.payload
        }))
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          dispatch({ type: 'SET_USER', payload: JSON.parse(storedUser) });
        }
      } catch (error) {
        console.error('Error loading user:', error);
      }
    };
    loadUser();
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}