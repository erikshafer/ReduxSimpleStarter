# [Random] Notes From Lectures

## Project related.
Will be using API key from YouTube to generate this project.
Will install small package to make searching process very simple.

User types something in search bar, we'll do an API request to update the list.

We want to know when and what the user is typing into the searchbar (event handling).

## NPM
The flag `--save` with NPM will save the package to our `package.json` file.

## Webpack
Importing && Exporting.

## State

Anytime a state is changed, all the children are re-rendered as well. This can be a very expensive operation.

Change the property state to.... {moar detailz}.

There is no imperative update, it's much more declarative. This allows us to do more useful things.
Let's say we want default input. Not grayed out text, but an actual value. A starting value.
Like... A player character's name!

## Downward Data Flow
We want the parent component to fetch the data. At the beginning of section-02, that parent is the `index.js`. 

## Section 2

### Map
In a functional component, props is an argument. In a class component, props are available anywhere as `this.props`. Be aware of this when refactoring! Update references from `props` to `this.props`.

Grider recommends staying away from JS for loops. Instead, use an iterator. Map is a great tool. Inside JS arrays, there is a map function.
```var array = [1,2,3];```
```array.map(function(number) { return number * 2});```
```[2, 4, 6]``` This is a NEW array, the old one was not mutated.
```array.map(function(number) { return '<div>' + number + '</div>'});```
```["<div>1</div>", "<div>2</div>", "<div>3</div>"]```

### List Item Keys
React is very *smart* about generating lists from objects like arrays. There needs to be unique keys (ID). It doesn't want to regenerate/re-render the entire list when it could just look at a key and update said value.

In VideoList, we've gone ahead and added `key={video.etag}`. The etag is a prop of each video, and is completely unique. We can use this prop to help React differentiate each video. A takeaway here is a good API will provide a robust set of props like hashes for such features. Using just standard IDs (01, 02, 03) may not be good enough.

In short, it's a best practice to always add a key.