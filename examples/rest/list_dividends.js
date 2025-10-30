import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listDividends() {
  try {
    const response = await rest.listDividends(
      {
        ticker: "<ticker>",
        ex_dividend_date: "<ex_dividend_date>",
        record_date: "<record_date>",
        declaration_date: "<declaration_date>",
        pay_date: "<pay_date>",
        frequency: "<frequency>",
        cash_amount: "<cash_amount>",
        dividend_type: "<dividend_type>",
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
        "ex_dividend_date.gte": "<ex_dividend_date.gte>",
        "ex_dividend_date.gt": "<ex_dividend_date.gt>",
        "ex_dividend_date.lte": "<ex_dividend_date.lte>",
        "ex_dividend_date.lt": "<ex_dividend_date.lt>",
        "record_date.gte": "<record_date.gte>",
        "record_date.gt": "<record_date.gt>",
        "record_date.lte": "<record_date.lte>",
        "record_date.lt": "<record_date.lt>",
        "declaration_date.gte": "<declaration_date.gte>",
        "declaration_date.gt": "<declaration_date.gt>",
        "declaration_date.lte": "<declaration_date.lte>",
        "declaration_date.lt": "<declaration_date.lt>",
        "pay_date.gte": "<pay_date.gte>",
        "pay_date.gt": "<pay_date.gt>",
        "pay_date.lte": "<pay_date.lte>",
        "pay_date.lt": "<pay_date.lt>",
        "cash_amount.gte": "<cash_amount.gte>",
        "cash_amount.gt": "<cash_amount.gt>",
        "cash_amount.lte": "<cash_amount.lte>",
        "cash_amount.lt": "<cash_amount.lt>",
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

example_listDividends();