const SimpleMarketABI = {
  interface: [{
    constant: false,
    inputs: [{ name: 'pay_gem', type: 'address' }, { name: 'buy_gem', type: 'address' }, {
      name: 'pay_amt',
      type: 'uint128',
    }, { name: 'buy_amt', type: 'uint128' }],
    name: 'make',
    outputs: [{ name: 'id', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: true,
    inputs: [],
    name: 'last_offer_id',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'cancel',
    outputs: [{ name: 'success', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'getOffer',
    outputs: [{ name: '', type: 'uint256' }, { name: '', type: 'address' }, {
      name: '',
      type: 'uint256',
    }, { name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'bytes32' }, { name: 'maxTakeAmount', type: 'uint128' }],
    name: 'take',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id_', type: 'bytes32' }],
    name: 'bump',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'isActive',
    outputs: [{ name: 'active', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'offers',
    outputs: [{ name: 'pay_amt', type: 'uint256' }, { name: 'pay_gem', type: 'address' }, {
      name: 'buy_amt',
      type: 'uint256',
    }, { name: 'buy_gem', type: 'address' }, { name: 'owner', type: 'address' }, {
      name: 'active',
      type: 'bool',
    }, { name: 'timestamp', type: 'uint64' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'bytes32' }],
    name: 'kill',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: true,
    inputs: [{ name: 'id', type: 'uint256' }],
    name: 'getOwner',
    outputs: [{ name: 'owner', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'id', type: 'uint256' }, { name: 'quantity', type: 'uint256' }],
    name: 'buy',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    constant: false,
    inputs: [{ name: 'pay_amt', type: 'uint256' }, { name: 'pay_gem', type: 'address' }, {
      name: 'buy_amt',
      type: 'uint256',
    }, { name: 'buy_gem', type: 'address' }],
    name: 'offer',
    outputs: [{ name: 'id', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'uint256' }],
    name: 'LogItemUpdate',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'pay_amt', type: 'uint256' }, {
      indexed: true,
      name: 'pay_gem',
      type: 'address',
    }, { indexed: false, name: 'buy_amt', type: 'uint256' }, {
      indexed: true,
      name: 'buy_gem',
      type: 'address',
    }],
    name: 'LogTrade',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'pay_gem',
      type: 'address',
    }, { indexed: false, name: 'buy_gem', type: 'address' }, {
      indexed: false,
      name: 'pay_amt',
      type: 'uint128',
    }, { indexed: false, name: 'buy_amt', type: 'uint128' }, {
      indexed: false,
      name: 'timestamp',
      type: 'uint64',
    }],
    name: 'LogMake',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'pay_gem',
      type: 'address',
    }, { indexed: false, name: 'buy_gem', type: 'address' }, {
      indexed: false,
      name: 'pay_amt',
      type: 'uint128',
    }, { indexed: false, name: 'buy_amt', type: 'uint128' }, {
      indexed: false,
      name: 'timestamp',
      type: 'uint64',
    }],
    name: 'LogBump',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: false, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'pay_gem',
      type: 'address',
    }, { indexed: false, name: 'buy_gem', type: 'address' }, {
      indexed: true,
      name: 'taker',
      type: 'address',
    }, { indexed: false, name: 'take_amt', type: 'uint128' }, {
      indexed: false,
      name: 'give_amt',
      type: 'uint128',
    }, { indexed: false, name: 'timestamp', type: 'uint64' }],
    name: 'LogTake',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{ indexed: true, name: 'id', type: 'bytes32' }, {
      indexed: true,
      name: 'pair',
      type: 'bytes32',
    }, { indexed: true, name: 'maker', type: 'address' }, {
      indexed: false,
      name: 'pay_gem',
      type: 'address',
    }, { indexed: false, name: 'buy_gem', type: 'address' }, {
      indexed: false,
      name: 'pay_amt',
      type: 'uint128',
    }, { indexed: false, name: 'buy_amt', type: 'uint128' }, {
      indexed: false,
      name: 'timestamp',
      type: 'uint64',
    }],
    name: 'LogKill',
    type: 'event',
  }],
};

export { SimpleMarketABI as default };
