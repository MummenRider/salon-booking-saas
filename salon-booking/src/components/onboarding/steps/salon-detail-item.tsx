import Typography from "@/components/ui/typography";
import { Store } from "lucide-react";
import { FC } from "react";
import { FaStore } from "react-icons/fa";
import { LucideIcon } from "lucide-react";

type SalonDetailItemProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};
const SalonDetailItem: FC<SalonDetailItemProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className="flex items-center justify-center rounded-md p-3 bg-accent">
        <Icon className="w-6 h-5" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <Typography as="p" className="font-medium">
          {title}
        </Typography>
        <Typography as="small" className="text-muted-foreground">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default SalonDetailItem;
