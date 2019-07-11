# vk-hash

## Checking VK query string usage example:

```js
const VKHash = require('vk-hash');
const { key } = process.env;
const VKH = new VKHash({key});

const example_query_string = '?vk_access_token_settings=notify&vk_app_id=7006568&vk_are_notifications_enabled=1&vk_is_app_user=1&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_user_id=193433600&sign=nMAiOnPRz1QDxwzPz1wm9LHO3uv2uoGYw5vNrEI3GZM';

if (VKH.validateQueryString(example_query_string)){ /* OK */}else{/* NOT OK */}

```
