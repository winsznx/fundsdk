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
export class InvalidPledgeAmountError extends FundotError {
  constructor() {
    super("Pledge amount must be greater than 0 micro-STX.");
    this.name = "InvalidPledgeAmountError";
  }
}
export class VaultInactiveError extends FundotError {
  constructor() {
    super("The vault for this campaign is not currently active.");
    this.name = "VaultInactiveError";
  }
}
export class InsufficientStxError extends FundotError {
  constructor() {
    super("Insufficient STX balance to cover transaction and gas fees.");
    this.name = "InsufficientStxError";
  }
}
export class InvalidPrincipalError extends FundotError {
  constructor(address: string) {
    super(`Invalid Stacks principal address provided: ${address}`);
    this.name = "InvalidPrincipalError";
  }
}
export class GoalNotReachedError extends FundotError {
  constructor() {
    super("Cannot trigger this action until the funding goal is met.");
    this.name = "GoalNotReachedError";
  }
}
export class UnauthorizedVaultOwnerError extends FundotError {
  constructor() {
    super("Action requires vault owner privileges.");
    this.name = "UnauthorizedVaultOwnerError";
  }
}
export class TransactionRejectedError extends FundotError {
  constructor() {
    super("Transaction was rejected by the Hiro API node.");
    this.name = "TransactionRejectedError";
  }
}
export class MilestoneAlreadyClaimedError extends FundotError {
  constructor() {
    super("This milestone has already been claimed by the creator.");
    this.name = "MilestoneAlreadyClaimedError";
  }
}
export class RefundNotAvailableError extends FundotError {
  constructor() {
    super("Refunds are only available if the campaign fails.");
    this.name = "RefundNotAvailableError";
  }
}
export class ContractCallFailedError extends FundotError {
  constructor(reason: string) {
    super(`Clarity contract execution failed: ${reason}`);
    this.name = "ContractCallFailedError";
  }
}
export class InvalidMilestoneIndexError extends FundotError {
  constructor() {
    super("Provided milestone index is out of bounds.");
    this.name = "InvalidMilestoneIndexError";
  }
}
