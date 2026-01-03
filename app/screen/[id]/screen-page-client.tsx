'use client'

import { useState } from 'react'
import Link from 'next/link'
import { screens } from '@/config/screens'

export default function ScreenPageClient({ id }: { id: string }) {
  const screen = screens.find((s) => s.id === id)
  const [viewMode, setViewMode] = useState<'image' | 'iframe'>(
    screen?.imageUrl ? 'image' : 'iframe'
  )

  if (!screen) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Экран не найден</h1>
        <Link
          href="/"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'rgba(78, 205, 196, 0.2)',
            border: '1px solid #4ecdc4',
            borderRadius: '8px',
            color: '#4ecdc4',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(78, 205, 196, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(78, 205, 196, 0.2)'
          }}
        >
          Вернуться на карту сайта
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Навигационная панель */}
      <nav
        style={{
          padding: '1rem 2rem',
          background: 'rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Link
          href="/"
          style={{
            padding: '0.5rem 1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
          }}
        >
          ← Карта сайта
        </Link>
        <h1 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{screen.name}</h1>
        <div style={{ width: '120px' }} /> {/* Spacer для центрирования */}
      </nav>

      {/* Переключатель режима просмотра */}
      {screen.imageUrl && screen.figmaUrl && (
        <div
          style={{
            padding: '0.5rem 2rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setViewMode('image')}
            style={{
              padding: '0.5rem 1rem',
              background:
                viewMode === 'image' ? 'rgba(78, 205, 196, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${
                viewMode === 'image' ? '#4ecdc4' : 'rgba(255, 255, 255, 0.2)'
              }`,
              borderRadius: '6px',
              color: viewMode === 'image' ? '#4ecdc4' : '#a0a0a0',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease',
            }}
          >
            📷 Изображение
          </button>
          <button
            onClick={() => setViewMode('iframe')}
            style={{
              padding: '0.5rem 1rem',
              background:
                viewMode === 'iframe' ? 'rgba(78, 205, 196, 0.3)' : 'rgba(255, 255, 255, 0.1)',
              border: `1px solid ${
                viewMode === 'iframe' ? '#4ecdc4' : 'rgba(255, 255, 255, 0.2)'
              }`,
              borderRadius: '6px',
              color: viewMode === 'iframe' ? '#4ecdc4' : '#a0a0a0',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease',
            }}
          >
            🎨 Интерактивный прототип
          </button>
        </div>
      )}

      {/* Контейнер для контента */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'auto',
          background: '#0a0a0a',
        }}
      >
        {viewMode === 'image' && screen.imageUrl ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '2rem',
              minHeight: 'calc(100vh - 120px)',
            }}
          >
            <div
              style={{
                maxWidth: '100%',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={screen.imageUrl}
                alt={screen.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxWidth: '1920px',
                }}
              />
            </div>
          </div>
        ) : screen.figmaUrl ? (
          <iframe
            src={screen.figmaUrl}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'calc(100vh - 120px)',
              border: 'none',
              background: '#ffffff',
            }}
            allowFullScreen
            title={screen.name}
          />
        ) : screen.imageUrl ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '2rem',
              minHeight: 'calc(100vh - 120px)',
            }}
          >
            <div
              style={{
                maxWidth: '100%',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={screen.imageUrl}
                alt={screen.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxWidth: '1920px',
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 'calc(100vh - 120px)',
              color: '#a0a0a0',
            }}
          >
            <p>Контент не доступен. Добавьте imageUrl или figmaUrl в конфигурацию.</p>
          </div>
        )}
      </div>

      {/* Информационная панель внизу */}
      <div
        style={{
          padding: '1rem 2rem',
          background: 'rgba(0, 0, 0, 0.5)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.85rem',
          color: '#a0a0a0',
        }}
      >
        <div>
          {screen.category && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                background: 'rgba(78, 205, 196, 0.2)',
                borderRadius: '20px',
                marginRight: '1rem',
                color: '#4ecdc4',
              }}
            >
              {screen.category}
            </span>
          )}
          {screen.description && <span>{screen.description}</span>}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {screens.map(
            (s) =>
              s.id !== id && (
                <Link
                  key={s.id}
                  href={`/screen/${s.id}`}
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {s.name}
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  )
}
