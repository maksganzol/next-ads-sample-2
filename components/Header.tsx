"use client";

import { Search, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Блог</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Путешествия
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Технологии
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Lifestyle
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Кулинария
            </a>
          </nav>

          {/* Search and Menu Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-700" />
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Путешествия
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Технологии
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Lifestyle
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Кулинария
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
