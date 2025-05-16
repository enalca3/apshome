import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function AppMenuBar() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Products</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>SOFÁS</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>SOFÁ CHAISELONGUE</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>SILLÓN RELAX</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>DESCANSO</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>STOCK</MenubarItem>
                    <MenubarSeparator />
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}