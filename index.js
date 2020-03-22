import uuid from 'uuid/v4';

const generateSlug = (target, hasUuidSuffix = false) => {
  const text = target.toLowerCase();
  // Delete all but number and alphabet string
  const filterdText = text.replace(/[^a-zA-Z0-9]/g, ' ');
  let textArray = filterdText.split(/\s|\n\t/g);
  textArray = textArray.filter(text => {
    return text !== '';
  });
  const slug = textArray.join('-');
  if (hasUuidSuffix) return `${slug}-${uuid().split('-')[0]}`;
  return slug;
};

export default generateSlug;
