"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SidePanel() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg border-r overflow-y-auto">
          {/* Mobile Menu Button - visible on mobile */}
          <div className="lg:hidden p-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 z-50"
              role="dialog"
              aria-modal="true"
            >
              {/* Background backdrop */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setMobileMenuOpen(false)}
              ></div>

              {/* Mobile menu panel */}
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  >
                    <span className="sr-only">Close menu</span>
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Dashboard
                      </a>
                      <a
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Projects
                      </a>
                      <a
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop menu content */}
          <div className="hidden lg:block px-4 py-6">
            <nav className="space-y-2">
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Projects
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Team
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Settings
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Main Content
            </h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">
                This is the main content area. The sidebar shows on desktop and
                converts to a mobile menu on smaller screens.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
