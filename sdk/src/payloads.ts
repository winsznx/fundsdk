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
