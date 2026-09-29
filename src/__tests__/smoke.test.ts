import { describe, it, expect } from 'vitest';
import { person, work, institutions, ecosystem } from '../data';

describe('Data Integrity & Type Validation Smoke Tests', () => {
  it('loads person profile with required fields', () => {
    expect(person.fullName).toBe('Kishan Bastola');
    expect(person.professionalTitle).toContain('Educationist');
    expect(person.tagline).toBeDefined();
    expect(Array.isArray(person.biography)).toBe(true);
    expect(person.biography.length).toBeGreaterThan(0);
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
