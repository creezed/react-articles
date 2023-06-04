import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './style/theme';
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { AppRouter } from '@/app/providers/router';
import { StoreProvider } from '@/app/providers/store/ui/StoreProvider';

const { ToastContainer } = createStandaloneToast();

export const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <ChakraProvider theme={theme}>
            <AppRouter />
            <ToastContainer />
          </ChakraProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  );
};
