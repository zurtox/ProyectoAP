export interface CommunityResponse {
    data:  Community[];
    error: null;
}

export interface Community {
    id:   number;
    name: string;
}
