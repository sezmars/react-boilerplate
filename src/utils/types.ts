import { ReactNode } from 'react';

export type TStatus = 'unconfirmed' | 'checked-in' | 'checked-out';

export type PropsWithChildren<P> = P & { children?: ReactNode };
