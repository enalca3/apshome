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
        <NavigationMenu>
            <NavigationMenuList>
                {menuItems.map((section) => (
                    <NavigationMenuItem key={section.title}>
                        <NavigationMenuTrigger onClick={() => scrollToSection(section.title)}>
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