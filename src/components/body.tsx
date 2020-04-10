import React, { useMemo } from "react";

const Container: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>> = ({ children, className = "", ...html }) => {
  const classNames = useMemo(() => `flex flex-wrap w-100 ${className}`.trim(), [
    className
  ]);
  return (
    <main {...html} className={classNames}>
      {children}
    </main>
  );
};

export default Container;
