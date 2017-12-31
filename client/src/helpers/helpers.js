
export const removeSpacesInObjectKeys = json => {
  const keyValues = Object.keys(json).map(key => {
    const newKey = key.replace(/\s+/g, '_');
    return { [newKey]: json[key] };
  });
  return Object.assign({}, ...keyValues);
};

