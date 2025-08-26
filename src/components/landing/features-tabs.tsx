import { Tabs } from "../ui/tabs";
import { BentoVRI } from "./features-bento-vri";
import { BentoOPE } from "./features-bento-ope";

export function FeaturesTabs() {
  const tabs = [
    {
      title: "Vehicle Recognition & Intelligence",
      value: "1",
      content: <BentoVRI />,
    },
    {
      title: "Order Prediction Engine",
      value: "2",
      content: <BentoOPE />,
    },
  ];

  return (
    <div className="h-[25rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col mx-auto   items-start justify-start my-0">
      <Tabs tabs={tabs} />
    </div>
  );
}
