export interface Screen {
  id: string
  name: string
  figmaUrl?: string // Опционально - для интерактивных прототипов (iframe)
  imageUrl?: string // Опционально - для статичных изображений из Figma (PNG/JPG)
  category?: string
  description?: string
}

/**
 * Инструкция по добавлению изображений из Figma:
 * 
 * 1. Быстрый способ (рекомендуется для начала):
 *    - В Figma выберите фрейм → правый клик → "Copy/Paste as" → "Copy as PNG"
 *    - Или экспортируйте через меню: Export → PNG/JPG
 *    - Загрузите на хостинг (или используйте Figma CDN)
 *    - Добавьте imageUrl в конфигурацию
 * 
 * 2. Через Figma API (для автоматизации):
 *    - Формат: https://www.figma.com/file/FILE_ID/...?node-id=NODE_ID
 *    - Или используйте Figma Export API
 * 
 * 3. Интерактивные прототипы:
 *    - Используйте figmaUrl с embed форматом
 *    - Можно комбинировать imageUrl + figmaUrl для переключения режимов
 */

export const screens: Screen[] = [
  // Прямые ссылки на макеты из Figma (png лежат в public/screens)
  {
    id: 'landing-page',
    name: 'Landing Page',
    imageUrl: '/screens/landing.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=314%3A8186',
    category: 'Структура',
    description: 'Главный лендинг Verifluence.io',
  },

  // Casino
  {
    id: 'brand-dashboard',
    name: 'Brand Dashboard',
    imageUrl: '/screens/brand-dashboard.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=2161%3A46985',
    category: 'Casino',
    description: 'Дашборд казино: обзор метрик и быстрые действия',
  },
  {
    id: 'brand-onboarding',
    name: 'Casino Onboarding',
    imageUrl: '/screens/onboarding-flow.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1036%3A16521',
    category: 'Casino',
    description: 'Онбординг для нового казино в дашборде',
  },
  {
    id: 'campaign-builder',
    name: 'Campaign Builder',
    imageUrl: '/screens/campaign-builder.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=518%3A12758',
    category: 'Casino',
    description: 'Мультишаговое создание кампании',
  },
  {
    id: 'brand-verification',
    name: 'Brand Verification',
    imageUrl: '/screens/brand-verification.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=34%3A1146',
    category: 'Casino',
    description: 'Верификация бренда (KYC) с загрузкой документов',
  },
  {
    id: 'streamer-search-discovery',
    name: 'Streamer Search & Discovery',
    imageUrl: '/screens/streamer-search.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1477%3A27843',
    category: 'Casino',
    description: 'Поиск стримеров с фильтрами и сортировкой',
  },
  {
    id: 'streamer-management',
    name: 'Streamer Management',
    imageUrl: '/screens/streamer-management.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1791%3A33414',
    category: 'Casino',
    description: 'Рабочее пространство кампаний стримера',
  },
  {
    id: 'streamer-verification-page',
    name: 'Streamer Verification Dashboard',
    imageUrl: '/screens/streamer-verification.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1746%3A21772',
    category: 'Casino',
    description: 'Детали верификации и аналитика по стримеру',
  },
  {
    id: 'casino-analytics',
    name: 'Casino Analytics',
    imageUrl: '/screens/casino-analytics.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=825%3A13111',
    category: 'Casino',
    description: 'Аналитика кампаний и ROI',
  },
  {
    id: 'casino-payments-escrow',
    name: 'Casino Payments & Escrow',
    imageUrl: '/screens/casino-payments.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1078%3A14717',
    category: 'Casino',
    description: 'Эскроу, бюджеты и выплаты',
  },

  // Streamer
  {
    id: 'streamer-dashboard',
    name: 'Streamer Dashboard',
    imageUrl: '/screens/streamer-dashboard.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1601%3A28102',
    category: 'Streamer',
    description: 'Дашборд стримера с KPI и статусами',
  },
  {
    id: 'campaign-browser',
    name: 'Campaign Browser',
    imageUrl: '/screens/campaign-browser.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=139%3A11824',
    category: 'Streamer',
    description: 'Каталог кампаний для отклика',
  },
  {
    id: 'streamer-payments',
    name: 'Streamer Payments & Earnings',
    imageUrl: '/screens/streamer-payments.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1854%3A63530',
    category: 'Streamer',
    description: 'Платежи, история и статусы выплат',
  },

  // Общие/доступ
  {
    id: 'onboarding-flow',
    name: 'Onboarding Flow',
    imageUrl: '/screens/onboarding-flow.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1036%3A16521',
    category: 'Both',
    description: 'Пример онбординга нового пользователя',
  },
  {
    id: 'sign-in',
    name: 'Sign In',
    imageUrl: '/screens/sign-in.png',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/Izgzufe5syG3KcDR7fdPVX/Verifluence.io-MVP-Design?node-id=1601%3A27448',
    category: 'Auth',
    description: 'Авторизация/вход в платформу',
  },

  // Admin (оставлены как в исходной структуре, без привязки к кадрам)
  {
    id: 'admin-panel',
    name: 'Админ-панель',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Управление пользователями, модерация контента, мониторинг системы, обзор аналитики, управление реферальной программой',
  },
  {
    id: 'admin-streamer-analytics',
    name: 'Streamer Analytics Engine',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Данные через Kick/Twitch API: рост подписчиков, частота стримов, часы, консистентность зрителей, категории, языки, боты, sentiment',
  },
  {
    id: 'admin-casino-analytics',
    name: 'Casino Analytics Dashboard',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Список верифицированных казино: объемы ставок, методы депозитов, Trust Score, compliance, присутствие на рынке, отзывы',
  },
  {
    id: 'admin-fraud-detection',
    name: 'Fraud Detection Engine',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'AI анализ: паттерны чата, скачки зрителей, бот-подобные сообщения, возраст аккаунтов чата, генерация алертов',
  },
  {
    id: 'admin-roi-modeling',
    name: 'ROI & Performance Modeling',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL',
    category: 'Admin',
    description: 'Моделирование ROI: формула прогнозирования, PES, Expected Revenue, оценка ROI на стримера',
  },
]
