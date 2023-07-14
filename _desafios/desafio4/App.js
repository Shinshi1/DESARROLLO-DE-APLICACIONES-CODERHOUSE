import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    Josefin: require('./src/assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf'),
    Lobster: require('./src/assets/Fonts/Lobster/Lobster-Regular.ttf'),
    PlayFair: require('./src/assets/Fonts/PlayFair/Playfair_144pt-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigator/>
  );
}
