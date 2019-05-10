import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML() {
    const urls = [];
    const url = 'https://www.formula1.com/en/results.html/2019/races.html';
    await axios.get(url).then(results => {
        const $ = cheerio.load(results.data);
        $('.resultsarchive-filter-item-link').each(function (index, element) {
            let href = $(element).attr('href');
            urls.push(`https://www.formula1.com${href}`);
        })
    });
    return urls;
};

async function getDrivers() {
    const url = 'https://www.formula1.com/en/results.html/2019/drivers.html';
    const {
        data: drivers
    } = await axios.get(url)
    return drivers;
}

async function driverNames(drivers) {
    const driverDetails = [];
    const $ = cheerio.load(drivers);

    $('.ArchiveLink').each(function (index, element) {
        let fname = $(element).find('.hide-for-tablet').text().trim()
        let lname = $(element).find('.hide-for-mobile').text().trim()
        let driver = {
            name: `${fname} ${lname}`
        }
        driverDetails.push(driver)
    })
    console.log(driverDetails);
}

export {
    getHTML,
    getDrivers,
    driverNames
};