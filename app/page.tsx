'use client'

import Link from 'next/link'
import { screens } from '@/config/screens'
import { useState } from 'react'

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Structure: { bg: 'rgba(147, 51, 234, 0.2)', text: '#a855f7', border: 'rgba(147, 51, 234, 0.3)' },
  Casino: { bg: 'rgba(255, 107, 107, 0.2)', text: '#ff6b6b', border: 'rgba(255, 107, 107, 0.3)' },
  Streamer: { bg: 'rgba(78, 205, 196, 0.2)', text: '#4ecdc4', border: 'rgba(78, 205, 196, 0.3)' },
  Auth: { bg: 'rgba(34, 197, 94, 0.2)', text: '#22c55e', border: 'rgba(34, 197, 94, 0.3)' },
  Onboarding: { bg: 'rgba(251, 191, 36, 0.2)', text: '#fbbf24', border: 'rgba(251, 191, 36, 0.3)' },
  Admin: { bg: 'rgba(239, 68, 68, 0.2)', text: '#ef4444', border: 'rgba(239, 68, 68, 0.3)' },
  Design: { bg: 'rgba(168, 85, 247, 0.2)', text: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories = Array.from(new Set(screens.map(s => s.category).filter(Boolean))) as string[]
  const filteredScreens = selectedCategory 
    ? screens.filter(s => s.category === selectedCategory)
    : screens

  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Verifluence
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#a0a0a0', marginBottom: '2rem' }}>
            Crypto casino platform prototype – sitemap and navigation for Figma screens
          </p>
          
          {/* Category filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                padding: '0.5rem 1.25rem',
                background: selectedCategory === null 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== null) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== null) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }
              }}
            >
              All screens ({screens.length})
            </button>
            {categories.map((category) => {
              const color = categoryColors[category] || { bg: 'rgba(255, 255, 255, 0.1)', text: '#ffffff', border: 'rgba(255, 255, 255, 0.2)' }
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: selectedCategory === category 
                      ? color.bg 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${selectedCategory === category ? color.border : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    color: selectedCategory === category ? color.text : '#a0a0a0',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.background = color.bg
                      e.currentTarget.style.color = color.text
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.color = '#a0a0a0'
                    }
                  }}
                >
                  {category} ({screens.filter(s => s.category === category).length})
                </button>
              )
            })}
          </div>
        </div>

        {/* Screens grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filteredScreens.map((screen) => {
            const color = screen.category ? categoryColors[screen.category] : { bg: 'rgba(255, 255, 255, 0.1)', text: '#ffffff', border: 'rgba(255, 255, 255, 0.2)' }
            return (
              <Link
                key={screen.id}
                href={`/screen/${screen.id}`}
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${color?.border || 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = color?.bg || 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = color?.border || 'rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = color?.border || 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {screen.category && (
                    <span style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background: color?.bg || 'rgba(78, 205, 196, 0.2)',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: color?.text || '#4ecdc4',
                    }}>
                      {screen.category}
                    </span>
                  )}
                  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                    {screen.imageUrl && (
                      <span style={{
                        fontSize: '0.7rem',
                        color: '#a0a0a0',
                        opacity: 0.7,
                      }} title="Image available">
                        📷
                      </span>
                    )}
                    {screen.figmaUrl && (
                      <span style={{
                        fontSize: '0.7rem',
                        color: '#a0a0a0',
                        opacity: 0.7,
                      }} title="Interactive prototype available">
                        🎨
                      </span>
                    )}
                  </div>
                </div>
                <h2 style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.75rem',
                  color: '#ffffff',
                  fontWeight: '600',
                }}>
                  {screen.name}
                </h2>
                {screen.description && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#a0a0a0',
                    lineHeight: '1.5',
                  }}>
                    {screen.description}
                  </p>
                )}
              </Link>
            )
          })}
        </div>

      </div>
    </main>
  )
}
