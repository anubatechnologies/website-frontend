
"use client";
import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import React, {
  useRef,
  useState,
  MouseEvent,
  useContext,
  createContext,
} from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
interface MousePosition {
  x: number;
  y: number;
}

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  ProximitySpotlight?: boolean;
  HoverFocusSpotlight?: boolean;
  CursorFlowGradient?: boolean;
}
interface SpotlightItemProps {
  children: React.ReactNode;
  className?: string;
}

interface SpotLightContextType {
  ProximitySpotlight: boolean;
  HoverFocusSpotlight: boolean;
  CursorFlowGradient: boolean;
}

const SpotLightContext = createContext<SpotLightContextType | undefined>(
  undefined
);
export const useSpotlight = () => {
  const context = useContext(SpotLightContext);
  if (!context) {
    throw new Error("useSpotlight must be used within a SpotlightProvider");
  }
  return context;
};
export const Spotlight = ({
  children,
  className,
  ProximitySpotlight = true,
  HoverFocusSpotlight = false,
  CursorFlowGradient = true,
}: SpotlightProps) => {
  return (
    <SpotLightContext.Provider
      value={{
        ProximitySpotlight,
        HoverFocusSpotlight,
        CursorFlowGradient,
      }}
    >
      <div className={cn("group relative z-10 rounded-md    ", className)}>
        {children}
      </div>
    </SpotLightContext.Provider>
  );
};
export function SpotLightItem({ children, className }: SpotlightItemProps) {
  const { HoverFocusSpotlight, ProximitySpotlight, CursorFlowGradient } =
    useSpotlight();
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouemove = ({ currentTarget, clientX, clientY }): void => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };
  // console.log(overlayColor)

  return (
    <div
      onMouseMove={handleMouemove}
      onMouseEnter={() => CursorFlowGradient && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        className,
        " relative  rounded-sm p-[2px]  overflow-hidden"
      )}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute opacity-0 z-50 rounded-sm w-full h-full group-hover:opacity-100 transition duration-300"
          style={{
            background: `
      radial-gradient(
        250px circle at ${overlayColor.x}px ${overlayColor.y}px,
        rgba(241, 87, 59, 0.05),   /* softer orange glow */
        transparent 80%
      )
    `,
          }}
        />
      )}
      {isHovered && (
        <CanvasRevealEffect
          animationSpeed={5}
          containerClassName="bg-transparent absolute inset-0  z-50 w-full h-full pointer-events-none"
          colors={[
            [241, 87, 59], // base orange (#F1573B)
            [241, 87, 59], // same orange for gradient/softness
          ]}
          dotSize={3}
        />
      )}
      {HoverFocusSpotlight && (
        <div
          className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-sm"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(241, 87, 59, 0.20) 0%, transparent 20%, transparent) fixed`,
          }}
        ></div>
      )}

      {ProximitySpotlight && (
        <div
          className="absolute inset-0 z-0 bg-fixed rounded-sm"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(241, 87, 59, 0.20) 0%, transparent 20%, transparent) fixed`,
          }}
        ></div>
      )}

      {children}
    </div>
  );
}

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <div
      className={`relative h-full bg-white rounded-sm p-px 
  before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-[#F1573B] 
  before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 
  before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-20 
  before:z-10 before:blur-[100px] 

  after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-[#F1573B] 
  after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 
  after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-15 
  after:z-30 after:blur-[100px] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
const ShaderSpotlight = ({
  mouseX,
  mouseY,
  size = 250,
}: {
  mouseX: number;
  mouseY: number;
  size?: number;
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50 rounded-full overflow-hidden">
    </div>
  );
};
