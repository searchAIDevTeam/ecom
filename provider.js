"use client";
import { store } from "@/components/Features/store";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      {" "}
      <Provider store={store}>{children}</Provider>{" "}
    </NextUIProvider>
  );
}


