// src/components/Objectives.jsx
import React, { useEffect, useMemo, useState } from 'react';
import {
  marketingData,
  communicationData,
  campaignData,
  HEADERS_FOR_TYPE,
} from '../constants/objectives';

// Use your existing app colors:
// - Page bg: #f3e8ff (global container, see App.jsx)
// - Section wrapper: #e9d5ff (container card behind white cards)
// - Primary accent: #4c51bf (used in charts/buttons in your project)
// - Text: #2d3748 / #4a5568
const COLORS = {
  text: '#2d3748',
  subtext: '#4a5568',
  cardBg: '#ffffff',
  cardEdge: '#e2e8f0',
  rowAlt: '#f8fafc',
  accent: '#4c51bf',        // headers, toggles, etc. (no blue)
  accentAlt: '#434190',     // hover/darker
};

const GROUPS = [
  { title: 'Marketing Objectives', data: marketingData },
  { title: 'Communication Objectives', data: communicationData },
  { title: 'Campaign Objectives', data: campaignData },
];

export default function Objectives() {
  const [selected, setSelected] = useState({
    'Marketing Objectives': new Set(),
    'Communication Objectives': new Set(),
    'Campaign Objectives': new Set(),
  });

  // Default: first item in each group selected (like the Tkinter version)
  useEffect(() => {
    setSelected((prev) => {
      const next = { ...prev };
      GROUPS.forEach((g) => {
        const first = Object.keys(g.data)[0];
        if (first) next[g.title] = new Set([first]);
      });
      return next;
    });
  }, []);

  const handleToggle = (groupTitle, item) => {
    setSelected((prev) => {
      const s = new Set(prev[groupTitle]);
      if (s.has(item)) s.delete(item);
      else s.add(item);
      return { ...prev, [groupTitle]: s };
    });
  };

  const FiltersBar = () => (
    <div className="filters">
      {GROUPS.map(({ title, data }) => (
        <div key={title} className="filter-group">
          <div className="filter-title">{title}</div>
          <div className="filter-items">
            {Object.keys(data).map((item) => (
              <label key={item} className="pill">
                <input
                  type="checkbox"
                  checked={selected[title]?.has(item) || false}
                  onChange={() => handleToggle(title, item)}
                />
                <span className="tick" />
                <span className="label">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .filters {
          width: 100%;            /* NEW */
          padding: 1rem 1rem 0.75rem;
          margin-bottom: 1.25rem;
        }
        .filter-group { margin-bottom: 1rem; }
        .filter-title {
          font-weight: 600;
          color: ${COLORS.text};
          margin-bottom: 0.5rem;
        }
        .filter-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem 0.5rem 2rem;
          border: 1px solid ${COLORS.cardEdge};
          background: #f8fafc;
          border-radius: 999px;
          cursor: pointer;
          user-select: none;
          color: ${COLORS.subtext};
          font-size: 0.9rem;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .pill:hover { border-color: #cbd5e0; }
        .pill input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .tick {
          position: absolute;
          left: 0.5rem;
          width: 1rem;
          height: 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 4px;
          background: #fff;
          transition: all 0.2s;
        }
        .pill input:checked + .tick {
          background: ${COLORS.accent};
          border-color: ${COLORS.accent};
        }
        .pill input:checked + .tick::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid #fff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        .label { white-space: nowrap; }
      `}</style>
    </div>
  );

  const TableCard = ({ groupTitle, itemTitle, rows }) => {
    const headers = HEADERS_FOR_TYPE(groupTitle);
    const maxRows = Math.max(...headers.map((h) => rows[h]?.length || 0));
    const gridCols = headers.length;

    return (
      <div className="outer">
        <div className="inner">
          <div className="title">{itemTitle}</div>

          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
          >
            {headers.map((h) => (
              <div key={h} className="th">
                {h}
              </div>
            ))}

            {Array.from({ length: maxRows }).map((_, r) =>
              headers.map((h) => {
                const v = rows[h]?.[r] ?? '';
                const alt = r % 2 === 0 ? ' alt' : '';
                return (
                  <div key={`${r}-${h}`} className={`td${alt}`}>
                    {v}
                  </div>
                );
              })
            )}
          </div>
        </div>

        <style jsx>{`
          .outer {
            background: ${COLORS.cardBg};
            border: 1px solid ${COLORS.cardEdge};
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }
          .inner {
            border-radius: 12px;
            padding: 12px;
          }
          .title {
            font-weight: 700;
            color: ${COLORS.text};
            margin: 2px 4px 10px;
          }
          .grid {
            display: grid;
            gap: 2px;
            background: ${COLORS.cardEdge};
            border: 1px solid ${COLORS.cardEdge};
            border-radius: 8px;
            overflow: hidden;
          }
          .th {
            background: ${COLORS.accent}; /* purple header to match project */
            color: #fff;
            font-weight: 600;
            padding: 10px 12px;
            font-size: 0.95rem;
          }
          .td {
            background: ${COLORS.cardBg};
            color: ${COLORS.subtext};
            padding: 10px 12px;
            font-size: 0.95rem;
            line-height: 1.4;
          }
          .td.alt { background: ${COLORS.rowAlt}; }
          @media (max-width: 900px) {
            .th, .td { font-size: 0.9rem; }
          }
        `}</style>
      </div>
    );
  };

  const Section = ({ title, cards }) => (
    <section className="section">
      <h3 className="heading">{title}</h3>
      <div className="stack">
        {cards.length === 0 ? <div className="empty">No selections yet.</div> : cards}
      </div>

      <style jsx>{`
        .section {
          background: #e9d5ff; /* your purple container */
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .heading {
          color: ${COLORS.text};
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .stack {
          display: grid;
          gap: 1rem;
        }
        .empty {
          color: ${COLORS.subtext};
          font-style: italic;
        }
      `}</style>
    </section>
  );

  const sections = useMemo(() => {
    return GROUPS.map(({ title, data }) => {
      const items = Array.from(selected[title] || []);
      const cards = items.map((item) => (
        <TableCard key={`${title}-${item}`} groupTitle={title} itemTitle={item} rows={data[item]} />
      ));
      return <Section key={title} title={title} cards={cards} />;
    });
  }, [selected]);

    return (
      <div className="page">
        {/* Make filters use the same Section look as tables */}
        <Section
          cards={[
            <div key="filters" className="outer">
              <div className="inner">
                <FiltersBar />
              </div>
            </div>
          ]}
        />

        {sections}

        <style jsx>{`
        .page {
          max-width: none;
          margin: 0;
          padding: 0;
        }
        `}</style>
      </div>
    );
}
