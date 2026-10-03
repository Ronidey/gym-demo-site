import Button from "@/components/ui/button";
import { ArrowRight, Brain, Dumbbell, Heart, Play } from "lucide-react";

export default function HeroLeft() {
  return (
    <div>
      <div className="uppercase text-sm mb-4 tracking-widest text-gray-300">
        <span className="pr-3 border-r border-primary-light">Train Harder</span>
        <span className="px-3 border-r border-primary-light">
          Stay Stronger
        </span>
        <span className="px-3">Be A Better You</span>
      </div>

      <div className="mb-8">
        <h1 className="text-5xl font-bold uppercase mb-4">
          Discipline <span className="block text-primary text-6xl">Builds</span>{" "}
          A Stronger You
        </h1>
        <p className="text-sm mb-4 text-gray-300">
          Personalized training programs to help you get stronger,
          <br /> fitter and more confident - inside and out.
        </p>

        <div className="flex items-center gap-4">
          <Button className="uppercase" size="lg">
            <div className="flex items-center gap-3">
              <span>Start Your Journey</span>
              <div className="w-6 h-6 rounded-full bg-black flex justify-center items-center">
                <ArrowRight size={16} />
              </div>
            </div>
          </Button>

          <div className="flex items-center border-l border-primary-light pl-4 gap-2">
            <div className="w-12 h-12 border border-white rounded-full flex justify-center items-center">
              <Play fill="white" />
            </div>
            <span className="uppercase text-sm">
              Watch <br /> My Story
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-3 px-5">
          <Dumbbell className="text-primary" size={32} />
          <span className="text-xs uppercase font-medium">
            Stronger <br /> body
          </span>
        </div>

        <div className="flex items-center gap-3 px-5 border-l border-primary-light">
          <Brain className="text-primary" size={32} />
          <span className="text-xs uppercase font-medium">
            Stronger <br /> body
          </span>
        </div>

        <div className="flex items-center gap-3 px-5 border-l border-primary-light">
          <Heart className="text-primary" size={32} />
          <span className="text-xs uppercase font-medium">
            Happier <br /> You
          </span>
        </div>
      </div>
    </div>
  );
}
