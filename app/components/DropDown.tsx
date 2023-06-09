import React, { use, useState } from "react";
import { SlUser } from "react-icons/sl";
import Button from "./Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DropDownProps {
  handleLogout: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className=" relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" p-2 bg-neutral-600 "
      >
        <SlUser className="text-white" />
      </Button>
      {isOpen && (
        <div className="z-10  bg-neutral-800 divide-y divide-gray-700 rounded-md shadow w-52 absolute right-0 top-11 font-medium">
          <ul className="p-1 text-sm text-white cursor-pointer">
            <li className="flex justify-between items-center hover:bg-neutral-600">
              <div
                onClick={() => router.push("/account")}
                className="block px-3 py-2  "
              >
                Tài khoản
              </div>
              <BsBoxArrowUpRight size={16} className="mr-2" />
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-neutral-600  ">
                Hồ sơ
              </a>
            </li>
            <li className="flex justify-between items-center hover:bg-neutral-600  ">
              <Link
                href="https://www.spotify.com/vn-vi/premium/?ref=web_loggedin_upgrLinkde_menu"
                className="block px-3 py-2 "
              >
                Nâng cấp lên Premium
              </Link>
              <BsBoxArrowUpRight size={16} className="mr-2" />
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-neutral-600  ">
                Cài đặt
              </a>
            </li>
          </ul>
          <div className="py-2">
            <div
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-white hover:bg-neutral-600  cursor-pointer"
            >
              Đăng xuất
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
