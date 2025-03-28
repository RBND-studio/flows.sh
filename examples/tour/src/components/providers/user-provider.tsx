"use client";

import { useCallback, useEffect, useState } from "react";

const LS_KEY = "flows-userId";

const generateNewId = () => `anonymous-${Math.random().toString(36).substring(2)}`;

export const useUserId = () => {
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const id = localStorage.getItem(LS_KEY);
    if (id) {
      setUserId(id);
    } else {
      const newId = generateNewId();
      localStorage.setItem(LS_KEY, newId);
      setUserId(newId);
    }
  }, []);

  const resetUserId = useCallback(() => {
    const newId = generateNewId();
    localStorage.setItem(LS_KEY, newId);
    setUserId(newId);
  }, []);

  return { userId, resetUserId };
};
