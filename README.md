<h1 align="center">Discord Bot Base</h1>

> A lightweight, scalable TypeScript foundation for building Discord bots with native sharding support.

## Features

- **TypeScript** - Full type-safety with strict mode
- **Worker Sharding** - Built-in worker sharding for scaling across multiple servers
- **Discord.js Core** - Using low-level Discord.js core for maximum control and flexibility
- **Voice Support** - Voice channel support with Opus codec
- **i18n Ready** - Internationalization support with i18next
- **Extensible** - Optional integrations with Supabase and Redis
- **Modern Setup** - ESM modules, Prettier formatting, strict TypeScript

## How do I self-host?

**Requirements:**

- [Node.js](https://nodejs.org/) (v22+ recommended)
- A Discord bot token

**Setup:**

1. Clone the repository:

```bash
git clone https://github.com/your-repo/discord-bot-base
cd discord-bot-base
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Edit the `.env` file with your bot token and other configuration:

5. Build and run:

```bash
npm run build
npm start
```

## Available Commands

```bash
npm run build      # Build TypeScript to JavaScript
npm run start      # Run the bot
npm run register   # Register slash commands
npm run format     # Format code with Prettier
```

## Project Structure

```
src/
├── bot/
│   ├── commands/
│   │   ├── chatInput/         # Slash commands
│   │   ├── userContext/       # User context menu commands
│   │   ├── messageContext/    # Message context menu commands
│   │   └── primaryEntryPoint/ # Primary entry point commands
│   ├── components/
│   │   ├── buttons/           # Button interactions
│   │   ├── selectMenus/       # Select menu interactions
│   │   └── modals/            # Modal interactions
│   ├── events/                # Gateway event handlers
│   ├── index.ts               # Main bot setup
│   ├── register.ts            # Slash command registration
│   └── worker.ts              # Worker sharding
├── helpers/
│   ├── command.ts             # Command helper utilities
│   ├── component.ts           # Component helper utilities
│   └── event.ts               # Event helper utilities
├── types/
│   ├── types.ts               # Core type definitions
│   ├── emojis.ts              # Emoji constants
│   ├── permissions.ts         # Permission types
│   └── declarations.d.ts      # Type declarations
└── utils/
    ├── adapter.ts             # Voice adapter
    ├── env.ts                 # Environment variables
    ├── i18n.ts                # Internationalization
    ├── markdown.ts            # Markdown utilities
    ├── rateLimit.ts           # Rate limiting
    ├── redis.ts               # Redis integration
    ├── request.ts             # HTTP requests
    ├── subscription.ts        # Subscription utilities
    ├── supabase.ts            # Supabase integration
    └── utils.ts               # General utilities
```

## Optional Integrations

### Supabase (PostgreSQL Database)

Set `supabase_url` and `supabase_api_key` in `.env` to enable.

### Redis (Caching)

Set Redis credentials in `.env` to enable. The bot does not include built-in caching, but Redis integration is available if you want to add it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
