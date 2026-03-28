# FundSDK

FundSDK is a lightweight helper library for FundotStacks-style crowdfunding campaigns on Stacks. It exposes utilities to describe a campaign, locate the next milestone, and report release progress before you wire events into your frontend or bots.

## Install

Install from npmjs (default registry):

```bash
npm install @winsznx/fundsdk
```

If you still publish to GitHub Packages, add the scoped registry entries before installing:

```bash
npm install @winsznx/fundsdk --registry=https://npm.pkg.github.com --@winsznx:registry=https://npm.pkg.github.com
```

## Usage

```ts
import { FundotStacksSDK, CampaignData } from "@winsznx/fundsdk";

const sdk = new FundotStacksSDK("mainnet");

const summary = sdk.describeCampaign({
  id: "c1",
  name: "Solar Farming Lab",
  status: "fundraising",
  goal: 10000,
  pledged: 4200,
  milestones: [
    { name: "Research", allocated: 4000, released: true },
    { name: "Deployment", allocated: 6000, released: false }
  ]
} satisfies CampaignData);

console.log(summary);
```

## Build

```bash
npm run build
```

The package is bundled as ESM with type definitions under `dist/` so it can be published to both npmjs and GitHub Packages without additional bundling steps.
