import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={
        "relative bg-dark w-screen h-screen overflow-hidden flex flex-col"
      }
    >
      {children}
      <span
        className={
          "absolute bottom-[2.5%] font-[31px] font-bold left-1/2 translate-x-[-50%]"
        }
      >
        Спорт <span>вокруг</span>
      </span>
    </main>
  );
}
