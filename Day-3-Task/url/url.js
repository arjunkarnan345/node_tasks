import url from 'url'



let gt = new URL("https://www.gtholidays.in/");

console.log(gt.host);

console.log(gt.searchParams);


let zomatourl = new URL(  "https://www.zomato.com/"  )


 console.log(  zomatourl.host  );

 let res = zomatourl.searchParams;

 console.log(res.get("done"));