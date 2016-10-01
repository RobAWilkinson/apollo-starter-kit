const typeDefinitions = `
type Sponsor {
  first_name: String
  last_name: String
}
type Program {
  f_id: Int
  f_full_name: String
  f_abbr_name: String
  f_address: String
  f_award: String
  f_deadline_date: String
  f_duration: String
  f_other_sponsors: String
  f_purpose: String
  f_sponsor: String
  f_mx_sponsor: String
  f_website: String
  f_eligibility: String
  f_amount: String
  f_email: String
}
type Query {
  program(f_id: Int): Program
  programFindByAmount(f_amount: Int): [Program]
  getFortuneCookie: String
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
