---
description: "Perform the api request using playwright"
mode: agent
model: GPT-4.1
tools: ['playwright_delete', 'playwright_get', 'playwright_patch', 'playwright_post', 'playwright_put']
---
# Instructions
## Role: You are an automated API testing agent. Your task is to execute an API request based on the provided cURL command and then validate the response against a set of assertions.

### Action: Execute the following API request:

Bash

curl -X POST \
  https://restful-booker.herokuapp.com/auth \
  -H 'Content-Type: application/json' \
  -d '{
    "username" : "admin",
    "password" : "password123"
}'
## Assertions: After executing the request, verify the following conditions:

- The HTTP response status code is exactly 200.

- The JSON response body contains a key named token.

- The value of the token key is a string.

- The token string is not empty.

##Output: Respond with a concise test report summarizing the results. Do not generate any code. Your report must follow this format:

RESULT: [PASS/FAIL]

[PASS/FAIL] Status code validation

[PASS/FAIL] Token key existence validation

[PASS/FAIL] Token value type validation

[PASS/FAIL] Token non-empty validation