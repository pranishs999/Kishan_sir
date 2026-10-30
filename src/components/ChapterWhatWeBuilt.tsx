import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Newspaper, 
  Image as ImageIcon,
  ChevronRight,
  ChevronLeft,
  ExternalLink
} from 'lucide-react';
import { SUPERVISED_THESES, THOUGHT_ENTRIES, MEDIA_ARCHIVE, GALLERY_ITEMS } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterWhatWeBuilt: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'researched' | 'written' | 'press' | 'gallery'>('researched');

  const coreInitiatives = [
    {
      id: 'hric',
      title: language === 'ne' ? 'हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)' : 'Hetauda Research & Innovation Center (HRIC)',
      category: language === 'ne' ? 'अनुसन्धान तथा इन्क्युबेशन केन्द्र' : 'Research & Prototyping Hub',
      role: language === 'ne' ? 'संस्थापक तथा निर्देशक' : 'Founder & Director',
      metric: '15+ Projects Incubated',
      summary: language === 'ne' 
        ? 'हेटौंडामा प्राविधिक प्रोटोटाइपिङ, वैज्ञानिक अनुसन्धान र नवप्रवर्तनका लागि उत्कृष्ट क्षेत्रीय केन्द्र।'
        : 'Establishing a regional center of excellence for technological prototyping, scientific research, and youth innovation in Hetauda.',
      imageUrl: '/images/hric.png',
      url: 'https://astronovafoundation.com'
    },
    {
      id: 'astronova',
      title: language === 'ne' ? 'एष्ट्रोनोभा फाउण्डेशन नेपाल' : 'Astronova Foundation Nepal',
      category: language === 'ne' ? 'फ्ल्यागशिप शैक्षिक संस्था' : 'Flagship Foundation',
      role: language === 'ne' ? 'अध्यक्ष' : 'Chairperson',
      metric: '1,000+ Students Mentored',
      summary: language === 'ne' 
        ? 'नेपालभर STEAM शिक्षा, गणितीय शिक्षण विधि र युवा अनुसन्धान प्रवर्द्धन गर्ने राष्ट्रिय वैज्ञानिक फाउण्डेशन।'
        : 'Leading nationwide scientific foundation initiatives promoting STEAM education, mathematics pedagogy, and youth research incubation across Nepal.',
      imageUrl: '/images/astronova.png',
      url: 'https://astronovafoundation.com'
    },
    {
      id: 'tisf',
      title: language === 'ne' ? 'ताइवान अन्तर्राष्ट्रिय विज्ञान प्रदर्शनी (TISF) 🇹🇼' : 'Taiwan TISF Scientific Delegation 🇹🇼',
      category: language === 'ne' ? 'अन्तर्राष्ट्रिय प्रतिनिधित्व' : 'Global Scientific Delegation',
      role: language === 'ne' ? 'कन्ट्री लिडर तथा प्रतिनिधिमण्डल प्रमुख' : 'Country Leader & Head of Delegation',
      metric: '30+ Nations Competed',
      summary: language === 'ne' 
        ? 'ताइपेईमा अन्तर्राष्ट्रिय निर्णायक मण्डलसमक्ष अनुसन्धान प्रस्तुत गर्न नेपालको राष्ट्रिय टोलीको छनोट र नेतृत्व।'
        : 'Selecting, preparing, and escorting Nepal’s national team of student researchers to defend applied research projects at TISF Taipei.',
      imageUrl: '/images/tisf.png',
      url: 'https://www.ntsec.gov.tw'
    },
    {
      id: 'iostc',
      title: language === 'ne' ? 'अन्तर्राष्ट्रिय विज्ञान तथा प्रविधि ओलम्पियाड (IOSTC) 🇮🇩' : 'IOSTC Indonesia Delegation 🇮🇩',
      category: language === 'ne' ? 'अन्तर्राष्ट्रिय प्रतिस्पर्धा' : 'Global Innovation Competition',
      role: language === 'ne' ? 'प्रतिनिधिमण्डल प्रमुख' : 'Delegation Head & Mentor',
      metric: 'International Honors',
      summary: language === 'ne' 
        ? 'इन्डोनेसियामा दिगो प्रविधि, रोबोटिक्स र व्यावहारिक विज्ञानका नमुना प्रस्तुत गर्न नेपाली टोलीको मार्गदर्शन।'
        : 'Mentoring young Nepalese inventors presenting sustainable tech and robotics prototypes in Bali, Indonesia.',
      imageUrl: '/images/IOSTC.jpg',
      url: 'https://iostc.org'
    }
  ];

  return (
    <section 
      id="what-we-built"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">

        {/* Chapter Metatag */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '0.85rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              {language === 'ne' ? 'अध्याय ०३' : 'CHAPTER 03'}
            </span>
            <span style={{ color: 'var(--border-dark)', fontSize: '0.78rem' }}>/</span>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)'
              }}
            >
              {language === 'ne' ? 'हामीले के बनायौं ?' : 'WHAT HAVE WE BUILT ?'}
            </span>
          </div>

          <span 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            {language === 'ne' ? 'प्रमाणित परिणाम तथा अभिलेख' : 'EVIDENCED ACHIEVEMENTS'}
          </span>
        </div>

        {/* Section Heading */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}
          >
            {language === 'ne' ? 'संस्थागत जग, अन्तर्राष्ट्रिय मञ्च र शोध अभिलेख' : 'Institutional Foundations, Global Delegations & Research'}
          </h2>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            {language === 'ne'
              ? 'काल्पनिक सिद्धान्त होइन; १८ वर्षको अवधिमा स्थापना गरिएका अनुसन्धान केन्द्र, राष्ट्रिय फाउण्डेशन, अन्तर्राष्ट्रिय विज्ञान प्रतियोगितामा नेपालको नेतृत्व र पर्यवेक्षण गरिएका शोध कार्यहरू।'
              : 'Ideas are only as powerful as their institutional realization. Over nearly two decades, our work has created regional research hubs, mentored over a thousand students, led national delegations to premier international science fairs, and contributed empirical academic research.'}
          </p>
        </div>

        {/* 2x2 Curated Flagship Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem'
          }}
        >
          {coreInitiatives.map((item) => (
            <article 
              key={item.id}
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}
            >
              {/* Media Thumbnail */}
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', backgroundColor: '#E2E5E8' }}>
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
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(24, 27, 30, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: 'var(--accent-gold-light)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '2px'
                  }}
                >
                  {item.category}
                </div>

                <div 
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--accent-blue)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.65rem',
                    borderRadius: '2px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.metric}
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.4rem'
                  }}
                >
                  {item.role}
                </span>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  {item.summary}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{language === 'ne' ? 'आधिकारिक स्रोत हेर्नुहोस्' : 'Visit Official Portal'}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Self-Contained 4-Tab Interactive Archive */}
        <div 
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.02)'
          }}
        >
          {/* Section Header for Archive */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'विस्तृत अभिलेखालय' : 'COMPREHENSIVE ARCHIVE'}
            </span>
            <h3 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0
              }}
            >
              {language === 'ne' ? 'शोध, विचार, मिडिया तथा प्रदर्शनी अभिलेख' : 'Theses, Publications, Media Clippings & STEAM Expo'}
            </h3>
          </div>

          {/* Tab Navigation Buttons */}
          <div 
            role="tablist"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              borderBottom: '2px solid var(--border-light)',
              paddingBottom: '0.75rem',
              marginBottom: '2rem'
            }}
          >
            <button
              role="tab"
              aria-selected={activeTab === 'researched'}
              onClick={() => setActiveTab('researched')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.15rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'researched' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'researched' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <FileText size={16} />
              <span>{language === 'ne' ? 'पर्यवेक्षण गरिएका शोधहरू' : 'Supervised Theses'}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'written'}
              onClick={() => setActiveTab('written')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.15rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'written' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'written' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <BookOpen size={16} />
              <span>{language === 'ne' ? 'प्रकाशित विचार तथा लेख' : 'Published Thoughts'}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'press'}
              onClick={() => setActiveTab('press')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.15rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'press' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'press' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <Newspaper size={16} />
              <span>{language === 'ne' ? 'मिडिया तथा समाचार कटिङ' : 'Press & Media'}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'gallery'}
              onClick={() => setActiveTab('gallery')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.15rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeTab === 'gallery' ? 'var(--text-primary)' : 'transparent',
                color: activeTab === 'gallery' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.15s ease'
              }}
            >
              <ImageIcon size={16} />
              <span>{language === 'ne' ? 'STEAM एक्सपो तथा गतिविधि' : 'STEAM Expo Gallery'}</span>
            </button>
          </div>

          {/* TAB 1: Supervised Theses */}
          {activeTab === 'researched' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {SUPERVISED_THESES.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.5rem',
                    borderLeft: '4px solid var(--accent-gold)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.field} · {item.role}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.year}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                    {item.title}
                  </h4>

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                    {item.abstract}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: Written Thoughts */}
          {activeTab === 'written' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {THOUGHT_ENTRIES.map((thought) => (
                <div 
                  key={thought.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      {thought.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {thought.readTime}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.65rem 0' }}>
                    {thought.title}
                  </h4>

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1 }}>
                    {thought.excerpt}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                      {language === 'ne' ? 'मुख्य निष्कर्ष' : 'Key Principles'}
                    </span>
                    <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {thought.keyTakeaways.map((takeaway, i) => (
                        <li key={i}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Media & Press Clippings */}
          {activeTab === 'press' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {MEDIA_ARCHIVE.map((article) => (
                <div 
                  key={article.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {article.customImageUrl && (
                    <div style={{ height: '170px', overflow: 'hidden' }}>
                      <img 
                        src={article.customImageUrl} 
                        alt={article.headline} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.35rem' }}>
                      <span>{article.publication}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                    </div>

                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0', lineHeight: 1.35 }}>
                      {article.headline}
                    </h4>

                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: STEAM Expo Gallery */}
          {activeTab === 'gallery' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {GALLERY_ITEMS.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#E2E5E8' }}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.15rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Visual Link / Bridge Inviting Visitors to Section Four */}
        <div 
          style={{
            marginTop: '3.5rem',
            padding: '2rem 2.25rem',
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}
        >
          <div>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'अन्तिम खण्ड · सहकार्यको निमन्त्रणा' : 'FINAL CHAPTER · ACTIVE COLLABORATION'}
            </span>
            <h4 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 0.35rem 0'
              }}
            >
              {language === 'ne'
                ? 'के हामी सहकार्य गरौं ? शैक्षिक संस्था, अनुसन्धानकर्ता र नवप्रवर्तकका लागि खुला।'
                : 'Shall we collaborate? Open for institutional partnerships, mentorship, and ecosystem building.'}
            </h4>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'सिधै संवाद सुरु गर्नुहोस्, साझा उद्देश्य चयन गर्नुहोस् वा युवा विज्ञान अभियानलाई साथ दिनुहोस्।'
                : 'Direct conversation starters, 5 partnership domains, verified contact details, and support vision.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/how-it-works"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent',
                padding: '0.75rem 1.1rem',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <ChevronLeft size={16} />
              <span>{language === 'ne' ? 'अघिल्लो: यो कसरी चल्छ ?' : 'Previous: How it works ?'}</span>
            </Link>

            <Link 
              to="/collaborate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: 'var(--accent-blue)',
                padding: '0.75rem 1.4rem',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'opacity 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span>{language === 'ne' ? 'सहकार्य सुरु गर्नुहोस्' : 'Start a Conversation'}</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
