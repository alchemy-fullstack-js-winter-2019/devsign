
    
const cloudinaryUsername = 'fieldnotesmedia';
const cloudinaryUrl = `http://res.cloudinary.com/${cloudinaryUsername}/image/fetch`;

export const getImageUrl = (url, options = []) => {
  return `${cloudinaryUrl}/${options.join(',')}/${url}`;
};
