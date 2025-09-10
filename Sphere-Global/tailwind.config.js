module.exports = {
  theme: {
    extend: {
      animation: {
        "move-card": "moveCard 3s ease-in-out infinite",
      },
      keyframes: {
        moveCard: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
