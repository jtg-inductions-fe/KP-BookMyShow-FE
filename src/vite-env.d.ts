/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_REFRESH_COOKIE_LIFETIME_IN_DAYS: string;
    readonly VITE_ACCESS_COOKIE_LIFETIME_IN_MINUTES: string;
}
