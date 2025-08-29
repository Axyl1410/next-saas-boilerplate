# Next.js SaaS Boilerplate

A comprehensive, production-ready starter kit designed to help you launch your SaaS application in record time. Built with modern technologies and best practices for authentication, database management, and user experience.

## 🚀 Features

### 🔐 Authentication & Security

- **Multi-provider Authentication**: Support for email/password, Google, GitHub, and Discord
- **Email Verification**: Required email verification with customizable templates
- **Password Reset**: Secure password reset functionality with email delivery
- **Account Linking**: Link multiple social accounts to a single user account
- **Rate Limiting**: Built-in rate limiting for security
- **Password Security**: Integration with HaveIBeenPwned for compromised password detection
- **Session Management**: Secure session handling with MongoDB

### 🎨 Modern UI/UX

- **HeroUI v2**: Beautiful, accessible component library
- **Tailwind CSS v4**: Utility-first CSS framework with HeroUI integration
- **Dark Mode**: Built-in dark/light theme switching
- **Responsive Design**: Mobile-first responsive layouts
- **Framer Motion**: Smooth animations and transitions
- **Form Validation**: Real-time form validation with error handling

### 🗄️ Database & Backend

- **MongoDB**: NoSQL database with Prisma ORM
- **Prisma**: Type-safe database client and migrations
- **MongoDB Adapter**: Optimized for better-auth integration
- **TypeScript**: Full type safety throughout the application

### 📧 Email Services

- **Resend**: Modern email delivery service
- **Custom Templates**: React-based email templates
- **Transactional Emails**: Welcome, verification, and password reset emails

### 🛠️ Development Experience

- **Next.js 15**: Latest App Router with Turbopack
- **ESLint & Prettier**: Code quality and formatting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Strict type checking
- **Hot Reload**: Fast development with Turbopack

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/       # Sign in page and components
│   │   ├── sign-up/       # Sign up page and components
│   │   └── reset-password/ # Password reset functionality
│   ├── dashboard/         # Protected dashboard area
│   ├── welcome/           # Welcome page after email verification
│   └── api/               # API routes
├── components/            # Reusable UI components
├── lib/                   # Utility libraries and configurations
├── types/                 # TypeScript type definitions
├── reducer/               # Form state management
└── config/                # Application configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB database
- Resend account for emails
- OAuth provider accounts (Google, GitHub, Discord)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Axyl1410/next-saas-boilerplate.git
   cd next-saas-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Database
   DATABASE_URL="mongodb://localhost:27017/your-database"

   # Email (Resend)
   RESEND_SECRET="your-resend-api-key"

   # OAuth Providers
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   DISCORD_CLIENT_ID="your-discord-client-id"
   DISCORD_CLIENT_SECRET="your-discord-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database**

   ```bash
   npm run generate    # Generate Prisma client
   npm run studio     # Open Prisma Studio (optional)
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run prettier` - Format code with Prettier
- `npm run generate` - Generate Prisma client
- `npm run studio` - Open Prisma Studio

## 🎯 Key Features Explained

### Authentication Flow

1. **Sign Up**: Users can register with email/password or social providers
2. **Email Verification**: Required verification before accessing the app
3. **Sign In**: Multiple authentication methods supported
4. **Password Reset**: Secure token-based password reset
5. **Account Linking**: Connect multiple social accounts

### Form Management

- **Reducer Pattern**: Centralized form state management
- **Real-time Validation**: Immediate feedback on form errors
- **Type Safety**: Full TypeScript support for form data

### Security Features

- **Rate Limiting**: Prevents abuse and brute force attacks
- **Password Validation**: Checks against compromised password databases
- **Secure Sessions**: MongoDB-based session storage
- **CSRF Protection**: Built-in CSRF protection

## 🎨 Customization

### Styling

- **HeroUI Theme**: Customize colors, fonts, and components
- **Tailwind CSS**: Modify utility classes and design system
- **Dark Mode**: Customize theme switching behavior

### Components

- **Reusable Components**: Build upon the existing component library
- **Form Components**: Extend form validation and styling
- **Layout Components**: Customize page layouts and navigation

### Authentication

- **Custom Providers**: Add more OAuth providers
- **Email Templates**: Customize email designs and content
- **Validation Rules**: Modify password and form validation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

- **Netlify**: Similar to Vercel deployment
- **Railway**: Easy database and app hosting
- **DigitalOcean**: Full control over infrastructure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [HeroUI](https://heroui.com/) - Component library
- [Better Auth](https://better-auth.com/) - Authentication solution
- [Prisma](https://prisma.io/) - Database toolkit
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Axyl1410/next-saas-boilerplate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Axyl1410/next-saas-boilerplate/discussions)
- **Sponsor**: [GitHub Sponsors](https://github.com/sponsors/Axyl1410)

---

Built with ❤️ by [Axyl](https://github.com/Axyl1410)
