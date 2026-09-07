import React from 'react';
import { X } from 'lucide-react';
import type { WorkEntry, MediaEntry, ThoughtEntry, ThesisEntry } from '../types/portfolio';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  workData?: WorkEntry | null;
  mediaData?: MediaEntry | null;
  thoughtData?: ThoughtEntry | null;
  thesisData?: ThesisEntry | null;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  workData,
  mediaData,
  thoughtData,
  thesisData
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* WORK DETAIL MODE */}
        {workData && (
          <div>
            <span className="eyebrow">{workData.category}</span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.4rem',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
                marginTop: '0.25rem'
              }}
            >
              {workData.title}
            </h2>

            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
              Role: {workData.role}
            </p>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {workData.fullDescription}
            </p>

            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              Key Operational Highlights
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {workData.highlights.map((h, i) => (
                <li key={i} style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-blue)', borderRadius: '50%' }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* MEDIA DETAIL MODE */}
        {mediaData && (
          <div>
            <span className="eyebrow">{mediaData.category} · {mediaData.date}</span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
                marginTop: '0.25rem'
              }}
            >
              "{mediaData.headline}"
            </h2>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
              Publication: {mediaData.publication} ({mediaData.sourceNotice})
            </p>

            <div style={{ backgroundColor: 'var(--bg-alt)', padding: '1.5rem', borderLeft: '3px solid var(--accent-gold)', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {mediaData.fullSummary}
              </p>
            </div>
          </div>
        )}

        {/* THESIS / ARTICLE DETAIL MODE */}
        {thesisData && (
          <div>
            <span className="eyebrow">{thesisData.field} · {thesisData.year}</span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '0.75rem',
                marginTop: '0.25rem'
              }}
            >
              {thesisData.title}
            </h2>

            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '1.5rem' }}>
              Supervision / Authorship: {thesisData.role} ({thesisData.authorOrStudent})
            </p>

            <div style={{ backgroundColor: 'var(--bg-alt)', padding: '1.5rem', borderLeft: '3px solid var(--accent-gold)', marginBottom: '2rem' }}>
              <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Abstract Summary
              </strong>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {thesisData.abstract}
              </p>
            </div>
          </div>
        )}
        {thoughtData && (
          <div>
            <span className="eyebrow">{thoughtData.category} · {thoughtData.readTime}</span>
            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.3rem',
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                marginTop: '0.25rem'
              }}
            >
              {thoughtData.title}
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {thoughtData.excerpt}
            </p>

            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              Core Article Takeaways
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {thoughtData.keyTakeaways.map((takeaway, i) => (
                <div key={i} style={{ backgroundColor: 'var(--bg-alt)', padding: '1rem 1.25rem', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-blue)', display: 'block', marginBottom: '0.25rem' }}>
                    TAKEAWAY 0{i + 1}
                  </span>
                  <span style={{ fontSize: '0.975rem', color: 'var(--text-primary)' }}>
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn-secondary">
            Close Entry
          </button>
        </div>

      </div>
    </div>
  );
};
