/**
 * @class :StockAcount
 * @description:declaring a private varibles stockname,numberofshare and price of share
 */
class StockAcount {
  constructor(sName, NoOfShares, SharePrice) {
    this.stoskName = sName;
    this.NoOfShare = NoOfShares;
    this.SharePrice = SharePrice;
  }
  /**
   * @function :total
   * @description :multiplying all the shares and price
   */
  total = () => {
    return this.NoOfShare * this.SharePrice;
  };
}
/**
 * @class :Stock
 * @description :extending the property of parentclass using an extend key word SingleLevel Inheritance
 */
class Stock extends StockAcount {
  constructor(sName, NoOfShare, SharePrice) {
    super(sName, NoOfShare, SharePrice);
  }
}
// exporting the objects and functionlaties
module.exports = {
  Stock
};
