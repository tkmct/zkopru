/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export type Approval = ContractEventLog<{
  owner: string
  approved: string
  tokenId: string
  0: string
  1: string
  2: string
}>
export type ApprovalForAll = ContractEventLog<{
  owner: string
  operator: string
  approved: boolean
  0: string
  1: string
  2: boolean
}>
export type Transfer = ContractEventLog<{
  from: string
  to: string
  tokenId: string
  0: string
  1: string
  2: string
}>

export interface IERC721Metadata extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions,
  ): IERC721Metadata
  clone(): IERC721Metadata
  methods: {
    /**
     * Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.
     */
    approve(
      to: string,
      tokenId: number | string | BN,
    ): NonPayableTransactionObject<void>

    /**
     * Returns the number of tokens in ``owner``'s account.
     */
    balanceOf(owner: string): NonPayableTransactionObject<string>

    /**
     * Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.
     */
    getApproved(
      tokenId: number | string | BN,
    ): NonPayableTransactionObject<string>

    /**
     * Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}
     */
    isApprovedForAll(
      owner: string,
      operator: string,
    ): NonPayableTransactionObject<boolean>

    /**
     * Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.
     */
    ownerOf(tokenId: number | string | BN): NonPayableTransactionObject<string>

    /**
     * Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: number | string | BN,
    ): NonPayableTransactionObject<void>

    /**
     * Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.
     */
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: number | string | BN,
      data: string | number[],
    ): NonPayableTransactionObject<void>

    /**
     * Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.
     */
    setApprovalForAll(
      operator: string,
      _approved: boolean,
    ): NonPayableTransactionObject<void>

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: string | number[],
    ): NonPayableTransactionObject<boolean>

    /**
     * Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: number | string | BN,
    ): NonPayableTransactionObject<void>

    /**
     * Returns the token collection name.
     */
    name(): NonPayableTransactionObject<string>

    /**
     * Returns the token collection symbol.
     */
    symbol(): NonPayableTransactionObject<string>

    /**
     * Returns the Uniform Resource Identifier (URI) for `tokenId` token.
     */
    tokenURI(tokenId: number | string | BN): NonPayableTransactionObject<string>
  }
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter

    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>,
    ): EventEmitter

    Transfer(cb?: Callback<Transfer>): EventEmitter
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
  }

  once(event: 'Approval', cb: Callback<Approval>): void
  once(event: 'Approval', options: EventOptions, cb: Callback<Approval>): void

  once(event: 'ApprovalForAll', cb: Callback<ApprovalForAll>): void
  once(
    event: 'ApprovalForAll',
    options: EventOptions,
    cb: Callback<ApprovalForAll>,
  ): void

  once(event: 'Transfer', cb: Callback<Transfer>): void
  once(event: 'Transfer', options: EventOptions, cb: Callback<Transfer>): void
}
