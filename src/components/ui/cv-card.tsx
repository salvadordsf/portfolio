import { Download } from "lucide-react";

export default function CvCard({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      download
      className="group flex flex-1 items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
          <Download
            size={15}
            className="text-zinc-400 group-hover:text-white transition-colors"
          />
        </span>
        <div className="flex flex-col">
          <span className="text-xs text-zinc-500">{label}</span>
          <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
            {value}
          </span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </a>
  );
}
