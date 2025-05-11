import { Flex } from "@flows/styled-system/jsx";
import { type EmblaCarouselType } from "embla-carousel";
import { ArrowLeft16, ArrowRight16 } from "icons";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import { IconButton } from "ui";

type CarouselControlsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const useCarouselControls = (
  emblaApi: EmblaCarouselType | undefined,
): CarouselControlsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const CarouselControls = ({
  emblaApi,
}: {
  emblaApi: EmblaCarouselType | undefined;
}): ReactNode => {
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useCarouselControls(emblaApi);

  return (
    <Flex gap="space8">
      {/* eslint-disable-next-line no-restricted-syntax -- not needed */}
      <IconButton
        size="large"
        variant="secondary"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <ArrowLeft16 />
      </IconButton>
      {/* eslint-disable-next-line no-restricted-syntax -- not needed */}
      <IconButton
        size="large"
        variant="secondary"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <ArrowRight16 />
      </IconButton>
    </Flex>
  );
};
