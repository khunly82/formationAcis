type NavLink = {
  title: string;
  path?: string;
  icon?: string;
  children?: NavLink[];
  open?: boolean;
}

type NavLinks = NavLink[];
