import Readability from "./libs/readability.js";
import DOMPurify from 'dompurify';
import ArticleStyles from './styles.css';

const basearticle = new Readability(document).parse();

if (basearticle) {
    const purify = DOMPurify(window);

    const article = purify.sanitize(basearticle.content);

    const title = basearticle.title;
    const byline = basearticle.byline;
    const content = article;

    const titleHeader = "<title>" + title + "</title>\n";

    document.getElementsByTagName("head")[0].innerHTML = titleHeader + "<style>" + ArticleStyles + "</style>";
    document.body.innerHTML = null;
    document.body.innerHTML = "<h2>" + title + "</h2>";

    if (byline) {
        document.body.innerHTML += "<h3>" + byline + "</h3";
    }

    document.body.innerHTML += content;
}
