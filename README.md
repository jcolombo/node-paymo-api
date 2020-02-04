# Paymo API Interface

Connect to paymoapi.com with a fully typescripted object interface

- Initial Import

###### Example Use - Get List of Projects
```
import Paymo from 'node-paymo-api'

const PAYMO_API_KEY = 'abc123myPaymoApiKeyHere'
const paymo = Paymo.connect(PAYMO_API_KEY)

const projects = await paymo.projects().list()
console.log('Projects', projects)

// Get list of projects created in a date range and also include the client info
const filteredProjects = await paymo.projects().list(
  {
    include: ['client'],
    filter: { date_interval: ['"2019-11-01"', '"2020-12-31"'] },
  }
)
console.log('Filtered Projects', filteredProjects)



```