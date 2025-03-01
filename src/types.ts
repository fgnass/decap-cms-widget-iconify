export interface IconifyWidgetOptions {
  collection?: string;
  filter?: RegExp;
}

declare module "decap-cms-core" {
  export interface CmsWidgetControlProps<T = any> {
    setActiveStyle: () => void;
    setInactiveStyle: () => void;
    t: (key: string, options?: Record<string, unknown>) => string;
    widget?: CmsWidget;
  }
}
