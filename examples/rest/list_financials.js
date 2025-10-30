import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listFinancials() {
  try {
    const response = await rest.listFinancials(
      {
        ticker: "<ticker>",
        cik: "<cik>",
        company_name: "<company_name>",
        sic: "<sic>",
        filing_date: "<filing_date>",
        period_of_report_date: "<period_of_report_date>",
        timeframe: "<timeframe>",
        include_sources: "<include_sources>",
        "company_name.search": "<company_name.search>",
        "filing_date.gte": "<filing_date.gte>",
        "filing_date.gt": "<filing_date.gt>",
        "filing_date.lte": "<filing_date.lte>",
        "filing_date.lt": "<filing_date.lt>",
        "period_of_report_date.gte": "<period_of_report_date.gte>",
        "period_of_report_date.gt": "<period_of_report_date.gt>",
        "period_of_report_date.lte": "<period_of_report_date.lte>",
        "period_of_report_date.lt": "<period_of_report_date.lt>",
        order: "<order>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_listFinancials();