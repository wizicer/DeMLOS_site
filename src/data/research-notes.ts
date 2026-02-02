export interface ResearchNote {
  slug: string;
  title: string;
  date: string;
  sourceType: 'paper' | 'blog' | 'release' | 'discussion';
  summary: string;
  content: string;
  tags: string[];
  relatedProjects?: string[];
}

export const researchNotes: ResearchNote[] = [
  {
    slug: 'zkml-scaling-breakthrough',
    title: 'ZKML Scaling Breakthrough: Verifiable Neural Networks at Production Scale',
    date: '2026-01-28',
    sourceType: 'paper',
    summary: 'New research demonstrates practical ZKML verification for transformer models up to 1B parameters with sub-second proof generation.',
    content: `
## Overview

A new paper from the Modulus Labs team presents significant advances in zero-knowledge proof systems for machine learning verification. The research demonstrates that ZKML can now handle transformer architectures at production scale.

## Key Findings

- **Proof Generation Time**: Reduced from minutes to sub-second for inference verification
- **Model Scale**: Successfully verified models up to 1 billion parameters
- **Cost Efficiency**: 90% reduction in prover costs compared to previous SNARK implementations

## Technical Approach

The paper introduces a novel folding scheme specifically designed for matrix multiplication operations, which dominate neural network computation. By leveraging the repetitive structure of attention mechanisms, the team achieved significant compression in proof size.

## Implications for DeML

This breakthrough addresses one of the key bottlenecks in decentralized ML: the ability to verify inference results without re-executing the computation. With practical ZKML, trustless AI inference becomes economically viable for production systems.

## Open Questions

- How does this scale to training verification?
- What is the hardware requirement for provers?
- Can this be combined with optimistic verification for hybrid systems?
    `,
    tags: ['verification', 'execution', 'blockchain'],
    relatedProjects: ['Gensyn', 'Modulus'],
  },
  {
    slug: 'bittensor-subnet-economics',
    title: 'Analysis: Bittensor Subnet Economic Dynamics After 6 Months',
    date: '2026-01-22',
    sourceType: 'blog',
    summary: 'Deep dive into the economic performance and miner behavior across Bittensor subnets, revealing emergent patterns in decentralized AI markets.',
    content: `
## Overview

Six months after the launch of Bittensor's subnet architecture, we now have sufficient data to analyze the economic dynamics of decentralized AI markets.

## Subnet Performance Analysis

### High-Performing Subnets
- **Text Generation (SN1)**: Highest TAO emissions, competitive miner landscape
- **Image Generation (SN8)**: Strong demand, but centralization concerns
- **Translation (SN12)**: Steady growth, diverse validator set

### Struggling Subnets
- Several specialized subnets show low utilization
- Chicken-and-egg problem: need users to attract miners, need miners to attract users

## Economic Observations

1. **Miner Consolidation**: Top 10% of miners capture 60% of emissions
2. **Validator Behavior**: Validators show preference for consistent performers
3. **Price Discovery**: Natural pricing emerging, though still volatile

## Key Takeaways

The subnet model successfully enables market-driven resource allocation, but raises questions about long-term sustainability without external demand sources.
    `,
    tags: ['incentive', 'governance', 'application'],
    relatedProjects: ['Bittensor'],
  },
  {
    slug: 'gensyn-testnet-results',
    title: 'Gensyn Testnet Performance: Distributed Training at Scale',
    date: '2026-01-15',
    sourceType: 'release',
    summary: 'Gensyn releases testnet results showing successful distributed training of a 7B parameter model across 500+ heterogeneous nodes.',
    content: `
## Testnet Highlights

Gensyn's public testnet has completed its first large-scale distributed training run, demonstrating the viability of decentralized model training.

## Key Metrics

| Metric | Result |
|--------|--------|
| Model Size | 7B parameters |
| Node Count | 512 active nodes |
| Training Time | 72 hours |
| Geographic Distribution | 34 countries |
| Average Node Uptime | 94.2% |

## Technical Achievements

- **Gradient Compression**: 95% reduction in communication overhead
- **Fault Tolerance**: Training continued despite 15% node churn
- **Verification**: Probabilistic verification caught 3 malicious submissions

## Challenges Identified

1. Network latency remains the primary bottleneck
2. Heterogeneous hardware creates load balancing challenges
3. Economic model needs refinement for smaller contributors

## Next Steps

Gensyn plans to expand testnet capacity and introduce the staking mechanism in Q2 2026.
    `,
    tags: ['execution', 'verification', 'hardware'],
    relatedProjects: ['Gensyn'],
  },
  {
    slug: 'akash-ml-workloads',
    title: 'Akash Network Introduces ML-Optimized Container Specs',
    date: '2026-01-10',
    sourceType: 'release',
    summary: 'Akash launches new container specifications designed for ML inference workloads, featuring GPU memory management and model caching.',
    content: `
## New ML Features

Akash Network has released a significant update targeting ML inference workloads on their decentralized cloud platform.

## Key Features

### GPU Memory Management
- Dynamic GPU memory allocation
- Multi-model serving on single GPU
- Automatic memory defragmentation

### Model Caching
- Distributed model cache across providers
- Reduced cold start times by 80%
- Content-addressed model storage

### Pricing Innovations
- Per-token pricing for LLM inference
- Reserved capacity contracts
- Spot pricing for batch workloads

## Provider Statistics

- 847 GPU-enabled providers
- 2,340 total GPUs available
- Mix of consumer and datacenter hardware

## Comparison with Centralized Alternatives

| Metric | Akash | AWS SageMaker |
|--------|-------|---------------|
| Cost ($/1M tokens) | $0.12 | $0.45 |
| Latency (p50) | 120ms | 80ms |
| Availability | 99.1% | 99.9% |

## Analysis

Akash offers significant cost savings but trails on latency and reliability. Suitable for cost-sensitive, latency-tolerant applications.
    `,
    tags: ['execution', 'interface', 'hardware'],
    relatedProjects: ['Akash Network'],
  },
  {
    slug: 'verifiable-inference-survey',
    title: 'Survey: State of Verifiable Inference in 2026',
    date: '2026-01-05',
    sourceType: 'paper',
    summary: 'Comprehensive academic survey covering all major approaches to verifiable ML inference, from ZK proofs to optimistic verification.',
    content: `
## Survey Scope

This comprehensive survey covers the landscape of verifiable inference mechanisms as of early 2026, analyzing tradeoffs across different approaches.

## Verification Approaches

### Zero-Knowledge Proofs
- **Pros**: Cryptographic guarantees, privacy-preserving
- **Cons**: High prover cost, limited model support
- **Projects**: Modulus, EZKL, Risc Zero

### Optimistic Verification
- **Pros**: Low overhead, scalable
- **Cons**: Challenge period delays, capital lockup
- **Projects**: Gensyn, Ritual

### Trusted Execution Environments
- **Pros**: Hardware-backed security, low overhead
- **Cons**: Trust in hardware vendor, limited availability
- **Projects**: Phala, Oasis

### Redundant Execution
- **Pros**: Simple, battle-tested
- **Cons**: High cost (2-3x), coordination complexity
- **Projects**: Bittensor (partial), Livepeer

## Comparative Analysis

| Approach | Cost Overhead | Latency | Trust Assumptions |
|----------|--------------|---------|-------------------|
| ZK Proofs | 10-100x | High | Math only |
| Optimistic | 1.1-1.5x | Medium | Economic |
| TEE | 1.0-1.2x | Low | Hardware |
| Redundant | 2-3x | Low | Majority honest |

## Recommendations

The survey concludes that hybrid approaches combining optimistic verification with ZK or TEE fallbacks offer the best tradeoffs for production systems.
    `,
    tags: ['verification', 'execution', 'blockchain'],
    relatedProjects: ['Gensyn', 'Bittensor', 'Livepeer'],
  },
  {
    slug: 'sentient-model-marketplace',
    title: 'Sentient Launches Decentralized Model Marketplace',
    date: '2025-12-28',
    sourceType: 'release',
    summary: 'Sentient unveils a new marketplace for AI models with built-in royalty tracking and usage-based compensation for model creators.',
    content: `
## Marketplace Overview

Sentient has launched a decentralized marketplace for AI models, introducing novel mechanisms for tracking model usage and compensating creators.

## Key Features

### Royalty Tracking
- On-chain tracking of model usage
- Automatic royalty distribution to creators
- Support for derivative works and fine-tuned models

### Model Registry
- Cryptographic model fingerprinting
- Version control and lineage tracking
- License enforcement through smart contracts

### Economic Model
- Creators set base pricing
- Market-driven price discovery
- Staking required for model listing

## Launch Statistics

- 1,247 models listed in first week
- $2.3M in transaction volume
- 89 unique model creators

## Technical Architecture

The marketplace uses a combination of:
- IPFS for model storage
- Ethereum L2 for transactions
- Trusted execution for usage verification

## Analysis

This addresses a key gap in the DeML ecosystem: how to compensate model creators in a decentralized setting. The approach shows promise but faces challenges in preventing off-chain usage.
    `,
    tags: ['incentive', 'governance', 'application'],
    relatedProjects: ['Sentient'],
  },
  {
    slug: 'federated-learning-blockchain',
    title: 'Research: Blockchain-Coordinated Federated Learning',
    date: '2025-12-20',
    sourceType: 'paper',
    summary: 'New research proposes using blockchain for coordination in federated learning, addressing aggregation trust and contribution verification.',
    content: `
## Research Overview

Researchers from ETH Zurich and Stanford present a novel framework for blockchain-coordinated federated learning that addresses key trust issues in decentralized training.

## Problem Statement

Traditional federated learning relies on a central aggregator, creating:
- Single point of failure
- Trust assumptions on aggregation correctness
- Difficulty in fair contribution attribution

## Proposed Solution

### Decentralized Aggregation
- Smart contract-based gradient aggregation
- Merkle tree commitments for efficiency
- Threshold signature schemes for finality

### Contribution Verification
- Shapley value approximation for attribution
- Gradient similarity scoring
- Historical performance tracking

### Privacy Preservation
- Secure aggregation protocols
- Differential privacy guarantees
- Minimal on-chain data exposure

## Experimental Results

| Metric | Centralized FL | Proposed System |
|--------|---------------|-----------------|
| Communication | 1x | 1.3x |
| Training Time | 1x | 1.8x |
| Byzantine Tolerance | 0% | 33% |

## Limitations

- Higher communication overhead
- Longer training times
- Gas costs for on-chain operations

## Relevance to DeML

This research provides theoretical foundations for decentralized training coordination, though practical deployment requires further optimization.
    `,
    tags: ['execution', 'verification', 'blockchain'],
    relatedProjects: ['Gensyn', 'Bittensor'],
  },
  {
    slug: '0g-storage-layer',
    title: '0G Introduces Specialized Storage Layer for ML Artifacts',
    date: '2025-12-15',
    sourceType: 'release',
    summary: '0G launches a storage solution optimized for ML workflows, featuring streaming access and deduplication for model weights and datasets.',
    content: `
## Product Overview

0G has released a specialized storage layer designed for the unique requirements of ML workloads in decentralized systems.

## Key Features

### Streaming Access
- Random access to model weights
- No full download required
- Optimized for transformer architectures

### Deduplication
- Content-addressed storage
- Cross-model weight sharing
- 60% storage reduction for model families

### Data Availability
- Erasure coding for redundancy
- Geographic distribution
- Guaranteed retrieval SLAs

## Technical Specifications

| Feature | Specification |
|---------|--------------|
| Max Object Size | 100 GB |
| Read Latency | <100ms (p99) |
| Write Throughput | 1 GB/s |
| Redundancy | 3x erasure coded |

## Pricing

- Storage: $0.02/GB/month
- Egress: $0.01/GB
- Compute: Usage-based

## Integration

0G provides SDKs for:
- PyTorch model loading
- Hugging Face integration
- Custom streaming protocols

## Analysis

This addresses a critical infrastructure gap for decentralized ML. The ability to stream model weights without full downloads significantly reduces barrier to entry for inference providers.
    `,
    tags: ['hardware', 'interface', 'execution'],
    relatedProjects: ['0g'],
  },
  {
    slug: 'livepeer-ai-subnets',
    title: 'Livepeer Expands Beyond Video: AI Subnet Architecture',
    date: '2025-12-10',
    sourceType: 'blog',
    summary: 'Livepeer announces plans to expand their orchestrator network to support general AI workloads through a subnet architecture.',
    content: `
## Announcement Overview

Livepeer, known for decentralized video transcoding, is expanding to support general AI inference through a new subnet architecture.

## Rationale

- Existing orchestrator network provides infrastructure foundation
- GPU resources underutilized between video jobs
- Natural extension of compute coordination expertise

## Proposed Architecture

### AI Subnets
- Separate subnets for different AI workload types
- Model-specific orchestrator selection
- Quality-weighted task routing

### Compatibility
- Maintain backward compatibility with video transcoding
- Shared staking and delegation
- Unified economic model

## Workload Types

1. **Image Generation**: Stable Diffusion, DALL-E compatible
2. **LLM Inference**: Llama, Mistral class models
3. **Speech**: Whisper, TTS models
4. **Custom**: User-defined model deployment

## Timeline

- Q1 2026: Testnet launch
- Q2 2026: Image generation mainnet
- Q3 2026: LLM inference mainnet

## Analysis

Livepeer's existing orchestrator network (2,400+ nodes) provides a strong foundation. The key challenge will be adapting their video-optimized verification to AI workloads.
    `,
    tags: ['execution', 'governance', 'application'],
    relatedProjects: ['Livepeer'],
  },
  {
    slug: 'fluence-aqua-ml',
    title: 'Fluence Releases Aqua-ML: Composable AI Pipelines',
    date: '2025-12-05',
    sourceType: 'release',
    summary: 'Fluence introduces Aqua-ML, extending their Aqua language to support declarative ML pipeline composition across decentralized compute.',
    content: `
## Product Overview

Fluence has released Aqua-ML, an extension of their Aqua programming language for composing ML pipelines across decentralized infrastructure.

## Aqua-ML Features

### Declarative Pipeline Definition
\`\`\`aqua
pipeline ImageAnalysis:
  input: image
  
  -- Run in parallel across providers
  parallel:
    objects <- ObjectDetection(image)
    faces <- FaceDetection(image)
    text <- OCR(image)
  
  -- Aggregate results
  result <- Aggregator(objects, faces, text)
  
  return result
\`\`\`

### Provider Selection
- Automatic provider matching based on model requirements
- Cost optimization across providers
- Latency-aware routing

### Fault Tolerance
- Automatic retry with alternative providers
- Partial result handling
- Timeout management

## Use Cases

1. **Multi-model Inference**: Combine outputs from multiple models
2. **Ensemble Methods**: Aggregate predictions for improved accuracy
3. **Pipeline Orchestration**: Chain models for complex workflows

## Performance

| Pipeline Type | Latency (p50) | Cost Savings vs Centralized |
|--------------|---------------|----------------------------|
| Simple (1 model) | 150ms | 40% |
| Medium (3 models) | 320ms | 55% |
| Complex (5+ models) | 580ms | 65% |

## Analysis

Aqua-ML addresses a key developer experience gap in decentralized AI. The declarative approach significantly simplifies building applications on heterogeneous decentralized infrastructure.
    `,
    tags: ['interface', 'execution', 'application'],
    relatedProjects: ['Fluence'],
  },
  {
    slug: 'autonolas-agent-coordination',
    title: 'Autonolas: Decentralized Agent Coordination Mechanisms',
    date: '2025-11-28',
    sourceType: 'paper',
    summary: 'Research paper from Autonolas team on coordination mechanisms for decentralized autonomous AI agents.',
    content: `
## Research Overview

The Autonolas research team presents formal mechanisms for coordinating autonomous AI agents in decentralized settings.

## Problem Statement

As AI agents become more autonomous, coordination becomes critical:
- How do agents negotiate and cooperate?
- How is malicious agent behavior prevented?
- How are resources allocated fairly?

## Proposed Mechanisms

### Agent Registration
- On-chain agent identity
- Capability attestation
- Reputation tracking

### Task Coordination
- Decentralized task markets
- Auction-based allocation
- Multi-agent negotiation protocols

### Safety Mechanisms
- Stake-weighted voting on agent actions
- Automatic shutdown triggers
- Human-in-the-loop checkpoints

## Formal Properties

The paper proves:
- **Liveness**: Tasks eventually complete given sufficient agents
- **Safety**: Malicious agents are bounded in damage
- **Fairness**: Resources allocated proportionally to contribution

## Implementation

Autonolas has implemented these mechanisms in their agent framework:
- 340+ registered agent services
- $12M in coordinated transactions
- 99.7% successful task completion

## Analysis

This work is foundational for the emerging field of decentralized AI agents. The formal treatment provides confidence for production deployments.
    `,
    tags: ['governance', 'application', 'verification'],
    relatedProjects: ['Autonolas'],
  },
  {
    slug: 'hardware-attestation-ml',
    title: 'Hardware Attestation for ML: Challenges and Solutions',
    date: '2025-11-20',
    sourceType: 'paper',
    summary: 'Academic survey on using hardware attestation (TPM, SGX, SEV) for verifying ML computation in untrusted environments.',
    content: `
## Survey Scope

This survey examines the use of hardware-based attestation mechanisms for verifying ML computation in decentralized and untrusted environments.

## Hardware Technologies

### Intel SGX
- **Status**: Deprecated for consumer, available in Xeon
- **ML Support**: Limited memory (256MB enclave)
- **Projects Using**: Phala, Oasis

### AMD SEV
- **Status**: Widely available
- **ML Support**: Full VM isolation, GPU support planned
- **Projects Using**: Limited adoption

### ARM TrustZone
- **Status**: Ubiquitous in mobile
- **ML Support**: Good for edge inference
- **Projects Using**: Emerging projects

### NVIDIA Confidential Computing
- **Status**: H100 and newer
- **ML Support**: Native GPU TEE
- **Projects Using**: Very early

## Challenges

1. **Side Channels**: Timing and power analysis attacks
2. **Trusted Computing Base**: Large attack surface
3. **Vendor Trust**: Reliance on hardware manufacturers
4. **Availability**: Limited hardware with attestation support

## Solutions

### Hybrid Approaches
- Combine TEE with cryptographic verification
- Use TEE for key operations only
- Fallback mechanisms for TEE failures

### Attestation Chains
- On-chain attestation verification
- Continuous monitoring
- Revocation mechanisms

## Recommendations

For DeML systems, the survey recommends:
1. Don't rely solely on hardware attestation
2. Use as one layer in defense-in-depth
3. Plan for hardware compromise scenarios
    `,
    tags: ['hardware', 'verification', 'execution'],
    relatedProjects: [],
  },
];

export function getNotesByMonth(): Map<string, ResearchNote[]> {
  const byMonth = new Map<string, ResearchNote[]>();
  
  for (const note of researchNotes) {
    const month = note.date.substring(0, 7);
    const existing = byMonth.get(month) || [];
    existing.push(note);
    byMonth.set(month, existing);
  }
  
  return byMonth;
}

export function getRelatedNotes(projectSlug: string): ResearchNote[] {
  return researchNotes.filter(
    (note) => note.relatedProjects?.some(
      (p) => p.toLowerCase().replace(/\s+/g, '-') === projectSlug
    )
  );
}
