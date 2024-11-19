// pages/_app.js
import '../styles/Admin.css';
import '../styles/User.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
