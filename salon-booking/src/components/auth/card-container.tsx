"use client";
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BackButton from "./buttons/back-button";
import React, { FC } from "react";

interface CardContainerProps {
  title: string;
  description: string;
  backbuttonLabel: string;
  backbuttonHref: string;
  children: React.ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({
  title,
  description,
  backbuttonLabel,
  backbuttonHref,
  children,
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
      <CardFooter className="absolute top-5 -left-5">
        <BackButton label={backbuttonLabel} href={backbuttonHref} />
      </CardFooter>
    </Card>
  );
};
export default CardContainer;
