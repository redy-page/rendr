"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import { Icons } from "../icons";

export default function ArticleShare({ articleURL }: { articleURL: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-2 text-sm hover:text-muted-foreground">
          <Icons.share />
          Share
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <TwitterShareButton url={articleURL}>
            <TwitterIcon className="inline rounded-full w-4 h-4" /> Twitter
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LinkedinShareButton url={articleURL}>
            <LinkedinIcon className="inline rounded-full w-4 h-4" /> LinkedIn
          </LinkedinShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <FacebookShareButton url={articleURL}>
            <FacebookIcon className="inline rounded-full w-4 h-4" /> Facebook
          </FacebookShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RedditShareButton url={articleURL}>
            <RedditIcon className="inline rounded-full w-4 h-4" /> Reddit
          </RedditShareButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
