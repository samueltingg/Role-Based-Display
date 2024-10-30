import '../styles/globals.css';
import { RoleProvider } from '../context/RoleContext';

function MyApp({ Component, pageProps }) {
  return (
    <RoleProvider>
      <Component {...pageProps} />
    </RoleProvider>
  );
}

export default MyApp;
