##How do I make API requests?


  What is the base URL for all requests?
  https://openapi.etsy.com/v2/


  Are there any headers or query parameters required?

  a api key is needed for all requests. Query parameters are used in the url to specify information from the API


  What kind of response should I expect?

  default response is in JSON can also get JSONP if you ask for it.


##How does the API handle authentication?


Do I need to authenticate? with user credentials?

You need to authenticate using a api key for all requests. Oauth is required for write permissions.

What can I do with an unauthenticated request?
Nothing i think?

How can I authenticate my request? (what methods)
URL api key or oauth in the header


##What Resource in the API represents...


an individual product?
/v2/listings/active?fields=listing_id,title,price

a group or collection of products?


images associated with a product?
/v2/listings/active?includes=Images


sizes and colors for a product?
Using a variation number to return color and size for a productt.

What actions and endpoints exist for each of these Resources?
What parameters do each endpoint require or accept?
What fields are returned for each Resource, specifically:
an individual product?
user id listing id state catagory id title price currency code and like 1000 other things
a group or collection of products?
seems to be the same as above?
What additional fields can be requested for each?

Im going to be honest here I've spent about 2 hours on this and I feel pretty lost in this documentation and Im starting to wonder if that is kind of the point. The amount of info available in this api is pretty overwhelming. I am sorry I didn't get more answers but I don't know where to go to find them...
