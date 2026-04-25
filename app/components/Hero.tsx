export default function Hero() {
  return (
    <section className="hero-gradient text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left: Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              NAFEES AHMAD
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-blue-500/20 backdrop-blur-sm text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                <i className="fas fa-code mr-2"></i>MERN STACK DEVELOPER
              </span>
            </div>
            <p className="text-gray-300 max-w-xl text-base md:text-lg mt-3 leading-relaxed">
              Building scalable full‑stack web apps with modern MERN
              architecture. Passionate about clean UI, REST APIs, and real-world
              solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/nafeesahmad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition bg-white/10 p-2 rounded-full w-9 h-9 flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/nafeesahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition bg-white/10 p-2 rounded-full w-9 h-9 flex items-center justify-center"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 w-full lg:w-80 border border-white/20 shadow-xl">
            <div className="flex items-center gap-3 text-white/90 border-b border-white/20 pb-3 mb-3">
              <i className="fas fa-address-card text-blue-300 text-xl"></i>
              <h3 className="font-semibold text-lg">Contact Info</h3>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt mt-1 text-blue-300 w-5"></i>
                <span className="break-all">+92-7420239944</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-envelope mt-1 text-blue-300 w-5"></i>
                <span className="break-all">rafeetashali@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-300 w-5"></i>
                <span>Bareilly, Uttar Pradesh, India</span>
              </div>
              <div className="flex gap-4 pt-2 border-t border-white/20 mt-2">
                <a
                  href="https://www.linkedin.com/in/nafeesahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white text-sm flex items-center gap-1"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://github.com/nafeesahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white text-sm flex items-center gap-1"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
