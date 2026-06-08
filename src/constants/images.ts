/**
 * Open-source images from Unsplash (https://unsplash.com).
 * Use ?w=800 for consistent width; replace with your own assets when ready.
 */

export interface ImageAsset {
  url: string
  alt: string
  credit?: string
}

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`

/** Hero: local asset, clickable to donate */
export const heroImage: ImageAsset = {
  url: '/assets/hero.webp',
  alt: 'Children in a supportive learning environment',
}

/** About page: community / team */
export const aboutImages: ImageAsset[] = [
  {
    url: unsplash('1523240795612-9a054b0db644', 800),
    alt: 'Children and caregivers in a supportive setting',
  },
  {
    url: unsplash('1577896851231-70ef18881754', 800),
    alt: 'Community and learning together',
  },
]

/** Service section images from public/assets/Services/ (one per service, same order as servicesData) */
const SERVICES_BASE = '/assets/Services'
export const serviceImages: ImageAsset[] = [
  { url: `${SERVICES_BASE}/early.jpg`, alt: 'Early intervention' },
  { url: `${SERVICES_BASE}/speech.jpg`, alt: 'Speech and communication' },
  { url: `${SERVICES_BASE}/therapy.jpg`, alt: 'Physiotherapy' },
  { url: `${SERVICES_BASE}/OccupationalTherapyjpg.jpg`, alt: 'Occupational therapy' },
  { url: `${SERVICES_BASE}/music.jpg`, alt: 'Music therapy' },
  { url: `${SERVICES_BASE}/dancetherapy.jpg`, alt: 'Dance movement therapy' },
  { url: `${SERVICES_BASE}/specialneed.jpg`, alt: 'Vocational training' },
  { url: `${SERVICES_BASE}/art.jpg`, alt: 'Art based therapy' },
  { url: `${SERVICES_BASE}/hydrotherapy.jpg`, alt: 'Hydrotherapy' },
  { url: `${SERVICES_BASE}/sand.jpeg`, alt: 'Sand therapy' },
  { url: `${SERVICES_BASE}/Kids.jpg`, alt: 'Skating' },
  { url: `${SERVICES_BASE}/silambam.jpg`, alt: 'Silambam' },
  { url: `${SERVICES_BASE}/yoga.jpg`, alt: 'Yoga' },
]

/** Donate page: hero and impact section – local asset */
export const donateHeroImage: ImageAsset = {
  url: '/assets/donation.webp',
  alt: 'Community and giving together',
}

export const donateImpactImage: ImageAsset = {
  url: '/assets/donation.webp',
  alt: 'Community and learning together',
}

/** Page hero backgrounds (inner pages) – Unsplash, open-source */
export const pageHeroImages: Record<string, ImageAsset> = {
  about: {
    url: unsplash('1523240795612-9a054b0db644', 1200),
    alt: 'Community and care',
  },
  services: {
    url: unsplash('1544367567-0f2fcb009e0b', 1200),
    alt: 'Therapy and support',
  },
  gallery: {
    url: unsplash('1598488035139-bdbb2231ce04', 1200),
    alt: 'Moments of joy',
  },
  blog: {
    url: unsplash('1516627145497-ae6968895b74', 1200),
    alt: 'News and updates',
  },
  team: {
    url: unsplash('1523240795612-9a054b0db644', 1200),
    alt: 'Our team',
  },
  volunteer: {
    url: unsplash('1523240795612-9a054b0db644', 1200),
    alt: 'Volunteering together',
  },
  contact: {
    url: unsplash('1587654780291-39c9404d746b', 1200),
    alt: 'Get in touch',
  },
}

/** Volunteer page: role cards – Unsplash (art, education, therapy, communication) */
export const volunteerRoleImages: ImageAsset[] = [
  { url: unsplash('1560785477-620872334d8b', 600), alt: 'Art and creative therapy with children' },
  { url: unsplash('1503676260248-fb4a4c92e755', 600), alt: 'Special education and learning support' },
  { url: unsplash('1544367567-0f2fcb009e0b', 600), alt: 'Physiotherapy and movement assistance' },
  { url: unsplash('1571019613454-1cb0f6b5884c', 600), alt: 'Speech and communication support' },
]

/** Gallery: local photos images1 (1)–(29) with category for sections */
export type GalleryCategory = 'events' | 'therapy' | 'daily' | 'celebrations'

export interface GalleryImage extends ImageAsset {
  category: GalleryCategory
}

export const GALLERY_CATEGORY_ORDER: GalleryCategory[] = ['events', 'therapy', 'daily', 'celebrations']

export const GALLERY_CATEGORY_LABELS: Record<GalleryCategory, string> = {
  events: 'Events',
  therapy: 'Therapy & Activities',
  daily: 'Daily Life',
  celebrations: 'Celebrations',
}

const galleryAlts: string[] = [
  'Breaking Barriers – ABLEify award ceremony at Nanjil Oasis',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Activity at the centre',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Event at Nanjil Oasis',
  'Gallery moment',
  'Sharbat stall – life at the centre',
  'Therapy session at Nanjil Oasis',
  'Activity at the centre',
  'Celebration at Nanjil Oasis',
  'Therapy and support',
  'Daily life at the centre',
  'Event at Nanjil Oasis',
  'Celebration moment',
  'Activity and learning',
  'Therapy session',
  'Life at the centre',
  'Celebration at Nanjil Oasis',
  'Gallery moment at Nanjil Oasis',
  'Event at Nanjil Oasis',
  'Event at Nanjil Oasis',
  'Event at Nanjil Oasis',
  'Music band activity at Nanjil Oasis',
  'Occupational therapy session',
  'Mother and child at Nanjil Oasis',
  'Musical performance by students',
  'Child using standing frame in therapy',
]

const galleryUrls: string[] = [
  '/assets/images1 (1).jpeg',
  '/assets/images1 (2).jpeg',
  '/assets/images1 (3).jpeg',
  '/assets/images1 (4).jpeg',
  '/assets/images1 (5).jpeg',
  '/assets/images1 (6).jpeg',
  '/assets/images1 (7).jpeg',
  '/assets/images1 (8).jpeg',
  '/assets/images1 (9).jpeg',
  '/assets/images1 (10).jpeg',
  '/assets/images1 (11).jpeg',
  '/assets/images1 (12).jpeg',
  '/assets/images1 (13).jpeg',
  '/assets/images1 (14).jpeg',
  '/assets/images1 (15).jpeg',
  '/assets/images1 (16).jpeg',
  '/assets/images1 (17).jpeg',
  '/assets/images1 (18).jpeg',
  '/assets/images1 (19).jpeg',
  '/assets/images1 (20).jpeg',
  '/assets/images1 (21).jpeg',
  '/assets/images1 (22).jpeg',
  '/assets/images1 (23).jpeg',
  '/assets/images1 (24).jpeg',
  '/assets/images1 (25).jpeg',
  '/assets/images1 (26).jpeg',
  '/assets/images1 (27).jpeg',
  '/assets/images1 (28).jpeg',
  '/assets/images1 (29).jpeg',
  '/assets/images1 (30).jpeg',
  '/assets/images1 (31).jpeg',
  '/assets/images1 (32).jpeg',
  '/assets/IMG-20260411-WA0004.jpg (1).jpeg',
  '/assets/Occupationaltherapy.jpeg',
  '/assets/mother.jpg',
  '/assets/music.jpg',
  '/assets/music1.jpeg',
]

const galleryCategories: GalleryCategory[] = [
  'events', 'events', 'events', 'events', 'events', 'events', 'events',
  'therapy', 'therapy', 'therapy', 'therapy', 'therapy', 'therapy', 'therapy',
  'daily', 'daily', 'daily', 'daily', 'daily', 'daily', 'daily',
  'celebrations', 'celebrations', 'celebrations', 'celebrations', 'celebrations', 'celebrations', 'celebrations', 'celebrations',
  'events', 'events', 'events',
  'events', 'therapy', 'daily', 'events', 'therapy',
]

export const galleryImages: GalleryImage[] = galleryUrls.map((url, i) => ({
  url: url.startsWith('http') ? url : encodeURI(url),
  alt: galleryAlts[i],
  category: galleryCategories[i],
}))
