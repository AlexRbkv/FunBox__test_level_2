import React from 'react';
import './PackageList.scss';
import Package from './package/Package';

const PackageList = ({ data }) => {
  return (
    <section className="Package-list__container">
      {data.map((item) => (
        <Package data={item} />
      ))}
    </section>
  );
};

export default PackageList;
