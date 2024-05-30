export interface PersonResponse {
  data:  Person[];
  error: null;
}

export interface Person {
  id:             number;
  firstName:      string;
  secondName:     null;
  firstLastName:  string;
  secondLastName: string;
  photo:          null;
  birthDate:      Date;
  birthPlace:     string;
  nationality:    number;
  biography:      string;
  height:         number;
  curiousFact:    string;
  partner:        null;
}
