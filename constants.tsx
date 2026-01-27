
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Indian Typefaces',
    category: 'Branding / Typography',
    description: 'A study on how motion affects the legibility and emotional resonance of sans-serif typefaces.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    tags: ['Motion', 'Brand Identity', 'After Effects'],
    role: 'Lead Designer',
    timeline: '6 Weeks',
    tools: ['Figma', 'After Effects', 'Spline'],
    concept: 'Modern Indian typography often struggles between preserving heritage and embracing digital-first minimalism. This project explores a "Typographic Renaissance" where classic letterforms are reimagined for fluid screen interactions.',
    gridDesc: 'A rigorous 12-column grid system was implemented to ensure mathematical harmony across all screen sizes, while allowing for asymmetrical letterform placements.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', caption: 'Initial typeface explorations focusing on legibility and geometric balance.' },
      { url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', caption: 'Applying the grid system to complex monochrome layouts.' },
      { url: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800', caption: 'Color theory application for high-contrast digital displays.' },
      { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800', caption: 'Final motion studies for interactive web components.' }
    ]
  },
  {
    id: '2',
    title: 'Weather App Interface',
    category: 'UX/UI Design',
    description: 'An intuitive interface designed to help urban dwellers check the weather at a glance.',
    imageUrl: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?auto=format&fit=crop&q=80&w=1200',
    tags: ['Product Design', 'Figma', 'Case Study'],
    role: 'UI/UX Researcher',
    timeline: '4 Weeks',
    tools: ['Figma', 'Protopie', 'UserTesting'],
    concept: 'The "Atmosphere" interface prioritizes immediate data recognition through color-shifting backgrounds and fluid typography that reacts to real-time barometric pressure changes.',
    gridDesc: 'The layout utilizes a soft-grid system, allowing elements to float organically while maintaining clear informational hierarchy.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', caption: 'User journey mapping for morning routine weather checks.' },
      { url: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800', caption: 'Wireframing low-fidelity interactions for one-handed usage.' }
    ]
  },
  {
    id: '3',
    title: 'Illustrated Narrative Series',
    category: 'Illustration',
    description: 'A series of 12 illustrations exploring the intersection of traditional folklore and modern technology.',
    imageUrl: 'images/AdobeStock_162858127.png',
    tags: ['Digital Art', 'Storyboarding', 'Procreate'],
    role: 'Digital Illustrator',
    timeline: '8 Weeks',
    tools: ['Procreate', 'Photoshop', 'Wacom'],
    concept: 'Exploring the visual language of "Techno-Folklore," this series merges ancient Indian mythologies with cyberpunk aesthetics to create a unique narrative landscape.',
    gridDesc: 'The compositions follow the rule of thirds but break out of digital boundaries with hand-drawn, paper-textured overlays.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&q=80&w=800', caption: 'Sketching initial character concepts in Procreate.' },
      { url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800', caption: 'Final coloring and lighting pass to evoke a neon-ritualistic mood.' }
    ]
  },
  {
    id: '4',
    title: 'Modular Editorial Design',
    category: 'Print / Layout',
    description: 'A conceptual magazine layout focusing on minimal architecture and sustainable living.',
    imageUrl: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80&w=1200',
    tags: ['InDesign', 'Layout', 'Print'],
    role: 'Layout Designer',
    timeline: '3 Weeks',
    tools: ['InDesign', 'Photoshop', 'Bridge'],
    concept: 'Minimalism isn\'t just about removing elements; it\'s about the precision of what remains. We used Akzidenz-Grotesk for primary headings to maintain a historical link to Swiss Style.',
    gridDesc: 'A strict baseline grid was established to ensure perfect typographic alignment across multiple spreads.',
    processGallery: [
      { url: 'https://images.unsplash.com/photo-1586075010633-247fe1bd6e1d?auto=format&fit=crop&q=80&w=800', caption: 'Type pairing experiments with modern serif and sans-serif fonts.' },
      { url: 'https://images.unsplash.com/photo-1553028495-1a03e1e07583?auto=format&fit=crop&q=80&w=800', caption: 'Exploring white space as a structural element in architectural spreads.' }
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
