"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EmblaCarousel, { api } from "../embla-carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { usePrevNextButtons } from "../embla-carousel-arrow-buttons";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  startIndex: 1,
};

export default function LandingPageTestimonials() {
  return (
    <div className="w-[1100px] m-auto py-32">
      <h1 className="text-center text-5xl font-semibold leading-[55px]">
        Inspiring Testimonials:
        <br /> Hear the Voices of Success
      </h1>
      <p className="text-center text-xl pt-6 font-light">
        Learn How Our Platform Enhances Productivity, Simplifies Workflows, and
        Fosters Success for Individuals and Teams
      </p>
      <EmblaCarousel
        slides={[
          <TestimonialCard
            key={1}
            description="Task Forge has been a game-changer for our team. The intuitive interface
            and customizable workflows have significantly improved our project
            management. It's a joy to see everyone on the same page,
            collaborating seamlessly, and achieving goals more efficiently."
            image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            name="Sarah W."
            role="Project Manager"
          />,
          <TestimonialCard
            key={2}
            description="Running a small business means wearing many hats. Task Forge helps me juggle tasks effortlessly. The centralized hub for organization and smart notifications keep me on top of everything. It's like having a personal assistant, but digital!"
            name="Micheal Gough"
            image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            role="Web Designer"
          />,
          <TestimonialCard
            key={3}
            description="As a freelancer, staying organized is crucial. Task Forge has become my go-to tool. The simplicity of the user interface is a lifesaver, allowing me to focus on my work without getting lost in complex features. It's exactly what I needed for streamlined task management."
            image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
            name="Andrew S."
            role="Freelancer"
          />,
        ]}
        options={OPTIONS}
      />
    </div>
  );
}

function TestimonialCard({
  description,
  image,
  name,
  role,
}: {
  description: string;
  image: string;
  name: string;
  role: string;
}) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(api);
  return (
    <div className="mt-16 bg-secondary rounded-lg p-10 flex flex-col justify-center items-center gap-8 h-full mx-10">
      <p className="text-2xl font-semibold text-center leading-[40px]">
        {description}
      </p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name?.at(0)}</AvatarFallback>
        </Avatar>
        <h1 className="leading-tight font-semibold">{name}</h1>
        <p className="leading-tight font-semibold">/</p>
        <h2 className="font-light text-gray-500">{role}</h2>
      </div>
      <div className="flex gap-6 text-gray-500">
        <ArrowLeft
          className="hover:text-primary cursor-pointer"
          onClick={onPrevButtonClick}
        />
        <ArrowRight
          className="hover:text-primary cursor-pointer"
          onClick={onNextButtonClick}
        />
      </div>
    </div>
  );
}
