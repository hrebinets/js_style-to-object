'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrStyles = sourceString.split(';').map((str) => str.trim());
  const arrByArrStyles = arrStyles.map((str) => {
    const parts = str.split(':');

    return parts.map((part) => part.trim());
  });
  const newObj = {};

  arrByArrStyles.forEach((element) => {
    newObj[element[0]] = element[1];
  });

  return newObj;
}

module.exports = convertToObject;
