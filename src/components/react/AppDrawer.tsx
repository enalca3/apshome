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
        
        const element = document.querySelector(`[data-section="${sectionTitle}"]`);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 50;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Menu className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="top-0 left-0 h-full w-64 max-w-[80%] p-4 border-r bg-background rounded-none">
        <DrawerHeader className="flex flex-col justify-between items-end">
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="w-5 h-5" />
            </Button>
          </DrawerClose>
          <DrawerTitle>
            <a href="/" className="flex items-center w-1/8">
                <img src="/images/logo.webp" alt="Home" className="aspect-square rounded-full object-cover" />
            </a>
          </DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 space-y-2">
            {menuItems.map((item) => (
                <React.Fragment key={item[0].title}>
                <h3
                    onClick={() =>
                        item[0].href
                            ? (window.location.href = item[0].href!)
                            : scrollToSection(item[0].title)
                        }
                >
                    {item[0].title}
                </h3>                
                </React.Fragment>
            ))}
        </div>
      </DrawerContent>
    </Drawer>
    );
}