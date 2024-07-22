import { dropdownIcon, locationIcon } from "@/assets/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="mx-10">
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <Image src={locationIcon} alt="location" />
            <p className="ml-2">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="flex items-center">
            <span className="flex">
              <span className="mr-2">Eng</span>
              <Image src={dropdownIcon} alt="location" />
            </span>
            <span className="flex ml-5">
              <span className="mr-2">USD</span>
              <Image src={dropdownIcon} alt="location" />
            </span>
          </div>
        </div>

        {/* borer */}
        <div className="border border-gray-400"></div>

        {/* Brand logos */}
        <div></div>
      </header>
    </main>
  );
}
