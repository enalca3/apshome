import React, {
  type ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import type {AutoplayType} from "embla-carousel-autoplay";

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export interface DotButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  selected?: boolean;
  className?: string;
  autoplay?: React.RefObject<AutoplayType>;
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  autoplay: React.RefObject<AutoplayType> | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {

      if (!emblaApi) return
      emblaApi.scrollTo(index)

      if (autoplay?.current) {
        autoplay.current.stop()
      }
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const DotButton = React.forwardRef<HTMLButtonElement, DotButtonProps>(
  ({ index, selected, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={className}
        {...props}
      >
      </button>
    )
  }
)
