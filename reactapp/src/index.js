import ReactDOM from 'react-dom';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './components/Redux/Store';
//import { store, persistor } from './components/Galleryapp/Store';

ReactDOM.render(
  <GoogleOAuthProvider clientId="114683306969-tgghv5nmlrdfpefv38l39122gb571ce8.apps.googleusercontent.com">
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
   </PersistGate>
  </Provider>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);