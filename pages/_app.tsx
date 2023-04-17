import { poppins } from "@/lib/fonts";

import "@/styles/index.css";

function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <main className={poppins.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default App;
