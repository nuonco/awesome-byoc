# Awesome BYOC Tools

A curated list of **Bring Your Own Cloud (BYOC)** tools and self-hostable infrastructure software for developers.

> **BYOC** (Bring Your Own Cloud) is a deployment model where software runs in *your* cloud account instead of a vendor's. This gives you data sovereignty, compliance control, cost transparency, and no vendor lock-in.

**[View the website](https://buildyourown.dev)**

---

## Contents

- [Databases](#databases)
- [CI/CD and Deployment](#cicd-and-deployment)
- [Monitoring and Observability](#monitoring-and-observability)
- [ML/Inference Infrastructure](#mlinference-infrastructure)
- [Internal Developer Platforms](#internal-developer-platforms)
- [Installers / App Packagers](#installers--app-packagers)
- [Feature Flags / Config](#feature-flags--config)
- [Remote Debugging](#remote-debugging)
- [Access Control / IAM](#access-control--iam)
- [Networking / VPN / Proxy](#networking--vpn--proxy)
- [Secrets / Service Mesh](#secrets--service-mesh)

---

## Databases

- [Neon](https://neon.tech) - Serverless Postgres with branching and autoscaling. `Hybrid` `Rust`
- [PlanetScale](https://planetscale.com) - MySQL-compatible serverless database platform. `Commercial`
- [FerretDB](https://ferretdb.io) - Open-source MongoDB alternative built on Postgres. ([Source](https://github.com/FerretDB/FerretDB)) `MIT` `Go`
- [SurrealDB](https://surrealdb.com) - Multi-model database for modern applications. ([Source](https://github.com/surrealdb/surrealdb)) `Apache-2.0` `Rust`
- [ClickHouse](https://clickhouse.com) - Fast open-source column-oriented OLAP database. ([Source](https://github.com/ClickHouse/ClickHouse)) `Apache-2.0` `C++`

## CI/CD and Deployment

- [Earthly](https://earthly.dev) - Build automation tool for the container era. ([Source](https://github.com/earthly/earthly)) `MPL-2.0` `Go`
- [Dagger](https://dagger.io) - Programmable CI/CD engine that runs anywhere. ([Source](https://github.com/dagger/dagger)) `Apache-2.0` `Go`
- [GitHub Actions Self-Hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners) - Run GitHub Actions workflows on your own infrastructure. ([Source](https://github.com/actions/runner)) `MIT` `C#`
- [Tekton](https://tekton.dev) - Cloud-native CI/CD framework for Kubernetes. ([Source](https://github.com/tektoncd/pipeline)) `Apache-2.0` `Go`
- [Drone](https://www.drone.io) - Container-native continuous delivery platform. ([Source](https://github.com/harness/drone)) `Apache-2.0` `Go`

## Monitoring and Observability

- [Prometheus](https://prometheus.io) - Open-source monitoring and alerting toolkit. ([Source](https://github.com/prometheus/prometheus)) `Apache-2.0` `Go`
- [Grafana](https://grafana.com) - Open-source analytics and interactive visualization platform. ([Source](https://github.com/grafana/grafana)) `AGPL-3.0` `TypeScript`
- [SigNoz](https://signoz.io) - Open-source APM and observability platform. ([Source](https://github.com/SigNoz/signoz)) `MIT` `Go`
- [Better Stack](https://betterstack.com) - Observability platform with BYOC deployment option. `Commercial`
- [Vector](https://vector.dev) - High-performance observability data pipeline. ([Source](https://github.com/vectordotdev/vector)) `MPL-2.0` `Rust`

## ML/Inference Infrastructure

- [vLLM](https://vllm.ai) - High-throughput LLM serving engine. ([Source](https://github.com/vllm-project/vllm)) `Apache-2.0` `Python`
- [Ray](https://ray.io) - Unified framework for scaling AI and Python applications. ([Source](https://github.com/ray-project/ray)) `Apache-2.0` `Python`
- [Ollama](https://ollama.ai) - Run large language models locally. ([Source](https://github.com/ollama/ollama)) `MIT` `Go`
- [Triton Inference Server](https://developer.nvidia.com/triton-inference-server) - Open-source inference serving software from NVIDIA. ([Source](https://github.com/triton-inference-server/server)) `BSD-3-Clause` `C++`

## Internal Developer Platforms

- [Qovery](https://www.qovery.com) - Internal developer platform for Kubernetes. ([Source](https://github.com/Qovery/engine)) `Hybrid` `Rust`
- [Backstage](https://backstage.io) - Open platform for building developer portals. ([Source](https://github.com/backstage/backstage)) `Apache-2.0` `TypeScript`
- [Port](https://getport.io) - Internal developer portal for engineering teams. `Commercial`
- [Humanitec](https://humanitec.com) - Platform orchestrator for internal developer platforms. `Commercial`

## Installers / App Packagers

- [Replicated](https://replicated.com) - Ship enterprise software to customer environments. `Commercial`
- [Nuon](https://nuon.co) - Deploy your application into customer clouds. `Commercial`
- [Helm](https://helm.sh) - The package manager for Kubernetes. ([Source](https://github.com/helm/helm)) `Apache-2.0` `Go`
- [Kustomize](https://kustomize.io) - Kubernetes native configuration management. ([Source](https://github.com/kubernetes-sigs/kustomize)) `Apache-2.0` `Go`

## Feature Flags / Config

- [Flagsmith](https://flagsmith.com) - Open-source feature flag and remote config service. ([Source](https://github.com/Flagsmith/flagsmith)) `BSD-3-Clause` `Python`
- [Unleash](https://www.getunleash.io) - Open-source feature management platform. ([Source](https://github.com/Unleash/unleash)) `Apache-2.0` `TypeScript`
- [GrowthBook](https://www.growthbook.io) - Open-source feature flags and A/B testing. ([Source](https://github.com/growthbook/growthbook)) `MIT` `TypeScript`

## Remote Debugging

- [Lightrun](https://lightrun.com) - Developer observability platform for production debugging. `Commercial`
- [Rookout](https://www.rookout.com) - Live debugging and data collection for cloud-native apps. `Commercial`

## Access Control / IAM

- [Keycloak](https://www.keycloak.org) - Open-source identity and access management. ([Source](https://github.com/keycloak/keycloak)) `Apache-2.0` `Java`
- [Ory](https://www.ory.sh) - Open-source identity infrastructure. ([Source](https://github.com/ory/hydra)) `Apache-2.0` `Go`
- [ZITADEL](https://zitadel.com) - Identity management platform with BYOC option. ([Source](https://github.com/zitadel/zitadel)) `Apache-2.0` `Go`

## Networking / VPN / Proxy

- [Tailscale](https://tailscale.com) - Zero-config VPN built on WireGuard. ([Source](https://github.com/tailscale/tailscale)) `Hybrid` `Go`
- [NetBird](https://netbird.io) - Open-source WireGuard-based VPN. ([Source](https://github.com/netbirdio/netbird)) `BSD-3-Clause` `Go`
- [Cilium](https://cilium.io) - eBPF-based networking, observability, and security. ([Source](https://github.com/cilium/cilium)) `Apache-2.0` `Go`
- [Traefik](https://traefik.io) - Cloud-native application proxy. ([Source](https://github.com/traefik/traefik)) `MIT` `Go`

## Secrets / Service Mesh

- [HashiCorp Vault](https://www.vaultproject.io) - Secrets management and data protection. ([Source](https://github.com/hashicorp/vault)) `BUSL-1.1` `Go`
- [External Secrets Operator](https://external-secrets.io) - Kubernetes operator for external secret management. ([Source](https://github.com/external-secrets/external-secrets)) `Apache-2.0` `Go`
- [Istio](https://istio.io) - Open-source service mesh for Kubernetes. ([Source](https://github.com/istio/istio)) `Apache-2.0` `Go`
- [Linkerd](https://linkerd.io) - Ultralight Kubernetes service mesh. ([Source](https://github.com/linkerd/linkerd2)) `Apache-2.0` `Rust`

---

## What is BYOC?

**Bring Your Own Cloud (BYOC)** is a deployment model where software runs in your own cloud infrastructure rather than in a vendor's shared environment.

### Benefits

- **Data Sovereignty** — Your data never leaves your cloud account
- **Compliance** — Meet SOC 2, HIPAA, GDPR, FedRAMP requirements
- **No Vendor Lock-in** — Maintain control over your infrastructure
- **Cost Transparency** — Infrastructure costs on your cloud bill

### Common Patterns

| Pattern | Description |
|---------|-------------|
| Control Plane / Data Plane | Vendor hosts management UI, your cloud runs the workloads |
| Agent-Based | Lightweight agent in your environment connects outbound |
| Full Self-Hosted | Everything runs in your environment (air-gapped capable) |

---

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

- **Add a tool**: Open a PR to add to the list
- **Report issues**: Open an issue on GitHub
- **Improve docs**: PRs for documentation improvements are appreciated

---

## License

This list is under the [MIT License](LICENSE).
