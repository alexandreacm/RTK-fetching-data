import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@shopify/restyle';

import { Home } from './src/pages/Home';
import { store } from './src/store';
import theme from './src/styles/theme';
import useExpoFont from './src/hooks/useExpoFont';

export default function App() {
  const isLoadingFont = useExpoFont();

  if (isLoadingFont) {
    return (
      <>
        <StatusBar style="auto" />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </Provider>
      </>
    );
  }

}

