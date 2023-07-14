import { StyleSheet, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import ItemListCategory from './src/Screens/ItemListCategory';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    Josefin: require('./src/assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf'),
    Lobster: require('./src/assets/Fonts/Lobster/Lobster-Regular.ttf'),
    PlayFair: require('./src/assets/Fonts/PlayFair/Playfair_144pt-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        categorySelected ?
          <ItemListCategory category={categorySelected} setCategory={setCategorySelected} />
          :
          <Home setCategorySelected={setCategorySelected} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
