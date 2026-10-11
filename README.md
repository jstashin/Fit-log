# FitLog — Workout Library & Planner

**Train with intent. Log every set.**

FitLog is a responsive workout library and planning application. Users can explore exercises, view detailed instructions, build a workout plan, save exercises for later, and track completion.

## Live Website

🌐 [Visit FitLog](https://fit-log-jerin12.vercel.app)



## Main Features

- **Workout Library:** Explore exercises with images, muscle groups, equipment, duration, calories, and ratings.
- **Workout Details:** View descriptions, difficulty levels, sets, reps, and step-by-step instructions.
- **Workout Planning:** Add up to five active workouts to your plan, with duplicate prevention.
- **Saved Workouts:** Save exercises for later and access them from the Saved tab.
- **Progress Tracking:** Mark workouts as done, remove them, or add completed workouts to your active plan again.
- **Live Summary:** View exercise counts, total minutes, and estimated calories for active or saved workouts.
- **Sorting:** Sort planned and saved workouts by duration, calories, or rating.
- **Persistent Storage:** Keep your plan and saved workouts after refreshing using localStorage.
- **Responsive Design:** Browse and manage workouts on mobile, tablet, and desktop.
- **User Feedback:** Loading states, empty states, and toast notifications guide users through the app.

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js App Router | Routing, server rendering, and data fetching |
| React | Component-based user interface |
| JavaScript | Application logic |
| Tailwind CSS | Responsive styling |
| DaisyUI | UI styling toolkit |
| React Context API | Shared workout state |
| localStorage | Browser-based data persistence |
| Vercel | Hosting |

## Dependencies

### Application Dependencies

- `next` — Application framework
- `react` and `react-dom` — UI components and rendering
- `daisyui` — UI styling toolkit
- `react-icons` — Icons
- `react-toastify` — Toast notifications

### Development Dependencies

- `tailwindcss` — Utility-first CSS
- `@tailwindcss/postcss` — Tailwind PostCSS integration
- `babel-plugin-react-compiler` — React Compiler integration
- `eslint` — Code linting
- `eslint-config-next` — Next.js ESLint configuration

## Run Locally

### 1. Prerequisites

Install a current Node.js LTS release and npm.

### 2. Clone the Repository

```bash
git clone https://github.com/jstashin/Fit-log.git
cd Fit-log
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The current project fetches data directly from a public API.
No `.env` file or API key is required for the current implementation.

An internet connection is required to load workout data and remote images.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint |

### Run the Production Build Locally

```bash
npm run build
npm run start
```

## API Endpoints

| Endpoint | Purpose |
|----------|---------|
| `https://api.abcz.workers.dev/api/fitlog` | Fetch all workouts |
| `https://api.abcz.workers.dev/api/fitlog/:id` | Fetch a workout by ID |

## Application Routes

| Route | Page |
|-------|------|
| `/` | Homepage and workout library |
| `/workouts/[id]` | Workout details |
| `/my-plan` | Today's Plan and Saved tabs |

## Data Storage

Workout plans and saved exercises are stored in the browser's localStorage under the key `fitlog-workouts`.

Data persists across page reloads in the same browser.
It does not sync across devices, and the plan does not automatically reset each day.

## Deployment

The application is hosted on Vercel.

To deploy your own copy:

1. Import the GitHub repository into Vercel.
2. Select Next.js as the framework.
3. Keep the default build settings.
4. Deploy the project.

## Relevant Links

- [Live Website](https://fit-log-jerin12.vercel.app)
- [GitHub Repository](https://github.com/jstashin/Fit-log)
- [Developer GitHub](https://github.com/jstashin)
