
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Indian Typefaces',
    category: 'Branding / Typography',
    description: 'A study on how motion affects the legibility and emotional resonance of sans-serif typefaces in bilingual contexts.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    tags: ['Motion', 'Brand Identity', 'After Effects'],
    role: 'Lead Designer',
    timeline: '6 Weeks',
    tools: ['Figma', 'After Effects', 'Spline'],
    concept: 'Modern Indian typography often struggles between preserving heritage and embracing digital-first minimalism. This project explores a "Typographic Renaissance" where classic letterforms are reimagined for fluid screen interactions. The focus was on creating a system that feels rooted yet futuristic.',
    gridDesc: 'A rigorous 12-column grid system was implemented to ensure mathematical harmony across all screen sizes, while allowing for asymmetrical letterform placements that evoke a sense of movement.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', caption: 'Initial typeface explorations focusing on legibility and geometric balance across Devanagari and Latin scripts.' },
      { url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', caption: 'Applying the grid system to complex monochrome layouts to test visual weight.' },
      { url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800', caption: 'Color theory application for high-contrast digital displays, ensuring accessibility standards.' },
      { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', caption: 'Final motion studies for interactive web components using Lottie and After Effects.' }
    ]
  },
  {
    id: '2',
    title: 'Atmosphere Weather',
    category: 'UX/UI Design',
    description: 'An intuitive interface designed to help urban dwellers check weather patterns through sensory-driven visual data.',
    imageUrl: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?auto=format&fit=crop&q=80&w=1200',
    tags: ['Product Design', 'Figma', 'UX Research'],
    role: 'UI/UX Researcher',
    timeline: '4 Weeks',
    tools: ['Figma', 'Protopie', 'UserTesting'],
    concept: 'The "Atmosphere" interface prioritizes immediate data recognition through color-shifting backgrounds and fluid typography that reacts to real-time barometric pressure changes. We moved away from traditional icons toward a more abstract, emotional representation of climate.',
    gridDesc: 'The layout utilizes a soft-grid system, allowing elements to float organically while maintaining clear informational hierarchy through varying blur levels and depth.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', caption: 'User journey mapping for morning routine weather checks and decision making.' },
      { url: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800', caption: 'Wireframing low-fidelity interactions for one-handed usage on mobile devices.' },
      { url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800', caption: 'Iteration on the glassmorphism components to balance aesthetics with readability.' }
    ]
  },
  {
    id: '3',
    title: 'Techno Folklore',
    category: 'Illustration',
    description: 'A series of narrative illustrations exploring the intersection of traditional folklore and cybernetic futures.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    tags: ['Digital Art', 'Storyboarding', 'Procreate'],
    role: 'Digital Illustrator',
    timeline: '8 Weeks',
    tools: ['Procreate', 'Photoshop', 'Wacom'],
    concept: 'Exploring the visual language of "Techno-Folklore," this series merges ancient Indian mythologies with cyberpunk aesthetics. Each piece acts as a fragment of a larger, unwritten world where spirituality and silicon are one.',
    gridDesc: 'The compositions follow the rule of thirds but break out of digital boundaries with hand-drawn, paper-textured overlays and distressed scanning effects.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&q=80&w=800', caption: 'Initial character sketches exploring mechanical augmentations on traditional attire.' },
      { url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800', caption: 'Final coloring and lighting pass using neon gradients to evoke a ritualistic mood.' }
    ]
  },
  {
    id: '4',
    title: 'Swiss Modernism',
    category: 'Print / Layout',
    description: 'A conceptual magazine layout focusing on minimal architecture and the legacy of functional design.',
    imageUrl: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80&w=1200',
    tags: ['InDesign', 'Layout', 'Print'],
    role: 'Layout Designer',
    timeline: '3 Weeks',
    tools: ['InDesign', 'Photoshop', 'Bridge'],
    concept: 'Minimalism isn\'t just about removing elements; it\'s about the precision of what remains. This project used foundational Swiss principles to create a system that resonates with contemporary architectural students.',
    gridDesc: 'A strict baseline grid was established to ensure perfect typographic alignment across multiple spreads, even when using radical asymmetrical alignments.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1586075010633-247fe1bd6e1d?auto=format&fit=crop&q=80&w=800', caption: 'Type pairing experiments with modern serif and sans-serif fonts to create a dialogue between old and new.' },
      { url: 'https://images.unsplash.com/photo-1553028495-1a03e1e07583?auto=format&fit=crop&q=80&w=800', caption: 'Exploring white space as a structural element rather than a void in architectural spreads.' }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Typography', level: 90, icon: 'T' },
  { name: 'UX/UI Design', level: 85, icon: 'U' },
  { name: 'Illustration', level: 80, icon: 'I' },
  { name: 'Branding', level: 88, icon: 'B' },
  { name: 'Prototyping', level: 75, icon: 'P' },
  { name: 'Creative Strategy', level: 82, icon: 'S' }
];
