import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  buildWhatsAppUrl,
  buildMailtoUrl,
  isValidEmail,
  CONTACT_INFO,
  type ProjectItem,
} from './portfolioLogic.js';

const sampleProjects: ProjectItem[] = [
  {
    id: 'web-1',
    title: 'The Pizza Lab',
    subtitle: 'Fast Food Restaurant',
    category: 'website',
    badge: 'Website Demo',
    description: 'Mobile responsive restaurant website demo.',
    image: '/assets/sample1.jpg',
    tags: ['Restaurant', 'Mobile First'],
    demoType: 'Personal Demo Project',
  },
  {
    id: 'logo-1',
    title: 'Brickwork',
    subtitle: 'Revenue, Built',
    category: 'logo',
    badge: 'Brand Visual',
    description: 'Geometric 3D brand logo concept.',
    image: '/assets/sample2.jpg',
    tags: ['Isometric', 'Branding'],
    demoType: 'Concept Project',
  },
];

test('filterProjects correctly returns all or filtered items', () => {
  assert.equal(filterProjects(sampleProjects, 'all').length, 2);
  const webOnly = filterProjects(sampleProjects, 'website');
  assert.equal(webOnly.length, 1);
  assert.equal(webOnly[0].id, 'web-1');

  const logoOnly = filterProjects(sampleProjects, 'logo');
  assert.equal(logoOnly.length, 1);
  assert.equal(logoOnly[0].id, 'logo-1');
});

test('buildWhatsAppUrl constructs valid wa.me URL with phone and message', () => {
  const url = buildWhatsAppUrl({
    name: 'Sarah',
    service: 'website',
    projectType: 'Cafe Landing Page',
    message: 'We need a 3-page layout',
  });

  assert.ok(url.startsWith(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=`));
  assert.ok(url.includes(encodeURIComponent('Sarah')));
  assert.ok(url.includes(encodeURIComponent('Website Development Demo')));
  assert.ok(url.includes(encodeURIComponent('Cafe Landing Page')));
});

test('buildMailtoUrl constructs valid mailto URL with subject and encoded body', () => {
  const url = buildMailtoUrl({
    name: 'David',
    service: 'logo',
    projectType: 'Tech Startup',
    message: 'Need a modern vector logo',
  });

  assert.ok(url.startsWith(`mailto:${CONTACT_INFO.email}?`));
  assert.ok(url.includes('subject=Project%20Inquiry%3A%20Logo%20Design%20-%20David'));
  assert.ok(url.includes(encodeURIComponent('Need a modern vector logo')));
});

test('isValidEmail correctly identifies valid and invalid emails', () => {
  assert.equal(isValidEmail('test@example.com'), true);
  assert.equal(isValidEmail('user.name+tag@sub.domain.co'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('@nodomain.com'), false);
});
