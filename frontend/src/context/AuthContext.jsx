// TEMPORARY. Daisy's real AuthContext replaces this.
export function useAuth() {
  return { user: { name: "Test" }, logout: () => {} };
}
