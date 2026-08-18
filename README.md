# Labs Dev Code

Corporate website for Labs Dev Code, built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

Copy `.env.example` to `.env.local` when configuring a server-side contact delivery provider. The contact endpoint validates inputs and includes a honeypot; connect your provider server-side before production delivery. No payment integration is enabled.

Product, company and public metadata live in `config/`. Do not add private tax or payment credentials to public configuration files.

`lib/payments.ts` exposes provider-neutral methods for a later Stripe or PayPal server-side integration. It intentionally cannot accept or store card data.
