"use client";

import ActiveLink from "@/components/ui/active-link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  href: string;
  Icon: LucideIcon;
  hoverTextKey: string;
  include?: string;
}

export const SidebarLink = ({ hoverTextKey, href, Icon, include }: Props) => {
  const t = useTranslations("SIDEBAR.MAIN");

  return (
    <HoverCard openDelay={250} closeDelay={250}>
      <HoverCardTrigger asChild>
        <ActiveLink
          include={include}
          variant={"ghost"}
          size={"icon"}
          href={href}
          className="flex items-center justify-center w-12 h-12" // Adjust width and height
        >
          <Icon className="w-6 h-6" /> {/* Adjust icon size */}
        </ActiveLink>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <span>{t(hoverTextKey)}</span>
      </HoverCardContent>
    </HoverCard>
  );
};

