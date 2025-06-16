import { 
    NavigationMenu, 
    NavigationMenuTrigger, 
    NavigationMenuContent, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink 
} from '@/components/ui/navigation-menu';
import type { MenuSection } from '@/types/menu';

interface Props {
    menuItems: MenuSection[];
}

export default function AppNavigationMenu({ menuItems }: Props) {

    const scrollToSection = (sectionId: string) => {
        setTimeout(() => { 
            const element = document.querySelector(`[id="${sectionId.replace('/#', '')}"]`);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - 50;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    };

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menuItems.map((section) => (
                    <NavigationMenuItem key={section.title}>
                        <NavigationMenuTrigger onClick={() => {                                
                                window.location.href = section.href
                                scrollToSection(section.href);
                            }
                        }>
                            {section.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                {section.items.map((item) => (
                                    <li key={item.title}>
                                        <NavigationMenuLink href={item.href}>
                                            {item.title}
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}