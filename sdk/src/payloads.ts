export interface CreateCampaignPayload {
  id: string;
  name: string;
  goalMicroStx: number;
  timelockBlockHeight: number;
}
export interface PledgePayload {
  campaignId: string;
  amountMicroStx: number;
}
export interface RefundPayload {
  campaignId: string;
  pledgerAddress: string;
}
export interface ClaimMilestonePayload {
  campaignId: string;
  milestoneIndex: number;
}
export interface SetMilestoneReleasePayload {
  campaignId: string;
  milestoneIndex: number;
  isReleased: boolean;
}
export interface CancelCampaignPayload {
  campaignId: string;
  reason?: string;
}
export interface TransferOwnershipPayload {
  newOwnerAddress: string;
}
export interface UpdateGoalPayload {
  campaignId: string;
  newGoalMicroStx: number;
}
export interface AddMilestonePayload {
  campaignId: string;
  percentage: number;
}
export interface RemoveMilestonePayload {
  campaignId: string;
  milestoneIndex: number;
}
export interface PauseCampaignPayload {
  campaignId: string;
  pauseDurationBlocks: number;
}
export interface FinalizeCampaignPayload {
  campaignId: string;
}
export interface GetPledgeStatusPayload {
  campaignId: string;
  address: string;
}
export interface ContractCallOptions {
  nonce?: number;
  fee?: number;
  sponsorAddress?: string;
}
