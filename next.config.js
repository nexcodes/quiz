/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    endPoint: "https://dev.tahadialthalatheen.com/api",
    NEXTAUTH_URL: "https://quiz-iota-olive.vercel.app/",
    // NEXTAUTH_URL: "http://localhost:3000/",
    NEXT_PUBLIC_APP_URL: "https://quiz-iota-olive.vercel.app/",
    GOOGLE_CLIENT_ID:
      "894198026676-l0nk0ng3tt65l3aue6l4724on0ngnr85.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    SECRET: "LlKq6ZtYbr+hTCgj78mAmAh9/h2HwMfs",
    JWT_SECRET: "AQARICLIENgho9inateJWTToke5",
  },
};

module.exports = nextConfig;
