import mockFunnelytics from '../mockFunnelytics';
import mockData from './mockData';

// Use this only in local testing, otherwise comment out
const window = mockFunnelytics;

// Pass mockData variables instead of GTM variables in your local script
const trackFunnelyticsPurchase = () => {
  let attempts = 0;
  const maxAttempts = 50;
  const { items = [] } = mockData.ecommerce || {};
  const { id: vendor_id, externalReference: vendor_externalReference, name: vendor_name } = mockData.vendor || {};
  const { pagePath, domain } = mockData;
  let cartTotal = 0;
  let cartTotalItems = 0;
  const cartTotalProducts = mockData.basket?.length || 0;

  mockData.basket?.forEach(({ totalCost, quantity }) => {
      cartTotal += totalCost;
      cartTotalItems += quantity;
  });

  const funnelyticsChecker = setInterval(() => {
      if (!window.funnelytics?.step) {
          attempts++;
          if (attempts >= maxAttempts) {
              clearInterval(funnelyticsChecker);
              console.log("Funnelytics not found after 10 seconds");
          }
          return;
      }
      clearInterval(funnelyticsChecker);

      items.forEach(({ price, quantity, item_name, item_id, item_category }) => {
          window.funnelytics.events.trigger('__commerce_action__', {
              pagePath,
              domain,
              __total_in_cents__: Math.floor(price * quantity * 100),
              item_name,
              item_id,
              price,
              item_category,
              quantity,
              vendor_id,
              vendor_externalReference,
              vendor_name,
              cartTotal,
              cartTotalProducts,
              cartTotalItems
          });
      });

  }, 200);
};

trackFunnelyticsPurchase();

