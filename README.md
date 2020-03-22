# @taishikato/slug-generator

![npm (scoped)](https://img.shields.io/npm/v/@taishikato/slug-generator)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@taishikato/slug-generator?label=minified%20size)

## Install
With npm
```shell
$ npm i @taishikato/slug-generator
```
With yarn
```shell
$ yarn add @taishikato/slug-generator
```

## Usage

```javascript
import generateSlug from '@taishikato/slug-generator';

generateSlug('My first blog post title (March 21)');
// → my-first-blog-post-title-march-21

/**
 * When you pass true as a second argument, the slug will have a random strings at the end
 * This is useful when some items(i.e. blog posts) can have the same title, which means those will have the same slug
 * and you want a unique slug for each item.
 */
generateSlug('My first blog post title (March 21)', true);
// → my-first-blog-post-title-march-21-1cc703f7
```
