"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    isEntryComplete: boolean;
    setIsEntryComplete: (complete: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isEntryComplete, setIsEntryComplete] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, isEntryComplete, setIsEntryComplete }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
