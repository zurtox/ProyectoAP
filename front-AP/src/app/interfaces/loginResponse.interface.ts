export interface LoginResponse {
  data:  Login;
  error: null;
}

export interface Login {
  id:             number;
  created_at:     Date;
  firstName:      string;
  secondName:     string;
  firstLastName:  string;
  secondLastName: string;
  personalId:     number;
  birthDate:      Date;
  phone:          number;
  username:       string;
  photo:          null;
  nationality:    number;
  comunity:       number;
  administrator:  boolean;
  gender:         string;
  user_auth:      string;
  email:          string;
}
