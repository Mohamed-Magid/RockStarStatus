# Rockstar Status Page Scraper
Just require ```spider.js``` file in your script and call it as async function
```javascript
const spider = require('./spider.js');
console.log(await spider());
```
## Expected Output for success:
```javascript
{
  'Red Dead Online': [
    { service: 'PC', status: 'up' },
    { service: 'Xbox One', status: 'up' },
    { service: 'PS4', status: 'up' },
    { service: 'Stadia', status: 'up' }
  ],
  'Grand Theft Auto Online': [
    { service: 'PC', status: 'up' },
    { service: 'PS4', status: 'up' },
    { service: 'Xbox One', status: 'up' },
    { service: 'PS3', status: 'up' },
    { service: 'Xbox 360', status: 'up' }
  ],
  'Social Club': [ { service: 'All Features', status: 'up' } ],
  'Rockstar Games Launcher': [
    { service: 'Authentication', status: 'up' },
    { service: 'Store', status: 'up' },
    { service: 'Cloud Services', status: 'up' },
    { service: 'Downloads', status: 'up' }
  ]
}
```
## Expected Output for failure:
```javascript
{
    error: {
        msg: 'Something went wrong'
    }
}
```