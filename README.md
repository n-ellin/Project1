# Manajemen Produk

Project sederhana untuk mengelola data produk menggunakan **React JS**. Project ini dibuat sebagai implementasi pembelajaran React JS, mulai dari konsep dasar hingga authentication, authorization, routing, dan form handling.

## Deskripsi

**Manajemen Produk** adalah aplikasi sederhana yang digunakan untuk mengelola data produk seperti nama, harga, dan stok.

Project ini dikembangkan secara bertahap untuk menerapkan konsep React JS yang telah dipelajari, termasuk **component, props, state, hooks, routing, authentication, authorization, controlled component, form validation, error handling, dan loading state**.

## Fitur

### Product Management

* Menampilkan daftar produk
* Menambahkan produk
* Menampilkan detail produk
* Menampilkan nama produk
* Menampilkan harga produk
* Menampilkan jumlah stok
* Menampilkan status produk berdasarkan stok
* Form input produk
* Rendering data produk secara dinamis

### Authentication & Authorization

* Login menggunakan akun dummy
* Authentication menggunakan dummy token
* Penyimpanan token dan data user menggunakan `localStorage`
* Logout
* Protected Route
* Role-based authorization
* Pembatasan fitur berdasarkan role pengguna
* Admin dapat menambahkan produk
* User hanya dapat menggunakan fitur yang diizinkan

### Form Handling

* Controlled component
* Validasi email dan password
* Basic form validation
* Error handling pada login
* Loading state pada proses login
* Button disabled ketika proses login berlangsung

## Akun Dummy

### Admin

```text
Email    : admin123@gmail.com
Password : admin123
Role     : Admin
```

### User

```text
Email    : user123@gmail.com
Password : user1234
Role     : user
```

## Teknologi

* React JS
* Vite
* JavaScript
* HTML/JSX
* CSS
* React Router DOM
* Bootstrap
* Bootstrap Icons
* `localStorage`

## Konsep React yang Dipelajari

Project ini menerapkan beberapa konsep React, antara lain:

* Functional Component
* JSX
* Props
* `useState`
* `useEffect`
* Event Handling
* Conditional Rendering
* List & Key
* Controlled Component
* React Router
* Nested Route
* Dynamic Route
* `Outlet`
* `useParams`
* `useNavigate`
* `useLocation`

## Konsep Authentication & Form Handling

Project juga menerapkan konsep:

* Authentication
* Authorization
* Role-based Authorization
* Login Flow
* Logout Flow
* Dummy Token
* `localStorage`
* Protected Route
* Form Handling
* Form Validation
* Error Handling
* Loading State

Dummy token digunakan sebagai simulasi sederhana untuk memahami konsep penyimpanan dan pengecekan token sebelum menggunakan authentication berbasis API atau backend.

## Struktur Project

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProductForm.jsx
│   └── ProductList.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   └── LoginLayout.jsx
│
├── pages/
│   ├── About.jsx
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ProductDetail.jsx
│   └── Products.jsx
│
├── Routes/
│   └── ProtectedRoute.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## Alur Authentication

```text
Login
  ↓
Input Email & Password
  ↓
Validasi Form
  ↓
Mencari User dengan find()
  ↓
User ditemukan?
  ├── Tidak → Tampilkan Error
  │
  └── Ya
       ↓
  Membuat Dummy Token
       ↓
  Simpan Token & User ke localStorage
       ↓
  Navigate ke /dashboard
```

## Alur Protected Route

```text
User membuka halaman protected
        ↓
ProtectedRoute mengambil token
        ↓
Token tersedia?
   ├── Tidak → /login
   │
   └── Ya → Outlet → Halaman dapat diakses
```
