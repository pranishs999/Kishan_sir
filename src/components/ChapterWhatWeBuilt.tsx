import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  Newspaper, 
  Image as ImageIcon,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  CheckCircle,
  Clock,
  Sparkles,
  Filter,
  Network,
  Users,
  Microscope,
  School,
  Building
} from 'lucide-react';
import { 
  SUPERVISED_THESES, 
  THOUGHT_ENTRIES, 
  MEDIA_ARCHIVE, 
  GALLERY_ITEMS, 
  SELECTED_WORK 
} from '../data/sourceFacts';
import type { ProgramStatus } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

export const ChapterWhatWeBuilt: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'researched' | 'written' | 'press' | 'gallery'>('researched');
  const [statusFilter, setStatusFilter] = useState<'all' | ProgramStatus>('all');
  const [selectedEcosystemNode, setSelectedEcosystemNode] = useState<string>('all');

  const filteredInitiatives = statusFilter === 'all' 
    ? SELECTED_WORK 
    : SELECTED_WORK.filter((item) => item.status === statusFilter);

  const getStatusBadge = (status?: ProgramStatus) => {
    switch (status) {
      case 'active':
        return {
          labelEn: 'Active Program',
          labelNe: 'सक्रिय कार्यक्रम',
          color: '#0D6832',
          bgColor: '#EBF6EF',
          borderColor: '#BBE5CB',
          icon: <CheckCircle size={13} style={{ color: '#0D6832' }} />
        };
      case 'pilot':
        return {
          labelEn: 'Pilot Phase',
          labelNe: 'पाइलट चरण',
          color: '#8A5B00',
          bgColor: '#FEF8E7',
          borderColor: '#F6E1A4',
          icon: <Clock size={13} style={{ color: '#8A5B00' }} />
        };
      case 'planned':
        return {
          labelEn: 'Planned Initiative',
          labelNe: 'योजनाबद्ध पहल',
          color: '#344054',
          bgColor: '#F2F4F7',
          borderColor: '#D0D5DD',
          icon: <Sparkles size={13} style={{ color: '#475467' }} />
        };
      default:
        return {
          labelEn: 'Active Initiative',
          labelNe: 'सक्रिय पहल',
          color: '#0D6832',
          bgColor: '#EBF6EF',
          borderColor: '#BBE5CB',
          icon: <CheckCircle size={13} style={{ color: '#0D6832' }} />
        };
    }
  };

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

        {/* Question 04 Narrative Framework Anchor & Banner */}
        <div 
          id="creating"
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderLeft: '4px solid var(--accent-gold)',
            borderRadius: '4px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
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
                04. WHAT AM I CREATING?
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
                  ? 'म कुन संस्था, प्रणाली र अवसर निर्माण गर्दैछु?'
                  : 'What Institutions, Systems & Opportunities Am I Creating?'}
              </span>
            </div>
            
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--accent-blue)',
                margin: '0 0 0.5rem 0'
              }}
            >
              {language === 'ne' 
                ? 'एष्ट्रोनोभा फाउण्डेशन नेपाल, हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC), HRIC वैज्ञानिक इकोसिस्टम, STEAM सिकाइ पहलहरू, विद्यार्थी अनुसन्धान र विज्ञान प्रदर्शनी मार्ग, मेन्टर सञ्जाल र संस्थागत साझेदारी।'
                : 'Astronova Foundation Nepal, Hetauda Research and Innovation Center (HRIC), HRIC Scientific Ecosystem, STEAM learning initiatives, student research and science fair pathways, mentor networks and institutional partnerships.'}
            </p>

            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.55
              }}
            >
              {language === 'ne'
                ? 'तल प्रस्तुत गरिएको इकोसिस्टम सम्बन्ध रेखाचित्रले यी संस्थाहरू, कार्यक्रमहरू र साझेदारीहरू कसरी आपसमा जोडिएका छन् भनी स्पष्ट रूपमा देखाउँछ।'
                : 'Show the relationship among these initiatives with a clear ecosystem diagram below.'}
            </p>
          </div>

          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.76rem',
              fontWeight: 600,
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              padding: '0.35rem 0.75rem',
              borderRadius: '2px',
              whiteSpace: 'nowrap'
            }}
          >
            {language === 'ne' ? 'धारा ४: संस्था तथा इकोसिस्टम' : 'SECTION 4: ECOSYSTEM ARCHITECTURE'}
          </span>
        </div>

        {/* Section Heading */}
        <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
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
            {language === 'ne' ? 'संस्थागत जग, अन्तर्राष्ट्रिय मञ्च र कार्यक्रमहरू' : 'Institutional Foundations, Global Delegations & Programs'}
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
              ? 'काल्पनिक सिद्धान्त होइन; १८ वर्षको अवधिमा स्थापना गरिएका क्षेत्रीय अनुसन्धान केन्द्र, राष्ट्रिय फाउण्डेशन, अन्तर्राष्ट्रिय विज्ञान प्रतियोगितामा नेपालको नेतृत्व र निरन्तर सञ्चालित वैज्ञानिक कार्यक्रमहरू।'
              : 'Ideas are only as powerful as their institutional realization. Over nearly two decades, our work has created regional research hubs, mentored young researchers, led national delegations to premier international science fairs, and built enduring STEAM learning infrastructure.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CLEAR ECOSYSTEM RELATIONSHIP DIAGRAM (Prompt Requirement) */}
        {/* ========================================================================= */}
        <div 
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
          }}
        >
          {/* Diagram Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Network size={18} style={{ color: 'var(--accent-gold)' }} />
                <span 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)'
                  }}
                >
                  {language === 'ne' ? 'इकोसिस्टम सम्बन्ध रेखाचित्र' : 'SCIENTIFIC ECOSYSTEM RELATIONSHIP DIAGRAM'}
                </span>
              </div>

              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 2vw, 1.75rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                {language === 'ne' 
                  ? 'एष्ट्रोनोभा फाउण्डेशन तथा HRIC वैज्ञानिक इकोसिस्टम संरचना'
                  : 'The Astronova & HRIC Integrated Innovation Architecture'}
              </h3>
            </div>

            {/* Quick Interactive Vector Selector */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {[
                { id: 'all', labelEn: 'Complete Ecosystem', labelNe: 'सम्पूर्ण इकोसिस्टम' },
                { id: 'steam', labelEn: 'STEAM Initiatives', labelNe: 'STEAM सिकाइ' },
                { id: 'pathways', labelEn: 'Research Pathways', labelNe: 'अनुसन्धान मार्ग' },
                { id: 'mentors', labelEn: 'Mentor Networks', labelNe: 'मेन्टर सञ्जाल' },
                { id: 'partners', labelEn: 'Institutional Partners', labelNe: 'संस्थागत साझेदारी' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedEcosystemNode(btn.id)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.75rem',
                    borderRadius: '3px',
                    border: '1px solid',
                    borderColor: selectedEcosystemNode === btn.id ? 'var(--text-primary)' : 'var(--border-light)',
                    backgroundColor: selectedEcosystemNode === btn.id ? 'var(--text-primary)' : '#FFFFFF',
                    color: selectedEcosystemNode === btn.id ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {language === 'ne' ? btn.labelNe : btn.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Central Foundation & Physical Laboratory Twin Cores */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            {/* Core 1: Astronova Foundation Nepal */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--accent-gold)',
                borderRadius: '4px',
                padding: '1.5rem',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(180, 130, 34, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  CORE 01 · UMBRELLA FOUNDATION
                </span>
                <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', backgroundColor: '#FEF8E7', color: '#8A5B00', borderRadius: '2px', fontWeight: 600 }}>
                  Strategic & Governance
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                {language === 'ne' ? 'एष्ट्रोनोभा फाउण्डेशन नेपाल' : 'Astronova Foundation Nepal'}
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 0.75rem 0' }}>
                {language === 'ne' 
                  ? 'नीति, पाठ्यक्रम विकास, राष्ट्रिय कार्यक्रम समन्वय र कानुनी छाता प्रदान गर्ने राष्ट्रिय वैज्ञानिक संस्था।'
                  : 'National scientific foundation providing policy direction, STEAM curriculum frameworks, and international delegation accreditation.'}
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '0.5rem' }}>
                <strong>{language === 'ne' ? 'सम्बन्ध:' : 'Ecosystem Role:'}</strong> {language === 'ne' ? 'सम्पूर्ण पहलहरूको रणनीतिक तथा प्राज्ञिक अभिभावकत्व' : 'Strategic steering & institutional umbrella across all branches'}
              </div>
            </div>

            {/* Core 2: HRIC Hetauda */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--accent-blue)',
                borderRadius: '4px',
                padding: '1.5rem',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(30, 58, 95, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  CORE 02 · PHYSICAL R&D HUB
                </span>
                <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', backgroundColor: '#EBF3FB', color: '#1E3A5F', borderRadius: '2px', fontWeight: 600 }}>
                  Laboratories & Prototyping
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.22rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                {language === 'ne' ? 'हेटौंडा रिसर्च एण्ड इनोभेसन सेन्टर (HRIC)' : 'Hetauda Research & Innovation Center (HRIC)'}
              </h4>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 0.75rem 0' }}>
                {language === 'ne' 
                  ? 'हेटौंडा, मकवानपुरमा अवस्थित भौतिक अनुसन्धान प्रयोगशाला, मेकर स्पेस र प्रोटोटाइपिङ बेन्चहरू।'
                  : 'Dedicated regional physical facility in Hetauda with electronics prototyping benches, testing rigs, and student incubator labs.'}
              </p>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '0.5rem' }}>
                <strong>{language === 'ne' ? 'सम्बन्ध:' : 'Ecosystem Role:'}</strong> {language === 'ne' ? 'जिज्ञासालाई भौतिक प्रोटोटाइप र आविष्कारमा रूपान्तरण गर्ने प्रयोगशाला' : 'Physical testing ground translating theoretical ideas into working hardware'}
              </div>
            </div>
          </div>

          {/* 4 Connected Ecosystem Branch Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem'
            }}
          >
            {/* Vector 1: STEAM Learning Initiatives */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderTop: '3px solid var(--accent-gold)',
                borderRadius: '4px',
                padding: '1.25rem',
                opacity: selectedEcosystemNode === 'all' || selectedEcosystemNode === 'steam' ? 1 : 0.45,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <School size={18} style={{ color: 'var(--accent-gold)' }} />
                <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {language === 'ne' ? 'STEAM सिकाइ पहलहरू' : 'STEAM Initiatives'}
                </h5>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.6rem 0' }}>
                {language === 'ne'
                  ? 'सामुदायिक रोबोटिक्स कार्यशाला, ९-दिने र ११-दिने निःशुल्क बुटक्याम्प, खगोल विज्ञान र सेन्सर प्रविधि तालिम।'
                  : 'Hands-on community robotics, 9 & 11-day bootcamps, sensor programming, and observational astronomy.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--accent-blue)', fontWeight: 600, borderTop: '1px solid var(--border-light)', paddingTop: '0.45rem' }}>
                {language === 'ne' ? '→ HRIC ल्याबमा प्रवेश गर्ने आधारभूत प्रतिभा सिर्जना' : '→ Feeds grassroots cohorts into HRIC labs'}
              </div>
            </div>

            {/* Vector 2: Student Research & Science Fair Pathways */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderTop: '3px solid var(--accent-blue)',
                borderRadius: '4px',
                padding: '1.25rem',
                opacity: selectedEcosystemNode === 'all' || selectedEcosystemNode === 'pathways' ? 1 : 0.45,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <Microscope size={18} style={{ color: 'var(--accent-blue)' }} />
                <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {language === 'ne' ? 'अनुसन्धान तथा मेला मार्ग' : 'Research Pathways'}
                </h5>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.6rem 0' }}>
                {language === 'ne'
                  ? 'YSDP युवा वैज्ञानिक समूह, राष्ट्रिय विज्ञान मेला (NSEF), र ताइवान (TISF) तथा इन्डोनेसिया (IOSTC) अन्तर्राष्ट्रिय टोली।'
                  : 'Young Scientist cohorts (YSDP), National Fair (NSEF), and international delegations to TISF Taiwan & IOSTC Indonesia.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: 'var(--accent-blue)', fontWeight: 600, borderTop: '1px solid var(--border-light)', paddingTop: '0.45rem' }}>
                {language === 'ne' ? '→ राष्ट्रिय तथा विश्व मञ्चमा अनुसन्धान प्रतिरक्षा' : '→ Prepares students for international jury defense'}
              </div>
            </div>

            {/* Vector 3: Mentor Networks */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderTop: '3px solid #0D6832',
                borderRadius: '4px',
                padding: '1.25rem',
                opacity: selectedEcosystemNode === 'all' || selectedEcosystemNode === 'mentors' ? 1 : 0.45,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <Users size={18} style={{ color: '#0D6832' }} />
                <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {language === 'ne' ? 'मेन्टर तथा प्राज्ञिक सञ्जाल' : 'Mentor Networks'}
                </h5>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.6rem 0' }}>
                {language === 'ne'
                  ? 'गणित समाज (MAN तथा NMS बागमती), विश्वविद्यालय प्राध्यापक, इन्जिनियर र स्नातकोत्तर शोध सह-पर्यवेक्षकहरू।'
                  : 'Mathematical Association of Nepal (MAN/NMS Bagmati), university professors, engineers, and thesis supervisors.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: '#0D6832', fontWeight: 600, borderTop: '1px solid var(--border-light)', paddingTop: '0.45rem' }}>
                {language === 'ne' ? '→ कडा प्राज्ञिक गुणस्तर, शोध सम्पादन र सहकार्य' : '→ Rigorous academic peer review and supervision'}
              </div>
            </div>

            {/* Vector 4: Institutional & Municipal Partnerships */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderTop: '3px solid #344054',
                borderRadius: '4px',
                padding: '1.25rem',
                opacity: selectedEcosystemNode === 'all' || selectedEcosystemNode === 'partners' ? 1 : 0.45,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <Building size={18} style={{ color: '#344054' }} />
                <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {language === 'ne' ? 'संस्थागत तथा स्थानीय तह' : 'Institutional Partners'}
                </h5>
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.6rem 0' }}>
                {language === 'ne'
                  ? 'स्थानीय सरकार (हेटौंडा तथा बागमती पालिका), सामुदायिक तथा संस्थागत विद्यालय र क्षेत्रीय मेकर स्पेसहरू।'
                  : 'Municipalities, community schools, private schools, and future district-level digital fabrication labs.'}
              </p>
              <div style={{ fontSize: '0.74rem', color: '#344054', fontWeight: 600, borderTop: '1px solid var(--border-light)', paddingTop: '0.45rem' }}>
                {language === 'ne' ? '→ काठमाडौं बाहिर प्रयोगशाला विस्तार र दिगो स्रोत' : '→ Decentralized scaling outside Kathmandu'}
              </div>
            </div>
          </div>
        </div>

        {/* Program Lifecycle Filter Bar (Brief Section 6 Requirement: active / pilot / planned) */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '0.85rem 1.25rem',
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={16} style={{ color: 'var(--accent-gold)' }} />
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)'
              }}
            >
              {language === 'ne' ? 'कार्यक्रम अवस्था छनोट:' : 'PROGRAM LIFECYCLE STATUS:'}
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button
              onClick={() => setStatusFilter('all')}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: '1px solid',
                borderColor: statusFilter === 'all' ? 'var(--text-primary)' : 'var(--border-light)',
                backgroundColor: statusFilter === 'all' ? 'var(--text-primary)' : '#FFFFFF',
                color: statusFilter === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {language === 'ne' ? `सबै पहलहरू (${SELECTED_WORK.length})` : `All Initiatives (${SELECTED_WORK.length})`}
            </button>

            <button
              onClick={() => setStatusFilter('active')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: '1px solid',
                borderColor: statusFilter === 'active' ? '#0D6832' : 'var(--border-light)',
                backgroundColor: statusFilter === 'active' ? '#0D6832' : '#FFFFFF',
                color: statusFilter === 'active' ? '#FFFFFF' : '#0D6832',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <CheckCircle size={13} />
              <span>{language === 'ne' ? 'सक्रिय कार्यक्रम (Active)' : 'Active Programs'}</span>
            </button>

            <button
              onClick={() => setStatusFilter('pilot')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: '1px solid',
                borderColor: statusFilter === 'pilot' ? '#8A5B00' : 'var(--border-light)',
                backgroundColor: statusFilter === 'pilot' ? '#8A5B00' : '#FFFFFF',
                color: statusFilter === 'pilot' ? '#FFFFFF' : '#8A5B00',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Clock size={13} />
              <span>{language === 'ne' ? 'पाइलट चरण (Pilot)' : 'Pilot Phase'}</span>
            </button>

            <button
              onClick={() => setStatusFilter('planned')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '0.4rem 0.85rem',
                borderRadius: '3px',
                border: '1px solid',
                borderColor: statusFilter === 'planned' ? '#344054' : 'var(--border-light)',
                backgroundColor: statusFilter === 'planned' ? '#344054' : '#FFFFFF',
                color: statusFilter === 'planned' ? '#FFFFFF' : '#344054',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Sparkles size={13} />
              <span>{language === 'ne' ? 'योजनाबद्ध (Planned)' : 'Planned Phase'}</span>
            </button>
          </div>
        </div>

        {/* Curated Initiatives Grid with Status Badges */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {filteredInitiatives.map((item) => {
            const badge = getStatusBadge(item.status);
            return (
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
                {/* Media Thumbnail with Badges */}
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden', backgroundColor: '#E2E5E8' }}>
                  <img 
                    src={item.customImageUrl || '/images/hero.png'} 
                    alt={item.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Category Pill */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      backgroundColor: 'rgba(24, 27, 30, 0.88)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--accent-gold-light)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '2px'
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Lifecycle Status Pill (Brief Section 6 Requirement) */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      right: '0.85rem',
                      backgroundColor: badge.bgColor,
                      border: `1px solid ${badge.borderColor}`,
                      color: badge.color,
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '2px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                    }}
                  >
                    {badge.icon}
                    <span>{language === 'ne' ? badge.labelNe : badge.labelEn}</span>
                  </div>

                  {/* Program Number Indicator */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '0.85rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px'
                    }}
                  >
                    INITIATIVE #{item.number}
                  </div>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--accent-gold)',
                        display: 'block'
                      }}
                    >
                      {item.role}
                    </span>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        display: 'block'
                      }}
                    >
                      {item.organization}
                    </span>
                  </div>

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
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.summary}
                  </p>

                  {/* Key Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div 
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-light)',
                        borderRadius: '3px',
                        padding: '0.85rem 1rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--text-muted)',
                          display: 'block',
                          marginBottom: '0.4rem'
                        }}
                      >
                        {language === 'ne' ? 'मुख्य विशेषताहरू:' : 'Key Achievements:'}
                      </span>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item.highlights.map((hl, idx) => (
                          <li key={idx} style={{ marginBottom: '0.2rem' }}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                    {item.linkUrl && item.linkUrl.startsWith('http') ? (
                      <a
                        href={item.linkUrl}
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
                        <span>{item.linkText || (language === 'ne' ? 'आधिकारिक स्रोत हेर्नुहोस्' : 'Visit Official Portal')}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : item.linkUrl ? (
                      <Link
                        to={item.linkUrl}
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
                        <span>{item.linkText || (language === 'ne' ? 'थप विवरण हेर्नुहोस्' : 'Learn More')}</span>
                        <ChevronRight size={14} />
                      </Link>
                    ) : (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {language === 'ne' ? 'संस्थागत कार्यक्रम' : 'Institutional Initiative'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
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
              <span>{language === 'ne' ? '← ०३. समस्या समाधान' : '← 03. Problems I Solve'}</span>
            </Link>

            <Link 
              to="/how-do-i-create-value"
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
              <span>{language === 'ne' ? '०५. मूल्य सिर्जना →' : 'Next: 05. How I Create Value →'}</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
