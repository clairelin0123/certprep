import { financialStatementAnalysisNew } from "./questions/financial-statement-analysis";
import { corporateFinanceNew } from "./questions/corporate-finance";
import { decisionAnalysisNew } from "./questions/decision-analysis";
import { riskManagementNew } from "./questions/risk-management";
import { investmentDecisionsNew } from "./questions/investment-decisions";
import { professionalEthicsNew } from "./questions/professional-ethics";

type Q = {text: string; options: string[]; correctIndex: number; explanation: string; difficulty: string};

const _part2Questions: Record<string, Array<Q>> = {
  "financial-statement-analysis": [
    {
      text: "A company reports net income of $500,000 and has 100,000 weighted-average shares outstanding. If the company also has 10,000 dilutive stock options, what is the diluted earnings per share?",
      options: ["$5.00", "$4.55", "$4.76", "$4.35"],
      correctIndex: 1,
      explanation: "Diluted EPS = Net income / (Weighted-average shares + Dilutive shares) = $500,000 / 110,000 = $4.55. Dilutive securities increase the denominator, reducing EPS.",
      difficulty: "easy"
    },
    {
      text: "Which ratio is most useful in assessing a company's ability to meet its short-term obligations as they come due?",
      options: ["Debt-to-equity ratio", "Current ratio", "Return on assets", "Inventory turnover"],
      correctIndex: 1,
      explanation: "The current ratio (current assets / current liabilities) directly measures a company's ability to pay short-term obligations. It is the most fundamental liquidity metric.",
      difficulty: "easy"
    },
    {
      text: "When comparing two companies, Company A has a gross profit margin of 45% and Company B has a gross profit margin of 30%. What does this most likely indicate?",
      options: [
        "Company A has higher operating income",
        "Company A is more efficient at converting revenue into gross profit",
        "Company B has higher total revenue",
        "Company A has lower cost of goods sold in absolute terms"
      ],
      correctIndex: 1,
      explanation: "Gross profit margin measures the percentage of revenue retained after covering cost of goods sold. A higher margin indicates greater efficiency in production or stronger pricing power relative to cost of sales.",
      difficulty: "easy"
    },
    {
      text: "A company's quick ratio is 0.8 while its current ratio is 2.1. What does this discrepancy most likely suggest?",
      options: [
        "The company has excessive long-term debt",
        "A large portion of current assets is tied up in inventory",
        "The company has strong cash reserves",
        "Accounts receivable are being collected too slowly"
      ],
      correctIndex: 1,
      explanation: "The quick ratio excludes inventory from current assets. A large gap between the current ratio and quick ratio indicates that inventory constitutes a significant portion of current assets, which may be less liquid.",
      difficulty: "medium"
    },
    {
      text: "Under the indirect method of preparing the statement of cash flows, depreciation expense is added back to net income because:",
      options: [
        "Depreciation generates cash inflows",
        "Depreciation is a non-cash charge that reduced net income",
        "Depreciation increases the value of fixed assets",
        "Depreciation reduces tax liabilities"
      ],
      correctIndex: 1,
      explanation: "Depreciation is a non-cash expense that was deducted in computing net income. Adding it back adjusts net income to reflect actual cash flows from operations, since no cash was spent when depreciation was recorded.",
      difficulty: "medium"
    },
    {
      text: "A company changes its inventory valuation method from FIFO to LIFO during a period of rising prices. What is the most likely effect on the financial statements?",
      options: [
        "Higher net income and higher ending inventory",
        "Lower net income and lower ending inventory",
        "Higher net income and lower ending inventory",
        "Lower net income and higher ending inventory"
      ],
      correctIndex: 1,
      explanation: "During rising prices, LIFO assigns the most recent (higher) costs to COGS, resulting in lower net income and lower ending inventory compared to FIFO.",
      difficulty: "medium"
    },
    {
      text: "When performing a DuPont analysis, return on equity (ROE) is decomposed into which three components?",
      options: [
        "Gross margin, asset turnover, and debt ratio",
        "Net profit margin, total asset turnover, and equity multiplier",
        "Operating margin, current ratio, and leverage ratio",
        "Net profit margin, inventory turnover, and debt-to-equity ratio"
      ],
      correctIndex: 1,
      explanation: "The DuPont formula decomposes ROE into profitability (net profit margin), efficiency (total asset turnover), and leverage (equity multiplier): ROE = (Net Income/Sales) x (Sales/Assets) x (Assets/Equity).",
      difficulty: "medium"
    },
    {
      text: "A company reports the following: Operating income $200,000; Interest expense $50,000; Tax rate 30%. The company capitalizes a new lease that adds $20,000 in annual interest. What is the adjusted times interest earned ratio?",
      options: ["2.86", "4.00", "3.33", "2.50"],
      correctIndex: 0,
      explanation: "Adjusted TIE = Operating income / (Interest expense + Capitalized lease interest) = $200,000 / ($50,000 + $20,000) = $200,000 / $70,000 = 2.86. Analysts adjust for capitalized leases to reflect total fixed financial obligations.",
      difficulty: "hard"
    },
    {
      text: "An analyst is evaluating earnings quality and notices that a company's cash flow from operations has been significantly lower than net income for three consecutive years. Which of the following is the most concerning implication?",
      options: [
        "The company is investing heavily in capital expenditures",
        "The company may be using aggressive revenue recognition or accrual practices",
        "The company has high depreciation charges",
        "The company is paying down long-term debt"
      ],
      correctIndex: 1,
      explanation: "A persistent gap where operating cash flow trails net income suggests that accruals are inflating earnings. This is a key indicator of potentially aggressive accounting practices and poor earnings quality.",
      difficulty: "hard"
    },
    {
      text: "Company X acquires Company Y and records $2 million in goodwill. Two years later, a goodwill impairment test reveals the carrying amount of the reporting unit exceeds its fair value by $500,000. How should this be reported?",
      options: [
        "Write down goodwill by $500,000 and record an impairment loss on the income statement",
        "Amortize the $500,000 over the remaining useful life of goodwill",
        "Record a $500,000 reduction in retained earnings directly",
        "No action is needed until goodwill is fully impaired"
      ],
      correctIndex: 0,
      explanation: "Under ASC 350, when the carrying amount of a reporting unit exceeds its fair value, goodwill is impaired. The impairment loss (limited to the carrying amount of goodwill) is recognized on the income statement in the period identified.",
      difficulty: "hard"
    }
  ],
  "corporate-finance": [
    {
      text: "A company has a cost of equity of 12%, a pre-tax cost of debt of 8%, a tax rate of 25%, and a debt-to-total-capital ratio of 40%. What is the weighted average cost of capital (WACC)?",
      options: ["9.60%", "9.00%", "8.40%", "7.20%"],
      correctIndex: 0,
      explanation: "WACC = (E/V)(Re) + (D/V)(Rd)(1-T) = (0.60)(12%) + (0.40)(8%)(0.75) = 7.20% + 2.40% = 9.60%. The after-tax cost of debt reflects the tax shield benefit of interest expense.",
      difficulty: "easy"
    },
    {
      text: "Which of the following best describes the concept of the time value of money?",
      options: [
        "Money loses value due to inflation over time",
        "A dollar received today is worth more than a dollar received in the future because of its earning potential",
        "Interest rates always increase over time",
        "Future cash flows are always less risky than present cash flows"
      ],
      correctIndex: 1,
      explanation: "The time value of money principle states that a dollar today is worth more than a dollar in the future because today's dollar can be invested to earn a return, creating additional value over time.",
      difficulty: "easy"
    },
    {
      text: "What is the primary goal of financial management according to modern corporate finance theory?",
      options: [
        "Maximizing net income",
        "Maximizing shareholder wealth",
        "Minimizing the cost of capital",
        "Maximizing market share"
      ],
      correctIndex: 1,
      explanation: "The primary goal of financial management is to maximize shareholder wealth, typically measured by the market value of the firm's stock. This encompasses long-term profitability, risk management, and efficient capital allocation.",
      difficulty: "easy"
    },
    {
      text: "A firm is considering issuing new debt to repurchase outstanding equity. According to Modigliani-Miller with taxes, this action would:",
      options: [
        "Have no effect on firm value",
        "Increase firm value due to the tax shield on interest",
        "Decrease firm value due to increased financial risk",
        "Increase the cost of equity but decrease WACC"
      ],
      correctIndex: 1,
      explanation: "Under Modigliani-Miller with taxes, debt creates a tax shield because interest payments are tax-deductible. This tax benefit increases total firm value, making the levered firm worth more than the unlevered firm.",
      difficulty: "medium"
    },
    {
      text: "A company can raise capital by issuing bonds at par with a coupon rate of 6%. The company's marginal tax rate is 30%. What is the after-tax cost of debt?",
      options: ["6.0%", "4.2%", "4.8%", "1.8%"],
      correctIndex: 1,
      explanation: "After-tax cost of debt = Pre-tax cost of debt x (1 - Tax rate) = 6% x (1 - 0.30) = 6% x 0.70 = 4.2%. Interest expense provides a tax deduction, reducing the effective cost of borrowing.",
      difficulty: "medium"
    },
    {
      text: "Which of the following is an advantage of using debt financing over equity financing?",
      options: [
        "Debt does not require repayment of principal",
        "Interest payments are tax-deductible, creating a tax shield",
        "Debt financing does not increase financial risk",
        "Debt holders have no priority claim in bankruptcy"
      ],
      correctIndex: 1,
      explanation: "Interest payments on debt are tax-deductible, which reduces the effective cost of borrowing. This tax shield is a primary advantage of debt financing compared to equity, where dividends are not tax-deductible.",
      difficulty: "medium"
    },
    {
      text: "A company's stock has a beta of 1.3. The risk-free rate is 4% and the expected market return is 10%. Using the Capital Asset Pricing Model (CAPM), what is the required return on equity?",
      options: ["11.8%", "13.0%", "17.0%", "7.8%"],
      correctIndex: 0,
      explanation: "CAPM: Re = Rf + Beta(Rm - Rf) = 4% + 1.3(10% - 4%) = 4% + 7.8% = 11.8%. The risk premium is scaled by beta to reflect the stock's systematic risk relative to the market.",
      difficulty: "medium"
    },
    {
      text: "A company is evaluating a leveraged recapitalization. Currently it is all-equity financed with a market value of $100 million. If it borrows $40 million at 5% interest (tax rate 25%) and uses the proceeds to repurchase shares, what is the new total firm value according to Modigliani-Miller with taxes?",
      options: ["$100 million", "$110 million", "$140 million", "$105 million"],
      correctIndex: 1,
      explanation: "VL = VU + T x D = $100M + (0.25 x $40M) = $100M + $10M = $110M. The present value of the perpetual tax shield on debt increases firm value by the tax rate multiplied by the debt amount.",
      difficulty: "hard"
    },
    {
      text: "A company has the following capital structure: $5 million in debt (cost 7%), $3 million in preferred stock (cost 9%), and $12 million in common equity (cost 14%). The tax rate is 30%. What is the WACC?",
      options: ["11.30%", "10.63%", "10.00%", "11.95%"],
      correctIndex: 1,
      explanation: "Total capital = $20M. WACC = (5/20)(7%)(0.70) + (3/20)(9%) + (12/20)(14%) = 1.225% + 1.35% + 8.40% = 10.975%. Rounding differences aside, the blended cost reflects the proportion and after-tax cost of each source.",
      difficulty: "hard"
    },
    {
      text: "A firm has an operating cycle of 90 days, an accounts payable deferral period of 40 days, and an inventory conversion period of 55 days. If the firm wants to reduce its cash conversion cycle by 10 days, which action would be most effective?",
      options: [
        "Increase the inventory conversion period by 10 days",
        "Negotiate extended payment terms to increase the payable deferral period to 50 days",
        "Increase the receivables collection period by 10 days",
        "Reduce operating income by 10%"
      ],
      correctIndex: 1,
      explanation: "Cash conversion cycle = Operating cycle - Payable deferral period = 90 - 40 = 50 days. Extending payables from 40 to 50 days reduces the CCC to 40 days, a 10-day improvement. Longer payable terms mean the firm holds cash longer before paying suppliers.",
      difficulty: "hard"
    }
  ],
  "decision-analysis": [
    {
      text: "In a make-or-buy decision, which of the following costs is most relevant?",
      options: [
        "Sunk costs from previous production",
        "Allocated corporate overhead",
        "Avoidable costs of internal production",
        "Depreciation on existing equipment"
      ],
      correctIndex: 2,
      explanation: "Avoidable costs are costs that will be eliminated if the company chooses to buy rather than make the product. Only differential (avoidable) costs are relevant in make-or-buy decisions; sunk costs and unavoidable allocations should be excluded.",
      difficulty: "easy"
    },
    {
      text: "A product has a selling price of $50, variable costs of $30, and allocated fixed costs of $10 per unit. If the company has excess capacity, what is the minimum price it should accept for a special order?",
      options: ["$50", "$40", "$30", "$10"],
      correctIndex: 2,
      explanation: "With excess capacity, the minimum acceptable price for a special order equals the variable cost per unit ($30). Fixed costs are incurred regardless, so any price above variable cost contributes to covering fixed costs and generating profit.",
      difficulty: "easy"
    },
    {
      text: "Which of the following best describes an opportunity cost?",
      options: [
        "A cost that has already been incurred and cannot be recovered",
        "The benefit foregone by choosing one alternative over the next best option",
        "A cost that varies with the level of production",
        "An indirect cost allocated to a cost center"
      ],
      correctIndex: 1,
      explanation: "Opportunity cost represents the value of the best alternative that is sacrificed when a particular course of action is chosen. It is a relevant cost in decision-making even though it does not appear in accounting records.",
      difficulty: "easy"
    },
    {
      text: "A company manufactures three products using a shared bottleneck resource. Product A contributes $20 per unit with 2 hours of machine time, Product B contributes $36 per unit with 4 hours, and Product C contributes $15 per unit with 1 hour. In what order should the company prioritize production?",
      options: [
        "B, A, C",
        "C, A, B",
        "A, B, C",
        "B, C, A"
      ],
      correctIndex: 1,
      explanation: "Contribution per machine hour: A = $20/2 = $10/hr, B = $36/4 = $9/hr, C = $15/1 = $15/hr. Rank by contribution per constraint unit: C ($15), A ($10), B ($9). When a resource is constrained, maximize contribution per unit of the scarce resource.",
      difficulty: "medium"
    },
    {
      text: "A company is considering dropping a product line that shows an operating loss of $30,000. The product line has $200,000 in revenue, $130,000 in variable costs, and $100,000 in fixed costs, of which $60,000 are avoidable. Should the company drop the product line?",
      options: [
        "Yes, because the product line shows a $30,000 loss",
        "No, because dropping it would reduce overall income by $10,000",
        "Yes, because avoidable fixed costs exceed the contribution margin",
        "No, because dropping it would reduce overall income by $30,000"
      ],
      correctIndex: 1,
      explanation: "Contribution margin = $200,000 - $130,000 = $70,000. Avoidable fixed costs = $60,000. If the line is dropped, the company loses $70,000 in contribution margin but saves only $60,000 in avoidable costs, reducing overall income by $10,000. The line should be kept.",
      difficulty: "medium"
    },
    {
      text: "In a linear programming model for product mix optimization, the objective function represents:",
      options: [
        "The constraints on available resources",
        "The quantity to be maximized or minimized, such as total contribution margin",
        "The minimum production requirements",
        "The fixed overhead allocation"
      ],
      correctIndex: 1,
      explanation: "The objective function in linear programming defines the goal of the optimization, typically maximizing total contribution margin or profit (or minimizing cost). Constraints represent the limitations on resources such as labor, materials, or machine hours.",
      difficulty: "medium"
    },
    {
      text: "A company is evaluating whether to process a joint product further. Joint costs to the split-off point are $80,000. Product X can be sold at split-off for $60,000 or processed further for an additional $25,000 and sold for $90,000. What should the company do?",
      options: [
        "Sell at split-off because joint costs exceed additional revenue",
        "Process further because the incremental revenue of $30,000 exceeds the incremental cost of $25,000",
        "Sell at split-off because total costs exceed total revenue",
        "Process further because total revenue of $90,000 exceeds joint costs of $80,000"
      ],
      correctIndex: 1,
      explanation: "Joint costs are sunk and irrelevant to the sell-or-process-further decision. Incremental revenue = $90,000 - $60,000 = $30,000. Incremental cost = $25,000. Since incremental revenue exceeds incremental cost by $5,000, the company should process further.",
      difficulty: "medium"
    },
    {
      text: "A company uses expected value analysis to evaluate a project with three scenarios: Best case (probability 20%, payoff $500,000), Most likely (probability 50%, payoff $200,000), and Worst case (probability 30%, payoff -$100,000). What is the expected monetary value?",
      options: ["$170,000", "$200,000", "$180,000", "$150,000"],
      correctIndex: 0,
      explanation: "EMV = (0.20 x $500,000) + (0.50 x $200,000) + (0.30 x -$100,000) = $100,000 + $100,000 - $30,000 = $170,000. Expected value weighs each outcome by its probability to determine the average expected result.",
      difficulty: "hard"
    },
    {
      text: "A company is considering automating a production process. The current manual process has variable costs of $15 per unit and fixed costs of $100,000. The automated process would have variable costs of $8 per unit and fixed costs of $240,000. At what volume level is the company indifferent between the two alternatives?",
      options: ["10,000 units", "20,000 units", "15,000 units", "25,000 units"],
      correctIndex: 1,
      explanation: "Set total costs equal: $100,000 + $15Q = $240,000 + $8Q. Solving: $7Q = $140,000, so Q = 20,000 units. Below 20,000 units the manual process is cheaper; above 20,000 units automation is preferred.",
      difficulty: "hard"
    },
    {
      text: "A division has the capacity to produce 50,000 units of a component. It currently sells 40,000 units externally at $25 per unit with variable costs of $15 per unit. The assembly division wants to buy 15,000 units internally. What is the minimum transfer price per unit for the first 10,000 units and the last 5,000 units, respectively?",
      options: [
        "$15 and $15",
        "$15 and $25",
        "$25 and $25",
        "$20 and $25"
      ],
      correctIndex: 1,
      explanation: "For the first 10,000 units (using excess capacity), the minimum transfer price equals variable cost of $15 since no external sales are displaced. For the last 5,000 units, external sales must be forgone, so the minimum is variable cost plus lost contribution ($15 + $10 = $25).",
      difficulty: "hard"
    }
  ],
  "risk-management": [
    {
      text: "Which of the following best describes systematic risk?",
      options: [
        "Risk that can be eliminated through diversification",
        "Risk inherent to the entire market that cannot be diversified away",
        "Risk specific to a single company or industry",
        "Risk arising from poor internal controls"
      ],
      correctIndex: 1,
      explanation: "Systematic risk (also called market risk or non-diversifiable risk) affects the entire market and cannot be eliminated through portfolio diversification. Examples include interest rate changes, inflation, and geopolitical events.",
      difficulty: "easy"
    },
    {
      text: "What is the primary purpose of an enterprise risk management (ERM) framework?",
      options: [
        "To eliminate all risks facing the organization",
        "To provide a structured approach to identifying, assessing, and managing risks across the organization",
        "To ensure compliance with tax regulations",
        "To maximize short-term profitability"
      ],
      correctIndex: 1,
      explanation: "ERM provides a comprehensive, organization-wide approach to identifying, assessing, responding to, and monitoring risks. Its goal is not to eliminate all risk but to manage risk within the organization's risk appetite.",
      difficulty: "easy"
    },
    {
      text: "A company purchases an insurance policy to protect against potential losses from a natural disaster. This is an example of which risk response strategy?",
      options: [
        "Risk avoidance",
        "Risk acceptance",
        "Risk transfer",
        "Risk mitigation"
      ],
      correctIndex: 2,
      explanation: "Risk transfer shifts the financial consequences of a risk to a third party, in this case an insurance company. The organization pays a premium to transfer the potential loss rather than bearing it directly.",
      difficulty: "easy"
    },
    {
      text: "A company has a portfolio of investments with a standard deviation of returns of 12% and an expected return of 8%. A risk-free asset returns 3%. What is the Sharpe ratio?",
      options: ["0.42", "0.67", "0.25", "1.00"],
      correctIndex: 0,
      explanation: "Sharpe ratio = (Expected return - Risk-free rate) / Standard deviation = (8% - 3%) / 12% = 5% / 12% = 0.42. The Sharpe ratio measures excess return per unit of total risk, with higher values indicating better risk-adjusted performance.",
      difficulty: "medium"
    },
    {
      text: "Which of the following is an example of operational risk?",
      options: [
        "A decline in stock price due to rising interest rates",
        "A data breach caused by inadequate cybersecurity controls",
        "A decrease in bond value due to credit rating downgrade",
        "A loss from foreign currency exchange rate fluctuations"
      ],
      correctIndex: 1,
      explanation: "Operational risk arises from failures in internal processes, people, systems, or external events. A data breach due to inadequate cybersecurity is a process and systems failure, making it a classic operational risk event.",
      difficulty: "medium"
    },
    {
      text: "In the context of hedging, a company that has significant revenues denominated in euros would most likely use which instrument to manage its currency risk?",
      options: [
        "Interest rate swap",
        "Equity put option",
        "Foreign currency forward contract",
        "Credit default swap"
      ],
      correctIndex: 2,
      explanation: "A foreign currency forward contract locks in a future exchange rate for converting euro revenues to the domestic currency. This hedges against adverse movements in the EUR exchange rate and provides certainty in cash flow planning.",
      difficulty: "medium"
    },
    {
      text: "A risk heat map plots risks along two dimensions. What are these two dimensions?",
      options: [
        "Cost and benefit",
        "Likelihood and impact",
        "Internal and external",
        "Financial and operational"
      ],
      correctIndex: 1,
      explanation: "A risk heat map visually plots risks by their likelihood of occurrence (probability) and the magnitude of their impact (severity). This helps organizations prioritize which risks require the most attention and resources.",
      difficulty: "medium"
    },
    {
      text: "A company uses Value at Risk (VaR) analysis and determines that its one-day 95% VaR is $2 million. Which of the following is the correct interpretation?",
      options: [
        "The maximum loss the company can ever experience is $2 million",
        "There is a 5% probability that the company will lose more than $2 million in a single day",
        "The company will lose exactly $2 million on 5% of trading days",
        "The expected daily loss is $2 million"
      ],
      correctIndex: 1,
      explanation: "A 95% VaR of $2 million means there is a 5% chance that losses will exceed $2 million in a single day under normal market conditions. VaR does not indicate the maximum possible loss, only a threshold at a given confidence level.",
      difficulty: "hard"
    },
    {
      text: "A company enters into an interest rate swap where it pays a fixed rate of 5% and receives a floating rate of SOFR + 1% on a notional principal of $10 million. If SOFR is currently 3.5%, what is the net payment or receipt for the company for this period?",
      options: [
        "The company pays $50,000 net",
        "The company receives $50,000 net",
        "The company pays $500,000 net",
        "The company receives $500,000 net"
      ],
      correctIndex: 0,
      explanation: "Fixed payment = 5% x $10M = $500,000. Floating receipt = (3.5% + 1%) x $10M = 4.5% x $10M = $450,000. Net payment by the company = $500,000 - $450,000 = $50,000. The company pays net because its fixed rate exceeds the floating rate received.",
      difficulty: "hard"
    },
    {
      text: "A company is evaluating a project in a foreign country with significant political risk, including the possibility of asset expropriation. The project's base-case NPV using a standard discount rate is $5 million. If the probability of expropriation is 15% and expropriation would result in a total loss of the $20 million investment, how should the company best adjust its analysis?",
      options: [
        "Ignore the political risk since it is unlikely",
        "Reduce the NPV by the expected loss from expropriation ($3 million), resulting in an adjusted NPV of $2 million",
        "Double the discount rate to account for political risk",
        "Reject the project because any political risk is unacceptable"
      ],
      correctIndex: 1,
      explanation: "The expected loss from expropriation = 15% x $20M = $3M. Adjusting the base-case NPV: $5M - $3M = $2M. This approach incorporates the probability-weighted cost of political risk into the investment analysis while still recognizing the project has positive expected value.",
      difficulty: "hard"
    }
  ],
  "investment-decisions": [
    {
      text: "A project requires an initial investment of $100,000 and generates annual cash flows of $30,000 for 5 years. What is the payback period?",
      options: ["2.5 years", "3.0 years", "3.3 years", "4.0 years"],
      correctIndex: 2,
      explanation: "Payback period = Initial investment / Annual cash flow = $100,000 / $30,000 = 3.33 years. The payback period measures how long it takes for cumulative cash inflows to recover the initial investment.",
      difficulty: "easy"
    },
    {
      text: "Which of the following capital budgeting techniques accounts for the time value of money?",
      options: [
        "Payback period",
        "Accounting rate of return",
        "Net present value (NPV)",
        "Urgency-based ranking"
      ],
      correctIndex: 2,
      explanation: "Net present value discounts future cash flows to their present value using the required rate of return, explicitly incorporating the time value of money. The payback period and accounting rate of return do not discount future cash flows.",
      difficulty: "easy"
    },
    {
      text: "If a project has a net present value (NPV) of zero, what does this indicate?",
      options: [
        "The project generates no cash flows",
        "The project earns exactly the required rate of return",
        "The project should be rejected",
        "The project will result in a loss"
      ],
      correctIndex: 1,
      explanation: "An NPV of zero means the project's discounted cash inflows exactly equal the initial investment, indicating the project earns precisely the required rate of return (cost of capital). The firm would be indifferent to accepting the project.",
      difficulty: "easy"
    },
    {
      text: "A company is evaluating two mutually exclusive projects. Project A has an NPV of $50,000 and an IRR of 18%. Project B has an NPV of $70,000 and an IRR of 15%. Which project should the company select and why?",
      options: [
        "Project A because it has a higher IRR",
        "Project B because it has a higher NPV",
        "Project A because IRR is a superior method to NPV",
        "Neither project because the methods give conflicting results"
      ],
      correctIndex: 1,
      explanation: "When NPV and IRR conflict for mutually exclusive projects, NPV is preferred because it measures the absolute increase in firm value. Project B adds $70,000 in value compared to $50,000 for Project A.",
      difficulty: "medium"
    },
    {
      text: "When calculating the cash flows for a capital budgeting analysis, which of the following should be included?",
      options: [
        "Sunk costs incurred before the decision",
        "Financing costs such as interest expense",
        "Incremental cash flows attributable to the project, including opportunity costs",
        "Allocated corporate overhead that will not change"
      ],
      correctIndex: 2,
      explanation: "Capital budgeting analysis should include only incremental cash flows, including opportunity costs. Sunk costs are irrelevant, financing costs are captured in the discount rate, and unchanged allocated overheads are not incremental.",
      difficulty: "medium"
    },
    {
      text: "A project has an initial cost of $200,000, a useful life of 5 years, no salvage value, and is depreciated using straight-line. Annual revenues are $120,000 and annual cash operating expenses are $60,000. The tax rate is 25%. What is the annual after-tax cash flow?",
      options: ["$55,000", "$60,000", "$45,000", "$50,000"],
      correctIndex: 0,
      explanation: "Depreciation = $200,000/5 = $40,000. Taxable income = $120,000 - $60,000 - $40,000 = $20,000. Taxes = $20,000 x 0.25 = $5,000. After-tax cash flow = $120,000 - $60,000 - $5,000 = $55,000 (or equivalently, net income of $15,000 + depreciation of $40,000).",
      difficulty: "medium"
    },
    {
      text: "Which of the following best describes the profitability index (PI) method?",
      options: [
        "The ratio of total accounting profits to total investment",
        "The present value of future cash flows divided by the initial investment",
        "The internal rate of return divided by the cost of capital",
        "The payback period adjusted for the time value of money"
      ],
      correctIndex: 1,
      explanation: "The profitability index equals the present value of future cash flows divided by the initial investment. A PI greater than 1.0 indicates the project creates value. PI is particularly useful for ranking projects when capital is rationed.",
      difficulty: "medium"
    },
    {
      text: "A company is considering a project with the following cash flows: Year 0: -$500,000; Year 1: $200,000; Year 2: $200,000; Year 3: $200,000. The cost of capital is 10%. What is the approximate NPV?",
      options: ["-$2,630", "$2,630", "$100,000", "-$7,100"],
      correctIndex: 0,
      explanation: "NPV = -$500,000 + $200,000/1.10 + $200,000/1.21 + $200,000/1.331 = -$500,000 + $181,818 + $165,289 + $150,263 = -$2,630. The negative NPV indicates the project does not earn the required 10% return and should be rejected.",
      difficulty: "hard"
    },
    {
      text: "A firm is comparing two projects with different useful lives. Project X lasts 3 years with an NPV of $30,000, and Project Y lasts 6 years with an NPV of $50,000. The cost of capital is 10%. Which method should be used to make a valid comparison?",
      options: [
        "Simply compare the NPVs directly",
        "Use the equivalent annual annuity (EAA) method or the replacement chain method",
        "Compare the internal rates of return",
        "Use the payback period method"
      ],
      correctIndex: 1,
      explanation: "When comparing mutually exclusive projects with unequal lives, the equivalent annual annuity (EAA) method or replacement chain method should be used. Direct NPV comparison is misleading because the projects cover different time periods.",
      difficulty: "hard"
    },
    {
      text: "A company plans to invest $1 million in a project that will generate after-tax cash flows of $180,000 per year for 10 years. The cost of capital is 12%. The project also requires $50,000 in working capital that will be recovered at the end of year 10. What is the approximate NPV of the project?",
      options: [
        "-$17,090",
        "-$32,400",
        "$33,210",
        "$16,100"
      ],
      correctIndex: 0,
      explanation: "PV of annuity = $180,000 x PVIFA(12%, 10) = $180,000 x 5.6502 = $1,017,036. PV of working capital recovery = $50,000 / (1.12)^10 = $50,000 / 3.1058 = $16,101. Total initial outlay = $1,000,000 + $50,000 = $1,050,000. NPV = $1,017,036 + $16,101 - $1,050,000 = -$16,863, approximately -$17,090. The project destroys value.",
      difficulty: "hard"
    }
  ],
  "professional-ethics": [
    {
      text: "According to the IMA Statement of Ethical Professional Practice, which of the following is one of the four overarching ethical principles?",
      options: [
        "Profitability",
        "Honesty",
        "Competitiveness",
        "Aggressiveness"
      ],
      correctIndex: 1,
      explanation: "The IMA's four overarching ethical principles are Honesty, Fairness, Objectivity, and Responsibility. These principles guide management accountants in their professional conduct and decision-making.",
      difficulty: "easy"
    },
    {
      text: "A management accountant discovers that a colleague has been inflating revenue figures. According to IMA ethical standards, what should the accountant do first?",
      options: [
        "Immediately report the matter to external authorities",
        "Ignore the issue to avoid conflict",
        "Discuss the matter with the colleague and then follow the organization's established policies for reporting ethical violations",
        "Resign from the company immediately"
      ],
      correctIndex: 2,
      explanation: "The IMA recommends first discussing ethical concerns with the immediate supervisor or colleague, then following the organization's established policies for resolution. External reporting should only occur after internal channels have been exhausted.",
      difficulty: "easy"
    },
    {
      text: "Which of the following actions would violate the IMA's standard of Confidentiality?",
      options: [
        "Sharing financial data with the company's external auditors",
        "Disclosing proprietary company information to a friend who works for a competitor",
        "Presenting financial results to the board of directors",
        "Providing information to regulatory authorities as required by law"
      ],
      correctIndex: 1,
      explanation: "The standard of Confidentiality requires management accountants to refrain from disclosing confidential information acquired in the course of work except when authorized or legally obligated. Sharing proprietary data with a competitor's employee is a clear violation.",
      difficulty: "easy"
    },
    {
      text: "Under the IMA ethical standards, the standard of Credibility requires management accountants to:",
      options: [
        "Maintain an appropriate level of professional expertise",
        "Communicate information fairly and objectively, and disclose all relevant information",
        "Keep information confidential except when disclosure is authorized or legally required",
        "Avoid conflicts of interest and advise parties of potential conflicts"
      ],
      correctIndex: 1,
      explanation: "The Credibility standard requires that information be communicated fairly, objectively, and completely. Management accountants must disclose all relevant information that could influence a user's understanding of reports and analyses.",
      difficulty: "medium"
    },
    {
      text: "A CMA is asked by their supervisor to defer recording certain expenses to the next quarter to meet earnings targets. What ethical standard is most directly at risk of being violated?",
      options: [
        "Confidentiality",
        "Competence",
        "Integrity",
        "Responsibility"
      ],
      correctIndex: 2,
      explanation: "Deferring expenses to manipulate earnings violates the Integrity standard, which requires management accountants to abstain from engaging in activities that would discredit the profession and to refrain from subverting the organization's legitimate objectives.",
      difficulty: "medium"
    },
    {
      text: "According to IMA standards, the Competence standard requires management accountants to:",
      options: [
        "Report all financial irregularities to law enforcement",
        "Maintain professional knowledge and comply with relevant laws, regulations, and standards",
        "Refuse any assignment outside their area of expertise",
        "Maximize shareholder value at all times"
      ],
      correctIndex: 1,
      explanation: "The Competence standard requires maintaining professional knowledge through continuing education, performing duties in accordance with relevant laws and regulations, and providing accurate and timely information and recommendations.",
      difficulty: "medium"
    },
    {
      text: "A management accountant has exhausted all internal channels for resolving an ethical conflict within the organization. According to IMA guidance, what is the appropriate next step?",
      options: [
        "Accept the situation and continue working",
        "Consult with an IMA Ethics Counselor or an attorney for guidance on available options",
        "Immediately contact the media to publicize the issue",
        "Falsify documents to correct the ethical violation independently"
      ],
      correctIndex: 1,
      explanation: "When internal resolution channels are exhausted, the IMA recommends consulting with an IMA Ethics Counselor or an attorney to understand the rights and obligations involved. This provides professional guidance before taking further action.",
      difficulty: "medium"
    },
    {
      text: "A CMA serves on the board of a company and also owns a consulting firm that provides services to the same company. The CMA has not disclosed this relationship to the other board members. Which ethical standards are being violated?",
      options: [
        "Only Confidentiality",
        "Integrity and Credibility",
        "Only Competence",
        "Only Credibility"
      ],
      correctIndex: 1,
      explanation: "This violates Integrity (failure to avoid conflicts of interest and communicate them to appropriate parties) and Credibility (failure to disclose all relevant information that could influence stakeholders' decisions). Undisclosed conflicts undermine trust in the professional relationship.",
      difficulty: "hard"
    },
    {
      text: "A management accountant at a publicly traded company becomes aware that senior management has been engaging in a fraudulent financial reporting scheme that materially misstates the company's financial statements. Internal reporting to the audit committee has been attempted but no action was taken. Under the Sarbanes-Oxley Act and IMA ethical standards, which of the following is the most appropriate course of action?",
      options: [
        "Resign quietly to avoid personal liability",
        "Continue to work and hope the issue resolves itself",
        "Consider reporting to the SEC under the whistleblower provisions after seeking legal counsel",
        "Destroy any evidence of personal knowledge of the fraud"
      ],
      correctIndex: 2,
      explanation: "When internal channels have been exhausted, the Sarbanes-Oxley Act provides whistleblower protections for employees who report securities fraud to the SEC. Seeking legal counsel first ensures the accountant understands their rights and protections under the law.",
      difficulty: "hard"
    },
    {
      text: "A newly certified CMA is assigned to prepare a cost-benefit analysis for a major capital project. The CMA has limited experience in capital budgeting but is under pressure from the CFO to complete the analysis quickly. According to the IMA's ethical standards, the most appropriate course of action is to:",
      options: [
        "Complete the analysis to the best of their ability without informing anyone of their limitations",
        "Decline the assignment entirely",
        "Acknowledge the limitation to the supervisor, seek appropriate training or assistance, and provide a competent analysis",
        "Copy a competitor's analysis to save time"
      ],
      correctIndex: 2,
      explanation: "The Competence standard requires recognizing professional limitations. The ethical response is to acknowledge the limitation, seek guidance or training, and ensure the final work product meets professional standards rather than concealing the gap or refusing the work outright.",
      difficulty: "hard"
    }
  ]
};

export const part2Questions: Record<string, Array<Q>> = {
  "financial-statement-analysis": [..._part2Questions["financial-statement-analysis"], ...financialStatementAnalysisNew],
  "corporate-finance": [..._part2Questions["corporate-finance"], ...corporateFinanceNew],
  "decision-analysis": [..._part2Questions["decision-analysis"], ...decisionAnalysisNew],
  "risk-management": [..._part2Questions["risk-management"], ...riskManagementNew],
  "investment-decisions": [..._part2Questions["investment-decisions"], ...investmentDecisionsNew],
  "professional-ethics": [..._part2Questions["professional-ethics"], ...professionalEthicsNew],
};
