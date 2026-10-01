import { Blocks, Code2, Globe2, Layers3, PenTool, Smartphone, Sparkles } from 'lucide-react';
const icons = { layers: Layers3, sparkles: Sparkles, blocks: Blocks, code: Code2, globe: Globe2, phone: Smartphone, pen: PenTool };
export function ServiceIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons] || Layers3;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}
