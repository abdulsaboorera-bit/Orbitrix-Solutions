import React, { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopy,
  faCheck,
  faRandom,
  faPalette,
  faPaintBrush,
  faCode,
  faFileCode,
  faFileExport,
} from '@fortawesome/free-solid-svg-icons';
import SEO from '../../SEO';
import Footer from '../../Footer';
import './ColorPaletteGenerator.css';

const hexToHsl = (hex) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const hslToHex = (h, s, l) => {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  const toHex = (v) => {
    const hex = Math.round((v + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const hslToRgb = (h, s, l) => {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

const generateComplementary = (h, s, l) => [
  hslToHex(h, s, l),
  hslToHex(h + 180, s, l),
  hslToHex(h, s, Math.min(l + 15, 95)),
  hslToHex(h + 180, s, Math.min(l + 15, 95)),
  hslToHex(h, s, Math.max(l - 15, 10)),
  hslToHex(h + 180, s, Math.max(l - 15, 10)),
];

const generateAnalogous = (h, s, l) => [
  hslToHex(h - 30, s, l),
  hslToHex(h - 15, s, l),
  hslToHex(h, s, l),
  hslToHex(h + 15, s, l),
  hslToHex(h + 30, s, l),
];

const generateTriadic = (h, s, l) => [
  hslToHex(h, s, l),
  hslToHex(h + 120, s, l),
  hslToHex(h + 240, s, l),
  hslToHex(h, s, Math.min(l + 20, 95)),
  hslToHex(h + 120, s, Math.min(l + 20, 95)),
  hslToHex(h + 240, s, Math.min(l + 20, 95)),
];

const generateSplitComplementary = (h, s, l) => [
  hslToHex(h, s, l),
  hslToHex(h + 150, s, l),
  hslToHex(h + 210, s, l),
  hslToHex(h, s, Math.min(l + 15, 95)),
  hslToHex(h + 150, s, Math.min(l + 15, 95)),
  hslToHex(h + 210, s, Math.min(l + 15, 95)),
];

const generateMonochromatic = (h, s, l) => [
  hslToHex(h, s, Math.max(l - 30, 10)),
  hslToHex(h, s, Math.max(l - 15, 10)),
  hslToHex(h, s, l),
  hslToHex(h, s, Math.min(l + 15, 95)),
  hslToHex(h, s, Math.min(l + 30, 95)),
];

const randomHex = () => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 40) + 50;
  const l = Math.floor(Math.random() * 30) + 40;
  return hslToHex(h, s, l);
};

const getContrastColor = (hex) => {
  const { r, g, b } = hslToRgb(...Object.values(hexToHsl(hex)));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
};

const palettes = [
  { name: 'Complementary', generator: generateComplementary, icon: faPalette },
  { name: 'Analogous', generator: generateAnalogous, icon: faPaintBrush },
  { name: 'Triadic', generator: generateTriadic, icon: faPalette },
  { name: 'Split-Complementary', generator: generateSplitComplementary, icon: faPalette },
  { name: 'Monochromatic', generator: generateMonochromatic, icon: faPaintBrush },
];

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('#1a8187');
  const [copiedColor, setCopiedColor] = useState(null);
  const [copiedExport, setCopiedExport] = useState(null);
  const [exportFormat, setExportFormat] = useState(null);

  const { h, s, l } = hexToHsl(baseColor);

  const allPalettes = palettes.map((p) => ({
    ...p,
    colors: p.generator(h, s, l),
  }));

  const copyColor = useCallback((hex) => {
    navigator.clipboard.writeText(hex).catch(() => {});
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  }, []);

  const randomize = useCallback(() => {
    setBaseColor(randomHex());
  }, []);

  const generateCSS = useCallback(() => {
    const lines = [':root {'];
    allPalettes.forEach((p) => {
      const prefix = p.name.toLowerCase().replace(/[\s-]+/g, '-');
      p.colors.forEach((c, i) => {
        lines.push(`  --${prefix}-${i + 1}: ${c};`);
      });
      lines.push('');
    });
    lines.push('}');
    return lines.join('\n').trim();
  }, [allPalettes]);

  const generateTailwind = useCallback(() => {
    const lines = ['module.exports = {', '  theme: {', '    extend: {', '      colors: {'];
    allPalettes.forEach((p) => {
      const prefix = p.name.toLowerCase().replace(/[\s-]+/g, '-');
      lines.push(`        '${prefix}': {`);
      p.colors.forEach((c, i) => {
        lines.push(`          ${(i + 1) * 100}: '${c}',`);
      });
      lines.push('        },');
    });
    lines.push('      },');
    lines.push('    },');
    lines.push('  },');
    lines.push('};');
    return lines.join('\n');
  }, [allPalettes]);

  const generateJSON = useCallback(() => {
    const obj = {};
    allPalettes.forEach((p) => {
      const prefix = p.name.toLowerCase().replace(/[\s-]+/g, '-');
      obj[prefix] = {};
      p.colors.forEach((c, i) => {
        obj[prefix][(i + 1) * 100] = c;
      });
    });
    return JSON.stringify(obj, null, 2);
  }, [allPalettes]);

  const copyExport = useCallback(() => {
    let text;
    if (exportFormat === 'css') text = generateCSS();
    else if (exportFormat === 'tailwind') text = generateTailwind();
    else if (exportFormat === 'json') text = generateJSON();
    else return;

    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedExport(exportFormat);
    setTimeout(() => setCopiedExport(null), 2000);
  }, [exportFormat, generateCSS, generateTailwind, generateJSON]);

  const getExportContent = () => {
    if (exportFormat === 'css') return generateCSS();
    if (exportFormat === 'tailwind') return generateTailwind();
    if (exportFormat === 'json') return generateJSON();
    return '';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'r' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        randomize();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [randomize]);

  return (
    <div className="cpg-page">
      <SEO
        title="Free Color Palette Generator | Create Beautiful Color Schemes | Orbitrix Solutions"
        description="Generate stunning color palettes using color theory. Export as CSS custom properties, Tailwind config, or JSON. Supports complementary, analogous, triadic, and more."
        keywords="color palette generator, color scheme generator, CSS color palette, Tailwind colors, complementary colors, color wheel"
      />

      <section className="cpg-hero">
        <div className="about-label">FREE TOOL</div>
        <h1>Color Palette Generator</h1>
        <p>
          Generate beautiful color palettes using color theory algorithms.
          Export as CSS, Tailwind config, or JSON.
        </p>
      </section>

      <section className="cpg-tool-section">
        {/* Controls */}
        <div className="cpg-controls">
          <div className="cpg-picker-group">
            <label className="cpg-picker-label">
              <FontAwesomeIcon icon={faPalette} /> Base Color
            </label>
            <div className="cpg-picker-row">
              <div className="cpg-color-input-wrapper">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="cpg-color-input"
                />
                <span className="cpg-color-hex">{baseColor.toUpperCase()}</span>
              </div>
              <input
                type="text"
                value={baseColor}
                onChange={(e) => {
                  const v = e.target.value;
                  if (/^#[0-9a-fA-F]{0,6}$/.test(v)) setBaseColor(v);
                }}
                className="cpg-hex-input"
                placeholder="#1a8187"
              />
              <button className="cpg-random-btn" onClick={randomize} title="Randomize (Ctrl+R)">
                <FontAwesomeIcon icon={faRandom} /> Randomize
              </button>
            </div>
          </div>

          {/* HSL Info */}
          <div className="cpg-hsl-info">
            <div className="cpg-hsl-item">
              <span className="cpg-hsl-label">H</span>
              <span className="cpg-hsl-value">{h}°</span>
            </div>
            <div className="cpg-hsl-item">
              <span className="cpg-hsl-label">S</span>
              <span className="cpg-hsl-value">{s}%</span>
            </div>
            <div className="cpg-hsl-item">
              <span className="cpg-hsl-label">L</span>
              <span className="cpg-hsl-value">{l}%</span>
            </div>
          </div>
        </div>

        {/* Palette Grid */}
        <div className="cpg-palette-grid">
          {allPalettes.map((p) => (
            <div key={p.name} className="cpg-palette-card">
              <div className="cpg-palette-header">
                <FontAwesomeIcon icon={p.icon} />
                <h3>{p.name}</h3>
              </div>
              <div className="cpg-color-swatches">
                {p.colors.map((color, i) => (
                  <button
                    key={i}
                    className="cpg-swatch"
                    style={{
                      backgroundColor: color,
                      color: getContrastColor(color),
                    }}
                    onClick={() => copyColor(color)}
                    title={`Click to copy ${color}`}
                  >
                    {copiedColor === color ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <span className="cpg-swatch-hex">{color.toUpperCase()}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Export Section */}
        <div className="cpg-export-section">
          <h2>
            <FontAwesomeIcon icon={faFileExport} /> Export Palette
          </h2>

          <div className="cpg-export-buttons">
            <button
              className={`cpg-export-btn ${exportFormat === 'css' ? 'active' : ''}`}
              onClick={() => setExportFormat(exportFormat === 'css' ? null : 'css')}
            >
              <FontAwesomeIcon icon={faCode} /> CSS
            </button>
            <button
              className={`cpg-export-btn ${exportFormat === 'tailwind' ? 'active' : ''}`}
              onClick={() => setExportFormat(exportFormat === 'tailwind' ? null : 'tailwind')}
            >
              <FontAwesomeIcon icon={faFileCode} /> Tailwind
            </button>
            <button
              className={`cpg-export-btn ${exportFormat === 'json' ? 'active' : ''}`}
              onClick={() => setExportFormat(exportFormat === 'json' ? null : 'json')}
            >
              <FontAwesomeIcon icon={faFileCode} /> JSON
            </button>
          </div>

          {exportFormat && (
            <div className="cpg-export-output">
              <div className="cpg-export-toolbar">
                <span className="cpg-export-label">{exportFormat.toUpperCase()} Output</span>
                <button className="cpg-export-copy" onClick={copyExport}>
                  <FontAwesomeIcon icon={copiedExport === exportFormat ? faCheck : faCopy} />
                  {copiedExport === exportFormat ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="cpg-export-code">
                {getExportContent()}
              </pre>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColorPaletteGenerator;
