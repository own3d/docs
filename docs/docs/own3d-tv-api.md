# OWN3D Shop API

> **Information**: We're about to merge own3d.pro and own3d.tv API's.

## Terminology

### Asset

Assets aka. Single Products are purchasable products. They can be bought by users. Mostly they also belong to [CPS](#complete-package-series).
They can contain files in different localizations. At least one file must be available in the english language.

### Complete Package Series

A Complete Package Series aka. CPS aka. Complete Overlay Package is the landing page for a given [complete package](#complete-package). 
There are some special cases where a complete package series only consists of one complete package, this is called a [seasonal overlay](#seasonal-overlay).

### Complete Package

A complete package is a purchasable product and belongs to a [CPS](#complete-package-series) and contains one or more [assets](#asset). 
Typically, there are two types of complete packages:

- Basic
- Premium

They can contain files in different localizations. At least one file must be available in the english language. 
Those files can differ from the files of the assets.

### Categorical

Categories are used to filter products by their attributes. For example, if you want to filter products by their `color` attribute, you would use the `color` categorical.

Here is a list of all the categories:

- Event Categories
- Game Categories
- Style Categories
- Style Content Categories
- Style Sound Categories
- Emotion Categories
- Color Categories

Typical those categories are fetched within the `/v1/product-filters` endpoint to get a list of all the categoricals, supported by the category.

### Seasonal Overlay

A seasonal overlay is a [complete package series](#complete-package-series) that only consists of one [complete package](#complete-package).

### Voucher

A voucher is a coupon code that entitles the holder to a discount, or that may be exchanged for goods or service.

## API Reference

### Get Entitlements

Entitlements are SKUs that are granted to a user.

#### Authentication

- [User Access Token](authorization.md#types-of-tokens)
- [`entitlements:read` Scope](authorization.md#scopes)

#### URL

```text
GET https://api.own3d.tv/v2/entitlements
```

#### Pagination Support

[Simple pagination](concepts.md) is supported.

#### Return Values

| Parameter | Type | Description |
| -------- | ---- | ----------- |
| `data` | `array` | Array of entitlements |
| `data.id` | `string` | UUID of the entitlement |
| `data.order_id` | `string?` | UUID of the order that the entitlement belongs to |
| `data.type` | `string` | Source of entitlement |
| `data.sku_id` | `string` | SKU UUID of the entitlement |
| `data.sku_type` | `string` | SKU type of the entitlement |
| `data.sku` | `string` | SKU Object of the entitlement |
| `data.product_id` | `string` | Product ID of the entitlement |
| `data.metadata` | `object` | Metadata of the entitlement |

#### SKU Types and Their Object Structure

##### SKU Type: `product`

| Parameter | Type | Description |
| -------- | ---- | ----------- |
| `data.sku.id` | `string` | UUID of the product |
| `data.sku.files` | `array` | Array of files of the product |
| `data.sku.files.id` | `string` | UUID of the file |
| `data.sku.files.locale` | `string` | Locale of the file |

Download a specific file of a product:

> Note: The given entitlement must be a type of `product`, otherwise the endpoint will return a `400` error.

```http request
GET https://api.own3d.tv/v2/entitlements/{entitlement}/download
Authorization: Bearer <user_access_token>
Content-Type: application/json
Accept: application/json

{
  "locale": "en"
}
```

##### SKU Type: `license_key`

| Parameter | Type | Description |
| -------- | ---- | ----------- |
| `data.sku.license_key` | `string` | License key of the entitlement |

##### SKU Type: `maker_session`

| Parameter | Type | Description |
| -------- | ---- | ----------- |
| `data.sku.download_url` | `string` | URL to download the session |
| `data.sku.thumbnail_url` | `string` | URL to download the thumbnail |

<open-api-documentation specs="http://api-docs.internal.stream.tv/swagger/spec.json" base-url="https://api.own3d.tv" />



