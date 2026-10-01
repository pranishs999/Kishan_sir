import type { Language, LocalizedString, LocalizedStringArray } from '../types/schema';

/**
 * Centralized content resolver for localized strings.
 * Safely resolves string or { en: string; ne: string } objects based on current language.
 */
export function tField(field: LocalizedString | undefined | null, lang: Language): string {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (lang === 'ne' && field.ne) return field.ne;
  return field.en || field.ne || '';
}

/**
 * Centralized content resolver for localized string arrays.
 */
export function tArray(arr: LocalizedStringArray | undefined | null, lang: Language): string[] {
  if (!arr) return [];
  if (Array.isArray(arr)) {
    return arr.map(item => tField(item, lang));
  }
  if (lang === 'ne' && arr.ne && arr.ne.length > 0) return arr.ne;
  return arr.en || arr.ne || [];
}

/**
 * UI Chrome Translations (Navigation, Headers, Buttons, Labels)
 */
export const uiDict = {
  en: {
    siteTitle: 'KISHAN BASTOLA',
    siteSubTitle: 'Educationist · Mathematician · Ecosystem Builder',
    navAbout: 'About',
    navWork: 'Work',
    navInitiatives: 'Initiatives',
    navEcosystem: 'Ecosystem',
    navThought: 'Thought',
    navMedia: 'Media',
    navCV: 'CV',
    navContact: 'Contact',
    exploreProfile: 'Explore Profile',
    viewCV: 'View CV',
    exploreInitiatives: 'Explore Initiatives',
    contactCollaborate: 'Contact & Collaborate',
    viewWorkDomains: 'View Work Domains',
    executivePortfolio: 'EXECUTIVE PORTFOLIO & ARCHIVE',
    locationBadge: 'BAGMATI PROVINCE · NEPAL',
    credentialsAtGlance: 'CREDENTIALS AT A GLANCE',
    signatureArchitecture: 'SIGNATURE ARCHITECTURE',
    curiosityToCommerce: 'From Curiosity to Commerce',
    institutionalEcosystems: 'INSTITUTIONAL ECOSYSTEMS',
    buildingEnduringInfrastructures: 'Building Enduring Infrastructures',
    viewAllInstitutions: 'View All Institutions',
    executiveVision: 'EXECUTIVE VISION',
    visionQuote: '"Every child should have the opportunity to ask a question."',
    languageSwitchLabel: 'Language: English',
    backToHome: 'Back to Home',
    allRightsReserved: 'All rights reserved.',
    pressCoverage: 'Verified Media Coverage',
    viewSourceRecord: 'View Source Record',
    exploreDomain: 'Explore Domain',
    exploreInstitution: 'Explore Institution',
    stage: 'STAGE',
    moreStages: '+ 3 more commercialization stages'
  },
  ne: {
    siteTitle: 'किशन बास्तोला',
    siteSubTitle: 'शिक्षाविद् · गणितज्ञ · अनुसन्धान तथा नवप्रवर्तन इकोसिस्टम निर्माता',
    navAbout: 'परिचय',
    navWork: 'कार्य क्षेत्र',
    navInitiatives: 'पहलहरू',
    navEcosystem: 'इकोसिस्टम',
    navThought: 'विचार र लेख',
    navMedia: 'मिडिया कवरेज',
    navCV: 'सीभी / बायोडाटा',
    navContact: 'सम्पर्क',
    exploreProfile: 'प्रोफाइल हेर्नुहोस्',
    viewCV: 'सीभी हेर्नुहोस्',
    exploreInitiatives: 'पहलहरू हेर्नुहोस्',
    contactCollaborate: 'सम्पर्क तथा सहकार्य',
    viewWorkDomains: 'कार्य क्षेत्रहरू हेर्नुहोस्',
    executivePortfolio: 'कार्यकारी पोर्टफोलियो र अभिलेख',
    locationBadge: 'बागमती प्रदेश · नेपाल',
    credentialsAtGlance: 'योग्यता तथा अनुभव झलक',
    signatureArchitecture: 'मुख्य रूपरेखा',
    curiosityToCommerce: 'जिज्ञासादेखि व्यापारसम्म (Curiosity to Commerce)',
    institutionalEcosystems: 'संस्थागत इकोसिस्टम',
    buildingEnduringInfrastructures: 'दीर्घकालीन पूर्वाधार निर्माण',
    viewAllInstitutions: 'सबै संस्थाहरू हेर्नुहोस्',
    executiveVision: 'कार्यकारी दृष्टि',
    visionQuote: '"प्रत्येक बालबालिकाले प्रश्न सोध्ने अवसर पाउनुपर्छ।"',
    languageSwitchLabel: 'भाषा: नेपाली',
    backToHome: 'गृहपृष्ठमा फर्कनुहोस्',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    pressCoverage: 'प्रमाणित मिडिया कभरेज',
    viewSourceRecord: 'मूल स्रोत हेर्नुहोस्',
    exploreDomain: 'क्षेत्र हेर्नुहोस्',
    exploreInstitution: 'संस्था हेर्नुहोस्',
    stage: 'चरण',
    moreStages: '+ ३ थप व्यावसायीकरण चरणहरू'
  }
};
