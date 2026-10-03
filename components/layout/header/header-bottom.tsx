import { Dumbbell, MoveRight, TextAlignJustify } from "lucide-react";
import Link from "next/link";
import NavLinks from "./nav-links";
import Button from "@/components/ui/button";

export default function HeaderBottom() {
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-12 flex items-center justify-between text-white py-4">
      <Link
        href="/"
        className="text-2xl italic flex items-center gap-2 font-bold"
      >
        Golan <Dumbbell />
      </Link>

      <div className="flex items-center">
        <div className="border-gray-600 border-r">
          <NavLinks />
        </div>

        <div className="border-gray-600 border-r px-4">
          <Button size="lg" endIcon={<MoveRight />}>
            Free Consultation
          </Button>
        </div>

        <div className="flex justify-end ml-4">
          <button>
            <TextAlignJustify />
          </button>
        </div>
      </div>
    </div>
  );
}
