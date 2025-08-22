import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './src/context/AppContext';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import CartScreen from './src/screens/CartScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import AuthScreen from './src/screens/AuthScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import AddressesScreen from './src/screens/AddressesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SupportScreen from './src/screens/SupportScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import CategoryItemsScreen from './src/screens/CategoryItemsScreen';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsConditions from './src/screens/TermsConditions';
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: '#f9fafb' }
            }}
          >
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                headerShown: true,
                title: 'Your Cart',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Wishlist"
              component={WishlistScreen}
              options={{
                headerShown: true,
                title: 'WishList',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="ItemDetail"
              component={ItemDetailScreen}
              options={{
                headerShown: true,
                title: 'Item Details',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="CategoryItemsScreen"
              component={CategoryItemsScreen}
              options={{
                headerShown: true,
                title: 'Category Items',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Auth"
              component={AuthScreen}
              options={{
                headerShown: true,
                title: 'Sign In',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEditScreen}
              options={{
                headerShown: true,
                title: 'Edit Profile',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="OrderHistory"
              component={OrderHistoryScreen}
              options={{
                headerShown: true,
                title: 'Order History',
                headerStyle: { backgroundColor: '#ef4444', height: 55 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Addresses"
              component={AddressesScreen}
              options={{
                headerShown: true,
                title: 'Saved Addresses',
                headerStyle: { backgroundColor: '#ef4444', height: 60 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: true,
                title: 'Settings',
                headerStyle: { backgroundColor: '#ef4444', height: 60 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Support"
              component={SupportScreen}
              options={{
                headerShown: true,
                title: 'Support',
                headerStyle: { backgroundColor: '#ef4444', height: 60 },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
               />
            <Stack.Screen name="TermsConditions" component={TermsConditions} 
            
             />

          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaView>
  );
}