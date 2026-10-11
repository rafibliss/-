# Bazar Dor (বাজার দর) 🛒

**Bazar Dor** is a modern, responsive full-stack web application built for tracking daily commodity prices across local markets in Bangladesh. Users can monitor price updates, view market trends, search and filter daily essentials (rice, pulse, oil, vegetables, meat, fish), and manage their user profile securely.

---

## 🌟 5 Key Features

1. **Daily Price Dashboard & Trends:** Real-time visibility into daily commodity market prices with clear visual indicators tracking price drops and increases.
2. **Product Search & Filtering:** Quick and intuitive navigation through daily essential categories (rice, pulse, oil, vegetables, meat, fish).
3. **Secure OAuth Authentication:** Smooth sign-in and sign-up powered by Better Auth supporting Google Cloud Auth, GitHub OAuth, and traditional credentials.
4. **Server-Side Route Protection:** Middleware-driven route guarding protecting sensitive pages like `/profile` and dynamic product details (`/ProductDetail/:id`) from unauthenticated access.
5. **Interactive Profile Management:** Controlled form state management allowing users to seamlessly view and update their profile details with live session feedback.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & DaisyUI
- **Authentication:** Better Auth (Google Cloud Auth & GitHub OAuth)
- **Database:** MongoDB
- **Toast Notifications:** React Toastify
- **Icons:** React Icons

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/bazar-dor.git](https://github.com/your-username/bazar-dor.git)
cd bazar-dor