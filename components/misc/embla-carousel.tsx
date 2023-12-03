import React, { ReactElement } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";

type PropType = {
  slides: ReactElement[];
  options?: EmblaOptionsType;
};

export let api: EmblaCarouselType | undefined = undefined;

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  api = emblaApi;

  return (
    <div>
      <div ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index.key}>
              {index}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
