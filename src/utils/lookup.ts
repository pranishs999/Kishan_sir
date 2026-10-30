import type { InitiativeEntity } from '../types/schema';

/**
 * Safely looks up related initiative objects from a list of IDs or slugs.
 * Matches against both item.id and item.slug with graceful fallback.
 */
export function getRelatedInitiatives(
  ids: string[] = [],
  initiativesList: InitiativeEntity[] = []
): InitiativeEntity[] {
  if (!ids || ids.length === 0 || !initiativesList || initiativesList.length === 0) {
    return [];
  }

  return ids
    .map(id => {
      const match = initiativesList.find(
        item => item.id === id || item.slug === id
      );
      return match;
    })
    .filter((item): item is InitiativeEntity => Boolean(item));
}
