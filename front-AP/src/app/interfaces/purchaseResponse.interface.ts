export interface PurchaseResponse {
  data:  Purchase[];
  error: null;
}

export interface Purchase {
  id:         number;
  created_at: Date;
  purchase:   number;
  content:    number;
}
