export type ConnectivityState = 
  | 'CONNECTED'   // State 01: 5G STABLE
  | 'DEGRADING'   // State 02: 5G -> 4G / UNSTABLE
  | 'ACTION'      // State 03: OPTIMIZING...
  | 'RECOVERED'   // State 04: 5G STABLE ?
  | 'MEMORY';     // State 05: LIBRARY 82%

export interface NetworkEvent {
  id: string;
  time: string;
  type: '5G_ATTACH' | 'HANDOVER_TO_4G' | 'SIGNAL_FLUX' | 'BAND_SWITCH' | 'RECOVERY_VERIFIED';
  description: string;
  latencyMs: number;
  network: '5G' | '4G';
  signalRSRP: number; // in dBm
}

export interface LocationMemoryNode {
  id: string;
  name: string;
  pctStable5G: number;
  checksCount: number;
  primaryIssue: string;
  recommendation: string;
  status: 'STABLE' | 'MODERATE' | 'UNSTABLE' | 'POOR';
  coordinates: { x: number; y: number };
}

export interface JourneyWaypoint {
  id: string;
  step: string;
  location: string;
  network: '5G' | '4G';
  signalStrength: string;
  latency: string;
  statusText: string;
  note: string;
}

export interface ExperienceCard {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  badge: string;
  networkState: '5G' | '4G' | 'MIXED';
}
