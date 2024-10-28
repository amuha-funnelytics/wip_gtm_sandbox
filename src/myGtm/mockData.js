/**
 * Explanation of Mock Object:
    - ecommerce: Represents the {{DLV - ecommerce}} data layer variable, containing items with product details.
    - vendor: Mimics the {{DLV - Vendor}} GTM variable, with vendor information.
    - order: Represents the {{DLV - Order}} data (not fully used in your function but included for completeness).
    - pagePath & domain: Replace {{Custom JS - Page Path}} and {{Page Hostname}} with fixed mock values.
    - basket: Represents a typical list of purchased items for calculation of cartTotal and cartTotalItems.
 */
export default {
  ecommerce: {
    items: [
      {
        item_name: 'Product 1',
        item_id: 'prod-001',
        price: 29.99,
        item_category: 'Electronics',
        quantity: 2,
      },
      {
        item_name: 'Product 2',
        item_id: 'prod-002',
        price: 15.5,
        item_category: 'Accessories',
        quantity: 1,
      },
    ],
  },
  vendor: {
    id: 'vendor-123',
    externalReference: 'ext-ref-456',
    name: 'Vendor Name',
  },
  order: {
    id: 'order-789',
    total: 75.48,
    currency: 'USD',
  },
  pagePath: '/checkout',
  domain: 'example.com',
  basket: [
    {
      totalCost: 59.98, // 2 * 29.99
      quantity: 2,
    },
    {
      totalCost: 15.5,
      quantity: 1,
    },
  ],
};
