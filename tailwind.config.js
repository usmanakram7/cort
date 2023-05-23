/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },

        extend: {
            colors: {
                Stroke: "#D8DBDD",
                Primarycolor: "#3D4D53",
                white: "#FFFFFF",
                background: "#1B2D33",
                Maincolor: "#7D3519",
                bgclr: "#F8F8F8",
                red: "#E22828",
                livebgclr: "rgba(61, 77, 83, 0.6)",
                textb: "#3D4D53",
                datebg: "#BE9A8C",
                // abc: "linear-gradient(90.28deg, #ACB4B7 0.28%, #A9B7BC 99.81%);"
            },
            borderRadius: {
                "10px": "0.625rem",
                "14px": "0.875rem",
            },
            spacing: {
                "13px": "0.8125rem",
                "14px": "0.875rem",
                "100px": "6.25rem",
                "528px": "33rem",
                "75px": "4.688",
                "160px": "160px",
            },
            width: {
                436: "27.25rem",
                32: "32.90%",
            },
            height: {
                sidebar: "99.5vh",
                200: "12.5rem",
            },
            blur: {
                xs: "2.5px",
            },
            padding: {
                "75px": "75px",
                "60px": "60px",
            },
            boxShadow: {
                dashboard_badge: "inset 0px 3px 20px rgba(0, 0, 0, 0.15)",
                header_shadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
            }
        },
    },
    plugins: [],
};
