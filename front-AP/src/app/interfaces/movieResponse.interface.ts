export interface MovieResponse {
  data:  Movie[];
  error: null;
}

export interface Movie {
  id:       number;
  content:  number;
  duration: number;
}
