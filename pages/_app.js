import '../styles/global.css';
import { Roboto } from '@next/font/google';
import Head from 'next/head';

const roboto = Roboto({
    weight: ['300', '500', '700', '900'],
    subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Выкуп авто в Нижнем Новгороде и области" key="title" />
                <meta name="description" content="Выкуп авто в Нижнем Новгороде и области. Быстрая оценка вашего автомобиля на выезде. Дорогая покупка." />
  	            <meta name="keywords" content="выкуп авто, выкуп авто в нижнем новгороде, срочный выкуп авто, выкуп авто россия, оценка авто, оценка и выкуп авто, выкуп авто с пробегом, выкуп авто бу" />
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
};

export default MyApp;
