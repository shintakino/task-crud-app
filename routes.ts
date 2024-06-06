/**
 * An array of accessable to the public
 * This routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * An array of of routes that are use for authentication
 * This routes will redirect login use to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
];
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are use for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
