"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupbaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupbaseProviderProps> = ({
  children,
}) => {
  const [supbaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supbaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
