# cooking-companion

## initial thoughts

### concept
A web-based app for assisting in picking recipes, shopping, and cooking

Home
Users log in to browse recipes, and can save to their favorited recipes
They can then make 'plans', stating that they plan to make this recipe
Ingredients previously bought (and that haven't been consumed by a recipe or are non-perishable) are stored/presented in their kitchen
Recipe recommendations
Can input new recipes

Shopping
Ingredients from all recipes are aggregated (including quantities) and itemized for shopping
Ingredients in the users' kitchen that are included in the recipe list are not presented (at least grey-out, can be re-added)
If no plans exist, the app presents repeat favorites or something new to instantly create a plan

Cooking
Execute a plan when all ingredients are fulfilled (can bypass this)
Steps are presented one at a time can cleanly
Detects time requirements for a step, presents a timer when needed (can pull up at all times)

### stack
#### backend
Language: Node
Framework: Koa
  consider - Express, Hapi
DB: Mongo
  (consider - search db)
Validator - Joi
Server - nginx (needed?)

#### frontend
Language: ES2015
  consider - Typescript, Elm
Framework: React
  consider - Vue
State Management - Redux (needed?)
Transpiler: Babel
Bundler: Webpack
  consider - Prepack
Testing framework: Mocha
  consider - Jest
Templating Framework: Jade (if using Vue)

#### other
CI tools
PaaS for hosting
DaaS for Mongo
