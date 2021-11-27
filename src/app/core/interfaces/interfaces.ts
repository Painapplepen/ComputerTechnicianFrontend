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
  vidioCard: string;
  memoryCapacity: number;
  driveConfiguration: string;
  screenDiagonal: string;
  screenResolution: string;
  cost: number;
  amount: number;
  inStock: boolean;
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

export interface Product {
  id?: number;
  name: string;
  releaseDate: string;
  processor: string;
  vidioCard: string;
  memoryCapacity: number;
  driveConfiguration: string;
  screenDiagonal: number;
  screenResolution: string;
  cost: number;
  amount: number;
  inStock: boolean;
  productTypeId: number;
}


export interface FoundManafacture {
  id: number;
  address: string;
  city: string;
  country: string;
  name: string;
}

export interface FoundSupplier {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface FoundOrder {
  id: number;
  orderStatus: string;
  orderDate: string;
  orderTime: string;
}

export interface FoundUser {
  id: number;
  userName: string;
  email: string;
  role: string;
  basketSize: number
}

export interface Manafacture {
  id?: number;
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface Supplier {
  id?: number;
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface Order {
  id?: number;
  orderStatus: string;
  orderDate: string;
  orderTime: string;
  manufactureId: number;
}

export interface User {
  id?: number;
  userName: string;
  email: string;
  roleId: number;
}