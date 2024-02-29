import { Icons } from "@/components/icons";
import { ImageResponse } from "next/og";
import { getProfile } from "../_internal/apiUtil";

export const contentType = "image/png";

export default async function Image() {
  const { profile, avatar } = await getProfile();
  return new ImageResponse(
    (
      <>
        <div tw="w-full h-[100vh] flex flex-col justify-center items-center bg-black border-t-[15px] border-red-600">
          <div tw="flex flex-col justify-center items-center">
            {avatar && (
              <img
                src={avatar}
                tw="w-48 h-48 rounded-full object-cover"
                alt="Avatar"
              />
            )}
            <div tw="flex flex-col justify-center items-center text-center text-white mt-2">
              <span tw="text-7xl p-2 mb-3">
                {profile.firstName} {profile.lastName}
              </span>
              <span tw="p-2 text-4xl">{profile.headline}</span>
            </div>
          </div>
          <div tw="flex absolute right-6 bottom-6 justify-end items-end">
            <Icons.logoWithSymbol width={200} tw="flex flex-row" />
          </div>
        </div>
      </>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
