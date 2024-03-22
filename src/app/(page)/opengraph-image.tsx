/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/icons";
import { ImageResponse } from "next/og";
import { FILES_SERVER, fetchProfileForPage } from "../_internal/apiUtil";

export const contentType = "image/png";

export default async function Image() {
  const { profile, profilePicture: avatar } = await fetchProfileForPage();
  return new ImageResponse(
    (
      <>
        <div tw="w-full h-[100vh] flex flex-col justify-center items-center bg-black border-t-[15px] border-red-600">
          <div tw="flex flex-col justify-center items-center">
            {avatar && (
              <img
                src={`${FILES_SERVER}${avatar}`}
                tw="w-48 h-48 rounded-full"
                style={{ objectFit: "cover" }}
                alt="Avatar"
              />
            )}
            <div tw="flex flex-col justify-center items-center text-center text-white mt-2">
              <span tw="text-7xl p-2 mb-3">
                {profile.firstName} {profile.lastName}
              </span>
              <span tw="p-2 text-5xl">{profile.headline}</span>
            </div>
          </div>
          <div tw="flex absolute right-8 bottom-6 justify-end items-end">
            <Icons.logoWithSymbol width={180} tw="flex flex-row" />
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
