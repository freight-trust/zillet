import * as util from '@zilliqa-js/util';
import { toBech32Address } from '@zilliqa-js/crypto';
const { units, BN } = util;
export const Account = state => {
  let wallet = state.wallet;
  if (state.wallet.address) {
    wallet.bech32Address = toBech32Address(state.wallet.address);
  }
  return wallet;
};
export const LoggedIn = state => !!state.wallet.privateKey;
export const Online = () => window.navigator.onLine;
export const Prices = state => state.prices;
export const Balance = (state, getters) => {
  let inZil = units.fromQa(new BN(state.wallet.balance), units.Units.Zil);
  let inUsd = inZil * getters.Prices.USD;
  return {
    zil: inZil,
    usd: inUsd,
    qa: state.wallet.balance
  };
};
