# HeyMax Platform - Turbo Monorepo

A modern cross-platform application built with Turborepo, showcasing a seamless experience across web and mobile.

## Project Structure

```
heymax/
├── apps/
│   ├── mobile/       # React Native (Expo) app for iOS and Android
│   └── web/          # Next.js app for web
├── packages/
│   └── ui/           # Shared UI components
├── package.json
└── turbo.json
```

## Key Technologies

- **Turborepo**: For efficient monorepo management
- **React 18.2.0**: Used across all platforms
- **React Native 0.76.7**: For the mobile app
- **Next.js 15.2.0**: For the web app
- **TypeScript**: For type safety across the codebase
- **React Navigation**: For mobile app navigation
- **Shared Components**: Cross-platform UI components

## Features

- **Cross-Platform UI**: Consistent user experience across web and mobile
- **React Native Web Integration**: Web components compatible with React Native
- **Onboarding Flow**: Interactive onboarding experience on both platforms
- **Shop & Earn**: Horizontal selection interface for shopping categories
- **Travel Features**: Integration with travel booking and miles

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- Yarn
- For mobile development: iOS Simulator or Android Emulator

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/bobhuynh6889/heymax.git
   cd heymax
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Development

To run all apps and packages in development mode:

```bash
yarn dev
```

To run a specific app:

```bash
# For the web app
yarn workspace web dev

# For the mobile app
yarn workspace mobile dev
# or
cd apps/mobile && yarn ios
```

### Building

To build all apps and packages:

```bash
yarn build
```

To build a specific package:

```bash
yarn workspace ui build
```

## Detailed Documentation

Each directory contains its own README with more specific information:

- [Mobile App](./apps/mobile/README.md)
- [Web App](./apps/web/README.md)
- [UI Package](./packages/ui/README.md)
- [Mobile Source](./apps/mobile/src/README.md)
- [Web App Components](./apps/web/app/README.md)

## Troubleshooting

If you encounter React version compatibility issues:
- Ensure React 18.2.0 is used consistently across packages
- Check that React Native and react-native-web versions are compatible
- Rebuild the UI package if you've updated React versions: `yarn workspace ui build`

## License

MIT 
