const STORAGE_KEY = "certprep-saved-mistakes";
const SYNC_KEY = "certprep-mistakes-synced";

function getStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setStorage(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function getSavedMistakes(): string[] {
  return getStorage();
}

export function saveMistake(questionId: string): void {
  const ids = getStorage();
  if (!ids.includes(questionId)) {
    ids.push(questionId);
    setStorage(ids);
  }
}

export function removeMistake(questionId: string): void {
  const ids = getStorage().filter((id) => id !== questionId);
  setStorage(ids);
}

export function isSaved(questionId: string): boolean {
  return getStorage().includes(questionId);
}

export function clearMistakes(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// Sync localStorage mistakes to server (call on first login)
export async function syncMistakesToServer(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(SYNC_KEY)) return false; // already synced

  const ids = getStorage();
  if (ids.length === 0) return false;

  try {
    const res = await fetch("/api/sync-mistakes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionIds: ids }),
    });
    if (res.ok) {
      localStorage.setItem(SYNC_KEY, "true");
      return true;
    }
  } catch {}
  return false;
}
