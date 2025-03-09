export interface Project {
  title: string;
  description: string;
  //Fix : get all the statuses
  status: 'DRAFT';
  city: string;
  country: string;
  social_cause: string;
  cover_id: string;
  wallet_address: string;
  website?: string;
  wallet_env: string;
}
