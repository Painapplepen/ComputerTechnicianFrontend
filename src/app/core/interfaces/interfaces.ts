export interface UserForAuthentication{
  email: string
  password: string
}

export interface UserForAuthorization{
  email: string
  userName: string
  password: string
}

export interface ServerAuthResponse{
  token: string
  role: string
}

export interface TotalPage {
  items: Array<FoundProduct>;
  totalCount: number;
}

export interface FoundProduct {
  id: number;
  name: string;
  processor: string;
  vidioCard: number;
  memoryCapacity: number;
  driveConfiguration: string;
  screenDiagonal: string;
  screenResolution: string;
  cost: string;
  amount: string;
  inStock: string;
}

export interface ProductSearchCondition {
  name: string[];
  processor: string[];
  vidioCard: string[];
  memoryCapacity: number[];
  driveConfiguration: string[];
  screenDiagonal: number[];
  screenResolution: string[];
  cost: number[];
  amount: number[];
  inStock: boolean[];
  pageSize: number;
  page: number;
  sortDirection: string;
  sortProperty: string;
}
