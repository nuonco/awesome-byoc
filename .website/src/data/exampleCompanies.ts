export interface ExampleCompany {
  id: string;
  name: string;
  description: string;
  category: string;
  link: string;
  logo: string;
  gradientFrom: string;
  gradientTo: string;
}

export const exampleCompanies: ExampleCompany[] = [
  {
    id: "clickhouse",
    name: "ClickHouse",
    description: "BYOC data warehouse on AWS - deploy a high-performance columnar database directly in your cloud environment.",
    category: "Analytics Database",
    link: "https://clickhouse.com/blog/building-clickhouse-byoc-on-aws",
    logo: "https://clickhouse.com/images/ch_logo.svg",
    gradientFrom: "#FFCC00",
    gradientTo: "#FF6600"
  },
  {
    id: "signoz",
    name: "SigNoz",
    description: "Compare cloud and self-hosted deployment models for observability - full control over your telemetry data.",
    category: "Observability",
    link: "https://signoz.io/blog/cloud-vs-self-hosted-deployment-guide/",
    logo: "https://signoz.io/img/SigNozLogo-orange.svg",
    gradientFrom: "#FF6B6B",
    gradientTo: "#EE5A24"
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    description: "Deploy proprietary AI models directly in your VPC with Vertex AI Model Garden.",
    category: "Managed AI/ML",
    link: "https://cloud.google.com/blog/products/ai-machine-learning/new-proprietary-models-vertex-model-garden",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/cloud-logo.svg",
    gradientFrom: "#4285F4",
    gradientTo: "#34A853"
  },
  {
    id: "ververica",
    name: "Ververica",
    description: "Your cloud, your rules - enterprise Flink platform deployed entirely in your cloud environment.",
    category: "Stream Processing",
    link: "https://www.ververica.com/blog/your-cloud-your-rules-ververicas-bring-your-own-cloud-deployment",
    logo: "https://www.ververica.com/hubfs/ververica-logo.svg",
    gradientFrom: "#6366F1",
    gradientTo: "#8B5CF6"
  },
  {
    id: "nuon",
    name: "Nuon",
    description: "The definitive guide to building a BYOC offering for your SaaS product.",
    category: "BYOC Platform",
    link: "https://nuon.co/blog/how-to-build-a-byoc-offering/",
    logo: "https://nuon.co/logo.svg",
    gradientFrom: "#8B5CF6",
    gradientTo: "#EC4899"
  },
  {
    id: "vela",
    name: "Vela (Simply Block)",
    description: "Run high-performance storage directly inside your cloud with full data sovereignty.",
    category: "Storage Platform",
    link: "https://vela.simplyblock.io/articles/bring-your-own-cloud/",
    logo: "https://simplyblock.io/logo.svg",
    gradientFrom: "#06B6D4",
    gradientTo: "#3B82F6"
  },
  {
    id: "estuary",
    name: "Estuary",
    description: "Data integration reimagined with BYOC architecture - real-time data pipelines in your environment.",
    category: "Data Integration",
    link: "https://estuary.dev/blog/byoc-redefining-enterprise/",
    logo: "https://estuary.dev/logo.svg",
    gradientFrom: "#10B981",
    gradientTo: "#059669"
  },
  {
    id: "confluent",
    name: "Confluent",
    description: "Enterprise Kafka streaming with BYOC deployment - keep your data streaming in your own cloud.",
    category: "Event Streaming",
    link: "https://www.confluent.io/learn/bring-your-own-cloud/",
    logo: "https://www.confluent.io/wp-content/themes/flavor/flavor/assets/confluent-logo.svg",
    gradientFrom: "#0EA5E9",
    gradientTo: "#2563EB"
  },
  {
    id: "retool",
    name: "Retool",
    description: "Self-hosted low-code platform for building internal tools with enterprise-grade security.",
    category: "Low-Code Platform",
    link: "https://retool.com/self-hosted",
    logo: "https://retool.com/favicon.svg",
    gradientFrom: "#F97316",
    gradientTo: "#EF4444"
  },
  {
    id: "elastic",
    name: "Elastic",
    description: "Simplify self-managed Elasticsearch operations with AutoOps - enterprise search in your infrastructure.",
    category: "Search & Logging",
    link: "https://www.elastic.co/search-labs/blog/elastic-autoops-self-managed-elasticsearch",
    logo: "https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt05047fdbe3b9c333/5c11ec1f3312ce2e785d9c30/logo-elastic-horizontal-color.svg",
    gradientFrom: "#FED10A",
    gradientTo: "#F04E98"
  },
  {
    id: "posthog",
    name: "PostHog",
    description: "Self-host your product analytics - complete control over your user data and insights.",
    category: "Product Analytics",
    link: "https://posthog.com/docs/self-host",
    logo: "https://posthog.com/brand/posthog-logo.svg",
    gradientFrom: "#F9A825",
    gradientTo: "#EF5350"
  },
  {
    id: "hashicorp-terraform",
    name: "HashiCorp Terraform",
    description: "Flexible Terraform Enterprise deployment options - infrastructure as code on your terms.",
    category: "Infrastructure Automation",
    link: "https://www.hashicorp.com/en/blog/terraform-enterprise-adds-new-flexible-deployment-options",
    logo: "https://www.hashicorp.com/img/logo.svg",
    gradientFrom: "#7C3AED",
    gradientTo: "#5B21B6"
  },
  {
    id: "supabase",
    name: "Supabase",
    description: "Multiple deployment options for your open-source Firebase alternative - self-host or managed.",
    category: "Backend Platform",
    link: "https://supabase.com/docs/guides/deployment",
    logo: "https://supabase.com/brand-assets/supabase-logo-icon.svg",
    gradientFrom: "#3ECF8E",
    gradientTo: "#1C8656"
  },
  {
    id: "northflank",
    name: "Northflank",
    description: "Deploy self-hosted tools like PostHog, Temporal, and Retool with managed infrastructure.",
    category: "Managed Hosting",
    link: "https://northflank.com/guides/how-to-self-host-posthog-on-northflank",
    logo: "https://northflank.com/logo.svg",
    gradientFrom: "#6366F1",
    gradientTo: "#4F46E5"
  },
  {
    id: "cloudraft",
    name: "Cloudraft",
    description: "Building cloud-native BYOC platforms - foundational infrastructure for enterprise deployments.",
    category: "Cloud Infrastructure",
    link: "https://www.cloudraft.io/case-studies/building-cloud-native-byoc-platform",
    logo: "https://cloudraft.io/logo.svg",
    gradientFrom: "#14B8A6",
    gradientTo: "#0D9488"
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    description: "Private cloud observability for security and compliance - your telemetry data stays with you.",
    category: "Observability",
    link: "https://www.honeycomb.io/blog/honeycomb-launches-new-private-cloud-offering-address-security-compliance-cost-concerns",
    logo: "https://www.honeycomb.io/wp-content/uploads/2023/05/honeycomb-logo.svg",
    gradientFrom: "#FFB300",
    gradientTo: "#FF8F00"
  }
];
