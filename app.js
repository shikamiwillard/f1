import { getHTML, races } from './scrapper/scrape';

async function go(){
    races(await getHTML('https://www.formula1.com/en/racing/2019.html'));
}

go();