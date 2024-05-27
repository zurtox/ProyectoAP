export interface ContentResponse {
  data:  Content[];
  error: null;
}

export interface Content {
  id:          number;
  title:       string;
  category:    number;
  trailer:     string;
  synopsis:    string;
  price:       number;
  publishYear: number;
  active:      boolean;
}
