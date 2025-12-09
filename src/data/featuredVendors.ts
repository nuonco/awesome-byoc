export interface FeaturedVendor {
  id: string;
  name: string;
  category: 'databases' | 'infrastructure' | 'observability' | 'data-platforms';
  logo: string;
  tagline: string;
  byocOfferSummary: string;
  whatMakesThisGreat: string;
  highlights: string[];
  blogPostUrl: string;
  websiteUrl: string;
  writeUp: string;
  nuonCommentary: string;
}

export const featuredCategories: Record<string, { label: string; description: string }> = {
  'databases': {
    label: 'Databases',
    description: 'Database platforms with excellent BYOC implementations',
  },
  'infrastructure': {
    label: 'Infrastructure',
    description: 'Core infrastructure tools offering BYOC deployment',
  },
  'observability': {
    label: 'Observability',
    description: 'Monitoring and observability platforms with BYOC options',
  },
  'data-platforms': {
    label: 'Data Platforms',
    description: 'Data engineering and ETL tools with BYOC support',
  },
};

export const featuredVendors: FeaturedVendor[] = [
  {
    id: 'temporal',
    name: 'Temporal',
    category: 'infrastructure',
    logo: 'https://temporal.io/favicon.ico',
    tagline: 'Durable execution platform for mission-critical workflows',
    byocOfferSummary: 'Temporal Cloud with customer-managed data plane running in your AWS/GCP account',
    whatMakesThisGreat: 'Clean separation between control plane (Temporal-managed) and data plane (customer-managed), with workflows and data never leaving your environment',
    highlights: [
      'True data isolation - workflow history stays in your cloud',
      'Control plane handles orchestration, your infra handles execution',
      'Supports AWS and GCP with single-tenant data planes',
      'mTLS encryption between planes with customer-managed certificates',
    ],
    blogPostUrl: 'https://temporal.io/cloud',
    websiteUrl: 'https://temporal.io',
    writeUp: `Temporal's BYOC offering, called "Temporal Cloud with Customer-Managed Data Plane," represents one of the cleanest implementations of the control plane / data plane separation pattern in the industry.

In this architecture, Temporal operates the control plane—handling scheduling, workflow orchestration, and the management UI—while the customer's data plane runs entirely within their own AWS or GCP account. This means workflow histories, activity inputs/outputs, and all business data never leave the customer's environment.

The data plane consists of Temporal worker processes and a persistence layer (typically AWS Aurora or Cloud SQL). Temporal provides Terraform modules and detailed runbooks for setting up the data plane, making the initial deployment straightforward for teams with IaC experience.

What sets Temporal apart is the maturity of their multi-tenant control plane. They've invested heavily in ensuring that the control plane can orchestrate workflows across thousands of customer data planes without becoming a bottleneck. The communication between planes uses mTLS with customer-managed certificates, giving security teams full control over the trust chain.

For enterprises running mission-critical workflows—payment processing, order fulfillment, compliance automation—this architecture provides the reliability of a managed service with the data sovereignty of self-hosting.`,
    nuonCommentary: 'Temporal is a gold standard for control plane / data plane separation. Their Terraform modules are well-documented, and the upgrade path from fully-managed to BYOC is smooth. If you\'re building durable workflows and need data to stay in your environment, this is the architecture to study.',
  },
  {
    id: 'neon',
    name: 'Neon',
    category: 'databases',
    logo: 'https://neon.tech/favicon.ico',
    tagline: 'Serverless Postgres with branching, autoscaling, and bottomless storage',
    byocOfferSummary: 'Neon Enterprise with dedicated infrastructure in your cloud account',
    whatMakesThisGreat: 'Innovative storage-compute separation allows true serverless scaling while keeping data in your environment',
    highlights: [
      'Serverless Postgres that scales to zero when idle',
      'Database branching for dev/test environments in seconds',
      'Storage-compute separation enables cost-efficient scaling',
      'Enterprise tier deploys dedicated infra in your AWS account',
    ],
    blogPostUrl: 'https://neon.tech/docs/introduction/about',
    websiteUrl: 'https://neon.tech',
    writeUp: `Neon has reimagined Postgres for the cloud era, and their BYOC offering brings this innovation to enterprises with strict data residency requirements.

At the core of Neon's architecture is a separation of storage and compute. The storage layer uses a custom-built system that provides "bottomless" storage with instant branching—you can create a full copy of a multi-terabyte database in milliseconds. The compute layer runs standard Postgres, scaling up and down (including to zero) based on demand.

For BYOC deployments, Neon's Enterprise tier provisions dedicated infrastructure within your AWS account. This includes the storage layer, compute nodes, and the control plane components needed for autoscaling. Your data never leaves your VPC, while still benefiting from Neon's serverless innovations.

The branching capability is particularly powerful for development workflows. Teams can spin up isolated database branches for each PR, run integration tests against production-like data, and tear them down—all without the overhead of managing separate database instances.

Neon's approach demonstrates how modern database architecture can deliver both the developer experience of a managed service and the control of self-hosting. The storage-compute separation means you're not paying for idle compute, while still maintaining full data sovereignty.`,
    nuonCommentary: 'Neon shows what\'s possible when you rethink database architecture for the cloud. Their branching feature alone is worth studying—it solves the "production-like test data" problem elegantly. The BYOC deployment is more complex than traditional Postgres, but the operational benefits (autoscaling, instant branching) justify the investment.',
  },
  {
    id: 'grafana',
    name: 'Grafana Cloud',
    category: 'observability',
    logo: 'https://grafana.com/favicon.ico',
    tagline: 'The open observability platform for metrics, logs, and traces',
    byocOfferSummary: 'Grafana Cloud with Private Data Source Connect and self-hosted data storage',
    whatMakesThisGreat: 'Flexible architecture allows you to keep metrics/logs in your infrastructure while using Grafana\'s managed visualization and alerting',
    highlights: [
      'Private Data Source Connect queries data without it leaving your VPC',
      'Self-host Mimir, Loki, Tempo while using managed Grafana dashboards',
      'Hybrid model: managed UI + self-hosted storage backends',
      'Open source foundation means no vendor lock-in on data formats',
    ],
    blogPostUrl: 'https://grafana.com/docs/grafana-cloud/connect-externally-hosted/',
    websiteUrl: 'https://grafana.com/products/cloud/',
    writeUp: `Grafana's approach to BYOC is refreshingly flexible, reflecting the company's open-source DNA. Rather than offering a single "BYOC mode," they provide building blocks that let you choose exactly where your data lives.

The most straightforward option is Private Data Source Connect, which allows Grafana Cloud dashboards to query data sources inside your VPC without that data ever traversing the public internet. You set up an agent in your environment that maintains an outbound connection to Grafana Cloud, and queries flow through this secure tunnel.

For teams with stricter requirements, Grafana offers a hybrid architecture: you self-host the storage backends (Mimir for metrics, Loki for logs, Tempo for traces) in your infrastructure, while using Grafana Cloud for the visualization layer, alerting, and collaboration features. This gives you full control over your observability data while offloading the operational burden of running the Grafana UI at scale.

The open-source foundation is key here. Mimir, Loki, and Tempo all use open formats and protocols (Prometheus, OpenTelemetry), so there's no lock-in. If you later decide to fully self-host, your dashboards, alerts, and data formats all remain compatible.

Grafana's model works well for organizations that want to adopt managed services incrementally. You can start with fully-managed Grafana Cloud, move to Private Data Source Connect when data residency becomes a concern, and eventually transition to self-hosted backends if needed—all without rebuilding your observability stack.`,
    nuonCommentary: 'Grafana\'s flexibility is their superpower. The Private Data Source Connect feature is underrated—it solves the "we can\'t send metrics outside our VPC" problem without requiring you to run any Grafana infrastructure yourself. Start there, and expand to self-hosted backends only if you need to.',
  },
];

export function getFeaturedVendorsByCategory(category: string): FeaturedVendor[] {
  return featuredVendors.filter((vendor) => vendor.category === category);
}

export function getFeaturedVendorById(id: string): FeaturedVendor | undefined {
  return featuredVendors.find((vendor) => vendor.id === id);
}

export function getAllCategories(): string[] {
  return [...new Set(featuredVendors.map((v) => v.category))];
}
