import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 bg-black max-w-8xl mx-auto mc-10">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
                  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    Our Events
                  </h1>
                  <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            
                    {/* Core component */}
                    
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
        </div>
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[24.5rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
function ItemImage({src,href}: {src:string,href:string}) {
    return (
      <a href={href} className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl overflow-hidden">
        <Image className="flex flex-1 w-full h-full min-h-[7rem] rounded-xl object-cover" width={700} height={250}  src={src ?? ""} alt="img" />
        </a>
    )
}
const items = [
  {
    title: "ProtoRush",
    description: "dell-ivering the Next Breakthrough",
    header: <ItemImage src="/p1.jpg" href="https://konfhub.com/prdell"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-2 md:w-85",
  },
  {
    title: "ShutterSaga",
    description: "Snap the Frame, Own the Game",
    header: <ItemImage src="/p2.jpg" href="https://konfhub.com/ssphotography"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-1 md:w-85 md:h-100",
  },
  {
    title: "ByteQuest",
    description: "Binge on Tech and Trivia",
    header: <ItemImage src="/p3.jpg" href="https://konfhub.com/bqfuntech"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-1 md:w-85 md:h-100",
  },
  {
    title: "The Horcrux Hunt",
    description:
      "Lost clues, Hidden truths, One quest",
    header: <ItemImage src="/p4.jpg" href="https://konfhub.com/thttreasurehunt"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-2 md:w-85 md:h-202",
  },
  {
    title: "dropzone domination",
    description: "Land, loot , conquer",
    header: <ItemImage src="/p5.jpg" href="https://konfhub.com/dzdbgmi"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-1 md:w-85 md:h-100",
  },
  {
    title: "Code cruscade",
    description: "Break the logic , crack the code",
    header: <ItemImage src="/p6.jpg" href="https://konfhub.com/ccdicpc"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-1 md:w-85 md:h-100",
  },
  {
    title: "dsp",
    description: "Hear from the ACM speaker",
    header: <ItemImage src="/p7.jpg" href="https://konfhub.com/dspignite"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    className: "md:row-span-1 md:w-85 md:h-100 ",
  },
];
