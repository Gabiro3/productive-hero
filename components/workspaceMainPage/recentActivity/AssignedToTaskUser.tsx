"use client";

import { UserAvatar } from "@/components/ui/user-avatar";
import { useTruncateText } from "@/hooks/useTruncateText";
import { WorkspaceRecentActivityAssignedToItem } from "@/types/extended";

interface Props {
  userInfo: WorkspaceRecentActivityAssignedToItem;
}

export const AssignedToTaskUser = ({
  userInfo: {
    user: { image, username },
  },
}: Props) => {
  const name = useTruncateText(username, 25);

  return (
    <div className="w-fit flex gap-2 items-center px-3 py-1 h-fit text-xs rounded-md border border-input bg-background">
      <UserAvatar className="w-5 h-5" size={12} profileImage={image} />
      <p className="text-secondary-foreground">{name}</p>
    </div>

  );
};
