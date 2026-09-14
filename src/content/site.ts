import type { LucideIcon } from "lucide-react";
import {
  Waves,
  Activity,
  Gauge,
  Magnet,
  Volume2,
  Radar,
  Layers,
  Ruler,
  ShieldCheck,
  Cloud,
  Compass,
  Cpu,
  Atom,
  Network,
  RefreshCcw,
  Lock,
} from "lucide-react";

export const brand = {
  logoWide: "/brand/serenitech-logo-wide-on-dark.svg",
  logoCompact: "/brand/serenitech-logo-compact-on-dark.svg",
  logoHorizontal: "/brand/serenitech-logo-horizontal-on-dark.svg",
  logoHorizontalPt: "/brand/serenitech-logo-horizontal-on-dark-pt.svg",
  logoDarkPng: "/brand/serenitech-logo-horizontal-on-dark.png",
  mark: "/brand/serenitech-mark-on-dark.svg",
  badge: "/brand/serenitech-icon-badge-512.png",
  email: "contact@serenitech.global",
} as const;

export const images = {
  heroPort: "/images/hero-port-quay-v2.jpg",
  offshore: "/images/offshore-jacket.jpg",
  subsea: "/images/subsea-pipeline.jpg",
  hq: "/images/hq-passeio-sapiens-florianopolis.png",
  channelBottom: "/images/channel-bottom.jpg",
  quayWall: "/images/quay-wall.jpg",
  offshorePipelines: "/images/offshore-pipelines.jpg",
  channelPov: "/images/channel-pov-vessels.jpg",
  propeller: "/images/propeller-megaship.jpg",
} as const;

export const navRoutes = [
  { to: "/services", key: "services" },
  { to: "/sectors", key: "sectors" },
  { to: "/technology", key: "technology" },
  { to: "/company", key: "company" },
  { to: "/contact", key: "contact" },
] as const;

export const domainIcons: LucideIcon[] = [Volume2, Activity, Waves, Magnet];

export const serviceIcons: LucideIcon[] = [
  Volume2,
  Radar,
  Layers,
  Ruler,
  ShieldCheck,
  Cloud,
  Compass,
];

export const aiIcons: LucideIcon[] = [Cpu, Atom, Network, RefreshCcw, Lock];

export const gaugeIcon = Gauge;

export const apiSample = `GET /v1/channel/bathymetry/mesh
{ "grid_id": "basin_3", "mean_depth_m": 16.42, "siltation_volume_m3": 1420.5, "critical_alert": false }

GET /v1/vessels/signatures/classify
{ "confidence_score": 0.98, "detected_blade_rate_hz": 14.2, "ais_mismatch": true, "classification_tags": ["Dark Vessel", "Capesize Bulk Carrier"] }

GET /v1/environment/acoustic/streams
{ "sector_id": "ch_north_02", "spl_db": 142.3, "frequency_spectrum": { "63hz": 138.1, "125hz": 132.4 } }`;
