import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';

export default function App() {

  const [fontsLoaded] = useFonts({
    MontserratBold: require('./src/assets/Fonts/Montserrat/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/Fonts/Montserrat/Montserrat-SemiBold.ttf'),
    RobotoRegular: require('./src/assets/Fonts/Roboto/Roboto-Regular.ttf'),
    PoppinsBold: require('./src/assets/Fonts/Poppins/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./src/assets/Fonts/Poppins/Poppins-SemiBold.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
