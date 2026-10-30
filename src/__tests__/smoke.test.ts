import { describe, it, expect } from 'vitest';
import { 
  person, 
  work, 
  institutions, 
  ecosystem, 
  initiatives, 
  getRelatedInitiatives, 
  CONTACT_DATA, 
  contact,
  SUPERVISED_THESES,
  THOUGHT_ENTRIES,
  MEDIA_ARCHIVE,
  GALLERY_ITEMS,
  SUPPORT_VISION_DATA
} from '../data';

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

  it('verifies correct Nepali spelling for full name without typos', () => {
    expect(person.nepaliName).toBe('किशन बास्तोला');
    expect(CONTACT_DATA.fullNameNep.trim()).toBe('किशन बास्तोला');
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

  it('loads curiosity-to-commerce 7-stage pipeline in exact order', () => {
    expect(ecosystem.pipeline).toBeDefined();
    expect(Array.isArray(ecosystem.pipeline)).toBe(true);
    expect(ecosystem.pipeline.length).toBe(7);
    const expectedStages = ['curiosity', 'learning', 'research', 'prototype', 'innovation', 'enterprise', 'commerce'];
    expect(ecosystem.pipeline.map(s => s.id)).toEqual(expectedStages);
  });

  it('verifies verified contact details and support vision bank records', () => {
    expect(contact.email).toBe('contact@astronovafoundation.com');
    expect(contact.phone).toBe('+977-9855030706');
    expect(SUPPORT_VISION_DATA.bankName).toBe('Rastriya Banijya Bank');
    expect(SUPPORT_VISION_DATA.accountHolder).toBe('ASTRONOVA FOUNDATION NEPAL');
    expect(SUPPORT_VISION_DATA.accountNumber).toBe('130010006086001');
  });

  it('verifies self-contained 4-part archive datasets exist and are non-empty', () => {
    expect(SUPERVISED_THESES.length).toBeGreaterThan(0);
    expect(THOUGHT_ENTRIES.length).toBeGreaterThan(0);
    expect(MEDIA_ARCHIVE.length).toBeGreaterThan(0);
    expect(GALLERY_ITEMS.length).toBeGreaterThan(0);
  });
});
