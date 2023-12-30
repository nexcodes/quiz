import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/profile",
  },
  debug: "development",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(user) {
      try {
        if (
          user.account.provider === "google" ||
          user.account.provider === "apple"
        ) {
          const data = {
            dto: {
              socialMediaId: user.account.providerAccountId,
              firstName: user.profile.given_name,
              lastName: user.profile.family_name,
              email: user.profile.email,
              phone: user.profile.phone,
            },
          };

          const response = await axios.post(
            `${process.env.endPoint}/UserPlayer/Register`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            user.user.token = response.data.data.token;
          } else {
            user = undefined;
          }

          if (user !== undefined) {
            return true;
          } else {
            return false;
          }
        }
      } catch (err) {
        console.log("ERROR_", err);
        return false;
      }
    },
    async session({ session, token, user }) {
      if (token) {
        session.info = user;
        session.email = session.user.email;
        session.name = session.user.name;
        session.image = session.user.image;
        session.user = token.id;
        session.token = token.userToken;
        session.userId = token.sub;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.userToken = user.token;
      }

      return token;
    },
  },
  secret: process.env.SECRET,
};
