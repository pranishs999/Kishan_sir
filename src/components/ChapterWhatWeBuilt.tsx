import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SUPERVISED_THESES, THOUGHT_ENTRIES, media, gallery } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterWhatWeBuilt: React.FC = () => {
  const { language, tF } = useLanguage();
  const [activeTab, setActiveTab] = useState<'researched' | 'written' | 'press' | 'gallery'>('researched');

  const coreInitiatives = [
    {
      id: 'astronova',
      title: language === 'ne' ? 'एष्ट्रोनोभा फाउण्डेशन नेपाल' : 'Astronova Foundation Nepal',
      category: language === 'ne' ? 'फ्ल्यागशिप शैक्षिक संस्था' : 'Flagship Foundation',
      metric: '1,000+ Students',
      summary: language === 'ne'
        ? 'नेपालभर STEAM शिक्षा, गणितीय शिक्षण विधि र युवा अनुसन्धान प्रवर्द्धन गर्ने राष्ट्रिय वैज्ञानिक फाउण्डेशन।'
        : 'Leading nationwide scientific foundation initiatives promoting STEAM education and youth research incubation across Nepal.',
      imageUrl: '/images/astronova.png',
      url: 'https://astronovafoundation.com'
    },
    {
      id: 'hric',
      title: language === 'ne' ? 'हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)' : 'Hetauda Research & Innovation Center (HRIC)',
      category: language === 'ne' ? 'अनुसन्धान तथा इन्क्युबेशन केन्द्र' : 'Research & Incubation Hub',
      metric: '15+ Projects',
      summary: language === 'ne'
        ? 'हेटौंडामा प्राविधिक प्रोटोटाइपिङ, वैज्ञानिक अनुसन्धान र नवप्रवर्तनका लागि उत्कृष्ट क्षेत्रीय केन्द्र।'
        : 'Establishing a regional center of excellence for technological prototyping, scientific research, and innovation in Hetauda.',
      imageUrl: '/images/hric.png',
      url: 'https://astronovafoundation.com'
    },
    {
      id: 'tisf',
      title: language === 'ne' ? 'ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF) 🇹🇼' : 'Taiwan TISF Delegation 🇹🇼',
      category: language === 'ne' ? 'अन्तर्राष्ट्रिय प्रतिनिधित्व' : 'Global Scientific Delegation',
      metric: '30+ Nations',
      summary: language === 'ne'
        ? 'TISF ताइपेईमा अन्तर्राष्ट्रिय निर्णायक मण्डलसमक्ष अनुसन्धान प्रस्तुत गर्न नेपालको राष्ट्रिय टोलीको छनोट र नेतृत्व।'
        : 'Selecting, preparing, and escorting Nepal’s national team of student researchers to present projects at TISF Taipei.',
      imageUrl: '/images/tisf.png',
      url: 'https://www.ntsec.gov.tw'
    },
    {
      id: 'iostc',
      title: language === 'ne' ? 'इन्डोनेसिया IOSTC प्रतिनिधिमण्डल 🇮🇩' : 'Indonesia IOSTC Delegation 🇮🇩',
      category: language === 'ne' ? 'अन्तर्राष्ट्रिय प्रतिनिधित्व' : 'Global Scientific Delegation',
      metric: 'International Medals',
      summary: language === 'ne'
        ? 'इन्डोनेसियामा प्रविधि प्रोटोटाइपिङ र STEAM समाधानमा प्रतिस्पर्धा गर्ने नेपाली विद्यार्थी नवप्रवर्तकहरूलाई मार्गदर्शन र नेतृत्व।'
        : 'Mentoring and guiding Nepalese student innovators competing in technology prototyping and STEAM solutions in Indonesia.',
      imageUrl: '/images/IOSTC.jpg',
      url: 'https://astronovafoundation.com'
    }
  ];

  return (
    <section
      id="what-we-built"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">

        {/* Chapter Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)'
            }}
          >
            CHAPTER 03
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginTop: '0.25rem'
            }}
          >
            {language === 'ne' ? 'हामीले के बनायौं ?' : 'What have we built ?'}
          </h2>
        </div>

        {/* Flagship 2x2 Grid - Zero Internal Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem'
          }}
        >
          {coreInitiatives.map((init) => (
            <a
              key={init.id}
              href={init.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease'
              }}
              className="flagship-card"
            >
              <div>
                {/* Image & Metric Badge */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={init.imageUrl}
                    alt={init.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Top-Right Metric Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: 'rgba(18, 19, 22, 0.85)',
                      color: 'var(--accent-gold-light)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {init.metric}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {init.category}
                    </span>
                    <ArrowUpRight size={18} className="card-arrow" style={{ color: 'var(--text-secondary)', transition: 'transform 0.2s ease' }} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {init.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {init.summary}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Unified 4-in-1 Archive Switcher */}
        <div style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border-light)', borderRadius: '4px', padding: '2rem' }}>

          {/* Question Tabs (Underlined, no boxed buttons) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem',
              marginBottom: '2rem'
            }}
          >
            <button
              onClick={() => setActiveTab('researched')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'researched' ? '2px solid var(--accent-gold)' : '2px solid transparent',
                paddingBottom: '0.3rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: activeTab === 'researched' ? 700 : 500,
                color: activeTab === 'researched' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {language === 'ne' ? 'हामीले के अनुसन्धान गर्यौं ?' : 'What have we researched ?'}
            </button>

            <button
              onClick={() => setActiveTab('written')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'written' ? '2px solid var(--accent-gold)' : '2px solid transparent',
                paddingBottom: '0.3rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: activeTab === 'written' ? 700 : 500,
                color: activeTab === 'written' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {language === 'ne' ? 'मैले के लेखेको छु ?' : 'What have I written ?'}
            </button>

            <button
              onClick={() => setActiveTab('press')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'press' ? '2px solid var(--accent-gold)' : '2px solid transparent',
                paddingBottom: '0.3rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: activeTab === 'press' ? 700 : 500,
                color: activeTab === 'press' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {language === 'ne' ? 'सञ्चारमाध्यम के भन्छन् ?' : 'What does the press say ?'}
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'gallery' ? '2px solid var(--accent-gold)' : '2px solid transparent',
                paddingBottom: '0.3rem',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontWeight: activeTab === 'gallery' ? 700 : 500,
                color: activeTab === 'gallery' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {language === 'ne' ? 'यो कस्तो देखिन्छ ?' : 'What does it look like ?'}
            </button>
          </div>

          {/* Tab 1: Researched (Academic Citation Style) */}
          {activeTab === 'researched' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {SUPERVISED_THESES.map((thesis) => (
                <div key={thesis.id} style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                    {thesis.field} · {thesis.year}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0.2rem 0 0.4rem 0' }}>
                    "{thesis.title}"
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {thesis.abstract}
                  </p>
                  <span style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem' }}>
                    Role: {thesis.role} ({thesis.authorOrStudent})
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Written (Thought Entries) */}
          {activeTab === 'written' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {THOUGHT_ENTRIES.map((thought) => (
                <div key={thought.id} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      {thought.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
                      {thought.readTime}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                    {thought.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {thought.excerpt}
                  </p>
                  {thought.keyTakeaways && (
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.02)', padding: '0.75rem 1rem', borderRadius: '3px' }}>
                      <strong style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                        Key Insights:
                      </strong>
                      {thought.keyTakeaways.map((take, idx) => (
                        <p key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-primary)', margin: '0.15rem 0' }}>
                          · {take}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Press List */}
          {activeTab === 'press' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {media.map((item) => (
                <a
                  key={item.id}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s ease'
                  }}
                  className="press-row"
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', display: 'block' }}>
                      {tF(item.publication)}
                    </span>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0.15rem 0 0 0' }}>
                      {tF(item.headline)}
                    </h5>
                  </div>
                  <ArrowUpRight size={18} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginLeft: '1rem' }} />
                </a>
              ))}
            </div>
          )}

          {/* Tab 4: Gallery 4-Photo Grid */}
          {activeTab === 'gallery' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {gallery.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'relative', height: '160px' }}>
                    <img
                      src={item.imageUrl}
                      alt={tF(item.title)}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '0.5rem',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '3px',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      📍 {tF(item.location)}
                    </div>
                  </div>
                  <div style={{ padding: '0.85rem' }}>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 600, margin: '0 0 0.25rem 0' }}>
                      {tF(item.title)}
                    </h5>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {tF(item.caption)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      <style>{`
        .flagship-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          border-color: var(--accent-gold) !important;
        }
        .flagship-card:hover .card-arrow {
          transform: translate(2px, -2px);
          color: var(--accent-gold) !important;
        }
        .press-row:hover {
          border-color: var(--accent-gold) !important;
        }
      `}</style>
    </section>
  );
};
