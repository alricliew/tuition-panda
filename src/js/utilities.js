
// https://thenable.io/handling-async-errors

export const handle = (promise) =>
  promise
    .then((data) => [undefined, data])
    .catch((error) => Promise.resolve([error, undefined]));