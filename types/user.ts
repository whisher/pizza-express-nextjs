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

export interface UserDeliveryRequestDto {
  email: string | undefined | null;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
}
