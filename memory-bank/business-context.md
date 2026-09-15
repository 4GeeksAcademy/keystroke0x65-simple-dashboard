# Business Context

## Business scenario

An influencer is beginning to work with brands and needs to measure the impact of her advertising activity and the conversions it generates. She promotes products across multiple social media accounts, including Instagram, TikTok, YouTube, and potentially other platforms.

The core problem is that performance and sales information is scattered across these platforms. She needs a consolidated reporting dashboard that makes the most important business information easy to understand and supports quick decisions without requiring her to interpret disconnected datasets.

## Dashboard purpose

Design a clear, professional dashboard that consolidates information from all of the influencer's social media accounts and presents the metrics that matter most for managing the business.

The dashboard should help answer:

- How much money am I generating in commissions?
- Which products are generating the most revenue?
- How well are my ads converting? (`conversions / reach`)
- Which platforms are generating the best return? (`revenue / costs`)
- What is the engagement rate by platform and by product?

## Products and commission model

The influencer promotes three products with different selling prices. She receives a 15% commission for every sale generated.

| Product   | Price | Commission rate | Commission per sale |
| --------- | ----: | --------------: | ------------------: |
| Product A |   €50 |             15% |               €7.50 |
| Product B |  €120 |             15% |              €18.00 |
| Product C |   €80 |             15% |              €12.00 |

### Calculation rules

- **Commission per sale** = product price × 15%
- **Total commissions** = sum of commissions from all generated sales
- **Product revenue** = selling price × number of sales
- **Return by platform** = revenue attributed to the platform ÷ platform advertising costs
- **Conversion rate** = conversions ÷ reach
- **Engagement rate** should be reported by platform and by product using the available engagement events and an explicitly defined denominator (such as reach or impressions).

## Reporting expectations

The dashboard should consolidate, compare, and summarize performance across:

- Social media platforms
- Products
- Advertising campaigns
- Reach, engagement, conversions, sales, revenue, costs, and commissions

The primary audience is the influencer, who needs an accessible overview of business performance rather than a technical analytics interface. Metrics should be presented in a way that allows her to identify the best-performing products and platforms, understand advertising effectiveness, and act quickly.
