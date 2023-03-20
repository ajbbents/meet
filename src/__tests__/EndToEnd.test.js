import puppeteer from "puppeteer";

describe('filter events by city', () => {
  let browser;
  let page;
  jest.setTimeout(100000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('when user has not searched for a city show events from all cities', async () => {
    const numberOfEvents = await page.$$eval(
      '.event',
      (element) => element.length
    );
    expect(numberOfEvents).toBe(2);
  });

  test('user should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin', { delay: 5 });
    const numberOfCities = await page.$$eval(
      '.suggestions li',
      (element) => element.length

    );
    expect(numberOfCities).toBe(2);
  });

  test('user can select a city from list of suggestions', async () => {
    await page.reload();
    await page.type('.city', 'Berlin', { delay: 5 });
    await page.click('.suggestions li');
    const numberOfEvents = await page.$$eval(
      '.event',
      (element) => element.length
    );
    expect(numberOfEvents).toBe(1);
  });
});

// describe('show/hide an event details', () => {
//   let browser;
//   let page;
//   beforeAll(async () => {
//     browser = await puppeteer.launch({
//       headless: true,
//       slowMo: 250, // slow down by 250 ms
//       ignoreDefaultArgs: ['--disable-extensions'] //ignores default setting that causes timeout errors
//     });
//     page = await browser.newPage();
//     await page.goto('http://localhost:3000/');
//     await page.waitForSelector('.event');
//   }, 30000); //30000 is the timeout

//   afterAll(() => {
//     browser.close();
//   });

//   test('An event element is collapsed by default', async () => {
//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeNull();
//   });

//   test('User can expand an event to see its details', async () => {
//     await page.click('.event .details-button');
//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeDefined();
//   });

//   test('User can collapse event to hide its details', async () => {
//     await page.click('.event .details-button');
//     const eventDetails = await page.$('.event .event-details');
//     expect(eventDetails).toBeNull();
//   });
// });