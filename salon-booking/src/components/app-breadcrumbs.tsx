"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const AppBreadCrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Removes empty strings
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const segmentUpper =
            segment.at(0)?.toUpperCase() + segment.slice(1) || "";
          const isOnboarding = href.startsWith("/onboarding");

          return (
            <Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  // Last item - non-clickable
                  <span className="font-medium text-foreground">
                    {segmentUpper}
                  </span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={isOnboarding ? "/dashboard" : href}>
                      {segmentUpper}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <ChevronRight className="h-4 w-4" />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadCrumbs;
