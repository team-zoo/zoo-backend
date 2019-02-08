# Zoo Mid Career Track Project
## By: Marcy, Aaron, Kristin, Shaba
## February 7, 2019

### Description

This is a backend app that allows different zoos to track which animals are popular, along with other visitor information such as average visitor age and most favorite animal at each zoo. You are also able to search via animal types as well as enter in a zipcode to show you the closest zoo near you. We also included some data and routes for the mythical animals of Avatar: The Last Airbender. 

### Data Aggregations

* average age of visitors across all zoos ('/visitors/stats/average-age-all')
* average age of visitors across each zoo ('/visitors/stats/average-age-each')
* zoos ranked in order from highest number of visitors to lowest number of visitors ('/visitors/stats/zoos-by-visitor-count')
* zoos ranked in order from highest number of animals to lowest number of animals ('/animals/stats/zoos-by-animal-count')
* most prolific animal type across all zoos ('/animals/stats/zoos-prolific-animal-type-all')
* most favorited animal across all zoos ('/animals/stats/fav-animal-all')
* most favorited animal across each zoo ('/animals/stats/fav-animal-each')

### Query Instructions for URL

* '/animals/search/query?' --> type=__ & name=___ & status=___ & legs=___ & colors=___
* '/mythicalAnimals/search/query?' --> name=___ & habitat=___ & animalCombination=___
* You can add one query string to either route, or more than one; just make sure to connect the query strings with the '&' symbol

### To Start the CLI

* npm i
* run node client/client.js
* TIP: If you are using iTERM2, the resolution will be much better than the standard built in command line

### Command Line Instructions

* npm run seed //to seed the data
* npm run start //to start the server
* npm run test //to run the jest test suite
