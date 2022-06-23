import React, { useState } from 'react';
import './Package.scss';
import PackageImage from '../../../assets/images/cat.png';

const Package = ({ data }) => {
  const { title, taste, bonus, weight, note, disable } = data;
  const [selected, setSelected] = useState(false);
  const [focused, setFocused] = useState(false);
  const onChangeSelect = () => {
    if (!disable) {
      setSelected((prev) => !prev);
    }
  };
  return (
    <article
      className={
        disable
          ? 'Package-container Package-container--disabled'
          : selected
          ? 'Package-container Package-container--selected'
          : 'Package-container Package-container--base'
      }>
      <div
        title="Упаковка"
        tabIndex={!disable ? '0' : '-1'}
        className="Package-card Package-card__outer"
        onClick={onChangeSelect}
        onMouseLeave={() => setFocused(false)}
        onMouseEnter={() => setFocused(true)}
        onKeyPress={onChangeSelect}>
        <div className="Package-card Package-card__inner">
          <div className="Package-card__description-wrap">
            <p className="Package-card__note">
              {selected ? (
                focused ? (
                  'Сказочное заморское яство'
                ) : (
                  <span className="red-text">Котэ не одобряет?</span>
                )
              ) : (
                'Сказочное заморское яство'
              )}
            </p>
            <h2 className="Package-card__title">
              {title}
              <span>{taste}</span>
            </h2>
            <ul className="Package-card__bonus">
              {bonus.map((item, index) => (
                <li key={index}>
                  <b>{item.match(/\d+/)}</b>{' '}
                  {/* Неидельная реализация, но при текущих данных подходит */}
                  {item.replace(/[0-9]/g, '')}
                </li>
              ))}
            </ul>
          </div>
          <img className="Package-card__image" src={PackageImage} alt="cat" />
          <div className="Package-card__weight">
            {weight}
            <span>кг</span>
          </div>
        </div>
      </div>
      <p className="Package__note">
        {disable ? (
          `Печалька, с ${taste} закончился.`
        ) : selected ? (
          <span>{note}</span>
        ) : (
          <>
            <span>Чего сидишь? Порадуй котэ, </span>
            <button title="Выбрать упаковку" type="button" onClick={onChangeSelect}>
              купи
            </button>
            <span className="blue-text">.</span>
          </>
        )}
      </p>
    </article>
  );
};

export default Package;
