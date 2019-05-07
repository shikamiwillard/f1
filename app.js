import { getHTML, getDrivers, driverNames } from './scrapper/scrape';

async function go(){
    const url = 'https://www.formula1.com/en/results.html/2019/drivers.html'
    driverNames(await getDrivers(url));
}

go();