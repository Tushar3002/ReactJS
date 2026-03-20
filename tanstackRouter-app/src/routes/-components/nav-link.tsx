import { forwardRef, type AnchorHTMLAttributes } from "react";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

type BasicLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  // extra props if needed
};

// forwardRef lets you properly pass the ref
const BasicLinkComponent = forwardRef<HTMLAnchorElement, BasicLinkProps>(
  ({ className, ...props }, ref) => {
    return <a ref={ref} {...props} className={cn("nav-link", className)} />;
  }
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

// NavLink wrapper with activeProps
export const NavLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return (
    <CreatedLinkComponent
      activeProps={{ className: "active-nav-link" }}
      {...props}
    />
  );
};  

// import React, { forwardRef } from "react";
// import { createLink } from "@tanstack/react-router";
// import { cn } from "../../lib/utils";

// const BasicLinkComponent = forwardRef(({ className, ...props }, ref) => {
//   return <a ref={ref} {...props} className={cn("nav-link", className)} />;
// });

// const CreatedLinkComponent = createLink(BasicLinkComponent);

// export const NavLink = (props) => {
//   return (
//     <CreatedLinkComponent
//       activeProps={{ className: "active-nav-link" }}
//       {...props}
//     />
//   );
// };