import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat: require('./src/assets/Fonts/Montserrat/Montserrat-Regular.ttf'),
    Roboto: require('./src/assets/Fonts/Roboto/Roboto-Regular.ttf'),
    Poppins: require('./src/assets/Fonts/Poppins/Poppins-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigator/>
  );
}
