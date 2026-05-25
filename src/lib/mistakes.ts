const STORAGE_KEY = "certprep-saved-mistakes";

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
