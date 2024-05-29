export interface ContentByViewsResponse {
  data:  ContentByViews[];
  error: null;
}

export interface ContentByViews {
  id:         number;
  title:      string;
  category:   number;
  view_count: number;
}
