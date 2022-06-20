import React from 'react';
import './PackagesList.scss';
import Package from './Package/Package';

const PackageList = ({ data }) => {
  return (
    <section className="Package-list__container">
      {data.map((item, index) => (
        <Package key={item.id} data={item} tabindex={index + 1} />
      ))}
    </section>
  );
};

export default PackageList;
