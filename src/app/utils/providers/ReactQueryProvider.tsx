"use client"
import React from "react";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
    const [client] = useState(() => new QueryClient())
    
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}