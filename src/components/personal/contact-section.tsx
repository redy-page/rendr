import { getContact } from "@/app/_internal/apiUtil";
import { Icons } from "../icons";
import SocialIcons from "./social-icons";
import Link from "next/link";

export default async function ContactSection() {
  const { email, socials } = await getContact();
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center md:pt-20 py-8"
    >
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="container max-w-5xl md:px-12 mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mx-4 justify-center items-center">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
                <h3 className="text-3xl font-semibold">Contact</h3>
              </div>
            </div>
            <div className="flex flex-row flex-1 md:px-8 justify-center items-center">
              <div className="grid gap-4 text-center">
                <span className="max-w-md mb-2">
                  Want to say hello? Interested in collaboration? Shoot me an
                  email, and I will get back to you pronto!
                </span>
                <Link href={"mailto:" + email}>
                  {" "}
                  <span className="font-semibold hover:text-primary">
                    <Icons.envelope className="mb-2 w-16 h-16 text-muted-foreground mx-auto hover:text-primary hover:py-2" />
                    {email}
                  </span>
                </Link>
                <SocialIcons socials={socials} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-1 w-[50%] mx-auto block border-t" />
    </section>
  );
}
