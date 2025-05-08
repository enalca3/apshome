"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { CAROUSEL_ITEMS } from "@/conts/carousel"

export default function Carrusel() {

    const autoplay = useRef(
        Autoplay(
            {   delay: 3000, 
                stopOnInteraction: true
            }, // Puedes ajustar el delay en ms
            (emblaRoot) => emblaRoot.parentElement
        )
    );


  return (
    <Carousel 
        className="w-full"
        plugins={[autoplay.current]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center w-full">
                  <img src={CAROUSEL_ITEMS[index]} alt="Imagen" className="rounded-lg md:h-[800px] xs:w-[800px] md:w-[1200px] object-cover" />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
