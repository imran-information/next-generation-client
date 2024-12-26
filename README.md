# Next Generation 

## Purpose
This platform is designed to create an engaging blogging experience where users can read, write, and manage blogs. The platform includes features such as user authentication, blog wishlisting, comments, and dynamic content filtering.

## Live URL
[[Next Generation](https://next-gen-230be.web.app/)]

## Key Features
- **User Authentication:** Email/password-based login and at least one social login (Google).
- **Dynamic Navbar:** Changes based on user login status.
- **Blog Management:** Add, update, wishlist, and view detailed blogs.
- **Interactive Home Page:** Includes recent blogs, tips, newsletter subscription, and more.
- **Search and Filter:** Search blogs by title and filter by category.
- **Protected Routes:** Uses JWT authentication.
- **Wishlist:** Maintain a personalized wishlist of blogs.
- **Comments:** Add comments with profile details under blog details.
- **Featured Blogs:** Highlights top blogs based on word count.

## NPM Packages Used
- **Authentication:** `firebase`, `react-firebase-hooks`, `jsonwebtoken`
- **Routing and Query Management:** `react-router-dom` ,`@tanstack/react-query`
- **UI Components:** `daisyui-ui`, `react-photo-view`
- **Table Library:** `tanstack-table`
- **Animation:** `framer-motion`
- **State Management:** `redux`
- **Database:** `mongodb`
- **Frontend Framework:** `react`
- **Notifications:** `react-hot-toast`

## Layout & Page Structure

### Navbar
- Links:
  - Home
  - Add Blog (Private)
  - All Blogs
  - Featured Blogs
  - Wishlist (Private)
- **Dynamic Behavior:**
  - If not logged in: Show `Login` and `Register`.
  - If logged in: Show `Profile Picture` and `Logout`.

### Pages
#### Home Page
1. **Header:** Navbar.
2. **Banner:** Hero section.
3. **Recent Blogs Section:** Display 6 blogs with details and wishlist buttons.
4. **Newsletter Section:** Input field with toast notification on submission.
5. **Additional Sections:** custom-designed sections.
6. **Footer:** Add relevant links and branding.

#### All Blogs Page
- Display all blogs with:
  - Title, Image, Short Description, Category, Details, and Wishlist buttons.
- Filters:
  - By category.
  - Search by title using MongoDB text search.

#### Blog Details Page
- Blog information.
- **Comment Section:**
  - Show comments with user name and profile picture.
  - Prevent commenting on own blogs.
  - Show update button if the user owns the blog.

#### Add Blog Page
- **Form Fields:** Title, Image URL, Category (dropdown), Short Description, Long Description.

#### Update Blog Page
- Pre-filled form for editing.
- Access restricted to blog owners.

#### Featured Blogs Page
- Display top 10 blogs by word count in a sortable table.

#### Wishlist Page
- Display blogs wishlisted by the logged-in user.
- Include details and remove buttons.

## Additional Features
1. **Loading Skeletons:** Use `react-loading-skeleton` during data fetch.
2. **Photo View:** Full-screen preview of blog images using `react-photo-view`.
3. **Styling:** Use a UI component library for consistent design.

## Backend Features
1. **Database:**
   - MongoDB for blogs, users, comments, and wishlists.
   - Separate collections for each entity.

2. **API Endpoints:**
   - CRUD operations for blogs.
   - Filtering and searching.
   - Authentication and user management.

3. **Middleware:**
   - JWT verification for protected routes.

