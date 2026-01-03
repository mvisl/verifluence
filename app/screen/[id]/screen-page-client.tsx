'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { screens } from '@/config/screens'

type ViewMode = 'image' | 'iframe' | 'flowImage' | 'flowEmbed'

export default function ScreenPageClient({ id }: { id: string }) {
  const screen = screens.find((s) => s.id === id)
  const hasImage = Boolean(screen?.imageUrl)
  const hasFigma = Boolean(screen?.figmaUrl)
  const hasFlowImage = Boolean(screen?.flowImageUrl)
  const hasFlowEmbed = Boolean(screen?.flowEmbedUrl)

  const defaultViewMode: ViewMode = useMemo(() => {
    if (hasImage) return 'image'
    if (hasFigma) return 'iframe'
    if (hasFlowImage) return 'flowImage'
    if (hasFlowEmbed) return 'flowEmbed'
    return 'image'
  }, [hasImage, hasFigma, hasFlowImage, hasFlowEmbed])

  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode)

  useEffect(() => {
    setViewMode(defaultViewMode)
  }, [defaultViewMode, id])

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
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Screen not found</h1>
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
          Back to sitemap
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          ← Sitemap
        </Link>
        <h1 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{screen.name}</h1>
        <div style={{ width: '120px' }} /> {/* Spacer for centering */}
      </nav>

      {(hasImage || hasFigma || hasFlowImage || hasFlowEmbed) && (
        <div
          style={{
            padding: '0.5rem 2rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {hasImage && (
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
              📷 Screens (image)
            </button>
          )}
          {hasFigma && (
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
              🎨 Screens (prototype)
            </button>
          )}
          {hasFlowImage && (
            <button
              onClick={() => setViewMode('flowImage')}
              style={{
                padding: '0.5rem 1rem',
                background:
                  viewMode === 'flowImage' ? 'rgba(78, 205, 196, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${
                  viewMode === 'flowImage' ? '#4ecdc4' : 'rgba(255, 255, 255, 0.2)'
                }`,
                borderRadius: '6px',
                color: viewMode === 'flowImage' ? '#4ecdc4' : '#a0a0a0',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
              }}
            >
              🧭 Flow (image)
            </button>
          )}
          {hasFlowEmbed && (
            <button
              onClick={() => setViewMode('flowEmbed')}
              style={{
                padding: '0.5rem 1rem',
                background:
                  viewMode === 'flowEmbed' ? 'rgba(78, 205, 196, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${
                  viewMode === 'flowEmbed' ? '#4ecdc4' : 'rgba(255, 255, 255, 0.2)'
                }`,
                borderRadius: '6px',
                color: viewMode === 'flowEmbed' ? '#4ecdc4' : '#a0a0a0',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
              }}
            >
              🧭 Flow (slides)
            </button>
          )}
        </div>
      )}

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
        ) : viewMode === 'flowImage' && screen.flowImageUrl ? (
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
                src={screen.flowImageUrl}
                alt={`${screen.name} flow`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxWidth: '1920px',
                }}
              />
            </div>
          </div>
        ) : viewMode === 'flowEmbed' && screen.flowEmbedUrl ? (
          <iframe
            src={screen.flowEmbedUrl}
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'calc(100vh - 120px)',
              border: 'none',
              background: '#0a0a0a',
            }}
            allowFullScreen
            title={`${screen.name} flow`}
          />
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
            <p>Content is not available. Add imageUrl or figmaUrl in the configuration.</p>
          </div>
        )}
      </div>

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
