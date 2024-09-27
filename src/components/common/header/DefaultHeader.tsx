"use client";

import React from "react";
import Icon from "../Icon";

interface HeaderProps {
  text?: string;
  backgroundColor?: string;
  color?: string;
  arrowColor?: string; //TODO: string은 임시. React에서는 themeColor의 key를 type으로 뽑아썼는데 지금은 tailwind로 되어있기 때문에 type, 컴포넌트 props 고민해야함.
}

const DefaultHeader = ({
  text,
  backgroundColor,
  color,
  arrowColor,
}: HeaderProps) => {
  return (
    <header className="relative flex h-[60px] w-full items-center justify-center bg-black">
      <div className="absolute left-[30px] h-[24px] w-[24px]">
        <Icon />
      </div>
      <h1 className="">text</h1>
    </header>
  );
};

export default DefaultHeader;
