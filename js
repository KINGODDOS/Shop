const routes = {
  '/login': `<h2>Login Page</h2>
    <form>
      <input type="text" placeholder="Phone Number"><br>
      <input type="password" placeholder="Password"><br>
      <button>Login</button>
    </form>`,

  '/dashboard': `<h2>Welcome to Dashboard</h2><p>Your tasks will show here.</p>`,

  '/': `<h2>Home Page</h2><p>Welcome to MoneyLife</p>`
}

function loadRoute() {
  const path = location.hash.replace('#', '') || '/'
  const app = document.getElementById('app')
  app.innerHTML = routes[path] || `<h2>404 Not Found</h2>`
}

window.addEventListener('hashchange', loadRoute)
window.addEventListener('load', loadRoute)
