import { getProfile, getSocials } from "@/app/_internal/apiUtil";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SocialIcons from "./social-icons";

export default async function ProfileSection() {
  const profile = await getProfile("jmadupalli.redy.page");
  const socials = await getSocials("jmadupalli.redy.page");

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row justify-center lg:gap-32 space-y-6 pb-8 md:pb-12 lg:pb-32 lg:pt-16 border-b">
      <div className="flex flex-col justify-center items-center lg:items-end">
        <div className="text-center">
          <Avatar className="w-32 h-32 md:w-48 md:h-48 mb-4 mx-auto">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt={profile.firstName}
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold">
            <p>
              {profile.firstName} {profile.lastName}
            </p>
            <p className="text-sm py-1">{profile.headline}</p>
          </span>
          <span className="mt-1 w-[50%] mx-auto block border-t" />
          <SocialIcons socials={socials} />
        </div>
      </div>
      <div className="flex flex-col m-auto lg:m-0 max-w-2xl px-6 md:px-0 justify-center items-center lg:items-start text-center">
        <p className="whitespace-pre-line break-normal text-left text-sm md:text-base">
          {profile.about}
        </p>
      </div>
    </section>
  );
}
