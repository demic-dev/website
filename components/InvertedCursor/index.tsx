import { useEffect } from "react";
import * as styled from "./style";

function handleMouseMove(this: Document, e: globalThis.MouseEvent) {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("--x", e.clientX + "px");
  cursorElement?.style.setProperty("--y", e.clientY + "px");
}

function handleMouseEnter() {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("scale", "1");
}

function handleMouseLeave() {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("scale", "0.45");
}

const InvertedCursor = () => {
  useEffect(() => {
    const clickableItems = document?.querySelectorAll("a, button");

    document?.addEventListener("mousemove", handleMouseMove);

    clickableItems?.forEach((i) => {
      i.addEventListener("mouseenter", handleMouseEnter);
      i.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document?.removeEventListener("mousemove", handleMouseMove);

      clickableItems?.forEach((i) => {
        i.removeEventListener("mouseenter", handleMouseEnter);
        i.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <styled.Container id="inverted-cursor" />;
};

export default InvertedCursor;
