import '../styles/global.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: ['300', '500', '700', '900'],
    subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
    return (
        <>
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
