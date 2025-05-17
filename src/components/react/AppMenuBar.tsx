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
                <MenubarContent>
                    {menuItems.map((section) => (
                        <MenubarItem 
                            key={section[0].title} 
                            onClick={() => section[0].href 
                                ? window.location.href = section[0].href! 
                                : scrollToSection(section[0].title)
                            }
                        >
                            {section[0].title}
                            <MenubarSeparator />
                        </MenubarItem>                        
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}