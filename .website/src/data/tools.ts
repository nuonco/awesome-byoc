import { getCollection } from 'astro:content';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  homepage: string;
  github?: string;
  docs?: string;
  category: Category;
  tags: string[];
  license: 'open-source' | 'commercial' | 'hybrid';
  language?: string;
  cloudSupport: ('aws' | 'gcp' | 'azure' | 'on-prem' | 'any')[];
  stars?: number;
  lastUpdated?: string;
  logo?: string;
}

export type Category =
  | 'databases'
  | 'streaming'
  | 'monitoring'
  | 'data-integration'
  | 'dev-platforms'
  | 'byoc-platforms';

export const categories: Record<Category, { label: string; description: string; icon: string }> = {
  'databases': {
    label: 'Databases',
    description: 'BYOC database solutions',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  },
  'streaming': {
    label: 'Streaming',
    description: 'Real-time data streaming platforms',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2"/><path d="M6 12h2"/><path d="M14 12h2"/><path d="M18 12h2"/><path d="M22 12h-2"/><path d="M10 12h2"/><circle cx="12" cy="12" r="2"/></svg>`,
  },
  'monitoring': {
    label: 'Observability',
    description: 'Metrics, logs, and traces in your cloud',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  },
  'data-integration': {
    label: 'Data Integration',
    description: 'ETL and data movement tools',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/><line x1="9" y1="12" x2="15" y2="12"/><polyline points="12 9 15 12 12 15"/></svg>`,
  },
  'dev-platforms': {
    label: 'Dev Platforms',
    description: 'Internal tools and platforms',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>`,
  },
  'byoc-platforms': {
    label: 'BYOC Platforms',
    description: 'Platforms for deploying BYOC software',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
};

// Helper to load tools from content collection
export async function getTools(): Promise<Tool[]> {
  const toolsCollection = await getCollection('tools');
  return toolsCollection.map((entry) => ({
    id: entry.id,
    ...entry.data,
  })) as Tool[];
}

export async function getToolsByCategory(category: Category): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => tool.category === category);
}

export async function getToolById(id: string): Promise<Tool | undefined> {
  const tools = await getTools();
  return tools.find((tool) => tool.id === id);
}

export async function searchTools(query: string): Promise<Tool[]> {
  const tools = await getTools();
  const lowerQuery = query.toLowerCase();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export async function filterTools(filters: {
  license?: 'open-source' | 'commercial' | 'hybrid';
  category?: Category;
  cloudSupport?: string;
  language?: string;
}): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => {
    if (filters.license && tool.license !== filters.license) return false;
    if (filters.category && tool.category !== filters.category) return false;
    if (filters.cloudSupport && !tool.cloudSupport.includes(filters.cloudSupport as any)) return false;
    if (filters.language && tool.language?.toLowerCase() !== filters.language.toLowerCase()) return false;
    return true;
  });
}

// Synchronous version for backward compatibility (used in static pages)
// This requires tools to be passed in from the page's getStaticPaths or frontmatter
export function getToolsByCategorySync(tools: Tool[], category: Category): Tool[] {
  return tools.filter((tool) => tool.category === category);
}
