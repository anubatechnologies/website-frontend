import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { Spotlight, SpotLightItem } from "../ui/main-spotlight";

const features = [
  {
    Icon: BellIcon,
    name: "AI-Powered Order Forecasting",
    description:
      "Predict likely orders based on customer patterns, weather, and historical data.",
    href: "#",
    cta: "Learn more",
    className: "col-span-5 lg:col-span-3",
    background: (
      <img
        src="/images/home/real_time_count.png"
        className="absolute -right-[100px] -bottom-6 origin-bottom scale-[58%] transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_5%,#fff_20%)]"
      />
    ),
    // background: (
    //   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    // ),
  },
  {
    Icon: FileTextIcon,
    name: "Customer Profile Matching",
    description:
      "Match returning customers to their preference patterns for personalized service.",
    href: "#",
    cta: "Learn more",
    className: "col-span-5 lg:col-span-2",
    background: (
      <img
        src="/images/home/peak_time.png"
        className="absolute right-0 bottom-0 origin-bottom scale-[60%] transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_10%,#fff_10%)]"
      />
    ),
    // background: (
    //   <Marquee
    //     pauseOnHover
    //     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
    //   >
    //     {files.map((f, idx) => (
    //       <figure
    //         key={idx}
    //         className={cn(
    //           "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
    //           "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //           "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    //           "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
    //         )}
    //       >
    //         <div className="flex flex-row items-center gap-2">
    //           <div className="flex flex-col">
    //             <figcaption className="text-sm font-medium dark:text-white ">
    //               {f.name}
    //             </figcaption>
    //           </div>
    //         </div>
    //         <blockquote className="mt-2 text-xs">{f.body}</blockquote>
    //       </figure>
    //     ))}
    //   </Marquee>
    // ),
  },

  {
    Icon: CalendarIcon,
    name: "Historical Order Analysis",
    description:
      "Leverage comprehensive order history to improve prediction accuracy over time.",
    className: "col-span-5 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <img
        src="/images/home/traffic_flow.png"
        className="absolute right-0 bottom-0 origin-bottom scale-[60%] transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_10%,#fff_10%)]"
      />
    ),
    //     background: (
    //       <Calendar
    //         mode="single"
    //         selected={new Date(2022, 4, 11, 0, 0, 0)}
    //         className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
    //       />
    //     ),
  },
  {
    Icon: Share2Icon,
    name: "Seasonal Demand Modeling",
    description:
      "Adjust predictions for seasonal trends, promotions, and special events.",
    href: "#",
    cta: "Learn more",
    className: "col-span-5 lg:col-span-3",
    background: (
      <img
        src="/images/home/qu_length.png"
        className="absolute -right-20 -bottom-10 rotate-4 origin-bottom scale-[65%]  transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_5%,#fff_20%)] "
      />
    ),
    // background: (
    //   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    // ),
  },
];

export function BentoOPE() {
  return (
    <Spotlight className="relative sm:p-8 p-4 rounded-md !bg-white">
      <BentoGrid className="lg:grid-rows-2 !bg-white">
        {features.map((feature) => (
          <SpotLightItem key={feature.name} className={feature.className}>
            <BentoCard key={feature.name} {...feature} />
          </SpotLightItem>
        ))}
      </BentoGrid>
    </Spotlight>
  );
}
