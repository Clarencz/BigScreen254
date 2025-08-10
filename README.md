# 🎬 Movie Search App

A simple and responsive React application that allows you to **search for movies** you like using an external movie API. You can view trending movies, browse their posters, and explore new releases.

---

## 🚀 Features

* 🔍 **Search Movies** — Find movies by title.
* 📈 **Trending Movies** — View the most popular movies right now.
* 🖼 **Movie Posters** — Display poster images fetched from the API.
* 📱 **Responsive Design** — Works well on both desktop and mobile.

---

## 🛠️ Tech Stack

* **React** — Frontend framework
* **JavaScript (ES6)** — Modern JS features
* **CSS / Tailwind / SCSS** — Styling (adjust based on what you used)
* **[The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)** — Movie data source

---

## 📦 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/BigScreen254.git
   cd movie-search-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Add Your API Key**

   * Create a `.env` file in the project root.
   * Add your API key:

     ```env
     REACT_APP_API_KEY=your_tmdb_api_key_here
     ```

4. **Run the App**

   ```bash
   npm start
   ```

---

## 📸 Screenshots
<p align="center">
  <img src="./hero.png" alt="Search Page" width="600">
</p>


*(Add screenshots here — optional but highly recommended)*

---

## 📚 API Reference

* **Base URL:** `https://api.themoviedb.org/3`
* **Search Endpoint:** `/search/movie?query={movie_name}`
* **Trending Endpoint:** `/discover/movie?sort_by=popularity.desc`

---

## 📜 License

This project is licensed under the MIT License — feel free to modify and use it for personal or commercial projects.

---

