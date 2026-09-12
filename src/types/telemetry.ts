export type ThermalState = 'NORMAL' | 'HEATING' | 'THERMAL_EVENT' | 'FORENSIC_ANALYSIS';

export interface TelemetryPoint {
  time: number; // in seconds
  temp: number; // in Celsius
  fps: number;
  cpuLoad: number; // 0-100%
  gpuLoad: number;
  batteryTemp: number;
}

export interface ForensicScanStep {
  id: string;
  name: string;
  detail: string;
  status: 'pending' | 'scanning' | 'done';
}

export interface ForensicDiagnosis {
  eventTimestamp: string;
  maxTemp: number;
  fpsDrop: string;
  probableCause: string;
  correlatedActivity: string[];
  confidence: number;
  summary: string;
  disclaimer: string;
}
