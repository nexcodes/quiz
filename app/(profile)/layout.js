import Footer from "@/components/footer";

export default function UserLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
