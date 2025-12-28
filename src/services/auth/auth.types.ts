/**
 * `SignupRequest` interface
 *
 * defines the structure of the Signup Request.
 */
export interface SignupRequest {
    name: string;
    email: string;
    phone_number: string;
    password: string;
}

/**
 * `SignupResponse` interface
 *
 * defines the structure of the Signup Response.
 */
export interface SignupResponse {
    name: string;
    email: string;
    phone_number: string;
}

/**
 * `LoginRequest` interface
 *
 * defines the structure of the Login Request.
 */
export interface LoginRequest {
    email: string;
    password: string;
}

/**
 * `LoginResponse` interface
 *
 * defines the structure of the Login Response.
 */
export interface LoginResponse {
    access: string;
    refresh: string;
}
