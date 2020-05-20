# README

This is me studying orthogonal latin squares, trying to come up with a "compact"
way of representing a 4x4 board where cards - Ace to Jack - of four different
suits can be placed so that each row and each column contains all suits and
values.

There was a [video on Numberphile][#euler-squares] recently on those squares, and it actually starts
with a similar puzzle.

I've read about this puzzle in Donald Knuth's "The Art of Computer Programming" - it was a
requirement to try this puzzle out before turning the page. I didn't have playing cards nearby,
so I decided to throw a little something in Observable, got really lost there - and decided to try
out a test-driven development approach using my laptop and VSCode.

## Implementation

So far it's just two classes - `Board` and `Card` and tests for them. Initially those were written
with `mocha` - you can run those with `npm test-mocha`. Then I rewrote them with `jest` and am
currently running them with [Majestic][#majestic].

Install dev-dependencies with `npm install` and run the test suites with `npm test`.

---

[#euler-squares]: https://www.youtube.com/watch?v=qu04xLNrk94 "YouTube: Euler Squares - Numberphile"
[#majestic]: https://github.com/Raathigesh/majestic "Zero config UI for Jest"
