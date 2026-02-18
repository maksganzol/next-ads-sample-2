export interface PostItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const featuredPost: PostItem = {
  id: 1,
  title: "10 мест, которые стоит посетить этой весной",
  description: "Подробный гид по самым красивым и доступным направлениям для путешествий в весенний сезон. От горных троп Кавказа до цветущих садов Крыма — выбирайте маршрут по душе.",
  category: "Путешествия",
  date: "18 февраля 2026",
  imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
};

export const postList: PostItem[] = [
  {
    id: 2,
    title: "Как приготовить идеальный борщ: секреты шеф-поваров",
    description: "Разбираем классический рецепт борща с профессиональными хитростями, которые сделают блюдо незабываемым.",
    category: "Кулинария",
    date: "17 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Обзор новых смартфонов 2026: что выбрать?",
    description: "Сравниваем флагманы от Apple, Samsung и Xiaomi. Подробный разбор характеристик, камер и автономности.",
    category: "Технологии",
    date: "16 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Утренние ритуалы: 5 привычек успешных людей",
    description: "Исследования показывают, что правильное утро задаёт тон всему дню. Узнайте, какие привычки стоит внедрить.",
    category: "Lifestyle",
    date: "15 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Йога для начинающих: полное руководство",
    description: "С чего начать практику йоги, какие асаны освоить первыми и как избежать типичных ошибок новичков.",
    category: "Здоровье",
    date: "14 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Акварельная живопись: от первых мазков до шедевра",
    description: "Пошаговое руководство по акварельной технике для тех, кто хочет раскрыть свой творческий потенциал.",
    category: "Творчество",
    date: "13 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Грузия за 7 дней: идеальный маршрут",
    description: "Тбилиси, Мцхета, Казбеги, Батуми — составляем оптимальный маршрут по самым красивым местам Грузии.",
    category: "Путешествия",
    date: "12 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Умный дом своими руками: с чего начать",
    description: "Обзор доступных решений для автоматизации дома: от умных лампочек до полноценных систем управления.",
    category: "Технологии",
    date: "11 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Домашний хлеб на закваске: пошаговый рецепт",
    description: "Учимся печь настоящий хлеб на натуральной закваске — от выращивания стартера до идеальной корочки.",
    category: "Кулинария",
    date: "10 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  },
];

export const categories = [
  { id: 1, name: "Путешествия", icon: "Plane" },
  { id: 2, name: "Технологии", icon: "Cpu" },
  { id: 3, name: "Lifestyle", icon: "Heart" },
  { id: 4, name: "Кулинария", icon: "ChefHat" },
  { id: 5, name: "Здоровье", icon: "Activity" },
  { id: 6, name: "Творчество", icon: "Paintbrush" },
];
