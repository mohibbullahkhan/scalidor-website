import { Building2, ChartNoAxesCombined, Check, CircleUserRound, Layers3, LayoutGrid, MessageSquare, Search } from 'lucide-react';

export function ProductConcept({ compact = false }: { compact?: boolean }) {
  return <div className={`product-concept ${compact ? 'compact' : ''}`} role="img" aria-label="Illustrative real estate platform interface showing connected properties, customer relationships, teams, and reporting. Not a live product.">
    <div className="concept-top"><span className="mono"><span className="tiny-mark" /> INDUSTRY PLATFORM</span><span className="mono concept-caption">CONCEPT PREVIEW</span></div>
    <div className="concept-body"><aside><Layers3 size={21} /><LayoutGrid size={17} /><Building2 size={17} /><CircleUserRound size={17} /><ChartNoAxesCombined size={17} /><MessageSquare size={17} /></aside><div className="concept-main"><div className="concept-heading"><div><span className="mono">WORKSPACE / OVERVIEW</span><h4>Your operation.<br />Connected.</h4></div><Search size={17} /></div><div className="concept-stats"><div><span>Properties</span><strong>Organized</strong></div><div><span>Customers</span><strong>Connected</strong></div></div><div className="concept-rows"><div><Building2 size={16} /><span>Property operations</span><Check size={15} /></div><div><CircleUserRound size={16} /><span>Customer relationships</span><Check size={15} /></div><div><ChartNoAxesCombined size={16} /><span>Business intelligence</span><Check size={15} /></div></div></div></div>
  </div>;
}
