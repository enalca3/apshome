"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
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
              <Card className="bg-gray-50">
                <CardContent className="flex items-center justify-center">
                  
                  <img src={CAROUSEL_ITEMS[index]} alt="Imagen" className="rounded-lg max-h-[180px] md:max-h-[400px] object-cover" />
                  <div className="hidden md:flex md:flex-col  justify-top mx-8 gap-2">
                    <h1 className="text-5xl lg:text-7xl text-balance text-black font-display uppercase">
                      Imagen {index + 1}
                    </h1>                    
                    <h2 className="text-3xl lg:text-5xl text-balance text-black text-right">895,99 €</h2>
                    <p className="text-lg lg:text-2xl text-balance text-gray-600 text-right line-through">1.200 €</p>                    
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
