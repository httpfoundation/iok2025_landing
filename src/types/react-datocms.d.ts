declare module 'react-datocms' {
  import { FC, ReactNode } from 'react';

  interface StructuredTextProps {
    data: any;
    renderNode?: (props: any) => ReactNode;
  }

  export const StructuredText: FC<StructuredTextProps>;

  export function useQuerySubscription<T>(options: {
    query: string;
    variables?: Record<string, any>;
    token?: string;
    preview?: boolean;
    initialData?: T;
  }): {
    data: T;
    status: string;
    error: any;
  };
}
