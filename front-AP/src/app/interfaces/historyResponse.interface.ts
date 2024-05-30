export interface HistoryResponse {
  data:  History[];
  error: null;
}

export interface History {
  id:            number;
  purchaseDate:  Date;
  user:          number;
  paymentMethod: number;
}
