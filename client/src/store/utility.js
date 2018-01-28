export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
export const updateList = (oldObject, oldListInObject, updatedProperties) => {
  return {
    ...oldObject,
    lists: {
      ...oldListInObject,
      ...updatedProperties,
    },
  };
};

export const addToInnerList = (existingInnerList, innerList, newItem) => {
  const outerList = {};
  outerList[innerList] = [...existingInnerList];
  outerList[innerList].push(newItem);
  return outerList;
};
export const makeNewList = (innerList, newItem) => {
  const outerList = {};
  outerList[innerList] = [];
  outerList[innerList].push(newItem);
  return outerList;
};
