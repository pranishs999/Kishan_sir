import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  Microscope, 
  Lightbulb, 
  Building2, 
  TrendingUp, 
  ChevronRight, 
  ArrowRight,
  ChevronLeft,
  Users,
  Compass,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { VISION_DATA, ecosystem, PROBLEM_STATEMENTS } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterHowItWorks: React.FC = () => {
  const { language, tF } = useLanguage();
  const [selectedStage, setSelectedStage] = useState<string>(ecosystem.pipeline[0]?.id || 'curiosity');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);

  const activeStageObj = ecosystem.pipeline.find((p) => p.id === selectedStage) || ecosystem.pipeline[0];

  const stageIcons: Record<string, React.ReactNode> = {
    curiosity: <Sparkles size={20} />,
    learning: <BookOpen size={20} />,
    research: <Microscope size={20} />,
    prototype: <Compass size={20} />,
    innovation: <Lightbulb size={20} />,
    enterprise: <Building2 size={20} />,
    commerce: <TrendingUp size={20} />,
  };

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
              {language === 'ne' ? 'प्रश्न ०५' : 'QUESTION 05'}
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
              {language === 'ne' ? 'मूल्य रूपान्तरण' : 'HOW DO I CREATE VALUE ?'}
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
            {language === 'ne' ? 'समस्या समाधान र ७-चरणीय रूपरेखा' : 'PROBLEM SOLVING & 7-STAGE PIPELINE'}
          </span>
        </div>

        {/* ========================================================================= */}
        {/* 03. WHAT PROBLEMS AM I SOLVING? (शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?) */}
        {/* ========================================================================= */}
        <div id="problems" style={{ scrollMarginTop: '6rem', marginBottom: '4.5rem' }}>
          
          {/* Question 03 Narrative Framework Banner */}
          <div 
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-gold)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-gold)',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}
              >
                03. WHAT PROBLEMS AM I SOLVING?
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {language === 'ne' 
                  ? 'शिक्षा, अनुसन्धान र नवप्रवर्तन क्षेत्रमा म कुन समस्या समाधान गर्न खोज्दैछु?'
                  : 'What Problems Am I Solving in Education, Research & Innovation?'}
              </span>
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.96rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                margin: '0 0 0.25rem 0'
              }}
            >
              {language === 'ne'
                ? 'सीमित व्यावहारिक सिकाइ, मेन्टर र प्रयोगशालामा कमजोर पहुँच, सीमित विद्यार्थी अनुसन्धान मार्ग, र सिकाइ-नवप्रवर्तन-वास्तविक प्रयोगबीचको कमजोर सम्बन्धको समाधान।'
                : 'Explain the gaps being addressed: limited hands-on learning, weak access to mentors and laboratories, limited student research pathways, and weak links between learning, innovation and real-world application. Present these as problem statements and validate with evidence where possible.'}
            </p>
          </div>

          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>

            <h2 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' 
                ? 'नेपाली शिक्षा, अनुसन्धान र नवप्रवर्तनका ४ मुख्य संरचनात्मक समस्याहरू'
                : 'Addressing the 4 Critical Gaps in Nepal\'s Education & Research Landscape'}
            </h2>

            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              {language === 'ne'
                ? 'नेपालमा युवा प्रतिभाको कमी छैन, तर कक्षाकोठाको सिकाइलाई वास्तविक अनुसन्धान, प्रविधि परीक्षण र बजार मूल्यसँग जोड्ने संस्थागत संयन्त्र नहुँदा ठूलो सम्भावना खेर गइरहेको छ। यी चार समस्यालाई समाधान गर्न हाम्रा पहलहरू केन्द्रित छन्:'
                : 'Nepal possesses extraordinary young intellectual talent, but lacks the institutional infrastructure to connect classroom learning with empirical research, prototyping labs, and economic relevance. We directly address these systemic gaps:'}
            </p>
          </div>

          {/* 4 Problem-Solution Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.35rem'
            }}
          >
            {PROBLEM_STATEMENTS.map((prob) => (
              <div 
                key={prob.id}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.6rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)'
                      }}
                    >
                      GAP {prob.number}
                    </span>
                    <AlertCircle size={17} style={{ color: 'var(--accent-gold)' }} />
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.12rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      marginBottom: '0.65rem'
                    }}
                  >
                    {language === 'ne' ? prob.titleNe : prob.titleEn}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: '0 0 1.25rem 0'
                    }}
                  >
                    {language === 'ne' ? prob.descriptionNe : prob.descriptionEn}
                  </p>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderLeft: '3px solid var(--accent-blue)',
                    borderRadius: '2px',
                    padding: '0.85rem 1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-blue)' }} />
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {language === 'ne' ? 'हाम्रो समाधान' : 'OUR ACTION'}
                    </span>
                  </div>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.45,
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? prob.solutionNe : prob.solutionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 05. HOW DO I CREATE VALUE? (म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?) */}
        {/* ========================================================================= */}
        <div id="pathway" style={{ scrollMarginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)' }}>

          {/* Question 05 Narrative Framework Banner */}
          <div 
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--accent-gold)',
              borderRadius: '4px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-gold)',
                  color: '#FFFFFF',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}
              >
                05. HOW DO I CREATE VALUE?
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {language === 'ne' 
                  ? 'म ज्ञान, अनुसन्धान र नवप्रवर्तनलाई वास्तविक मूल्यमा कसरी रूपान्तरण गर्छु?'
                  : 'How Do I Translate Knowledge, Research & Innovation Into Tangible Value?'}
              </span>
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.96rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                margin: '0 0 0.25rem 0'
              }}
            >
              {language === 'ne'
                ? 'हस्ताक्षर ढाँचा "जिज्ञासादेखि वाणिज्यसम्म": जिज्ञासा → सिकाइ → अनुसन्धान → प्रोटोटाइप → नवप्रवर्तन → उद्यम → वाणिज्य। वाणिज्यको अर्थ वास्तविक प्रयोग, बजार सान्दर्भिकता र सामाजिक/आर्थिक मूल्य हो।'
                : 'This page explains the signature framework From Curiosity to Commerce: Curiosity → Learning → Research → Prototype → Innovation → Enterprise → Commerce. Clarify that commerce means real-world application, market relevance and social/economic value—not simply pushing students into business.'}
            </p>
          </div>

          {/* Section Heading & Philosophy Callout */}
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
              {language === 'ne' ? 'जिज्ञासादेखि वाणिज्यसम्म: ७-चरणको व्यावहारिक मार्गचित्र' : 'From Curiosity to Commerce: The 7-Stage Pathway'}
            </h2>

            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: '0 0 1.5rem 0'
              }}
            >
              {language === 'ne'
                ? 'कक्षाकोठामा सुरु भएको एउटा सामान्य जिज्ञासा कसरी अनुसन्धान, प्रोटोटाइप, नवप्रवर्तन र उद्यम हुँदै समाजमा वास्तविक मूल्यमा रूपान्तरण हुन्छ? यहाँ "वाणिज्य" (Commerce) को अर्थ विद्यार्थीलाई केवल व्यापारमा धकेल्नु होइन, बरु उनीहरूको अनुसन्धानलाई वास्तविक जीवनमा उपयोगी, बजार-सम्बन्धित र सामाजिक-आर्थिक मूल्ययुक्त बनाउनु हो।'
                : 'True value creation begins not in commerce, but in an unguided question. The signature framework establishes an unbroken pipeline that elevates grassroots curiosity through disciplined learning, empirical research, functional prototyping, validation, enterprise, and commerce—where commerce represents market relevance, tangible application, and societal value.'}
            </p>

            <blockquote
              style={{
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.25rem',
                margin: 0,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5
              }}
            >
              "{VISION_DATA.headerQuote} — {VISION_DATA.lines[0]}"
            </blockquote>
          </div>
        </div>

        {/* Interactive 7-Stage Visual Pathway (Keyboard Accessible) */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div 
            role="tablist"
            aria-label={language === 'ne' ? 'इकोसिस्टमका सात चरणहरू' : '7 Ecosystem Stages'}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.5rem',
              borderBottom: '2px solid var(--border-light)',
              paddingBottom: '0.75rem'
            }}
          >
            {ecosystem.pipeline.map((stage, idx) => {
              const isSelected = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  id={`stage-tab-${stage.id}`}
                  aria-selected={isSelected}
                  aria-controls={`stage-panel-${stage.id}`}
                  tabIndex={0}
                  onClick={() => setSelectedStage(stage.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') {
                      const next = ecosystem.pipeline[(idx + 1) % ecosystem.pipeline.length];
                      setSelectedStage(next.id);
                    } else if (e.key === 'ArrowLeft') {
                      const prev = ecosystem.pipeline[(idx - 1 + ecosystem.pipeline.length) % ecosystem.pipeline.length];
                      setSelectedStage(prev.id);
                    }
                  }}
                  style={{
                    backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-alt)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                    border: `1px solid ${isSelected ? 'var(--text-primary)' : 'var(--border-light)'}`,
                    borderRadius: '4px',
                    padding: '0.9rem 0.6rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    outline: 'none'
                  }}
                >
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, opacity: isSelected ? 0.85 : 0.6 }}>
                    0{idx + 1}
                  </span>
                  <div style={{ color: isSelected ? 'var(--accent-gold-light)' : 'var(--accent-gold)' }}>
                    {stageIcons[stage.id] || <Compass size={18} />}
                  </div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: isSelected ? 700 : 600,
                      letterSpacing: '0.02em'
                    }}
                  >
                    {tF(stage.stage)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        {activeStageObj && (
          <div 
            id={`stage-panel-${activeStageObj.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${activeStageObj.id}`}
            style={{
              backgroundColor: 'var(--bg-alt)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
              marginBottom: '3.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
            }}
          >
            <div className="grid-12" style={{ gap: '2rem', alignItems: 'start' }}>
              
              {/* Left Column: Stage Core Definition & Function */}
              <div style={{ gridColumn: 'span 7', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-primary)',
                      color: 'var(--accent-gold-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stageIcons[activeStageObj.id] || <Sparkles size={18} />}
                  </div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    {language === 'ne' ? 'चरण विवरण' : `STAGE ${ecosystem.pipeline.findIndex(p => p.id === activeStageObj.id) + 1} OF 07`}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {tF(activeStageObj.stage)}
                </h3>

                <p 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--accent-blue)',
                    marginBottom: '1rem'
                  }}
                >
                  {tF(activeStageObj.subtitle)}
                </p>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.5rem 0'
                  }}
                >
                  {tF(activeStageObj.description)}
                </p>
              </div>

              {/* Right Column: Institutional Anchors & Practical Impact */}
              <div style={{ gridColumn: 'span 5', width: '100%' }}>
                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: '4px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem'
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
                      {language === 'ne' ? 'संस्थागत संयन्त्र' : 'INSTITUTIONAL ANCHOR'}
                    </span>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>
                      {activeStageObj.id === 'curiosity' || activeStageObj.id === 'learning'
                        ? (language === 'ne' ? 'एष्ट्रोनोभा फाउण्डेशन, विद्यालय तथा गणित समाज नेपाल' : 'Astronova Foundation, Schools & Math Association of Nepal')
                        : activeStageObj.id === 'research' || activeStageObj.id === 'innovation'
                        ? (language === 'ne' ? 'हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC) तथा विश्वविद्यालय' : 'Hetauda Research & Innovation Center (HRIC) & Universities')
                        : (language === 'ne' ? 'उद्योग, स्थानीय सरकार, राष्ट्रिय तथा अन्तर्राष्ट्रिय बजार' : 'Industry Partners, Municipalities & Enterprise Networks')}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-blue)',
                        display: 'block',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {language === 'ne' ? 'मापनयोग्य परिणाम तथा प्रभाव' : 'MEASURABLE IMPACT'}
                    </span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {tF(activeStageObj.impact)}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Stakeholder Connectivity Graph */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
            <Users size={18} style={{ color: 'var(--accent-gold)' }} />
            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                margin: 0
              }}
            >
              {language === 'ne' ? 'इकोसिस्टम साझेदार तथा संलग्नता' : 'Stakeholder Convergence & Interconnections'}
            </h4>
          </div>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              maxWidth: '680px'
            }}
          >
            {language === 'ne'
              ? 'यो प्रणाली कुनै एक व्यक्तिको प्रयास होइन; यो विद्यार्थी, अनुसन्धानकर्ता, शिक्षक, उद्योग र नीति-निर्मातालाई एउटै सूत्रमा बाँध्ने सहयोगात्मक संरचना हो। कुनै एक साझेदार चयन गरी सम्बन्धहरू हेर्नुहोस्:'
              : 'The ecosystem functions through the collaborative convergence of 5 key groups. Select any stakeholder below to see how they interconnect with the rest of the network:'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.75rem' }}>
            {ecosystem.stakeholders.map((sh) => {
              const isSelected = selectedStakeholder === sh.id;
              return (
                <button
                  key={sh.id}
                  onClick={() => setSelectedStakeholder(isSelected ? null : sh.id)}
                  style={{
                    backgroundColor: isSelected ? 'var(--accent-blue)' : 'var(--bg-alt)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                    border: `1px solid ${isSelected ? 'var(--accent-blue)' : 'var(--border-light)'}`,
                    borderRadius: '20px',
                    padding: '0.45rem 1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {tF(sh.name)} {isSelected && '✕'}
                </button>
              );
            })}
          </div>

          {/* Active Connections Display */}
          {selectedStakeholder && (
            <div 
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem'
              }}
            >
              <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.75rem 0' }}>
                {language === 'ne' ? 'सक्रिय सहकार्य सम्बन्धहरू:' : 'Verified Connections for Selected Group:'}
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeConnections.map((conn, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--accent-blue)', textTransform: 'capitalize' }}>
                      {conn.from}
                    </span>
                    <ArrowRight size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                      {conn.to}
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>—</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{tF(conn.description)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Visual Link / Bridge Inviting Visitors to Section Three */}
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
              {language === 'ne' ? 'अर्को खण्ड · कार्यान्वयन तथा प्रमाण' : 'NEXT CHAPTER · PROVEN OUTCOMES'}
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
                ? 'हामीले के बनायौं ? प्रमुख संस्था, अन्तर्राष्ट्रिय प्रतिनिधिमण्डल तथा शोध अभिलेख।'
                : 'What have we built? Explore our flagship institutions, international delegations, and research.'}
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
                ? 'हेटौंडा रिसर्च सेन्टर, एष्ट्रोनोभा फाउण्डेशन, ताइवान TISF र इन्डोनेसिया IOSTC टोलीको नतिजा।'
                : 'HRIC, Astronova Foundation, TISF Taiwan, IOSTC Indonesia, and supervised graduate theses.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Link
              to="/what-am-i-creating"
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
              <span>{language === 'ne' ? '← ०४. संस्था र इकोसिस्टम' : '← 04. What I Create'}</span>
            </Link>

            <Link 
              to="/what-future-am-i-building"
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
              <span>{language === 'ne' ? '०६. भविष्य र सहकार्य →' : 'Next: 06. Future Vision →'}</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
