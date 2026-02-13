"use client";

import { useEffect } from "react";
import hljs from "highlight.js";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
        createTweet?: (
          tweetId: string,
          element: HTMLElement,
          options?: Record<string, unknown>,
        ) => Promise<HTMLElement> | void;
      };
    };
    tiktok?: {
      embed: {
        lib: {
          render: (element: HTMLElement) => void;
        };
      };
    };
  }
}

export default function EmbeddedContent({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  useEffect(() => {
    const containerElement = document.querySelector(
      ".post-md-content",
    ) as HTMLElement;
    if (!containerElement) return;

    const cleanupFns: Array<() => void> = [];

    const getTweetId = (tweetUrl?: string | null) => {
      if (!tweetUrl) return null;
      const match = tweetUrl.match(
        /(?:twitter\.com|x\.com)\/[^/]+\/status\/(\d+)/i,
      );
      return match?.[1] ?? null;
    };

    const getTikTokId = (tiktokUrl?: string | null) => {
      if (!tiktokUrl) return null;
      const match = tiktokUrl.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
      return match?.[1] ?? null;
    };

    // Convert social-embed divs back into blockquotes for Instagram and TikTok
    const socialEmbeds = containerElement.querySelectorAll(
      '[data-type="social-embed"]',
    );
    socialEmbeds.forEach((embed) => {
      const provider = embed.getAttribute("data-provider");
      const url = embed.getAttribute("data-url");

      if (provider === "instagram") {
        // Create Instagram blockquote
        const blockquote = document.createElement("blockquote");
        blockquote.className = "instagram-media";
        blockquote.setAttribute("data-instgrm-permalink", url || "");
        blockquote.setAttribute("data-instgrm-version", "14");
        embed.innerHTML = "";
        embed.appendChild(blockquote);
      } else if (provider === "twitter") {
        const blockquote = document.createElement("blockquote");
        blockquote.className = "twitter-tweet";
        const link = document.createElement("a");
        link.href = url || "";
        blockquote.appendChild(link);
        embed.innerHTML = "";
        embed.appendChild(blockquote);
      } else if (provider === "tiktok") {
        // Create TikTok blockquote
        const blockquote = document.createElement("blockquote");
        blockquote.className = "tiktok-embed";
        blockquote.setAttribute("cite", url || "");
        blockquote.setAttribute("data-source", "tiktok");
        blockquote.setAttribute("data-video-id", getTikTokId(url) || "");
        blockquote.setAttribute("data-embed-type", "video");
        blockquote.style.maxWidth = "325px";
        blockquote.style.minWidth = "325px";
        const section = document.createElement("section");
        const link = document.createElement("a");
        link.href = url || "";
        link.textContent = "TikTok";
        section.appendChild(link);
        blockquote.appendChild(section);
        embed.innerHTML = "";
        embed.appendChild(blockquote);
      } else if (provider === "youtube" || provider === "facebook") {
        // Create iframe for other providers
        const src = embed.getAttribute("data-src");
        const title = embed.getAttribute("data-title") || provider;
        const width = embed.getAttribute("data-width") || "100%";
        const height = embed.getAttribute("data-height") || "420";

        const iframe = document.createElement("iframe");
        if (provider === "facebook") {
          iframe.src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
            url || "",
          )}&show_text=true&width=500`;
        } else {
          iframe.src = src || "";
        }
        iframe.title = title;
        iframe.width = provider === "facebook" ? "500" : width;
        iframe.height = provider === "facebook" ? "582" : height;
        iframe.frameBorder = "0";
        iframe.scrolling = "no";
        iframe.style.borderRadius = provider === "facebook" ? "0" : "0.5rem";
        if (provider === "facebook") {
          iframe.style.border = "none";
        }
        iframe.style.overflow = "hidden";

        if (provider === "youtube") {
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        } else if (provider === "facebook") {
          iframe.allow =
            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
        } else {
          iframe.allow =
            "clipboard-write; encrypted-media; picture-in-picture; web-share";
        }
        iframe.allowFullscreen = true;

        embed.innerHTML = "";
        embed.appendChild(iframe);
      }
    });

    // Highlight code blocks
    const blocks = containerElement.querySelectorAll("pre code");
    blocks.forEach((block) => {
      const codeElement = block as HTMLElement;
      if (!codeElement.classList.contains("hljs")) {
        hljs.highlightElement(codeElement);
      }
    });

    // Load Instagram embed script
    if (containerElement.querySelector(".instagram-media")) {
      const existingScript = document.querySelector(
        'script[src="//www.instagram.com/embed.js"], script[src="https://www.instagram.com/embed.js"]',
      ) as HTMLScriptElement | null;

      const processEmbeds = () => {
        if (window.instgrm?.Embeds?.process) {
          window.instgrm.Embeds.process();
        }
      };

      if (existingScript) {
        if (window.instgrm?.Embeds?.process) {
          processEmbeds();
        } else {
          existingScript.addEventListener("load", processEmbeds, {
            once: true,
          });
        }
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = processEmbeds;
        document.body.appendChild(script);
      }
    }

    // Load Twitter embed script
    if (containerElement.querySelector(".twitter-tweet")) {
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]',
      ) as HTMLScriptElement | null;

      const loadWidgets = () => {
        const twitterBlocks =
          containerElement.querySelectorAll(".twitter-tweet");
        twitterBlocks.forEach((block) => {
          const link = block.querySelector("a");
          const tweetId = getTweetId(link?.getAttribute("href"));
          if (!tweetId) return;

          block.innerHTML = "";

          if (window.twttr?.widgets?.createTweet) {
            window.twttr.widgets.createTweet(tweetId, block as HTMLElement, {
              align: "center",
            });
            return;
          }
        });

        if (window.twttr?.widgets?.load) {
          window.twttr.widgets.load(containerElement);
        }
      };

      if (existingScript) {
        if (window.twttr?.widgets) {
          loadWidgets();
        } else {
          existingScript.addEventListener("load", loadWidgets, { once: true });
        }
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = loadWidgets;
        document.body.appendChild(script);
      }
    }

    // Load TikTok embed script
    if (containerElement.querySelector(".tiktok-embed")) {
      const existingScript = document.querySelector(
        'script[src="https://www.tiktok.com/embed.js"]',
      ) as HTMLScriptElement | null;

      let retryTimer: ReturnType<typeof setTimeout> | null = null;
      let attempts = 0;
      let observer: MutationObserver | null = null;

      const tryRender = () => {
        attempts += 1;
        if (!window.tiktok?.embed?.lib?.render) {
          if (attempts < 15) {
            retryTimer = setTimeout(tryRender, 200);
          }
          return;
        }

        const blocks = containerElement.querySelectorAll(".tiktok-embed");
        blocks.forEach((block) => {
          const clone = block.cloneNode(true) as HTMLElement;
          block.replaceWith(clone);
        });
        window.tiktok?.embed.lib.render(document.body);
      };

      const renderTikTok = () => {
        tryRender();
      };

      if (existingScript) {
        try {
          existingScript.remove();
        } catch (e) {
          // Ignore removal errors
        }
        // Force a fresh initialization on SPA navigations
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).tiktok = undefined;
      }

      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = renderTikTok;
      document.body.appendChild(script);

      if (containerElement) {
        observer = new MutationObserver(() => {
          renderTikTok();
        });
        observer.observe(containerElement, {
          childList: true,
          subtree: true,
        });
      }

      cleanupFns.push(() => {
        if (retryTimer) {
          clearTimeout(retryTimer);
        }
        observer?.disconnect();
      });
    }
    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, [html]);

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
