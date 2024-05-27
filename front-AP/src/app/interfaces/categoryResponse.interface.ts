export interface CategoryResponse {
  data:  Category[];
  error: null;
}

export interface Category {
  id:   number;
  name: string;
}
