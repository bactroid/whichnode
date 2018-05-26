# whichnode

Stupid utility for determining which server node you're on for my job.

This was mainly an attempt to play around with
[Folktale](http://folktale.origamitower.com/). Nearly all my fun hobbyist
coding is done in Haskell these days, and I really missing being able to
manage my program's control flow via data structures and their predefined
interfaces. Folktale has Future as concurrency model that can slurp in
JavaScript promises, and it has some of the
[Fantasy Land](https://github.com/fantasyland/fantasy-land) data structures I
expect from Haskell (e.g. Maybe and Either).

This project has almost no utility for you if you're not a ONE.UF developer
or someone trying to tinker with Folktale. It remains arguable if it has any
utility even if you match both criteria.

## How do I run this stupid thing?

Be sure to fill in the `url` variable with the appropriate API URL for our
whoami service.

Then…
```
node whichnode.js
```

## Observations
* Folktale lets me use data structures not unlike Haskell's to manage my
  control flow, but stuff like pattern matching is really awkward.
* I feel like some of these structures should be foldable. Instead of a
  pattern match, I could be using a catamorphism to yield my result.
* `listen` on the Future feels really unlike the FP I'm used to.
* I should do this same thing in Haskell to compare the two implementations.
