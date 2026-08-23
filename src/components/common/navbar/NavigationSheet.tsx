import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-full shadow-none"
          aria-label="메뉴 열기"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 pt-5">
        <SheetTitle className="sr-only">사이트 메뉴</SheetTitle>
        <SheetDescription className="sr-only">
          페이지를 선택하면 메뉴가 닫히고 해당 페이지로 이동합니다.
        </SheetDescription>
        <Logo onNavigate={() => setOpen(false)} />
        <NavMenu
          orientation="vertical"
          className="mt-10 w-full max-w-none"
          onNavigate={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
};
