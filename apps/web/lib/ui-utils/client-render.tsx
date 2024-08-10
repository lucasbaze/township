'use client';

import { ReactNode, useEffect, useState } from 'react';

interface IClientRenderProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

let isClientGlobally = false;
const wasRenderedOnClient = () => isClientGlobally;
const setWasRenderOnClient = () => (isClientGlobally = true);

export const useClientRender = (): boolean => {
  const [isClient, setIsClient] = useState(wasRenderedOnClient());

  useEffect(() => {
    if (!wasRenderedOnClient() || !isClient) {
      setWasRenderOnClient();
      setIsClient(true);
    }
  }, [isClient]);

  return isClient;
};

export const ClientRender = ({
  fallback = null,
  children = null,
}: IClientRenderProps): ReactNode => {
  const isClient = useClientRender();
  return isClient ? children : fallback;
};
