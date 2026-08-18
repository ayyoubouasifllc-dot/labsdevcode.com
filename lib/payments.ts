/**
 * Provider-neutral contracts for a future server-side payment integration.
 * Keep provider SDKs and credentials in server-only modules/environment variables.
 */
export type CheckoutInput = { productSlug:string; priceId:string; customerEmail?:string };
export type SubscriptionInput = { customerId:string; priceId:string };
export type Subscription = { id:string; status:string; currentPeriodEnd?:Date };
export interface PaymentProvider {
  createCheckoutSession(input:CheckoutInput):Promise<{url:string}>;
  createSubscription(input:SubscriptionInput):Promise<Subscription>;
  cancelSubscription(subscriptionId:string):Promise<Subscription>;
  getSubscription(subscriptionId:string):Promise<Subscription | null>;
  createCustomerPortal(customerId:string):Promise<{url:string}>;
}

/** Wire this adapter to Stripe Checkout/Billing or PayPal server SDKs at deployment time. */
export const payments: PaymentProvider = {
  async createCheckoutSession(){throw new Error('A payment provider has not been configured.');},
  async createSubscription(){throw new Error('A payment provider has not been configured.');},
  async cancelSubscription(){throw new Error('A payment provider has not been configured.');},
  async getSubscription(){throw new Error('A payment provider has not been configured.');},
  async createCustomerPortal(){throw new Error('A payment provider has not been configured.');},
};
