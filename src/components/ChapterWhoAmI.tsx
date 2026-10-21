import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { person, CREDENTIALS_DATA, education, experience, leadership } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterWhoAmI: React.FC = () => {
  const { language, tF, tA } = useLanguage();
  const [showTimeline, setShowTimeline] = useState(false);

  const displayBio = tA(person.biography);

  return (
    <section
      id="who-am-i"
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
            CHAPTER 01
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
            {language === 'ne' ? 'म को हुँ ?' : 'Who am I ?'}
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid-12" style={{ alignItems: 'start', rowGap: '2.5rem' }}>

          {/* Left Column: Editorial Biography */}
          <div style={{ gridColumn: 'span 7', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {displayBio.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: idx === 0 ? '1.2rem' : '1.05rem',
                    lineHeight: 1.65,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Bento Grid */}
          <div style={{ gridColumn: 'span 5', width: '100%' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              {/* Credentials highlights */}
              {CREDENTIALS_DATA.slice(0, 4).map((cred, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {cred.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      lineHeight: 1.35,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {cred.detail}
                  </span>
                </div>
              ))}

              {/* Education Box */}
              {education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    gridColumn: 'span 2',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.25rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-blue)',
                      display: 'block',
                      marginBottom: '0.35rem'
                    }}
                  >
                    ACADEMIC FOUNDATION
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: '0 0 0.2rem 0'
                    }}
                  >
                    {tF(edu.degree)}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.825rem',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {tF(edu.institution)} · {tF(edu.location)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Progressive Disclosure Toggle at Bottom */}
        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: 0
            }}
          >
            {showTimeline ? <Minus size={18} /> : <Plus size={18} />}
            {language === 'ne'
              ? 'मेरो शैक्षिक र कार्यकारी समयरेखा के हो ?'
              : 'What is my academic & executive timeline ?'}
          </button>

          {/* Expanded Timeline Content */}
          {showTimeline && (
            <div
              style={{
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2rem'
              }}
            >
              {/* Executive Leadership */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '1.25rem'
                  }}
                >
                  {language === 'ne' ? 'कार्यकारी तथा संस्थागत नेतृत्व' : 'Executive & Institutional Leadership'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {leadership.map((item) => (
                    <div key={item.id} style={{ borderLeft: '2px solid var(--border-light)', paddingLeft: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
                        {item.period}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, margin: '0.1rem 0' }}>
                        {tF(item.role)}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {tF(item.organization)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past Experience */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '1.25rem'
                  }}
                >
                  {language === 'ne' ? 'पूर्व अनुभव तथा शैक्षिक प्रशासन' : 'Past Experience & Academic Governance'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {experience.map((item) => (
                    <div key={item.id} style={{ borderLeft: '2px solid var(--border-light)', paddingLeft: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
                        {item.startDate} - {item.endDate}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, margin: '0.1rem 0' }}>
                        {tF(item.position)}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {tF(item.organization)}
                      </p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        {tF(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
