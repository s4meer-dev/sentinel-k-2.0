# SENTINEL-K 🛡️
### Sovereign Field Security Copilot for Cyber-Physical Infrastructure
**iQOO Hackathon 2026 Submission**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-iqoo--beta.vercel.app-F0B31C?style=for-the-badge&logo=vercel)](https://iqoo-beta.vercel.app)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 Overview

**Sentinel-K** turns the **Flagship Field Terminal** into an autonomous security copilot. Before deceptive operator dispatches reach critical municipal SCADA, on-device SLMs parse operator intent in **18ms on Snapdragon® 8 Elite NPU** and simulate forward hydrodynamic water hammer in real-time.

Conventional industrial firewalls verify syntax, register bounds, and protocol signatures—**they cannot calculate physical fluid consequences**. Sentinel-K introduces **Dual-Domain Causal Verification**: bridging cyber authorization with physical dynamic simulation before any Modbus/PLC packet is committed.

---

## 🚀 Key Capabilities

1. **On-Device Forensic NPU Ingestion**
   - 45 TOPS local SLM inference (18ms latency) running air-gapped on-device.
   - Extracts structured operational intent (`SET_SPEED(Pump 04) → 850 RPM`) while detecting synthetic voice cloning and psychological coercion vectors.
   - 100% sovereign air-gap guarantee: Zero cloud telemetry egress.

2. **Deterministic Cyber Validation Gate**
   - Syntax, schema, CRC checksum, and register boundary checks.
   - Validates that packets comply with OT standards before physical simulation.

3. **EPANET 2.2 / WNTR Hydrodynamic Twin**
   - Forward transient simulation computes Joukowsky water hammer pressure waves across the pipe network graph.
   - Detects destructive 11.4 bar overpressure spikes (safety threshold: 9.2 bar) in under 42ms.

4. **Autonomous Critic Replanning**
   - Automatically clamps dangerous spikes and synthesizes safe staged trajectories:
   - *Plan B*: Pre-opens Valve 02 to 40% modulation, then ramps Pump 4 staged to 620 RPM in three 30s increments (peak: 7.4 bar — safe).

5. **Human Sovereign Biometric Enclave**
   - Air-gapped terminal biometric thumbprint confirmation commits safe replanned actions with cryptographic Ed25519 signing.

---

## 🎨 Subscrr-Inspired Editorial Design System

- **Warm Tactile Canvas**: Built on `#F4F2EC` parchment paper with an organic SVG noise grain overlay (`mix-blend-mode: multiply`).
- **Rich Frosted Glassmorphism**: `.glass-card` surfaces with `backdrop-filter: blur(24px)`, specular top hairline reflection (`.glass-sheen`), and warm diffuse shadows.
- **Editorial Typographic Hierarchy**:
  - Primary Sans: **Inter** and **Inter Tight** with tight tracking (`-0.035em` on headings, `-0.015em` on body).
  - Editorial Accent: **Newsreader** italic serif subtitles.
  - Telemetry: **JetBrains Mono** for register bytes, latency budgets, and telemetry streams.
- **Staggered Scroll Text Reveal**: Custom `<TextReveal />` physics-based spring easing (`ease: [0.16, 1, 0.3, 1]`) unrolling headings word-by-word into view.

---

## 📱 Minimal Phone Field Terminal Experience

- **Precision Bezel & Punch-Hole Clearance**: Generous top padding (`pt-4 pb-2 px-5`) with centered punch hole and discrete status bar.
- **Divided Content Flow**: Single focused hero glass card per validation stage with clean key-value rows, acoustic waveform player, and real-time SVG pressure gradient charts.
- **Interactive Framer-Style Mobile Player**: Autoplay cycle with progress bar and stage jump dock.

---

## 🛠️ Project Structure

```
iqoo/
├── public/                # Static assets and icons
├── src/
│   ├── components/
│   │   ├── PhoneMockup.tsx               # 3D interactive field terminal chassis
│   │   ├── PhoneScreen.tsx               # Subscrr-style minimal phone UI
│   │   ├── TextReveal.tsx                # Physics-based staggered text reveal
│   │   ├── Hero.tsx                      # Cinematic hero section
│   │   ├── ProblemSection.tsx            # The vulnerability gap & comparator
│   │   ├── DigitalTwinSection.tsx        # EPANET kinetic twin simulator
│   │   ├── SentinelPipelineSection.tsx   # 8-stage verification pipeline
│   │   ├── AgentArchitectureSection.tsx  # 5-agent bounded coordination bento
│   │   ├── SentinelExperienceCarousel.tsx# 5 operational signature moments
│   │   ├── DemoStorySection.tsx          # 10-step incident chronicle
│   │   ├── HackathonAlignmentSection.tsx # iQOO 2026 judging criteria
│   │   ├── TeamSection.tsx               # Builders & architects
│   │   └── FinalCTA.tsx                  # Launchcard & call to action
│   ├── types/
│   │   └── sentinel.ts                   # Domain types and telemetry schemas
│   ├── App.tsx                           # Main layout & section orchestration
│   ├── index.css                         # Tailwind v4 theme, glassmorphism engine
│   └── main.tsx                          # App mounting point
├── index.html                            # HTML entry with Inter & Newsreader fonts
├── package.json                          # Dependencies & scripts
└── vite.config.ts                        # Vite configuration
```

---

## 💻 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/s4meer-dev/sentinel-k-2.0.git
cd sentinel-k-2.0
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Lint
```bash
npm run lint
```

---

## 👥 The Builders

- **J Sashank** — Lead Architect & Cyber-Physical Systems
- **D Mounika** — OriginOS Field Interface & Security UX
- **S Sameer** — Hydrodynamic Modeling & OT Protocols

---

## 📄 License

Proprietary — Developed for **iQOO Hackathon 2026**.
