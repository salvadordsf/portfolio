export default function Subtitle({ title }: { title: string }) {
  return (
    <h2 className="text-sm text-zinc-500 tracking-widest uppercase">{title}</h2>
  );
}
