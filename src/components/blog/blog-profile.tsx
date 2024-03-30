import { FILES_SERVER } from "@/app/_internal/apiUtil";
import { Avatar } from "../ui/avatar";
import { Icons } from "../icons";
import Image from "next/image";
import SocialIcons from "../personal/social-icons";
import { PageProfile } from "@/lib/types";

export default async function BlogProfile({
  profile,
}: {
  profile: PageProfile;
}) {
  return (
    <>
      <div className="hidden xl:flex flex-col w-[20rem] border-s mx-auto items-center pt-[10rem]">
        <div className="fixed px-8 mx-auto">
          <div className="flex flex-col">
            <div className="text-center max-w-[300px]">
              <Avatar className="w-40 h-40 mx-auto mb-1.5">
                {profile.pagePicture ? (
                  <Image
                    alt="Avatar"
                    src={`${FILES_SERVER}${profile.pagePicture}`}
                    width={300}
                    height={300}
                    quality={95}
                    className="object-cover"
                  />
                ) : (
                  <Icons.user className="object-cover text-muted-foreground w-full h-full" />
                )}
              </Avatar>
              <span className="font-bold text-xl">
                <p>{profile.pageTitle}</p>
                <p className="text-sm py-1">{profile.headline}</p>
              </span>
              <SocialIcons socials={profile.socials} />
            </div>
          </div>
          {
            /* if only blog */ false && (
              <div className="flex flex-col m-auto items-center mt-4">
                <p className="whitespace-pre-line break-normal text-left text-sm">
                  {profile.about}
                </p>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
