import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type HeaderMenuProps = {};

const HeaderMenu: FC<HeaderMenuProps> = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Dash26 Hexagonal TS example</h1>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <Link to="/counter">Smart Counter example</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/books">Books API Example</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
