import { ReactNode, Fragment } from "react";

export const Linkify = ({ children }: { children: ReactNode }) => {
  const isUrl = (word: string) => {
    const urlPattern =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    return word.match(urlPattern);
  };

  const addMarkup = (word: string, index: number) => {
    return isUrl(word) ? (
      <a
        key={index}
        href={word}
        target="_blank"
        className="hover:text-primary underline"
      >
        {word}
      </a>
    ) : (
      word + " "
    );
  };
  const parseNewLines = children?.toString().replaceAll("\n", " \n");
  const words = parseNewLines?.split(" ");
  const formatedWords = words?.map((w, i) => addMarkup(w, i));
  return <Fragment>{formatedWords?.map((part) => part)}</Fragment>;
};
