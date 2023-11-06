export interface UserServiceModel {
  signUp: (email: string, password: string) => Promise<UserResponse>;
  login: (email: string, password: string) => Promise<UserResponse>;
}

export interface UserResponse {
  message: string;
  token: string;
}
