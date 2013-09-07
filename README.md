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
defer-fulfill x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    2.79          -
2. when-1.8.1                              2.95       5.73
3. deferred                                6.71     140.50
4. when-2                                 15.61     459.50
5. q                                      31.82    1040.50

==========================================================
defer-reject x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              3.64          -
2. well                                    4.76      30.77
3. q                                      36.81     911.26
4. when-2                                 41.24    1032.97
5. deferred                               67.68    1759.34

==========================================================
promise-sequence x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              4.05          -
2. well                                    4.25       4.94
3. deferred                               10.52     159.75
4. when-2                                 70.07    1630.12
5. q                                     186.28    4499.51

==========================================================
defer-create x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. well                                    2.00          -
2. when-1.8.1                              2.15       7.50
3. when-2                                 18.00     800.00
4. q                                      24.17    1108.50
5. deferred                               34.97    1648.50

==========================================================
defer-fulfill x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                             15.69          -
2. well                                   19.64      25.18
3. when-2                                 66.55     324.16
4. deferred done()                        82.10     423.26
5. deferred                              137.39     775.65
6. q                                     242.57    1446.02
7. q done()                              443.66    2727.66

==========================================================
defer-reject x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              9.72          -
2. well                                   13.04      34.16
3. when-2                                 70.72     627.57
4. q                                     196.60    1922.63
5. deferred                              274.49    2723.97

==========================================================
defer-sequence x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              7.75          -
2. well                                    8.86      14.32
3. when-2                                102.32    1220.26
4. deferred                              140.01    1706.58
5. q                                     275.12    3449.94

==========================================================
map x 10000 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              7.40          -
2. well                                    8.34      12.70
3. deferred                               17.28     133.51
4. when-2                                151.19    1943.11

==========================================================
reduce x 10000 x 20
NOTE: in node v0.10.17, deferred.reduce causes a
stack overflow for an array length >= 595
----------------------------------------------------------
Name                                    Time ms     Diff %
1. when-1.8.1                              7.33          -
2. well                                    7.74       5.59
3. when-2                                202.33    2660.30

==========================================================
thanpolas x 500 x 20
----------------------------------------------------------
Name                                    Time ms     Diff %
1. async                                   5.72          -
2. when-1.8.1                              6.13       7.17
3. well                                    7.19      25.70
4. deferred                               14.94     161.19
5. when-2                                 30.28     429.37
6. q                                      53.44     834.27

==========================================================
thanpolas x 500 x 20  -- Total time:
----------------------------------------------------------
Name                                    Time ms     Diff %
1. async                                   9.53          -
2. well                                   22.22     133.16
3. when-1.8.1                             22.81     139.35
4. when-2                                 66.91     602.10
5. deferred                               70.65     641.34
6. q                                     134.13    1307.45
```
