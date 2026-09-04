import navigationData from '@/content/navigation.json';
import homeData from '@/content/home.json';
import aboutData from '@/content/about.json';
import capabilitiesData from '@/content/capabilities.json';
import founderData from '@/content/founder.json';
import contactData from '@/content/contact.json';

export interface SectionMeta {
  id: string;
  index: string;
  label: string;
}

export const SECTIONS: SectionMeta[] = navigationData.sections;

export const SITE_COPY = {
  company: navigationData.company,
  hero: homeData,
  about: aboutData,
  capabilities: capabilitiesData,
  founder: founderData,
  contact: contactData,
};
