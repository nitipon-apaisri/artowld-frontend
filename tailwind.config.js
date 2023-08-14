/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0652DD",
            },
            aspectRatio: {
                "4/3": "4/3",
            },
            boxShadow: {
                custom: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
                custom2: "0px 20px 25px -5px rgba(0, 0, 0, 0.025), 0px 10px 10px -5px rgba(0, 0, 0, 0.02)",
            },
            translate: {
                center: "-50%, -50%",
            },
        },
    },
    plugins: [],
};
