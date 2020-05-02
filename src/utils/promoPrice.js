import { parseOptionPrice } from './parseOptionPrice';

export const promoPrice = (priceStandard, discount) => {
  if (priceStandard == undefined && discount == undefined) {
    return null;
  }

  let parsedPrice = parseOptionPrice(priceStandard).value;

  console.log('price:',parsedPrice, 'disc:', discount);

  if (isNaN(parsedPrice) || isNaN(discount)
    || parsedPrice <= 0 || discount <= 0
  )
  {
    return null;
  }
  else {
    const discountedPrice = parsedPrice - (discount * parsedPrice/ 100);

    return discountedPrice;
  }
};
