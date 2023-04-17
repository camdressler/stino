module.exports = {
    mode: "jit",
    content: ["./components/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                "s-brown": "#5b4230",
                "s-tan": "#ede0d4"
            }
        }
    },
    variants: {},
    plugins: []
};
