import React, { useState, useMemo, useEffect, memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./CitySelector.css";

const CityItem = memo(props => {
  const { name, onSelect } = props;

  return (
    <li className="city-li" onClick={() => onSelect(name)}>
      {name}
    </li>
  );
});

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

const CitySelection = memo(props => {
  const { title, cities = [], onSelect } = props;
  return (
    <ul className="city-ul">
      <li className="city-li" key="title">
        {title}
      </li>
      {cities.map(city => {
        return (
          <CityItem key={city.name} name={city.name} onSelect={onSelect} />
        );
      })}
    </ul>
  );
});

CitySelection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array,
  onSelect: PropTypes.func.isRequired
};

const AlphaIndex = memo(props => {
  const { alpha, onClick } = props;

  return (
    <i className="city-index-item" onClick={() => onClick(alpha)}>
      {alpha}
    </i>
  );
});

const getAlphabetArray = () => {
  return Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
  });
};

const CityList = memo(props => {
  const { sections, onSelect } = props;

  return (
    <div className="city-list">
      <div className="city-cate">
        {sections.map(section => {
          return (
            <CitySelection
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
});

CityList.propTypes = {
  sections: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default function CitySelector(props) {
  const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props;

  const [searchKey, setSearchKey] = useState("");

  const key = useMemo(() => searchKey.trim(), [searchKey]);

  useEffect(() => {
    if (!show || cityData || isLoading) {
      return;
    }
    fetchCityData();
  }, [show, cityData]);

  const outputCitySelectors = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (cityData) {
      return <CityList sections={cityData.cityList} onSelect={onSelect} />;
    }
    return <div>error</div>;
  };
  return (
    <div
      className={classnames("city-selector", {
        hidden: !show
      })}
    >
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="please input the name of station or city"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          className={classnames("search-clean", { hidden: key.length === 0 })}
          onClick={() => setSearchKey("")}
        >
          &#xf063;
        </i>
      </div>
      {outputCitySelectors()}
    </div>
  );
}

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
