export interface MenuItem {
  title: string;
  href: string;
}

export interface MenuSection {
  title: string;
  href: string;
  items: MenuItem[];
}