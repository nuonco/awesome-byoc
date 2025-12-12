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
    icon: `<i class="ph-bold ph-database" style="color: #0070F3;"></i>`,
  },
  'streaming': {
    label: 'Streaming',
    description: 'Real-time data streaming platforms',
    icon: `<i class="ph-bold ph-broadcast" style="color: #7928CA;"></i>`,
  },
  'monitoring': {
    label: 'Observability',
    description: 'Metrics, logs, and traces in your cloud',
    icon: `<i class="ph-bold ph-chart-line" style="color: #FF0080;"></i>`,
  },
  'data-integration': {
    label: 'Data Integration',
    description: 'ETL and data movement tools',
    icon: `<i class="ph-bold ph-arrows-merge" style="color: #50E3C2;"></i>`,
  },
  'dev-platforms': {
    label: 'Dev Platforms',
    description: 'Internal tools and platforms',
    icon: `<i class="ph-bold ph-code" style="color: #F5A623;"></i>`,
  },
  'byoc-platforms': {
    label: 'BYOC Platforms',
    description: 'Platforms for deploying BYOC software',
    icon: `<i class="ph-bold ph-cloud" style="color: #0070F3;"></i>`,
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
