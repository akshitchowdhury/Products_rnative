import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteItem from './components/favoriteItem/FavoriteItem';
import ProductListing from './screens/productListing/ProductListing';
import ProductDetails from './screens/productDetails/ProductDetails';

import Selected from './screens/favorites/Selected';




const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
{/*       
      <ProductListing/>
      <ProductDetails/>
      <Selected/>
       */}
    
    <StatusBar style="auto" />

    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="productListing" component={ProductListing} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
      
      <Stack.Screen name="favorites" component={Selected} />
      </Stack.Navigator>
    </NavigationContainer>   
    <StatusBar style="auto" />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'violet',
    flex: 1,
  },
});
