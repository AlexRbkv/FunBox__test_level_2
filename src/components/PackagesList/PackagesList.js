import React from 'react';
import './PackagesList.scss';
import Package from './Package/Package';

const PackageList = ({ data }) => {
  return (
    <div className="Package-list__container">
      {data.map((item, index) => (
        <Package key={item.id} data={item} tabindex={index + 1} />
      ))}
    </div>
  );
};

export default PackageList;
