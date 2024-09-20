export const isNumber = x => typeof x === 'number' && !isNaN(x);

export const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms));
