import { cn } from "@/lib/utils";
import { createLink } from "@tanstack/react-router";

type BasicLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  ref: React.Ref<HTMLAnchorElement>;
};

const BasicLinkComponent = ({ className, ref, ...props }: BasicLinkProps) => {
  return <a ref={ref} {...props} className={cn("nav-link", className)} />;
};

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const NavLink = (
  props: Omit<React.ComponentProps<typeof CreatedLinkComponent>, "activeProps">,
) => {
  return (
    <CreatedLinkComponent
      {...props}
      activeProps={{ className: "active-nav-link" }}
      preload="intent"
    />
  );
};
