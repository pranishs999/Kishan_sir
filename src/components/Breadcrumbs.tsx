import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const breadcrumbLabels: Record<string, { en: string; ne: string }> = {
  home: { en: 'Home', ne: 'गृहपृष्ठ' },
  about: { en: 'About', ne: 'परिचय' },
  education: { en: 'Education', ne: 'शिक्षा' },
  experience: { en: 'Experience', ne: 'अनुभव' },
  leadership: { en: 'Leadership', ne: 'नेतृत्व' },
  work: { en: 'Work', ne: 'कार्य क्षेत्र' },
  mathematics: { en: 'Mathematics', ne: 'गणित' },
  science: { en: 'Science', ne: 'विज्ञान' },
  research: { en: 'Research', ne: 'अनुसन्धान' },
  innovation: { en: 'Innovation', ne: 'नवप्रवर्तन' },
  entrepreneurship: { en: 'Entrepreneurship', ne: 'उद्यमशीलता' },
  initiatives: { en: 'Initiatives', ne: 'पहलहरू' },
  hric: { en: 'HRIC', ne: 'HRIC' },
  astronova: { en: 'Astronova', ne: 'एष्ट्रोनोभा' },
  'young-scientists': { en: 'Young Scientists', ne: 'युवा वैज्ञानिकहरू' },
  steam: { en: 'STEAM', ne: 'STEAM' },
  'science-engineering-fair': { en: 'Science & Engineering Fair', ne: 'विज्ञान तथा इन्जिनियरिङ प्रदर्शनी' },
  workshops: { en: 'Workshops', ne: 'कार्यशालाहरू' },
  ecosystem: { en: 'Ecosystem', ne: 'इकोसिस्टम' },
  vision: { en: 'Vision', ne: 'दृष्टि' },
  mentorship: { en: 'Mentorship', ne: 'मेन्टरशिप' },
  enterprise: { en: 'Enterprise', ne: 'उद्यमशीलता' },
  thought: { en: 'Thought', ne: 'विचार र लेख' },
  media: { en: 'Media', ne: 'मिडिया कवरेज' },
  newspapers: { en: 'Newspapers', ne: 'समाचारपत्रहरू' },
  interviews: { en: 'Interviews', ne: 'अन्तर्वार्ताहरू' },
  events: { en: 'Events', ne: 'कार्यक्रमहरू' },
  gallery: { en: 'Gallery', ne: 'ग्यालेरी' },
  cv: { en: 'CV', ne: 'सीभी / बायोडाटा' },
  contact: { en: 'Contact', ne: 'सम्पर्क' },
  support: { en: 'Support', ne: 'सहयोग' },
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const getLabel = (path: string) => {
    const labels = breadcrumbLabels[path];
    if (labels) return labels[language] || labels.en;
    return path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{ 
        backgroundColor: 'var(--bg-alt)', 
        borderBottom: '1px solid var(--border-light)',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.825rem' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
          {getLabel('home')}
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <ChevronRight size={12} color="var(--text-muted)" />
              {isLast ? (
                <span style={{ color: 'var(--accent-blue)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  {getLabel(name)}
                </span>
              ) : (
                <Link to={routeTo} style={{ color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {getLabel(name)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};