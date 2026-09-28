import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      style={{ 
        backgroundColor: 'var(--bg-alt)', 
        borderBottom: '1px solid var(--border-light)',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.825rem' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
          Home
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = name.replace(/-/g, ' ').toUpperCase();

          return (
            <React.Fragment key={name}>
              <ChevronRight size={12} color="var(--text-muted)" />
              {isLast ? (
                <span style={{ color: 'var(--accent-blue)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  {formattedName}
                </span>
              ) : (
                <Link to={routeTo} style={{ color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {formattedName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
