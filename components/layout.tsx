import { ReactNode } from "react";
import { LeftSideBar } from "./shared";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/** Left Sidebar */}
      <div className="w-1/5 border-r border-r-gray-700 p-4">
        <LeftSideBar />
      </div>
      <main className="flex-1 p-4">{children}</main>
      {/** Right Sidebar */}
      <div className="w-1/5 bg-slate-800 p-4">
        <p>Right Sidebar</p>
      </div>
    </div>
  );
};
export default Layout;
