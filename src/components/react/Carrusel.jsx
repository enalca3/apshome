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
        { CAROUSEL_ITEMS.map((item, index) => (
          <CarouselItem key={index}>
              <Card className="bg-gray-50">
                <CardContent className="flex items-center justify-center">
                  
                  <img src={item.imageUrl} alt={item.title} className="rounded-lg max-h-[180px] md:max-h-[400px] object-cover" />
                  <div className="hidden md:flex md:flex-col  justify-top mx-8 gap-2">
                    <h1 className="text-5xl lg:text-7xl text-balance text-black font-display uppercase">
                      {item.title}
                    </h1>
                    {item.salePrice && (                    
                      <>
                        <h2 className="text-3xl lg:text-5xl text-balance text-black text-right">
                          {item.salePrice} €
                        </h2>
                        <p className="text-lg lg:text-2xl text-balance text-gray-600 text-right line-through">
                          {item.price} €
                        </p>
                      </>
                    )}
                    {!item.salePrice && (
                      <h2 className="text-3xl lg:text-5xl text-balance text-black text-right">
                        {item.price} €
                      </h2>
                    )}                    
                  </div>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
