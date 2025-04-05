# AI-Powered Crypto Hedge Fund Platform

## 🏆 NYU Hackathon Winner

This project was the winning submission for the NYU Hackathon, showcasing an innovative integration of AI and blockchain technologies through the ORA Framework.

## 📝 Project Overview

Our platform bridges the gap between traditional finance and decentralized finance (DeFi) by creating an intelligent system where AI agents can autonomously interact with blockchain networks to execute complex financial strategies. The application provides a comprehensive dashboard for monitoring DeFi protocols, assessing risks, and creating customized AI agents that can manage assets across multiple protocols.

## 🔑 Key Features

- **Interactive ORA Framework Visualization**: Step-by-step visualization of how AI agents interact with blockchain networks, complete with animations and simulated transactions
- **Risk Assessment Tools**: Comprehensive analysis of various risk factors in DeFi protocols
- **Protocol Monitoring Dashboard**: Real-time monitoring of key metrics for DeFi protocols
- **Agent Creation Interface**: User-friendly interface for creating and deploying AI agents with specific parameters
- **Transaction Logs**: Detailed logs of transactions executed by AI agents
- **Claude AI Assistant**: Integrated AI assistant to answer DeFi-related questions

## 🛠️ Our Approach

### Technical Architecture

1. **Frontend**: React-based dashboard with interactive visualizations and user interfaces
2. **AI Integration**: Claude API integration for the AI assistant and agent suggestion features
3. **Blockchain Connectivity**: ORA Framework integration for connecting AI agents to blockchain networks
4. **Data Visualization**: Chart.js for rendering financial data and protocol metrics
5. **Responsive Design**: Mobile-friendly interface that works across devices

### Development Process

1. **Research Phase**: Studied the ORA Framework documentation and DeFi protocols to understand the integration points
2. **Design Phase**: Created wireframes and user flows for the dashboard and visualization components
3. **Implementation Phase**: Developed the frontend components, integrated the Claude API, and created the ORA Framework visualization
4. **Testing Phase**: Tested the application with various scenarios and refined the user experience
5. **Presentation Phase**: Prepared the demo and presentation for the hackathon judges

## 🚀 Problems Solved

Our solution addresses several critical challenges in the DeFi space:

1. **Technical Barrier**: Reduces the technical knowledge required to interact with DeFi protocols
2. **Risk Management**: Provides comprehensive risk assessment tools for evaluating DeFi investments
3. **Transparency**: Offers clear visualization of how AI agents operate on the blockchain
4. **Security**: Ensures secure, verifiable AI-driven transactions through the ORA Framework
5. **User Experience**: Creates an intuitive interface for managing complex DeFi operations

## 🔧 Installation

```bash
# Install dependencies
yarn

# Run the frontend
cd frontend
npm start
```

## 🧪 Run Tests

```bash
# Run tests
yarn hardhat test

# Run tests with coverage report
yarn hardhat coverage
```

## 🌐 Future Enhancements

- Integration with additional DeFi protocols
- Enhanced AI agent capabilities for more complex strategies
- Mobile application development
- Real-time alerts and notifications
- Advanced portfolio analytics

## 🙏 Acknowledgements

Special thanks to the ORA team for providing the framework that made this project possible, and to the NYU Hackathon organizers for the opportunity to showcase our work. 

Roadmap:
## Project Overview
The goal is to analyze the smart contracts in the `/contracts` directory to understand the system architecture and how we can implement these contracts in our application.

## Smart Contract Analysis

### Core Token System

1. **Zoinks (HZUSD)** - The main stablecoin of the system
   - ERC20 token pegged 1:1 with BUSD
   - Has emission mechanism based on TWAP (Time-Weighted Average Price)
   - Distribution of emission: 65% to PoolRewardDistributor, 20% to Seniorage, 15% for Snacks
   - Has role-based access control and pausable functionality
   - Max supply: 35,000,000,000,000 tokens

2. **Snacks (SNACK)** - Reward token with deflationary mechanics
   - Complex token with snapshots for fee distribution
   - Integrates with BtcSnacks and EthSnacks
   - Has fee distribution mechanism
   - Uses PRBMath library for precise calculations
   - Implements SnacksBaseV2 for core functionality

3. **BtcSnacks** - BTC-pegged reward token
   - Similar to Snacks but tied to BTC price
   - Distributes fees to Snacks holders

4. **EthSnacks** - ETH-pegged reward token
   - Similar to Snacks but tied to ETH price
   - Distributes fees to Snacks holders

### Core Infrastructure

1. **RolesManager** - Base contract for role-based access control
   - Extends OpenZeppelin's AccessControl and Pausable
   - Defines key roles: DEFAULT_ADMIN_ROLE, PAUSER_ROLE, AUTHORITY_ROLE
   - Used by most contracts in the system

