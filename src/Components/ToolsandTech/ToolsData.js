const ToolImageAdresses = [
    './Images/shopify.jpg',
    './Images/amazon.png  ',
    './Images/ebay.jpg',
    './Images/etsy.jpg',
    './Images/Wix.jpg',
    './Images/SquareSpace.png'
  ];
const ToolUrls=[
'https://www.shopify.com/',
'https://www.amazon.com/',
'https://www.ebay.com/',
'https://www.etsy.com/',
'https://www.wix.com/',
'https://www.squarespace.com/']
//   const ToolUrls=['https://www.shopify.com/free-trial/3s?term=shopify.com&adid=566143522319&campaignid=15433369425&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleuS_ReveGu3JpBrG_8lVRyaUepg0C6URj3o9TWTWkBlzqnLqbeWYeoaAnuFEALw_wcB&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011 ','https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=3269300624209719928&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1011086&hvtargid=kwd-10573980&hydadcr=2246_13649807&gad_source=1 ', 'https://www.ebay.com/', 'https://www.etsy.com/?zanpid=10690_1713397179_980ca8466d87ca7667c711019a7a13f3&utm_medium=affiliate&utm_source=affiliate_window&utm_campaign=row_buyer&utm_content=937449&sv1=affiliate&sv_campaign_id=937449&utm_term=0&awc=10690_1713397179_980ca8466d87ca7667c711019a7a13f3&gad_source=1&gclid=Cj0KCQjw_qexBhCoARIsAFgBleuglv9xGy8iffJbyojbZhEfL_43SpyDp43ueFvH3ngcc08wnCmPlycaAl_9EALw_wcB',
// 'https://www.wix.com/', 'https://www.squarespace.com/?clickid=QfKx5m0XBxyKRJK0-pTGr2JpUkHT1AROfT9CQo0&irgwc=1&utm_medium=pp&utm_source=Traffikoo%20LLC&utm_campaign=Traffikoo%20LLC&channel=pp&subchannel=40052&source=Traffikoo%20LLC'];
const ToolTitles = [
  'Shopify', 'Amazon', 'Ebay', 'Etsy', 'Wix', 'SquareSpace'
];  
  
  
  const ToolTexts = [];
  
  ToolTitles.forEach(title => {
    switch (title) {
      case 'Shopify':
        ToolTexts.push("Shopify is a leading eCommerce platform known for its simplicity and scalability, empowering businesses to build and grow their online stores.");
        break;
      case 'Amazon':
        ToolTexts.push("Amazon is a global marketplace offering vast opportunities for sellers to reach millions of customers worldwide, with robust fulfillment and advertising services.");
        break;
      case 'Ebay':
        ToolTexts.push("Ebay is a popular online auction and shopping platform, connecting buyers and sellers around the world, offering a wide range of products and auction-style listings.");
        break;
      case 'Etsy':
        ToolTexts.push("Etsy is a unique online marketplace focused on handmade, vintage, and craft supplies, providing a platform for independent creators to showcase and sell their products.");
        break;
      case 'Wix':
        ToolTexts.push("Wix is a versatile website builder offering powerful eCommerce capabilities, enabling businesses to create stunning online stores with customizable templates and integrated marketing tools.");
        break;
      case 'SquareSpace':
        ToolTexts.push("SquareSpace is a popular website builder renowned for its sleek designs and intuitive interface, providing seamless eCommerce solutions for businesses to launch and manage their online presence.");
        break;
      default:
        ToolTexts.push("No information available for this tool.");
    }
  });
  
  export { ToolImageAdresses, ToolTexts, ToolTitles ,ToolUrls};
  
//   console.log(ToolTexts);
  