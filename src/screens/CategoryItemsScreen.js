// screens/CategoryItemsScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Static menu data
const menuItems = [
    // 🍕 Pizza
    { id: 'p1', categoryId: 'pizza', name: 'Margherita Pizza', description: 'Classic tomato, mozzarella & basil', price: 18.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p2', categoryId: 'pizza', name: 'Quattro Stagioni Pizza', description: 'Mushrooms, artichokes, olives, prosciutto', price: 22.99, rating: 4.9, image: 'https://plus.unsplash.com/premium_photo-1730829140510-68f7cf61d621?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p3', categoryId: 'pizza', name: 'Pepperoni Pizza', description: 'Cheese, pepperoni & tomato sauce', price: 20.5, rating: 4.8, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p4', categoryId: 'pizza', name: 'BBQ Chicken Pizza', description: 'BBQ sauce, chicken, onions, cheese', price: 21.0, rating: 4.6, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'p5', categoryId: 'pizza', name: 'Veggie Supreme', description: 'Peppers, onions, olives, sweetcorn', price: 19.5, rating: 4.5, image: 'https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // 🍔 Burgers
    { id: 'b1', categoryId: 'burgers', name: 'Classic Beef Burger', description: 'Juicy beef patty, cheese, lettuce, tomato', price: 12.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
    { id: 'b2', categoryId: 'burgers', name: 'Cheese Burger', description: 'Beef patty, cheddar cheese, pickles', price: 13.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1603893662172-99ed0cea2a08?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'b3', categoryId: 'burgers', name: 'Veggie Burger', description: 'Grilled veggie patty, lettuce, tomato', price: 11.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1661529515567-dcb300f41da5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'b4', categoryId: 'burgers', name: 'BBQ Bacon Burger', description: 'Beef, bacon, BBQ sauce, cheese', price: 14.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'b5', categoryId: 'burgers', name: 'Spicy Chicken Burger', description: 'Crispy chicken, spicy mayo, lettuce', price: 13.99, rating: 4.6, image: 'https://plus.unsplash.com/premium_photo-1695758787023-fc064818f22d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // 🌯 Rolls
    { id: 'r1', categoryId: 'rolls', name: 'Paneer Tikka Roll', description: 'Spicy paneer, onions, mint chutney', price: 8.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'r2', categoryId: 'rolls', name: 'Chicken Kathi Roll', description: 'Chicken, onions, spicy chutney', price: 9.5, rating: 4.8, image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'r3', categoryId: 'rolls', name: 'Veg Frankie Roll', description: 'Veggies, spices, tangy sauce', price: 7.5, rating: 4.5, image: 'https://images.unsplash.com/photo-1604908816649-c8bdfc3ca68b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'r4', categoryId: 'rolls', name: 'Egg Roll', description: 'Egg, onions, mayo, ketchup', price: 8.5, rating: 4.6, image: 'https://media.istockphoto.com/id/922650360/photo/egg-and-sausage-breakfast-egg-roll.jpg?s=1024x1024&w=is&k=20&c=IN69c6-EXXOd9ZvpMJQof7JIynwCoInvdHcJG3F6Qmo=' },
    { id: 'r5', categoryId: 'rolls', name: 'Mutton Roll', description: 'Mutton, onions, chutney', price: 10.0, rating: 4.7, image: 'https://media.istockphoto.com/id/467111693/photo/kati-roll.jpg?s=1024x1024&w=is&k=20&c=mvuZ40NZALTPjVwfzXwo-IrGacJJ58V6qmsc05Wkx4Y=' },

    // 🥗 Salads
    { id: 's1', categoryId: 'salads', name: 'Caesar Salad', description: 'Lettuce, croutons, parmesan, dressing', price: 9.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
    { id: 's2', categoryId: 'salads', name: 'Greek Salad', description: 'Tomato, cucumber, feta, olives', price: 10.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400' },
    { id: 's3', categoryId: 'salads', name: 'Garden Salad', description: 'Mixed greens, cucumber, carrot', price: 8.5, rating: 4.5, image: 'https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 's4', categoryId: 'salads', name: 'Pasta Salad', description: 'Pasta, veggies, Italian dressing', price: 9.0, rating: 4.6, image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400' },
    { id: 's5', categoryId: 'salads', name: 'Fruit Salad', description: 'Seasonal fruits, honey drizzle', price: 7.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // 🍱 Combos
    { id: 'c1', categoryId: 'combos', name: 'Burger Combo', description: 'Burger + Fries + Coke', price: 15.99, rating: 4.7, image: 'https://plus.unsplash.com/premium_photo-1695758787023-fc064818f22d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'c2', categoryId: 'combos', name: 'Pizza Combo', description: 'Small pizza + Garlic bread + Drink', price: 18.5, rating: 4.8, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' },
    { id: 'c3', categoryId: 'combos', name: 'Roll Combo', description: '2 Rolls + Drink', price: 12.5, rating: 4.6, image: 'https://media.istockphoto.com/id/922650360/photo/egg-and-sausage-breakfast-egg-roll.jpg?s=1024x1024&w=is&k=20&c=IN69c6-EXXOd9ZvpMJQof7JIynwCoInvdHcJG3F6Qmo=' },
    { id: 'c4', categoryId: 'combos', name: 'Salad Combo', description: 'Salad + Soup + Breadsticks', price: 13.5, rating: 4.5, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
    { id: 'c5', categoryId: 'combos', name: 'Dessert Combo', description: 'Cake + Ice Cream', price: 10.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400' },

    // 🍰 Desserts
    { id: 'd1', categoryId: 'desserts', name: 'Chocolate Cake', description: 'Rich chocolate layered cake', price: 6.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd2', categoryId: 'desserts', name: 'Cheesecake', description: 'Creamy cheesecake with strawberry topping', price: 7.5, rating: 4.8, image: 'https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd3', categoryId: 'desserts', name: 'Ice Cream Sundae', description: 'Vanilla ice cream, chocolate syrup', price: 5.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1541996275318-4890e83660a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd4', categoryId: 'desserts', name: 'Brownie', description: 'Chocolate brownie with nuts', price: 4.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd5', categoryId: 'desserts', name: 'Panna Cotta', description: 'Cream dessert with berry topping', price: 6.5, rating: 4.8, image: 'https://plus.unsplash.com/premium_photo-1713895023426-e887351e3756?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // 🍛 Main Course
    { id: 'm1', categoryId: 'maincourse', name: 'Paneer Butter Masala', description: 'Paneer in rich tomato gravy', price: 14.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'm2', categoryId: 'maincourse', name: 'Chicken Curry', description: 'Spicy chicken curry', price: 15.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'm3', categoryId: 'maincourse', name: 'Dal Makhani', description: 'Creamy black lentils', price: 12.5, rating: 4.6, image: 'https://plus.unsplash.com/premium_photo-1699293238761-993a897373ea?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'm4', categoryId: 'maincourse', name: 'Biryani', description: 'Fragrant rice with chicken', price: 16.0, rating: 4.9, image: 'https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'm5', categoryId: 'maincourse', name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: 13.5, rating: 4.5, image: 'https://images.unsplash.com/photo-1601050690332-f3c6d7270b4a?w=400' },

    // 🍤 Starters
    { id: 'st1', categoryId: 'starters', name: 'Spring Rolls', description: 'Crispy veggie spring rolls', price: 7.5, rating: 4.6, image: 'https://images.unsplash.com/photo-1679310290259-78d9eaa32700?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'st2', categoryId: 'starters', name: 'Chicken Tikka', description: 'Grilled marinated chicken', price: 9.5, rating: 4.8, image: 'https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'st3', categoryId: 'starters', name: 'Paneer Pakora', description: 'Paneer fritters', price: 8.0, rating: 4.5, image: 'https://media.istockphoto.com/id/1543384026/photo/schezwan-paneer.jpg?s=1024x1024&w=is&k=20&c=MC8y0UpP34F-NRuW3NHa_qltI_8tbzMncQTBGencOdM=' },
    { id: 'st4', categoryId: 'starters', name: 'Veg Manchurian', description: 'Veg balls in spicy sauce', price: 8.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1682622110433-65513a55d7da?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'st5', categoryId: 'starters', name: 'Aloo Tikki', description: 'Spiced potato patties', price: 7.0, rating: 4.6, image: 'https://images.unsplash.com/photo-1660715683888-8e506d6898c8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    // 🥤 Beverages
    { id: 'be1', categoryId: 'beverages', name: 'Coca Cola', description: 'Chilled soft drink', price: 2.5, rating: 4.5, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'be2', categoryId: 'beverages', name: 'Lemonade', description: 'Fresh lemon juice', price: 3.0, rating: 4.6, image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'be3', categoryId: 'beverages', name: 'Iced Tea', description: 'Chilled tea with lemon', price: 3.5, rating: 4.7, image: 'https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?q=80&w=3180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'be4', categoryId: 'beverages', name: 'Cold Coffee', description: 'Iced coffee with milk', price: 4.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400' },
    { id: 'be5', categoryId: 'beverages', name: 'Orange Juice', description: 'Fresh orange juice', price: 3.5, rating: 4.7, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];


export default function CategoryItemsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { state, dispatch } = useApp();
    const { categoryId } = route.params;

    // find if this product is already in the cart
    // Filtered items
    const filteredItems = menuItems.filter(item => item.categoryId === categoryId);

    const handleAddToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
        Toast.show('Item added to cart!');

    };

    const handleItemPress = (item) => {
        dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
        navigation.navigate('ItemDetail');
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
        } else {
            dispatch({
                type: 'UPDATE_CART_QUANTITY',
                payload: { id: itemId, quantity: newQuantity }
            });
        }
    };

    const renderItem = ({ item }) => {
        const cartItem = state.cart.find((c) => c.id === item.id);
        return (
            <Pressable style={styles.card} onPress={() => handleItemPress(item)}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.row}>
                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                        <View style={styles.rating}>
                            <Text style={{ color: '#fbbf24', fontSize: 14 }}>★</Text>
                            <Text style={styles.ratingText}>{item.rating}</Text>
                        </View>
                    </View>
                </View>
                {cartItem ? (
                    <View style={styles.quantityControls}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => updateQuantity(item.id, cartItem.quantity - 1)}
                        >
                            <Ionicons name="remove" size={14} color="#ef4444" />
                        </TouchableOpacity>

                        <Text style={styles.quantity}>{cartItem.quantity}</Text>

                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => updateQuantity(item.id, cartItem.quantity + 1)}
                        >
                            <Ionicons name="add" size={14} color="#ef4444" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => handleAddToCart(item)}
                    >
                        <Ionicons name="add" size={16} color="#fff" />
                    </TouchableOpacity>
                )}

            </Pressable>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
            <FlatList
                data={filteredItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 2,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    description: {
        fontSize: 13,
        color: '#6b7280',
        marginVertical: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginRight: 10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 13,
        color: '#374151',
        marginLeft: 3,
    },
    addButton: {
        backgroundColor: '#ff6600',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    addText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fef2f2',
        borderRadius: 16,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    quantityButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ef4444',
    },
    quantity: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginHorizontal: 6,
        minWidth: 18,
        textAlign: 'center',
    },
});
