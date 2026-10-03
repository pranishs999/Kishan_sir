import React, { useState } from 'react';
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const GalleryPage: React.FC = () => {
  const { tF } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % gallery.length : 0);
  };

  const handlePrev = () => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + gallery.length) % gallery.length : gallery.length - 1);
  };

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
            Visual Documentary Archive
          </h1>
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)', 
            fontStyle: 'italic', 
            color: 'var(--accent-blue)', 
            marginTop: '1rem',
            maxWidth: '800px'
          }}>
            Photographic record of events, workshops, delegations, and institutional activities
          </p>
        </div>
      </section>

      <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {gallery.map((item, idx) => (
              <div key={item.id} onClick={() => setSelectedImage(idx)} style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-surface)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.3s ease' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={item.imageUrl} 
                    alt={tF(item.title)} 
                    style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Maximize2 size={20} />
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                    {tF(item.category)}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {tF(item.title)}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {tF(item.caption)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} /> {tF(item.location)}
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {gallery.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="text-h1" style={{ marginBottom: '1.5rem' }}>No Gallery Items</h2>
              <p className="lead-text" style={{ marginBottom: '2rem' }}>
                Gallery images will appear here once added.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="modal-backdrop" 
          onClick={() => setSelectedImage(null)}
          style={{ zIndex: 10000 }}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ maxWidth: '90vw', maxHeight: '90vh', padding: 0, display: 'flex', flexDirection: 'column' }}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedImage(null)} 
              aria-label="Close gallery"
              style={{ zIndex: 10, top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            >
              <X size={24} />
            </button>
            
            <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
              <button 
                onClick={handlePrev}
                aria-label="Previous image"
                style={{ position: 'absolute', left: '2rem', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
              >
                <ChevronLeft size={28} />
              </button>
              
              <img 
                src={gallery[selectedImage].imageUrl} 
                alt={tF(gallery[selectedImage].title)} 
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
              />
              
              <button 
                onClick={handleNext}
                aria-label="Next image"
                style={{ position: 'absolute', right: '2rem', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '1rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
              >
                <ChevronRight size={28} />
              </button>
            </div>

            <div style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
              <span className="eyebrow">{tF(gallery[selectedImage].category)} · {tF(gallery[selectedImage].location)}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                {tF(gallery[selectedImage].title)}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                {tF(gallery[selectedImage].caption)}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {gallery[selectedImage].date} · {tF(gallery[selectedImage].location)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};