"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Switch from "@radix-ui/react-switch";
import { Cog } from "lucide-react";

export default function ButtonFilterDropdown() {
  return (
    <div className="grid place-items-center w-full min-h-dvh font-figtree bg-[#F9F5F1]">
      <div className="flex items-center justify-center w-96 h-96">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex h-8 px-4 items-center gap-2 rounded-lg font-figtree text-[#191716] text-sm bg-white border border-[#E7E3E0] focus:outline-none focus:ring-0">
              <Cog className="w-4 h-4" /> <p>Customize View</p>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={5}
            >
              <DropdownMenu.Item className="flex justify-between text-[#191716] text-sm">
                <p>Label</p>
                <Switch.Root
                  className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
                  id="airplane-mode"
                >
                  <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}
