# @winsznx/fundsdk

A lightweight, robust TypeScript SDK for evaluating and tracking FundotStacks crowdfunding contracts. 

This SDK provides data structures, types, and utility methods to efficiently format, analyze, and manage crowdfunding campaigns across Mainnet, Testnet, and Devnet networks.

## Features
- **Campaign Tracking:** Evaluate fundraising goals, pledged amounts, and progression ratios natively.
- **Milestone Management:** Access released vs. pending milestones dynamically.
- **Network Agnostic:** Switch between `"mainnet"`, `"testnet"`, or `"devnet"` topologies during initialization.
- **TypeScript First:** Provides robust typings and safety guarantees out of the box.

## Installation

```bash
npm install @winsznx/fundsdk
```

## Quick Start

```typescript
import { FundotStacksSDK, CampaignData } from "@winsznx/fundsdk";

// Initialize SDK specific to your environmental network
const sdk = new FundotStacksSDK("mainnet");

// Construct or fetch your campaign block payload
const mockCampaign: CampaignData = {
  id: "stx-1234",
  name: "Community Builders Grant",
  status: "fundraising",
  goal: 100000,
  pledged: 37500,
  milestones: [
    { name: "Phase 1: Research", allocated: 20000, released: true },
    { name: "Phase 2: Implementation", allocated: 80000, released: false }
  ]
};

// Resolve formatted semantic insights
const summary = sdk.describeCampaign(mockCampaign);

console.log(`Progress: ${summary.progress * 100}%`); // -> "Progress: 37.5%"
console.log(`Funding Goal: ${summary.pledgedLabel} / ${summary.goalLabel}`); // -> "$37,500.00 / $100,000.00"
console.log(`Next Pending Milestone:`, summary.nextMilestone?.name); // -> "Phase 2: Implementation"

// Fetch analytical insights across the whole milestone track
const milestoneStats = sdk.milestoneBreakdown(mockCampaign);
console.log(`Milestone Release Share: ${(milestoneStats.releasedShare * 100)}%`); // -> "50%"
```

## API Reference

### Core Class: `FundotStacksSDK`
The central orchestration layer.
- `constructor(network: Network = "testnet")`: Binds the engine to the target execution layer.
- `describeCampaign(campaign: CampaignData): CampaignSummary`: Converts raw ledger-style campaign data into pre-formatted, human-readable labels and progress ratios.
- `milestoneBreakdown(campaign: CampaignData)`: Extracts milestone release frequencies and remaining milestone obligations.
- `nextMilestone(campaign: CampaignData): CampaignMilestone | null`: Calculates the immediate unreleased milestone logic.

### Standalone Utilities
- `calculateProgress(campaign: CampaignData): number`: Mathematical evaluation of a campaign's success percentage bounded at 1.0 (100%).
- `formatCurrency(value: number): string`: Safely formats any number cleanly leveraging native web `Intl.NumberFormat` under the `en-US` locale.

## CI/CD
A GitHub Action `CI` workflow is implemented to ensure the TS engine builds appropriately via `npm install` and `npm run build` on every push to the `main` branch.

## License
MIT
