# Girasol CLI

A powerful command-line interface for managing and interacting with the Girasol program. This CLI tool enables you to create and manage markets efficiently from your terminal.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Commands](#commands)
    - [Initialize Program](#initialize-program)
    - [Create Market](#create-market)
    - [Dialect SDK Integration](#dialect-sdk-integration)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended) - [Download here](https://nodejs.org/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
    - Create a `.env` file in the project root
    - Add necessary environment variables (see Configuration section below)

## Getting Started

1. Build the project:
   ```bash
   npm run start
   ```

2. Navigate to the distribution folder:
   ```bash
   cd dist
   ```

3. View available commands:
   ```bash
   node index.js help
   ```

## Commands

### Initialize Program

Initialize a new Girasol program with custom parameters.

```bash
node index.js initialize-program <protocol_admin> <base_points_fee> <protocol_fee_collector>
```

| Parameter | Description | Example |
|-----------|-------------|----------|
| protocol_admin | Admin account of the protocol | AdminAccount123 |
| base_points_fee | Fee in base points (20 points = 2%) | 20 |
| protocol_fee_collector | Account to collect protocol fees | FeeCollectorAccount456 |

### Create Market

Create a new market with specified parameters.

```bash
node index.js initialize-program <price_feed_sol_usd_account> <price_feed_id> <round_duration> \
    <min_top_up> <max_top_up> <market_ticker> <flat_range> <market_fee> \
    <market_fee_collector_account>
```

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| price_feed_sol_usd_account | SOL/USD price account | SolUsdPriceAccount123 |
| price_feed_id | Market Pyth price feed | PythPriceFeed456 |
| round_duration | Round duration in seconds | 300 (5 minutes) |
| min_top_up | Minimum top-up to enter a round | 0.001 (~20 cents) |
| max_top_up | Maximum top-up for competitive rounds | 1 |
| market_ticker | Market ticker symbol | SOL |
| flat_range | Flat range in basis points | 50 (0.05%) |
| market_fee | Market creator fee percentage | 2 |
| market_fee_collector_account | Fee collector account | MarketFeeCollector789 |

### Dialect SDK Integration

#### Create Dialect SDK
Initialize the Dialect SDK for notification management:
```bash
node index.js create-dialect-sdk
```

#### Create Notification
Set up a new notification type:
```bash
node index.js create-dialect-notification <human_readable_id> <name> <ordering_priority> \
    <trigger_description> <enable_by_default>
```

| Parameter | Description | Example |
|-----------|-------------|----------|
| human_readable_id | Unique identifier | latest_updates |
| name | Display name | "Latest Updates" |
| ordering_priority | Priority level (0 = highest) | 0 |
| trigger_description | Notification trigger details | "Get the latest news" |
| enable_by_default | Default enabled state | true |

## Contributing

We welcome contributions to the Girasol CLI! Please feel free to submit issues and pull requests.

## Configuration

Create a `.env` file in the project root with the following variables:
```bash
# Required environment variables
# Add your specific configuration requirements here
```


