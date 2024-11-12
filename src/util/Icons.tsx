export default function Icons({ path, width, color }: { path: React.ReactNode, width: number, color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={width}
      fill={color}
    >
      {path}
    </svg>
  );
}
