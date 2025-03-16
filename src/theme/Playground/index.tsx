import React from "react";
import clsx from "clsx";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import styles from "./styles.module.css";

export default function Playground({ children, transformCode, ...props }) {
  return (
    <LiveProvider
      code={children.replace(/\n$/, "")}
      transformCode={transformCode || ((code) => code)}
      {...props}
    >
      <div className={clsx(styles.playgroundPreview)}>
        <LivePreview />
        <LiveError />
      </div>
    </LiveProvider>
  );
}
