import { externalFinancialReportingNew } from "./questions/external-financial-reporting";
import { planningBudgetingForecastingNew } from "./questions/planning-budgeting-forecasting";
import { performanceManagementNew } from "./questions/performance-management";
import { costManagementNew } from "./questions/cost-management";
import { internalControlsNew } from "./questions/internal-controls";
import { technologyAnalyticsNew } from "./questions/technology-analytics";

type Q = {text: string; options: string[]; correctIndex: number; explanation: string; difficulty: string};

const _part1Questions: Record<string, Array<Q>> = {
  "external-financial-reporting": [
    {
      text: "Under U.S. GAAP, which inventory costing method is NOT permitted?",
      options: ["FIFO", "LIFO", "Weighted average", "Next-in, first-out (NIFO)"],
      correctIndex: 3,
      explanation: "NIFO is not a GAAP-approved inventory method. FIFO, LIFO, and weighted average are all acceptable methods under U.S. GAAP.",
      difficulty: "easy"
    },
    {
      text: "Which financial statement reports a company's financial position at a specific point in time?",
      options: ["Income statement", "Balance sheet", "Statement of cash flows", "Statement of retained earnings"],
      correctIndex: 1,
      explanation: "The balance sheet (statement of financial position) reports assets, liabilities, and equity at a specific date, unlike flow statements that cover a period.",
      difficulty: "easy"
    },
    {
      text: "A company capitalizes a cost that should have been expensed. What is the immediate effect on net income?",
      options: ["Net income is understated", "Net income is overstated", "No effect on net income", "Net income effect depends on the depreciation method"],
      correctIndex: 1,
      explanation: "Capitalizing an expense removes it from the current period income statement, causing net income to be overstated in the current period.",
      difficulty: "medium"
    },
    {
      text: "Which of the following is classified as an operating activity under the indirect method of the statement of cash flows?",
      options: ["Depreciation expense", "Issuance of bonds", "Purchase of equipment", "Payment of dividends"],
      correctIndex: 0,
      explanation: "Depreciation is added back to net income under the indirect method because it is a non-cash expense that reduced net income but did not use cash.",
      difficulty: "medium"
    },
    {
      text: "Under IFRS, how are development costs treated?",
      options: ["Always expensed", "Always capitalized", "Capitalized when specific criteria are met", "Recorded as a contingent liability"],
      correctIndex: 2,
      explanation: "IFRS requires capitalization of development costs when technical feasibility, intent to complete, ability to use/sell, probable future benefits, and measurable costs are demonstrated.",
      difficulty: "medium"
    },
    {
      text: "What is the primary difference between IFRS and U.S. GAAP regarding inventory?",
      options: ["IFRS allows LIFO; GAAP does not", "GAAP allows LIFO; IFRS does not", "IFRS does not allow FIFO", "There is no difference"],
      correctIndex: 1,
      explanation: "IFRS prohibits LIFO while U.S. GAAP permits it. This is one of the most significant differences between the two frameworks for inventory accounting.",
      difficulty: "medium"
    },
    {
      text: "A bond issued at a premium means the stated interest rate is:",
      options: ["Equal to the market rate", "Below the market rate", "Above the market rate", "Unrelated to the market rate"],
      correctIndex: 2,
      explanation: "When the stated (coupon) rate exceeds the market rate, investors pay more than face value (premium) because the bond pays above-market interest.",
      difficulty: "easy"
    },
    {
      text: "Which revenue recognition step involves determining the transaction price?",
      options: ["Step 1", "Step 2", "Step 3", "Step 4"],
      correctIndex: 2,
      explanation: "ASC 606 Step 3 is 'Determine the transaction price.' The five steps are: identify contract, identify obligations, determine price, allocate price, recognize revenue.",
      difficulty: "hard"
    },
    {
      text: "A company reports other comprehensive income (OCI). Which item would appear in OCI?",
      options: ["Cost of goods sold", "Unrealized gains on trading securities", "Unrealized gains on available-for-sale debt securities", "Interest expense"],
      correctIndex: 2,
      explanation: "Unrealized gains/losses on available-for-sale debt securities are reported in OCI. Trading security gains go directly to net income.",
      difficulty: "hard"
    },
    {
      text: "Under the acquisition method of business combinations, goodwill is calculated as:",
      options: ["Book value minus fair value of net assets", "Purchase price minus book value of net assets", "Purchase price minus fair value of identifiable net assets", "Fair value of assets minus liabilities"],
      correctIndex: 2,
      explanation: "Goodwill = Purchase price − Fair value of identifiable net assets acquired. It represents the excess paid over the fair value of what was received.",
      difficulty: "hard"
    }
  ],
  "planning-budgeting-forecasting": [
    {
      text: "Which budget is typically prepared first in the master budget process?",
      options: ["Production budget", "Sales budget", "Cash budget", "Capital budget"],
      correctIndex: 1,
      explanation: "The sales budget is prepared first because all other budgets (production, materials, labor, overhead) depend on the sales forecast.",
      difficulty: "easy"
    },
    {
      text: "A flexible budget adjusts for changes in:",
      options: ["Fixed costs only", "Variable costs only", "Activity level", "The time period"],
      correctIndex: 2,
      explanation: "A flexible budget adjusts budgeted amounts for the actual activity level achieved, allowing meaningful comparison of actual vs. budgeted performance.",
      difficulty: "easy"
    },
    {
      text: "What is the production budget formula?",
      options: [
        "Budgeted sales + Desired ending inventory − Beginning inventory",
        "Budgeted sales − Desired ending inventory + Beginning inventory",
        "Budgeted sales + Beginning inventory − Desired ending inventory",
        "Budgeted sales × Production rate"
      ],
      correctIndex: 0,
      explanation: "Units to produce = Budgeted sales + Desired ending inventory − Beginning inventory. This ensures enough units to meet sales and maintain desired stock levels.",
      difficulty: "easy"
    },
    {
      text: "Which forecasting method uses historical data patterns to predict future values?",
      options: ["Delphi method", "Time series analysis", "Market research", "Executive opinion"],
      correctIndex: 1,
      explanation: "Time series analysis examines historical data patterns (trends, seasonality, cycles) to project future values using statistical techniques.",
      difficulty: "medium"
    },
    {
      text: "A company's sales budget shows 10,000 units at $50 each. Desired ending inventory is 2,000 units and beginning inventory is 1,500 units. How many units must be produced?",
      options: ["10,000", "10,500", "11,500", "12,000"],
      correctIndex: 1,
      explanation: "Production = Sales (10,000) + Desired ending inventory (2,000) − Beginning inventory (1,500) = 10,500 units.",
      difficulty: "medium"
    },
    {
      text: "Zero-based budgeting requires managers to:",
      options: [
        "Start from the prior year budget and adjust",
        "Justify all expenditures from zero each period",
        "Eliminate all discretionary spending",
        "Use only variable costs in the budget"
      ],
      correctIndex: 1,
      explanation: "Zero-based budgeting requires every expense to be justified from scratch each period, unlike incremental budgeting which starts from the prior period base.",
      difficulty: "medium"
    },
    {
      text: "Which variance measures the difference between actual quantity used and standard quantity allowed, multiplied by the standard price?",
      options: ["Price variance", "Efficiency variance", "Spending variance", "Volume variance"],
      correctIndex: 1,
      explanation: "Efficiency (quantity/usage) variance = (Actual qty − Standard qty allowed) × Standard price. It isolates the effect of using more or fewer inputs than standard.",
      difficulty: "medium"
    },
    {
      text: "In regression analysis, the coefficient of determination (R²) of 0.85 means:",
      options: [
        "The correlation coefficient is 0.85",
        "85% of the variation in the dependent variable is explained by the independent variable",
        "The model is 85% accurate",
        "85% of observations fall on the regression line"
      ],
      correctIndex: 1,
      explanation: "R² represents the proportion of variance in the dependent variable that is predictable from the independent variable(s). R² of 0.85 means 85% of variation is explained.",
      difficulty: "hard"
    },
    {
      text: "A learning curve of 80% means that when cumulative production doubles, the cumulative average time per unit:",
      options: ["Increases by 80%", "Decreases by 80%", "Becomes 80% of the previous average", "Remains constant"],
      correctIndex: 2,
      explanation: "An 80% learning curve means the cumulative average time per unit falls to 80% of its previous level each time cumulative output doubles.",
      difficulty: "hard"
    },
    {
      text: "Which budgeting approach continuously adds a new period as the most recent period expires?",
      options: ["Static budgeting", "Zero-based budgeting", "Rolling (continuous) budgeting", "Activity-based budgeting"],
      correctIndex: 2,
      explanation: "Rolling budgets always maintain a constant planning horizon by adding a new month/quarter as one expires, keeping the budget current and forward-looking.",
      difficulty: "hard"
    }
  ],
  "performance-management": [
    {
      text: "Which balanced scorecard perspective focuses on employee training and development?",
      options: ["Financial", "Customer", "Internal business process", "Learning and growth"],
      correctIndex: 3,
      explanation: "The learning and growth perspective addresses employee capabilities, training, knowledge management, and organizational culture that drive future improvement.",
      difficulty: "easy"
    },
    {
      text: "Return on investment (ROI) is calculated as:",
      options: [
        "Net income ÷ Total assets",
        "Operating income ÷ Average invested capital",
        "Net income ÷ Shareholders' equity",
        "Gross profit ÷ Total assets"
      ],
      correctIndex: 1,
      explanation: "ROI = Operating income ÷ Average invested capital. It measures how efficiently a division or company uses its invested capital to generate operating profits.",
      difficulty: "easy"
    },
    {
      text: "Residual income is calculated as:",
      options: [
        "Operating income − (Required rate of return × Invested capital)",
        "Net income − Dividends",
        "Operating income ÷ Invested capital",
        "Net income − Interest expense"
      ],
      correctIndex: 0,
      explanation: "Residual income = Operating income − (Required rate × Invested capital). It shows dollar value created above the minimum required return, avoiding the ROI underinvestment problem.",
      difficulty: "easy"
    },
    {
      text: "A division has operating income of $500,000 and invested capital of $2,000,000. What is its ROI?",
      options: ["20%", "25%", "40%", "4%"],
      correctIndex: 1,
      explanation: "ROI = $500,000 ÷ $2,000,000 = 25%. This means the division earns 25 cents of operating income for every dollar of invested capital.",
      difficulty: "medium"
    },
    {
      text: "Economic Value Added (EVA) differs from residual income primarily because EVA:",
      options: [
        "Uses book value of assets",
        "Adjusts for accounting distortions like R&D capitalization",
        "Ignores the cost of capital",
        "Uses gross profit instead of operating income"
      ],
      correctIndex: 1,
      explanation: "EVA makes accounting adjustments (capitalizing R&D, operating leases, etc.) to better reflect economic reality, while basic residual income uses unadjusted accounting numbers.",
      difficulty: "medium"
    },
    {
      text: "Transfer pricing at market price is most appropriate when:",
      options: [
        "There is no external market for the product",
        "A competitive external market exists",
        "The selling division has excess capacity",
        "The company wants to minimize taxes"
      ],
      correctIndex: 1,
      explanation: "Market-based transfer prices work best when competitive external markets exist, as they reflect true opportunity costs and promote efficient resource allocation.",
      difficulty: "medium"
    },
    {
      text: "The DuPont formula decomposes ROI into:",
      options: [
        "Gross margin × Asset turnover",
        "Profit margin × Asset turnover",
        "Net income × Total assets",
        "Operating leverage × Financial leverage"
      ],
      correctIndex: 1,
      explanation: "DuPont ROI = Profit margin (Income/Sales) × Asset turnover (Sales/Assets). This decomposition reveals whether ROI is driven by margins or asset efficiency.",
      difficulty: "medium"
    },
    {
      text: "A manager rejects a project with a positive NPV because it would lower the division's ROI. This is an example of:",
      options: ["Goal congruence", "Suboptimization", "Transfer pricing conflict", "Moral hazard"],
      correctIndex: 1,
      explanation: "Suboptimization occurs when a division manager makes decisions that benefit the division's metrics but harm the overall organization. ROI incentives can cause this.",
      difficulty: "hard"
    },
    {
      text: "In a balanced scorecard, 'cycle time reduction' is a measure in which perspective?",
      options: ["Financial", "Customer", "Internal business process", "Learning and growth"],
      correctIndex: 2,
      explanation: "Cycle time is an internal business process measure reflecting operational efficiency in converting inputs to outputs.",
      difficulty: "hard"
    },
    {
      text: "Which performance measure best aligns manager behavior with shareholder value creation?",
      options: ["ROI", "Revenue growth", "Economic Value Added (EVA)", "Operating margin"],
      correctIndex: 2,
      explanation: "EVA explicitly charges for the cost of all capital (debt and equity), directly measuring whether operations create value above what investors require.",
      difficulty: "hard"
    }
  ],
  "cost-management": [
    {
      text: "Under absorption costing, which costs are included in product costs?",
      options: [
        "Direct materials and direct labor only",
        "All variable costs",
        "Direct materials, direct labor, and all manufacturing overhead",
        "All costs including selling and administrative"
      ],
      correctIndex: 2,
      explanation: "Absorption (full) costing includes all manufacturing costs — direct materials, direct labor, variable overhead, and fixed overhead — in product costs.",
      difficulty: "easy"
    },
    {
      text: "The difference between absorption costing and variable costing net income is caused by:",
      options: [
        "Different treatment of selling expenses",
        "Different treatment of fixed manufacturing overhead",
        "Different treatment of direct materials",
        "Different sales volumes"
      ],
      correctIndex: 1,
      explanation: "The income difference arises solely from the treatment of fixed manufacturing overhead — absorbed into inventory (absorption) vs. expensed immediately (variable).",
      difficulty: "easy"
    },
    {
      text: "Activity-based costing (ABC) allocates overhead using:",
      options: [
        "A single plantwide rate",
        "Direct labor hours only",
        "Multiple cost drivers based on activities",
        "Machine hours only"
      ],
      correctIndex: 2,
      explanation: "ABC uses multiple cost drivers that reflect the actual activities causing overhead costs, providing more accurate product costing than single-rate systems.",
      difficulty: "easy"
    },
    {
      text: "A company produces 1,000 units. Total fixed costs are $50,000 and variable cost per unit is $30. What is the total cost per unit?",
      options: ["$30", "$50", "$80", "$100"],
      correctIndex: 2,
      explanation: "Total cost per unit = Fixed cost per unit ($50,000/1,000 = $50) + Variable cost per unit ($30) = $80.",
      difficulty: "medium"
    },
    {
      text: "Joint costs are costs incurred:",
      options: [
        "After the split-off point",
        "Before the split-off point in producing multiple products simultaneously",
        "Only in service industries",
        "When two departments share resources"
      ],
      correctIndex: 1,
      explanation: "Joint costs are incurred in a single production process that simultaneously produces two or more products up to the split-off point where they become separately identifiable.",
      difficulty: "medium"
    },
    {
      text: "The theory of constraints focuses on:",
      options: [
        "Reducing all costs equally",
        "Maximizing throughput by managing bottlenecks",
        "Eliminating all fixed costs",
        "Increasing direct labor efficiency"
      ],
      correctIndex: 1,
      explanation: "Theory of constraints (TOC) identifies the system bottleneck and focuses improvement efforts there, since the constraint limits total system throughput.",
      difficulty: "medium"
    },
    {
      text: "Target costing sets the target cost as:",
      options: [
        "Standard cost plus a markup",
        "Market price minus desired profit margin",
        "Historical cost adjusted for inflation",
        "Variable cost plus contribution margin"
      ],
      correctIndex: 1,
      explanation: "Target cost = Market price − Desired profit. This market-driven approach works backward from what customers will pay to determine allowable costs.",
      difficulty: "medium"
    },
    {
      text: "In process costing, equivalent units of production represent:",
      options: [
        "Total units completed",
        "Units started during the period",
        "The number of complete units that could have been produced given the total work done",
        "Units in ending work in process only"
      ],
      correctIndex: 2,
      explanation: "Equivalent units convert partially completed units into the number of whole units that could have been finished with the same amount of work.",
      difficulty: "hard"
    },
    {
      text: "A company uses backflush costing. This approach is most appropriate when:",
      options: [
        "Work-in-process inventory is significant",
        "Production cycle time is very short with minimal WIP",
        "The company uses job-order costing",
        "Standard costs are not available"
      ],
      correctIndex: 1,
      explanation: "Backflush costing delays cost recording until completion, working best in JIT environments where production cycles are short and WIP inventory is minimal.",
      difficulty: "hard"
    },
    {
      text: "Kaizen costing focuses on:",
      options: [
        "Setting costs before production begins",
        "Continuous cost reduction during the manufacturing process",
        "Allocating joint costs",
        "Calculating standard costs"
      ],
      correctIndex: 1,
      explanation: "Kaizen costing pursues continuous incremental cost reductions during production, complementing target costing which sets cost goals before production starts.",
      difficulty: "hard"
    }
  ],
  "internal-controls": [
    {
      text: "Which component of internal control involves the tone set by management?",
      options: ["Risk assessment", "Control activities", "Control environment", "Monitoring"],
      correctIndex: 2,
      explanation: "The control environment (also called 'tone at the top') includes management's integrity, ethical values, commitment to competence, and governance oversight.",
      difficulty: "easy"
    },
    {
      text: "Segregation of duties requires separating which functions?",
      options: [
        "Sales and marketing",
        "Authorization, custody of assets, and record-keeping",
        "Hiring and training",
        "Planning and budgeting"
      ],
      correctIndex: 1,
      explanation: "Segregation of duties separates authorization, custody, and recording to prevent any single person from committing and concealing errors or fraud.",
      difficulty: "easy"
    },
    {
      text: "The COSO framework identifies how many components of internal control?",
      options: ["3", "4", "5", "7"],
      correctIndex: 2,
      explanation: "COSO identifies five components: control environment, risk assessment, control activities, information & communication, and monitoring activities.",
      difficulty: "easy"
    },
    {
      text: "Which type of control is designed to detect errors after they occur?",
      options: ["Preventive control", "Detective control", "Corrective control", "Directive control"],
      correctIndex: 1,
      explanation: "Detective controls identify errors or irregularities after they have occurred (e.g., bank reconciliations, physical inventory counts, variance analysis).",
      difficulty: "medium"
    },
    {
      text: "An IT general control that restricts system access based on job responsibilities is called:",
      options: ["Input validation", "Access control", "Change management", "Backup procedure"],
      correctIndex: 1,
      explanation: "Access controls (logical security) restrict system and data access to authorized users based on their roles and responsibilities, following least-privilege principles.",
      difficulty: "medium"
    },
    {
      text: "Enterprise Risk Management (ERM) differs from traditional risk management by:",
      options: [
        "Focusing only on financial risks",
        "Taking a holistic, organization-wide approach to risk",
        "Eliminating all risks",
        "Focusing only on insurable risks"
      ],
      correctIndex: 1,
      explanation: "ERM takes a comprehensive, integrated view of risk across the entire organization rather than managing risks in silos or departments.",
      difficulty: "medium"
    },
    {
      text: "A material weakness in internal control means:",
      options: [
        "A minor deficiency exists",
        "There is a reasonable possibility that a material misstatement will not be prevented or detected on a timely basis",
        "The control system is functioning properly",
        "Only immaterial errors could occur"
      ],
      correctIndex: 1,
      explanation: "A material weakness is a deficiency (or combination) where there is a reasonable possibility that a material financial statement misstatement won't be prevented or detected timely.",
      difficulty: "medium"
    },
    {
      text: "SOX Section 404 requires management to:",
      options: [
        "Audit the financial statements",
        "Assess and report on the effectiveness of internal control over financial reporting",
        "Eliminate all fraud",
        "Hire external auditors for all controls"
      ],
      correctIndex: 1,
      explanation: "SOX 404 requires management to annually assess and report on the effectiveness of internal control over financial reporting, with auditor attestation for accelerated filers.",
      difficulty: "hard"
    },
    {
      text: "Which fraud risk factor from the fraud triangle represents the ability to rationalize dishonest behavior?",
      options: ["Pressure/incentive", "Opportunity", "Attitude/rationalization", "Capability"],
      correctIndex: 2,
      explanation: "The fraud triangle's three elements are pressure (motivation), opportunity (ability to commit), and rationalization (justifying the behavior). All three must be present for fraud.",
      difficulty: "hard"
    },
    {
      text: "A compensating control is used when:",
      options: [
        "The primary control is working perfectly",
        "An ideal control is not feasible, so an alternative control mitigates the risk",
        "No risks exist",
        "The control environment is strong"
      ],
      correctIndex: 1,
      explanation: "Compensating controls are alternative controls implemented when the ideal control is impractical or too costly, providing reasonable mitigation of the identified risk.",
      difficulty: "hard"
    }
  ],
  "technology-analytics": [
    {
      text: "Which technology automates repetitive, rule-based tasks previously performed by humans?",
      options: ["Blockchain", "Robotic Process Automation (RPA)", "Cloud computing", "Virtual reality"],
      correctIndex: 1,
      explanation: "RPA uses software bots to automate repetitive, rule-based tasks like data entry, reconciliation, and report generation, freeing humans for higher-value work.",
      difficulty: "easy"
    },
    {
      text: "Business intelligence (BI) tools primarily help organizations:",
      options: [
        "Write software code",
        "Analyze data and make informed decisions",
        "Replace all manual processes",
        "Eliminate the need for databases"
      ],
      correctIndex: 1,
      explanation: "BI tools collect, integrate, and analyze business data to provide actionable insights through dashboards, reports, and data visualizations for decision-making.",
      difficulty: "easy"
    },
    {
      text: "What type of data analytics identifies patterns and predicts future outcomes?",
      options: ["Descriptive analytics", "Diagnostic analytics", "Predictive analytics", "Prescriptive analytics"],
      correctIndex: 2,
      explanation: "Predictive analytics uses statistical models and machine learning to forecast future events based on historical patterns and trends.",
      difficulty: "easy"
    },
    {
      text: "Data governance ensures:",
      options: [
        "All data is stored in the cloud",
        "Data quality, security, privacy, and compliance standards are maintained",
        "Data is never shared between departments",
        "Only IT staff can access data"
      ],
      correctIndex: 1,
      explanation: "Data governance establishes policies, procedures, and standards for data management to ensure quality, security, privacy, and regulatory compliance across the organization.",
      difficulty: "medium"
    },
    {
      text: "An ERP system integrates:",
      options: [
        "Only financial data",
        "Core business processes across departments into a unified system",
        "External customer data only",
        "Email and communication tools only"
      ],
      correctIndex: 1,
      explanation: "Enterprise Resource Planning (ERP) systems integrate core processes (finance, HR, supply chain, manufacturing) into a single system with a shared database.",
      difficulty: "medium"
    },
    {
      text: "Which visualization is best for showing the relationship between two continuous variables?",
      options: ["Pie chart", "Bar chart", "Scatter plot", "Tree map"],
      correctIndex: 2,
      explanation: "Scatter plots display the relationship between two continuous variables, showing correlation patterns, clusters, and outliers in the data.",
      difficulty: "medium"
    },
    {
      text: "Data mining differs from traditional querying because it:",
      options: [
        "Uses SQL only",
        "Discovers hidden patterns and relationships in large datasets",
        "Only works with structured data",
        "Is limited to financial data"
      ],
      correctIndex: 1,
      explanation: "Data mining uses algorithms to discover previously unknown patterns, relationships, and insights in large datasets, going beyond predefined queries.",
      difficulty: "medium"
    },
    {
      text: "Blockchain technology provides value in accounting primarily through:",
      options: [
        "Faster internet speeds",
        "Immutable, transparent transaction records",
        "Replacing all accountants",
        "Eliminating the need for financial statements"
      ],
      correctIndex: 1,
      explanation: "Blockchain creates tamper-proof, distributed transaction ledgers that enhance audit trails, reduce reconciliation needs, and increase trust in financial data.",
      difficulty: "hard"
    },
    {
      text: "Which cybersecurity attack tricks users into revealing sensitive information through fraudulent communications?",
      options: ["Ransomware", "Phishing", "DDoS attack", "SQL injection"],
      correctIndex: 1,
      explanation: "Phishing uses deceptive emails, messages, or websites to trick users into revealing credentials, financial data, or other sensitive information.",
      difficulty: "hard"
    },
    {
      text: "In a data warehouse, the ETL process stands for:",
      options: [
        "Evaluate, Test, Launch",
        "Extract, Transform, Load",
        "Enter, Tabulate, List",
        "Export, Transfer, Link"
      ],
      correctIndex: 1,
      explanation: "ETL (Extract, Transform, Load) pulls data from source systems, transforms it into consistent formats, and loads it into the data warehouse for analysis.",
      difficulty: "hard"
    }
  ]
};

export const part1Questions: Record<string, Array<Q>> = {
  "external-financial-reporting": [..._part1Questions["external-financial-reporting"], ...externalFinancialReportingNew],
  "planning-budgeting-forecasting": [..._part1Questions["planning-budgeting-forecasting"], ...planningBudgetingForecastingNew],
  "performance-management": [..._part1Questions["performance-management"], ...performanceManagementNew],
  "cost-management": [..._part1Questions["cost-management"], ...costManagementNew],
  "internal-controls": [..._part1Questions["internal-controls"], ...internalControlsNew],
  "technology-analytics": [..._part1Questions["technology-analytics"], ...technologyAnalyticsNew],
};
