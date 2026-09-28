import React, { useState } from 'react';
import { MapPin, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/sourceFacts';
import type { GalleryItem } from '../types/portfolio';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'STEAM Expo', 'International Fair', 'Workshop'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      <section 
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 5rem)',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>GALLERY</span>
          <h1 className="text-display" style={{ maxWidth: '900px' }}>
            Visual Archive
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Summer STEAM Expo & Global Delegations in Action
          </p>
        </div>
      </section>

      <section id="gallery" className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">MEDIA & EVENT GALLERY</span>
            <h2 className="text-h1" style={{ maxWidth: '850px', marginTop: '0.5rem' }}>
              Summer STEAM Expo & Global Delegations in Action
            </h2>
            <p className="lead-text" style={{ maxWidth: '780px', marginTop: '1rem' }}>
              Documenting student science expos in Hetauda, international fair delegations in Taiwan & Indonesia, and incubation workshops at HRIC.
            </p>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              marginBottom: '2.5rem', 
              flexWrap: 'wrap' 
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    padding: '0.5rem 1.25rem',
                    border: `1px solid ${isActive ? 'var(--accent-blue)' : 'var(--border-light)'}`,
                    backgroundColor: isActive ? 'var(--accent-blue)' : 'var(--bg-surface)',
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                    letterSpacing: '0.04em',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div className="editorial-image-frame" style={{ minHeight: '260px', padding: 0 }}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: 'rgba(18,19,22,0.75)',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'var(--accent-gold)', 
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {item.category}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                    {item.caption}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '0.65rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedGalleryItem && (
            <div className="modal-backdrop" onClick={() => setSelectedGalleryItem(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', padding: 0 }}>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setSelectedGalleryItem(null)} 
                  style={{ zIndex: 10, top: '1rem', right: '1rem' }}
                  aria-label="Close gallery view"
                >
                  <X size={20} />
                </button>
                <div style={{ position: 'relative', width: '100%', maxHeight: '70vh', backgroundColor: '#000' }}>
                  <img 
                    src={selectedGalleryItem.imageUrl} 
                    alt={selectedGalleryItem.title} 
                    style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span className="eyebrow">{selectedGalleryItem.category} · {selectedGalleryItem.location}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                    {selectedGalleryItem.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {selectedGalleryItem.caption}
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={() => setSelectedGalleryItem(null)} className="btn-secondary">
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <section 
        style={{
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--dark-text)',
          borderTop: '1px solid var(--dark-border)',
          paddingTop: 'clamp(3rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
            RELATED
          </span>
          <h2 className="text-h1" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Explore Related Sections
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--dark-text-muted)', marginBottom: '2.5rem' }}>
            Media archive, thought leadership, and research publications.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/media" className="btn-primary" style={{ padding: '0.85rem 2rem' }}>Media Archive</a>
            <a href="/thoughts" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Thought Leadership</a>
            <a href="/research" className="btn-secondary-dark" style={{ padding: '0.85rem 2rem' }}>Research & Theses</a>
          </div>
        </div>
      </section>
    </>
  );
};