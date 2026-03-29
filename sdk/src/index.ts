import { showConnect } from "@stacks/connect";
import { 
  makeSTXTokenTransfer, 
  broadcastTransaction, 
  AnchorMode,
  FungibleConditionCode,
  makeStandardSTXPostCondition
} from "@stacks/transactions";
import { STACKS_MAINNET, STACKS_TESTNET } from "@stacks/network";

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

export const sdkVersion = "0.1.3";

/**
 * Initiates a wallet connection using Stacks Connect.
 */
export async function connectWallet(appDetails: { name: string; icon: string }) {
  return new Promise((resolve, reject) => {
    showConnect({
      appDetails,
      onFinish: (payload) => resolve(payload),
      onCancel: () => reject(new Error("User cancelled login")),
    });
  });
}

/**
 * Helper to build a standard STX transfer for funding campaigns.
 */
export async function buildFundingTx(options: {
  recipient: string,
  amount: number,
  senderKey: string,
  network: "mainnet" | "testnet" | "devnet"
}) {
  const txOptions = {
    recipient: options.recipient,
    amount: options.amount,
    senderKey: options.senderKey,
    network: options.network,
    anchorMode: AnchorMode.Any,
    postConditions: [
      makeStandardSTXPostCondition(options.recipient, FungibleConditionCode.Equal, options.amount)
    ]
  } as any;

  const transaction = await makeSTXTokenTransfer(txOptions);
  return transaction;
}

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
export * from "./constants";
export * from "./errors";
export * from "./constants";
