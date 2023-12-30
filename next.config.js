/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    endPoint: "https://dev.tahadialthalatheen.com/api",
    // NEXTAUTH_URL: "https://www.tahadialthalatheen.com/",
    NEXTAUTH_URL: "http://localhost:3000/",
    NEXT_PUBLIC_APP_URL: "http://localhost:3000/",
    GOOGLE_CLIENT_ID:
      "632655184190-9goi1hn08c8i2fibmh806bj18f8or75f.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    SECRET: "LlKq6ZtYbr+hTCgj78mAmAh9/h2HwMfs",
    JWT_SECRET: "AQARICLIENgho9inateJWTToke5",
  },
};

module.exports = nextConfig;
