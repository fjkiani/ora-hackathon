export interface WhitepaperSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

export const whitepaperData: WhitepaperSection[] = [
  {
    id: "abstract",
    title: "Abstract",
    content: "DefiKSA is pioneering the integration of Artificial Intelligence (AI) with verifiable blockchain technology to deliver Sharia-compliant financial solutions tailored for the Kingdom of Saudi Arabia (KSA). Leveraging the transparency and security of the ORA Framework, DefiKSA provides intelligent tools and autonomous agents designed to navigate the complexities of digital finance while adhering strictly to Islamic principles. Our platform aims to empower users in KSA with secure, efficient, and compliant financial management and investment opportunities.",
  },
  {
    id: "introduction",
    title: "Introduction: Compliant Finance for KSA",
    content: "The rapidly evolving landscape of digital finance presents unique opportunities and challenges within the KSA market. There is a growing need for trustworthy, efficient financial tools that align with Sharia principles, offering transparency and avoiding prohibited elements like Riba (interest) and Gharar (excessive uncertainty). Traditional financial systems can be slow and costly, while many mainstream DeFi solutions lack the necessary compliance frameworks.",
    subsections: [
      {
        id: "problem",
        title: "The Compliance Challenge",
        content: "Individuals and institutions in KSA seeking digital financial solutions face difficulties in verifying Sharia compliance, navigating complex international platforms, and avoiding participation in non-permissible activities prevalent in the conventional DeFi space. Ensuring adherence to principles like risk-sharing, asset-backing, and ethical screening requires specialized tools and constant vigilance."
      },
      {
        id: "solution",
        title: "DefiKSA: Intelligent & Compliant",
        content: "DefiKSA addresses these challenges by providing a dedicated platform built on verifiable blockchain technology (ORA Framework) and powered by AI. We offer intelligent tools for compliance screening, automated portfolio management based on Sharia guidelines, and access to permissible financial opportunities, all designed with the specific needs and values of the KSA market in mind."
      }
    ]
  },
  {
    id: "technology",
    title: "Technology & Architecture",
    content: "DefiKSA is built on a robust technological foundation that combines verifiable AI, secure blockchain integration via the ORA Framework, and transparent data analytics to support Sharia-compliant operations.",
    subsections: [
      {
        id: "tech-ai",
        title: "AI Framework",
        content: "Our AI framework incorporates machine learning models trained on financial data and Sharia compliance rules. It performs compliant analysis, risk assessment, and powers autonomous agents capable of making decisions aligned with Islamic principles."
      },
      {
        id: "tech-ora",
        title: "ORA Integration",
        content: "Integration with the ORA Framework provides verifiable execution for AI agents on the blockchain. This ensures transparency and auditability, crucial tenets for building trust and aligning with Sharia requirements for clarity in transactions."
      },
      {
        id: "tech-analytics",
        title: "Blockchain Analytics",
        content: "Real-time analytics monitor on-chain activity, tracking permissible asset flows, protocol compliance metrics, and market data relevant to Sharia-aligned strategies. This data informs both AI agents and user dashboards."
      },
      {
        id: "tech-security",
        title: "Security Architecture",
        content: "The platform implements a multi-layered security approach, combining secure smart contracts, formal verification methods, continuous monitoring, and automated threat detection. All smart contracts undergo rigorous auditing to ensure asset protection."
      }
    ]
  },
  {
    id: "tokenomics",
    title: "Platform Token & Governance",
    content: "The platform's native token facilitates participation in the ecosystem and plays a role in its governance, ensuring alignment with user interests and compliance principles.",
    subsections: [
      {
        id: "tokenomics-utility",
        title: "Token Utility",
        content: "The token grants access to premium platform features (like advanced compliant AI models and analytics) and allows participation in governance votes. It may also be used for discounts on permissible platform service fees."
      },
      {
        id: "tokenomics-governance",
        title: "Governance Mechanism",
        content: "The governance system empowers token holders to propose and vote on key decisions related to platform integrity, Sharia compliance parameters, protocol upgrades, and the allocation of ecosystem resources, ensuring community alignment."
      },
      {
        id: "tokenomics-distribution",
        title: "Token Distribution",
        content: "Initial token distribution ensures broad participation while incentivizing long-term commitment. Allocations include Community/Ecosystem Growth (40%), Team/Advisors (20%, vested), Treasury (15%), Liquidity Provision (15%), and Early Backers (10%)."
      }
    ]
  },
  {
    id: "roadmap",
    title: "Development Roadmap",
    content: "Our development plan outlines a strategic progression towards building a comprehensive, compliant financial ecosystem for KSA.",
    subsections: [
      {
        id: "roadmap-phase1",
        title: "Phase 1: Foundation (Q1 2025)",
        content: "Platform launch with core Sharia screening engine, compliant portfolio tracking, and initial AI agent capabilities (monitoring, basic allocation). Beta testing focused on KSA users. Establish Sharia advisory board. (Built upon winning NYU Hackathon project - March 2025)."
      },
      {
        id: "roadmap-phase2",
        title: "Phase 2: Compliance & Expansion (Q2 2025)",
        content: "Enhance compliance engine based on advisory board feedback. Integrate more verified compliant protocols/pools. Launch governance token and initial voting on compliance parameters. Introduce basic cross-border payment agent (e.g., stablecoin transfers)."
      },
      {
        id: "roadmap-phase3",
        title: "Phase 3: Intelligence & Payments (Q3 2025)",
        content: "Deploy advanced autonomous agents for compliant strategies (profit-sharing management, Zakat calculation). Expand cross-border payment agent capabilities (FX optimization, multi-currency). Implement full decentralized governance."
      },
      {
        id: "roadmap-phase4",
        title: "Phase 4: Ecosystem Growth (Q4 2025+)",
        content: "Develop institutional partnerships in KSA. Seek relevant certifications/audits for compliance framework. Explore integration with traditional Islamic finance institutions. Continue expanding compliant product offerings and agent capabilities."
      }
    ]
  }
]; 