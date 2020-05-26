const paymentsCard = {
    cash: '100$'
};
const creditCard = {
  creditLimit: '50$',
  cash: '200$'
};
const universalCard = Object.assign({}, creditCard, paymentsCard);
