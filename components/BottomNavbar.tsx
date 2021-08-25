import { SearchIcon } from "@heroicons/react/solid";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline";

export default function BottomNavbar() {
  return (
    <div className="inline sm:hidden lg:hidden xl:hidden 2xl:hidden">
      <div className="text-[#222] sticky bottom-0 z-50 border-t-2 border-gray-100 flex md:grid md:grid-cols-3 bg-white shadow-xl py-4 px-5 md:px-10 lg:px-16">
        <div className="flex justify-center space-x-12 items-center mx-auto">
          <div className="">
            <SearchIcon className="text-[#ff385c] h-[30px]" />
            <p className="text-[10px] leading-[14px]">Explore</p>
          </div>
          <div className="">
            <HeartIcon className="text-gray-300 h-[30px]" />
            <p className="text-[10px] leading-[14px]">Wishlist</p>
          </div>
          <div className="">
            <UserCircleIcon className="text-gray-300 h-[30px]" />
            <p className="text-[10px] leading-[14px]">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}
