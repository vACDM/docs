---
sidebar_position: 2
---

# vACDM Colors

There are several colors for the different items that are important. Colors can be changed within the settings.

Below you can find the items with the different colors and it's meaning for the ACDM process.

## EOBT / TOBT

| Color         | Meaning |
| --------      | ------- |
| light green  | TOBT in the future, not confirmed  |
| green         | TOBT confirmed, not expired, within the next hour, difference between TOBT and TSAT less than 5 minutes    |
| light yellow  | TOBT not confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)     |
| yellow        | TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay) |
| orange        | TOBT confirmed, difference TOBT and TSAT more than 5 minutes (startup delay)    |
| gray          | Outbound has startup |

## TSAT

| Color         | Meaning |
| --------      | ------- |
| light green   | NOW < TSAT - 5 minutes  |
| green         | NOW = TSAT +/- 5 minutes    |
| orange        | TSAT expired (NOW > TSAT + 5 minutes)    |
| gray          | with ASAT (startup) |

## ASRT / AORT

| Color         | Meaning |
| --------      | ------- |
| green         | ASRT / AORT older 0 - 5 mintes  |
| yellow        | ASRT / AORT older 5 - 10 minutes |
| orange        | ASRT / AORT older 10 - 15 minutes    |
| red           | ASRT / AORT older 15 minutes     |
| gray          | with ASAT / AOBT |

## ASAT

| Color         | Meaning |
| --------      | ------- |
| green         | ASAT + 5 minutes (pushback) or ASAT + 10 minutes (taxi out)  |
| orange        | Pushback Window expired    |
| gray          | with AOBT |

## TTOT

| Color         | Meaning |
| --------      | ------- |
| green         | NOW < TTOT or still valid TTOT Block  |
| orange        | TTOT Block expired (e.g. TTOT 1213, orange at 1220)    |
| gray          | with AOBT |