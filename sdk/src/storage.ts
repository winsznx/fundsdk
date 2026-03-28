export interface VaultStorageState {
  initialized: boolean;
  owner: string;
}
export interface CampaignStorageState {
  id: string;
  pledgedMicroStx: number;
}
export interface MilestoneStorageState {
  index: number;
  unlocked: boolean;
}
