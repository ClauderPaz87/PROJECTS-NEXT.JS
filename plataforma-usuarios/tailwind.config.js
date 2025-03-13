/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      "users-background-header":"#3c8dbc;",
      "users-logo-color":"#367fa9;",
      "users-sidebar": "#222d32",
      "users-person-sidebar": "#1e282c",
      "users-menu-sidebar":"#1a2226",
      "users-modal":"#00a65a",
      "users-modal-admin":"#f39c12",
      "users-bg-tbody":"#f9f9f9"

    }},
  },
  plugins: [],
}

