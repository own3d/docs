# Concepts

At our core, we have a few concepts that are used throughout the codebase. 
Every project and the API version which belongs to the project has its own set of concepts. In this document, we will try to explain the concepts and how they are used.

### Laravel Responses

#### Simple Paginated Response

A simple pagination will always return the data including meta information. As you can see, the meta information is returned before the data. 
Simple pagination do not contain the total number of items.

```json
{
  "current_page": 1,
  "data": [
    {
      "id": "615c0382-17e9-4cb5-b46e-97a2ed765ea0",
      "artist_id": "ee427349-cf2c-48b0-9f8a-6ae499fe905f",
      "name": "Sunset Stream",
      "description": null,
      "image": "album-images/tSkabcxtgpL8meZYgSyTLYJkbISipY2BMubJ4825.jpg",
      "released_at": null,
      "created_at": "2021-10-08T10:40:17.000000Z",
      "updated_at": "2021-10-08T10:59:09.000000Z",
      "deleted_at": null,
      "image_url": "https://cdn.jukebox.gg/album-images/tSkabcxtgpL8meZYgSyTLYJkbISipY2BMubJ4825.jpg"
    },
    ...
  ],
  "first_page_url": "https://api.jukebox.gg/v1/frontpage?page=1",
  "from": 1,
  "next_page_url": "https://api.jukebox.gg/v1/frontpage?page=2",
  "path": "https://api.jukebox.gg/v1/frontpage",
  "per_page": 5,
  "prev_page_url": null,
  "to": 5
}
```

### Paginated Response

The difference between simple and paginated response is that the paginated response contains the total number of items. 
Everything else will be the same.

### JSON:API Responses

#### JSON:API Pagination Response

A JSON:API pagination response is a [JSON:API](https://jsonapi.org/) response that, when successful, contains data and links to the next and previous pages of data.

> Note: The total number of items is not included in every JSON:API pagination response.

```json
{
  "data": [
    {
      "type": "posts",
      "id": "1",
      "attributes": {
        "title": "JSON API paints my bikeshed!"
      }
    },
    {
      "type": "posts",
      "id": "2",
      "attributes": {
        "title": "Rails is Omakase"
      }
    }
  ],
  "links": {
    "self": "http://example.com/posts?page[number]=1&page[size]=1",
    "first": "http://example.com/posts?page[number]=1&page[size]=1",
    "last": "http://example.com/posts?page[number]=1&page[size]=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "total": 2
  }
}
```

