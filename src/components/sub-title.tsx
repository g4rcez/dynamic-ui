import React, { useMemo } from "react";

const SubTitle: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>> = ({ children, className = "", ...html }) => {
  const classNames = useMemo(() => `f3 lh-copy ${className}`.trim(), [
    className
  ]);
  return (
    <h3 {...html} className={classNames}>
      {children}
    </h3>
  );
};

export default SubTitle;
