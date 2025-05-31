'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Menu } from "lucide-react"

import type { MenuSection } from '@/types/menu';
import React from "react";

interface Props {
    menuItems: MenuSection[][];
}

export default function AppMenuBar({ menuItems }: Props) {

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
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                <Menu className="mr-2 h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent forceMount className="position-absolute z-50">
                {menuItems.map((section, index) => (
                    <React.Fragment key={section[0].title}>
                    <MenubarItem
                        onClick={() =>
                        section[0].href
                            ? (window.location.href = section[0].href!)
                            : scrollToSection(section[0].title)
                        }
                    >
                        {section[0].title}
                    </MenubarItem>
                    {index !== menuItems.length - 1 && <MenubarSeparator />}
                    </React.Fragment>
                ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    )
}