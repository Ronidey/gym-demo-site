import styles from "./styles.module.css";
import clsx from "@/lib/clsx";
import HeroLeft from "./hero-left";
import HeroRight from "./hero-right";

export default function Hero() {
  return (
    <div
      className={clsx(
        "flex justify-between items-center px-4 sm:px-6 pt-20 pb-14 lg:px-12 text-white",
        styles.hero,
      )}
    >
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
