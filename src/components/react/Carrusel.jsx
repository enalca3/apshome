"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDotButton,
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
        { CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem key={index}>
              <Card className="bg-gray-50">
                <CardContent className="flex flex-col md:flex-row items-center justify-center">
                  <a href={item.link}>
                    <img src={item.imageUrl} alt={item.title} className="rounded-lg max-h-[180px] md:max-h-[400px] object-cover" />
                  </a>
                  <div className="flex md:flex-col justify-between md:justify-center mt-4 md:mx-8 gap-4 w-full md:w-1/4">
                    <h1 className="text-5xl lg:text-7xl text-black font-display uppercase object-center">
                      {item.title}
                    </h1>
                    {item.salePrice && (                    
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-5xl text-black text-right">
                          {item.salePrice} €
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 text-right line-through">
                          {item.price} €
                        </p>
                      </div>
                    )}
                    {!item.salePrice && (
                      <h2 className="text-3xl lg:text-5xl text-black text-right">
                        {item.price} €
                      </h2>
                    )}
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        {CAROUSEL_ITEMS.map((_, index) => (
          <CarouselDotButton
            key={index}
            index={index}
            autoplay={autoplay}
          />
        ))}
      </div>
    </Carousel>
  );
}
