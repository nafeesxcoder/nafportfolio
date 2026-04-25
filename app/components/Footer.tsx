export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
        <p>© 2026 Nafees Ahmad — MERN Stack Developer</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/nafeesahmad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/nafeesahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="mailto:rafeetashali@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <i className="fas fa-envelope"></i> rafeetashali@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
