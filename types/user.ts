export interface UserLoginRequestDto {
  email: string;
  password: string;
}

export interface UserLoginResponseDto {
  email: string;
}

export interface UserRegisterRequestDto {
  acceptTerms?: boolean;
  email: string;
  mobile: string;
  password: string;
}

export interface UserRegisterResponseDto {
  id: string;
  email: string;
}

export interface UserAddressRequestDto {
  firstname: string;
  lastname: string;
  city: string;
  street: string;
}

export interface UserAddressResponseDto {
  id: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
}
