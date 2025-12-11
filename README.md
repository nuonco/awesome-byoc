# Awesome BYOC [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Bring Your Own Cloud (BYOC) tools and resources.

**BYOC (Bring Your Own Cloud)** is a deployment model where software runs in *a customer's* cloud account instead of a vendor's shared environment. This provides customer's data sovereignty, compliance control, cost transparency, and avoids vendor lock-in.

**[View the website](https://www.awesomebyoc.com)**

## Contents

- [BYOC Tools](#byoc-tools)
- [What is BYOC?](#what-is-byoc)
- [Contributing](#contributing)

## BYOC Tools

### Databases

- [Aiven](https://aiven.io/docs/platform/concepts/byoc) - Managed open source data infrastructure with BYOC deployment option for PostgreSQL, Kafka, and more.
- [ClickHouse](https://clickhouse.com/cloud/bring-your-own-cloud) - Real-time OLAP database for analytics with BYOC deployment. ([Source Code](https://github.com/ClickHouse/ClickHouse))
- [LanceDB](https://lancedb.com/docs/enterprise/deployment/) - Vector database with BYOC enterprise deployment for high-performance AI workloads. ([Source Code](https://github.com/lancedb/lancedb))
- [Pinecone](https://docs.pinecone.io/guides/production/bring-your-own-cloud) - Vector database purpose-built for AI applications requiring similarity search at scale.
- [SingleStore](https://www.singlestore.com/blog/singlestore-byoc-on-aws/) - Distributed SQL database optimized for real-time analytics and transactions in a single platform.

### Streaming

- [Redpanda](https://www.redpanda.com/product/bring-your-own-cloud-byoc) - Kafka-compatible streaming platform with 10x lower latency, no ZooKeeper dependency. ([Source Code](https://github.com/redpanda-data/redpanda))
- [WarpStream](https://www.warpstream.com/bring-your-own-cloud-kafka-data-streaming) - Kafka-compatible streaming that runs entirely in your cloud with zero inter-zone networking costs.

### Observability

- [Grafana](https://grafana.com/products/bring-your-own-cloud-byoc/) - Open source analytics and visualization platform for metrics, logs, and traces. ([Source Code](https://github.com/grafana/grafana))
- [Groundcover](https://www.groundcover.com/blog/why-byoc-is-the-future) - Cloud-native observability using eBPF for zero-instrumentation monitoring in Kubernetes.
- [Honeycomb](https://www.honeycomb.io/blog/honeycomb-launches-new-private-cloud-offering-address-security-compliance-cost-concerns) - Observability platform for debugging distributed systems with high-cardinality data exploration.

### Data Integration

- [Snowflake Openflow](https://www.snowflake.com/en/blog/openflow-byoc-data-integration/) - BYOC data integration that moves data into Snowflake while keeping compute in your environment.
- [Estuary](https://docs.estuary.dev/private-byoc/byoc-deployments/) - Real-time ETL platform with CDC capabilities for streaming data integration. ([Source Code](https://github.com/estuary/flow))

### Dev Platforms

- [Retool](https://docs.retool.com/self-hosted/retool-managed/concepts/architecture) - Internal tools platform for building admin panels, dashboards, and workflows with self-hosted deployment.

### BYOC Platforms

- [Nuon](https://docs.nuon.co/get-started/introduction) - Control Plane and Runner driven BYOC platform for deploying software to customer cloud environments and on-premises infrastructure.
- [Replicated](https://www.replicated.com/) - Managed BYOC platform for vendors to manage the lifecycle of installing on a customer's cloud.
- [Tensor9](https://www.tensor9.com/) - Enterprise software delivery platform for deploying SaaS to customer environments.

## What is BYOC?

**Bring Your Own Cloud (BYOC)** is a deployment model where software runs in your own cloud infrastructure rather than in a vendor's shared environment.

### Benefits

- **Data Sovereignty** — Your data never leaves your cloud account, simplifying compliance.
- **Compliance** — Meet SOC 2, HIPAA, GDPR, and FedRAMP requirements more easily.
- **No Vendor Lock-in** — Maintain control over your infrastructure and data.
- **Cost Transparency** — Infrastructure costs appear on your cloud bill for clear budgeting.

### Common Patterns

| Pattern | Description |
|---------|-------------|
| Control Plane / Data Plane | Vendor hosts management UI, your cloud runs the workloads. |
| Agent-Based | Lightweight agent in your environment connects outbound to vendor services. |
| Full Self-Hosted | Everything runs in your environment, supporting air-gapped deployments. |

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a tool.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Nuon](https://nuon.co) has waived all copyright and related or neighboring rights to this work.
