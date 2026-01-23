# Awesome BYOC [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Bring Your Own Cloud (BYOC) tools and resources.

**BYOC (Bring Your Own Cloud)** is a deployment model where software runs in *a customer's* cloud account instead of a vendor's shared environment. This provides customer's data sovereignty, compliance control, cost transparency, and avoids vendor lock-in.

**[View the website](https://www.awesomebyoc.com)**

**Common Patterns**

| Pattern | Description |
|---------|-------------|
| Control Plane / Data Plane | Vendor hosts management UI, your cloud runs the workloads. |
| Agent-Based | Lightweight agent in your environment connects outbound to vendor services. |
| Full Self-Hosted | Everything runs in your environment, supporting air-gapped deployments. |


## Contents

- [BYOC Tools](#byoc-tools)

## BYOC Tools

### Databases

- [Aiven](https://aiven.io/docs/platform/concepts/byoc) - Managed open source data infrastructure with BYOC deployment option for PostgreSQL, Kafka, and more.
- [ClickHouse](https://clickhouse.com/cloud/bring-your-own-cloud) - Real-time OLAP database for analytics with BYOC deployment. ([Source Code](https://github.com/ClickHouse/ClickHouse))
- [LanceDB](https://lancedb.com/docs/enterprise/deployment/) - Vector database with BYOC enterprise deployment for high-performance AI workloads. ([Source Code](https://github.com/lancedb/lancedb))
- [Pinecone](https://docs.pinecone.io/guides/production/bring-your-own-cloud) - Vector database purpose-built for AI applications requiring similarity search at scale.
- [SingleStore](https://www.singlestore.com/blog/singlestore-byoc-on-aws/) - Distributed SQL database optimized for real-time analytics and transactions in a single platform.
- [turbopuffer](https://turbopuffer.com/docs/architecture) - serverless {vector, full-text} search built from first principles on object storage.

### Streaming

- [Redpanda](https://www.redpanda.com/product/bring-your-own-cloud-byoc) - Kafka-compatible streaming platform with 10x lower latency, no ZooKeeper dependency. ([Source Code](https://github.com/redpanda-data/redpanda))
- [WarpStream](https://www.warpstream.com/bring-your-own-cloud-kafka-data-streaming) - Kafka-compatible streaming that runs entirely in your cloud with zero inter-zone networking costs.

### Observability

- [Grafana](https://grafana.com/products/bring-your-own-cloud-byoc/) - Open source analytics and visualization platform for metrics, logs, and traces. ([Source Code](https://github.com/grafana/grafana))
- [Groundcover](https://www.groundcover.com/blog/why-byoc-is-the-future) - Cloud-native observability using eBPF for zero-instrumentation monitoring in Kubernetes.
- [Honeycomb](https://www.honeycomb.io/blog/honeycomb-launches-new-private-cloud-offering-address-security-compliance-cost-concerns) - Observability platform for debugging distributed systems with high-cardinality data exploration.

### Data Integration

- [AnswerLayer](https://getanswerlayer.com) - Generative semantic layer for natural language analytics on sensitive data.
- [Snowflake Openflow](https://www.snowflake.com/en/blog/openflow-byoc-data-integration/) - BYOC data integration that moves data into Snowflake while keeping compute in your environment.
- [Estuary](https://docs.estuary.dev/private-byoc/byoc-deployments/) - Real-time ETL platform with CDC capabilities for streaming data integration. ([Source Code](https://github.com/estuary/flow))

### Storage

- [Tigris](https://www.tigrisdata.com/docs/) - Globally distributed S3-compatible object storage service that works with any compute provider.
 
### Dev Platforms

- [Okteto](https://www.okteto.com/) - Remote Development Environments for Humans and Agents.


### Bring Your Own Cloud Platforms

- [Distr](https://distr.sh/) - Open Source Distribution Platform for BYOC, on-prem and self-managed deployments. ([Source Code](https://github.com/distr-sh/distr))
- [Nuon](https://docs.nuon.co/get-started/introduction) - Control Plane and Runner driven BYOC platform for deploying software to customer cloud environments and on-premises infrastructure.
- [Replicated](https://www.replicated.com/) - Managed BYOC platform for vendors to manage the lifecycle of installing on a customer's cloud.

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a tool.
