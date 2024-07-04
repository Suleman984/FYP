import express from 'express';
import { scrapData } from './scrap';
const cheerio = require('cheerio');
import { scrapAllData } from './scrapAnalytics';
const cors = require("cors");
const app = express();
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const apiUrl = 'http://gh-export.us/webstats/siteinfo/';
app.use(cors());
app.listen(3001);
app.get('/', (req, res) => {
    res.send('Welcome to the Scraper API');
});
app.get('/get-scrapped-data', async (req, res) => {
    try {
        const scrappedResult = await scrapData('https://ecomeye.com/best-online-clothes-shopping-sites-in-pakistan/');
        res.send(scrappedResult);
    } catch (err) {
        console.log({ err });
        throw new Error("Something went wrong!");
    }
});

// app.get('/get-analytics-page', async (req, res) => {
//     const { url } = req.query; // Extract the 'url' query parameter
    
//     try {
//         // Extract the host name from the URL
//         const hostName = url; // Get the full hostname (e.g., zarashahjahan.com)
//         const mainHostName = hostName.split('.')[0]; // Extract the main part of the hostname (e.g., zarashahjahan)
//         console.log('Host Name:', mainHostName);

//         // Simulated function to fetch HTML data from the provided URL
//         let analyticsPage = await scrapAllData(url);

//         // Load the HTML data using Cheerio
//         const $ = cheerio.load(analyticsPage);

//         // Remove unnecessary elements
//         $('aside').remove();
//         $('header').remove();
//         $('p.my-6.text-xs.font-semibold.text-gray-600.dark\\:text-gray-400').each((i, el) => {
//             $(el).find('a').remove();
//             $(el).remove();
//         });

//     // Update paths to local assets
//     // $('link[href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap"]').attr('href', '/assets/css/tailwind.output.css');
//     // $('script[src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"]').attr('src', '/assets/js/alpine.min.js');
//     // $('script[src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"]').attr('src', '/assets/js/Chart.min.js');
//     // $('link[href="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.css"]').attr('href', '/assets/css/Chart.min.css');
//     // $('script[src="init-alpine.js"]').attr('src', '/assets/js/init-alpine.js');

//     // // Ensure chart containers are visible
//     // $('.chartjs-size-monitor').each((i, el) => {
//     //     $(el).find('div').css('display', 'block');
//     // });
//         // Send the modified HTML as a response
//         analyticsPage = $.html();
//         res.json(analyticsPage);

//     } catch (err) {
//         console.error('Error scraping data:', err);
//         res.status(500).send('Something went wrong!');
//     }
// });

app.get('/get-analytics-page', async (req, res) => {
    const { url } = req.query; // Extract the 'url' query parameter
    
    try {
        // Extract the host name from the URL
        const hostName = url; // Get the full hostname (e.g., zarashahjahan.com)
        const mainHostName = hostName.split('.')[0]; // Extract the main part of the hostname (e.g., zarashahjahan)
        console.log('Host Name:', mainHostName);

        // Simulated function to fetch HTML data from the provided URL
        let analyticsPage = await scrapAllData(url);

        // Load the HTML data using Cheerio
        const $ = cheerio.load(analyticsPage);

        // Remove unnecessary elements
        $('aside').remove();
        $('header').remove();
        
        // Remove the <p> tag with the specified class and its nested <a> tag
        $('p.my-6.text-xs.font-semibold.text-gray-600.dark\\:text-gray-400').each((i, el) => {
            $(el).find('a').remove();
            $(el).remove();
        });

        // Update paths to local assets
        $('link[href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap"]').attr('href', '/assets/css/tailwind.output.css');
        $('script[src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"]').attr('src', '/assets/js/alpine.min.js');
        $('script[src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"]').attr('src', '/assets/js/Chart.min.js');
        $('link[href="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.css"]').attr('href', '/assets/css/Chart.min.css');
        $('script[src="init-alpine.js"]').attr('src', '/assets/js/init-alpine.js');

        // Ensure chart containers are visible
        $('.chartjs-size-monitor').each((i, el) => {
            $(el).find('div').css('display', 'block');
        });
        const webUrl='http://192.168.137.1:3001/get-scrapped-data'
        // Replace image addresses for specific elements
        const imagePaths = [
            'assets/img/alexa_rank.png',
            'assets/img/daily_time.png',
            'assets/img/bounce_rate.png',
            'assets/img/search_traffic.png',
            'assets/img/linking_sites.png',
            'assets/img/page_views.png'
        ];
        const newImagePaths = [
            'http://gh-export.us/webstats/siteinfo/assets/img/alexa_rank.png',
            'http://gh-export.us/webstats/siteinfo/assets/img/daily_time.png',
            'http://gh-export.us/webstats/siteinfo/assets/img/bounce_rate.png',
            'http://gh-export.us/webstats/siteinfo/assets/img/search_traffic.png',
            'http://gh-export.us/webstats/siteinfo/assets/img/linking_sites.png',
            'http://gh-export.us/webstats/siteinfo/assets/img/page_views.png'
        ];
        

        imagePaths.forEach((oldSrc, index) => {
            $(`img[src="${oldSrc}"]`).attr('src', newImagePaths[index]);
        });

        // Send the modified HTML as a response
        analyticsPage = $.html();
        res.json(analyticsPage);

    } catch (err) {
        console.error('Error scraping data:', err);
        res.status(500).send('Something went wrong!');
    }
});