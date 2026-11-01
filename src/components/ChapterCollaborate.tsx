import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Copy, 
  Check, 
  Mail, 
  Send, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  HeartHandshake,
  ArrowRight,
  ChevronLeft,
  Building,
  School,
  Microscope,
  Users,
  Sparkles
} from 'lucide-react';
import { person, contact, SUPPORT_VISION_DATA } from '../data/sourceFacts';
import { useLanguage } from '../context/LanguageContext';

export const ChapterCollaborate: React.FC = () => {
  const { language, tF } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBankAcc, setCopiedBankAcc] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  // Accessible message composer state
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('Research & Academic Partnerships');
  const [message, setMessage] = useState('');

  const collaborationPurposes = [
    {
      id: 'research',
      titleEn: 'Research & Academic Partnerships',
      titleNe: 'अनुसन्धान तथा प्राज्ञिक साझेदारी',
      descEn: 'Joint academic studies, M.Ed. thesis co-supervision, mathematics pedagogy research.',
      descNe: 'संयुक्त प्राज्ञिक अध्ययन, स्नातकोत्तर शोध सह-पर्यवेक्षण र गणित शिक्षण विधि अनुसन्धान।'
    },
    {
      id: 'steam',
      titleEn: 'STEAM Education & Curriculum Design',
      titleNe: 'STEAM शिक्षा तथा पाठ्यक्रम विकास',
      descEn: 'Hands-on experiential labs, teacher professional development, school STEM workshops.',
      descNe: 'व्यावहारिक प्रयोगशाला स्थापना, शिक्षक क्षमता अभिवृद्धि र विद्यालयस्तरीय विज्ञान कार्यशाला।'
    },
    {
      id: 'delegation',
      titleEn: 'Science Fair & Global Delegation Mentorship',
      titleNe: 'विज्ञान प्रदर्शनी तथा अन्तर्राष्ट्रिय सहभागिता',
      descEn: 'Scouting, grooming, and mentoring youth research projects for TISF Taiwan & IOSTC Indonesia.',
      descNe: 'ताइवान TISF र इन्डोनेसिया IOSTC का लागि विद्यार्थी अनुसन्धान परियोजनाको छनोट र मेन्टरसिप।'
    },
    {
      id: 'incubation',
      titleEn: 'Innovation & Incubation Hub Setup (HRIC)',
      titleNe: 'नवप्रवर्तन तथा इन्क्युबेशन केन्द्र स्थापना',
      descEn: 'Collaborating with municipalities and institutions to build regional prototyping centers.',
      descNe: 'स्थानीय तह र संस्थाहरूसँग मिलेर हेटौंडाको HRIC मोडलमा क्षेत्रीय नवप्रवर्तन केन्द्र निर्माण।'
    },
    {
      id: 'keynote',
      titleEn: 'Keynote & Guest Lectures',
      titleNe: 'विशिष्ट सम्बोधन तथा अतिथि मन्तव्य',
      descEn: 'Addresses on mathematics education, ecosystem building, and Curiosity-to-Commerce.',
      descNe: 'गणित शिक्षा, इकोसिस्टम निर्माण र "जिज्ञासादेखि वाणिज्यसम्म" विषयमा मन्तव्य तथा सत्र सञ्चालन।'
    }
  ];

  const strategicVisionPillars = [
    {
      id: 'decentralized',
      number: '01',
      titleEn: 'Decentralized Research & Prototyping Hubs',
      titleNe: 'काठमाडौं बाहिर विकेन्द्रित अनुसन्धान तथा मेकिङ पूर्वाधार',
      descEn: 'Replicating the HRIC model across Bagmati Province municipalities to ensure district-level youth have direct access to physical laboratories, 3D prototyping, and robotics benches.',
      descNe: 'हेटौंडाको HRIC मोडललाई बागमती र अन्य प्रदेशका पालिकाहरूमा विस्तार गरी स्थानीय विद्यार्थीलाई प्रयोगशाला, थ्रीडी प्रोटोटाइपिङ र रोबोटिक्स उपकरणसम्म प्रत्यक्ष पहुँच दिलाउने।',
      icon: <Building size={20} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      id: 'steam-reform',
      number: '02',
      titleEn: 'Public School STEAM & Mathematics Transformation',
      titleNe: 'सार्वजनिक विद्यालयमा STEAM र गणित शिक्षणको रूपान्तरण',
      descEn: 'Shifting from traditional rote-memorization to experiential inquiry-based pedagogy where students touch, build, test, and measure mathematical models in real-world environments.',
      descNe: 'सैद्धान्तिक रटन्ते विधिबाट व्यावहारिक खोजमा आधारित शिक्षणमा रूपान्तरण, जहाँ विद्यार्थीले गणितीय र वैज्ञानिक सिद्धान्तहरू हातैले बनाएर, परीक्षण गरेर सिक्न पाउँछन्।',
      icon: <School size={20} style={{ color: 'var(--accent-gold)' }} />
    },
    {
      id: 'brain-retention',
      number: '03',
      titleEn: 'Retaining Youth Talent via Curiosity-to-Commerce',
      titleNe: 'आविष्कार र उद्यमशीलतामार्फत युवा प्रतिभाको संरक्षण',
      descEn: 'Connecting research directly to agriculture, technology, and local industry so Nepal’s brilliant young minds find viable intellectual and entrepreneurial careers at home.',
      descNe: 'अनुसन्धान र आविष्कारलाई स्थानीय उद्योग, कृषि र प्रविधिसँग जोडेर बजारयोग्य मूल्य सिर्जना गर्ने, जसले गर्दा प्रतिभाशाली नेपाली युवाहरूले स्वदेशमै बौद्धिक र आर्थिक अवसर पाउन सकून्।',
      icon: <Sparkles size={20} style={{ color: 'var(--accent-gold)' }} />
    }
  ];

  const invitationProfiles = [
    {
      id: 'schools',
      titleEn: 'Schools & Educational Leaders',
      titleNe: 'विद्यालय तथा शैक्षिक नेतृत्वकर्ताहरू',
      roleEn: 'Principals, Department Heads & Trustees',
      roleNe: 'प्रधानाध्यापक, विभाग प्रमुख तथा व्यवस्थापन',
      descEn: 'Implement hands-on STEAM curriculum, teacher pedagogical training, and school science/robotics clubs.',
      descNe: 'व्यावहारिक STEAM पाठ्यक्रम, शिक्षक क्षमता विकास र विद्यार्थी विज्ञान/रोबोटिक्स क्लब स्थापना।',
      icon: <School size={20} style={{ color: 'var(--accent-blue)' }} />,
      inquiryType: 'STEAM Education & School Lab Setup'
    },
    {
      id: 'universities',
      titleEn: 'Universities & Academic Researchers',
      titleNe: 'विश्वविद्यालय तथा प्राज्ञिक अनुसन्धानकर्ता',
      roleEn: 'Deans, Professors & Research Supervisors',
      roleNe: 'डीन, प्राध्यापक तथा शोध निर्देशकहरू',
      descEn: 'Joint research studies, M.Ed./M.Sc. co-supervision, pedagogy publications, and academic seminars.',
      descNe: 'संयुक्त अनुसन्धान, स्नातकोत्तर शोध सह-पर्यवेक्षण, जर्नल प्रकाशन र राष्ट्रिय सम्मेलन आयोजना।',
      icon: <Microscope size={20} style={{ color: 'var(--accent-blue)' }} />,
      inquiryType: 'University Research & Thesis Co-Supervision'
    },
    {
      id: 'municipalities',
      titleEn: 'Municipalities & Civic Leaders',
      titleNe: 'स्थानीय सरकार तथा नीतिनिर्माताहरू',
      roleEn: 'Mayors, Education Officers & Ward Chairs',
      roleNe: 'नगरप्रमुख, शिक्षा शाखा प्रमुख तथा जनप्रतिनिधि',
      descEn: 'Establish municipal innovation centers, public maker spaces, and provincial youth science fairs.',
      descNe: 'नगरस्तरीय नवप्रवर्तन केन्द्र, सार्वजनिक मेकर स्पेस र प्रादेशिक विज्ञान प्रदर्शनी सञ्चालन।',
      icon: <Building size={20} style={{ color: 'var(--accent-blue)' }} />,
      inquiryType: 'Municipal Innovation Center Setup'
    },
    {
      id: 'philanthropy',
      titleEn: 'Industry & Philanthropic Partners',
      titleNe: 'उद्योग तथा सामाजिक साझेदारहरू',
      roleEn: 'CSR Leaders, Tech Founders & Donors',
      roleNe: 'उद्योगी, प्रविधि संस्थापक तथा दातृ निकाय',
      descEn: 'Support student research grants, hardware prototyping tools, and global competition travel grants.',
      descNe: 'विद्यार्थी अनुसन्धान छात्रवृत्ति, हार्डवेयर प्रोटोटाइपिङ ल्याब र अन्तर्राष्ट्रिय मञ्च सहभागिता सहयोग।',
      icon: <Users size={20} style={{ color: 'var(--accent-blue)' }} />,
      inquiryType: 'Student Innovation Grants & Sponsorship'
    }
  ];

  const handleCopy = (text: string, type: 'email' | 'phone' | 'bank') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'bank') {
      setCopiedBankAcc(true);
      setTimeout(() => setCopiedBankAcc(false), 2000);
    }
  };

  const getPurposeMailTo = (purposeLabel: string) => {
    const subject = encodeURIComponent(`Collaboration Inquiry: ${purposeLabel}`);
    const body = encodeURIComponent(
      `Dear Kishan Bastola,\n\nI would like to discuss collaboration regarding: ${purposeLabel}.\n\nName: \nOrganization / Institution: \nMessage: \n\nBest regards,`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collaboration Inquiry: ${selectedPurpose} - ${name || 'Inquirer'}`);
    const bodyText = `Dear Kishan Bastola,\n\nName: ${name}\nOrganization: ${organization}\nPurpose: ${selectedPurpose}\n\nMessage:\n${message}\n\nSent via kishanbastola.com`;
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <section 
      id="collaborate"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
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
              {language === 'ne' ? 'प्रश्न ०६' : 'QUESTION 06'}
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
              {language === 'ne' ? 'भविष्य र सहकार्य' : 'WHAT FUTURE AM I BUILDING ?'}
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
            {language === 'ne' ? 'साझेदारी तथा संवाद' : 'INSTITUTIONAL PARTNERSHIPS'}
          </span>
        </div>

        {/* Question 06 Narrative Framework Anchor & Banner */}
        <div 
          id="future"
          style={{
            backgroundColor: 'var(--bg-alt)',
            border: '1px solid var(--border-light)',
            borderLeft: '4px solid var(--accent-gold)',
            borderRadius: '4px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
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
                06. WHAT FUTURE AM I BUILDING?
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
                  ? 'म कस्तो भविष्य निर्माण गर्न चाहन्छु र कोसँग सहकार्य गर्न चाहन्छु?' 
                  : 'What Future Am I Building and With Whom Do I Seek Collaboration?'}
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
                ? 'नेपालका लागि दीर्घकालीन दृष्टि, HRIC र वैज्ञानिक इकोसिस्टम विकासको आगामी दिशा, अनुसन्धान रुचि, विश्वविद्यालय, विद्यालय, सरकार, अनुसन्धानकर्ता, उद्योग र अन्तर्राष्ट्रिय संस्थाहरूसँगको साझेदारी तथा सहकार्य निमन्त्रणा।'
                : 'Long-term vision for Nepal, future direction for HRIC and scientific ecosystem development, research interests, desired partnerships with universities, schools, government, researchers, industry and international organizations. Include a clear collaboration/contact invitation.'}
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
              borderRadius: '2px'
            }}
          >
            {language === 'ne' ? 'धारा ६: दीर्घकालीन दृष्टिकोण' : 'SECTION 6: LONG-TERM VISION'}
          </span>
        </div>

        {/* Section Heading & Statement */}
        <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
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
            {language === 'ne' ? 'के हामी सहकार्य गरौं ?' : 'Shall we collaborate?'}
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
              ? 'हामी विद्यालयका प्रधानाध्यापक, क्याम्पस प्रमुख, अनुसन्धानकर्ता, प्राज्ञिक विज्ञ, स्थानीय सरकारका नेतृत्वकर्ता र युवा नवप्रवर्तकसँग दिगो शैक्षिक तथा वैज्ञानिक इकोसिस्टम निर्माण गर्न सधैं खुला छौं।'
              : 'Ecosystems are built through institutional collaboration. Whether you are an educational institution seeking to implement hands-on STEAM pedagogy, a university partner exploring research co-supervision, a municipal authority looking to establish a regional innovation center, or an organization preparing youth for international science competitions—let us initiate a conversation.'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={`mailto:${contact.email}?subject=Collaboration%20Inquiry%20-%20Kishan%20Bastola`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: 'var(--text-primary)',
                padding: '0.85rem 1.6rem',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--text-primary)')}
            >
              <Mail size={17} />
              <span>{language === 'ne' ? 'सिधै संवाद सुरु गर्नुहोस्' : 'Start a Conversation'}</span>
            </a>

            <a
              href={`https://wa.me/977${contact.whatsapp}?text=${encodeURIComponent('Namaste Kishan Sir, I would like to inquire about collaboration.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                padding: '0.85rem 1.4rem',
                border: '1px solid var(--border-dark)',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-dark)';
              }}
            >
              <MessageSquare size={17} style={{ color: '#25D366' }} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 3 Strategic Vision Pillars for Nepal (Brief Section 4 & Section 5) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'नेपालका लागि दीर्घकालीन रणनीतिक स्तम्भहरू' : 'STRATEGIC VISION PILLARS FOR NEPAL'}
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
              {language === 'ne' ? 'विकेन्द्रित अनुसन्धान, व्यावहारिक शिक्षा र प्रतिभा संरक्षण' : 'Decentralized Research, Educational Transformation & Brain Retention'}
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {strategicVisionPillars.map((pillar) => (
              <div 
                key={pillar.id}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderTop: '3px solid var(--accent-gold)',
                  borderRadius: '4px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)'
                    }}
                  >
                    PILLAR #{pillar.number}
                  </span>
                </div>

                <h4 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {language === 'ne' ? pillar.titleNe : pillar.titleEn}
                </h4>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}
                >
                  {language === 'ne' ? pillar.descNe : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Clear Invitation Profiles (Who Can Collaborate) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              {language === 'ne' ? 'सहकार्यका चार प्रमुख साझेदार वर्गहरू' : 'FOUR COLLABORATION PARTNER PROFILES'}
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
              {language === 'ne' ? 'हामी कसरी सहकार्य गर्न सक्छौं?' : 'Who We Partner With & How We Create Impact'}
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {invitationProfiles.map((item) => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                  transition: 'border-color 0.2s ease, transform 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-alt)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                        lineHeight: 1.25
                      }}
                    >
                      {language === 'ne' ? item.titleNe : item.titleEn}
                    </h4>
                    <span 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {language === 'ne' ? item.roleNe : item.roleEn}
                    </span>
                  </div>
                </div>

                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}
                >
                  {language === 'ne' ? item.descNe : item.descEn}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <button
                    onClick={() => {
                      setSelectedPurpose(item.inquiryType);
                      const composerElement = document.getElementById('composer-section');
                      if (composerElement) {
                        composerElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{language === 'ne' ? 'साझेदारी प्रस्ताव लेख्नुहोस्' : 'Initiate Inquiry'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Collaboration Domains / Purpose Rows */}
        <div style={{ marginBottom: '4rem' }}>
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              display: 'block',
              marginBottom: '1rem'
            }}
          >
            {language === 'ne' ? 'सहकार्यका पाँच प्रमुख क्षेत्रहरू' : '5 FOCUS AREAS FOR COLLABORATION'}
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {collaborationPurposes.map((p) => (
              <div 
                key={p.id}
                style={{
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div style={{ maxWidth: '680px' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                    {language === 'ne' ? p.titleNe : p.titleEn}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                    {language === 'ne' ? p.descNe : p.descEn}
                  </p>
                </div>

                <a
                  href={getPurposeMailTo(p.titleEn)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    padding: '0.45rem 0.9rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.color = 'var(--accent-blue)';
                  }}
                >
                  <span>{language === 'ne' ? 'प्रस्ताव पठाउनुहोस्' : 'Inquire Directly'}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Verified Contact Details & Accessible Message Composer */}
        <div className="grid-12" style={{ gap: '2.5rem', alignItems: 'start', marginBottom: '4rem' }}>
          
          {/* Left Column: Verified Contact Details */}
          <div style={{ gridColumn: 'span 5', width: '100%' }}>
            
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'प्रमाणित सम्पर्क विवरण' : 'VERIFIED CONTACT INFORMATION'}
            </span>

            <div 
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Primary Email */}
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  {language === 'ne' ? 'आधिकारिक इमेल' : 'Primary Email'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <a href={`mailto:${contact.email}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
                    {contact.email}
                  </a>
                  <button
                    onClick={() => handleCopy(contact.email, 'email')}
                    title="Copy Email"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: copiedEmail ? 'green' : 'var(--text-muted)',
                      padding: '0.2rem'
                    }}
                  >
                    {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Phone / Mobile */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  {language === 'ne' ? 'फोन तथा ह्वाट्सएप' : 'Direct Phone / WhatsApp'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <a href={`tel:${contact.phone}`} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
                    {contact.phone}
                  </a>
                  <button
                    onClick={() => handleCopy(contact.phone, 'phone')}
                    title="Copy Phone"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: copiedPhone ? 'green' : 'var(--text-muted)',
                      padding: '0.2rem'
                    }}
                  >
                    {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* Office Location */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  {language === 'ne' ? 'कार्यालय ठेगाना' : 'Institutional Office'}
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  Astronova Foundation Nepal & HRIC<br />
                  Hetauda, Makwanpur · Bagmati Province, Nepal
                </p>
              </div>

              {/* Verified Links */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
                  {language === 'ne' ? 'आधिकारिक लिङ्कहरू' : 'Verified Channels'}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
                  <a href="https://astronovafoundation.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>Astronova Foundation Portal</span>
                    <ExternalLink size={13} />
                  </a>
                  <a href="https://www.linkedin.com/in/kishan-bastola-3a67041b3/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={13} />
                  </a>
                  <a href="https://www.facebook.com/share/18Re3ajNqx/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>Mathematical Association of Nepal (MAN) Bagmati</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Message Composer */}
          <div id="composer-section" style={{ gridColumn: 'span 7', width: '100%' }}>
            
            <span 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              {language === 'ne' ? 'सन्देश लेख्नुहोस् (प्रत्यक्ष इमेल)' : 'COMPOSE COLLABORATION INQUIRY'}
            </span>

            <form 
              onSubmit={handleSendMessage}
              style={{
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div className="form-grid-2col">
                <div>
                  <label 
                    htmlFor="collab-name"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'block',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {language === 'ne' ? 'तपाईंको पूरा नाम *' : 'Your Full Name *'}
                  </label>
                  <input
                    id="collab-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'ne' ? 'उदाहरण: डा. रमेश शर्मा' : 'e.g., Dr. Ramesh Sharma'}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="collab-org"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      display: 'block',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {language === 'ne' ? 'संस्था वा विद्यालय *' : 'Organization / Institution *'}
                  </label>
                  <input
                    id="collab-org"
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder={language === 'ne' ? 'उदाहरण: काठमाडौं विश्वविद्यालय' : 'e.g., Tribhuvan University'}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="collab-purpose"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'block',
                    marginBottom: '0.35rem'
                  }}
                >
                  {language === 'ne' ? 'सहकार्यको मुख्य क्षेत्र' : 'Primary Domain of Inquiry'}
                </label>
                <select
                  id="collab-purpose"
                  value={selectedPurpose}
                  onChange={(e) => setSelectedPurpose(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                >
                  {collaborationPurposes.map((p) => (
                    <option key={p.id} value={p.titleEn}>
                      {language === 'ne' ? p.titleNe : p.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label 
                  htmlFor="collab-message"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    display: 'block',
                    marginBottom: '0.35rem'
                  }}
                >
                  {language === 'ne' ? 'संक्षिप्त प्रस्ताव तथा सन्देश *' : 'Brief Inquiry or Collaboration Proposal *'}
                </label>
                <textarea
                  id="collab-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'ne' 
                      ? 'तपाईंले गर्न खोज्नुभएको सहकार्य, कार्यक्षेत्र र अपेक्षित मितिबारे केही जानकारी खुलाउनुहोस्...'
                      : 'Provide details about your institutional program, timeline, and proposed collaborative goals...'
                  }
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '2px',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  {language === 'ne' ? 'यस फारामले तपाईंको इमेल क्लाइन्ट सिधै खोल्नेछ।' : 'Submitting opens your verified email client with pre-filled details.'}
                </span>

                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    backgroundColor: 'var(--accent-blue)',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <Send size={16} />
                  <span>{language === 'ne' ? 'इमेल पठाउनुहोस्' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>

          </div>

        </div>

        {/* Collapsible Support Vision Drawer (Transparent Non-profit Contributions) */}
        <div 
          style={{
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-alt)',
            marginBottom: '4rem',
            overflow: 'hidden'
          }}
        >
          <button
            onClick={() => setShowSupport(!showSupport)}
            style={{
              width: '100%',
              padding: '1.25rem 1.75rem',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <HeartHandshake size={20} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {language === 'ne' ? 'नेपालमा युवा विज्ञान तथा STEAM अभियानलाई सहयोग गर्नुहोस्' : 'Support the Youth Science & STEAM Research Movement in Nepal'}
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                  {language === 'ne' ? 'एष्ट्रोनोभा फाउण्डेशनको पारदर्शी गैर-नाफामूलक बैंकिङ विवरण' : 'Verified non-profit bank details for student research and competition grants'}
                </p>
              </div>
            </div>

            <div style={{ color: 'var(--accent-blue)' }}>
              {showSupport ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {showSupport && (
            <div style={{ padding: '0 1.75rem 1.75rem 1.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: '780px' }}>
                {SUPPORT_VISION_DATA.note}
              </p>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.25rem',
                  borderRadius: '3px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                    {language === 'ne' ? 'बैंक' : 'Bank'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700, margin: '0.2rem 0 0 0', color: 'var(--text-primary)' }}>
                    {SUPPORT_VISION_DATA.bankName}
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                    {language === 'ne' ? 'खातावाला' : 'Account Holder'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700, margin: '0.2rem 0 0 0', color: 'var(--text-primary)' }}>
                    {SUPPORT_VISION_DATA.accountHolder}
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                    {language === 'ne' ? 'खाता नम्बर' : 'Account Number'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <p style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--accent-blue)' }}>
                      {SUPPORT_VISION_DATA.accountNumber}
                    </p>
                    <button
                      onClick={() => handleCopy(SUPPORT_VISION_DATA.accountNumber, 'bank')}
                      title="Copy Account Number"
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: copiedBankAcc ? 'green' : 'var(--text-muted)', padding: '0.1rem' }}
                    >
                      {copiedBankAcc ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>
                    {language === 'ne' ? 'शाखा' : 'Branch'}
                  </span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, margin: '0.2rem 0 0 0', color: 'var(--text-secondary)' }}>
                    {SUPPORT_VISION_DATA.branch}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suitable Closing Statement reinforcing 'From Curiosity to Commerce' */}
        <div 
          style={{
            borderTop: '2px solid var(--text-primary)',
            paddingTop: '2.5rem',
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              display: 'block',
              marginBottom: '0.65rem'
            }}
          >
            {language === 'ne' ? 'निष्कर्ष प्रतिबद्धता' : 'CONCLUDING COMMITMENT'}
          </span>

          <h3 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              margin: '0 0 0.85rem 0',
              lineHeight: 1.3
            }}
          >
            "{tF(person.tagline)}"
          </h3>

          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.94rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            {language === 'ne'
              ? 'हरेक जिज्ञासु मनलाई वैज्ञानिक विधि र नवप्रवर्तनमार्फत समाजको दिगो मूल्यसँग जोड्ने यात्रामा तपाईंलाई हार्दिक स्वागत छ।'
              : 'Empowering curious minds with rigorous scientific thinking and practical incubation to generate lasting societal and economic value across Nepal.'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <Link
              to="/how-do-i-create-value"
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
              <span>{language === 'ne' ? '← ०५. मूल्य सिर्जना' : '← 05. How I Create Value'}</span>
            </Link>

            <Link
              to="/what-shaped-me"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--accent-blue)',
                backgroundColor: 'var(--bg-alt)',
                padding: '0.75rem 1.25rem',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <span>{language === 'ne' ? 'सुरुवात: ०१. पृष्ठभूमि र यात्रा' : 'Return to Start: 01. What Shaped Me?'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
