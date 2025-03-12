import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Blog",
  description: "Blogs",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
      <Footer/>
    </>
  );
}
