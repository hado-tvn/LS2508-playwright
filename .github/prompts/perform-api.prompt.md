---
description: "Perform the api request using playwright"
mode: agent
model: GPT-4.1
tools: ['playwright_click_and_switch_tab', 'playwright_delete', 'playwright_get', 'playwright_patch', 'playwright_post', 'playwright_put']
---
## Instructions
Using playwight mcp server to perform tasks:
1. send post request follow curl command below
```
curl -X POST \
  https://restful-booker.herokuapp.com/auth \
  -H 'Content-Type: application/json' \
  -d '{
    "username" : "admin",
    "password" : "password123"
}'
```
2. verify that the response status code is 200
3. verify that the response body contains a token

DONOT Generate any code, just perform the task using playwright mcp server!
After performing the task, respond with "Done" or summarize what you did and test result passed or failed.