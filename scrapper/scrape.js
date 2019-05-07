import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML() {
    const urls = [];
    const url = 'https://www.formula1.com/en/results.html/2019/races.html';
    await axios.get(url).then(results => {
        const $ = cheerio.load(results.data);
        $('.resultsarchive-filter-item-link').each(function(index, element) {
            let href = $(element).attr('href');
            urls.push(`https://www.formula1.com${href}`);
        })
    });
    return urls;
};

async function getDrivers() {
    const url = 'https://www.formula1.com/en/results.html/2019/drivers.html';
    const { data: drivers } = await axios.get(url)
    return drivers;
}

async function driverNames(drivers) {
    const $ = cheerio.load(drivers);
    const firstname = $('.hide-for-tablet, .hide-for-mobile')
    .text()
    .trim()
    .split( ' ', )
    console.log(firstname);
}

async function races(){
    const urls = await getHTML();
    const $ = cheerio.load(urls);
    const h1 = $('.ResultsArchiveTitle')
        // console.log(h1.text());
}
export { getHTML, getDrivers, driverNames };