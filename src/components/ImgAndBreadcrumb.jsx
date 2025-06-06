import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Ellipsis, ChevronRightIcon } from "lucide-react";
import WordPullUp from "./ui/word-pull-up2";

const ITEMS_TO_DISPLAY = 3;

const ImgAndBreadcrumb = ({ imageSrc, imageAlt, breadcrumbItems, title }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative flex items-end justify-center h-44 sm:h-96">
      <img
        src={imageSrc}
        alt={imageAlt || "Image"}
        className="absolute top-0 left-0 object-cover w-full h-full shadow-sm -z-10"
      />
      <WordPullUp
        words={title}
        className="sm:text-6xl px-2 text-white font-extrabold absolute top-12 sm:top-[45%] tracking-wide text-center leading-tight"
      />
      <Breadcrumb className="relative z-10 -mb-8 transition-all duration-300 ease-in-out hover:drop-shadow-2xl drop-shadow-xl hover:scale-105">
        <BreadcrumbList className="px-8 py-4 bg-red-500 rounded-full">
          {isDesktop ? (
            // Desktop view: show all breadcrumbs
            breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={index}>
                {item.href ? (
                  <>
                    <BreadcrumbLink asChild className="">
                      <Link
                        to={item.href}
                        className="text-lg font-semibold text-white transition-colors duration-100 ease-in-out hover:text-slate-100 "
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator className="[&>svg]:w-5 [&>svg]:h-5 mt-1 text-white flex items-center justify-end">
                        <ChevronRightIcon className="stroke-[3] w-full h-full" />
                      </BreadcrumbSeparator>
                    )}
                  </>
                ) : (
                  <BreadcrumbPage className="text-lg font-semibold text-slate-200">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            ))
          ) : (
            // Mobile view: show first, ellipsis, and last two
            <>
              {breadcrumbItems.length > 0 && (
                <BreadcrumbItem className="text-white mobile-breadcrumb-item">
                  <BreadcrumbLink asChild className="text-white">
                    <Link to={breadcrumbItems[0].href}
                     className=" font-semibold text-white transition-colors duration-100 ease-in-out hover:text-slate-100 ">
                      {breadcrumbItems[0].label}
                      
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {breadcrumbItems.length > ITEMS_TO_DISPLAY && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Drawer open={open} onOpenChange={setOpen}>
                      <DrawerTrigger aria-label="Toggle Menu">
                        <Ellipsis className="w-4 h-4" />
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader className="text-left">
                          <DrawerTitle>Navigate to</DrawerTitle>
                          <DrawerDescription>
                            Select a page to navigate to.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="grid gap-1 px-4">
                          {breadcrumbItems.slice(1, -2).map((item, index) => (
                            <Link
                              key={index}
                              to={item.href ? item.href : "#"}
                              className="py-1 text-sm text-white"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <DrawerFooter className="pt-4">
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </BreadcrumbItem>
                </>
              )}
              {breadcrumbItems.slice(1).map((item, index) => (
                <BreadcrumbItem key={index} className="text-white">
                  <BreadcrumbSeparator />
                  {item.href ? (
                    <BreadcrumbLink
                      asChild
                      className="truncate max-w-20 md:max-w-none text-white"
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="truncate max-w-20 md:max-w-none text-white">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              ))}
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default ImgAndBreadcrumb;
