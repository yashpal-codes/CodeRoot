import "./custom-component.css";
import { JSX } from "react";

interface TextHighlighterProps {
  text: string;
  color?: string;
}

interface DividerWithTextProps {
  text: string;
  color?: string; // Optional color prop
}

interface FontStyleProps {
  text: string;
  heading: string;
  color?: string;
}

export function TextHighlighter({
  text,
  color,
}: TextHighlighterProps): JSX.Element {
  return (
    <div>
      <p style={{ color: color }} className="text-highlight">
        {text}
      </p>
    </div>
  );
}

export function DividerWithText({
  text,
  color,
}: DividerWithTextProps): JSX.Element {
  return (
    <div className="single-line-divider">
      <hr className="divider" />
      <span className="divider-content" style={{ color }}>
        {text}
      </span>
      <hr className="divider" />
    </div>
  );
}

export function FontStyle({ text, heading, color }: FontStyleProps) {
  const getClassName = (heading: string): string => {
    if (heading) {
      // heading will be like h1, h2 we will add heading to make it like heading1, heading2
      const extractText = heading.split("h").join("heading");
      return extractText;
    } else {
      return "heading5";
    }
  };

  const classNameText = getClassName(heading);
  console.log(classNameText);

  return (
    <p className={classNameText} style={{ color }}>
      {text}
    </p>
  );
}