2. **SnacksBase/SnacksBaseV2** - Base implementation for Snacks tokens
   - Implements core token functionality
   - Handles fee calculations and distributions
   - Manages excluded holders

3. **AveragePriceOracle** - Price oracle for TWAP calculations
   - Used by Zoinks for emission control
   - Tracks time-weighted average prices

### Staking and Rewards

1. **SnacksPool** - Staking pool for Snacks tokens
   - Allows users to stake Snacks and earn rewards
   - Supports multiple reward tokens
   - Integrates with LunchBox
   - Has investment system integration

2. **LunchBox** - Reward distribution system
   - Distributes rewards to stakers
   - Handles BTC and ETH rewards
   - Manages reward rates and durations

3. **PoolRewardDistributor** - Distributes rewards to pools
   - Receives 65% of Zoinks emissions
   - Distributes rewards to various pools

4. **Pulse** - Fee distribution mechanism
   - Receives portion of Snacks from emissions
   - Distributes fees to token holders

### Treasury and Management

1. **Seniorage** - Treasury management
   - Receives BUSD from Zoinks minting
   - Manages fund allocation to various wallets and purposes
   - Handles liquidity provision to DEXes

2. **HoldingFeeDistributor** - Distributes holding fees
   - Manages fee distribution for token holders

3. **SystemStopper** - Emergency stop mechanism
   - Can pause the entire system in case of emergency

### IDO (Initial DEX Offering) System

1. **IDOFactory** - Creates and manages IDO pools
   - Deploys new IDO pools and tokens
   - Tracks IDO participants and their info

2. **IDOPool** - Manages individual IDO fundraising
   - Handles fund collection and distribution
   - Manages token distribution to participants

3. **IDOToken** - Token for IDO projects
   - Standard ERC20 with specific IDO functionality

4. **IDODistributor** - Distributes IDO tokens
   - Handles token distribution after IDO completion

5. **IDOLunchBoxPool** - Special pool for IDO participants
   - Provides rewards to IDO participants

### DEX Integration

1. **PancakeSwapPool/ApeSwapPool/BiSwapPool** - DEX liquidity pool interfaces
   - Integrates with various DEXes on BSC
   - Used for swapping tokens and providing liquidity

## Implementation Strategy

1. **Frontend Integration**
   [X] Analyze contract interfaces and functionality
   [ ] Create Web3 service layer to interact with contracts
   [ ] Implement wallet connection and transaction handling
   [ ] Build UI components for each contract interaction

2. **Smart Contract Deployment**
   [ ] Set up Hardhat deployment scripts
   [ ] Configure contract parameters for test environment
   [ ] Create migration scripts for contract deployment
   [ ] Implement contract verification on BSCScan

3. **Testing Strategy**
   [ ] Create unit tests for each contract
   [ ] Implement integration tests for contract interactions
   [ ] Set up end-to-end tests for user flows
   [ ] Create test fixtures and mock data

4. **Security Considerations**
   [ ] Audit role-based access control implementation
   [ ] Review fee calculations and distributions
   [ ] Check for reentrancy vulnerabilities
   [ ] Verify mathematical calculations for precision issues

5. **User Experience**
   [ ] Design intuitive interfaces for complex contract interactions
   [ ] Implement transaction status tracking and notifications
   [ ] Create educational content about the system mechanics
   [ ] Build analytics dashboards for system metrics

## Key Insights

1. The system is a complex DeFi ecosystem with multiple interconnected tokens and contracts
2. Role-based access control is used extensively for security
3. The system uses mathematical libraries for precise calculations
4. There's a strong focus on fee distribution and rewards
5. The IDO system provides a complete fundraising solution
6. The contracts are designed to be pausable for emergency situations
7. The system integrates with multiple DEXes on BSC

## Next Steps

[ ] Create Web3 service layer for contract interactions
[ ] Implement wallet connection in the frontend
[ ] Build UI components for token management (mint, stake, etc.)
[ ] Develop dashboard for monitoring system metrics
[ ] Implement IDO participation interface

## Current Task
Enhancing Investment Analysis System with Deep Reasoning and Feedback Loop

## Project Overview
The goal is to enhance the existing investment analysis system by:
1. Implementing a feedback loop between initial market quote analysis and deep reasoning analysis
2. Utilizing experimental deep reasoning models for more sophisticated analysis
3. Generating learning points to continuously improve the analysis process
4. Creating an enhanced analysis pipeline that integrates these improvements
5. Integrating options analysis with the enhanced analysis pipeline
6. Building a Streamlit interface to visualize and interact with the analysis

## Progress

### 1. Deep Reasoning Implementation
[X] Create deep reasoning analysis function
  [X] Implement standard deep reasoning in `deep_reasoning_fix.py`
  [X] Implement experimental model version in `deep_reasoning_fix_experimental.py`
  [X] Add fallback mechanism to standard model if experimental model fails
  [X] Create test script for deep reasoning analysis