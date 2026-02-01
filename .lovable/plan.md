

# Implementation Plan: Parampare E-commerce Defect Fixes & Enhancements

This plan addresses all defects and requirements from the uploaded document across 5 main areas: Authentication, Navigation, Filters, Homepage, and Chatbot.

---

## Summary of Changes

| Area | Changes |
|------|---------|
| Registration | Add Password + Confirm Password fields, make Email mandatory, add password validation rules |
| Login | Make Password login the default, add "Login with OTP" as alternative |
| Navigation Dropdowns | Fix dropdown state conflicts (only one active at a time) |
| Shop Now CTAs | Wire ShaadiWardrobe, EthnicEnsemble, and CuratedCollection links to proper collection pages |
| Page Navigation | Add scroll-to-top on route change |
| Back to Top | Add BackToTop component to Index page |
| Filters & Sort | Make filters functional (client-side filtering/sorting), add empty state, loading feedback |
| Hero Background | Replace static image with subtle animated video background |
| Chatbot Widget | Add floating chatbot with greeting, minimize functionality, and state persistence |

---

## Phase 1: Authentication Flow Updates

### 1.1 Registration Page (`src/pages/Register.tsx`)

**Changes:**
- Make Email field mandatory (remove "optional" label)
- Add Password field with show/hide toggle
- Add Confirm Password field with show/hide toggle
- Implement password validation rules:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- Show inline validation messages for password strength and mismatch
- Disable submit button until all validations pass

### 1.2 Login Page (`src/pages/Login.tsx`)

**Changes:**
- Make Password login the default form view
- Add Password field with show/hide toggle
- Add "Login" button for password-based authentication
- Add "OR" separator below password form
- Add "Login with OTP" link/button as alternative
- Implement form switching between Password and OTP modes
- Validate credentials before submission

---

## Phase 2: Navigation & Routing Fixes

### 2.1 Navigation Dropdown State (`src/components/layout/MainHeader.tsx`)

**Current Issue:** Multiple dropdowns can remain in active state simultaneously.

**Fix:**
- The NavigationMenu component from Radix UI should handle this automatically
- Verify that only one dropdown is open at a time
- Ensure proper hover/focus state management

### 2.2 CTA Links - ShaadiWardrobe, EthnicEnsemble, CuratedCollection

**Files to update:**
- `src/components/sections/ShaadiWardrobe.tsx` - Update `href="#"` to actual routes
- `src/components/sections/EthnicEnsemble.tsx` - Update `href="#"` to actual routes
- `src/components/sections/CuratedCollection.tsx` - Update `link="#"` to actual routes

**Route mapping:**
```text
Bridal Sarees      -> /products?occasion=wedding&type=bridal
Mehendi Collection -> /products?occasion=festive&type=mehendi
Sangeet Specials   -> /products?occasion=festive&type=sangeet
Reception Elegance -> /products?occasion=wedding&type=reception
Traditional        -> /products?style=traditional
Contemporary       -> /products?style=contemporary
Festive Grandeur   -> /products?occasion=festive
```

### 2.3 Scroll-to-Top on Navigation (`src/App.tsx`)

**Add:** ScrollToTop component that scrolls to top on every route change

```text
- Create ScrollToTop component using useEffect + useLocation
- Wrap Routes with ScrollToTop component
- Ensure all page navigations start at top
```

### 2.4 Back to Top Button on Home Page (`src/pages/Index.tsx`)

**Add:** Import and render BackToTop component on Index page

---

## Phase 3: Filters & Sort Functionality

### 3.1 Make Filters Functional (`src/pages/Products.tsx`)

**Current Issue:** Filters are UI-only and don't actually filter the product list.

**Changes:**
- Implement actual filtering logic using useMemo
- Filter products based on selected filters (fabric, color, occasion, etc.)
- Filter products based on price range
- Show filtered product count dynamically
- Handle empty state when no products match

### 3.2 Make Sort Functional

**Changes:**
- Implement sorting logic for all sort options:
  - Price: Low to High
  - Price: High to Low
  - Rating
  - New Arrivals
  - Discount percentage
