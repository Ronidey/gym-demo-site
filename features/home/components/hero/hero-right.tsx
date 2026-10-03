import CircularIcon from "@/components/ui/circular-icon";
import { Apple, ChartNoAxesCombined, Dumbbell, Heart } from "lucide-react";

export default function HeroRight() {
  return (
    <div className="w-50 space-y-4">
      <IconTextWrapper icon={<Dumbbell />} text="Personalized Training Plans" />
      <IconTextWrapper icon={<Apple />} text="Nutrition Guidance" />
      <IconTextWrapper icon={<Heart />} text="Strength & Confidence" />
      <IconTextWrapper icon={<ChartNoAxesCombined />} text="Real Results" />
    </div>
  );
}

const IconTextWrapper = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <CircularIcon
        icon={icon}
        borderColorClass="border-primary"
        borderWidth="thick"
        className="shrink-0"
        size="lg"
      />
      <div className="uppercase text-xs font-medium">{text}</div>
    </div>
  );
};
