/**
 * Pure portfolio utility functions and logic
 */

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'website' | 'logo';
  badge: string;
  description: string;
  image: string;
  secondaryImage?: string;
  tags: string[];
  techStack?: string[];
  demoType: 'Personal Demo Project' | 'Concept Project' | 'Brand Identity Board';
  videoUrl?: string;
  videoPoster?: string;
  replitUrl?: string;
  isTransparentPng?: boolean;
}

export interface InquiryParams {
  name?: string;
  service: 'website' | 'logo' | 'both';
  projectType: string;
  timeline?: string;
  message: string;
}

export const CONTACT_INFO = {
  name: 'Muhammad Sardar Baloch',
  primaryTitle: 'AI-Assisted Website Developer & Logo Designer',
  shortTitle: 'Website Developer | Logo Designer',
  phone: '+92 313 960 2114',
  phoneRaw: '923139602114',
  email: 'iftikharpapuiftikharpapu1212@gmail.com',
  pdfPath: '/assets/aistudio/Muhammad_Sardar_Baloch_Luxury_CV_924cda75.pdf',
  pdfFilename: 'Muhammad_Sardar_Baloch_Luxury_CV.pdf',
};

/**
 * Filter projects by category
 */
export function filterProjects(
  projects: ProjectItem[],
  filter: 'all' | 'website' | 'logo'
): ProjectItem[] {
  if (filter === 'all') return projects;
  return projects.filter((item) => item.category === filter);
}

/**
 * Formats a WhatsApp inquiry URL with prefilled text
 */
export function buildWhatsAppUrl(params: Partial<InquiryParams>): string {
  const serviceLabel =
    params.service === 'website'
      ? 'Website Development Demo'
      : params.service === 'logo'
      ? 'Logo Design Concept'
      : 'Website Development & Logo Design';

  const intro = params.name ? `Hi Muhammad, this is ${params.name}.` : 'Hi Muhammad,';
  const lines = [
    intro,
    `I am interested in discussing a project for: ${serviceLabel}.`,
    params.projectType ? `Project Type: ${params.projectType}` : '',
    params.timeline ? `Target Timeline: ${params.timeline}` : '',
    params.message ? `Details: ${params.message}` : '',
  ].filter(Boolean);

  const text = lines.join('\n');
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Formats a Mailto inquiry link with prefilled subject and body
 */
export function buildMailtoUrl(params: Partial<InquiryParams>): string {
  const serviceLabel =
    params.service === 'website'
      ? 'Website Development'
      : params.service === 'logo'
      ? 'Logo Design'
      : 'Website & Logo Design';

  const subject = `Project Inquiry: ${serviceLabel}${params.name ? ` - ${params.name}` : ''}`;
  const intro = params.name ? `Hi Muhammad Sardar Baloch,\n\nMy name is ${params.name}.` : 'Hi Muhammad Sardar Baloch,';
  
  const bodyParts = [
    intro,
    `I would like to inquire about your ${serviceLabel.toLowerCase()} services.`,
    params.projectType ? `Project Type / Industry: ${params.projectType}` : '',
    params.timeline ? `Estimated Timeline: ${params.timeline}` : '',
    params.message ? `Project Overview:\n${params.message}` : '',
    '\nLooking forward to your reply.',
  ].filter(Boolean);

  const body = bodyParts.join('\n\n');
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Helper to validate email string format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
