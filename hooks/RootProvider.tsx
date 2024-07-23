import React, {ReactNode} from "react";
import {PromoCodeProvider} from "@/hooks/PromoProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

interface AppProviderProps {
  children: ReactNode;
  dehydratedState?: unknown;
}

const RootProvider: React.FC<AppProviderProps> = ({children}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <PromoCodeProvider>{children}</PromoCodeProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