- Re-render product grid immediately on sort change

### 3.3 Add Product Data Attributes

**Add filter-related attributes to product data:**
```typescript
interface Product {
  // existing fields...
  fabric?: string;
  color?: string;
  occasion?: string;
  weave?: string;
  border?: string;
  pallu?: string;
  discount?: number;
  createdAt?: string;
}
```

### 3.4 Empty State & Feedback

**Add:**
- Empty state UI when no products match filters
- "No products found. Try adjusting your filters." message
- "Clear Filters" button in empty state
- Loading/transition effect when filters are applied

---

## Phase 4: Homepage Hero Enhancement

### 4.1 Background Animation (`src/components/sections/HeroSection.tsx`)

**Replace:** Static background image with subtle animated video

**Implementation:**
- Use a looping MP4/WebM video of flowing silk fabric
- Add video element with:
  - autoPlay
  - loop
  - muted
  - playsInline
- Fallback to static image if video fails
- Ensure text readability with gradient overlays
- Keep performance optimized (compressed video, lazy loading)

**Video specifications:**
- Soft flowing silk waves
- Ivory, warm beige, muted gold tones
- Subtle zari shimmer highlights
- No people, no products, no text
- Elegant luxury mood

---

## Phase 5: Chatbot Widget

### 5.1 Create Chatbot Component (`src/components/Chatbot.tsx`)

**Features:**
- Floating widget at bottom-right corner
- Open by default on page load
- Greeting message: "Namaste, {User Name} Welcome to Parampare"
- Fallback if no username: "Namaste! Welcome to Parampare"
- Minimize button (dash icon) at top-right of chatbot header
- When minimized: Show small chat bubble icon with "Need help?" tooltip
- Preserve chat state on minimize and across page navigation
- Smooth open/close animations
- Brand colors and typography

### 5.2 Add to App/Index

**Add Chatbot component to:**
- Main App.tsx (so it appears on all pages)
- OR Index.tsx (if only needed on homepage)

### 5.3 Chat State Persistence

**Use:**
- useState for local chat messages
- localStorage or sessionStorage for persistence across navigation
- Check for logged-in user name from localStorage

---

## Technical Details

### New Files to Create
1. `src/components/Chatbot.tsx` - Floating chatbot widget
2. `src/components/ScrollToTop.tsx` - Scroll restoration on navigation

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Register.tsx` | Add password fields, validation, make email mandatory |
| `src/pages/Login.tsx` | Add password login as default, OTP as alternative |
| `src/pages/Products.tsx` | Implement actual filter/sort logic, add empty state |
| `src/pages/Index.tsx` | Add BackToTop component |
| `src/components/sections/HeroSection.tsx` | Add video background |
| `src/components/sections/ShaadiWardrobe.tsx` | Fix CTA links |
| `src/components/sections/EthnicEnsemble.tsx` | Fix CTA links |
| `src/components/sections/CuratedCollection.tsx` | Fix CTA links |
| `src/App.tsx` | Add ScrollToTop, Chatbot components |

### Validation Schema (using existing patterns)

```typescript
// Password validation regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Password validation messages
const passwordRules = [
  { rule: /.{8,}/, message: "At least 8 characters" },
  { rule: /[A-Z]/, message: "At least one uppercase letter" },
  { rule: /[a-z]/, message: "At least one lowercase letter" },
  { rule: /[0-9]/, message: "At least one number" },
  { rule: /[@$!%*?&]/, message: "At least one special character" },
];
```

---

## Priority Order (within 5 credits)

1. **Authentication Flow** - Register + Login updates (High Priority)
2. **Filters & Sort** - Make functional (High Priority)
3. **CTA Links** - Wire ShaadiWardrobe, EthnicEnsemble links (Medium Priority)
4. **Scroll-to-Top** - Add on navigation + BackToTop on homepage (Medium Priority)
5. **Chatbot Widget** - Create floating chatbot (Medium Priority)
6. **Hero Video Background** - If time/credits permit (Lower Priority - requires video asset)

