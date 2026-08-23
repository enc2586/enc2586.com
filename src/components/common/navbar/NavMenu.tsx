import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Link } from "@tanstack/react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Links", to: "/links" },
] as const;

interface NavMenuProps extends NavigationMenuProps {
  onNavigate?: () => void;
}

export const NavMenu = ({
  className,
  onNavigate,
  ...props
}: NavMenuProps) => {
  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink asChild>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "bg-primary/15 text-primary",
                }}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
