//
// API and WebSocket Client Utility (Scaffold)
//
// Purpose: 
// Provides a centralized place for HTTP REST and websocket calls to the backend API. 
// Prepares for integration with Express backend for auth, task, project, comment, notification, and AI endpoints.
//

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3001";

/**
 * Core fetch wrapper for backend API.
 * @param endpoint API path (should not start with /)
 * @param options fetch options
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit & { token?: string }
): Promise<T> {
  const url = `${API_BASE_URL}/${endpoint}`;
  const headers = {
    ...(options?.headers || {}),
    "Content-Type": "application/json",
    ...(options?.token ? { Authorization: `Bearer ${options.token}` } : {}),
  };

  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    // TODO: Add standardized error handling/logging here
    throw new Error(`API error: ${res.status} - ${res.statusText}`);
  }
  return await res.json();
}

/**
 * WebSocket factory.
 * @param path WebSocket API path
 */
export function createWebSocket(path: string): WebSocket {
  // Enforce ws:// or wss:// properly
  const url = `${WS_BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
  return new WebSocket(url);
}

// TODO: Add specialized client methods as needed, e.g., login, register, fetch tasks, send comments, subscribe to notifications.

