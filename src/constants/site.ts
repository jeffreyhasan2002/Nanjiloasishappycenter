export const SITE_NAME = 'Nanjil Oasis Happy Centre'
export const LOGO_URL = '/assets/logo.png'

export const phone = '+919944330809'
export const phoneDisplay = '9944330809'
export const email = 'nanjiloasismrc2@gmail.com'

export const donationBank = {
  accountName: 'Nanjil Oasis Parents Welfare Trust for MRC',
  accountNumber: '3868000100376620',
  ifsc: 'PUNB0386800',
  bankName: 'Punjab National Bank',
  branch: 'Nagercoil Main',
} as const

export const donationGpay = '9597070301'
export const donationGpayUpiId = 'rajanddrama-2@oksbi'
export const donationGpayName = 'Nanjil Oasis Happy Centre'

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/nanjil_oasis?utm_source=qr&igsh=MW50aWZyemttcHJyZg%3D%3D', icon: '/assets/instagram.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/@nanjiloasishappycentrespecials', icon: '/assets/youtube.png' },
] as const

export interface NavSubItem {
  label: string
  path: string
}

export interface NavItem {
  label: string
  path: string
  children?: NavSubItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Our Team', path: '/team' },
  { label: 'Blog', path: '/blog' },
  {
    label: 'Gallery',
    path: '/gallery',
    children: [
      { label: 'Activities', path: '/gallery#activities' },
      { label: 'Skill Based Training', path: '/gallery#skill-based-training' },
    ],
  },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Contact', path: '/contact' },
]

export const footerLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Our Services', path: '/services' },
  { label: 'Professional team', path: '/team#professional' },
  { label: 'Trustees', path: '/team#trustees' },
]

export interface ServiceItem {
  title: string
  description: string
}

export const servicesData: ServiceItem[] = [
  { title: 'Early Intervention', description: 'Structured support in the critical early years to maximise each child\'s developmental potential. Our trained educators use evidence-based programmes to strengthen cognitive, motor, and social foundations so every child can thrive.' },
  { title: 'Speech and Communication', description: 'Building communication skills and expression for better interaction and independence. We work on speech clarity, language comprehension, and alternative and augmentative communication (AAC) so each child can make themselves heard and understood.' },
  { title: 'Physiotherapy', description: 'Movement and motor development to support physical abilities and daily function. Individualised plans focus on strength, balance, coordination, and mobility to improve posture, gait, and participation in everyday activities.' },
  { title: 'Occupational Therapy', description: 'Fine motor, sensory and daily living skills tailored to each child\'s needs. We address sensory processing, hand-eye coordination, self-care, and school readiness so children can engage more confidently at home and in the community.' },
  { title: 'Music Therapy', description: 'Using music to support emotional, cognitive and social development. Structured sessions with rhythm, song, and instruments help regulate emotions, improve attention, and build connection and self-expression in a safe, joyful setting.' },
  { title: 'Dance Movement Therapy', description: 'Movement and expression through dance for body awareness and emotional wellbeing. Guided movement and creative dance support motor skills, emotional release, and social interaction in a supportive, non-judgemental space.' },
  { title: 'Vocational Training', description: 'Life skills and vocational readiness for greater independence and future livelihood. We focus on practical skills, work habits, and supported opportunities so young people can contribute meaningfully and build pathways to dignified employment.' },
  { title: 'Art Based Therapy', description: 'Creative expression and skill-building through art. Drawing, painting, and craft activities support fine motor control, decision-making, and emotional expression while building confidence and a sense of achievement.' },
  { title: 'Hydrotherapy', description: 'Water-based activities to support mobility, relaxation and sensory integration. The pool environment reduces weight-bearing stress, improves range of motion, and offers a calming sensory experience under trained supervision.' },
  { title: 'Sand Therapy', description: 'Sensory and play-based work using sand for regulation and expression. Tactile and imaginative play in the sand tray supports self-regulation, creativity, and communication in a contained, therapeutic setting.' },
  { title: 'Skating', description: 'Balance, coordination and confidence through skating activities. Learning to skate in a safe, supported way builds core strength, spatial awareness, and self-esteem while giving children a fun, inclusive physical challenge.' },
  { title: 'Silambam', description: 'Traditional martial art for discipline, focus and physical fitness. Staff-led Silambam sessions develop coordination, concentration, and respect for the art while strengthening the body and mind in a structured, cultural context.' },
  { title: 'Yoga', description: 'Mind-body practice for calm, focus and physical flexibility. Age-appropriate asanas, breathing, and relaxation techniques help children regulate energy, improve body awareness, and experience moments of calm and focus.' },
]
