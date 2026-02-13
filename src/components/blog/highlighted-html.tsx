"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";

export default function HighlightedHtml({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blocks = container.querySelectorAll("pre code");
    blocks.forEach((block) => {
      const codeElement = block as HTMLElement;
      if (!codeElement.classList.contains("hljs")) {
        hljs.highlightElement(codeElement);
      }
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
