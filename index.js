/**
 * @format
 */

import 'react-native-reanimated'
import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import Providers from './src/utils/Providers';

function Application() {
    return (
        <Providers>
            <App />
        </Providers>
    );
}

AppRegistry.registerComponent(appName, () => Application);