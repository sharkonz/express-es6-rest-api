const httpStatus = require('http-status');
const { Website } = require('../models');
const parse = require('lusha-mock-parser');

const insertWebsite = async (scapperBody) => {
  const url = scapperBody;
 	const resultFromParser = parse(url);
	const listOfUrls = resultFromParser.links;
	const html = resultFromParser.html;
  const tempWebsite = {url: scapperBody, html: html};
  const isExists = await getWebsiteByUrl(url);
  if (isExists) {
    console.log("exists");
  } else {
    console.log("not exists");
    Website.create(tempWebsite);
    parseAllLinks(listOfUrls)
  }
   return;
  };

const createWebsite = async (url, html) => {
  return Website.create({url: url, html: html});
};
const getWebsiteByUrl = async (url) => {;
  return Website.findOne({ url });
};
async function parseAllLinks(originalList)  {
		 console.log('list of links:' + originalList);
		if (originalList.length == 0) {
			return;
		} else if (originalList.length > 0) {
		const url = originalList.pop();
   
    const isExists = await getWebsiteByUrl(url);
      if (isExists) {
        parseAllLinks(originalList);
      } else {
        const resultFromParser = parse(url); 
        const listOfUrls = resultFromParser.links;
        const html = resultFromParser.html;
        console.log('return from parser:' + listOfUrls); 
        // const tempWebsite = {url: url, html: html};
       await createWebsite(url,html);
        Array.prototype.push.apply(originalList,listOfUrls);
        //TODO:
        //need to remove duplicate
        parseAllLinks(originalList);
      }
		}
	}
  module.exports = {
    insertWebsite,
    getWebsiteByUrl,
  };
