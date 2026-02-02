export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  website: string;
  whitepaper?: string;
  github?: string;
  twitter?: string;
  discord?: string;
  
  // Task types
  taskTypes: {
    inference: boolean;
    training: boolean;
    finetuning: boolean;
  };
  
  // Output semantics
  outputSemantics: 'deterministic' | 'probabilistic' | 'hybrid';
  
  // Verification
  verification: {
    mechanism: string;
    trustModel: string;
    knownRisks: string[];
  };
  
  // Economics
  economics: {
    pricingModel: string;
    isSubsidized: boolean;
    tokenSymbol?: string;
  };
  
  // Network
  network: {
    workerRequirements: string;
    workerCount?: number;
    historicTasks?: number;
  };
  
  // Governance
  governance: {
    model: string;
    upgradeability: string;
  };
  
  // Metrics
  metrics: {
    inferencePrice?: string;
    trainingPrice?: string;
    verificationOverhead?: string;
  };
  
  // Status
  status: 'mainnet' | 'testnet' | 'development';
  
  // Tags
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'gensyn',
    name: 'Gensyn',
    tagline: 'Decentralized compute protocol for ML training',
    description: `Gensyn is building a protocol for decentralized machine learning training. The core innovation is their probabilistic proof-of-learning mechanism that enables verification of training work without re-execution.

The protocol coordinates heterogeneous compute resources for distributed training tasks, with economic incentives aligned through their native token. Gensyn focuses specifically on training workloads, distinguishing it from inference-focused alternatives.

Key technical innovations include gradient compression for efficient communication, fault-tolerant training that continues despite node failures, and a novel verification system that samples and validates training progress probabilistically.`,
    website: 'https://gensyn.ai',
    whitepaper: 'https://docs.gensyn.ai/whitepaper',
    github: 'https://github.com/gensyn-ai',
    twitter: 'https://twitter.com/genaboratory',
    discord: 'https://discord.gg/gensyn',
    taskTypes: {
      inference: false,
      training: true,
      finetuning: true,
    },
    outputSemantics: 'probabilistic',
    verification: {
      mechanism: 'Probabilistic Proof-of-Learning with gradient checkpoints',
      trustModel: 'Economic security through staking, probabilistic verification',
      knownRisks: [
        'Verification sampling may miss some invalid work',
        'Economic attacks possible with sufficient stake',
        'Gradient compression may affect model quality',
      ],
    },
    economics: {
      pricingModel: 'Market-based pricing with compute auctions',
      isSubsidized: true,
      tokenSymbol: 'GEN',
    },
    network: {
      workerRequirements: 'GPU with 8GB+ VRAM, stable internet connection',
      workerCount: 2340,
      historicTasks: 15420,
    },
    governance: {
      model: 'Token-weighted governance for protocol parameters',
      upgradeability: 'Upgradeable contracts with timelock',
    },
    metrics: {
      trainingPrice: '$0.15/GPU-hour (testnet)',
      verificationOverhead: '~5% of compute',
    },
    status: 'testnet',
    tags: ['training', 'verification', 'GPU'],
  },
  {
    slug: 'bittensor',
    name: 'Bittensor',
    tagline: 'Decentralized AI network with subnet architecture',
    description: `Bittensor is a decentralized network that creates markets for machine intelligence. The network uses a unique subnet architecture where each subnet represents a specific type of AI capability.

Validators in each subnet evaluate miner outputs and allocate rewards based on quality. This creates a competitive market for AI services across text generation, image creation, translation, and many other domains.

The TAO token serves as both the incentive mechanism and the medium of exchange across subnets. Bittensor's approach differs from compute-focused protocols by emphasizing output quality over raw computation.`,
    website: 'https://bittensor.com',
    whitepaper: 'https://bittensor.com/whitepaper',
    github: 'https://github.com/opentensor',
    twitter: 'https://twitter.com/opentensor',
    discord: 'https://discord.gg/bittensor',
    taskTypes: {
      inference: true,
      training: true,
      finetuning: true,
    },
    outputSemantics: 'probabilistic',
    verification: {
      mechanism: 'Validator consensus with quality scoring',
      trustModel: 'Stake-weighted validator selection, reputation systems',
      knownRisks: [
        'Validator collusion possible in smaller subnets',
        'Quality metrics may not capture all dimensions',
        'Centralization risk in validator set',
      ],
    },
    economics: {
      pricingModel: 'Emission-based rewards, market pricing for queries',
      isSubsidized: true,
      tokenSymbol: 'TAO',
    },
    network: {
      workerRequirements: 'Varies by subnet, typically GPU required',
      workerCount: 12500,
      historicTasks: 892000,
    },
    governance: {
      model: 'Senate governance with TAO staking',
      upgradeability: 'Substrate runtime upgrades',
    },
    metrics: {
      inferencePrice: 'Varies by subnet ($0.001-$0.10/query)',
      trainingPrice: 'Emission-based, not direct pricing',
      verificationOverhead: 'Validator compute (~10% of network)',
    },
    status: 'mainnet',
    tags: ['inference', 'training', 'subnets', 'marketplace'],
  },
  {
    slug: '0g',
    name: '0G',
    tagline: 'Modular AI blockchain with data availability focus',
    description: `0G (Zero Gravity) is building modular infrastructure for AI applications, with a focus on data availability and storage optimized for ML workloads.

The protocol provides specialized storage for ML artifacts including model weights, datasets, and intermediate outputs. Their streaming access feature allows inference providers to load models without downloading entire files.

0G's approach complements compute-focused protocols by solving the data layer challenges that become bottlenecks at scale.`,
    website: 'https://0g.ai',
    whitepaper: 'https://docs.0g.ai',
    github: 'https://github.com/0glabs',
    twitter: 'https://twitter.com/0aboratoryHQ',
    discord: 'https://discord.gg/0glabs',
    taskTypes: {
      inference: false,
      training: false,
      finetuning: false,
    },
    outputSemantics: 'deterministic',
    verification: {
      mechanism: 'Data availability sampling, erasure coding proofs',
      trustModel: 'Cryptographic proofs for data availability',
      knownRisks: [
        'Data integrity depends on erasure coding parameters',
        'Storage provider incentive alignment',
      ],
    },
    economics: {
      pricingModel: 'Storage and bandwidth pricing',
      isSubsidized: true,
      tokenSymbol: '0G',
    },
    network: {
      workerRequirements: 'Storage nodes with high bandwidth',
      workerCount: 890,
      historicTasks: 45000,
    },
    governance: {
      model: 'Token governance for protocol parameters',
      upgradeability: 'Modular upgrade mechanism',
    },
    metrics: {
      inferencePrice: 'N/A (storage focused)',
      verificationOverhead: '< 1% for DA proofs',
    },
    status: 'testnet',
    tags: ['storage', 'data-availability', 'infrastructure'],
  },
  {
    slug: 'sentient',
    name: 'Sentient',
    tagline: 'Open AGI platform with model marketplace',
    description: `Sentient is building an open platform for AI development with a focus on model ownership and fair compensation for creators.

Their decentralized model marketplace enables creators to list models with built-in royalty tracking. Usage is tracked on-chain, enabling automatic compensation even for derivative works and fine-tuned models.

Sentient's approach addresses the model attribution problem that becomes increasingly important as AI models become more valuable.`,
    website: 'https://sentient.foundation',
    whitepaper: 'https://docs.sentient.foundation',
    github: 'https://github.com/sentient-foundation',
    twitter: 'https://twitter.com/sentaboratoryfdn',
    discord: 'https://discord.gg/sentient',
    taskTypes: {
      inference: true,
      training: false,
      finetuning: true,
    },
    outputSemantics: 'probabilistic',
    verification: {
      mechanism: 'TEE-based usage verification, on-chain tracking',
      trustModel: 'Hardware trust (TEE) + economic incentives',
      knownRisks: [
        'Off-chain usage difficult to track',
        'TEE vulnerabilities',
        'Model fingerprinting limitations',
      ],
    },
    economics: {
      pricingModel: 'Creator-set pricing with marketplace dynamics',
      isSubsidized: true,
      tokenSymbol: 'SENT',
    },
    network: {
      workerRequirements: 'TEE-enabled hardware for verification',
      workerCount: 450,
      historicTasks: 23000,
    },
    governance: {
      model: 'Foundation governance transitioning to DAO',
      upgradeability: 'Smart contract upgrades with governance',
    },
    metrics: {
      inferencePrice: 'Model-dependent, creator-set',
      verificationOverhead: '~2% for TEE attestation',
    },
    status: 'mainnet',
    tags: ['marketplace', 'ownership', 'inference'],
  },
  {
    slug: 'akash-network',
    name: 'Akash Network',
    tagline: 'Decentralized cloud compute marketplace',
    description: `Akash Network is a decentralized cloud computing marketplace that has expanded to support ML workloads. Originally focused on general compute, Akash has introduced ML-optimized features including GPU memory management and model caching.

The network connects compute providers with users through a reverse auction system, typically achieving 60-80% cost savings compared to centralized alternatives.

Akash's approach is infrastructure-focused rather than ML-native, meaning it provides the compute layer without built-in ML verification or coordination.`,
    website: 'https://akash.network',
    whitepaper: 'https://akash.network/docs',
    github: 'https://github.com/akash-network',
    twitter: 'https://twitter.com/akaboratorywork',
    discord: 'https://discord.gg/akash',
    taskTypes: {
      inference: true,
      training: true,
      finetuning: true,
    },
    outputSemantics: 'deterministic',
    verification: {
      mechanism: 'Provider reputation, escrow-based payments',
      trustModel: 'Economic incentives through staking and reputation',
      knownRisks: [
        'No built-in computation verification',
        'Provider reliability varies',
        'Limited recourse for incorrect outputs',
      ],
    },
    economics: {
      pricingModel: 'Reverse auction marketplace',
      isSubsidized: false,
      tokenSymbol: 'AKT',
    },
    network: {
      workerRequirements: 'Container hosting capability, optional GPU',
      workerCount: 847,
      historicTasks: 156000,
    },
    governance: {
      model: 'Cosmos SDK governance with AKT staking',
      upgradeability: 'Cosmos governance proposals',
    },
    metrics: {
      inferencePrice: '$0.12/1M tokens (LLM)',
      trainingPrice: '$0.08/GPU-hour',
      verificationOverhead: 'None (trust-based)',
    },
    status: 'mainnet',
    tags: ['compute', 'marketplace', 'infrastructure'],
  },
  {
    slug: 'livepeer',
    name: 'Livepeer',
    tagline: 'Decentralized video infrastructure expanding to AI',
    description: `Livepeer is a decentralized video transcoding network that is expanding to support general AI workloads. With over 2,400 orchestrator nodes, Livepeer has proven infrastructure for coordinating GPU workloads at scale.

The expansion to AI leverages existing infrastructure and economic mechanisms while introducing AI-specific features like model-specific orchestrator selection and quality-weighted task routing.

Livepeer's experience with video verification provides a foundation for AI output verification, though significant adaptations are required.`,
    website: 'https://livepeer.org',
    whitepaper: 'https://livepeer.org/docs',
    github: 'https://github.com/livepeer',
    twitter: 'https://twitter.com/livepeer',
    discord: 'https://discord.gg/livepeer',
    taskTypes: {
      inference: true,
      training: false,
      finetuning: false,
    },
    outputSemantics: 'deterministic',
    verification: {
      mechanism: 'Redundant transcoding with pixel comparison (video), TBD for AI',
      trustModel: 'Economic slashing for incorrect outputs',
      knownRisks: [
        'AI verification mechanism not yet defined',
        'Video verification may not translate to AI',
        'Orchestrator concentration',
      ],
    },
    economics: {
      pricingModel: 'Market pricing through orchestrator competition',
      isSubsidized: true,
      tokenSymbol: 'LPT',
    },
    network: {
      workerRequirements: 'GPU with video encoding support',
      workerCount: 2400,
      historicTasks: 2300000,
    },
    governance: {
      model: 'LPT staking governance',
      upgradeability: 'Protocol governance for upgrades',
    },
    metrics: {
      inferencePrice: 'TBD for AI workloads',
      verificationOverhead: '~20% for video (redundant encoding)',
    },
    status: 'mainnet',
    tags: ['video', 'inference', 'infrastructure'],
  },
  {
    slug: 'fluence',
    name: 'Fluence',
    tagline: 'Decentralized serverless compute platform',
    description: `Fluence provides decentralized serverless computing with Aqua, a language for composing distributed applications. Aqua-ML extends this to support declarative ML pipeline composition.

The platform excels at orchestrating complex workflows across multiple providers, with built-in fault tolerance and provider selection based on requirements.

Fluence's approach is particularly suited for multi-model pipelines and ensemble methods where coordination across providers is essential.`,
    website: 'https://fluence.network',
    whitepaper: 'https://fluence.network/docs',
    github: 'https://github.com/fluencelabs',
    twitter: 'https://twitter.com/fluaboratorylabs',
    discord: 'https://discord.gg/fluence',
    taskTypes: {
      inference: true,
      training: false,
      finetuning: false,
    },
    outputSemantics: 'deterministic',
    verification: {
      mechanism: 'Aqua execution proofs, provider reputation',
      trustModel: 'Cryptographic execution proofs + economic incentives',
      knownRisks: [
        'Provider reliability varies',
        'Complex pipelines increase failure surface',
        'Limited ML-specific verification',
      ],
    },
    economics: {
      pricingModel: 'Per-execution pricing, provider-set rates',
      isSubsidized: true,
      tokenSymbol: 'FLT',
    },
    network: {
      workerRequirements: 'Fluence node software, optional GPU',
      workerCount: 560,
      historicTasks: 89000,
    },
    governance: {
      model: 'FLT token governance',
      upgradeability: 'Protocol upgrades through governance',
    },
    metrics: {
      inferencePrice: '$0.001-$0.05 per pipeline execution',
      verificationOverhead: '~3% for execution proofs',
    },
    status: 'mainnet',
    tags: ['serverless', 'orchestration', 'pipelines'],
  },
  {
    slug: 'autonolas',
    name: 'Autonolas',
    tagline: 'Decentralized autonomous AI agent framework',
    description: `Autonolas provides infrastructure for deploying and coordinating autonomous AI agents in decentralized settings. The framework includes agent registration, task coordination, and safety mechanisms.

The protocol addresses coordination challenges that arise when multiple autonomous agents interact, including negotiation, resource allocation, and safety bounds.

Autonolas occupies a unique position in the DeML landscape by focusing on agent coordination rather than raw compute or model serving.`,
    website: 'https://autonolas.network',
    whitepaper: 'https://docs.autonolas.network',
    github: 'https://github.com/valory-xyz',
    twitter: 'https://twitter.com/autonolas',
    discord: 'https://discord.gg/autonolas',
    taskTypes: {
      inference: true,
      training: false,
      finetuning: false,
    },
    outputSemantics: 'probabilistic',
    verification: {
      mechanism: 'Multi-agent consensus, stake-weighted voting',
      trustModel: 'Economic security through bonding, reputation',
      knownRisks: [
        'Agent coordination complexity',
        'Emergent behavior unpredictability',
        'Governance attack vectors',
      ],
    },
    economics: {
      pricingModel: 'Service-based pricing, agent bonding',
      isSubsidized: true,
      tokenSymbol: 'OLAS',
    },
    network: {
      workerRequirements: 'Agent operator setup, staking requirements',
      workerCount: 340,
      historicTasks: 67000,
    },
    governance: {
      model: 'OLAS governance with veOLAS locking',
      upgradeability: 'Governance-controlled upgrades',
    },
    metrics: {
      inferencePrice: 'Service-dependent',
      verificationOverhead: '~8% for consensus',
    },
    status: 'mainnet',
    tags: ['agents', 'coordination', 'autonomous'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}
