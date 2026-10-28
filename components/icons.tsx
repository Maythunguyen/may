import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: string;
};

function Icon({ size = "1em", style, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
      focusable="false"
      style={{
        width: size,
        height: size,
        display: "inline-block",
        verticalAlign: "-0.125em",
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return <Icon {...props}><path d="M7 17 17 7M7 7h10v10" /></Icon>;
}

export function Star(props: IconProps) {
  return <Icon {...props}><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6" /></Icon>;
}

export function ArrowDown(props: IconProps) {
  return <Icon {...props}><path d="M12 4v16m-7-7 7 7 7-7" /></Icon>;
}

export function ArrowUp(props: IconProps) {
  return <Icon {...props}><path d="M12 20V4m-7 7 7-7 7 7" /></Icon>;
}

export function ArrowLeft(props: IconProps) {
  return <Icon {...props}><path d="M20 12H4m7-7-7 7 7 7" /></Icon>;
}

export function ArrowRight(props: IconProps) {
  return <Icon {...props}><path d="M4 12h16m-7-7 7 7-7 7" /></Icon>;
}

export function Check(props: IconProps) {
  return <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>;
}

export function Play(props: IconProps) {
  return <Icon {...props}><path d="m8 4 12 8-12 8Z" /></Icon>;
}

export function Pause(props: IconProps) {
  return <Icon {...props}><path d="M8 4v16M16 4v16" /></Icon>;
}

export function Plus(props: IconProps) {
  return <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>;
}

export function Minus(props: IconProps) {
  return <Icon {...props}><path d="M5 12h14" /></Icon>;
}

export function Close(props: IconProps) {
  return <Icon {...props}><path d="m6 6 12 12M6 18 18 6" /></Icon>;
}
