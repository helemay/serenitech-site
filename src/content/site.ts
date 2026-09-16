import type { LucideIcon } from "lucide-react";
import {
  Waves,
  Activity,
  Gauge,
  Thermometer,
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
  FlaskConical,
} from "lucide-react";

export const brand = {
  logoWide: "/brand/serenitech-logo-wide-on-dark-glow.svg",
  logoWidePt: "/brand/serenitech-logo-wide-on-dark-glow-pt.svg",
  logoCompact: "/brand/serenitech-logo-compact-on-dark-glow.svg",
  logoHorizontal: "/brand/serenitech-logo-horizontal-on-dark-glow.svg",
  logoHorizontalPt: "/brand/serenitech-logo-horizontal-on-dark-glow-pt.svg",
  logoDarkPng: "/brand/serenitech-logo-horizontal-on-dark.png",
  mark: "/brand/serenitech-mark-on-dark-glow.svg",
  markCore: "/brand/serenitech-mark-core-on-dark-glow.svg",
  badge: "/brand/serenitech-icon-badge-512.png",
  email: "contact@serenitech.global",
  contactEndpoint: "https://9pch0bp0m7.execute-api.eu-west-3.amazonaws.com/",
} as const;

export const images = {
  heroPort: "/images/hero-port-quay-v3.jpg",
  heroClean: "/images/hero-quay-clean.jpg",
  offshore: "/images/offshore-jacket.jpg",
  subsea: "/images/subsea-pipeline.jpg",
  hq: "/images/hq-sapiens-parque-florianopolis.jpg",
  channelBottom: "/images/channel-bottom.jpg",
  quayWall: "/images/quay-wall.jpg",
  offshorePipelines: "/images/offshore-pipelines.jpg",
  channelPov: "/images/channel-pov-vessels.jpg",
  propeller: "/images/propeller-megaship.jpg",
  twinConsole: "/images/twin-console.jpg",
  twin3d: "/images/twin-3d-view.jpg",
} as const;

export const navRoutes = [
  { hash: "services", key: "services" },
  { hash: "sectors", key: "sectors" },
  { hash: "technology", key: "technology" },
  { hash: "company", key: "company" },
  { hash: "contact", key: "contact" },
] as const;

export const domainIcons: LucideIcon[] = [Volume2, Activity, Waves, Thermometer];

export const serviceIcons: LucideIcon[] = [
  Volume2,
  Radar,
  Layers,
  Ruler,
  ShieldCheck,
  Cloud,
  Compass,
];

export const aiIcons: LucideIcon[] = [Cpu, Atom, Network, RefreshCcw, Lock, FlaskConical];

export const gaugeIcon = Gauge;

export const apiSample = `GET /v1/channel/bathymetry/mesh
{ "grid_id": "basin_3", "mean_depth_m": 16.42, "siltation_volume_m3": 1420.5, "critical_alert": false }

GET /v1/vessels/signatures/classify
{ "confidence_score": 0.98, "detected_blade_rate_hz": 14.2, "ais_mismatch": true, "classification_tags": ["Dark Vessel", "Capesize Bulk Carrier"] }

GET /v1/environment/acoustic/streams
{ "sector_id": "ch_north_02", "spl_db": 142.3, "frequency_spectrum": { "63hz": 138.1, "125hz": 132.4 } }`;
