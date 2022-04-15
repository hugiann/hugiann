/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '@assets/main.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="w-full min-h-screen">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
