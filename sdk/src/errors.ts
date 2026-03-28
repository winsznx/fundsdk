export class FundotError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FundotError";
  }
}
export class CampaignNotFoundError extends FundotError {
  constructor(campaignId: string) {
    super(`Campaign with ID ${campaignId} not found.`);
    this.name = "CampaignNotFoundError";
  }
}
export class MilestoneNotReleasedError extends FundotError {
  constructor() {
    super("The requested milestone has not yet been released.");
    this.name = "MilestoneNotReleasedError";
  }
}
