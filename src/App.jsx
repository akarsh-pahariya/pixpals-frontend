import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { RouterProvider } from 'react-router-dom';
import appRouter from './router/appRouter';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
        <ToastContainer />
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
