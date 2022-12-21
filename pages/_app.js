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
