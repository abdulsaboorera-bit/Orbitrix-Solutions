import React, { useState, useEffect, useCallback } from 'react'
import './CookieConsent.css'

const CONSENT_KEY = 'cookie-consent'
const CONSENT_VERSION = '1.0'

const defaultPreferences = {
  essential: true,
  analytics: false,
  advertising: false,
  marketing: false,
}

const getStoredConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data.version !== CONSENT_VERSION) return null
    return data
  } catch {
    return null
  }
}

const storeConsent = (preferences) => {
  const data = { version: CONSENT_VERSION, preferences, timestamp: Date.now() }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
  window.dispatchEvent(new Event('cookie-consent-updated'))
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState(defaultPreferences)
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)))
    } else {
      setAnimateIn(false)
    }
  }, [visible])

  const handleAcceptAll = useCallback(() => {
    storeConsent({ essential: true, analytics: true, advertising: true, marketing: true })
    setVisible(false)
  }, [])

  const handleRejectAll = useCallback(() => {
    storeConsent({ ...defaultPreferences })
    setVisible(false)
  }, [])

  const handleSavePreferences = useCallback(() => {
    storeConsent({ ...preferences, essential: true })
    setVisible(false)
  }, [preferences])

  const handleToggle = useCallback((key) => {
    if (key === 'essential') return
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const reopen = useCallback(() => {
    const stored = getStoredConsent()
    if (stored) setPreferences(stored.preferences)
    setVisible(true)
    setShowCustomize(true)
  }, [])

  useEffect(() => {
    window.__reopenCookieConsent = reopen
    return () => { delete window.__reopenCookieConsent }
  }, [reopen])

  if (!visible) return null

  return (
    <div className={`cc-overlay ${animateIn ? 'cc-visible' : ''}`}>
      <div className={`cc-banner ${animateIn ? 'cc-banner-visible' : ''}`}>
        <div className="cc-banner-glow" />

        <div className="cc-header">
          <div className="cc-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
              <path d="M8.5 8.5v.01"/>
              <path d="M16 15.5v.01"/>
              <path d="M12 12v.01"/>
              <path d="M11 17v.01"/>
              <path d="M7 14v.01"/>
            </svg>
          </div>
          <div className="cc-title-area">
            <h3 className="cc-title">We value your privacy</h3>
            <p className="cc-subtitle">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
        </div>

        {showCustomize && (
          <div className="cc-customize-panel">
            <div className="cc-toggles">
              <div className="cc-toggle-row">
                <div className="cc-toggle-info">
                  <span className="cc-toggle-label">Essential Cookies</span>
                  <span className="cc-toggle-desc">Required for the website to function. Cannot be disabled.</span>
                </div>
                <div className="cc-toggle cc-toggle-on cc-toggle-disabled">
                  <div className="cc-toggle-thumb" />
                </div>
              </div>
              <div className="cc-toggle-row">
                <div className="cc-toggle-info">
                  <span className="cc-toggle-label">Analytics Cookies</span>
                  <span className="cc-toggle-desc">Google Analytics — helps us understand how visitors interact with our site.</span>
                </div>
                <button
                  className={`cc-toggle ${preferences.analytics ? 'cc-toggle-on' : ''}`}
                  onClick={() => handleToggle('analytics')}
                  aria-label="Toggle analytics cookies"
                >
                  <div className="cc-toggle-thumb" />
                </button>
              </div>
              <div className="cc-toggle-row">
                <div className="cc-toggle-info">
                  <span className="cc-toggle-label">Advertising Cookies</span>
                  <span className="cc-toggle-desc">Google AdSense — used to display personalized advertisements.</span>
                </div>
                <button
                  className={`cc-toggle ${preferences.advertising ? 'cc-toggle-on' : ''}`}
                  onClick={() => handleToggle('advertising')}
                  aria-label="Toggle advertising cookies"
                >
                  <div className="cc-toggle-thumb" />
                </button>
              </div>
              <div className="cc-toggle-row">
                <div className="cc-toggle-info">
                  <span className="cc-toggle-label">Marketing Cookies</span>
                  <span className="cc-toggle-desc">Facebook Pixel — used to track conversions and deliver targeted ads.</span>
                </div>
                <button
                  className={`cc-toggle ${preferences.marketing ? 'cc-toggle-on' : ''}`}
                  onClick={() => handleToggle('marketing')}
                  aria-label="Toggle marketing cookies"
                >
                  <div className="cc-toggle-thumb" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="cc-actions">
          <button className="cc-btn cc-btn-accept" onClick={handleAcceptAll}>
            Accept All
          </button>
          <button className="cc-btn cc-btn-reject" onClick={handleRejectAll}>
            Reject All
          </button>
          {showCustomize ? (
            <button className="cc-btn cc-btn-save" onClick={handleSavePreferences}>
              Save Preferences
            </button>
          ) : (
            <button className="cc-btn cc-btn-customize" onClick={() => setShowCustomize(true)}>
              Customize
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
