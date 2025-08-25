import { Tabs } from "../ui/tabs";
import { BentoDemo } from "./features-bento";

export function TabsDemo() {
  const tabs = [
    {
      title: "Vehicle Recognition & Intelligence",
      value: "1",
      content: <BentoDemo />,
    },
    {
      title: "Order Prediction Engine",
      value: "2",
      content: <BentoDemo />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto   items-start justify-start my-0">
      <Tabs tabs={tabs} />
    </div>
  );
}
