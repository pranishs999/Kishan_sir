import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  FlaskConical, 
  Users, 
  GitBranch, 
  Coins,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROBLEM_STATEMENTS } from '../data/sourceFacts';

export const PageWhatProblems: React.FC = () => {
  const { language } = useLanguage();

  const gapIcons = [
    <FlaskConical size={22} style={{ color: '#C0392B' }} />,
    <Users size={22} style={{ color: '#C0392B' }} />,
    <GitBranch size={22} style={{ color: '#C0392B' }} />,
    <Coins size={22} style={{ color: '#C0392B' }} />
  ];

  return (
    <div className="section-padding animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Question 03 Narrative Framework Banner */}
        <div 
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderLeft: '4px solid var(--accent-gold)',
            borderRadius: '4px',
            padding: '1.25rem 1.5rem',
            marginBottom: '3rem'
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
                fontSize: '1.25rem',
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
              fontSize: '0.98rem',
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

        {/* Section Heading & Context */}
        <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '0.75rem'
            }}
          >
            {language === 'ne' ? 'संरचनात्मक खाडल र चुनौतीहरू' : 'SYSTEMIC GAPS & EVIDENCE-BASED ANALYSIS'}
          </p>

          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem'
            }}
          >
            {language === 'ne' 
              ? 'नेपाली शिक्षा र नवप्रवर्तनका ४ मुख्य समस्याहरू'
              : 'Four Critical Systemic Gaps in Nepal’s Education & Innovation Landscape'}
          </h1>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            {language === 'ne'
              ? 'नेपालमा युवा बौद्धिक प्रतिभाको कमी छैन, तर कक्षाकोठाको सिकाइलाई वास्तविक अनुसन्धान, प्रविधि परीक्षण र बजार मूल्यसँग जोड्ने संस्थागत संयन्त्र नहुँदा ठूलो सम्भावना खेर गइरहेको छ। हाम्रा पहलहरू यी चार मुख्य संरचनात्मक समस्याहरू समाधान गर्न समर्पित छन्:'
              : 'Nepal possesses extraordinary young intellectual talent, but lacks the institutional infrastructure to connect classroom learning with empirical research, prototyping laboratories, and economic relevance. We directly address these systemic bottlenecks:'}
          </p>
        </div>

        {/* 4 Problem-Solution Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem'
          }}
        >
          {PROBLEM_STATEMENTS.map((prob, idx) => (
            <div
              key={prob.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header: Gap ID & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)'
                    }}
                  >
                    GAP {prob.number}
                  </span>
                  <div 
                    style={{
                      padding: '0.5rem',
                      backgroundColor: 'rgba(192, 57, 43, 0.08)',
                      borderRadius: '4px'
                    }}
                  >
                    {gapIcons[idx % gapIcons.length]}
                  </div>
                </div>

                {/* Problem Statement Title */}
                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.25,
                    marginBottom: '1rem'
                  }}
                >
                  {language === 'ne' ? prob.titleNe : prob.titleEn}
                </h3>

                {/* The Problem Description (Evidence) */}
                <div 
                  style={{
                    backgroundColor: 'rgba(192, 57, 43, 0.03)',
                    borderLeft: '3px solid #C0392B',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 4px 4px 0',
                    marginBottom: '1.25rem'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#C0392B',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {language === 'ne' ? 'विद्यमान समस्या र प्रमाण' : 'Systemic Gap & Evidence'}
                  </span>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? prob.descriptionNe : prob.descriptionEn}
                  </p>
                </div>

                {/* The Solution / Intervention */}
                <div 
                  style={{
                    backgroundColor: 'rgba(14, 42, 71, 0.03)',
                    borderLeft: '3px solid var(--accent-blue)',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--accent-blue)',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {language === 'ne' ? 'हाम्रो संस्थागत समाधान' : 'Our Institutional Solution'}
                  </span>
                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? prob.solutionNe : prob.solutionEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence & Case Validation Callout */}
        <div 
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '8px',
            padding: '2.5rem',
            marginBottom: '4.5rem'
          }}
        >
          <div className="grid-12" style={{ alignItems: 'center', gap: '2rem' }}>
            <div style={{ gridColumn: 'span 8', width: '100%' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                {language === 'ne' ? 'क्षेत्रीय असमानता अन्त्य गर्ने प्रतिबद्धता' : 'DECENTRALIZING RESEARCH BEYOND KATHMANDU'}
              </span>
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' 
                  ? 'काठमाडौं बाहिर भौतिक प्रयोगशाला र मेकिङ पूर्वाधारको निर्माण'
                  : 'Validating the Need: Creating Regional Maker & Incubation Hubs'}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.94rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0
                }}
              >
                {language === 'ne'
                  ? 'नेपालका अधिकांश विज्ञान तथा अनुसन्धान अवसरहरू राजधानी केन्द्रित छन्। हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC) र एष्ट्रोनोभा फाउण्डेशन नेपालको स्थापना यसै असन्तुलनलाई तोड्न गरिएको हो। मोफसलका सामुदायिक विद्यालयका विद्यार्थीहरूलाई थ्रीडी प्रिन्टर, रोबोटिक्स सेन्सर, र आधुनिक अनुसन्धान ल्याबमा प्रत्यक्ष पहुँच प्रदान गरेर हामीले क्षेत्रीय प्रतिभाको अन्तर्राष्ट्रिय पहिचान सम्भव बनाएका छौं।'
                  : 'Historically, over 85% of advanced scientific infrastructure and international competition opportunities in Nepal were concentrated within the Kathmandu valley. The establishment of HRIC in Hetauda directly counters this centralization—providing district-level public school students with hands-on 3D fabrication, IoT robotics sensors, and thesis mentorship.'}
              </p>
            </div>

            <div style={{ gridColumn: 'span 4', width: '100%' }}>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  padding: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {language === 'ne' ? 'प्रमाणित परिणाम' : 'Empirical Proof'}
                  </span>
                </div>
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}
                >
                  {language === 'ne' 
                    ? 'HRIC बाट प्रशिक्षित नेपाली विद्यार्थी प्रतिनिधिमण्डलले ताइवान (TISF) र इन्डोनेसिया (IOSTC) मा राष्ट्रिय स्तरको नेतृत्व गर्दै अन्तर्राष्ट्रिय पदक तथा प्रशंसापत्र हासिल गरेका छन्।'
                    : 'Students incubated through HRIC have gone on to represent Nepal as national delegations at TISF (Taiwan) and IOSTC (Indonesia), securing global recognition.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Pagination Bar */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <Link
            to="/what-drives-me"
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} />
            <span>{language === 'ne' ? '← ०२. उद्देश्य र दर्शन' : '← 02. What Drives Me?'}</span>
          </Link>

          <Link
            to="/what-am-i-creating"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <span>{language === 'ne' ? '०४. कुन संस्था निर्माण गर्दैछु? →' : 'Next: 04. What Am I Creating? →'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
};
