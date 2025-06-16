'use client';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

import type { MenuSection } from '@/types/menu';
import React from "react";

interface Props {
    className?: string;
    menuItems: MenuSection[][];
}

export default function AppDrawer({ className, menuItems }: Props) {

    const scrollToSection = (sectionTitle: string) => {
             
        const closeButton = document.querySelector('[data-slot="drawer-close"]');
        if (closeButton) {
            (closeButton as HTMLElement).click();
            // esperar a que se cierre el drawer
            setTimeout(() => { 
                // scroll to section after drawer is closed
                const element = document.querySelector(`[id="${sectionTitle}"]`);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - 50;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300); // Adjust the timeout as needed
            return;
        }

    };

    return (
    <Drawer direction="left" >
      <DrawerTrigger asChild className={className}>
        <Button variant="outline" className="flex items-center gap-2">
          <Menu className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="top-0 left-0 h-full w-64 max-w-[80%] p-4 border-r bg-background rounded-none">
        <DrawerHeader className="flex flex-row justify-between items-end">
          <DrawerTitle>
            <a href="/" className="flex items-center w-1/3">
                <img src="/images/logo.webp" alt="Home" className="aspect-square rounded-full object-cover" />
            </a>
          </DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="absolute top-4 right-4">
              <X className="w-5 h-5" />
            </Button>
          </DrawerClose>
          
        </DrawerHeader>
        <div className="mt-4 space-y-2">
            {menuItems.map((item) => (
                <React.Fragment key={item[0].title}>
                <div
                    className="text-lg font-medium hover:text-primary border-2 border-transparent hover:border-primary rounded-lg p-2 cursor-pointer transition-colors"
                    onClick={() =>
                        item[0].href
                            ? (window.location.href = item[0].href!)
                            : scrollToSection(item[0].title)
                        }
                >
                    {item[0].title}
                </div>                
                </React.Fragment>
            ))}
        </div>
      </DrawerContent>
    </Drawer>
    );
}