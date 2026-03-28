export interface FundotEvent {
  eventId: string;
  contractId: string;
}
export interface PledgeEvent extends FundotEvent {
  type: "PLEDGE";
  amount: number;
  pledger: string;
}
export interface RefundEvent extends FundotEvent {
  type: "REFUND";
  amount: number;
  pledger: string;
}
