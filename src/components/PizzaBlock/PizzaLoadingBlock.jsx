import React from 'react';

import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className={'pizza-block'}
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="131" cy="141" r="115" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="130" y="408" rx="25" ry="25" width="148" height="46" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
