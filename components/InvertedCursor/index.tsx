import { useEffect } from "react";
import * as styled from "./style";

type Props = {
  route: string;
};

function handleMouseMove(this: Document, e: globalThis.MouseEvent) {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("--x", e.clientX + "px");
  cursorElement?.style.setProperty("--y", e.clientY + "px");
}

function handleMouseEnter() {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("padding", "0.15rem");

  cursorElement?.style.setProperty("width", "1.5rem");
  cursorElement?.style.setProperty("height", "1.5rem");
}

function handleMouseLeave() {
  const cursorElement = document?.getElementById("inverted-cursor");

  cursorElement?.style.setProperty("padding", "1rem");

  cursorElement?.style.setProperty("width", "0.5rem");
  cursorElement?.style.setProperty("height", "0.5rem");
}

const InvertedCursor: React.FC<Props> = ({ route }) => {
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
  }, [route]);

  return <styled.Container id="inverted-cursor" />;
};

export default InvertedCursor;
