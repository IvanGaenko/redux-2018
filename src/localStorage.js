export const localState = () => {
  try {
    const actState = localStorage.getItem('state');
    if (actState) {
      return JSON.parse(actState);
    } else {
      return undefined;
    }
  } catch {
    return undefined;
  }
};

export const saveState = state => {
  localStorage.setItem('state', JSON.stringify(state));
};