import { Activity, Check, FileCheck2, FlaskConical, Gauge, Search, ShieldCheck, SlidersHorizontal } from 'lucide-react';

export function CommissionProConcept({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`product-concept commission-pro-concept ${compact ? 'compact' : ''}`}
      role="img"
      aria-label="Commission Pro chemical industry commissioning platform interface showing process verification, unit safety checks, batch validation, and telemetry."
    >
      <div className="concept-top">
        <span className="mono">
          <span className="tiny-mark chemical-mark" /> CHEMICAL INDUSTRY SAAS
        </span>
        <span className="mono concept-caption">SUBSCRIPTION EDITION</span>
      </div>
      <div className="concept-body">
        <aside>
          <FlaskConical size={21} />
          <Gauge size={17} />
          <Activity size={17} />
          <FileCheck2 size={17} />
          <ShieldCheck size={17} />
          <SlidersHorizontal size={17} />
        </aside>
        <div className="concept-main">
          <div className="concept-heading">
            <div>
              <span className="mono">PLANT UNIT 03 / HYDRO-TREATMENT</span>
              <h4>Process Commissioning.<br />Verified in Cloud.</h4>
            </div>
            <Search size={17} />
          </div>
          <div className="concept-stats">
            <div>
              <span>Verification Checklist</span>
              <strong>28 / 32 Passed</strong>
            </div>
            <div>
              <span>Safety & OSHA Audit</span>
              <strong>100% Compliant</strong>
            </div>
          </div>
          <div className="concept-rows">
            <div>
              <Gauge size={16} />
              <span>Hydrostatic & pressure test verification</span>
              <Check size={15} />
            </div>
            <div>
              <FlaskConical size={16} />
              <span>Chemical feedstock calibration check</span>
              <Check size={15} />
            </div>
            <div>
              <ShieldCheck size={16} />
              <span>Automated safety interlock & ESD review</span>
              <Check size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
