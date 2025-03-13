import BlogSort from "@/components/blog/BlogSort";
import CateogryList from "@/components/blog/CateogryList";
import Loading from "@/components/ui/Loading";
import Search from "@/components/ui/Search";
import { Spinner } from "@/components/ui/Spinner";
import { Suspense } from "react";

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        {/* REASON OF USING SUSPENSE: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        <Suspense fallback={<Loading />}>
          <Search />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <BlogSort />
        </Suspense>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 lg:pl-8 text-secondary-500 space-y-4">
          <Suspense fallback={<Loading />}> 
            <CateogryList />
          </Suspense>
        </div>
        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </main>
      </div>
    </div>
  );
}
export default Layout;
