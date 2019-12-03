import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import { useMenus, useCurrentDoc, useConfig } from 'docz';
import { Link } from 'gatsby';

export const Sidebar = ({ onClickMobileClose, open }) => {
  const [query, setQuery] = useState('');
  const menus = useMenus({ query });
  const currentDoc = useCurrentDoc();
  const [category, setCategory] = useState(currentDoc && currentDoc.category);
  const { categories } = useConfig();

  const handleCategoryChange = useCallback(
    (event) => {
      setCategory(event.target.name);
    },
    [setCategory],
  );

  return (
    <aside className={classnames('olt-Sidebar', open && 'is-open')}>
      <div>
        <div className={classnames('olt-Sidebar-mobile-actions')}>
          {/*<ActionButton*/}
          {/*  buttonType="default"*/}
          {/*  iconLeft="close"*/}
          {/*  standalone*/}
          {/*  base*/}
          {/*  onClick={onClickMobileClose}*/}
          {/*/>*/}
        </div>
        <nav>
          {categories &&
            categories.map(({ name, icon }) => (
              <React.Fragment key={name}>
                <button
                  className={classnames(
                    'olt-Sidebar-navigation-item',
                    `olt-Icon-${icon}`,
                    category === name && 'is-active',
                  )}
                  name={name}
                  onClick={handleCategoryChange}
                >
                  {name}
                </button>
                <nav className={classnames('olt-Sidebar-subnavigation')}>
                  {menus &&
                    menus
                      .filter((item) => item.category === name)
                      .map((item) => (
                        <Link
                          activeClassName="is-active"
                          to={item.route}
                          key={item.id}
                          className={classnames(
                            'olt-Sidebar-subnavigation-item',
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                </nav>
              </React.Fragment>
            ))}
        </nav>
      </div>
      <div>{/* Bottom */}</div>
    </aside>
  );
};

export default Sidebar;
