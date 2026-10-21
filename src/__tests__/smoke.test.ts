import { describe, it, expect } from 'vitest';
import { person, work, institutions, ecosystem, initiatives, getRelatedInitiatives } from '../data';

describe('Data Integrity & Type Validation Smoke Tests', () => {
  it('relational helper getRelatedInitiatives matches by id or slug correctly', () => {
    const related = getRelatedInitiatives(['astronova', 'steam-expo', 'non-existent'], initiatives);
    expect(related.length).toBe(2);
    expect(related[0].slug).toBe('astronova');
    expect(related[1].slug).toBe('steam-expo');
  });

  it('ecosystem connections reference valid stakeholder IDs', () => {
    const validIds = ecosystem.stakeholders.map(s => s.id);
    ecosystem.connections.forEach(conn => {
      expect(validIds).toContain(conn.from);
      expect(validIds).toContain(conn.to);
    });
  });
  it('loads person profile with required fields', () => {
    expect(person.fullName).toBeDefined();
    expect(person.professionalTitle).toBeDefined();
    expect(person.tagline).toBeDefined();
    const bio = person.biography;
    const bioLength = Array.isArray(bio) ? bio.length : (bio?.en?.length || bio?.ne?.length || 0);
    expect(bioLength).toBeGreaterThan(0);
  });

  it('loads work domains correctly', () => {
    expect(Array.isArray(work)).toBe(true);
    expect(work.length).toBeGreaterThan(0);
    work.forEach(w => {
      expect(w.id).toBeDefined();
      expect(w.title).toBeDefined();
      expect(w.slug).toBeDefined();
    });
  });

  it('loads institutions ecosystem correctly', () => {
    expect(Array.isArray(institutions)).toBe(true);
    expect(institutions.length).toBeGreaterThan(0);
    institutions.forEach(inst => {
      expect(inst.id).toBeDefined();
      expect(inst.name).toBeDefined();
    });
  });

  it('loads curiosity-to-commerce 7-stage pipeline', () => {
    expect(ecosystem.pipeline).toBeDefined();
    expect(Array.isArray(ecosystem.pipeline)).toBe(true);
    expect(ecosystem.pipeline.length).toBe(7);
  });
});
