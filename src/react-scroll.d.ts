declare module 'react-scroll' {
  import { ComponentType } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    duration?: number;
    className?: string;
    onSetActive?: (to: string) => void;
    children: React.ReactNode;
  }

  export interface ElementProps {
    name: string;
    className?: string;
    children: React.ReactNode;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<ElementProps>;
}
