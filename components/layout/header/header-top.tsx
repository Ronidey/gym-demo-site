import InstagramIcon from "@/components/icons/instagram-icon";
import CircularIcon from "@/components/ui/circular-icon";
import { Clock, Dumbbell, Mail, Phone } from "lucide-react";
import ContactWrapper from "./contact-wrapper";
import styles from "./styles.module.css";
import clsx from "@/lib/clsx";

export default function HeaderTop() {
  return (
    <div className="flex items-center h-12">
      <div
        className={clsx(
          "w-full max-w-sm flex items-center gap-2 bg-primary text-white h-full pl-4 sm:pl-6 lg:pl-10",
          styles.headerSkew,
        )}
      >
        <Dumbbell size={22} />
        <span className="text-sm font-medium">
          Train Harder. Live Healthier. Be Stronger.
        </span>
      </div>

      <div></div>

      <div className="flex-1 flex items-center h-full text-white bg-gray-800 pr-4 sm:pr-6 lg:pr-10">
        <div className="w-full flex justify-end items-center">
          <ContactWrapper
            icon={<Phone size={20} className="text-primary" />}
            text="+91 987643210"
          />

          <ContactWrapper
            icon={<Mail size={20} className="text-primary" />}
            text="info@golanfitness.com"
          />

          <ContactWrapper
            icon={<Clock size={20} className="text-primary" />}
            text="Mon - Sat: 6:00 AM - 9:00 PM"
          />

          <div className="flex items-center gap-2 ml-4">
            <CircularIcon size="sm" icon={<InstagramIcon />} />
            <CircularIcon size="sm" icon={<InstagramIcon />} />
            <CircularIcon size="sm" icon={<InstagramIcon />} />
            <CircularIcon size="sm" icon={<InstagramIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}
