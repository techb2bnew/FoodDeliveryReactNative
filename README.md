# Food Delivery Mobile App

A complete React Native food delivery mobile application with modern UI/UX design and comprehensive functionality.

## Features

### Core Functionality
- **Home Screen**: Featured banners, categories, popular items, and quick actions
- **Menu Screen**: Browse all food items with search, filter, and sort options
- **Cart Management**: Add/remove items, quantity control, order summary
- **Wishlist**: Save favorite items for later
- **Offers & Deals**: View promotional offers with promo codes
- **User Authentication**: Login/signup with form validation
- **Profile Management**: Edit profile, account settings, help & support
- **Checkout Process**: Complete order placement with payment options

### Key Features
- ✅ Add to Cart functionality
- ✅ Wishlist management
- ✅ User authentication (login/signup)
- ✅ Profile editing
- ✅ Order checkout process
- ✅ Help & Support system
- ✅ Logout functionality
- ✅ Delete account with confirmation
- ✅ Responsive design for mobile devices
- ✅ Modern UI with smooth animations
- ✅ Context-based state management
- ✅ Persistent data storage with AsyncStorage

## Tech Stack

- **React Native**: 0.73.6
- **React Navigation**: Bottom tabs and stack navigation
- **React Native Vector Icons**: Material Design icons
- **AsyncStorage**: Local data persistence
- **Context API**: State management for cart, wishlist, and authentication

## Installation

1. **Prerequisites**
   - Node.js (v14 or higher)
   - React Native CLI
   - Android Studio (for Android development)
   - Xcode (for iOS development - macOS only)

2. **Clone and Install**
   ```bash
   cd FoodDeliveryApp
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the Application**
   
   For Android:
   ```bash
   npx react-native run-android
   ```
   
   For iOS:
   ```bash
   npx react-native run-ios
   ```

## Project Structure

```
FoodDeliveryApp/
├── src/
│   ├── screens/           # All screen components
│   │   ├── HomeScreen.js
│   │   ├── MenuScreen.js
│   │   ├── CartScreen.js
│   │   ├── OffersScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── LoginScreen.js
│   │   ├── CheckoutScreen.js
│   │   ├── WishlistScreen.js
│   │   ├── EditProfileScreen.js
│   │   └── HelpSupportScreen.js
│   ├── context/           # Context providers
│   │   ├── AuthContext.js
│   │   ├── CartContext.js
│   │   └── WishlistContext.js
│   ├── data/             # Sample data
│   │   └── menuData.js
│   ├── components/       # Reusable components
│   └── utils/           # Utility functions
├── App.js               # Main app component
├── package.json
└── README.md
```

## Screens Overview

### 1. Home Screen
- Welcome header with location
- Search bar with filter options
- Promotional banners carousel
- Food categories grid
- Popular items horizontal scroll
- Quick action buttons

### 2. Menu Screen
- Complete food menu with images
- Search and filter functionality
- Sort by name, price, or rating
- Category-based filtering
- Add to cart and wishlist options

### 3. Cart Screen
- Cart items with quantity controls
- Order summary with taxes and delivery fee
- Promo code application
- Proceed to checkout

### 4. Checkout Screen
- Delivery address input
- Payment method selection
- Order items review
- Special instructions
- Final order placement

### 5. Offers Screen
- Featured hot deals
- All available offers with promo codes
- Copy promo code functionality
- Terms and conditions

### 6. Profile Screen
- User information display
- Account statistics
- Menu options (orders, addresses, payments, etc.)
- Logout and delete account options

### 7. Authentication Screens
- Login and signup forms
- Form validation
- Social login options (UI only)
- Password visibility toggle

### 8. Wishlist Screen
- Saved favorite items
- Add to cart from wishlist
- Remove items functionality
- Quick actions and recommendations

### 9. Edit Profile Screen
- Update user information
- Change profile photo (UI ready)
- Account settings access
- Form validation

### 10. Help & Support Screen
- Contact options (phone, email, chat, WhatsApp)
- Comprehensive FAQ section
- Contact form for messages
- Additional resources and app info

## State Management

The app uses React Context API for state management:

- **AuthContext**: User authentication and profile data
- **CartContext**: Shopping cart items and operations
- **WishlistContext**: Wishlist items and operations

## Data Persistence

- User data, cart items, and wishlist are persisted using AsyncStorage
- Data survives app restarts and device reboots

## Design Features

- Modern, clean UI design
- Consistent color scheme (Orange #FF6B35 as primary)
- Material Design icons
- Smooth animations and transitions
- Responsive layout for different screen sizes
- Touch-friendly interface elements

## Sample Data

The app includes comprehensive sample data:
- 12 food items across 6 categories
- 3 promotional offers
- 3 banner slides
- Complete user profile data

## Testing

To test the app functionality:

1. **Authentication**: Try login/signup with any email and password
2. **Cart**: Add items from home or menu screens
3. **Wishlist**: Tap heart icons on food items
4. **Checkout**: Complete the order flow
5. **Profile**: Edit profile information
6. **Offers**: Copy promo codes and apply in cart

## Future Enhancements

- Real API integration
- Push notifications
- Real-time order tracking
- Payment gateway integration
- Social media login
- Advanced search and filters
- Order history
- Loyalty program
- Multi-language support

## License

This project is created for demonstration purposes.

## Support

For any issues or questions, please refer to the Help & Support section in the app or contact the development team.
