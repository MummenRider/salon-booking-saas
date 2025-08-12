import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button variant="ghost" className="underline">
      <Link href={href} className="flex justify-center items-center gap-2">
        <MoveLeft /> {label}
      </Link>
    </Button>
  );
};

export default BackButton;
