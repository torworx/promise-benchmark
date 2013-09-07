# promise-benchmark

Basic and complex performance tests for promise implementations.

* `Basic` tests rewrite from [promise-perf-tests](https://github.com/cujojs/promise-perf-tests)
* `Complex` tests rewrite form [perf-promises](https://github.com/thanpolas/perf-promises)

## Running the tests

Right now, the tests are runnable en masse via `npm test` in unix-like environments, and individually via node in other envs.

### Setup

1. Clone the repo
1. `npm install` to install the promise implementations to be tested
1. Run tests:
    * Run all tests: `npm test`
    * Run a single test with node: `node <test>`

## Test Results
```
==========================================================
promise-fulfill x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    1.04          -
2. when-1.8.1                              2.64     153.85
3. deferred                                9.66     828.85
4. when-2                                 16.35    1472.12
5. q                                      34.11    3179.81

==========================================================
promise-reject x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    1.05          -
2. when-1.8.1                              3.69     251.43
3. when-2                                 37.92    3511.43
4. q                                      41.52    3854.29
5. deferred                               70.22    6587.62

==========================================================
promise-sequence x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    3.21          -
2. when-1.8.1                              4.13      28.66
3. deferred                               10.79     236.14
4. when-2                                 72.98    2173.52
5. q                                     192.58    5899.38

==========================================================
defer-create x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              1.89          -
2. well                                    3.20      69.31
3. when-2                                 19.15     913.23
4. q                                      25.73    1261.38
5. deferred                               36.27    1819.05

==========================================================
defer-fulfill x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                             16.55          -
2. well                                   26.23      58.49
3. when-2                                 74.71     351.42
4. deferred done()                        84.97     413.41
5. deferred                              146.10     782.78
6. q                                     239.98    1350.03
7. q done()                              485.40    2832.93

==========================================================
defer-reject x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              8.95          -
2. well                                   16.97      89.61
3. when-2                                 69.24     673.63
4. q                                     213.99    2290.95
5. deferred                              298.24    3232.29

==========================================================
defer-sequence x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              8.29          -
2. well                                   10.54      27.14
3. when-2                                103.71    1151.03
4. deferred                              143.48    1630.76
5. q                                     283.89    3324.49

==========================================================
map x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              7.43          -
2. well                                    7.97       7.27
3. deferred                               19.54     162.99
4. when-2                                158.13    2028.26

==========================================================
reduce x 10000 x 20
NOTE: in node v0.10.17, deferred.reduce causes a
stack overflow for an array length >= 595
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    5.80          -
2. when-1.8.1                              7.14      23.10
3. when-2                                214.43    3597.07

==========================================================
thanpolas x 500 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              6.26          -
2. async                                   6.32       0.96
3. well                                    7.93      26.68
4. deferred                               15.33     144.89
5. when-2                                 27.94     346.33
6. q                                      62.40     896.81

==========================================================
thanpolas x 500 x 20  -- Total time:
----------------------------------------------------------
Name                                    Time ms     Diff %
1. async                                  10.50          -
2. when-1.8.1                             22.26     112.00
3. well                                   24.86     136.76
4. when-2                                 58.12     453.52
5. deferred                               71.18     577.90
6. q                                     156.10    1386.67
```
