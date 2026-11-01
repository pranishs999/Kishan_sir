import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Compass, 
  Target, 
  ArrowRight, 
  ArrowLeft,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PageWhatDrivesMe: React.FC = () => {
  const { language } = useLanguage();

  const philosophicalPillars = [
    {
      num: '01',
      titleEn: 'Student-Centred Curiosity & Discovery',
      titleNe: 'विद्यार्थी केन्द्रित जिज्ञासा र अन्वेषण',
      descEn: 'Shifting classroom pedagogy from passive textbook memorization to active inquiry, hypothesis testing, and experiential project design. True learning happens when a learner owns the question.',
      descNe: 'पाठ्यपुस्तकको घोकन्ते सिकाइलाई हटाएर प्रश्न सोध्ने, प्रयोग गर्ने र आफैं परियोजना निर्माण गर्ने वातावरणको विकास। विद्यार्थीले जब प्रश्नको स्वामित्व लिन्छ, तब मात्र वास्तविक सिकाइ सुरु हुन्छ।',
      icon: <Lightbulb size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      num: '02',
      titleEn: 'Mathematics as Foundational Logic & Reasoning',
      titleNe: 'तर्क र समस्या समाधानको आधारका रूपमा गणित',
      descEn: 'Approaching mathematics not as dry abstract formulae, but as the universal language of reasoning, systemic problem solving, and technological innovation. It is the compass for scientific truth.',
      descNe: 'गणितलाई केवल शुष्क सूत्रका रूपमा नभई जीवन र विज्ञानका जटिल समस्या समाधान गर्ने तार्किक भाषाका रूपमा सिकाउने। यो वैज्ञानिक सत्य पहिल्याउने सर्वव्यापी कम्पास हो।',
      icon: <Compass size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      num: '03',
      titleEn: 'Democratizing Scientific Opportunity',
      titleNe: 'स्रोतको अभावले सम्भावना रोकिनुहुन्न',
      descEn: 'The firm conviction that geographical isolation or lack of school funding must never extinguish young scientific talent. Every public school student in regional Nepal deserves world-class laboratory access.',
      descNe: 'भौगोलिक दूरी वा विद्यालयको कमजोर आर्थिक अवस्थाले कुनै पनि प्रतिभाशाली विद्यार्थीको वैज्ञानिक सम्भावना रोकिनु हुँदैन भन्ने दृढ विश्वास। मोफसलका प्रत्येक बालबालिका आधुनिक प्रयोगशालाको हकदार छन्।',
      icon: <Target size={24} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      num: '04',
      titleEn: 'Purpose-Driven Value Creation for Society',
      titleNe: 'समाजका लागि उद्देश्यमूलक मूल्य सिर्जना',
      descEn: 'Education must not end with a certificate. Our purpose is to connect academic knowledge with agriculture, local industry, health, and sustainable enterprise, transforming learning into real human impact.',
      descNe: 'शिक्षा परीक्षा र प्रमाणपत्रमा मात्र सीमित हुनुहुँदैन। हाम्रो उद्देश्य प्राज्ञिक ज्ञानलाई कृषि, स्थानीय उद्योग र उद्यमशीलतासँग जोडेर समाजमा प्रत्यक्ष र दिगो सकारात्मक प्रभाव पार्नु हो।',
      icon: <Users size={24} style={{ color: 'var(--accent-gold)' }} />
    }
  ];

  return (
    <div className="section-padding animate-fade-in" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Question 02 Narrative Framework Banner */}
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
              02. WHAT DRIVES ME?
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
                ? 'मलाई कुन उद्देश्य, विश्वास र दर्शनले अघि बढाउँछ?' 
                : 'What Purpose, Conviction & Philosophy Drives Me?'}
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
              ? 'शैक्षिक दर्शन, विद्यार्थी केन्द्रित सिकाइ, जिज्ञासा, गणित तथा वैज्ञानिक सोच, स्रोतको अभावले विद्यार्थीको सम्भावना रोकिनु हुँदैन भन्ने विश्वास।'
              : 'Education philosophy, student-centred learning, curiosity, mathematics and scientific thinking, belief that lack of resources should not prevent student potential, and the purpose behind the work.'}
          </p>
        </div>

        {/* Section Heading & Core Philosophical Manifesto */}
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
            {language === 'ne' ? 'शैक्षिक दर्शन तथा मूल मान्यता' : 'EDUCATIONAL PHILOSOPHY & CORE CONVICTION'}
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
              ? 'स्रोतको अभावले कुनै पनि विद्यार्थीको सम्भावना रोकिनुहुन्न'
              : 'Resource Constraints Must Never Limit Student Potential'}
          </h1>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              margin: '0 0 1.5rem 0'
            }}
          >
            {language === 'ne'
              ? 'शिक्षा केवल कक्षाकोठामा घोकन्ते परीक्षा पास गर्नु होइन। मेरो उद्देश्य प्रत्येक विद्यार्थीभित्रको प्राकृतिक जिज्ञासालाई जगाउनु, तार्किक गणितीय सोच विकास गर्नु र उनीहरूलाई वास्तविक अनुसन्धान तथा नवप्रवर्तन गर्न सक्ने वातावरण प्रदान गर्नु हो।'
              : 'True education transcends rote examinations. My driving purpose is to awaken natural inquiry in learners, ground them in rigorous mathematical reasoning, and ensure that lack of funding or geographical isolation never stops a young mind from creating world-class scientific breakthroughs.'}
          </p>

          {/* Core Vision Quote Box */}
          <blockquote
            style={{
              borderLeft: '4px solid var(--accent-gold)',
              paddingLeft: '1.5rem',
              backgroundColor: 'var(--bg-alt)',
              padding: '1.5rem 1.75rem',
              borderRadius: '0 6px 6px 0',
              margin: 0
            }}
          >
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                margin: '0 0 0.5rem 0'
              }}
            >
              {language === 'ne'
                ? '"एउटा प्रश्न ज्ञान बन्न सक्छ। ज्ञान अनुसन्धान बन्न सक्छ। अनुसन्धान नवप्रवर्तन बन्न सक्छ। नवप्रवर्तन उद्यम बन्न सक्छ। र उद्यमले समाजका लागि मूल्य सिर्जना गर्न सक्छ। तर यो सबैको सुरुवात एउटा निडर जिज्ञासाबाट हुन्छ।"'
                : '"A question can become knowledge. Knowledge can become research. Research can become innovation. Innovation can become an enterprise. And an enterprise can create enduring value for society. But it all begins with fearless curiosity."'}
            </p>
            <cite 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--accent-gold)',
                fontStyle: 'normal'
              }}
            >
              — {language === 'ne' ? 'किशन बास्तोला' : 'Kishan Bastola'}
            </cite>
          </blockquote>
        </div>

        {/* Four Philosophical Pillars Grid */}
        <div style={{ marginBottom: '4.5rem' }}>
          <h2 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '2rem'
            }}
          >
            {language === 'ne' 
              ? 'कार्यदिशालाई अघि बढाउने ४ स्तम्भहरू' 
              : 'The Four Pillars That Drive Our Work'}
          </h2>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {philosophicalPillars.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'var(--accent-gold)'
                      }}
                    >
                      {pillar.num}
                    </span>
                    <div 
                      style={{
                        padding: '0.5rem',
                        backgroundColor: 'var(--bg-alt)',
                        borderRadius: '4px'
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      margin: '0 0 0.75rem 0'
                    }}
                  >
                    {language === 'ne' ? pillar.titleNe : pillar.titleEn}
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    {language === 'ne' ? pillar.descNe : pillar.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Deep-Dive: Mathematics as the Anchor */}
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
                {language === 'ne' ? 'गणितीय सोचको शक्ति' : 'THE RIGOR OF MATHEMATICS'}
              </span>
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 1rem 0'
                }}
              >
                {language === 'ne' 
                  ? 'गणित: विज्ञान, प्रविधि र नवप्रवर्तनको अन्तर्राष्ट्रिय भाषा'
                  : 'Mathematics: The Foundational Substrate of All Empirical Innovation'}
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
                  ? 'नेपाल म्याथमेटिकल सोसाइटी (NMS) बागमती र गणित समाज नेपाल (MAN) बागमती प्रदेशको नेतृत्व सम्हाल्दै गर्दा, किशन बास्तोलाको मूल प्रयास गणितलाई परीक्षाको त्रासबाट मुक्त गरी खोज, रोबोटिक्स र डाटा मोडेलिङको व्यावहारिक आधार बनाउनु हो। जब विद्यार्थीले गणितको ढाँचा र तर्क बुझ्छन्, तब उनीहरूले कुनै पनि वैज्ञानिक समस्या सुल्झाउन सक्छन्।'
                  : 'Serving in executive leadership across the Nepal Mathematical Society (NMS) and Mathematical Association of Nepal (MAN) Bagmati, his mission has been to demystify mathematics from abstract intimidation into an accessible tool for computational modeling, physics simulation, and engineering logic.'}
              </p>
            </div>
            <div style={{ gridColumn: 'span 4', width: '100%' }}>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '6px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--accent-blue)',
                    display: 'block',
                    lineHeight: 1
                  }}
                >
                  f(x) → ℝ
                </span>
                <p 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    color: 'var(--text-muted)',
                    margin: '0.75rem 0 0 0'
                  }}
                >
                  {language === 'ne' ? 'तार्किक मोडेलिङबाट वास्तविक रूपान्तरण' : 'From rigorous theory to tangible impact'}
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
            to="/what-shaped-me"
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} />
            <span>{language === 'ne' ? '← ०१. पृष्ठभूमि र यात्रा' : '← 01. What Shaped Me?'}</span>
          </Link>

          <Link
            to="/what-problems-am-i-solving"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <span>{language === 'ne' ? '०३. कुन समस्या समाधान गर्दैछु? →' : 'Next: 03. What Problems Am I Solving? →'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
};
