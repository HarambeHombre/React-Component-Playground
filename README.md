# React Component Playground 🎨

A comprehensive collection of styled React components built with Next.js for testing, experimentation, and demonstration purposes.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Components](#available-components)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project serves as a testing ground and showcase for various React components, allowing for rapid prototyping and experimentation with different UI patterns, styling approaches, and component architectures in a Next.js environment.

## ✨ Features

- 🎨 Modern, responsive React components
- ⚡ Built with Next.js for optimal performance
- 🎭 Interactive component demonstrations
- 📱 Mobile-friendly designs
- 🧪 Testing environment for new ideas
- 🎪 Live component playground

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HarambeHombre/React-Component-Playground.git
cd React-Component-Playground
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the playground.

## 🧩 Available Components

### 📊 Counter
An interactive counter component with increment and decrement functionality.
- **Features:** State management, button interactions, clean styling
- **Use cases:** Learning React state, basic user interactions

### 💬 Messenger
A dual-user messaging interface that simulates real-time chat functionality.
- **Features:** Two-user chat simulation, message history, timestamp tracking
- **Use cases:** Chat applications, real-time communication demos

### 🔍 SearchWidget
An animated search component with expand/collapse functionality and query history.
- **Features:** Smooth animations with Framer Motion, search history tracking, interactive UI
- **Dependencies:** `motion/react`, `@reacticons/ionicons`
- **Use cases:** Search interfaces, animated components, user input handling

### 📝 SortForm
A utility component for sorting comma-separated values with interactive feedback.
- **Features:** Array sorting, input validation, hover effects, reset functionality
- **Use cases:** Data manipulation, form handling, sorting algorithms demo

### 🪟 CustomizeModal
A modal component with error handling and dynamic content display.
- **Features:** Modal overlay, error state management, customizable content
- **Dependencies:** `@reacticons/ionicons`
- **Use cases:** Dialog boxes, error displays, overlay content

### ✅ TestComponent
A simple checkbox component demonstrating basic state management.
- **Features:** Checkbox interaction, conditional rendering, state updates
- **Use cases:** Form elements, basic React concepts

### 🏠 Layout Components
- **Header:** Customizable header component with children props
- **Footer:** Standard footer with copyright information

## 🛠️ Technologies Used

- **React** - UI library for building user interfaces
- **Next.js** - React framework for production
- **Framer Motion** - Animation library for React
- **Ionicons** - Icon library for React components
- **CSS/JavaScript** - Styling and component logic

## 📁 Project Structure

```
React-Component-Playground/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout component
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Counter.js         # Counter component
│   ├── Counter.styles.js  # Counter styles
│   ├── Messenger.js       # Messaging component
│   ├── Messenger.styles.js # Messaging styles
│   ├── SearchWidget.js    # Search component
│   ├── SearchWidget.styles.js # Search styles
│   ├── SortForm.js        # Sorting component
│   ├── SortForm.styles.js # Sorting styles
│   ├── CustomizeModal.js  # Modal component
│   ├── CustomizeModal.styles.js # Modal styles
│   ├── TestComponent.js   # Test component
│   ├── Header.js          # Header component
│   └── Footer.js          # Footer component
├── public/               # Static assets
└── README.md            # Project documentation
```

## 💻 Development

### Adding New Components

1. Create your component in the `components/` directory
2. Create a corresponding `.styles.js` file for component-specific styles
3. Add appropriate styling and functionality
4. Import and showcase the component in `app/page.js`
5. Update this README with component documentation

### Running Tests

```bash
npm test
# or
yarn test
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**HarambeHombre**
- GitHub: [@HarambeHombre](https://github.com/HarambeHombre)

---

⭐ Star this repository if you find it helpful!
