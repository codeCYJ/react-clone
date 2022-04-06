const study = () => {
  const array = [1, 2, 3, 4, 5];
  const filter2 = (a) => {
    const answer = [];
    for (let i = 0; i < this.length; i++) {
      if (a(this[i],i)) {
        answer.push(this[i]);
      }
    }
    return answer;
  };
  const result = array.filter2((a, i) => a > 3);
  return {};
};

