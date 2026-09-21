export type ValidationPhase = 
  | 'INCOMING'     // Suspicious operational instruction received
  | 'EXTRACTING'   // Evidence extraction in progress
  | 'CYBER_CHECK'  // Logic integrity & authorization validation
  | 'PHYSICAL_SIM' // Industrial digital twin physics simulation
  | 'REPLAN'       // Unsafe state detected -> Critic replanning
  | 'APPROVED';    // Verified safe action ready for operator approval

export interface EvidenceItem {
  id: string;
  category: 'AUTHORITY' | 'URGENCY' | 'SCRIPT' | 'ACTUATOR' | 'SENDER';
  label: string;
  value: string;
  riskLevel: 'CRITICAL' | 'HIGH' | 'ELEVATED' | 'NOMINAL';
  detail: string;
  timestamp: string;
}

export interface CyberValidationCheck {
  id: string;
  name: string;
  description: string;
  status: 'PASSED' | 'FAILED' | 'CHECKING' | 'SKIPPED';
  detail: string;
}

export interface PhysicalTwinState {
  pumpStatus: 'IDLE' | 'ACTIVE_100' | 'OVERLOAD' | 'MODULATED_65';
  pumpSpeedRPM: number;
  flowRateGPM: number;
  linePressureBar: number;
  maxSafePressureBar: number;
  tankLevelPct: number;
  bypassValve02: 'CLOSED' | 'TRANSIT' | 'OPEN';
  predictionTimeSec: number;
  safetyViolation: boolean;
  violationMessage?: string;
}

export interface PipelineStep {
  id: number;
  title: string;
  stage: string;
  description: string;
  engine: string;
  technicalDetails: string;
  outputSnippet: string;
  status: 'VERIFIED' | 'FLAGGED' | 'FAIL' | 'REPLANNED' | 'ACTIVE';
}

export interface DemoStoryStep {
  step: number;
  time: string;
  title: string;
  summary: string;
  actor: string;
  action: string;
  threatStatus: 'SUSPICIOUS' | 'CRITICAL' | 'NEUTRAL' | 'WARNING' | 'SAFE';
}
