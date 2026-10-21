import React, { useState } from 'react';
import { VISION_DATA, ecosystem, work } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterHowItWorks: React.FC = () => {
  const { language, tF } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<string>(ecosystem.pipeline[0]?.id || 'curiosity');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);

  const activeStageObj = ecosystem.pipeline.find((p) => p.id === selectedStage) || ecosystem.pipeline[0];

  // Filter connections based on selected stakeholder
  const activeConnections = selectedStakeholder
    ? ecosystem.connections.filter(
        (c) => c.from === selectedStakeholder || c.to === selectedStakeholder
      )
    : [];

  return (
    <section
      id="how-it-works"
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
            CHAPTER 02
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
            {language === 'ne' ? 'यो कसरी चल्छ ?' : 'How does it work ?'}
          </h2>
        </div>

        {/* Lead Vision Quote */}
        <div
          style={{
            borderLeft: '3px solid var(--accent-gold)',
            paddingLeft: '1.5rem',
            marginBottom: '3.5rem',
            maxWidth: '850px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              marginBottom: '0.75rem'
            }}
          >
            "{VISION_DATA.headerQuote}"
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {VISION_DATA.lines.map((line, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.925rem',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}
              >
                · {line}
              </p>
            ))}
          </div>
        </div>

        {/* Pipeline Stepper (01 CURIOSITY -> 07 COMMERCE) */}
        <div style={{ marginBottom: '4rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '1.5rem'
            }}
          >
            {language === 'ne'
              ? 'जिज्ञासादेखि व्यापारसम्मको ७-चरणीय रूपरेखा'
              : 'The 7-Stage Curiosity-to-Commerce Pipeline'}
          </h3>

          {/* Stepper Tabs */}
          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '0.5rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '1.5rem'
            }}
            className="no-scrollbar"
          >
            {ecosystem.pipeline.map((p) => {
              const isActive = p.id === selectedStage;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedStage(p.id)}
                  style={{
                    background: isActive ? 'var(--text-primary)' : 'transparent',
                    color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    border: `1px solid ${isActive ? 'var(--text-primary)' : 'var(--border-light)'}`,
                    borderRadius: '3px',
                    padding: '0.6rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tF(p.stage)}
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          {activeStageObj && (
            <div
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                  {tF(activeStageObj.stage)}
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
                  {tF(activeStageObj.subtitle)}
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                {tF(activeStageObj.description)}
              </p>
              <div style={{ borderTop: '1px dashed var(--border-light)', paddingTop: '1rem' }}>
                <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                  {language === 'ne' ? 'प्रणालीगत प्रभाव' : 'Systemic Impact'}
                </strong>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {tF(activeStageObj.impact)}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Stakeholder Graph & Work Index */}
        <div className="grid-12" style={{ alignItems: 'start', rowGap: '3rem' }}>

          {/* Stakeholder Interactive Pills */}
          <div style={{ gridColumn: 'span 6', width: '100%' }}>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'इकोसिस्टम सरोकारवालाहरू' : 'Ecosystem Stakeholders'}
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              {language === 'ne'
                ? 'सम्बन्धित अन्तरक्रिया हेर्न सरोकारवाला रोज्नुहोस्:'
                : 'Select a stakeholder to highlight ecosystem connections:'}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {ecosystem.stakeholders.map((st) => {
                const isSelected = selectedStakeholder === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStakeholder(isSelected ? null : st.id)}
                    style={{
                      background: isSelected ? 'var(--accent-blue)' : 'transparent',
                      color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                      border: `1px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border-light)'}`,
                      borderRadius: '20px',
                      padding: '0.4rem 0.9rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.825rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tF(st.name)}
                  </button>
                );
              })}
            </div>

            {/* Stakeholder details / connections */}
            {selectedStakeholder && (
              <div
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.25rem'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                  {tF(ecosystem.stakeholders.find((s) => s.id === selectedStakeholder)?.name)}
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {tF(ecosystem.stakeholders.find((s) => s.id === selectedStakeholder)?.description)}
                </p>

                {activeConnections.length > 0 && (
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      {language === 'ne' ? 'सम्बन्धित सञ्जाल:' : 'Connected Links:'}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {activeConnections.map((conn, idx) => (
                        <div key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-primary)', borderLeft: '2px solid var(--accent-gold)', paddingLeft: '0.5rem' }}>
                          <strong>{conn.from} → {conn.to}:</strong> {tF(conn.description)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Typographic Index of Work */}
          <div style={{ gridColumn: 'span 6', width: '100%' }}>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'मुख्य कार्य क्षेत्र अनुक्रमणिका' : 'Core Work Domains Index'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {work.map((w) => (
                <div
                  key={w.id}
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '0.75rem'
                  }}
                >
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.2rem 0' }}>
                    {tF(w.title)}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {tF(w.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
