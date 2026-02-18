import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Блог</h3>
            <p className="text-gray-400">
              Интересные статьи о путешествиях, технологиях, кулинарии и творчестве.
              Вдохновение и полезные советы на каждый день.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Рубрики</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Путешествия
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Технологии
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Кулинария
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Lifestyle
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Об авторе
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Реклама
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Блог. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
