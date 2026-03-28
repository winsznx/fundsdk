export type Network = "mainnet" | "testnet" | "devnet";

export type CampaignStatus = "fundraising" | "completed" | "failed";

export interface CampaignMilestone {
  name: string;
  allocated: number;
  released: boolean;
}

export interface CampaignData {
  id: string;
  name: string;
  status: CampaignStatus;
  goal: number;
  pledged: number;
  milestones: CampaignMilestone[];
  createdAt?: string;
}

export interface CampaignSummary {
  id: string;
  name: string;
  status: CampaignStatus;
  progress: number;
  pledgedLabel: string;
  goalLabel: string;
  nextMilestone: CampaignMilestone | null;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export const sdkVersion = "0.1.0";

export function calculateProgress(campaign: CampaignData): number {
  if (campaign.goal <= 0) {
    return 0;
  }

  const ratio = campaign.pledged / campaign.goal;
  return Number(Math.min(1, ratio).toFixed(4));
}

export class FundotStacksSDK {
  constructor(public readonly network: Network = "testnet") {}

  describeCampaign(campaign: CampaignData): CampaignSummary {
    return {
      id: campaign.id,
      name: campaign.name,
      status: campaign.status,
      progress: calculateProgress(campaign),
      pledgedLabel: formatCurrency(campaign.pledged),
      goalLabel: formatCurrency(campaign.goal),
      nextMilestone: this.nextMilestone(campaign)
    };
  }

  milestoneBreakdown(campaign: CampaignData) {
    const released = campaign.milestones.filter((m) => m.released).length;
    const total = campaign.milestones.length;
    return {
      released,
      total,
      releasedShare: total === 0 ? 0 : Number((released / total).toFixed(4))
    };
  }

  nextMilestone(campaign: CampaignData): CampaignMilestone | null {
    return campaign.milestones.find((milestone) => !milestone.released) ?? null;
  }
}

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}
export * from "./errors";
