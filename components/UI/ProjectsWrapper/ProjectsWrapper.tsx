import React from "react";
export const ProjectsWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};
