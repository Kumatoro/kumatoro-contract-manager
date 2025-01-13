/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/kumatoro.json`.
 */
export type Kumatoro = {
  "address": "GSfunwcZzKJFQ2d4XWtJiqF7vnCJR4GUjxcUMPS5QhXe",
  "metadata": {
    "name": "kumatoro",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "calibrateMarketRound",
      "discriminator": [
        46,
        18,
        2,
        133,
        168,
        123,
        100,
        50
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "roundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "market_pda.round_counter",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "nextRoundPda",
          "writable": true
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "priceFeedAccount"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "closeRound",
      "discriminator": [
        149,
        14,
        81,
        88,
        230,
        226,
        234,
        37
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "roundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "rentReceiverAccount",
          "writable": true
        },
        {
          "name": "globalPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "force",
          "type": "bool"
        }
      ]
    },
    {
      "name": "createMarket",
      "discriminator": [
        103,
        226,
        97,
        235,
        200,
        188,
        251,
        254
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "global_pda.market_counter",
                "account": "globalData"
              }
            ]
          }
        },
        {
          "name": "globalPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "priceFeedAccount"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "priceFeedId",
          "type": "string"
        },
        {
          "name": "roundDuration",
          "type": "i64"
        },
        {
          "name": "marketTicker",
          "type": "string"
        },
        {
          "name": "minTopUp",
          "type": "u64"
        },
        {
          "name": "maxTopUp",
          "type": "u64"
        },
        {
          "name": "flatRange",
          "type": "u16"
        },
        {
          "name": "fees",
          "type": "u16"
        },
        {
          "name": "feeTakerAccount",
          "type": {
            "option": "pubkey"
          }
        }
      ]
    },
    {
      "name": "createPlayer",
      "discriminator": [
        19,
        178,
        189,
        216,
        159,
        134,
        0,
        192
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "globalPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createPlayerRound",
      "discriminator": [
        88,
        73,
        40,
        123,
        142,
        83,
        248,
        212
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerRoundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "roundPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "playerPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "roundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "chosenSide",
          "type": {
            "defined": {
              "name": "marketSide"
            }
          }
        },
        {
          "name": "topUp",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeGlobal",
      "discriminator": [
        47,
        225,
        15,
        112,
        86,
        51,
        190,
        231
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "treasuryBump",
          "type": "u8"
        },
        {
          "name": "adminAccount",
          "type": "pubkey"
        },
        {
          "name": "protocolFee",
          "type": "u16"
        },
        {
          "name": "payoutAccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "reallocRound",
      "discriminator": [
        244,
        132,
        153,
        73,
        166,
        229,
        198,
        46
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "roundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "resolveMarketRound",
      "discriminator": [
        174,
        76,
        253,
        250,
        161,
        160,
        69,
        28
      ],
      "accounts": [
        {
          "name": "resolver",
          "writable": true,
          "signer": true
        },
        {
          "name": "roundPda",
          "writable": true
        },
        {
          "name": "nextRoundPda",
          "writable": true
        },
        {
          "name": "nextRegisteringRoundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "market_pda.round_counter",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "priceFeedAccount"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "resolvePlayerRound",
      "discriminator": [
        238,
        161,
        214,
        70,
        81,
        60,
        254,
        148
      ],
      "accounts": [
        {
          "name": "player",
          "writable": true,
          "signer": true
        },
        {
          "name": "playerRoundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player"
              },
              {
                "kind": "account",
                "path": "roundPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "playerPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "player"
              }
            ]
          }
        },
        {
          "name": "marketPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "market_pda.market_seed_id",
                "account": "marketData"
              }
            ]
          }
        },
        {
          "name": "roundPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "marketPda"
              },
              {
                "kind": "account",
                "path": "round_pda.round_seed_id",
                "account": "roundData"
              }
            ]
          }
        },
        {
          "name": "treasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "globalPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  107,
                  117,
                  109,
                  97,
                  116,
                  111,
                  114,
                  111
                ]
              },
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolAccount",
          "writable": true
        },
        {
          "name": "marketFeeTakerAccount",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "globalData",
      "discriminator": [
        48,
        194,
        194,
        186,
        46,
        71,
        131,
        61
      ]
    },
    {
      "name": "marketData",
      "discriminator": [
        90,
        40,
        242,
        109,
        150,
        54,
        18,
        172
      ]
    },
    {
      "name": "playerData",
      "discriminator": [
        197,
        65,
        216,
        202,
        43,
        139,
        147,
        128
      ]
    },
    {
      "name": "playerRoundData",
      "discriminator": [
        90,
        250,
        242,
        67,
        132,
        198,
        8,
        112
      ]
    },
    {
      "name": "priceUpdateV2",
      "discriminator": [
        34,
        241,
        35,
        99,
        157,
        126,
        244,
        205
      ]
    },
    {
      "name": "roundData",
      "discriminator": [
        99,
        71,
        88,
        79,
        76,
        92,
        116,
        42
      ]
    }
  ],
  "events": [
    {
      "name": "eventCreated",
      "discriminator": [
        59,
        186,
        199,
        175,
        242,
        25,
        238,
        94
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized",
      "msg": "Unauthorized access attempt"
    },
    {
      "code": 6001,
      "name": "alreadyInitialized",
      "msg": "Already initialized"
    },
    {
      "code": 6002,
      "name": "identifierMaxLength",
      "msg": "Identifier max length reached"
    },
    {
      "code": 6003,
      "name": "maxFees",
      "msg": "Max fees reached"
    },
    {
      "code": 6004,
      "name": "maxRange",
      "msg": "Max range reached"
    },
    {
      "code": 6005,
      "name": "roundDoesNotBelongsMarketId",
      "msg": "This round does not belong to the specified market ID"
    },
    {
      "code": 6006,
      "name": "minTopUp",
      "msg": "The top up amount must be more or equal than the minimum allowed top up"
    },
    {
      "code": 6007,
      "name": "maxTopUp",
      "msg": "The top up amount must be less or equal than the maximum allowed top up"
    },
    {
      "code": 6008,
      "name": "marketPaused",
      "msg": "The market is paused"
    },
    {
      "code": 6009,
      "name": "roundStillActive",
      "msg": "The round cannot be resolved because it is still active"
    },
    {
      "code": 6010,
      "name": "roundNotStarted",
      "msg": "The round has not started"
    },
    {
      "code": 6011,
      "name": "roundRegistrationClosed",
      "msg": "The round registration is closed"
    },
    {
      "code": 6012,
      "name": "roundAlreadyResolved",
      "msg": "The round is already resolved"
    },
    {
      "code": 6013,
      "name": "playerRoundAlreadyResolved",
      "msg": "The player round is already resolved"
    },
    {
      "code": 6014,
      "name": "minTopUpMarketCreator",
      "msg": "Min top up should be higher than 0"
    },
    {
      "code": 6015,
      "name": "resolutionDeadlineExpired",
      "msg": "Resolution deadline expired"
    },
    {
      "code": 6016,
      "name": "playerRoundRequireToResolve",
      "msg": "The player round need to be resolved before closing it"
    },
    {
      "code": 6017,
      "name": "playerRoundRequireToRefund",
      "msg": "The player round need to be refunded before closing it"
    },
    {
      "code": 6018,
      "name": "wrongFeeTakerAccountProvided",
      "msg": "Wrong fee taker account provided"
    },
    {
      "code": 6019,
      "name": "wrongProtocolCollectorAccountProvided",
      "msg": "Wrong protocol collector account provided"
    },
    {
      "code": 6020,
      "name": "allPlayersNotResolvedYet",
      "msg": "All players must resolve their rounds before proceeding"
    },
    {
      "code": 6021,
      "name": "wrongRentAccountProvided",
      "msg": "Wrong rent account provided"
    }
  ],
  "types": [
    {
      "name": "eventCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "eventId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "globalData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketCounter",
            "docs": [
              "Amount of available markets used to create new markets"
            ],
            "type": "u64"
          },
          {
            "name": "playerCounter",
            "docs": [
              "Amount of player used to create new account players"
            ],
            "type": "u64"
          },
          {
            "name": "adminAccount",
            "docs": [
              "Manager of the contract used for instructions administration"
            ],
            "type": "pubkey"
          },
          {
            "name": "protocolFee",
            "docs": [
              "Base points Fee the protocol is taking from markets (e.g., 20 = 2%)"
            ],
            "type": "u16"
          },
          {
            "name": "payoutTreasuryBump",
            "docs": [
              "Receiver of the protocol fee"
            ],
            "type": "u8"
          },
          {
            "name": "payoutAccount",
            "docs": [
              "Payout account"
            ],
            "type": "pubkey"
          },
          {
            "name": "isInit",
            "docs": [
              "Verify the global account is not initialized"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "marketData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "roundCounter",
            "docs": [
              "Amount of created rounds used to create new rounds"
            ],
            "type": "u64"
          },
          {
            "name": "roundDuration",
            "docs": [
              "Duration of a round"
            ],
            "type": "i64"
          },
          {
            "name": "priceFeedId",
            "docs": [
              "Oracle account used to get the price feed"
            ],
            "type": "string"
          },
          {
            "name": "marketTicker",
            "docs": [
              "Market identifier used as info to track the market"
            ],
            "type": "string"
          },
          {
            "name": "isActive",
            "docs": [
              "Switch to pause or restart the market"
            ],
            "type": "bool"
          },
          {
            "name": "minTopUp",
            "docs": [
              "Minimum deposit in Lamports to start playing with this market"
            ],
            "type": "u64"
          },
          {
            "name": "maxTopUp",
            "docs": [
              "Maximum deposit in Lamports this market accept to ensure fairness"
            ],
            "type": "u64"
          },
          {
            "name": "flatRange",
            "docs": [
              "Used to ensure the flat range default should be -0.5/+0.5% from the price (e.g., 50 = 0.005%, 500 = 0,05%)"
            ],
            "type": "u16"
          },
          {
            "name": "creator",
            "docs": [
              "Creator of this market"
            ],
            "type": "pubkey"
          },
          {
            "name": "fees",
            "docs": [
              "Fee taker for the market creator (e.g., 50 = 0.5%, 500 = 5%)"
            ],
            "type": "u16"
          },
          {
            "name": "createdTime",
            "docs": [
              "When the market have been created"
            ],
            "type": "i64"
          },
          {
            "name": "marketSeedId",
            "docs": [
              "Market seed id to recreate the pda"
            ],
            "type": "u64"
          },
          {
            "name": "feeTakerAccount",
            "docs": [
              "Fee taker of the market"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "creationDeposit",
            "docs": [
              "Deposit requirement for market creation"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketSide",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "up"
          },
          {
            "name": "flat"
          },
          {
            "name": "down"
          }
        ]
      }
    },
    {
      "name": "playerData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "docs": [
              "Owner of this player account"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalEarned",
            "docs": [
              "Total amount of the player earning since start"
            ],
            "type": "u64"
          },
          {
            "name": "totalRoundsPlayed",
            "docs": [
              "Total rounds the player participated since start"
            ],
            "type": "u64"
          },
          {
            "name": "totalRoundsWon",
            "docs": [
              "Total round the player won since start"
            ],
            "type": "u64"
          },
          {
            "name": "totalToppedUp",
            "docs": [
              "Total amount the player topped up since start"
            ],
            "type": "u64"
          },
          {
            "name": "isInitialized",
            "docs": [
              "Is player initialized"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "playerRoundData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "playerAccount",
            "docs": [
              "Owner of this player round account"
            ],
            "type": "pubkey"
          },
          {
            "name": "marketSeedId",
            "docs": [
              "Market seed id to recreate the pda"
            ],
            "type": "u64"
          },
          {
            "name": "roundSeedId",
            "docs": [
              "Round seed id to recreate the pda"
            ],
            "type": "u64"
          },
          {
            "name": "totalToppedUp",
            "docs": [
              "Total topped up into this round"
            ],
            "type": "u64"
          },
          {
            "name": "chosenSide",
            "docs": [
              "Chosen side up, flat or down"
            ],
            "type": {
              "defined": {
                "name": "marketSide"
              }
            }
          },
          {
            "name": "payoutAmount",
            "docs": [
              "Total paid amount"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "joinedTimestamp",
            "docs": [
              "Timestamp where the player joined the round"
            ],
            "type": "i64"
          },
          {
            "name": "isRefunded",
            "docs": [
              "If the player have been refunded"
            ],
            "type": "bool"
          },
          {
            "name": "isResolved",
            "docs": [
              "If the player round have already been resolved"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "priceFeedMessage",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feedId",
            "docs": [
              "`FeedId` but avoid the type alias because of compatibility issues with Anchor's `idl-build` feature."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "conf",
            "type": "u64"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "publishTime",
            "docs": [
              "The timestamp of this price update in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "prevPublishTime",
            "docs": [
              "The timestamp of the previous price update. This field is intended to allow users to",
              "identify the single unique price update for any moment in time:",
              "for any time t, the unique update is the one such that prev_publish_time < t <= publish_time.",
              "",
              "Note that there may not be such an update while we are migrating to the new message-sending logic,",
              "as some price updates on pythnet may not be sent to other chains (because the message-sending",
              "logic may not have triggered). We can solve this problem by making the message-sending mandatory",
              "(which we can do once publishers have migrated over).",
              "",
              "Additionally, this field may be equal to publish_time if the message is sent on a slot where",
              "where the aggregation was unsuccesful. This problem will go away once all publishers have",
              "migrated over to a recent version of pyth-agent."
            ],
            "type": "i64"
          },
          {
            "name": "emaPrice",
            "type": "i64"
          },
          {
            "name": "emaConf",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "priceUpdateV2",
      "docs": [
        "A price update account. This account is used by the Pyth Receiver program to store a verified price update from a Pyth price feed.",
        "It contains:",
        "- `write_authority`: The write authority for this account. This authority can close this account to reclaim rent or update the account to contain a different price update.",
        "- `verification_level`: The [`VerificationLevel`] of this price update. This represents how many Wormhole guardian signatures have been verified for this price update.",
        "- `price_message`: The actual price update.",
        "- `posted_slot`: The slot at which this price update was posted."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "writeAuthority",
            "type": "pubkey"
          },
          {
            "name": "verificationLevel",
            "type": {
              "defined": {
                "name": "verificationLevel"
              }
            }
          },
          {
            "name": "priceMessage",
            "type": {
              "defined": {
                "name": "priceFeedMessage"
              }
            }
          },
          {
            "name": "postedSlot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "roundData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketSeedId",
            "docs": [
              "Market seed id to recreate the pda"
            ],
            "type": "u64"
          },
          {
            "name": "roundSeedId",
            "docs": [
              "Round seed id to recreate the pda"
            ],
            "type": "u64"
          },
          {
            "name": "roundStartTime",
            "docs": [
              "When the round start"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "roundEndTime",
            "docs": [
              "When the round end"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "playerCounter",
            "docs": [
              "How much player is participating"
            ],
            "type": "u64"
          },
          {
            "name": "roundOutcome",
            "docs": [
              "Market side winner"
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "roundOutcome"
                }
              }
            }
          },
          {
            "name": "totalInUp",
            "docs": [
              "Total amount in upside"
            ],
            "type": "u64"
          },
          {
            "name": "totalInFlat",
            "docs": [
              "Total amount in flat side"
            ],
            "type": "u64"
          },
          {
            "name": "totalInDown",
            "docs": [
              "Total amount in downside"
            ],
            "type": "u64"
          },
          {
            "name": "openingPrice",
            "docs": [
              "Initial price at the start of the round"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "openingExponent",
            "docs": [
              "Initial exponent at the start of the round"
            ],
            "type": {
              "option": "i32"
            }
          },
          {
            "name": "flatRange",
            "docs": [
              "Used to ensure the flat range default typically -0.5/+0.5% from the price"
            ],
            "type": "u16"
          },
          {
            "name": "createdTime",
            "docs": [
              "When the round have been created"
            ],
            "type": "i64"
          },
          {
            "name": "lastTradedPrice",
            "docs": [
              "Final price at the end of the round"
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "lastTradedExponent",
            "docs": [
              "Final exponent at the end of the round"
            ],
            "type": {
              "option": "i32"
            }
          },
          {
            "name": "isInitialized",
            "docs": [
              "Check if an account is initialized"
            ],
            "type": "bool"
          },
          {
            "name": "playerTotalCollected",
            "docs": [
              "Player resolved/collected amount"
            ],
            "type": "u64"
          },
          {
            "name": "creator",
            "docs": [
              "Round creator to receive the rent on close"
            ],
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "roundOutcome",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "up"
          },
          {
            "name": "flat"
          },
          {
            "name": "down"
          },
          {
            "name": "canceled"
          }
        ]
      }
    },
    {
      "name": "verificationLevel",
      "docs": [
        "Pyth price updates are bridged to all blockchains via Wormhole.",
        "Using the price updates on another chain requires verifying the signatures of the Wormhole guardians.",
        "The usual process is to check the signatures for two thirds of the total number of guardians, but this can be cumbersome on Solana because of the transaction size limits,",
        "so we also allow for partial verification.",
        "",
        "This enum represents how much a price update has been verified:",
        "- If `Full`, we have verified the signatures for two thirds of the current guardians.",
        "- If `Partial`, only `num_signatures` guardian signatures have been checked.",
        "",
        "# Warning",
        "Using partially verified price updates is dangerous, as it lowers the threshold of guardians that need to collude to produce a malicious price update."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "partial",
            "fields": [
              {
                "name": "numSignatures",
                "type": "u8"
              }
            ]
          },
          {
            "name": "full"
          }
        ]
      }
    }
  ]
};
