import { FILES_SERVER, fetchProfileForPage } from "@/app/_internal/apiUtil";
import { Avatar } from "../ui/avatar";
import { Icons } from "../icons";
import Image from "next/image";
import SocialIcons from "../personal/social-icons";

export default async function BlogProfile() {
  const profile = await fetchProfileForPage();
  return (
    <>
      <div className="hidden lg:flex flex-col w-[24rem] py-16 border-s ">
        <div className="fixed px-8">
          <div className="flex flex-col">
            <div className="text-center max-w-[300px]">
              <Avatar className="w-48 h-48 mx-auto">
                {profile.profilePicture ? (
                  <Image
                    alt="Avatar"
                    src={`${FILES_SERVER}${profile.profilePicture}`}
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
                <p>
                  {profile.profile.firstName} {profile.profile.lastName}
                </p>
                <p className="text-sm py-1">{profile.profile.headline}</p>
              </span>
              <SocialIcons socials={profile.socials} />
            </div>
          </div>
          <div className="flex flex-col m-auto items-center mt-4">
            <p className="whitespace-pre-line break-normal text-left text-sm">
              {profile.profile.about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
