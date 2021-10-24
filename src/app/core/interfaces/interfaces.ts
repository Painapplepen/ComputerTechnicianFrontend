export interface UserForAuthentication{
  email: string
  password: string
}

export interface ServerAuthResponse{
  token: string
  minutesExpires: number
  roles: any
}
