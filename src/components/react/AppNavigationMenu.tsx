import { 
    NavigationMenu, 
    NavigationMenuTrigger, 
    NavigationMenuContent, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink } from '@/components/ui/navigation-menu';

export default function AppNavigationMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul>
                            <li>
                                <NavigationMenuLink href="/products/sofa-chaise-longue-paris">
                                    Paris
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/products/sofa-chaise-longue-toscama">
                                    Toscama
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/products/sofa-ibiza">
                                    Ibiza
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/products/sofa-bella">
                                    Bella
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}