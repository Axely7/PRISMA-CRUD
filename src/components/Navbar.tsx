import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href={"/"}>
          <h3 className="font-bold text-3xl">Next CRUD</h3>
        </Link>
        <ul className="flex gap-x-3 text-xl font-bold">
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href={"/new"}>
              New
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-300 hover:text-slate-200"
              href={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
