/**
 * Since we can build only valid JS, I've made all GTM variables string literals, so unfortunately, you'll have to 
 */
function trackFunnelyticsPurchase() {
  var attempts = 0;
  var maxAttempts = 50;
  var ecommerceObj = `{{DLV - ecommerce}}`;
  var items = ecommerceObj.items;
  var vendor = `{{DLV - Vendor}}`;
  var order = `{{DLV - Order}}`;
  var cartTotal = 0;
  var cartTotalItems = 0;
  var cartTotalProducts = basket.length;

  for (var i = 0; i < basket.length; i++) {
    cartTotal += basket[i].totalCost;
    cartTotalItems += basket[i].quantity;
  }

  var funnelyticsChecker = window.setInterval(function () {
    if (!window.funnelytics || !window.funnelytics.step) {
      attempts++;
      if (attempts >= maxAttempts) {
        window.clearInterval(funnelyticsChecker);
        console.log('Funnelytics not found after 10 seconds');
      }
      return;
    }
    window.clearInterval(funnelyticsChecker);

    for (var j = 0; j < items.length; j++) {
      window.funnelytics.events.trigger('__commerce_action__', {
        pagePath: `{{Custom JS - Page Path}}`,
        domain: `{{Page Hostname}}`,
        __total_in_cents__: Math.floor(items[j].price * items[j].quantity * 100),
        item_name: items[j].item_name,
        item_id: items[j].item_id,
        price: items[j].price,
        item_category: items[i].item_category,
        quantity: items[j].quantity,
        vendor_id: vendor.id,
        vendor_externalReference: vendor.externalReference,
        vendor_name: vendor.name,
        cartTotal: cartTotal,
        cartTotalProducts: cartTotalProducts,
        cartTotalItems: cartTotalItems,
      });
    }
  }, 200);
}

trackFunnelyticsPurchase();
