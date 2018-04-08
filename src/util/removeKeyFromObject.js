export default (obj = {}, keyToRemove) =>
  Object.entries(obj)
    .filter(([key, val]) => key !== keyToRemove)
    .reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})
