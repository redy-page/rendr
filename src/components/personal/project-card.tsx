"use client";
import { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Icons } from "../icons";

export default function ProjectCard({ project }: { project: Project }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Card
        className="grid gap-4 hover:border-b-primary hover:border-b-2 hover:shadow-lg cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      >
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>
            {project.month ?? ""} {project.year ?? ""}
          </CardDescription>
          <CardContent className="text-sm px-0 py-2">
            {project.description.length > 200
              ? project.description.substring(0, 200) + "..."
              : project.description}
          </CardContent>
        </CardHeader>
      </Card>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm md:max-w-5xl py-12 px-4 overflow-y-auto max-h-[85vh]">
            <DrawerHeader>
              <DrawerTitle>{project.name}</DrawerTitle>
              <DrawerDescription>
                {project.month ?? ""} {project.year ?? ""}
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col md:flex-row gap-6 px-4 justify-center items-center">
              {project.thumbnail && (
                <div className="flex flex-col md:flex-row md:w-[50%]">
                  <Avatar className="w-full h-auto rounded-none">
                    <AvatarImage
                      src="https://github.com/jmadupalli/redy-blog/raw/main/demo/redy-blog-demo.gif"
                      alt="thumbnail"
                      className="object-contain"
                    />
                    <AvatarFallback>
                      <Icons.image className="w-full h-auto text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
              <div className="flex flex-1 flex-col text-sm md:flex-row md:text-base">
                <p className="whitespace-pre-line w-full break-keep">
                  {project.description}
                </p>
              </div>
            </div>

            <DrawerFooter>
              {project.link && (
                <Button variant="default">
                  <Link href={project.link} target="_blank" className="w-full">
                    View Project
                  </Link>
                </Button>
              )}
              <DrawerClose asChild>
                <Button variant="secondary">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}