# vinted-client

## Description

`api-vinted` is a package that provides an unofficial API for interacting with the Vinted platform.

## Status

> ⚠️ **Warning: This project is no longer maintained.**

## Installation

```
npm install vinted-client
```

## Example usage

```javascript
const { User } = require("vinted-client");

const user = new User(access_token, refresh_token, x_crf_token);

// Initialize the user
user.init();

// Now you can access to user information
console.log(user.user);
```

## Documentation

Summary:

- [User](#user)
  - [getNotifications](#getnotifications)
  - [getOrders](#getorders)
  - [getStats](#getstats)
  - [getConversations](#getconversations)
  - [getInbox](#getinbox)

### User

#### getNotifications

```javascript
await user.getNotifications(page?, per_page?);
```

Parameters:

- `page` (optional): The page number to get notifications from. Default is 1.
- `per_page` (optional): The number of notifications to get per page. Default is 5.

### getOrders

```javascript
await user.getOrders(type, status, page?, per_page?);
```

Parameters:

- `type` ("sold" | "purchased" | "all"): The type of orders to get. Default is `all`.
- `status` ("all" | "in_progress" | "completed" | "canceled"): The status of orders to get. Default is `all`.
- `page` (optional): The page number to get orders from. Default is 1.
- `per_page` (optional): The number of orders to get per page. Default is 5.

### getStats

```javascript
await user.getStats();
```

### getConversations

```javascript
await user.getConversations(conversation_id);
```

Parameters:

- `conversation_id` (number): The ID of the conversation to get.

### getInbox

```javascript
await user.getInbox(page?, per_page?);
```

Parameters:

- `page` (optional): The page number to get conversations from. Default is 1.
- `per_page` (optional): The number of conversations to get per page. Default is 5.

## Contact

If you have any questions or need further assistance, feel free to contact me on Discord. My tag is `.skanix`. I'm looking forward to hearing from you!

# License

GPL-3.0
