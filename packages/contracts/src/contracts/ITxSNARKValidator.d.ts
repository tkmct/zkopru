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

export class ITxSNARKValidator extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)

  clone(): ITxSNARKValidator

  methods: {
    validateSNARK(
      blockData: string | number[],
      txIndex: number | string,
    ): TransactionObject<{
      slash: boolean
      reason: string
      0: boolean
      1: string
    }>

    hasValidSNARK(transaction: {
      inflow: {
        inclusionRoot: number | string
        nullifier: string | number[]
      }[]
      outflow: {
        note: number | string
        outflowType: number | string
        publicData: {
          to: string
          eth: number | string
          token: string
          amount: number | string
          nft: number | string
          fee: number | string
        }
      }[]
      swap: number | string
      fee: number | string
      proof: {
        a: { X: number | string; Y: number | string }
        b: { X: (number | string)[]; Y: (number | string)[] }
        c: { X: number | string; Y: number | string }
      }
      memo: string | number[]
    }): TransactionObject<{
      result: boolean
      reason: string
      0: boolean
      1: string
    }>
  }

  events: {
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}