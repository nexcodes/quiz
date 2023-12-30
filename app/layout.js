import Head from "next/head";
import AuthContext from "./context/authContext";

import { ToastContainer } from "react-toastify";

import "./globals.css";
import "@/styles/globe.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "تحدي الثلاثين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.tahadialthalatheen.com/" />
        <meta
          property="og:title"
          content="تحدي الثلاثين - عالم التحديات الذهنية"
        />
        <meta
          property="og:description"
          content="أهلاً بكم في 'تحدي الثلاثين'، حيث تتحول كل ثانية إلى فرصة لإثبات الذكاء والمعرفة. هذه اللعبة هي بوابتكم لعالم مليء بالتحديات الذهنية والمنافسة الشيقة. هنا، كل سؤال يفتح آفاقًا جديدة للفكر والإبداع، وكل جولة تقودكم إلى مستويات أعلى من التحدي والإثارة."
        />
        <meta property="og:image" content="رابط صورة المعاينة" />
        <meta property="og:url" content="https://www.tahadialthalatheen.com/" />
        <meta property="og:site_name" content="تحدي الثلاثين" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="أهلاً بكم في 'تحدي الثلاثين'، حيث تتحول كل ثانية إلى فرصة لإثبات الذكاء والمعرفة. هذه اللعبة هي بوابتكم لعالم مليء بالتحديات الذهنية والمنافسة الشيقة. هنا، كل سؤال يفتح آفاقًا جديدة للفكر والإبداع، وكل جولة تقودكم إلى مستويات أعلى من التحدي والإثارة."
        />
        <meta
          property="og:title"
          content="تحدي الثلاثين - عالم التحدي والإبداع"
        />
        <meta
          property="og:description"
          content="أهلاً بكم في 'تحدي الثلاثين'، حيث تتحول كل ثانية إلى فرصة لإثبات الذكاء والمعرفة. هذه اللعبة هي بوابتكم لعالم مليء بالتحديات الذهنية والمنافسة الشيقة."
        />
        <meta
          property="og:image"
          content="https://www.tahadialthalatheen.com/_next/image?url=%2Fsmart-phone.png&w=1920&q=75"
        />
        <meta property="og:url" content="https://www.tahadialthalatheen.com/" />
        <meta property="og:site_name" content="تحدي الثلاثين" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="https://www.tahadialthalatheen.com/_next/image?url=%2Fsmart-phone.png&w=1920&q=75"
        />
        <meta
          name="twitter:title"
          content="تحدي الثلاثين - عالم التحدي والإبداع"
        />
        <meta
          name="twitter:description"
          content="أهلاً بكم في 'تحدي الثلاثين'، حيث تتحول كل ثانية إلى فرصة لإثبات الذكاء والمعرفة. هذه اللعبة هي بوابتكم لعالم مليء بالتحديات الذهنية والمنافسةs الشيقة."
        />
        <meta name="twitter:image" content="رابط صورة المعاينة" />

        <meta
          name="keywords"
          content="تحدي الثلاثين
ذكاء
معرفة
تحديات ذهنية
منافسة
لعبة ذكاء
ألعاب تفكير
إبداع
تفوق ذهني
تحدي وإثارة"
        />
        <meta name="referrer" content="no-referrer" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body className={"font-almrai"}>
        <AuthContext>
          <ToastContainer />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
