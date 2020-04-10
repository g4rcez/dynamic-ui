import React, { useMemo } from "react";

const Title: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>> = ({ children, className = "", ...html }) => {
  const classNames = useMemo(() => `f2 lh-title ${className}`.trim(), [
    className
  ]);
  return (
    <h2 {...html} className={classNames}>
      {children}
    </h2>
  );
};

export default Title;
