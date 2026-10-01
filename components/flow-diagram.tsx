import { Boxes, CheckCheck, Code2, Layers3, Sparkles } from 'lucide-react';

export function FlowDiagram() {
  return <div className="flow-diagram" role="img" aria-label="Product development flow: understand the problem, design the product, engineer the platform, and scale. AI and automation support each stage.">
    <div className="diagram-meta mono"><span>SCALIDOR / PRODUCT SYSTEMS</span><span>FROM PROBLEM TO PLATFORM</span></div>
    <svg className="flow-lines" viewBox="0 0 1000 290" preserveAspectRatio="none" aria-hidden="true"><path d="M0 160 H170 L270 60 H405 L530 185 H705 L795 95 H1000" /><path className="blue-line" d="M0 160 H170 L270 60 H405 L530 185 H705 L795 95 H1000" /></svg>
    <div className="flow-node node-one"><Boxes size={20} /><span className="mono">01 / PROBLEM</span><small>Understand</small></div>
    <div className="flow-node node-two"><Layers3 size={20} /><span className="mono">02 / PRODUCT</span><small>Design & validate</small></div>
    <div className="flow-node node-three"><Code2 size={20} /><span className="mono">03 / PLATFORM</span><small>Engineer & connect</small></div>
    <div className="flow-node node-four"><CheckCheck size={20} /><span className="mono">04 / SCALE</span><small>Learn & evolve</small></div>
    <div className="flow-intelligence mono"><Sparkles size={16} /> INTELLIGENCE THROUGHOUT</div>
    <svg className="pixel-field" viewBox="0 0 1000 120" aria-hidden="true">{Array.from({ length: 45 }, (_, x) => Array.from({ length: 9 }, (_, y) => {
      const distance = Math.abs(x - 22); const height = 8 - Math.floor(distance / 3);
      if (y > height || ((x * 7 + y * 13) % 5 === 0 && y > 1)) return null;
      return <rect key={`${x}-${y}`} x={164 + x * 15} y={113 - y * 12} width={7} height={7} fill="currentColor" opacity={y < 3 ? 1 : 0.55 + ((x + y) % 3) * .15} />;
    }))}</svg>
  </div>;
}
