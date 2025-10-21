<div align="center">

# 🥯 Bagel UI

### Open-Source Frontend for Self-Service Terraform Platform

**The developer-first interface for managing Terraform infrastructure with confidence**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge)](LICENSE)
[![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-yellow?style=for-the-badge)](https://github.com/TheBagelProject)

[Features](#-key-features) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack--major-packages) • [Documentation](#-documentation)

</div>

---

## 🌟 What is Bagel UI?

**Bagel UI is the modern, intuitive frontend interface for the Bagel platform** - built with Next.js, TypeScript, and a robust set of libraries for seamless cloud automation, project/space management, and DevOps workflows.

This is the web interface that makes infrastructure management simple, fast, and accessible to developers who just want to ship.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern Developer UI**
Clean, intuitive interface designed for developers by developers with dark mode support.

### 📊 **Real-Time Deployment Tracking**
Live deployment logs and status updates with search, pagination, and grid/gallery views.

</td>
<td width="50%">

### 🔗 **GitHub Integration**
Seamlessly manage repositories, branches, and trigger deployments directly from the UI.

### 📦 **Project & Space Management**
Organize infrastructure with hierarchical project and space structures.

</td>
</tr>
<tr>
<td width="50%">

### ⚙️ **AWS Credentials Management**
Secure profile setup, updates, and validation for AWS infrastructure.

### 🔍 **Advanced Search & Filtering**
Powerful search across projects, spaces, and deployments with smart pagination.

</td>
<td width="50%">

### 📱 **Fully Responsive**
Works seamlessly across desktop, tablet, and mobile devices.

### ⚡ **Type-Safe Development**
100% TypeScript with robust error handling and validation.

</td>
</tr>
</table>

---

## 🚀 Quick Start

Get the Bagel UI up and running in minutes!

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Bagel Backend running (see [bagel-backend](https://github.com/TheBagelProject/bagel-backend))

### Installation

```bash
# Clone the repository
git clone https://github.com/TheBagelProject/bagel-ui
cd bagel-ui

# Install dependencies
npm install
# or
yarn install
```

### 🏃 Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

That's it! 🎉 The Bagel UI is now running.

### 🏗️ Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 🛠️ Tech Stack & Major Packages

- **Framework:** Next.js 14+ (App Router, SSR/SSG, API routes)
- **Language:** TypeScript 5+
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS, custom CSS modules
- **UI Components:** Lucide React Icons, Heroicons, SweetAlert2, custom component library
- **HTTP Client:** Axios (with private instance for auth)
- **Forms & Validation:** Custom React components with validation
- **Other:** js-cookie, next/image, next/font, ESLint, Prettier

---

## 🧩 Features in Detail

### Project & Space Management
- Create, delete, search, and paginate projects and spaces
- Grid and gallery view options
- Hierarchical organization structure
- Real-time updates and status tracking

### AWS Credentials Management
- Secure profile setup and configuration
- Profile updates and validation
- Multi-account support

### GitHub Integration
- Repository listing and selection
- Branch management and rebasing
- Direct deployment triggers from UI

### Deployment Management
- Complete deployment history with status tracking
- Real-time execution logs
- Search and filter deployments
- Grid/gallery view toggle
- Detailed audit trails

### UI/UX Features
- Responsive design for all screen sizes
- Dark mode support
- Loading states and error handling
- Toast notifications and modals
- Intuitive navigation and user flows

---

## 📁 Project Structure

```
bagel-ui/
├── src/
│   ├── app/                # Next.js app directory (routing, pages, layouts)
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── ...             # Other routes
│   ├── components/         # Reusable UI and logic components
│   │   ├── Sidebar/
│   │   ├── Modals/
│   │   ├── Buttons/
│   │   └── ...
│   ├── config/             # Configuration files
│   │   ├── api-endpoints.ts   # Centralized API endpoint definitions
│   │   └── axios-config.ts    # Axios instance configuration
│   ├── redux/              # Redux store and slices
│   │   ├── store.ts
│   │   └── slices/         # Feature slices (projects, spaces, etc.)
│   ├── services/           # API service layer
│   │   ├── projectService.ts
│   │   ├── deploymentService.ts
│   │   └── ...
│   ├── types/              # TypeScript types and interfaces
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── assets/             # Static assets (images, icons)
├── public/                 # Public static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🧑‍💻 Code Quality & Best Practices

### Type Safety
- **100% TypeScript coverage** for all business logic and API calls
- Comprehensive interfaces and types in `src/types/`
- Strict TypeScript configuration for maximum safety

### Architecture Patterns
- **Centralized API Management:** All endpoints in `src/config/api-endpoints.ts`
- **Redux Toolkit:** Global state management with slices for projects, spaces, deployments, credentials
- **Service Layer:** Clean separation between API calls and components
- **Component Structure:** Modular, atomic components with clear separation of concerns

### Error Handling
- Robust error handling across all API calls
- User-friendly error messages with SweetAlert2
- Graceful fallbacks and loading states

### Code Standards
- ESLint and Prettier enforced
- Consistent naming conventions
- Component and function documentation
- Git hooks for pre-commit linting

---

## 🌐 API Integration

All API endpoints are centrally managed in `src/config/api-endpoints.ts`. The UI communicates with the Bagel backend API.

### Key API Categories

**Authentication:**
- `/api/users/signup`, `/api/users/login`, `/api/users/get-user-by-id`

**GitHub:**
- `/api/github-pat/save-pat`, `/api/github-pat/list-repos`

**Projects:**
- `/api/project/create-project`, `/api/project/:projectId/spaces`, `/api/project/:projectId/delete`

**Deployments:**
- `/api/deployment/`, `/api/terraform`

**AWS Credentials:**
- `/api/project/:projectId/configure-aws-profile`, `/api/project/:projectId/update-aws-profile`

Replace `:projectId` and other parameters at runtime. See full list in `src/config/api-endpoints.ts`.

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# Other environment-specific configs
NEXT_PUBLIC_ENVIRONMENT=development
```

### Customize Ports

Update in `package.json`:
```json
{
  "scripts": {
    "dev": "next dev -p 3000"
  }
}
```

---

## 🛠️ Development

### Running Linting

```bash
npm run lint
# or
yarn lint
```

### Running Type Check

```bash
npm run type-check
# or
yarn type-check
```

### Format Code

```bash
npm run format
# or
yarn format
```

---

## 📝 Contributing

We welcome contributions! Here's how to get started:

### Development Guidelines

1. **Fork the repository** and create your branch from `main`
2. **Follow TypeScript best practices** and existing code patterns
3. **Use the existing folder structure** and component organization
4. **Write meaningful commit messages** following conventional commits
5. **Test your changes thoroughly** before submitting
6. **Run linting and formatting** before committing

### Pull Request Process

1. Update documentation if you're adding features
2. Ensure all TypeScript types are properly defined
3. Add comments for complex logic
4. Test across different screen sizes
5. Run `npm run lint` and `npm run format`
6. Submit PR with clear description of changes

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use centralized API endpoints and types
- Keep components small and focused
- Write self-documenting code with clear variable names

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📚 Learn More

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

### Related Projects
- **[bagel-backend](https://github.com/TheBagelProject/bagel-backend)** - Backend API and Terraform execution
- **[Bagel Platform](https://github.com/TheBagelProject)** - Complete platform overview

---

## 🗺️ Roadmap

- [x] Project and space management UI
- [x] Real-time deployment logs
- [x] GitHub integration interface
- [x] AWS credentials management
- [x] Responsive design with dark mode
- [ ] Enhanced deployment rollback UI
- [ ] RBAC user interface
- [ ] Multi-cloud provider UI support
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)

---

## 💬 Community & Support

### Get Help
- **[GitHub Discussions](https://github.com/orgs/TheBagelProject/discussions)** - Ask questions and share ideas
- **[Discord Community](https://discord.gg/bagel)** - Coming Soon! 🚀

### Found a Bug?
[Report an issue](https://github.com/TheBagelProject/bagel-ui/issues) and we'll get it fixed!

### Feature Requests
Have an idea? [Open a feature request](https://github.com/TheBagelProject/bagel-ui/issues/new?template=feature_request.md)

---

## 📄 License

Bagel UI is released under the [AGPL 3.0 License](LICENSE).

---

## 🙏 Acknowledgments

Built with ❤️ using:
- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Redux Toolkit](https://redux-toolkit.js.org/) - State Management
- [Lucide](https://lucide.dev/) - Beautiful Icons

---

<div align="center">

**⭐ Star us on GitHub - it helps!**

Made with 🥯 by the Bagel Team

[Website](https://thebagelproject.dev) • [Backend](https://github.com/TheBagelProject/bagel-backend) • [Docs](https://docs.thebagelproject.dev)

</div>
