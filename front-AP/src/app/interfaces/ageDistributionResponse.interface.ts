export interface AgeDistributionResponse {
  data:  AgeDistribution[];
  error: null;
}

export interface AgeDistribution {
  age_range:  string;
  user_count: number;
}
