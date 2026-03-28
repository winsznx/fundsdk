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
