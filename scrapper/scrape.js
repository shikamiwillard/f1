import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = 
    await axios.get('https://www.formula1.com/en/racing/2019.html')
    return html;
}

async function races(html){
    const $ = cheerio.load(html);
    const section = $('.teaser-info-title');
    console.log(section.text());
}

export { getHTML, races };