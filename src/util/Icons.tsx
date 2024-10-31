export default function Icons({ path, width }: { path: React.ReactNode, width: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={width}
      fill="rgba(255,255,255,1)"
    >
      {path}
    </svg>
  );
}
