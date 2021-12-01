# OWN3D Shop API

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

<open-api-documentation specs="http://api-docs.internal.stream.tv/swagger/spec.json" base-url="https://api.own3d.tv" />



