/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export class BurnAuction extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)

  clone(): BurnAuction

  methods: {
    auctionEnd(): TransactionObject<string>

    auctionStart(): TransactionObject<string>

    balance(): TransactionObject<string>

    coordinatorUrls(arg0: string): TransactionObject<string>

    highestBidPerRound(
      arg0: number | string,
    ): TransactionObject<{
      owner: string
      amount: string
      0: string
      1: string
    }>

    lastBalanceIndex(): TransactionObject<string>

    lockedRoundIndex(): TransactionObject<string>

    pendingBalances(arg0: string): TransactionObject<string>

    roundLength(): TransactionObject<string>

    startBlock(): TransactionObject<string>

    bid(roundIndex: number | string): TransactionObject<void>

    setUrl(url: string): TransactionObject<void>

    clearUrl(): TransactionObject<void>

    minNextBid(roundIndex: number | string): TransactionObject<string>

    coordinatorForRound(roundIndex: number | string): TransactionObject<string>

    activeCoordinator(): TransactionObject<string>

    calcRoundStart(roundIndex: number | string): TransactionObject<string>

    roundForBlock(blockNumber: number | string): TransactionObject<string>

    currentRound(): TransactionObject<string>

    refund(): TransactionObject<void>

    refundAddress(owner: string): TransactionObject<void>

    transferBalance(recipient: string): TransactionObject<void>

    updateBalance(): TransactionObject<void>

    register(): TransactionObject<void>

    openRoundIfNeeded(): TransactionObject<void>

    shouldOpenRound(): TransactionObject<boolean>

    isRoundOpen(): TransactionObject<boolean>

    isProposable(proposer: string): TransactionObject<boolean>

    lockForUpgrade(roundIndex: number | string): TransactionObject<void>
  }

  events: {
    NewHighBid: ContractEvent<{
      roundIndex: string
      bidder: string
      amount: string
      0: string
      1: string
      2: string
    }>
    UrlUpdate: ContractEvent<string>
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
