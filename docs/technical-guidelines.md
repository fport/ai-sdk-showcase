# Technical Guidelines

This document outlines the technical standards, architectural decisions, and best practices for the AI SDK Showcase project.

## Tech Stack

### Frontend

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Components**: Shadcn
- **UI Utilities**:
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tailwindcss-animate
- **Syntax Highlighting**: react-syntax-highlighter
- **Icons**: Lucide React
- **Theming**: next-themes
- **View Transitions**: next-view-transitions
- **Form Validation**: Zod
- **AI Integration**: 
  - @ai-sdk/openai
  - Vercel AI SDK

### Development Tools

- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript
- **Package Manager**: pnpm
- **Development Server**: Next.js development server

## Code Standards

### TypeScript

- Strict mode enabled
- Use TypeScript for all new code
- Proper type definitions for all components and functions
- Avoid use of `any` type

### Components

- Use functional components with hooks
- Implement proper prop typing
- Follow React best practices
- Use Radix UI primitives for accessible components

### Styling

- Use Tailwind CSS for styling
- Follow utility-first CSS approach
- Use class-variance-authority for component variants
- Maintain consistent spacing and layout

### API Integration

- Use proper error handling
- Implement type-safe API calls
- Follow RESTful best practices
- Handle streaming responses appropriately

### Performance

- Implement proper code splitting
- Use Next.js image optimization
- Follow React performance best practices
- Minimize bundle size

### Accessibility

- Follow WCAG guidelines
- Use semantic HTML
- Implement proper ARIA attributes
- Ensure keyboard navigation

## Project Structure

- `src/app` - Next.js App Router pages and layouts
- `src/components` - Reusable React components
- `src/api` - API routes and handlers
- `public` - Static assets
- `styles` - Global styles and Tailwind configuration

## Development Workflow

1. Follow Git best practices
2. Write clean, maintainable code
3. Document complex logic
4. Test thoroughly before deployment
5. Keep dependencies updated

## Version Control

- Use meaningful commit messages
- Follow semantic versioning
- Keep branches up to date
- Review code before merging

## Documentation

- Document all major components
- Keep technical guidelines updated
- Include inline comments for complex logic
- Maintain README with setup instructions
