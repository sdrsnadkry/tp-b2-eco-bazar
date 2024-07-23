import {
  dropdownIcon,
  locationIcon,
  phoneIcon,
  searchIcon,
} from "@/assets/icons";
import { logo } from "@/assets/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="mx-10">
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <Image src={locationIcon} alt="location" />
            <p className="ml-2 text-gray-500">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex">
              <span className="mr-2 text-grey-500">Eng</span>
              <Image src={dropdownIcon} alt="location" />
            </span>
            <span className="flex ml-5">
              <span className="mr-2 text-grey-500">USD</span>
              <Image src={dropdownIcon} alt="location" />
            </span>
          </div>
        </div>

        {/* borer */}
        <div className="border border-gray-400"></div>

        {/* Brand logos */}
        <div className="flex items-center justify-between py-6">
          <div>
            <Image src={logo} alt="logo" width={"w-36"} height={"h-9"} />
          </div>

          <div className="flex">
            <div className="flex items-center border border-grey-100 rounded-r-none border-r-0 rounded overflow-hidden">
              <div className="flex items-center py-3 pl-4">
                <label htmlFor="searchInput">
                  <Image src={searchIcon} alt="Search" />
                </label>
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search"
                  className="outline-none ml-4 w-64"
                />
              </div>
            </div>
            <button className="bg-success text-white text-body-small py-3 px-6 rounded-r">
              Search
            </button>
          </div>

          <div className="flex items-center">
            <Image src={phoneIcon} alt="phone" width={"w-10"} height={"h-10"} />
            <div className="ml-3">
              <p className="text-body-small text-gray-400">Customer Services</p>
              <p className="text-body-xl font-medium text-grey-900">
                (219) 555-0114
              </p>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
