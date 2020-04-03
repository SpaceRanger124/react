export const required = value => value;

export const minLength = length => value => value.length >= length;

export const pattern = _pattern => value => _pattern.test(value);