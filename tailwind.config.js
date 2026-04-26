export default {
    content:[
        "./index.html",
        "./src/**/*.{js,jsx}",

    ],
  
    theme: {
        extend: {
        colors: {
            primary: "#00ffcc",     // accent (green/cyan)
            bg: "#9c9c9c",          // main background
            card: "#1e293b",        // card background
            textMain: "#ffffff",
            textSecondary: "#94a3b8",
        },
        borderRadius: {
            xl: "1rem",
            "2xl": "1.5rem",
        }
        },
    },
    plugins:[],
}