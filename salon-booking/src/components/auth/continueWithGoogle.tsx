"use client"
import { Button } from "@/components/ui/button"
import { FC } from "react";
import { FaGoogle } from "react-icons/fa"

interface ContinueWithGoogleProps {
    onClick: () => void;
}
const ContinueWithGoogle: FC<ContinueWithGoogleProps> = ({ onClick }) =>
    <Button variant="outline" className="w-fit mx-auto" onClick={onClick}>
        <FaGoogle className="h-5 w-5" /> Continue with Google
    </Button>

export default ContinueWithGoogle