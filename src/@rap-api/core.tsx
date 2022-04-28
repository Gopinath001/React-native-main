import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Iterable: any;
  Upload: any;
};

export type AnnualPass = Node & {
  __typename?: 'AnnualPass';
  id: Scalars['ID'];
  user: User;
  profile?: Maybe<UserProfile>;
  year: Scalars['Int'];
  isChild: Scalars['Boolean'];
  annualPassCode?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  uuid: Scalars['String'];
  created: Scalars['String'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type AnnualPassCart = Node & {
  __typename?: 'AnnualPassCart';
  id: Scalars['ID'];
  user: User;
  purchasablePriceIds: Scalars['Iterable'];
  address?: Maybe<UserAddress>;
  checkoutUrl?: Maybe<Scalars['String']>;
  priceBreakdown?: Maybe<Scalars['Iterable']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type AnnualPassConnection = {
  __typename?: 'AnnualPassConnection';
  edges?: Maybe<Array<Maybe<AnnualPassEdge>>>;
  pageInfo: AnnualPassPageInfo;
  totalCount: Scalars['Int'];
};

export type AnnualPassEdge = {
  __typename?: 'AnnualPassEdge';
  node?: Maybe<AnnualPass>;
  cursor: Scalars['String'];
};

export type AnnualPassFilter_Order = {
  year?: Maybe<Scalars['String']>;
  isChild?: Maybe<Scalars['String']>;
  annualPassCode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type AnnualPassPageInfo = {
  __typename?: 'AnnualPassPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type AnnualPassPurchasable = Node & {
  __typename?: 'AnnualPassPurchasable';
  id: Scalars['ID'];
  _id: Scalars['String'];
  year: Scalars['Int'];
  profile: UserProfile;
  prices: Scalars['Iterable'];
  child: Scalars['Boolean'];
};

export type AnnualPassPurchasableConnection = {
  __typename?: 'AnnualPassPurchasableConnection';
  edges?: Maybe<Array<Maybe<AnnualPassPurchasableEdge>>>;
  pageInfo: AnnualPassPurchasablePageInfo;
  totalCount: Scalars['Int'];
};

export type AnnualPassPurchasableEdge = {
  __typename?: 'AnnualPassPurchasableEdge';
  node?: Maybe<AnnualPassPurchasable>;
  cursor: Scalars['String'];
};

export type AnnualPassPurchasablePageInfo = {
  __typename?: 'AnnualPassPurchasablePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type AnnualPassPurchasablePrice = Node & {
  __typename?: 'AnnualPassPurchasablePrice';
  id: Scalars['ID'];
  _id: Scalars['String'];
  region: Scalars['String'];
  basePrice: Scalars['Float'];
  discountValue: Scalars['Float'];
  totalPrice: Scalars['Float'];
  price: Scalars['Float'];
};

export type AnnualPassPurchasablePriceConnection = {
  __typename?: 'AnnualPassPurchasablePriceConnection';
  edges?: Maybe<Array<Maybe<AnnualPassPurchasablePriceEdge>>>;
  pageInfo: AnnualPassPurchasablePricePageInfo;
  totalCount: Scalars['Int'];
};

export type AnnualPassPurchasablePriceEdge = {
  __typename?: 'AnnualPassPurchasablePriceEdge';
  node?: Maybe<AnnualPassPurchasablePrice>;
  cursor: Scalars['String'];
};

export type AnnualPassPurchasablePricePageInfo = {
  __typename?: 'AnnualPassPurchasablePricePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type AvailableEntryMonth = Node & {
  __typename?: 'AvailableEntryMonth';
  id: Scalars['ID'];
  year: Scalars['Int'];
  month: Scalars['Int'];
  default: Scalars['Boolean'];
  lateEntry: Scalars['Boolean'];
  monthName: Scalars['String'];
  displayName: Scalars['String'];
  displayNameWithLateEntry: Scalars['String'];
};

export type AvailableEntryMonthConnection = {
  __typename?: 'AvailableEntryMonthConnection';
  edges?: Maybe<Array<Maybe<AvailableEntryMonthEdge>>>;
  pageInfo: AvailableEntryMonthPageInfo;
  totalCount: Scalars['Int'];
};

export type AvailableEntryMonthEdge = {
  __typename?: 'AvailableEntryMonthEdge';
  node?: Maybe<AvailableEntryMonth>;
  cursor: Scalars['String'];
};

export type AvailableEntryMonthPageInfo = {
  __typename?: 'AvailableEntryMonthPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Cart = Node & {
  __typename?: 'Cart';
  id: Scalars['ID'];
  entryLineItems?: Maybe<CartEntryLineItemConnection>;
  productLineItems?: Maybe<CartProductLineItemConnection>;
  address?: Maybe<UserAddress>;
  checkoutUrl?: Maybe<Scalars['String']>;
  priceBreakdown?: Maybe<Scalars['Iterable']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  usingInternationalAnnualPass: Scalars['Boolean'];
  yearMonth: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type CartEntryLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type CartProductLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type CartEntryLineItem = Node & {
  __typename?: 'CartEntryLineItem';
  id: Scalars['ID'];
  cart: Cart;
  profile?: Maybe<UserProfile>;
  challengeTarget: ChallengeTarget;
  year: Scalars['Int'];
  month: Scalars['Int'];
  withMedal: Scalars['Int'];
  personalisedMedal: Scalars['Int'];
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  differentAddress?: Maybe<UserAddress>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  annualPass?: Maybe<AnnualPass>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  yearMonthString: Scalars['String'];
  profileSet: Scalars['Boolean'];
  personalisedMedalTargetValue?: Maybe<Scalars['Int']>;
  childEntry: Scalars['Boolean'];
  isGuestEntry: Scalars['Boolean'];
  isPersonalisedEntry: Scalars['Boolean'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type CartEntryLineItemChallengeCheck = Node & {
  __typename?: 'CartEntryLineItemChallengeCheck';
  id: Scalars['ID'];
  cartEntryLineItem: CartEntryLineItem;
  challengeExists: Scalars['Boolean'];
  challengeUuid?: Maybe<Scalars['String']>;
  challengeIri?: Maybe<Scalars['String']>;
};

export type CartEntryLineItemChallengeCheckConnection = {
  __typename?: 'CartEntryLineItemChallengeCheckConnection';
  edges?: Maybe<Array<Maybe<CartEntryLineItemChallengeCheckEdge>>>;
  pageInfo: CartEntryLineItemChallengeCheckPageInfo;
  totalCount: Scalars['Int'];
};

export type CartEntryLineItemChallengeCheckEdge = {
  __typename?: 'CartEntryLineItemChallengeCheckEdge';
  node?: Maybe<CartEntryLineItemChallengeCheck>;
  cursor: Scalars['String'];
};

export type CartEntryLineItemChallengeCheckPageInfo = {
  __typename?: 'CartEntryLineItemChallengeCheckPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type CartEntryLineItemConnection = {
  __typename?: 'CartEntryLineItemConnection';
  edges?: Maybe<Array<Maybe<CartEntryLineItemEdge>>>;
  pageInfo: CartEntryLineItemPageInfo;
  totalCount: Scalars['Int'];
};

export type CartEntryLineItemEdge = {
  __typename?: 'CartEntryLineItemEdge';
  node?: Maybe<CartEntryLineItem>;
  cursor: Scalars['String'];
};

export type CartEntryLineItemPageInfo = {
  __typename?: 'CartEntryLineItemPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type CartProductLineItem = Node & {
  __typename?: 'CartProductLineItem';
  id: Scalars['ID'];
  cart: Cart;
  quantity: Scalars['Int'];
  variantId: Scalars['String'];
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type CartProductLineItemConnection = {
  __typename?: 'CartProductLineItemConnection';
  edges?: Maybe<Array<Maybe<CartProductLineItemEdge>>>;
  pageInfo: CartProductLineItemPageInfo;
  totalCount: Scalars['Int'];
};

export type CartProductLineItemEdge = {
  __typename?: 'CartProductLineItemEdge';
  node?: Maybe<CartProductLineItem>;
  cursor: Scalars['String'];
};

export type CartProductLineItemPageInfo = {
  __typename?: 'CartProductLineItemPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ChallengeEntry = Node & {
  __typename?: 'ChallengeEntry';
  id: Scalars['ID'];
  profile?: Maybe<UserProfile>;
  target: ChallengeTarget;
  progress?: Maybe<ChallengeEntryProgressConnection>;
  year: Scalars['Int'];
  month: Scalars['Int'];
  withMedal: Scalars['Int'];
  personalisedMedal: Scalars['Boolean'];
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  sourceCartEntryLineItem?: Maybe<CartEntryLineItem>;
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  monthName: Scalars['String'];
  totalProgress: Scalars['String'];
  totalProgressWithMetric: Scalars['String'];
  targetValue: Scalars['Int'];
  forGuest: Scalars['Boolean'];
  totalProgressPercentage: Scalars['Int'];
  displayName: Scalars['String'];
  displayNameWithProfile: Scalars['String'];
  eomEmailTag: Scalars['String'];
  emailTags: Scalars['Iterable'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type ChallengeEntryProgressArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ChallengeEntryProgressFilter_Order>>>;
  exists?: Maybe<Array<Maybe<ChallengeEntryProgressFilter_Exists>>>;
  entry_uuid?: Maybe<Scalars['String']>;
  entry_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry_profile_uuid?: Maybe<Scalars['String']>;
  entry_profile_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ChallengeEntryConnection = {
  __typename?: 'ChallengeEntryConnection';
  edges?: Maybe<Array<Maybe<ChallengeEntryEdge>>>;
  pageInfo: ChallengeEntryPageInfo;
  totalCount: Scalars['Int'];
};

export type ChallengeEntryEdge = {
  __typename?: 'ChallengeEntryEdge';
  node?: Maybe<ChallengeEntry>;
  cursor: Scalars['String'];
};

export type ChallengeEntryFilter_Exists = {
  personalisedMedalTargetValue?: Maybe<Scalars['Boolean']>;
  completed?: Maybe<Scalars['Boolean']>;
  overrideChallengeTargetValue?: Maybe<Scalars['Boolean']>;
  closed?: Maybe<Scalars['Boolean']>;
  isForGuest?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type ChallengeEntryFilter_Order = {
  year?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  withMedal?: Maybe<Scalars['String']>;
  personalisedMedal?: Maybe<Scalars['String']>;
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  overrideChallengeTargetValue?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['String']>;
  isForGuest?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type ChallengeEntryOption = Node & {
  __typename?: 'ChallengeEntryOption';
  id: Scalars['ID'];
  normalMedalPricing: Scalars['Iterable'];
  personalisedMedalPricing: Scalars['Iterable'];
  personalisedMedalPricingDifference: Scalars['Iterable'];
  forChildren: Scalars['Boolean'];
};

export type ChallengeEntryOptionConnection = {
  __typename?: 'ChallengeEntryOptionConnection';
  edges?: Maybe<Array<Maybe<ChallengeEntryOptionEdge>>>;
  pageInfo: ChallengeEntryOptionPageInfo;
  totalCount: Scalars['Int'];
};

export type ChallengeEntryOptionEdge = {
  __typename?: 'ChallengeEntryOptionEdge';
  node?: Maybe<ChallengeEntryOption>;
  cursor: Scalars['String'];
};

export type ChallengeEntryOptionPageInfo = {
  __typename?: 'ChallengeEntryOptionPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ChallengeEntryPageInfo = {
  __typename?: 'ChallengeEntryPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ChallengeEntryProgress = Node & {
  __typename?: 'ChallengeEntryProgress';
  id: Scalars['ID'];
  entry: ChallengeEntry;
  progress: Scalars['String'];
  evidenceDate?: Maybe<Scalars['String']>;
  evidence?: Maybe<MediaObjectConnection>;
  discarded?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  progressString: Scalars['String'];
  status: Scalars['String'];
  evidenceDateString: Scalars['String'];
  fileCount: Scalars['Int'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type ChallengeEntryProgressEvidenceArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};

export type ChallengeEntryProgressConnection = {
  __typename?: 'ChallengeEntryProgressConnection';
  edges?: Maybe<Array<Maybe<ChallengeEntryProgressEdge>>>;
  pageInfo: ChallengeEntryProgressPageInfo;
  totalCount: Scalars['Int'];
};

export type ChallengeEntryProgressEdge = {
  __typename?: 'ChallengeEntryProgressEdge';
  node?: Maybe<ChallengeEntryProgress>;
  cursor: Scalars['String'];
};

export type ChallengeEntryProgressFilter_Exists = {
  discarded?: Maybe<Scalars['Boolean']>;
};

export type ChallengeEntryProgressFilter_Order = {
  progress?: Maybe<Scalars['String']>;
  evidenceDate?: Maybe<Scalars['String']>;
  discarded?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type ChallengeEntryProgressPageInfo = {
  __typename?: 'ChallengeEntryProgressPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ChallengeTarget = Node & {
  __typename?: 'ChallengeTarget';
  id: Scalars['ID'];
  type?: Maybe<ChallengeType>;
  value?: Maybe<Scalars['Float']>;
  metric?: Maybe<Scalars['String']>;
  onSale: Scalars['Boolean'];
  valuePeriod?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  displayName: Scalars['String'];
};

export type ChallengeTargetConnection = {
  __typename?: 'ChallengeTargetConnection';
  edges?: Maybe<Array<Maybe<ChallengeTargetEdge>>>;
  pageInfo: ChallengeTargetPageInfo;
  totalCount: Scalars['Int'];
};

export type ChallengeTargetEdge = {
  __typename?: 'ChallengeTargetEdge';
  node?: Maybe<ChallengeTarget>;
  cursor: Scalars['String'];
};

export type ChallengeTargetFilter_Order = {
  value?: Maybe<Scalars['String']>;
  metric?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['String']>;
  valuePeriod?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type ChallengeTargetPageInfo = {
  __typename?: 'ChallengeTargetPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ChallengeType = Node & {
  __typename?: 'ChallengeType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  imagePath: Scalars['String'];
  iconPath: Scalars['String'];
  skuPrefix?: Maybe<Scalars['String']>;
  isForChildren: Scalars['Boolean'];
  targets?: Maybe<ChallengeTargetConnection>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  imageFullPath: Scalars['String'];
  imageResizableFullPath: Scalars['String'];
  iconFullPath: Scalars['String'];
  iconFullPathWhite: Scalars['String'];
  forChildren: Scalars['Boolean'];
  displayName: Scalars['String'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  slug: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type ChallengeTypeTargetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ChallengeTargetFilter_Order>>>;
  type_uuid?: Maybe<Scalars['String']>;
  type_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_name?: Maybe<Scalars['String']>;
  type_name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ChallengeTypeConnection = {
  __typename?: 'ChallengeTypeConnection';
  edges?: Maybe<Array<Maybe<ChallengeTypeEdge>>>;
  pageInfo: ChallengeTypePageInfo;
  totalCount: Scalars['Int'];
};

export type ChallengeTypeEdge = {
  __typename?: 'ChallengeTypeEdge';
  node?: Maybe<ChallengeType>;
  cursor: Scalars['String'];
};

export type ChallengeTypeFilter_Order = {
  name?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  iconPath?: Maybe<Scalars['String']>;
  skuPrefix?: Maybe<Scalars['String']>;
  isForChildren?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type ChallengeTypePageInfo = {
  __typename?: 'ChallengeTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Country = Node & {
  __typename?: 'Country';
  id: Scalars['ID'];
  iso2: Scalars['String'];
  name: Scalars['String'];
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges?: Maybe<Array<Maybe<CountryEdge>>>;
  pageInfo: CountryPageInfo;
  totalCount: Scalars['Int'];
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  node?: Maybe<Country>;
  cursor: Scalars['String'];
};

export type CountryPageInfo = {
  __typename?: 'CountryPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Currency = Node & {
  __typename?: 'Currency';
  id: Scalars['ID'];
  iso: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
};

export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  edges?: Maybe<Array<Maybe<CurrencyEdge>>>;
  pageInfo: CurrencyPageInfo;
  totalCount: Scalars['Int'];
};

export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  node?: Maybe<Currency>;
  cursor: Scalars['String'];
};

export type CurrencyPageInfo = {
  __typename?: 'CurrencyPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type EmailInSystemCheck = Node & {
  __typename?: 'EmailInSystemCheck';
  id: Scalars['ID'];
  _id: Scalars['String'];
  email: Scalars['String'];
  isUser: Scalars['Boolean'];
};

export type EmailInSystemCheckConnection = {
  __typename?: 'EmailInSystemCheckConnection';
  edges?: Maybe<Array<Maybe<EmailInSystemCheckEdge>>>;
  pageInfo: EmailInSystemCheckPageInfo;
  totalCount: Scalars['Int'];
};

export type EmailInSystemCheckEdge = {
  __typename?: 'EmailInSystemCheckEdge';
  node?: Maybe<EmailInSystemCheck>;
  cursor: Scalars['String'];
};

export type EmailInSystemCheckPageInfo = {
  __typename?: 'EmailInSystemCheckPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Gender = Node & {
  __typename?: 'Gender';
  id: Scalars['ID'];
  name: Scalars['String'];
  uuid: Scalars['String'];
  created: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type GenderConnection = {
  __typename?: 'GenderConnection';
  edges?: Maybe<Array<Maybe<GenderEdge>>>;
  pageInfo: GenderPageInfo;
  totalCount: Scalars['Int'];
};

export type GenderEdge = {
  __typename?: 'GenderEdge';
  node?: Maybe<Gender>;
  cursor: Scalars['String'];
};

export type GenderFilter_Order = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type GenderPageInfo = {
  __typename?: 'GenderPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};


export type MediaObject = Node & {
  __typename?: 'MediaObject';
  id: Scalars['ID'];
  user: User;
  contentUrl?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  s3Region?: Maybe<Scalars['String']>;
  s3Bucket?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type MediaObjectConnection = {
  __typename?: 'MediaObjectConnection';
  edges?: Maybe<Array<Maybe<MediaObjectEdge>>>;
  pageInfo: MediaObjectPageInfo;
  totalCount: Scalars['Int'];
};

export type MediaObjectEdge = {
  __typename?: 'MediaObjectEdge';
  node?: Maybe<MediaObject>;
  cursor: Scalars['String'];
};

export type MediaObjectPageInfo = {
  __typename?: 'MediaObjectPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserProfile?: Maybe<CreateUserProfilePayload>;
  updateUserProfile?: Maybe<UpdateUserProfilePayload>;
  deleteUserProfile?: Maybe<DeleteUserProfilePayload>;
  createCartProductLineItem?: Maybe<CreateCartProductLineItemPayload>;
  updateCartProductLineItem?: Maybe<UpdateCartProductLineItemPayload>;
  deleteCartProductLineItem?: Maybe<DeleteCartProductLineItemPayload>;
  updateChallengeEntry?: Maybe<UpdateChallengeEntryPayload>;
  deleteChallengeEntry?: Maybe<DeleteChallengeEntryPayload>;
  createChallengeEntryProgress?: Maybe<CreateChallengeEntryProgressPayload>;
  updateChallengeEntryProgress?: Maybe<UpdateChallengeEntryProgressPayload>;
  deleteChallengeEntryProgress?: Maybe<DeleteChallengeEntryProgressPayload>;
  deleteProductImage?: Maybe<DeleteProductImagePayload>;
  updateProductImage?: Maybe<UpdateProductImagePayload>;
  createProductImage?: Maybe<CreateProductImagePayload>;
  deleteProductCollection?: Maybe<DeleteProductCollectionPayload>;
  updateProductCollection?: Maybe<UpdateProductCollectionPayload>;
  createProductCollection?: Maybe<CreateProductCollectionPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  createCartEntryLineItem?: Maybe<CreateCartEntryLineItemPayload>;
  updateCartEntryLineItem?: Maybe<UpdateCartEntryLineItemPayload>;
  deleteCartEntryLineItem?: Maybe<DeleteCartEntryLineItemPayload>;
  deleteAnnualPassPurchasablePrice?: Maybe<DeleteAnnualPassPurchasablePricePayload>;
  updateAnnualPassPurchasablePrice?: Maybe<UpdateAnnualPassPurchasablePricePayload>;
  createAnnualPassPurchasablePrice?: Maybe<CreateAnnualPassPurchasablePricePayload>;
  createCart?: Maybe<CreateCartPayload>;
  updateCart?: Maybe<UpdateCartPayload>;
  deleteCart?: Maybe<DeleteCartPayload>;
  uploadMediaObject?: Maybe<UploadMediaObjectPayload>;
  updateGender?: Maybe<UpdateGenderPayload>;
  updateUnauthChallengeEntry?: Maybe<UpdateUnauthChallengeEntryPayload>;
  createUserAddress?: Maybe<CreateUserAddressPayload>;
  updateUserAddress?: Maybe<UpdateUserAddressPayload>;
  createAnnualPassCart?: Maybe<CreateAnnualPassCartPayload>;
  updateAnnualPassCart?: Maybe<UpdateAnnualPassCartPayload>;
  deleteAnnualPassCart?: Maybe<DeleteAnnualPassCartPayload>;
};


export type MutationCreateUserProfileArgs = {
  input: CreateUserProfileInput;
};


export type MutationUpdateUserProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationDeleteUserProfileArgs = {
  input: DeleteUserProfileInput;
};


export type MutationCreateCartProductLineItemArgs = {
  input: CreateCartProductLineItemInput;
};


export type MutationUpdateCartProductLineItemArgs = {
  input: UpdateCartProductLineItemInput;
};


export type MutationDeleteCartProductLineItemArgs = {
  input: DeleteCartProductLineItemInput;
};


export type MutationUpdateChallengeEntryArgs = {
  input: UpdateChallengeEntryInput;
};


export type MutationDeleteChallengeEntryArgs = {
  input: DeleteChallengeEntryInput;
};


export type MutationCreateChallengeEntryProgressArgs = {
  input: CreateChallengeEntryProgressInput;
};


export type MutationUpdateChallengeEntryProgressArgs = {
  input: UpdateChallengeEntryProgressInput;
};


export type MutationDeleteChallengeEntryProgressArgs = {
  input: DeleteChallengeEntryProgressInput;
};


export type MutationDeleteProductImageArgs = {
  input: DeleteProductImageInput;
};


export type MutationUpdateProductImageArgs = {
  input: UpdateProductImageInput;
};


export type MutationCreateProductImageArgs = {
  input: CreateProductImageInput;
};


export type MutationDeleteProductCollectionArgs = {
  input: DeleteProductCollectionInput;
};


export type MutationUpdateProductCollectionArgs = {
  input: UpdateProductCollectionInput;
};


export type MutationCreateProductCollectionArgs = {
  input: CreateProductCollectionInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationCreateCartEntryLineItemArgs = {
  input: CreateCartEntryLineItemInput;
};


export type MutationUpdateCartEntryLineItemArgs = {
  input: UpdateCartEntryLineItemInput;
};


export type MutationDeleteCartEntryLineItemArgs = {
  input: DeleteCartEntryLineItemInput;
};


export type MutationDeleteAnnualPassPurchasablePriceArgs = {
  input: DeleteAnnualPassPurchasablePriceInput;
};


export type MutationUpdateAnnualPassPurchasablePriceArgs = {
  input: UpdateAnnualPassPurchasablePriceInput;
};


export type MutationCreateAnnualPassPurchasablePriceArgs = {
  input: CreateAnnualPassPurchasablePriceInput;
};


export type MutationCreateCartArgs = {
  input: CreateCartInput;
};


export type MutationUpdateCartArgs = {
  input: UpdateCartInput;
};


export type MutationDeleteCartArgs = {
  input: DeleteCartInput;
};


export type MutationUploadMediaObjectArgs = {
  input: UploadMediaObjectInput;
};


export type MutationUpdateGenderArgs = {
  input: UpdateGenderInput;
};


export type MutationUpdateUnauthChallengeEntryArgs = {
  input: UpdateUnauthChallengeEntryInput;
};


export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};


export type MutationUpdateUserAddressArgs = {
  input: UpdateUserAddressInput;
};


export type MutationCreateAnnualPassCartArgs = {
  input: CreateAnnualPassCartInput;
};


export type MutationUpdateAnnualPassCartArgs = {
  input: UpdateAnnualPassCartInput;
};


export type MutationDeleteAnnualPassCartArgs = {
  input: DeleteAnnualPassCartInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  tags: Scalars['Iterable'];
  variants: Scalars['Iterable'];
  options: Scalars['Iterable'];
  images: Scalars['Iterable'];
  collections: Scalars['Iterable'];
};

export type ProductCollection = Node & {
  __typename?: 'ProductCollection';
  id: Scalars['ID'];
};

export type ProductCollectionConnection = {
  __typename?: 'ProductCollectionConnection';
  edges?: Maybe<Array<Maybe<ProductCollectionEdge>>>;
  pageInfo: ProductCollectionPageInfo;
  totalCount: Scalars['Int'];
};

export type ProductCollectionEdge = {
  __typename?: 'ProductCollectionEdge';
  node?: Maybe<ProductCollection>;
  cursor: Scalars['String'];
};

export type ProductCollectionPageInfo = {
  __typename?: 'ProductCollectionPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  pageInfo: ProductPageInfo;
  totalCount: Scalars['Int'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  node?: Maybe<Product>;
  cursor: Scalars['String'];
};

export type ProductImage = Node & {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
};

export type ProductImageConnection = {
  __typename?: 'ProductImageConnection';
  edges?: Maybe<Array<Maybe<ProductImageEdge>>>;
  pageInfo: ProductImagePageInfo;
  totalCount: Scalars['Int'];
};

export type ProductImageEdge = {
  __typename?: 'ProductImageEdge';
  node?: Maybe<ProductImage>;
  cursor: Scalars['String'];
};

export type ProductImagePageInfo = {
  __typename?: 'ProductImagePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type ProductPageInfo = {
  __typename?: 'ProductPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type PublicConfig = Node & {
  __typename?: 'PublicConfig';
  id: Scalars['ID'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type PublicConfigConnection = {
  __typename?: 'PublicConfigConnection';
  edges?: Maybe<Array<Maybe<PublicConfigEdge>>>;
  pageInfo: PublicConfigPageInfo;
  totalCount: Scalars['Int'];
};

export type PublicConfigEdge = {
  __typename?: 'PublicConfigEdge';
  node?: Maybe<PublicConfig>;
  cursor: Scalars['String'];
};

export type PublicConfigPageInfo = {
  __typename?: 'PublicConfigPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  userProfile?: Maybe<UserProfile>;
  userProfiles?: Maybe<UserProfileConnection>;
  products?: Maybe<ProductConnection>;
  product?: Maybe<Product>;
  emailInSystemChecks?: Maybe<EmailInSystemCheckConnection>;
  cartEntryLineItemChallengeChecks?: Maybe<CartEntryLineItemChallengeCheckConnection>;
  cartProductLineItem?: Maybe<CartProductLineItem>;
  cartProductLineItems?: Maybe<CartProductLineItemConnection>;
  challengeEntry?: Maybe<ChallengeEntry>;
  challengeEntries?: Maybe<ChallengeEntryConnection>;
  challengeEntryProgress?: Maybe<ChallengeEntryProgress>;
  challengeEntryProgresses?: Maybe<ChallengeEntryProgressConnection>;
  challengeTarget?: Maybe<ChallengeTarget>;
  challengeTargets?: Maybe<ChallengeTargetConnection>;
  availableEntryMonths?: Maybe<AvailableEntryMonthConnection>;
  availableEntryMonth?: Maybe<AvailableEntryMonth>;
  productImage?: Maybe<ProductImage>;
  productImages?: Maybe<ProductImageConnection>;
  annualPass?: Maybe<AnnualPass>;
  annualPasses?: Maybe<AnnualPassConnection>;
  productCollection?: Maybe<ProductCollection>;
  productCollections?: Maybe<ProductCollectionConnection>;
  user?: Maybe<User>;
  users?: Maybe<UserConnection>;
  countries?: Maybe<CountryConnection>;
  country?: Maybe<Country>;
  challengeEntryOptions?: Maybe<ChallengeEntryOptionConnection>;
  challengeEntryOption?: Maybe<ChallengeEntryOption>;
  cartEntryLineItem?: Maybe<CartEntryLineItem>;
  annualPassPurchasablePrice?: Maybe<AnnualPassPurchasablePrice>;
  annualPassPurchasablePrices?: Maybe<AnnualPassPurchasablePriceConnection>;
  currencies?: Maybe<CurrencyConnection>;
  currency?: Maybe<Currency>;
  cart?: Maybe<Cart>;
  publicConfigs?: Maybe<PublicConfigConnection>;
  mediaObjects?: Maybe<MediaObjectConnection>;
  mediaObject?: Maybe<MediaObject>;
  challengeType?: Maybe<ChallengeType>;
  challengeTypes?: Maybe<ChallengeTypeConnection>;
  gender?: Maybe<Gender>;
  genders?: Maybe<GenderConnection>;
  annualPassPurchasables?: Maybe<AnnualPassPurchasableConnection>;
  unauthChallengeEntry?: Maybe<UnauthChallengeEntry>;
  unauthChallengeEntries?: Maybe<UnauthChallengeEntryConnection>;
  userAddress?: Maybe<UserAddress>;
  userAddresses?: Maybe<UserAddressConnection>;
  annualPassCart?: Maybe<AnnualPassCart>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfileArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfilesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<UserProfileFilter_Order>>>;
  name?: Maybe<Scalars['String']>;
  name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateOfBirth?: Maybe<Scalars['String']>;
  dateOfBirth_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  isOwnerProfile?: Maybe<Scalars['Boolean']>;
  isOwnerProfile_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isDefaultProfile?: Maybe<Scalars['Boolean']>;
  isDefaultProfile_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  MonthFilter_month?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryEmailInSystemChecksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  challenge?: Maybe<Scalars['String']>;
};


export type QueryCartEntryLineItemChallengeChecksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type QueryCartProductLineItemArgs = {
  id: Scalars['ID'];
};


export type QueryCartProductLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryChallengeEntryArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  withMedal?: Maybe<Scalars['Int']>;
  personalisedMedal?: Maybe<Scalars['Boolean']>;
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['String']>;
  isForGuest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
  exists?: Maybe<Array<Maybe<ChallengeEntryFilter_Exists>>>;
  order?: Maybe<Array<Maybe<ChallengeEntryFilter_Order>>>;
  year_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  month_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  withMedal_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  personalisedMedal_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  personalisedMedalTargetValue_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  completed_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  overrideChallengeTargetValue_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  closed_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  isForGuest_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  completedOrClosed?: Maybe<Scalars['Boolean']>;
};


export type QueryChallengeEntryProgressArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeEntryProgressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ChallengeEntryProgressFilter_Order>>>;
  exists?: Maybe<Array<Maybe<ChallengeEntryProgressFilter_Exists>>>;
  entry_uuid?: Maybe<Scalars['String']>;
  entry_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry_profile_uuid?: Maybe<Scalars['String']>;
  entry_profile_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryChallengeTargetArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeTargetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ChallengeTargetFilter_Order>>>;
  type_uuid?: Maybe<Scalars['String']>;
  type_uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_name?: Maybe<Scalars['String']>;
  type_name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAvailableEntryMonthsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryAvailableEntryMonthArgs = {
  id: Scalars['ID'];
};


export type QueryProductImageArgs = {
  id: Scalars['ID'];
};


export type QueryProductImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryAnnualPassArgs = {
  id: Scalars['ID'];
};


export type QueryAnnualPassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  year_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<Array<Maybe<AnnualPassFilter_Order>>>;
  isChild?: Maybe<Scalars['Boolean']>;
  isChild_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  annualPassCode?: Maybe<Scalars['String']>;
  annualPassCode_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  type_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProductCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryCountriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeEntryOptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryChallengeEntryOptionArgs = {
  id: Scalars['ID'];
};


export type QueryCartEntryLineItemArgs = {
  id: Scalars['ID'];
};


export type QueryAnnualPassPurchasablePriceArgs = {
  id: Scalars['ID'];
};


export type QueryAnnualPassPurchasablePricesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryCurrenciesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID'];
};


export type QueryCartArgs = {
  id: Scalars['ID'];
};


export type QueryPublicConfigsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};


export type QueryMediaObjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryMediaObjectArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeTypeArgs = {
  id: Scalars['ID'];
};


export type QueryChallengeTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  isForChildren?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Array<Maybe<ChallengeTypeFilter_Order>>>;
  name?: Maybe<Scalars['String']>;
  name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  imagePath?: Maybe<Scalars['String']>;
  imagePath_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  iconPath?: Maybe<Scalars['String']>;
  iconPath_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  skuPrefix?: Maybe<Scalars['String']>;
  skuPrefix_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  isForChildren_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryGenderArgs = {
  id: Scalars['ID'];
};


export type QueryGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<GenderFilter_Order>>>;
  name?: Maybe<Scalars['String']>;
  name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAnnualPassPurchasablesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryUnauthChallengeEntryArgs = {
  id: Scalars['ID'];
};


export type QueryUnauthChallengeEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  userUuid?: Maybe<Scalars['String']>;
};


export type QueryUserAddressArgs = {
  id: Scalars['ID'];
};


export type QueryUserAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Array<Maybe<UserAddressFilter_Order>>>;
  company?: Maybe<Scalars['String']>;
  company_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address1?: Maybe<Scalars['String']>;
  address1_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address2?: Maybe<Scalars['String']>;
  address2_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  city_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['String']>;
  province_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  zip?: Maybe<Scalars['String']>;
  zip_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  country_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  hash?: Maybe<Scalars['String']>;
  hash_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAnnualPassCartArgs = {
  id: Scalars['ID'];
};

export type UnauthChallengeEntry = Node & {
  __typename?: 'UnauthChallengeEntry';
  id: Scalars['ID'];
  userUuid: Scalars['String'];
  entryUuid: Scalars['String'];
  target: ChallengeTarget;
  year: Scalars['Int'];
  month: Scalars['Int'];
  withMedal: Scalars['Boolean'];
  personalisedMedal: Scalars['Boolean'];
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  sourceCartEntryLineItem?: Maybe<CartEntryLineItem>;
  totalProgress: Scalars['String'];
  targetValue: Scalars['Int'];
  totalProgressPercentage: Scalars['Int'];
  displayName: Scalars['String'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type UnauthChallengeEntryConnection = {
  __typename?: 'UnauthChallengeEntryConnection';
  edges?: Maybe<Array<Maybe<UnauthChallengeEntryEdge>>>;
  pageInfo: UnauthChallengeEntryPageInfo;
  totalCount: Scalars['Int'];
};

export type UnauthChallengeEntryEdge = {
  __typename?: 'UnauthChallengeEntryEdge';
  node?: Maybe<UnauthChallengeEntry>;
  cursor: Scalars['String'];
};

export type UnauthChallengeEntryPageInfo = {
  __typename?: 'UnauthChallengeEntryPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};


export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  roles: Scalars['Iterable'];
  profiles?: Maybe<UserProfileConnection>;
  addresses?: Maybe<UserAddressConnection>;
  annualPasses?: Maybe<AnnualPassConnection>;
  tosAccepted?: Maybe<Scalars['String']>;
  currencyPreference?: Maybe<Scalars['String']>;
  countryIso?: Maybe<Scalars['String']>;
  startedAsGuest?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  ownerProfile?: Maybe<UserProfile>;
  requirements: Scalars['Iterable'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type UserProfilesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<UserProfileFilter_Order>>>;
  name?: Maybe<Scalars['String']>;
  name_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateOfBirth?: Maybe<Scalars['String']>;
  dateOfBirth_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  isOwnerProfile?: Maybe<Scalars['Boolean']>;
  isOwnerProfile_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isDefaultProfile?: Maybe<Scalars['Boolean']>;
  isDefaultProfile_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Array<Maybe<UserAddressFilter_Order>>>;
  company?: Maybe<Scalars['String']>;
  company_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address1?: Maybe<Scalars['String']>;
  address1_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address2?: Maybe<Scalars['String']>;
  address2_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  city_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['String']>;
  province_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  zip?: Maybe<Scalars['String']>;
  zip_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  country_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  hash?: Maybe<Scalars['String']>;
  hash_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserAnnualPassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  year_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<Array<Maybe<AnnualPassFilter_Order>>>;
  isChild?: Maybe<Scalars['Boolean']>;
  isChild_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  annualPassCode?: Maybe<Scalars['String']>;
  annualPassCode_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  type_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserAddress = Node & {
  __typename?: 'UserAddress';
  id: Scalars['ID'];
  user: User;
  profile?: Maybe<UserProfile>;
  company?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  edges?: Maybe<Array<Maybe<UserAddressEdge>>>;
  pageInfo: UserAddressPageInfo;
  totalCount: Scalars['Int'];
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  node?: Maybe<UserAddress>;
  cursor: Scalars['String'];
};

export type UserAddressFilter_Order = {
  company?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type UserAddressPageInfo = {
  __typename?: 'UserAddressPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: UserPageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  node?: Maybe<User>;
  cursor: Scalars['String'];
};

export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type UserProfile = Node & {
  __typename?: 'UserProfile';
  id: Scalars['ID'];
  user: User;
  name?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  isOwnerProfile: Scalars['Boolean'];
  isDefaultProfile: Scalars['Boolean'];
  challengeEntries?: Maybe<ChallengeEntryConnection>;
  cartEntryLineItems?: Maybe<CartEntryLineItemConnection>;
  addresses?: Maybe<UserAddressConnection>;
  gender?: Maybe<Gender>;
  annualPasses?: Maybe<AnnualPassConnection>;
  uuid: Scalars['String'];
  created: Scalars['String'];
  displayName: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  initials: Scalars['String'];
  ageInYears: Scalars['Int'];
  isChild: Scalars['Boolean'];
  exportData: Scalars['Iterable'];
  exportDataWithRelations: Scalars['Iterable'];
  requirements: Scalars['Iterable'];
  uuidString: Scalars['String'];
  createdString: Scalars['String'];
};


export type UserProfileChallengeEntriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  withMedal?: Maybe<Scalars['Int']>;
  personalisedMedal?: Maybe<Scalars['Boolean']>;
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['String']>;
  isForGuest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
  exists?: Maybe<Array<Maybe<ChallengeEntryFilter_Exists>>>;
  order?: Maybe<Array<Maybe<ChallengeEntryFilter_Order>>>;
  year_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  month_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  withMedal_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  personalisedMedal_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  personalisedMedalTargetValue_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  completed_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  overrideChallengeTargetValue_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  closed_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  isForGuest_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  completedOrClosed?: Maybe<Scalars['Boolean']>;
};


export type UserProfileCartEntryLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type UserProfileAddressesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Array<Maybe<UserAddressFilter_Order>>>;
  company?: Maybe<Scalars['String']>;
  company_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address1?: Maybe<Scalars['String']>;
  address1_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  address2?: Maybe<Scalars['String']>;
  address2_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  city_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['String']>;
  province_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  zip?: Maybe<Scalars['String']>;
  zip_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  country_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  hash?: Maybe<Scalars['String']>;
  hash_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  archived_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserProfileAnnualPassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  year_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  id_list?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<Array<Maybe<AnnualPassFilter_Order>>>;
  isChild?: Maybe<Scalars['Boolean']>;
  isChild_list?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  annualPassCode?: Maybe<Scalars['String']>;
  annualPassCode_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  type_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  uuid?: Maybe<Scalars['String']>;
  uuid_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  created?: Maybe<Scalars['String']>;
  created_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  deleted?: Maybe<Scalars['String']>;
  deleted_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserProfileConnection = {
  __typename?: 'UserProfileConnection';
  edges?: Maybe<Array<Maybe<UserProfileEdge>>>;
  pageInfo: UserProfilePageInfo;
  totalCount: Scalars['Int'];
};

export type UserProfileEdge = {
  __typename?: 'UserProfileEdge';
  node?: Maybe<UserProfile>;
  cursor: Scalars['String'];
};

export type UserProfileFilter_Order = {
  name?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  isOwnerProfile?: Maybe<Scalars['String']>;
  isDefaultProfile?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['String']>;
};

export type UserProfilePageInfo = {
  __typename?: 'UserProfilePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type CreateAnnualPassCartInput = {
  user: Scalars['String'];
  purchasablePriceIds: Scalars['Iterable'];
  address?: Maybe<Scalars['String']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAnnualPassCartPayload = {
  __typename?: 'createAnnualPassCartPayload';
  annualPassCart?: Maybe<AnnualPassCart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAnnualPassPurchasablePriceInput = {
  _id: Scalars['String'];
  region: Scalars['String'];
  basePrice: Scalars['Float'];
  discountValue: Scalars['Float'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAnnualPassPurchasablePricePayload = {
  __typename?: 'createAnnualPassPurchasablePricePayload';
  annualPassPurchasablePrice?: Maybe<AnnualPassPurchasablePrice>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartEntryLineItemInput = {
  cart: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  challengeTarget: Scalars['String'];
  year: Scalars['Int'];
  month: Scalars['Int'];
  withMedal: Scalars['Int'];
  personalisedMedal: Scalars['Int'];
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  differentAddress?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  annualPass?: Maybe<Scalars['String']>;
  personalisedMedalTargetValue?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartEntryLineItemPayload = {
  __typename?: 'createCartEntryLineItemPayload';
  cartEntryLineItem?: Maybe<CartEntryLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartInput = {
  entryLineItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  productLineItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartPayload = {
  __typename?: 'createCartPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartProductLineItemInput = {
  cart: Scalars['String'];
  quantity: Scalars['Int'];
  variantId: Scalars['String'];
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCartProductLineItemPayload = {
  __typename?: 'createCartProductLineItemPayload';
  cartProductLineItem?: Maybe<CartProductLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateChallengeEntryProgressInput = {
  entry: Scalars['String'];
  progress: Scalars['String'];
  evidenceDate?: Maybe<Scalars['String']>;
  evidence?: Maybe<Array<Maybe<Scalars['String']>>>;
  discarded?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateChallengeEntryProgressPayload = {
  __typename?: 'createChallengeEntryProgressPayload';
  challengeEntryProgress?: Maybe<ChallengeEntryProgress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductCollectionInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductCollectionPayload = {
  __typename?: 'createProductCollectionPayload';
  productCollection?: Maybe<ProductCollection>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductImageInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductImagePayload = {
  __typename?: 'createProductImagePayload';
  productImage?: Maybe<ProductImage>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserAddressInput = {
  user: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserAddressPayload = {
  __typename?: 'createUserAddressPayload';
  userAddress?: Maybe<UserAddress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserProfileInput = {
  user: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  isOwnerProfile: Scalars['Boolean'];
  isDefaultProfile: Scalars['Boolean'];
  challengeEntries?: Maybe<Array<Maybe<Scalars['String']>>>;
  addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  annualPasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUserProfilePayload = {
  __typename?: 'createUserProfilePayload';
  userProfile?: Maybe<UserProfile>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAnnualPassCartInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAnnualPassCartPayload = {
  __typename?: 'deleteAnnualPassCartPayload';
  annualPassCart?: Maybe<AnnualPassCart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAnnualPassPurchasablePriceInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAnnualPassPurchasablePricePayload = {
  __typename?: 'deleteAnnualPassPurchasablePricePayload';
  annualPassPurchasablePrice?: Maybe<AnnualPassPurchasablePrice>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartEntryLineItemInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartEntryLineItemPayload = {
  __typename?: 'deleteCartEntryLineItemPayload';
  cartEntryLineItem?: Maybe<CartEntryLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartPayload = {
  __typename?: 'deleteCartPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartProductLineItemInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteCartProductLineItemPayload = {
  __typename?: 'deleteCartProductLineItemPayload';
  cartProductLineItem?: Maybe<CartProductLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteChallengeEntryInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteChallengeEntryPayload = {
  __typename?: 'deleteChallengeEntryPayload';
  challengeEntry?: Maybe<ChallengeEntry>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteChallengeEntryProgressInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteChallengeEntryProgressPayload = {
  __typename?: 'deleteChallengeEntryProgressPayload';
  challengeEntryProgress?: Maybe<ChallengeEntryProgress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProductCollectionInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProductCollectionPayload = {
  __typename?: 'deleteProductCollectionPayload';
  productCollection?: Maybe<ProductCollection>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProductImageInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteProductImagePayload = {
  __typename?: 'deleteProductImagePayload';
  productImage?: Maybe<ProductImage>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteUserProfileInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteUserProfilePayload = {
  __typename?: 'deleteUserProfilePayload';
  userProfile?: Maybe<UserProfile>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAnnualPassCartInput = {
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
  purchasablePriceIds?: Maybe<Scalars['Iterable']>;
  address?: Maybe<Scalars['String']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAnnualPassCartPayload = {
  __typename?: 'updateAnnualPassCartPayload';
  annualPassCart?: Maybe<AnnualPassCart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAnnualPassPurchasablePriceInput = {
  id: Scalars['ID'];
  _id?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  basePrice?: Maybe<Scalars['Float']>;
  discountValue?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAnnualPassPurchasablePricePayload = {
  __typename?: 'updateAnnualPassPurchasablePricePayload';
  annualPassPurchasablePrice?: Maybe<AnnualPassPurchasablePrice>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartEntryLineItemInput = {
  id: Scalars['ID'];
  cart?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  challengeTarget?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  withMedal?: Maybe<Scalars['Int']>;
  personalisedMedal?: Maybe<Scalars['Int']>;
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  differentAddress?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  annualPass?: Maybe<Scalars['String']>;
  personalisedMedalTargetValue?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartEntryLineItemPayload = {
  __typename?: 'updateCartEntryLineItemPayload';
  cartEntryLineItem?: Maybe<CartEntryLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartInput = {
  id: Scalars['ID'];
  entryLineItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  productLineItems?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  presentmentCurrencyCode?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartPayload = {
  __typename?: 'updateCartPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartProductLineItemInput = {
  id: Scalars['ID'];
  cart?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['String']>;
  syncWithShopify?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCartProductLineItemPayload = {
  __typename?: 'updateCartProductLineItemPayload';
  cartProductLineItem?: Maybe<CartProductLineItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateChallengeEntryInput = {
  id: Scalars['ID'];
  target?: Maybe<Scalars['String']>;
  personalisedMedalTargetValue?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  overrideChallengeTargetValue?: Maybe<Scalars['Int']>;
  orderLineItem?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['String']>;
  isForGuest?: Maybe<Scalars['Boolean']>;
  annualPassUsage?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateChallengeEntryPayload = {
  __typename?: 'updateChallengeEntryPayload';
  challengeEntry?: Maybe<ChallengeEntry>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateChallengeEntryProgressInput = {
  id: Scalars['ID'];
  entry?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['String']>;
  evidenceDate?: Maybe<Scalars['String']>;
  evidence?: Maybe<Array<Maybe<Scalars['String']>>>;
  discarded?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateChallengeEntryProgressPayload = {
  __typename?: 'updateChallengeEntryProgressPayload';
  challengeEntryProgress?: Maybe<ChallengeEntryProgress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateGenderInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateGenderPayload = {
  __typename?: 'updateGenderPayload';
  gender?: Maybe<Gender>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductCollectionInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductCollectionPayload = {
  __typename?: 'updateProductCollectionPayload';
  productCollection?: Maybe<ProductCollection>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductImageInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductImagePayload = {
  __typename?: 'updateProductImagePayload';
  productImage?: Maybe<ProductImage>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUnauthChallengeEntryInput = {
  id: Scalars['ID'];
  target?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['String']>;
  fromFullEntry?: Maybe<Scalars['String']>;
  sourceCartEntryLineItem?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUnauthChallengeEntryPayload = {
  __typename?: 'updateUnauthChallengeEntryPayload';
  unauthChallengeEntry?: Maybe<UnauthChallengeEntry>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserAddressInput = {
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserAddressPayload = {
  __typename?: 'updateUserAddressPayload';
  userAddress?: Maybe<UserAddress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  profiles?: Maybe<Array<Maybe<Scalars['String']>>>;
  addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  annualPasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  tosAccepted?: Maybe<Scalars['String']>;
  currencyPreference?: Maybe<Scalars['String']>;
  countryIso?: Maybe<Scalars['String']>;
  startedAsGuest?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  isOwnerProfile?: Maybe<Scalars['Boolean']>;
  isDefaultProfile?: Maybe<Scalars['Boolean']>;
  challengeEntries?: Maybe<Array<Maybe<Scalars['String']>>>;
  addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  annualPasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserProfilePayload = {
  __typename?: 'updateUserProfilePayload';
  userProfile?: Maybe<UserProfile>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UploadMediaObjectInput = {
  file: Scalars['Upload'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UploadMediaObjectPayload = {
  __typename?: 'uploadMediaObjectPayload';
  mediaObject?: Maybe<MediaObject>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptTandCMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type AcceptTandCMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'tosAccepted'>
    )> }
  )> }
);

export type AddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AddressesQuery = (
  { __typename?: 'Query' }
  & { userAddresses?: Maybe<(
    { __typename?: 'UserAddressConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserAddressEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserAddress' }
        & Pick<UserAddress, 'id' | 'address1' | 'address2' | 'city' | 'province' | 'zip' | 'country' | 'archived'>
      )> }
    )>>> }
  )> }
);

export type AllProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProfilesQuery = (
  { __typename?: 'Query' }
  & { userProfiles?: Maybe<(
    { __typename?: 'UserProfileConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserProfileEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'id' | 'initials' | 'isChild' | 'name' | 'dateOfBirth'>
      )> }
    )>>> }
  )> }
);

export type AnnualPassPurchasablesQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnualPassPurchasablesQuery = (
  { __typename?: 'Query' }
  & { annualPassPurchasables?: Maybe<(
    { __typename?: 'AnnualPassPurchasableConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'AnnualPassPurchasableEdge' }
      & { node?: Maybe<(
        { __typename?: 'AnnualPassPurchasable' }
        & Pick<AnnualPassPurchasable, 'year' | 'child' | 'prices'>
        & { profile: (
          { __typename?: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'name' | 'initials'>
        ) }
      )> }
    )>>> }
  )> }
);

export type AnnualPassesQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnualPassesQuery = (
  { __typename?: 'Query' }
  & { annualPasses?: Maybe<(
    { __typename?: 'AnnualPassConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'AnnualPassEdge' }
      & { node?: Maybe<(
        { __typename?: 'AnnualPass' }
        & Pick<AnnualPass, 'id' | 'year' | 'isChild' | 'created'>
      )> }
    )>>> }
  )> }
);

export type AvailableEntryMonthsQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableEntryMonthsQuery = (
  { __typename?: 'Query' }
  & { availableEntryMonths?: Maybe<(
    { __typename?: 'AvailableEntryMonthConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'AvailableEntryMonthEdge' }
      & { node?: Maybe<(
        { __typename?: 'AvailableEntryMonth' }
        & Pick<AvailableEntryMonth, 'year' | 'month' | 'default' | 'lateEntry' | 'monthName' | 'displayName'>
      )> }
    )>>> }
  )> }
);

export type CartByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CartByIdQuery = (
  { __typename?: 'Query' }
  & { cart?: Maybe<(
    { __typename?: 'Cart' }
    & Pick<Cart, 'id' | 'syncWithShopify' | 'checkoutUrl' | 'priceBreakdown'>
    & { productLineItems?: Maybe<(
      { __typename?: 'CartProductLineItemConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'CartProductLineItemEdge' }
        & { node?: Maybe<(
          { __typename?: 'CartProductLineItem' }
          & Pick<CartProductLineItem, 'id' | 'quantity' | 'variantId'>
        )> }
      )>>> }
    )>, address?: Maybe<(
      { __typename?: 'UserAddress' }
      & Pick<UserAddress, 'address1' | 'address2' | 'city' | 'province' | 'zip' | 'country'>
    )>, entryLineItems?: Maybe<(
      { __typename?: 'CartEntryLineItemConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'CartEntryLineItemEdge' }
        & { node?: Maybe<(
          { __typename?: 'CartEntryLineItem' }
          & Pick<CartEntryLineItem, 'id' | 'personalisedMedal' | 'year' | 'month'>
          & { profile?: Maybe<(
            { __typename?: 'UserProfile' }
            & Pick<UserProfile, 'id' | 'initials'>
          )>, challengeTarget: (
            { __typename?: 'ChallengeTarget' }
            & Pick<ChallengeTarget, 'id' | 'displayName'>
            & { type?: Maybe<(
              { __typename?: 'ChallengeType' }
              & Pick<ChallengeType, 'name' | 'iconFullPath' | 'iconFullPathWhite'>
            )> }
          ) }
        )> }
      )>>> }
    )> }
  )> }
);

export type ChallengeByIdForCompletionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ChallengeByIdForCompletionQuery = (
  { __typename?: 'Query' }
  & { challengeEntry?: Maybe<(
    { __typename?: 'ChallengeEntry' }
    & Pick<ChallengeEntry, 'personalisedMedal' | 'personalisedMedalTargetValue' | 'completed' | 'month' | 'year' | 'targetValue' | 'totalProgress' | 'totalProgressPercentage'>
    & { target: (
      { __typename?: 'ChallengeTarget' }
      & Pick<ChallengeTarget, 'value' | 'metric' | 'displayName'>
      & { type?: Maybe<(
        { __typename?: 'ChallengeType' }
        & Pick<ChallengeType, 'name' | 'iconFullPath' | 'iconFullPathWhite'>
      )> }
    ) }
  )> }
);

export type ChallengeByIdForEditingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ChallengeByIdForEditingQuery = (
  { __typename?: 'Query' }
  & { challengeEntry?: Maybe<(
    { __typename?: 'ChallengeEntry' }
    & Pick<ChallengeEntry, 'id' | 'personalisedMedal' | 'personalisedMedalTargetValue' | 'completed' | 'year' | 'totalProgress' | 'totalProgressPercentage'>
    & { target: (
      { __typename?: 'ChallengeTarget' }
      & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
      & { type?: Maybe<(
        { __typename?: 'ChallengeType' }
        & Pick<ChallengeType, 'name' | 'iconFullPath' | 'iconFullPathWhite'>
        & { targets?: Maybe<(
          { __typename?: 'ChallengeTargetConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'ChallengeTargetEdge' }
            & { node?: Maybe<(
              { __typename?: 'ChallengeTarget' }
              & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
            )> }
          )>>> }
        )> }
      )> }
    ) }
  )> }
);

export type ChallengeEntriesByMonthAndYearQueryVariables = Exact<{
  month: Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>;
  year: Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['Boolean']>;
}>;


export type ChallengeEntriesByMonthAndYearQuery = (
  { __typename?: 'Query' }
  & { challengeEntries?: Maybe<(
    { __typename?: 'ChallengeEntryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntry' }
        & Pick<ChallengeEntry, 'id' | 'year' | 'month' | 'closed' | 'completed' | 'targetValue' | 'totalProgress' | 'totalProgressPercentage' | 'personalisedMedal'>
        & { profile?: Maybe<(
          { __typename?: 'UserProfile' }
          & Pick<UserProfile, 'id'>
        )>, target: (
          { __typename?: 'ChallengeTarget' }
          & Pick<ChallengeTarget, 'value' | 'displayName'>
          & { type?: Maybe<(
            { __typename?: 'ChallengeType' }
            & Pick<ChallengeType, 'iconFullPath' | 'iconFullPathWhite' | 'name'>
          )> }
        ) }
      )> }
    )>>> }
  )> }
);

export type ChallengeEntriesByProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ChallengeEntriesByProfileQuery = (
  { __typename?: 'Query' }
  & { userProfiles?: Maybe<(
    { __typename?: 'UserProfileConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserProfileEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'id' | 'name' | 'displayName' | 'initials' | 'isOwnerProfile'>
        & { challengeEntries?: Maybe<(
          { __typename?: 'ChallengeEntryConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'ChallengeEntryEdge' }
            & { node?: Maybe<(
              { __typename?: 'ChallengeEntry' }
              & Pick<ChallengeEntry, 'id' | 'year' | 'month' | 'targetValue' | 'totalProgress' | 'totalProgressPercentage'>
              & { target: (
                { __typename?: 'ChallengeTarget' }
                & Pick<ChallengeTarget, 'value' | 'displayName'>
                & { type?: Maybe<(
                  { __typename?: 'ChallengeType' }
                  & Pick<ChallengeType, 'iconFullPath' | 'iconFullPathWhite' | 'name'>
                )> }
              ) }
            )> }
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type ChallengeEntryIsProcessedQueryVariables = Exact<{ [key: string]: never; }>;


export type ChallengeEntryIsProcessedQuery = (
  { __typename?: 'Query' }
  & { challengeEntries?: Maybe<(
    { __typename?: 'ChallengeEntryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntry' }
        & { sourceCartEntryLineItem?: Maybe<(
          { __typename?: 'CartEntryLineItem' }
          & Pick<CartEntryLineItem, 'id'>
        )> }
      )> }
    )>>> }
  )> }
);

export type GetChallengeTargetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetChallengeTargetQuery = (
  { __typename?: 'Query' }
  & { challengeTarget?: Maybe<(
    { __typename?: 'ChallengeTarget' }
    & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
  )> }
);

export type ChallengeTargetsByChallengeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ChallengeTargetsByChallengeQuery = (
  { __typename?: 'Query' }
  & { challengeType?: Maybe<(
    { __typename?: 'ChallengeType' }
    & Pick<ChallengeType, 'id' | 'name' | 'imageFullPath' | 'iconFullPath' | 'iconFullPathWhite'>
    & { targets?: Maybe<(
      { __typename?: 'ChallengeTargetConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'ChallengeTargetEdge' }
        & { node?: Maybe<(
          { __typename?: 'ChallengeTarget' }
          & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
        )> }
      )>>> }
    )> }
  )> }
);

export type ChallengesListQueryVariables = Exact<{
  forChildren: Scalars['Boolean'];
}>;


export type ChallengesListQuery = (
  { __typename?: 'Query' }
  & { challengeTypes?: Maybe<(
    { __typename?: 'ChallengeTypeConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeType' }
        & Pick<ChallengeType, 'id' | 'isForChildren' | 'name' | 'imageFullPath' | 'iconFullPath' | 'iconFullPathWhite'>
        & { targets?: Maybe<(
          { __typename?: 'ChallengeTargetConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'ChallengeTargetEdge' }
            & { node?: Maybe<(
              { __typename?: 'ChallengeTarget' }
              & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
            )> }
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type CompleteChallengeMutationVariables = Exact<{
  challenge_id: Scalars['ID'];
  completed?: Maybe<Scalars['String']>;
  closed?: Maybe<Scalars['String']>;
  engravingValue?: Maybe<Scalars['String']>;
}>;


export type CompleteChallengeMutation = (
  { __typename?: 'Mutation' }
  & { updateChallengeEntry?: Maybe<(
    { __typename?: 'updateChallengeEntryPayload' }
    & { challengeEntry?: Maybe<(
      { __typename?: 'ChallengeEntry' }
      & Pick<ChallengeEntry, 'withMedal' | 'personalisedMedal' | 'personalisedMedalTargetValue' | 'year' | 'month'>
    )> }
  )> }
);

export type CompletedChallengesQueryVariables = Exact<{
  month: Scalars['Int'];
  year: Scalars['Int'];
}>;


export type CompletedChallengesQuery = (
  { __typename?: 'Query' }
  & { challengeEntries?: Maybe<(
    { __typename?: 'ChallengeEntryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntry' }
        & Pick<ChallengeEntry, 'id' | 'year' | 'month' | 'closed' | 'completed' | 'targetValue' | 'totalProgress' | 'totalProgressPercentage' | 'personalisedMedal'>
        & { target: (
          { __typename?: 'ChallengeTarget' }
          & Pick<ChallengeTarget, 'value' | 'displayName'>
          & { type?: Maybe<(
            { __typename?: 'ChallengeType' }
            & Pick<ChallengeType, 'iconFullPath' | 'iconFullPathWhite' | 'name'>
          )> }
        ) }
      )> }
    )>>> }
  )> }
);

export type CountriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesListQuery = (
  { __typename?: 'Query' }
  & { countries?: Maybe<(
    { __typename?: 'CountryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'CountryEdge' }
      & { node?: Maybe<(
        { __typename?: 'Country' }
        & Pick<Country, 'iso2' | 'name'>
      )> }
    )>>> }
  )> }
);

export type CreateAddressMutationVariables = Exact<{
  input: CreateUserAddressInput;
}>;


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { createUserAddress?: Maybe<(
    { __typename?: 'createUserAddressPayload' }
    & { userAddress?: Maybe<(
      { __typename?: 'UserAddress' }
      & Pick<UserAddress, 'id' | 'company' | 'address1' | 'address2' | 'city' | 'province' | 'zip' | 'country' | 'phone'>
    )> }
  )> }
);

export type CreateAnnualPassCartMutationVariables = Exact<{
  input: CreateAnnualPassCartInput;
}>;


export type CreateAnnualPassCartMutation = (
  { __typename?: 'Mutation' }
  & { createAnnualPassCart?: Maybe<(
    { __typename?: 'createAnnualPassCartPayload' }
    & { annualPassCart?: Maybe<(
      { __typename?: 'AnnualPassCart' }
      & Pick<AnnualPassCart, 'id' | 'checkoutUrl' | 'priceBreakdown' | 'syncWithShopify'>
    )> }
  )> }
);

export type CreateCartMutationVariables = Exact<{
  input: CreateCartInput;
}>;


export type CreateCartMutation = (
  { __typename?: 'Mutation' }
  & { createCart?: Maybe<(
    { __typename?: 'createCartPayload' }
    & { cart?: Maybe<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'id'>
      & { entryLineItems?: Maybe<(
        { __typename?: 'CartEntryLineItemConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'CartEntryLineItemEdge' }
          & { node?: Maybe<(
            { __typename?: 'CartEntryLineItem' }
            & Pick<CartEntryLineItem, 'id' | 'personalisedMedal' | 'withMedal' | 'personalisedMedalTargetValue' | 'yearMonthString'>
          )> }
        )>>> }
      )>, productLineItems?: Maybe<(
        { __typename?: 'CartProductLineItemConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'CartProductLineItemEdge' }
          & { node?: Maybe<(
            { __typename?: 'CartProductLineItem' }
            & Pick<CartProductLineItem, 'id' | 'quantity' | 'variantId'>
          )> }
        )>>> }
      )> }
    )> }
  )> }
);

export type CreateCartEntryLineItemMutationVariables = Exact<{
  input: CreateCartEntryLineItemInput;
}>;


export type CreateCartEntryLineItemMutation = (
  { __typename?: 'Mutation' }
  & { createCartEntryLineItem?: Maybe<(
    { __typename?: 'createCartEntryLineItemPayload' }
    & { cartEntryLineItem?: Maybe<(
      { __typename?: 'CartEntryLineItem' }
      & Pick<CartEntryLineItem, 'id' | 'year' | 'month' | 'withMedal' | 'personalisedMedal' | 'personalisedMedalTargetValue' | 'dateOfBirth'>
      & { profile?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'id'>
      )>, challengeTarget: (
        { __typename?: 'ChallengeTarget' }
        & Pick<ChallengeTarget, 'id'>
      ) }
    )> }
  )> }
);

export type CreateCartProductLineItemMutationVariables = Exact<{
  input: CreateCartProductLineItemInput;
}>;


export type CreateCartProductLineItemMutation = (
  { __typename?: 'Mutation' }
  & { createCartProductLineItem?: Maybe<(
    { __typename?: 'createCartProductLineItemPayload' }
    & { cartProductLineItem?: Maybe<(
      { __typename?: 'CartProductLineItem' }
      & Pick<CartProductLineItem, 'quantity' | 'variantId'>
      & { cart: (
        { __typename?: 'Cart' }
        & Pick<Cart, 'id'>
      ) }
    )> }
  )> }
);

export type CreateChallengeEntryProgressMutationVariables = Exact<{
  input: CreateChallengeEntryProgressInput;
}>;


export type CreateChallengeEntryProgressMutation = (
  { __typename?: 'Mutation' }
  & { createChallengeEntryProgress?: Maybe<(
    { __typename?: 'createChallengeEntryProgressPayload' }
    & { challengeEntryProgress?: Maybe<(
      { __typename?: 'ChallengeEntryProgress' }
      & Pick<ChallengeEntryProgress, 'id' | 'progress' | 'evidenceDate' | 'progressString'>
      & { entry: (
        { __typename?: 'ChallengeEntry' }
        & Pick<ChallengeEntry, 'id' | 'completed' | 'displayName'>
      ), evidence?: Maybe<(
        { __typename?: 'MediaObjectConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'MediaObjectEdge' }
          & { node?: Maybe<(
            { __typename?: 'MediaObject' }
            & Pick<MediaObject, 'id' | 'contentUrl' | 'created'>
          )> }
        )>>> }
      )> }
    )> }
  )> }
);

export type CreateCustomTargetMutationVariables = Exact<{
  entryId: Scalars['ID'];
  targetValue: Scalars['Int'];
}>;


export type CreateCustomTargetMutation = (
  { __typename?: 'Mutation' }
  & { updateChallengeEntry?: Maybe<(
    { __typename?: 'updateChallengeEntryPayload' }
    & { challengeEntry?: Maybe<(
      { __typename?: 'ChallengeEntry' }
      & Pick<ChallengeEntry, 'id' | 'overrideChallengeTargetValue'>
    )> }
  )> }
);

export type CreateProfileMutationVariables = Exact<{
  user: Scalars['String'];
  name: Scalars['String'];
  dateOfBirth: Scalars['String'];
}>;


export type CreateProfileMutation = (
  { __typename?: 'Mutation' }
  & { createUserProfile?: Maybe<(
    { __typename?: 'createUserProfilePayload' }
    & { userProfile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'initials'>
    )> }
  )> }
);

export type CreateUserAddressMutationVariables = Exact<{
  input: CreateUserAddressInput;
}>;


export type CreateUserAddressMutation = (
  { __typename?: 'Mutation' }
  & { createUserAddress?: Maybe<(
    { __typename?: 'createUserAddressPayload' }
    & { userAddress?: Maybe<(
      { __typename?: 'UserAddress' }
      & Pick<UserAddress, 'id' | 'company' | 'address1' | 'address2' | 'city' | 'province' | 'zip' | 'country' | 'phone'>
    )> }
  )> }
);

export type CurrentChallengeMonthsQueryVariables = Exact<{
  years: Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['Boolean']>;
}>;


export type CurrentChallengeMonthsQuery = (
  { __typename?: 'Query' }
  & { challengeEntries?: Maybe<(
    { __typename?: 'ChallengeEntryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntry' }
        & Pick<ChallengeEntry, 'month' | 'year'>
      )> }
    )>>> }
  )> }
);

export type CurrentChallengesQueryVariables = Exact<{
  closed: Scalars['Boolean'];
}>;


export type CurrentChallengesQuery = (
  { __typename?: 'Query' }
  & { userProfiles?: Maybe<(
    { __typename?: 'UserProfileConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserProfileEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'id' | 'name' | 'displayName' | 'initials'>
        & { challengeEntries?: Maybe<(
          { __typename?: 'ChallengeEntryConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'ChallengeEntryEdge' }
            & { node?: Maybe<(
              { __typename?: 'ChallengeEntry' }
              & Pick<ChallengeEntry, 'id' | 'year' | 'month' | 'closed' | 'completed' | 'targetValue' | 'totalProgress' | 'totalProgressPercentage' | 'personalisedMedal'>
              & { profile?: Maybe<(
                { __typename?: 'UserProfile' }
                & Pick<UserProfile, 'id'>
              )>, target: (
                { __typename?: 'ChallengeTarget' }
                & Pick<ChallengeTarget, 'value' | 'displayName'>
                & { type?: Maybe<(
                  { __typename?: 'ChallengeType' }
                  & Pick<ChallengeType, 'iconFullPath' | 'iconFullPathWhite' | 'name'>
                )> }
              ) }
            )> }
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'UserConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserEdge' }
      & { node?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'requirements' | 'tosAccepted' | 'currencyPreference' | 'countryIso'>
        & { addresses?: Maybe<(
          { __typename?: 'UserAddressConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'UserAddressEdge' }
            & { node?: Maybe<(
              { __typename?: 'UserAddress' }
              & Pick<UserAddress, 'address1' | 'address2' | 'city' | 'province' | 'phone' | 'zip' | 'country'>
            )> }
          )>>> }
        )>, ownerProfile?: Maybe<(
          { __typename?: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'name' | 'initials' | 'isDefaultProfile' | 'isOwnerProfile' | 'ageInYears' | 'dateOfBirth' | 'requirements' | 'isChild'>
          & { gender?: Maybe<(
            { __typename?: 'Gender' }
            & Pick<Gender, 'id' | 'name'>
          )>, addresses?: Maybe<(
            { __typename?: 'UserAddressConnection' }
            & { edges?: Maybe<Array<Maybe<(
              { __typename?: 'UserAddressEdge' }
              & { node?: Maybe<(
                { __typename?: 'UserAddress' }
                & Pick<UserAddress, 'address1' | 'address2' | 'city' | 'province' | 'phone' | 'zip' | 'country'>
              )> }
            )>>> }
          )> }
        )>, profiles?: Maybe<(
          { __typename?: 'UserProfileConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'UserProfileEdge' }
            & { node?: Maybe<(
              { __typename?: 'UserProfile' }
              & Pick<UserProfile, 'id' | 'name' | 'initials' | 'requirements' | 'dateOfBirth' | 'isDefaultProfile' | 'isOwnerProfile' | 'ageInYears' | 'isChild'>
              & { gender?: Maybe<(
                { __typename?: 'Gender' }
                & Pick<Gender, 'id' | 'name'>
              )>, addresses?: Maybe<(
                { __typename?: 'UserAddressConnection' }
                & { edges?: Maybe<Array<Maybe<(
                  { __typename?: 'UserAddressEdge' }
                  & { node?: Maybe<(
                    { __typename?: 'UserAddress' }
                    & Pick<UserAddress, 'address1' | 'address2' | 'city' | 'province' | 'phone' | 'zip' | 'country'>
                  )> }
                )>>> }
              )> }
            )> }
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type DeleteAddressByIdMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAddressByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateUserAddress?: Maybe<(
    { __typename?: 'updateUserAddressPayload' }
    & { userAddress?: Maybe<(
      { __typename?: 'UserAddress' }
      & Pick<UserAddress, 'id'>
    )> }
  )> }
);

export type EntryValueByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EntryValueByIdQuery = (
  { __typename?: 'Query' }
  & { challengeEntry?: Maybe<(
    { __typename?: 'ChallengeEntry' }
    & { target: (
      { __typename?: 'ChallengeTarget' }
      & Pick<ChallengeTarget, 'value'>
      & { type?: Maybe<(
        { __typename?: 'ChallengeType' }
        & Pick<ChallengeType, 'name'>
      )> }
    ) }
  )> }
);

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrenciesQuery = (
  { __typename?: 'Query' }
  & { currencies?: Maybe<(
    { __typename?: 'CurrencyConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'CurrencyEdge' }
      & { node?: Maybe<(
        { __typename?: 'Currency' }
        & Pick<Currency, 'iso' | 'symbol'>
      )> }
    )>>> }
  )> }
);

export type GetEntryTimelineQueryVariables = Exact<{
  entry_uuid: Scalars['String'];
  entry_profile_uuid: Scalars['String'];
}>;


export type GetEntryTimelineQuery = (
  { __typename?: 'Query' }
  & { challengeEntryProgresses?: Maybe<(
    { __typename?: 'ChallengeEntryProgressConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryProgressEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntryProgress' }
        & Pick<ChallengeEntryProgress, 'id' | 'progressString' | 'created' | 'createdString' | 'evidenceDate'>
        & { entry: (
          { __typename?: 'ChallengeEntry' }
          & Pick<ChallengeEntry, 'personalisedMedal' | 'totalProgress' | 'totalProgressPercentage'>
          & { target: (
            { __typename?: 'ChallengeTarget' }
            & Pick<ChallengeTarget, 'displayName' | 'value'>
            & { type?: Maybe<(
              { __typename?: 'ChallengeType' }
              & Pick<ChallengeType, 'name' | 'iconFullPath' | 'iconFullPathWhite'>
            )> }
          ), profile?: Maybe<(
            { __typename?: 'UserProfile' }
            & Pick<UserProfile, 'initials'>
          )> }
        ), evidence?: Maybe<(
          { __typename?: 'MediaObjectConnection' }
          & { edges?: Maybe<Array<Maybe<(
            { __typename?: 'MediaObjectEdge' }
            & { node?: Maybe<(
              { __typename?: 'MediaObject' }
              & Pick<MediaObject, 'id' | 'contentUrl'>
            )> }
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type GetLoginRedirectUriQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginRedirectUriQuery = (
  { __typename?: 'Query' }
  & { publicConfigs?: Maybe<(
    { __typename?: 'PublicConfigConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'PublicConfigEdge' }
      & { node?: Maybe<(
        { __typename?: 'PublicConfig' }
        & Pick<PublicConfig, 'id' | 'key' | 'value'>
      )> }
    )>>> }
  )> }
);

export type GetProductsQueryVariables = Exact<{
  monthFilter?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<(
    { __typename?: 'ProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductEdge' }
      & { node?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'title' | 'descriptionHtml' | 'vendor' | 'productType' | 'tags' | 'variants' | 'images' | 'options' | 'collections'>
      )> }
    )>>> }
  )> }
);

export type PersonalisedMedalPricingQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonalisedMedalPricingQuery = (
  { __typename?: 'Query' }
  & { challengeEntryOptions?: Maybe<(
    { __typename?: 'ChallengeEntryOptionConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ChallengeEntryOptionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ChallengeEntryOption' }
        & Pick<ChallengeEntryOption, 'id' | 'forChildren' | 'normalMedalPricing' | 'personalisedMedalPricing' | 'personalisedMedalPricingDifference'>
      )> }
    )>>> }
  )> }
);

export type ProfileEntryMonthsQueryVariables = Exact<{
  id: Scalars['ID'];
  years: Array<Maybe<Scalars['Int']>> | Maybe<Scalars['Int']>;
  closed?: Maybe<Scalars['Boolean']>;
}>;


export type ProfileEntryMonthsQuery = (
  { __typename?: 'Query' }
  & { userProfile?: Maybe<(
    { __typename?: 'UserProfile' }
    & { challengeEntries?: Maybe<(
      { __typename?: 'ChallengeEntryConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'ChallengeEntryEdge' }
        & { node?: Maybe<(
          { __typename?: 'ChallengeEntry' }
          & Pick<ChallengeEntry, 'month' | 'year'>
        )> }
      )>>> }
    )> }
  )> }
);

export type RemoveCartProductLineItemMutationVariables = Exact<{
  cartProductLineItemId: Scalars['ID'];
}>;


export type RemoveCartProductLineItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartProductLineItem?: Maybe<(
    { __typename?: 'deleteCartProductLineItemPayload' }
    & { cartProductLineItem?: Maybe<(
      { __typename?: 'CartProductLineItem' }
      & Pick<CartProductLineItem, 'id'>
    )> }
  )> }
);

export type RemoveChallengeEntryProgressMutationVariables = Exact<{
  challengeEntryProgressId: Scalars['ID'];
}>;


export type RemoveChallengeEntryProgressMutation = (
  { __typename?: 'Mutation' }
  & { deleteChallengeEntryProgress?: Maybe<(
    { __typename?: 'deleteChallengeEntryProgressPayload' }
    & { challengeEntryProgress?: Maybe<(
      { __typename?: 'ChallengeEntryProgress' }
      & Pick<ChallengeEntryProgress, 'id'>
    )> }
  )> }
);

export type RemoveCartEntryLineItemMutationVariables = Exact<{
  cartEntryLineItemId: Scalars['ID'];
}>;


export type RemoveCartEntryLineItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartEntryLineItem?: Maybe<(
    { __typename?: 'deleteCartEntryLineItemPayload' }
    & { cartEntryLineItem?: Maybe<(
      { __typename?: 'CartEntryLineItem' }
      & Pick<CartEntryLineItem, 'id'>
    )> }
  )> }
);

export type SelectableGendersQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectableGendersQuery = (
  { __typename?: 'Query' }
  & { genders?: Maybe<(
    { __typename?: 'GenderConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'GenderEdge' }
      & { node?: Maybe<(
        { __typename?: 'Gender' }
        & Pick<Gender, 'id' | 'name'>
      )> }
    )>>> }
  )> }
);

export type SetUserCurrencyPrefsMutationVariables = Exact<{
  currency: Scalars['String'];
  user: Scalars['ID'];
}>;


export type SetUserCurrencyPrefsMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'currencyPreference'>
    )> }
  )> }
);

export type SetEntryPersonalisedMutationVariables = Exact<{
  entryId: Scalars['ID'];
  personalisedMedal: Scalars['Int'];
}>;


export type SetEntryPersonalisedMutation = (
  { __typename?: 'Mutation' }
  & { updateCartEntryLineItem?: Maybe<(
    { __typename?: 'updateCartEntryLineItemPayload' }
    & Pick<UpdateCartEntryLineItemPayload, 'clientMutationId'>
  )> }
);

export type UpdateCartMutationVariables = Exact<{
  input: UpdateCartInput;
}>;


export type UpdateCartMutation = (
  { __typename?: 'Mutation' }
  & { updateCart?: Maybe<(
    { __typename?: 'updateCartPayload' }
    & { cart?: Maybe<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'id'>
      & { entryLineItems?: Maybe<(
        { __typename?: 'CartEntryLineItemConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'CartEntryLineItemEdge' }
          & { node?: Maybe<(
            { __typename?: 'CartEntryLineItem' }
            & Pick<CartEntryLineItem, 'yearMonthString'>
          )> }
        )>>> }
      )> }
    )> }
  )> }
);

export type UpdateCartProductLineItemMutationVariables = Exact<{
  productLineInput: UpdateCartProductLineItemInput;
  cartInput: UpdateCartInput;
}>;


export type UpdateCartProductLineItemMutation = (
  { __typename?: 'Mutation' }
  & { updateCart?: Maybe<(
    { __typename?: 'updateCartPayload' }
    & { cart?: Maybe<(
      { __typename?: 'Cart' }
      & Pick<Cart, 'id' | 'checkoutUrl' | 'priceBreakdown'>
      & { productLineItems?: Maybe<(
        { __typename?: 'CartProductLineItemConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'CartProductLineItemEdge' }
          & { node?: Maybe<(
            { __typename?: 'CartProductLineItem' }
            & Pick<CartProductLineItem, 'id' | 'quantity' | 'variantId'>
          )> }
        )>>> }
      )>, address?: Maybe<(
        { __typename?: 'UserAddress' }
        & Pick<UserAddress, 'address1' | 'address2' | 'city' | 'province' | 'zip' | 'country'>
      )>, entryLineItems?: Maybe<(
        { __typename?: 'CartEntryLineItemConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'CartEntryLineItemEdge' }
          & { node?: Maybe<(
            { __typename?: 'CartEntryLineItem' }
            & Pick<CartEntryLineItem, 'id'>
            & { challengeTarget: (
              { __typename?: 'ChallengeTarget' }
              & Pick<ChallengeTarget, 'displayName'>
            ) }
          )> }
        )>>> }
      )> }
    )> }
  )>, updateCartProductLineItem?: Maybe<(
    { __typename?: 'updateCartProductLineItemPayload' }
    & { cartProductLineItem?: Maybe<(
      { __typename?: 'CartProductLineItem' }
      & Pick<CartProductLineItem, 'id' | 'variantId' | 'quantity'>
    )> }
  )> }
);

export type UpdateChallengeMutationVariables = Exact<{
  input: UpdateChallengeEntryInput;
}>;


export type UpdateChallengeMutation = (
  { __typename?: 'Mutation' }
  & { updateChallengeEntry?: Maybe<(
    { __typename?: 'updateChallengeEntryPayload' }
    & { challengeEntry?: Maybe<(
      { __typename?: 'ChallengeEntry' }
      & Pick<ChallengeEntry, 'id'>
      & { target: (
        { __typename?: 'ChallengeTarget' }
        & Pick<ChallengeTarget, 'id' | 'value' | 'metric' | 'displayName'>
      ) }
    )> }
  )> }
);

export type UpdateChallengeEntryProgressMutationVariables = Exact<{
  input: UpdateChallengeEntryProgressInput;
}>;


export type UpdateChallengeEntryProgressMutation = (
  { __typename?: 'Mutation' }
  & { updateChallengeEntryProgress?: Maybe<(
    { __typename?: 'updateChallengeEntryProgressPayload' }
    & { challengeEntryProgress?: Maybe<(
      { __typename?: 'ChallengeEntryProgress' }
      & Pick<ChallengeEntryProgress, 'id' | 'progress' | 'evidenceDate'>
      & { evidence?: Maybe<(
        { __typename?: 'MediaObjectConnection' }
        & { edges?: Maybe<Array<Maybe<(
          { __typename?: 'MediaObjectEdge' }
          & { node?: Maybe<(
            { __typename?: 'MediaObject' }
            & Pick<MediaObject, 'id'>
          )> }
        )>>> }
      )> }
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUserProfile?: Maybe<(
    { __typename?: 'updateUserProfilePayload' }
    & { userProfile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id'>
    )> }
  )> }
);

export type UpdateUserRealMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserRealMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'updateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type UploadEvidenceMutationVariables = Exact<{
  input: UploadMediaObjectInput;
}>;


export type UploadEvidenceMutation = (
  { __typename?: 'Mutation' }
  & { uploadMediaObject?: Maybe<(
    { __typename?: 'uploadMediaObjectPayload' }
    & { mediaObject?: Maybe<(
      { __typename?: 'MediaObject' }
      & Pick<MediaObject, 'id' | 'contentUrl'>
    )> }
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AnnualPass: ResolverTypeWrapper<AnnualPass>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AnnualPassCart: ResolverTypeWrapper<AnnualPassCart>;
  AnnualPassConnection: ResolverTypeWrapper<AnnualPassConnection>;
  AnnualPassEdge: ResolverTypeWrapper<AnnualPassEdge>;
  AnnualPassFilter_order: AnnualPassFilter_Order;
  AnnualPassPageInfo: ResolverTypeWrapper<AnnualPassPageInfo>;
  AnnualPassPurchasable: ResolverTypeWrapper<AnnualPassPurchasable>;
  AnnualPassPurchasableConnection: ResolverTypeWrapper<AnnualPassPurchasableConnection>;
  AnnualPassPurchasableEdge: ResolverTypeWrapper<AnnualPassPurchasableEdge>;
  AnnualPassPurchasablePageInfo: ResolverTypeWrapper<AnnualPassPurchasablePageInfo>;
  AnnualPassPurchasablePrice: ResolverTypeWrapper<AnnualPassPurchasablePrice>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AnnualPassPurchasablePriceConnection: ResolverTypeWrapper<AnnualPassPurchasablePriceConnection>;
  AnnualPassPurchasablePriceEdge: ResolverTypeWrapper<AnnualPassPurchasablePriceEdge>;
  AnnualPassPurchasablePricePageInfo: ResolverTypeWrapper<AnnualPassPurchasablePricePageInfo>;
  AvailableEntryMonth: ResolverTypeWrapper<AvailableEntryMonth>;
  AvailableEntryMonthConnection: ResolverTypeWrapper<AvailableEntryMonthConnection>;
  AvailableEntryMonthEdge: ResolverTypeWrapper<AvailableEntryMonthEdge>;
  AvailableEntryMonthPageInfo: ResolverTypeWrapper<AvailableEntryMonthPageInfo>;
  Cart: ResolverTypeWrapper<Cart>;
  CartEntryLineItem: ResolverTypeWrapper<CartEntryLineItem>;
  CartEntryLineItemChallengeCheck: ResolverTypeWrapper<CartEntryLineItemChallengeCheck>;
  CartEntryLineItemChallengeCheckConnection: ResolverTypeWrapper<CartEntryLineItemChallengeCheckConnection>;
  CartEntryLineItemChallengeCheckEdge: ResolverTypeWrapper<CartEntryLineItemChallengeCheckEdge>;
  CartEntryLineItemChallengeCheckPageInfo: ResolverTypeWrapper<CartEntryLineItemChallengeCheckPageInfo>;
  CartEntryLineItemConnection: ResolverTypeWrapper<CartEntryLineItemConnection>;
  CartEntryLineItemEdge: ResolverTypeWrapper<CartEntryLineItemEdge>;
  CartEntryLineItemPageInfo: ResolverTypeWrapper<CartEntryLineItemPageInfo>;
  CartProductLineItem: ResolverTypeWrapper<CartProductLineItem>;
  CartProductLineItemConnection: ResolverTypeWrapper<CartProductLineItemConnection>;
  CartProductLineItemEdge: ResolverTypeWrapper<CartProductLineItemEdge>;
  CartProductLineItemPageInfo: ResolverTypeWrapper<CartProductLineItemPageInfo>;
  ChallengeEntry: ResolverTypeWrapper<ChallengeEntry>;
  ChallengeEntryConnection: ResolverTypeWrapper<ChallengeEntryConnection>;
  ChallengeEntryEdge: ResolverTypeWrapper<ChallengeEntryEdge>;
  ChallengeEntryFilter_exists: ChallengeEntryFilter_Exists;
  ChallengeEntryFilter_order: ChallengeEntryFilter_Order;
  ChallengeEntryOption: ResolverTypeWrapper<ChallengeEntryOption>;
  ChallengeEntryOptionConnection: ResolverTypeWrapper<ChallengeEntryOptionConnection>;
  ChallengeEntryOptionEdge: ResolverTypeWrapper<ChallengeEntryOptionEdge>;
  ChallengeEntryOptionPageInfo: ResolverTypeWrapper<ChallengeEntryOptionPageInfo>;
  ChallengeEntryPageInfo: ResolverTypeWrapper<ChallengeEntryPageInfo>;
  ChallengeEntryProgress: ResolverTypeWrapper<ChallengeEntryProgress>;
  ChallengeEntryProgressConnection: ResolverTypeWrapper<ChallengeEntryProgressConnection>;
  ChallengeEntryProgressEdge: ResolverTypeWrapper<ChallengeEntryProgressEdge>;
  ChallengeEntryProgressFilter_exists: ChallengeEntryProgressFilter_Exists;
  ChallengeEntryProgressFilter_order: ChallengeEntryProgressFilter_Order;
  ChallengeEntryProgressPageInfo: ResolverTypeWrapper<ChallengeEntryProgressPageInfo>;
  ChallengeTarget: ResolverTypeWrapper<ChallengeTarget>;
  ChallengeTargetConnection: ResolverTypeWrapper<ChallengeTargetConnection>;
  ChallengeTargetEdge: ResolverTypeWrapper<ChallengeTargetEdge>;
  ChallengeTargetFilter_order: ChallengeTargetFilter_Order;
  ChallengeTargetPageInfo: ResolverTypeWrapper<ChallengeTargetPageInfo>;
  ChallengeType: ResolverTypeWrapper<ChallengeType>;
  ChallengeTypeConnection: ResolverTypeWrapper<ChallengeTypeConnection>;
  ChallengeTypeEdge: ResolverTypeWrapper<ChallengeTypeEdge>;
  ChallengeTypeFilter_order: ChallengeTypeFilter_Order;
  ChallengeTypePageInfo: ResolverTypeWrapper<ChallengeTypePageInfo>;
  Country: ResolverTypeWrapper<Country>;
  CountryConnection: ResolverTypeWrapper<CountryConnection>;
  CountryEdge: ResolverTypeWrapper<CountryEdge>;
  CountryPageInfo: ResolverTypeWrapper<CountryPageInfo>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyConnection: ResolverTypeWrapper<CurrencyConnection>;
  CurrencyEdge: ResolverTypeWrapper<CurrencyEdge>;
  CurrencyPageInfo: ResolverTypeWrapper<CurrencyPageInfo>;
  EmailInSystemCheck: ResolverTypeWrapper<EmailInSystemCheck>;
  EmailInSystemCheckConnection: ResolverTypeWrapper<EmailInSystemCheckConnection>;
  EmailInSystemCheckEdge: ResolverTypeWrapper<EmailInSystemCheckEdge>;
  EmailInSystemCheckPageInfo: ResolverTypeWrapper<EmailInSystemCheckPageInfo>;
  Gender: ResolverTypeWrapper<Gender>;
  GenderConnection: ResolverTypeWrapper<GenderConnection>;
  GenderEdge: ResolverTypeWrapper<GenderEdge>;
  GenderFilter_order: GenderFilter_Order;
  GenderPageInfo: ResolverTypeWrapper<GenderPageInfo>;
  Iterable: ResolverTypeWrapper<Scalars['Iterable']>;
  MediaObject: ResolverTypeWrapper<MediaObject>;
  MediaObjectConnection: ResolverTypeWrapper<MediaObjectConnection>;
  MediaObjectEdge: ResolverTypeWrapper<MediaObjectEdge>;
  MediaObjectPageInfo: ResolverTypeWrapper<MediaObjectPageInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['AnnualPass'] | ResolversTypes['AnnualPassCart'] | ResolversTypes['AnnualPassPurchasable'] | ResolversTypes['AnnualPassPurchasablePrice'] | ResolversTypes['AvailableEntryMonth'] | ResolversTypes['Cart'] | ResolversTypes['CartEntryLineItem'] | ResolversTypes['CartEntryLineItemChallengeCheck'] | ResolversTypes['CartProductLineItem'] | ResolversTypes['ChallengeEntry'] | ResolversTypes['ChallengeEntryOption'] | ResolversTypes['ChallengeEntryProgress'] | ResolversTypes['ChallengeTarget'] | ResolversTypes['ChallengeType'] | ResolversTypes['Country'] | ResolversTypes['Currency'] | ResolversTypes['EmailInSystemCheck'] | ResolversTypes['Gender'] | ResolversTypes['MediaObject'] | ResolversTypes['Product'] | ResolversTypes['ProductCollection'] | ResolversTypes['ProductImage'] | ResolversTypes['PublicConfig'] | ResolversTypes['UnauthChallengeEntry'] | ResolversTypes['User'] | ResolversTypes['UserAddress'] | ResolversTypes['UserProfile'];
  Product: ResolverTypeWrapper<Product>;
  ProductCollection: ResolverTypeWrapper<ProductCollection>;
  ProductCollectionConnection: ResolverTypeWrapper<ProductCollectionConnection>;
  ProductCollectionEdge: ResolverTypeWrapper<ProductCollectionEdge>;
  ProductCollectionPageInfo: ResolverTypeWrapper<ProductCollectionPageInfo>;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductImageConnection: ResolverTypeWrapper<ProductImageConnection>;
  ProductImageEdge: ResolverTypeWrapper<ProductImageEdge>;
  ProductImagePageInfo: ResolverTypeWrapper<ProductImagePageInfo>;
  ProductPageInfo: ResolverTypeWrapper<ProductPageInfo>;
  PublicConfig: ResolverTypeWrapper<PublicConfig>;
  PublicConfigConnection: ResolverTypeWrapper<PublicConfigConnection>;
  PublicConfigEdge: ResolverTypeWrapper<PublicConfigEdge>;
  PublicConfigPageInfo: ResolverTypeWrapper<PublicConfigPageInfo>;
  Query: ResolverTypeWrapper<{}>;
  UnauthChallengeEntry: ResolverTypeWrapper<UnauthChallengeEntry>;
  UnauthChallengeEntryConnection: ResolverTypeWrapper<UnauthChallengeEntryConnection>;
  UnauthChallengeEntryEdge: ResolverTypeWrapper<UnauthChallengeEntryEdge>;
  UnauthChallengeEntryPageInfo: ResolverTypeWrapper<UnauthChallengeEntryPageInfo>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserAddress: ResolverTypeWrapper<UserAddress>;
  UserAddressConnection: ResolverTypeWrapper<UserAddressConnection>;
  UserAddressEdge: ResolverTypeWrapper<UserAddressEdge>;
  UserAddressFilter_order: UserAddressFilter_Order;
  UserAddressPageInfo: ResolverTypeWrapper<UserAddressPageInfo>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserPageInfo: ResolverTypeWrapper<UserPageInfo>;
  UserProfile: ResolverTypeWrapper<UserProfile>;
  UserProfileConnection: ResolverTypeWrapper<UserProfileConnection>;
  UserProfileEdge: ResolverTypeWrapper<UserProfileEdge>;
  UserProfileFilter_order: UserProfileFilter_Order;
  UserProfilePageInfo: ResolverTypeWrapper<UserProfilePageInfo>;
  createAnnualPassCartInput: CreateAnnualPassCartInput;
  createAnnualPassCartPayload: ResolverTypeWrapper<CreateAnnualPassCartPayload>;
  createAnnualPassPurchasablePriceInput: CreateAnnualPassPurchasablePriceInput;
  createAnnualPassPurchasablePricePayload: ResolverTypeWrapper<CreateAnnualPassPurchasablePricePayload>;
  createCartEntryLineItemInput: CreateCartEntryLineItemInput;
  createCartEntryLineItemPayload: ResolverTypeWrapper<CreateCartEntryLineItemPayload>;
  createCartInput: CreateCartInput;
  createCartPayload: ResolverTypeWrapper<CreateCartPayload>;
  createCartProductLineItemInput: CreateCartProductLineItemInput;
  createCartProductLineItemPayload: ResolverTypeWrapper<CreateCartProductLineItemPayload>;
  createChallengeEntryProgressInput: CreateChallengeEntryProgressInput;
  createChallengeEntryProgressPayload: ResolverTypeWrapper<CreateChallengeEntryProgressPayload>;
  createProductCollectionInput: CreateProductCollectionInput;
  createProductCollectionPayload: ResolverTypeWrapper<CreateProductCollectionPayload>;
  createProductImageInput: CreateProductImageInput;
  createProductImagePayload: ResolverTypeWrapper<CreateProductImagePayload>;
  createUserAddressInput: CreateUserAddressInput;
  createUserAddressPayload: ResolverTypeWrapper<CreateUserAddressPayload>;
  createUserProfileInput: CreateUserProfileInput;
  createUserProfilePayload: ResolverTypeWrapper<CreateUserProfilePayload>;
  deleteAnnualPassCartInput: DeleteAnnualPassCartInput;
  deleteAnnualPassCartPayload: ResolverTypeWrapper<DeleteAnnualPassCartPayload>;
  deleteAnnualPassPurchasablePriceInput: DeleteAnnualPassPurchasablePriceInput;
  deleteAnnualPassPurchasablePricePayload: ResolverTypeWrapper<DeleteAnnualPassPurchasablePricePayload>;
  deleteCartEntryLineItemInput: DeleteCartEntryLineItemInput;
  deleteCartEntryLineItemPayload: ResolverTypeWrapper<DeleteCartEntryLineItemPayload>;
  deleteCartInput: DeleteCartInput;
  deleteCartPayload: ResolverTypeWrapper<DeleteCartPayload>;
  deleteCartProductLineItemInput: DeleteCartProductLineItemInput;
  deleteCartProductLineItemPayload: ResolverTypeWrapper<DeleteCartProductLineItemPayload>;
  deleteChallengeEntryInput: DeleteChallengeEntryInput;
  deleteChallengeEntryPayload: ResolverTypeWrapper<DeleteChallengeEntryPayload>;
  deleteChallengeEntryProgressInput: DeleteChallengeEntryProgressInput;
  deleteChallengeEntryProgressPayload: ResolverTypeWrapper<DeleteChallengeEntryProgressPayload>;
  deleteProductCollectionInput: DeleteProductCollectionInput;
  deleteProductCollectionPayload: ResolverTypeWrapper<DeleteProductCollectionPayload>;
  deleteProductImageInput: DeleteProductImageInput;
  deleteProductImagePayload: ResolverTypeWrapper<DeleteProductImagePayload>;
  deleteUserProfileInput: DeleteUserProfileInput;
  deleteUserProfilePayload: ResolverTypeWrapper<DeleteUserProfilePayload>;
  updateAnnualPassCartInput: UpdateAnnualPassCartInput;
  updateAnnualPassCartPayload: ResolverTypeWrapper<UpdateAnnualPassCartPayload>;
  updateAnnualPassPurchasablePriceInput: UpdateAnnualPassPurchasablePriceInput;
  updateAnnualPassPurchasablePricePayload: ResolverTypeWrapper<UpdateAnnualPassPurchasablePricePayload>;
  updateCartEntryLineItemInput: UpdateCartEntryLineItemInput;
  updateCartEntryLineItemPayload: ResolverTypeWrapper<UpdateCartEntryLineItemPayload>;
  updateCartInput: UpdateCartInput;
  updateCartPayload: ResolverTypeWrapper<UpdateCartPayload>;
  updateCartProductLineItemInput: UpdateCartProductLineItemInput;
  updateCartProductLineItemPayload: ResolverTypeWrapper<UpdateCartProductLineItemPayload>;
  updateChallengeEntryInput: UpdateChallengeEntryInput;
  updateChallengeEntryPayload: ResolverTypeWrapper<UpdateChallengeEntryPayload>;
  updateChallengeEntryProgressInput: UpdateChallengeEntryProgressInput;
  updateChallengeEntryProgressPayload: ResolverTypeWrapper<UpdateChallengeEntryProgressPayload>;
  updateGenderInput: UpdateGenderInput;
  updateGenderPayload: ResolverTypeWrapper<UpdateGenderPayload>;
  updateProductCollectionInput: UpdateProductCollectionInput;
  updateProductCollectionPayload: ResolverTypeWrapper<UpdateProductCollectionPayload>;
  updateProductImageInput: UpdateProductImageInput;
  updateProductImagePayload: ResolverTypeWrapper<UpdateProductImagePayload>;
  updateUnauthChallengeEntryInput: UpdateUnauthChallengeEntryInput;
  updateUnauthChallengeEntryPayload: ResolverTypeWrapper<UpdateUnauthChallengeEntryPayload>;
  updateUserAddressInput: UpdateUserAddressInput;
  updateUserAddressPayload: ResolverTypeWrapper<UpdateUserAddressPayload>;
  updateUserInput: UpdateUserInput;
  updateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  updateUserProfileInput: UpdateUserProfileInput;
  updateUserProfilePayload: ResolverTypeWrapper<UpdateUserProfilePayload>;
  uploadMediaObjectInput: UploadMediaObjectInput;
  uploadMediaObjectPayload: ResolverTypeWrapper<UploadMediaObjectPayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AnnualPass: AnnualPass;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  AnnualPassCart: AnnualPassCart;
  AnnualPassConnection: AnnualPassConnection;
  AnnualPassEdge: AnnualPassEdge;
  AnnualPassFilter_order: AnnualPassFilter_Order;
  AnnualPassPageInfo: AnnualPassPageInfo;
  AnnualPassPurchasable: AnnualPassPurchasable;
  AnnualPassPurchasableConnection: AnnualPassPurchasableConnection;
  AnnualPassPurchasableEdge: AnnualPassPurchasableEdge;
  AnnualPassPurchasablePageInfo: AnnualPassPurchasablePageInfo;
  AnnualPassPurchasablePrice: AnnualPassPurchasablePrice;
  Float: Scalars['Float'];
  AnnualPassPurchasablePriceConnection: AnnualPassPurchasablePriceConnection;
  AnnualPassPurchasablePriceEdge: AnnualPassPurchasablePriceEdge;
  AnnualPassPurchasablePricePageInfo: AnnualPassPurchasablePricePageInfo;
  AvailableEntryMonth: AvailableEntryMonth;
  AvailableEntryMonthConnection: AvailableEntryMonthConnection;
  AvailableEntryMonthEdge: AvailableEntryMonthEdge;
  AvailableEntryMonthPageInfo: AvailableEntryMonthPageInfo;
  Cart: Cart;
  CartEntryLineItem: CartEntryLineItem;
  CartEntryLineItemChallengeCheck: CartEntryLineItemChallengeCheck;
  CartEntryLineItemChallengeCheckConnection: CartEntryLineItemChallengeCheckConnection;
  CartEntryLineItemChallengeCheckEdge: CartEntryLineItemChallengeCheckEdge;
  CartEntryLineItemChallengeCheckPageInfo: CartEntryLineItemChallengeCheckPageInfo;
  CartEntryLineItemConnection: CartEntryLineItemConnection;
  CartEntryLineItemEdge: CartEntryLineItemEdge;
  CartEntryLineItemPageInfo: CartEntryLineItemPageInfo;
  CartProductLineItem: CartProductLineItem;
  CartProductLineItemConnection: CartProductLineItemConnection;
  CartProductLineItemEdge: CartProductLineItemEdge;
  CartProductLineItemPageInfo: CartProductLineItemPageInfo;
  ChallengeEntry: ChallengeEntry;
  ChallengeEntryConnection: ChallengeEntryConnection;
  ChallengeEntryEdge: ChallengeEntryEdge;
  ChallengeEntryFilter_exists: ChallengeEntryFilter_Exists;
  ChallengeEntryFilter_order: ChallengeEntryFilter_Order;
  ChallengeEntryOption: ChallengeEntryOption;
  ChallengeEntryOptionConnection: ChallengeEntryOptionConnection;
  ChallengeEntryOptionEdge: ChallengeEntryOptionEdge;
  ChallengeEntryOptionPageInfo: ChallengeEntryOptionPageInfo;
  ChallengeEntryPageInfo: ChallengeEntryPageInfo;
  ChallengeEntryProgress: ChallengeEntryProgress;
  ChallengeEntryProgressConnection: ChallengeEntryProgressConnection;
  ChallengeEntryProgressEdge: ChallengeEntryProgressEdge;
  ChallengeEntryProgressFilter_exists: ChallengeEntryProgressFilter_Exists;
  ChallengeEntryProgressFilter_order: ChallengeEntryProgressFilter_Order;
  ChallengeEntryProgressPageInfo: ChallengeEntryProgressPageInfo;
  ChallengeTarget: ChallengeTarget;
  ChallengeTargetConnection: ChallengeTargetConnection;
  ChallengeTargetEdge: ChallengeTargetEdge;
  ChallengeTargetFilter_order: ChallengeTargetFilter_Order;
  ChallengeTargetPageInfo: ChallengeTargetPageInfo;
  ChallengeType: ChallengeType;
  ChallengeTypeConnection: ChallengeTypeConnection;
  ChallengeTypeEdge: ChallengeTypeEdge;
  ChallengeTypeFilter_order: ChallengeTypeFilter_Order;
  ChallengeTypePageInfo: ChallengeTypePageInfo;
  Country: Country;
  CountryConnection: CountryConnection;
  CountryEdge: CountryEdge;
  CountryPageInfo: CountryPageInfo;
  Currency: Currency;
  CurrencyConnection: CurrencyConnection;
  CurrencyEdge: CurrencyEdge;
  CurrencyPageInfo: CurrencyPageInfo;
  EmailInSystemCheck: EmailInSystemCheck;
  EmailInSystemCheckConnection: EmailInSystemCheckConnection;
  EmailInSystemCheckEdge: EmailInSystemCheckEdge;
  EmailInSystemCheckPageInfo: EmailInSystemCheckPageInfo;
  Gender: Gender;
  GenderConnection: GenderConnection;
  GenderEdge: GenderEdge;
  GenderFilter_order: GenderFilter_Order;
  GenderPageInfo: GenderPageInfo;
  Iterable: Scalars['Iterable'];
  MediaObject: MediaObject;
  MediaObjectConnection: MediaObjectConnection;
  MediaObjectEdge: MediaObjectEdge;
  MediaObjectPageInfo: MediaObjectPageInfo;
  Mutation: {};
  Node: ResolversParentTypes['AnnualPass'] | ResolversParentTypes['AnnualPassCart'] | ResolversParentTypes['AnnualPassPurchasable'] | ResolversParentTypes['AnnualPassPurchasablePrice'] | ResolversParentTypes['AvailableEntryMonth'] | ResolversParentTypes['Cart'] | ResolversParentTypes['CartEntryLineItem'] | ResolversParentTypes['CartEntryLineItemChallengeCheck'] | ResolversParentTypes['CartProductLineItem'] | ResolversParentTypes['ChallengeEntry'] | ResolversParentTypes['ChallengeEntryOption'] | ResolversParentTypes['ChallengeEntryProgress'] | ResolversParentTypes['ChallengeTarget'] | ResolversParentTypes['ChallengeType'] | ResolversParentTypes['Country'] | ResolversParentTypes['Currency'] | ResolversParentTypes['EmailInSystemCheck'] | ResolversParentTypes['Gender'] | ResolversParentTypes['MediaObject'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductCollection'] | ResolversParentTypes['ProductImage'] | ResolversParentTypes['PublicConfig'] | ResolversParentTypes['UnauthChallengeEntry'] | ResolversParentTypes['User'] | ResolversParentTypes['UserAddress'] | ResolversParentTypes['UserProfile'];
  Product: Product;
  ProductCollection: ProductCollection;
  ProductCollectionConnection: ProductCollectionConnection;
  ProductCollectionEdge: ProductCollectionEdge;
  ProductCollectionPageInfo: ProductCollectionPageInfo;
  ProductConnection: ProductConnection;
  ProductEdge: ProductEdge;
  ProductImage: ProductImage;
  ProductImageConnection: ProductImageConnection;
  ProductImageEdge: ProductImageEdge;
  ProductImagePageInfo: ProductImagePageInfo;
  ProductPageInfo: ProductPageInfo;
  PublicConfig: PublicConfig;
  PublicConfigConnection: PublicConfigConnection;
  PublicConfigEdge: PublicConfigEdge;
  PublicConfigPageInfo: PublicConfigPageInfo;
  Query: {};
  UnauthChallengeEntry: UnauthChallengeEntry;
  UnauthChallengeEntryConnection: UnauthChallengeEntryConnection;
  UnauthChallengeEntryEdge: UnauthChallengeEntryEdge;
  UnauthChallengeEntryPageInfo: UnauthChallengeEntryPageInfo;
  Upload: Scalars['Upload'];
  User: User;
  UserAddress: UserAddress;
  UserAddressConnection: UserAddressConnection;
  UserAddressEdge: UserAddressEdge;
  UserAddressFilter_order: UserAddressFilter_Order;
  UserAddressPageInfo: UserAddressPageInfo;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserPageInfo: UserPageInfo;
  UserProfile: UserProfile;
  UserProfileConnection: UserProfileConnection;
  UserProfileEdge: UserProfileEdge;
  UserProfileFilter_order: UserProfileFilter_Order;
  UserProfilePageInfo: UserProfilePageInfo;
  createAnnualPassCartInput: CreateAnnualPassCartInput;
  createAnnualPassCartPayload: CreateAnnualPassCartPayload;
  createAnnualPassPurchasablePriceInput: CreateAnnualPassPurchasablePriceInput;
  createAnnualPassPurchasablePricePayload: CreateAnnualPassPurchasablePricePayload;
  createCartEntryLineItemInput: CreateCartEntryLineItemInput;
  createCartEntryLineItemPayload: CreateCartEntryLineItemPayload;
  createCartInput: CreateCartInput;
  createCartPayload: CreateCartPayload;
  createCartProductLineItemInput: CreateCartProductLineItemInput;
  createCartProductLineItemPayload: CreateCartProductLineItemPayload;
  createChallengeEntryProgressInput: CreateChallengeEntryProgressInput;
  createChallengeEntryProgressPayload: CreateChallengeEntryProgressPayload;
  createProductCollectionInput: CreateProductCollectionInput;
  createProductCollectionPayload: CreateProductCollectionPayload;
  createProductImageInput: CreateProductImageInput;
  createProductImagePayload: CreateProductImagePayload;
  createUserAddressInput: CreateUserAddressInput;
  createUserAddressPayload: CreateUserAddressPayload;
  createUserProfileInput: CreateUserProfileInput;
  createUserProfilePayload: CreateUserProfilePayload;
  deleteAnnualPassCartInput: DeleteAnnualPassCartInput;
  deleteAnnualPassCartPayload: DeleteAnnualPassCartPayload;
  deleteAnnualPassPurchasablePriceInput: DeleteAnnualPassPurchasablePriceInput;
  deleteAnnualPassPurchasablePricePayload: DeleteAnnualPassPurchasablePricePayload;
  deleteCartEntryLineItemInput: DeleteCartEntryLineItemInput;
  deleteCartEntryLineItemPayload: DeleteCartEntryLineItemPayload;
  deleteCartInput: DeleteCartInput;
  deleteCartPayload: DeleteCartPayload;
  deleteCartProductLineItemInput: DeleteCartProductLineItemInput;
  deleteCartProductLineItemPayload: DeleteCartProductLineItemPayload;
  deleteChallengeEntryInput: DeleteChallengeEntryInput;
  deleteChallengeEntryPayload: DeleteChallengeEntryPayload;
  deleteChallengeEntryProgressInput: DeleteChallengeEntryProgressInput;
  deleteChallengeEntryProgressPayload: DeleteChallengeEntryProgressPayload;
  deleteProductCollectionInput: DeleteProductCollectionInput;
  deleteProductCollectionPayload: DeleteProductCollectionPayload;
  deleteProductImageInput: DeleteProductImageInput;
  deleteProductImagePayload: DeleteProductImagePayload;
  deleteUserProfileInput: DeleteUserProfileInput;
  deleteUserProfilePayload: DeleteUserProfilePayload;
  updateAnnualPassCartInput: UpdateAnnualPassCartInput;
  updateAnnualPassCartPayload: UpdateAnnualPassCartPayload;
  updateAnnualPassPurchasablePriceInput: UpdateAnnualPassPurchasablePriceInput;
  updateAnnualPassPurchasablePricePayload: UpdateAnnualPassPurchasablePricePayload;
  updateCartEntryLineItemInput: UpdateCartEntryLineItemInput;
  updateCartEntryLineItemPayload: UpdateCartEntryLineItemPayload;
  updateCartInput: UpdateCartInput;
  updateCartPayload: UpdateCartPayload;
  updateCartProductLineItemInput: UpdateCartProductLineItemInput;
  updateCartProductLineItemPayload: UpdateCartProductLineItemPayload;
  updateChallengeEntryInput: UpdateChallengeEntryInput;
  updateChallengeEntryPayload: UpdateChallengeEntryPayload;
  updateChallengeEntryProgressInput: UpdateChallengeEntryProgressInput;
  updateChallengeEntryProgressPayload: UpdateChallengeEntryProgressPayload;
  updateGenderInput: UpdateGenderInput;
  updateGenderPayload: UpdateGenderPayload;
  updateProductCollectionInput: UpdateProductCollectionInput;
  updateProductCollectionPayload: UpdateProductCollectionPayload;
  updateProductImageInput: UpdateProductImageInput;
  updateProductImagePayload: UpdateProductImagePayload;
  updateUnauthChallengeEntryInput: UpdateUnauthChallengeEntryInput;
  updateUnauthChallengeEntryPayload: UpdateUnauthChallengeEntryPayload;
  updateUserAddressInput: UpdateUserAddressInput;
  updateUserAddressPayload: UpdateUserAddressPayload;
  updateUserInput: UpdateUserInput;
  updateUserPayload: UpdateUserPayload;
  updateUserProfileInput: UpdateUserProfileInput;
  updateUserProfilePayload: UpdateUserProfilePayload;
  uploadMediaObjectInput: UploadMediaObjectInput;
  uploadMediaObjectPayload: UploadMediaObjectPayload;
};

export type AnnualPassResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPass'] = ResolversParentTypes['AnnualPass']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isChild?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  annualPassCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassCartResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassCart'] = ResolversParentTypes['AnnualPassCart']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  purchasablePriceIds?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  checkoutUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceBreakdown?: Resolver<Maybe<ResolversTypes['Iterable']>, ParentType, ContextType>;
  presentmentCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syncWithShopify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassConnection'] = ResolversParentTypes['AnnualPassConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnualPassEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['AnnualPassPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassEdge'] = ResolversParentTypes['AnnualPassEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AnnualPass']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPageInfo'] = ResolversParentTypes['AnnualPassPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasableResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasable'] = ResolversParentTypes['AnnualPassPurchasable']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType>;
  prices?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  child?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasableConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasableConnection'] = ResolversParentTypes['AnnualPassPurchasableConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnualPassPurchasableEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['AnnualPassPurchasablePageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasableEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasableEdge'] = ResolversParentTypes['AnnualPassPurchasableEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasable']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasablePageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasablePageInfo'] = ResolversParentTypes['AnnualPassPurchasablePageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasablePriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasablePrice'] = ResolversParentTypes['AnnualPassPurchasablePrice']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  basePrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  discountValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasablePriceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasablePriceConnection'] = ResolversParentTypes['AnnualPassPurchasablePriceConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnualPassPurchasablePriceEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['AnnualPassPurchasablePricePageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasablePriceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasablePriceEdge'] = ResolversParentTypes['AnnualPassPurchasablePriceEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePrice']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnualPassPurchasablePricePageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnualPassPurchasablePricePageInfo'] = ResolversParentTypes['AnnualPassPurchasablePricePageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableEntryMonthResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableEntryMonth'] = ResolversParentTypes['AvailableEntryMonth']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lateEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  monthName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayNameWithLateEntry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableEntryMonthConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableEntryMonthConnection'] = ResolversParentTypes['AvailableEntryMonthConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['AvailableEntryMonthEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['AvailableEntryMonthPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableEntryMonthEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableEntryMonthEdge'] = ResolversParentTypes['AvailableEntryMonthEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AvailableEntryMonth']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableEntryMonthPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableEntryMonthPageInfo'] = ResolversParentTypes['AvailableEntryMonthPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  entryLineItems?: Resolver<Maybe<ResolversTypes['CartEntryLineItemConnection']>, ParentType, ContextType, RequireFields<CartEntryLineItemsArgs, never>>;
  productLineItems?: Resolver<Maybe<ResolversTypes['CartProductLineItemConnection']>, ParentType, ContextType, RequireFields<CartProductLineItemsArgs, never>>;
  address?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  checkoutUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceBreakdown?: Resolver<Maybe<ResolversTypes['Iterable']>, ParentType, ContextType>;
  presentmentCurrencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  syncWithShopify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usingInternationalAnnualPass?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  yearMonth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItem'] = ResolversParentTypes['CartEntryLineItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  challengeTarget?: Resolver<ResolversTypes['ChallengeTarget'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withMedal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  personalisedMedal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  overrideChallengeTargetValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  differentAddress?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  syncWithShopify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  annualPass?: Resolver<Maybe<ResolversTypes['AnnualPass']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yearMonthString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  personalisedMedalTargetValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  childEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isGuestEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPersonalisedEntry?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemChallengeCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemChallengeCheck'] = ResolversParentTypes['CartEntryLineItemChallengeCheck']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cartEntryLineItem?: Resolver<ResolversTypes['CartEntryLineItem'], ParentType, ContextType>;
  challengeExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  challengeUuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  challengeIri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemChallengeCheckConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemChallengeCheckConnection'] = ResolversParentTypes['CartEntryLineItemChallengeCheckConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartEntryLineItemChallengeCheckEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CartEntryLineItemChallengeCheckPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemChallengeCheckEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemChallengeCheckEdge'] = ResolversParentTypes['CartEntryLineItemChallengeCheckEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['CartEntryLineItemChallengeCheck']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemChallengeCheckPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemChallengeCheckPageInfo'] = ResolversParentTypes['CartEntryLineItemChallengeCheckPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemConnection'] = ResolversParentTypes['CartEntryLineItemConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartEntryLineItemEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CartEntryLineItemPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemEdge'] = ResolversParentTypes['CartEntryLineItemEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEntryLineItemPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEntryLineItemPageInfo'] = ResolversParentTypes['CartEntryLineItemPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductLineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductLineItem'] = ResolversParentTypes['CartProductLineItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  syncWithShopify?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductLineItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductLineItemConnection'] = ResolversParentTypes['CartProductLineItemConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartProductLineItemEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CartProductLineItemPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductLineItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductLineItemEdge'] = ResolversParentTypes['CartProductLineItemEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['CartProductLineItem']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductLineItemPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductLineItemPageInfo'] = ResolversParentTypes['CartProductLineItemPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntry'] = ResolversParentTypes['ChallengeEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  target?: Resolver<ResolversTypes['ChallengeTarget'], ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgressConnection']>, ParentType, ContextType, RequireFields<ChallengeEntryProgressArgs, never>>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withMedal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  personalisedMedal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  personalisedMedalTargetValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceCartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  overrideChallengeTargetValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  closed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monthName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalProgress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalProgressWithMetric?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  forGuest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  totalProgressPercentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayNameWithProfile?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eomEmailTag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailTags?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryConnection'] = ResolversParentTypes['ChallengeEntryConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChallengeEntryEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ChallengeEntryPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryEdge'] = ResolversParentTypes['ChallengeEntryEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ChallengeEntry']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryOption'] = ResolversParentTypes['ChallengeEntryOption']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  normalMedalPricing?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  personalisedMedalPricing?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  personalisedMedalPricingDifference?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  forChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryOptionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryOptionConnection'] = ResolversParentTypes['ChallengeEntryOptionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChallengeEntryOptionEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ChallengeEntryOptionPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryOptionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryOptionEdge'] = ResolversParentTypes['ChallengeEntryOptionEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ChallengeEntryOption']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryOptionPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryOptionPageInfo'] = ResolversParentTypes['ChallengeEntryOptionPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryPageInfo'] = ResolversParentTypes['ChallengeEntryPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryProgress'] = ResolversParentTypes['ChallengeEntryProgress']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  entry?: Resolver<ResolversTypes['ChallengeEntry'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evidenceDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evidence?: Resolver<Maybe<ResolversTypes['MediaObjectConnection']>, ParentType, ContextType, RequireFields<ChallengeEntryProgressEvidenceArgs, never>>;
  discarded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  progressString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evidenceDateString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryProgressConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryProgressConnection'] = ResolversParentTypes['ChallengeEntryProgressConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChallengeEntryProgressEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ChallengeEntryProgressPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryProgressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryProgressEdge'] = ResolversParentTypes['ChallengeEntryProgressEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgress']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeEntryProgressPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeEntryProgressPageInfo'] = ResolversParentTypes['ChallengeEntryProgressPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTarget'] = ResolversParentTypes['ChallengeTarget']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ChallengeType']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metric?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  valuePeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTargetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTargetConnection'] = ResolversParentTypes['ChallengeTargetConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChallengeTargetEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ChallengeTargetPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTargetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTargetEdge'] = ResolversParentTypes['ChallengeTargetEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ChallengeTarget']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTargetPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTargetPageInfo'] = ResolversParentTypes['ChallengeTargetPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeType'] = ResolversParentTypes['ChallengeType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skuPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isForChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  targets?: Resolver<Maybe<ResolversTypes['ChallengeTargetConnection']>, ParentType, ContextType, RequireFields<ChallengeTypeTargetsArgs, never>>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageFullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageResizableFullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconFullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconFullPathWhite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  forChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTypeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTypeConnection'] = ResolversParentTypes['ChallengeTypeConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ChallengeTypeEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ChallengeTypePageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTypeEdge'] = ResolversParentTypes['ChallengeTypeEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ChallengeType']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTypePageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeTypePageInfo'] = ResolversParentTypes['ChallengeTypePageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryConnection'] = ResolversParentTypes['CountryConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CountryEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CountryPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryEdge'] = ResolversParentTypes['CountryEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryPageInfo'] = ResolversParentTypes['CountryPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  iso?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyConnection'] = ResolversParentTypes['CurrencyConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CurrencyEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CurrencyPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyEdge'] = ResolversParentTypes['CurrencyEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyPageInfo'] = ResolversParentTypes['CurrencyPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailInSystemCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailInSystemCheck'] = ResolversParentTypes['EmailInSystemCheck']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailInSystemCheckConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailInSystemCheckConnection'] = ResolversParentTypes['EmailInSystemCheckConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EmailInSystemCheckEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['EmailInSystemCheckPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailInSystemCheckEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailInSystemCheckEdge'] = ResolversParentTypes['EmailInSystemCheckEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['EmailInSystemCheck']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailInSystemCheckPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailInSystemCheckPageInfo'] = ResolversParentTypes['EmailInSystemCheckPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenderConnection'] = ResolversParentTypes['GenderConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenderEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['GenderPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenderEdge'] = ResolversParentTypes['GenderEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenderPageInfo'] = ResolversParentTypes['GenderPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IterableScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Iterable'], any> {
  name: 'Iterable';
}

export type MediaObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaObject'] = ResolversParentTypes['MediaObject']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  contentUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  s3Region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  s3Bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaObjectConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaObjectConnection'] = ResolversParentTypes['MediaObjectConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaObjectEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['MediaObjectPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaObjectEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaObjectEdge'] = ResolversParentTypes['MediaObjectEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['MediaObject']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaObjectPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaObjectPageInfo'] = ResolversParentTypes['MediaObjectPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUserProfile?: Resolver<Maybe<ResolversTypes['createUserProfilePayload']>, ParentType, ContextType, RequireFields<MutationCreateUserProfileArgs, 'input'>>;
  updateUserProfile?: Resolver<Maybe<ResolversTypes['updateUserProfilePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserProfileArgs, 'input'>>;
  deleteUserProfile?: Resolver<Maybe<ResolversTypes['deleteUserProfilePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserProfileArgs, 'input'>>;
  createCartProductLineItem?: Resolver<Maybe<ResolversTypes['createCartProductLineItemPayload']>, ParentType, ContextType, RequireFields<MutationCreateCartProductLineItemArgs, 'input'>>;
  updateCartProductLineItem?: Resolver<Maybe<ResolversTypes['updateCartProductLineItemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCartProductLineItemArgs, 'input'>>;
  deleteCartProductLineItem?: Resolver<Maybe<ResolversTypes['deleteCartProductLineItemPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCartProductLineItemArgs, 'input'>>;
  updateChallengeEntry?: Resolver<Maybe<ResolversTypes['updateChallengeEntryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateChallengeEntryArgs, 'input'>>;
  deleteChallengeEntry?: Resolver<Maybe<ResolversTypes['deleteChallengeEntryPayload']>, ParentType, ContextType, RequireFields<MutationDeleteChallengeEntryArgs, 'input'>>;
  createChallengeEntryProgress?: Resolver<Maybe<ResolversTypes['createChallengeEntryProgressPayload']>, ParentType, ContextType, RequireFields<MutationCreateChallengeEntryProgressArgs, 'input'>>;
  updateChallengeEntryProgress?: Resolver<Maybe<ResolversTypes['updateChallengeEntryProgressPayload']>, ParentType, ContextType, RequireFields<MutationUpdateChallengeEntryProgressArgs, 'input'>>;
  deleteChallengeEntryProgress?: Resolver<Maybe<ResolversTypes['deleteChallengeEntryProgressPayload']>, ParentType, ContextType, RequireFields<MutationDeleteChallengeEntryProgressArgs, 'input'>>;
  deleteProductImage?: Resolver<Maybe<ResolversTypes['deleteProductImagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteProductImageArgs, 'input'>>;
  updateProductImage?: Resolver<Maybe<ResolversTypes['updateProductImagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateProductImageArgs, 'input'>>;
  createProductImage?: Resolver<Maybe<ResolversTypes['createProductImagePayload']>, ParentType, ContextType, RequireFields<MutationCreateProductImageArgs, 'input'>>;
  deleteProductCollection?: Resolver<Maybe<ResolversTypes['deleteProductCollectionPayload']>, ParentType, ContextType, RequireFields<MutationDeleteProductCollectionArgs, 'input'>>;
  updateProductCollection?: Resolver<Maybe<ResolversTypes['updateProductCollectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateProductCollectionArgs, 'input'>>;
  createProductCollection?: Resolver<Maybe<ResolversTypes['createProductCollectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateProductCollectionArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['updateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  createCartEntryLineItem?: Resolver<Maybe<ResolversTypes['createCartEntryLineItemPayload']>, ParentType, ContextType, RequireFields<MutationCreateCartEntryLineItemArgs, 'input'>>;
  updateCartEntryLineItem?: Resolver<Maybe<ResolversTypes['updateCartEntryLineItemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCartEntryLineItemArgs, 'input'>>;
  deleteCartEntryLineItem?: Resolver<Maybe<ResolversTypes['deleteCartEntryLineItemPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCartEntryLineItemArgs, 'input'>>;
  deleteAnnualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['deleteAnnualPassPurchasablePricePayload']>, ParentType, ContextType, RequireFields<MutationDeleteAnnualPassPurchasablePriceArgs, 'input'>>;
  updateAnnualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['updateAnnualPassPurchasablePricePayload']>, ParentType, ContextType, RequireFields<MutationUpdateAnnualPassPurchasablePriceArgs, 'input'>>;
  createAnnualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['createAnnualPassPurchasablePricePayload']>, ParentType, ContextType, RequireFields<MutationCreateAnnualPassPurchasablePriceArgs, 'input'>>;
  createCart?: Resolver<Maybe<ResolversTypes['createCartPayload']>, ParentType, ContextType, RequireFields<MutationCreateCartArgs, 'input'>>;
  updateCart?: Resolver<Maybe<ResolversTypes['updateCartPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCartArgs, 'input'>>;
  deleteCart?: Resolver<Maybe<ResolversTypes['deleteCartPayload']>, ParentType, ContextType, RequireFields<MutationDeleteCartArgs, 'input'>>;
  uploadMediaObject?: Resolver<Maybe<ResolversTypes['uploadMediaObjectPayload']>, ParentType, ContextType, RequireFields<MutationUploadMediaObjectArgs, 'input'>>;
  updateGender?: Resolver<Maybe<ResolversTypes['updateGenderPayload']>, ParentType, ContextType, RequireFields<MutationUpdateGenderArgs, 'input'>>;
  updateUnauthChallengeEntry?: Resolver<Maybe<ResolversTypes['updateUnauthChallengeEntryPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUnauthChallengeEntryArgs, 'input'>>;
  createUserAddress?: Resolver<Maybe<ResolversTypes['createUserAddressPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserAddressArgs, 'input'>>;
  updateUserAddress?: Resolver<Maybe<ResolversTypes['updateUserAddressPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserAddressArgs, 'input'>>;
  createAnnualPassCart?: Resolver<Maybe<ResolversTypes['createAnnualPassCartPayload']>, ParentType, ContextType, RequireFields<MutationCreateAnnualPassCartArgs, 'input'>>;
  updateAnnualPassCart?: Resolver<Maybe<ResolversTypes['updateAnnualPassCartPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAnnualPassCartArgs, 'input'>>;
  deleteAnnualPassCart?: Resolver<Maybe<ResolversTypes['deleteAnnualPassCartPayload']>, ParentType, ContextType, RequireFields<MutationDeleteAnnualPassCartArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'AnnualPass' | 'AnnualPassCart' | 'AnnualPassPurchasable' | 'AnnualPassPurchasablePrice' | 'AvailableEntryMonth' | 'Cart' | 'CartEntryLineItem' | 'CartEntryLineItemChallengeCheck' | 'CartProductLineItem' | 'ChallengeEntry' | 'ChallengeEntryOption' | 'ChallengeEntryProgress' | 'ChallengeTarget' | 'ChallengeType' | 'Country' | 'Currency' | 'EmailInSystemCheck' | 'Gender' | 'MediaObject' | 'Product' | 'ProductCollection' | 'ProductImage' | 'PublicConfig' | 'UnauthChallengeEntry' | 'User' | 'UserAddress' | 'UserProfile', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  variants?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  options?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollection'] = ResolversParentTypes['ProductCollection']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionConnection'] = ResolversParentTypes['ProductCollectionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCollectionEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ProductCollectionPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionEdge'] = ResolversParentTypes['ProductCollectionEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionPageInfo'] = ResolversParentTypes['ProductCollectionPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ProductPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImageConnection'] = ResolversParentTypes['ProductImageConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductImageEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ProductImagePageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImageEdge'] = ResolversParentTypes['ProductImageEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImagePageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImagePageInfo'] = ResolversParentTypes['ProductImagePageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPageInfo'] = ResolversParentTypes['ProductPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicConfig'] = ResolversParentTypes['PublicConfig']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicConfigConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicConfigConnection'] = ResolversParentTypes['PublicConfigConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicConfigEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PublicConfigPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicConfigEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicConfigEdge'] = ResolversParentTypes['PublicConfigEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['PublicConfig']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicConfigPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicConfigPageInfo'] = ResolversParentTypes['PublicConfigPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType, RequireFields<QueryUserProfileArgs, 'id'>>;
  userProfiles?: Resolver<Maybe<ResolversTypes['UserProfileConnection']>, ParentType, ContextType, RequireFields<QueryUserProfilesArgs, never>>;
  products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  emailInSystemChecks?: Resolver<Maybe<ResolversTypes['EmailInSystemCheckConnection']>, ParentType, ContextType, RequireFields<QueryEmailInSystemChecksArgs, never>>;
  cartEntryLineItemChallengeChecks?: Resolver<Maybe<ResolversTypes['CartEntryLineItemChallengeCheckConnection']>, ParentType, ContextType, RequireFields<QueryCartEntryLineItemChallengeChecksArgs, never>>;
  cartProductLineItem?: Resolver<Maybe<ResolversTypes['CartProductLineItem']>, ParentType, ContextType, RequireFields<QueryCartProductLineItemArgs, 'id'>>;
  cartProductLineItems?: Resolver<Maybe<ResolversTypes['CartProductLineItemConnection']>, ParentType, ContextType, RequireFields<QueryCartProductLineItemsArgs, never>>;
  challengeEntry?: Resolver<Maybe<ResolversTypes['ChallengeEntry']>, ParentType, ContextType, RequireFields<QueryChallengeEntryArgs, 'id'>>;
  challengeEntries?: Resolver<Maybe<ResolversTypes['ChallengeEntryConnection']>, ParentType, ContextType, RequireFields<QueryChallengeEntriesArgs, never>>;
  challengeEntryProgress?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgress']>, ParentType, ContextType, RequireFields<QueryChallengeEntryProgressArgs, 'id'>>;
  challengeEntryProgresses?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgressConnection']>, ParentType, ContextType, RequireFields<QueryChallengeEntryProgressesArgs, never>>;
  challengeTarget?: Resolver<Maybe<ResolversTypes['ChallengeTarget']>, ParentType, ContextType, RequireFields<QueryChallengeTargetArgs, 'id'>>;
  challengeTargets?: Resolver<Maybe<ResolversTypes['ChallengeTargetConnection']>, ParentType, ContextType, RequireFields<QueryChallengeTargetsArgs, never>>;
  availableEntryMonths?: Resolver<Maybe<ResolversTypes['AvailableEntryMonthConnection']>, ParentType, ContextType, RequireFields<QueryAvailableEntryMonthsArgs, never>>;
  availableEntryMonth?: Resolver<Maybe<ResolversTypes['AvailableEntryMonth']>, ParentType, ContextType, RequireFields<QueryAvailableEntryMonthArgs, 'id'>>;
  productImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType, RequireFields<QueryProductImageArgs, 'id'>>;
  productImages?: Resolver<Maybe<ResolversTypes['ProductImageConnection']>, ParentType, ContextType, RequireFields<QueryProductImagesArgs, never>>;
  annualPass?: Resolver<Maybe<ResolversTypes['AnnualPass']>, ParentType, ContextType, RequireFields<QueryAnnualPassArgs, 'id'>>;
  annualPasses?: Resolver<Maybe<ResolversTypes['AnnualPassConnection']>, ParentType, ContextType, RequireFields<QueryAnnualPassesArgs, never>>;
  productCollection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType, RequireFields<QueryProductCollectionArgs, 'id'>>;
  productCollections?: Resolver<Maybe<ResolversTypes['ProductCollectionConnection']>, ParentType, ContextType, RequireFields<QueryProductCollectionsArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
  countries?: Resolver<Maybe<ResolversTypes['CountryConnection']>, ParentType, ContextType, RequireFields<QueryCountriesArgs, never>>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<QueryCountryArgs, 'id'>>;
  challengeEntryOptions?: Resolver<Maybe<ResolversTypes['ChallengeEntryOptionConnection']>, ParentType, ContextType, RequireFields<QueryChallengeEntryOptionsArgs, never>>;
  challengeEntryOption?: Resolver<Maybe<ResolversTypes['ChallengeEntryOption']>, ParentType, ContextType, RequireFields<QueryChallengeEntryOptionArgs, 'id'>>;
  cartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType, RequireFields<QueryCartEntryLineItemArgs, 'id'>>;
  annualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePrice']>, ParentType, ContextType, RequireFields<QueryAnnualPassPurchasablePriceArgs, 'id'>>;
  annualPassPurchasablePrices?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePriceConnection']>, ParentType, ContextType, RequireFields<QueryAnnualPassPurchasablePricesArgs, never>>;
  currencies?: Resolver<Maybe<ResolversTypes['CurrencyConnection']>, ParentType, ContextType, RequireFields<QueryCurrenciesArgs, never>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QueryCurrencyArgs, 'id'>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'id'>>;
  publicConfigs?: Resolver<Maybe<ResolversTypes['PublicConfigConnection']>, ParentType, ContextType, RequireFields<QueryPublicConfigsArgs, never>>;
  mediaObjects?: Resolver<Maybe<ResolversTypes['MediaObjectConnection']>, ParentType, ContextType, RequireFields<QueryMediaObjectsArgs, never>>;
  mediaObject?: Resolver<Maybe<ResolversTypes['MediaObject']>, ParentType, ContextType, RequireFields<QueryMediaObjectArgs, 'id'>>;
  challengeType?: Resolver<Maybe<ResolversTypes['ChallengeType']>, ParentType, ContextType, RequireFields<QueryChallengeTypeArgs, 'id'>>;
  challengeTypes?: Resolver<Maybe<ResolversTypes['ChallengeTypeConnection']>, ParentType, ContextType, RequireFields<QueryChallengeTypesArgs, never>>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType, RequireFields<QueryGenderArgs, 'id'>>;
  genders?: Resolver<Maybe<ResolversTypes['GenderConnection']>, ParentType, ContextType, RequireFields<QueryGendersArgs, never>>;
  annualPassPurchasables?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasableConnection']>, ParentType, ContextType, RequireFields<QueryAnnualPassPurchasablesArgs, never>>;
  unauthChallengeEntry?: Resolver<Maybe<ResolversTypes['UnauthChallengeEntry']>, ParentType, ContextType, RequireFields<QueryUnauthChallengeEntryArgs, 'id'>>;
  unauthChallengeEntries?: Resolver<Maybe<ResolversTypes['UnauthChallengeEntryConnection']>, ParentType, ContextType, RequireFields<QueryUnauthChallengeEntriesArgs, never>>;
  userAddress?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType, RequireFields<QueryUserAddressArgs, 'id'>>;
  userAddresses?: Resolver<Maybe<ResolversTypes['UserAddressConnection']>, ParentType, ContextType, RequireFields<QueryUserAddressesArgs, never>>;
  annualPassCart?: Resolver<Maybe<ResolversTypes['AnnualPassCart']>, ParentType, ContextType, RequireFields<QueryAnnualPassCartArgs, 'id'>>;
};

export type UnauthChallengeEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnauthChallengeEntry'] = ResolversParentTypes['UnauthChallengeEntry']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userUuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entryUuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['ChallengeTarget'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  withMedal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  personalisedMedal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  personalisedMedalTargetValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceCartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  totalProgress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetValue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalProgressPercentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnauthChallengeEntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnauthChallengeEntryConnection'] = ResolversParentTypes['UnauthChallengeEntryConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UnauthChallengeEntryEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['UnauthChallengeEntryPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnauthChallengeEntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnauthChallengeEntryEdge'] = ResolversParentTypes['UnauthChallengeEntryEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['UnauthChallengeEntry']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnauthChallengeEntryPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnauthChallengeEntryPageInfo'] = ResolversParentTypes['UnauthChallengeEntryPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  profiles?: Resolver<Maybe<ResolversTypes['UserProfileConnection']>, ParentType, ContextType, RequireFields<UserProfilesArgs, never>>;
  addresses?: Resolver<Maybe<ResolversTypes['UserAddressConnection']>, ParentType, ContextType, RequireFields<UserAddressesArgs, never>>;
  annualPasses?: Resolver<Maybe<ResolversTypes['AnnualPassConnection']>, ParentType, ContextType, RequireFields<UserAnnualPassesArgs, never>>;
  tosAccepted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyPreference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryIso?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startedAsGuest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  requirements?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddress'] = ResolversParentTypes['UserAddress']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  archived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressConnection'] = ResolversParentTypes['UserAddressConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAddressEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['UserAddressPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressEdge'] = ResolversParentTypes['UserAddressEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAddressPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAddressPageInfo'] = ResolversParentTypes['UserAddressPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['UserPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPageInfo'] = ResolversParentTypes['UserPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOwnerProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDefaultProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  challengeEntries?: Resolver<Maybe<ResolversTypes['ChallengeEntryConnection']>, ParentType, ContextType, RequireFields<UserProfileChallengeEntriesArgs, never>>;
  cartEntryLineItems?: Resolver<Maybe<ResolversTypes['CartEntryLineItemConnection']>, ParentType, ContextType, RequireFields<UserProfileCartEntryLineItemsArgs, never>>;
  addresses?: Resolver<Maybe<ResolversTypes['UserAddressConnection']>, ParentType, ContextType, RequireFields<UserProfileAddressesArgs, never>>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  annualPasses?: Resolver<Maybe<ResolversTypes['AnnualPassConnection']>, ParentType, ContextType, RequireFields<UserProfileAnnualPassesArgs, never>>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initials?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ageInYears?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isChild?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exportData?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  exportDataWithRelations?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  requirements?: Resolver<ResolversTypes['Iterable'], ParentType, ContextType>;
  uuidString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfileConnection'] = ResolversParentTypes['UserProfileConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserProfileEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['UserProfilePageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfileEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfileEdge'] = ResolversParentTypes['UserProfileEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserProfilePageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfilePageInfo'] = ResolversParentTypes['UserProfilePageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAnnualPassCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createAnnualPassCartPayload'] = ResolversParentTypes['createAnnualPassCartPayload']> = {
  annualPassCart?: Resolver<Maybe<ResolversTypes['AnnualPassCart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAnnualPassPurchasablePricePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createAnnualPassPurchasablePricePayload'] = ResolversParentTypes['createAnnualPassPurchasablePricePayload']> = {
  annualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePrice']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCartEntryLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createCartEntryLineItemPayload'] = ResolversParentTypes['createCartEntryLineItemPayload']> = {
  cartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createCartPayload'] = ResolversParentTypes['createCartPayload']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCartProductLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createCartProductLineItemPayload'] = ResolversParentTypes['createCartProductLineItemPayload']> = {
  cartProductLineItem?: Resolver<Maybe<ResolversTypes['CartProductLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateChallengeEntryProgressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createChallengeEntryProgressPayload'] = ResolversParentTypes['createChallengeEntryProgressPayload']> = {
  challengeEntryProgress?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgress']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createProductCollectionPayload'] = ResolversParentTypes['createProductCollectionPayload']> = {
  productCollection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductImagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createProductImagePayload'] = ResolversParentTypes['createProductImagePayload']> = {
  productImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserAddressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createUserAddressPayload'] = ResolversParentTypes['createUserAddressPayload']> = {
  userAddress?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserProfilePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createUserProfilePayload'] = ResolversParentTypes['createUserProfilePayload']> = {
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAnnualPassCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAnnualPassCartPayload'] = ResolversParentTypes['deleteAnnualPassCartPayload']> = {
  annualPassCart?: Resolver<Maybe<ResolversTypes['AnnualPassCart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAnnualPassPurchasablePricePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteAnnualPassPurchasablePricePayload'] = ResolversParentTypes['deleteAnnualPassPurchasablePricePayload']> = {
  annualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePrice']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCartEntryLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCartEntryLineItemPayload'] = ResolversParentTypes['deleteCartEntryLineItemPayload']> = {
  cartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCartPayload'] = ResolversParentTypes['deleteCartPayload']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCartProductLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteCartProductLineItemPayload'] = ResolversParentTypes['deleteCartProductLineItemPayload']> = {
  cartProductLineItem?: Resolver<Maybe<ResolversTypes['CartProductLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteChallengeEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteChallengeEntryPayload'] = ResolversParentTypes['deleteChallengeEntryPayload']> = {
  challengeEntry?: Resolver<Maybe<ResolversTypes['ChallengeEntry']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteChallengeEntryProgressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteChallengeEntryProgressPayload'] = ResolversParentTypes['deleteChallengeEntryProgressPayload']> = {
  challengeEntryProgress?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgress']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteProductCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteProductCollectionPayload'] = ResolversParentTypes['deleteProductCollectionPayload']> = {
  productCollection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteProductImagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteProductImagePayload'] = ResolversParentTypes['deleteProductImagePayload']> = {
  productImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserProfilePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteUserProfilePayload'] = ResolversParentTypes['deleteUserProfilePayload']> = {
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnnualPassCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAnnualPassCartPayload'] = ResolversParentTypes['updateAnnualPassCartPayload']> = {
  annualPassCart?: Resolver<Maybe<ResolversTypes['AnnualPassCart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnnualPassPurchasablePricePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateAnnualPassPurchasablePricePayload'] = ResolversParentTypes['updateAnnualPassPurchasablePricePayload']> = {
  annualPassPurchasablePrice?: Resolver<Maybe<ResolversTypes['AnnualPassPurchasablePrice']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCartEntryLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCartEntryLineItemPayload'] = ResolversParentTypes['updateCartEntryLineItemPayload']> = {
  cartEntryLineItem?: Resolver<Maybe<ResolversTypes['CartEntryLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCartPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCartPayload'] = ResolversParentTypes['updateCartPayload']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCartProductLineItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateCartProductLineItemPayload'] = ResolversParentTypes['updateCartProductLineItemPayload']> = {
  cartProductLineItem?: Resolver<Maybe<ResolversTypes['CartProductLineItem']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateChallengeEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateChallengeEntryPayload'] = ResolversParentTypes['updateChallengeEntryPayload']> = {
  challengeEntry?: Resolver<Maybe<ResolversTypes['ChallengeEntry']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateChallengeEntryProgressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateChallengeEntryProgressPayload'] = ResolversParentTypes['updateChallengeEntryProgressPayload']> = {
  challengeEntryProgress?: Resolver<Maybe<ResolversTypes['ChallengeEntryProgress']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGenderPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateGenderPayload'] = ResolversParentTypes['updateGenderPayload']> = {
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateProductCollectionPayload'] = ResolversParentTypes['updateProductCollectionPayload']> = {
  productCollection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductImagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateProductImagePayload'] = ResolversParentTypes['updateProductImagePayload']> = {
  productImage?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUnauthChallengeEntryPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUnauthChallengeEntryPayload'] = ResolversParentTypes['updateUnauthChallengeEntryPayload']> = {
  unauthChallengeEntry?: Resolver<Maybe<ResolversTypes['UnauthChallengeEntry']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserAddressPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUserAddressPayload'] = ResolversParentTypes['updateUserAddressPayload']> = {
  userAddress?: Resolver<Maybe<ResolversTypes['UserAddress']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUserPayload'] = ResolversParentTypes['updateUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserProfilePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUserProfilePayload'] = ResolversParentTypes['updateUserProfilePayload']> = {
  userProfile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadMediaObjectPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['uploadMediaObjectPayload'] = ResolversParentTypes['uploadMediaObjectPayload']> = {
  mediaObject?: Resolver<Maybe<ResolversTypes['MediaObject']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AnnualPass?: AnnualPassResolvers<ContextType>;
  AnnualPassCart?: AnnualPassCartResolvers<ContextType>;
  AnnualPassConnection?: AnnualPassConnectionResolvers<ContextType>;
  AnnualPassEdge?: AnnualPassEdgeResolvers<ContextType>;
  AnnualPassPageInfo?: AnnualPassPageInfoResolvers<ContextType>;
  AnnualPassPurchasable?: AnnualPassPurchasableResolvers<ContextType>;
  AnnualPassPurchasableConnection?: AnnualPassPurchasableConnectionResolvers<ContextType>;
  AnnualPassPurchasableEdge?: AnnualPassPurchasableEdgeResolvers<ContextType>;
  AnnualPassPurchasablePageInfo?: AnnualPassPurchasablePageInfoResolvers<ContextType>;
  AnnualPassPurchasablePrice?: AnnualPassPurchasablePriceResolvers<ContextType>;
  AnnualPassPurchasablePriceConnection?: AnnualPassPurchasablePriceConnectionResolvers<ContextType>;
  AnnualPassPurchasablePriceEdge?: AnnualPassPurchasablePriceEdgeResolvers<ContextType>;
  AnnualPassPurchasablePricePageInfo?: AnnualPassPurchasablePricePageInfoResolvers<ContextType>;
  AvailableEntryMonth?: AvailableEntryMonthResolvers<ContextType>;
  AvailableEntryMonthConnection?: AvailableEntryMonthConnectionResolvers<ContextType>;
  AvailableEntryMonthEdge?: AvailableEntryMonthEdgeResolvers<ContextType>;
  AvailableEntryMonthPageInfo?: AvailableEntryMonthPageInfoResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartEntryLineItem?: CartEntryLineItemResolvers<ContextType>;
  CartEntryLineItemChallengeCheck?: CartEntryLineItemChallengeCheckResolvers<ContextType>;
  CartEntryLineItemChallengeCheckConnection?: CartEntryLineItemChallengeCheckConnectionResolvers<ContextType>;
  CartEntryLineItemChallengeCheckEdge?: CartEntryLineItemChallengeCheckEdgeResolvers<ContextType>;
  CartEntryLineItemChallengeCheckPageInfo?: CartEntryLineItemChallengeCheckPageInfoResolvers<ContextType>;
  CartEntryLineItemConnection?: CartEntryLineItemConnectionResolvers<ContextType>;
  CartEntryLineItemEdge?: CartEntryLineItemEdgeResolvers<ContextType>;
  CartEntryLineItemPageInfo?: CartEntryLineItemPageInfoResolvers<ContextType>;
  CartProductLineItem?: CartProductLineItemResolvers<ContextType>;
  CartProductLineItemConnection?: CartProductLineItemConnectionResolvers<ContextType>;
  CartProductLineItemEdge?: CartProductLineItemEdgeResolvers<ContextType>;
  CartProductLineItemPageInfo?: CartProductLineItemPageInfoResolvers<ContextType>;
  ChallengeEntry?: ChallengeEntryResolvers<ContextType>;
  ChallengeEntryConnection?: ChallengeEntryConnectionResolvers<ContextType>;
  ChallengeEntryEdge?: ChallengeEntryEdgeResolvers<ContextType>;
  ChallengeEntryOption?: ChallengeEntryOptionResolvers<ContextType>;
  ChallengeEntryOptionConnection?: ChallengeEntryOptionConnectionResolvers<ContextType>;
  ChallengeEntryOptionEdge?: ChallengeEntryOptionEdgeResolvers<ContextType>;
  ChallengeEntryOptionPageInfo?: ChallengeEntryOptionPageInfoResolvers<ContextType>;
  ChallengeEntryPageInfo?: ChallengeEntryPageInfoResolvers<ContextType>;
  ChallengeEntryProgress?: ChallengeEntryProgressResolvers<ContextType>;
  ChallengeEntryProgressConnection?: ChallengeEntryProgressConnectionResolvers<ContextType>;
  ChallengeEntryProgressEdge?: ChallengeEntryProgressEdgeResolvers<ContextType>;
  ChallengeEntryProgressPageInfo?: ChallengeEntryProgressPageInfoResolvers<ContextType>;
  ChallengeTarget?: ChallengeTargetResolvers<ContextType>;
  ChallengeTargetConnection?: ChallengeTargetConnectionResolvers<ContextType>;
  ChallengeTargetEdge?: ChallengeTargetEdgeResolvers<ContextType>;
  ChallengeTargetPageInfo?: ChallengeTargetPageInfoResolvers<ContextType>;
  ChallengeType?: ChallengeTypeResolvers<ContextType>;
  ChallengeTypeConnection?: ChallengeTypeConnectionResolvers<ContextType>;
  ChallengeTypeEdge?: ChallengeTypeEdgeResolvers<ContextType>;
  ChallengeTypePageInfo?: ChallengeTypePageInfoResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryConnection?: CountryConnectionResolvers<ContextType>;
  CountryEdge?: CountryEdgeResolvers<ContextType>;
  CountryPageInfo?: CountryPageInfoResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyConnection?: CurrencyConnectionResolvers<ContextType>;
  CurrencyEdge?: CurrencyEdgeResolvers<ContextType>;
  CurrencyPageInfo?: CurrencyPageInfoResolvers<ContextType>;
  EmailInSystemCheck?: EmailInSystemCheckResolvers<ContextType>;
  EmailInSystemCheckConnection?: EmailInSystemCheckConnectionResolvers<ContextType>;
  EmailInSystemCheckEdge?: EmailInSystemCheckEdgeResolvers<ContextType>;
  EmailInSystemCheckPageInfo?: EmailInSystemCheckPageInfoResolvers<ContextType>;
  Gender?: GenderResolvers<ContextType>;
  GenderConnection?: GenderConnectionResolvers<ContextType>;
  GenderEdge?: GenderEdgeResolvers<ContextType>;
  GenderPageInfo?: GenderPageInfoResolvers<ContextType>;
  Iterable?: GraphQLScalarType;
  MediaObject?: MediaObjectResolvers<ContextType>;
  MediaObjectConnection?: MediaObjectConnectionResolvers<ContextType>;
  MediaObjectEdge?: MediaObjectEdgeResolvers<ContextType>;
  MediaObjectPageInfo?: MediaObjectPageInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductCollection?: ProductCollectionResolvers<ContextType>;
  ProductCollectionConnection?: ProductCollectionConnectionResolvers<ContextType>;
  ProductCollectionEdge?: ProductCollectionEdgeResolvers<ContextType>;
  ProductCollectionPageInfo?: ProductCollectionPageInfoResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  ProductImageConnection?: ProductImageConnectionResolvers<ContextType>;
  ProductImageEdge?: ProductImageEdgeResolvers<ContextType>;
  ProductImagePageInfo?: ProductImagePageInfoResolvers<ContextType>;
  ProductPageInfo?: ProductPageInfoResolvers<ContextType>;
  PublicConfig?: PublicConfigResolvers<ContextType>;
  PublicConfigConnection?: PublicConfigConnectionResolvers<ContextType>;
  PublicConfigEdge?: PublicConfigEdgeResolvers<ContextType>;
  PublicConfigPageInfo?: PublicConfigPageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UnauthChallengeEntry?: UnauthChallengeEntryResolvers<ContextType>;
  UnauthChallengeEntryConnection?: UnauthChallengeEntryConnectionResolvers<ContextType>;
  UnauthChallengeEntryEdge?: UnauthChallengeEntryEdgeResolvers<ContextType>;
  UnauthChallengeEntryPageInfo?: UnauthChallengeEntryPageInfoResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAddress?: UserAddressResolvers<ContextType>;
  UserAddressConnection?: UserAddressConnectionResolvers<ContextType>;
  UserAddressEdge?: UserAddressEdgeResolvers<ContextType>;
  UserAddressPageInfo?: UserAddressPageInfoResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserPageInfo?: UserPageInfoResolvers<ContextType>;
  UserProfile?: UserProfileResolvers<ContextType>;
  UserProfileConnection?: UserProfileConnectionResolvers<ContextType>;
  UserProfileEdge?: UserProfileEdgeResolvers<ContextType>;
  UserProfilePageInfo?: UserProfilePageInfoResolvers<ContextType>;
  createAnnualPassCartPayload?: CreateAnnualPassCartPayloadResolvers<ContextType>;
  createAnnualPassPurchasablePricePayload?: CreateAnnualPassPurchasablePricePayloadResolvers<ContextType>;
  createCartEntryLineItemPayload?: CreateCartEntryLineItemPayloadResolvers<ContextType>;
  createCartPayload?: CreateCartPayloadResolvers<ContextType>;
  createCartProductLineItemPayload?: CreateCartProductLineItemPayloadResolvers<ContextType>;
  createChallengeEntryProgressPayload?: CreateChallengeEntryProgressPayloadResolvers<ContextType>;
  createProductCollectionPayload?: CreateProductCollectionPayloadResolvers<ContextType>;
  createProductImagePayload?: CreateProductImagePayloadResolvers<ContextType>;
  createUserAddressPayload?: CreateUserAddressPayloadResolvers<ContextType>;
  createUserProfilePayload?: CreateUserProfilePayloadResolvers<ContextType>;
  deleteAnnualPassCartPayload?: DeleteAnnualPassCartPayloadResolvers<ContextType>;
  deleteAnnualPassPurchasablePricePayload?: DeleteAnnualPassPurchasablePricePayloadResolvers<ContextType>;
  deleteCartEntryLineItemPayload?: DeleteCartEntryLineItemPayloadResolvers<ContextType>;
  deleteCartPayload?: DeleteCartPayloadResolvers<ContextType>;
  deleteCartProductLineItemPayload?: DeleteCartProductLineItemPayloadResolvers<ContextType>;
  deleteChallengeEntryPayload?: DeleteChallengeEntryPayloadResolvers<ContextType>;
  deleteChallengeEntryProgressPayload?: DeleteChallengeEntryProgressPayloadResolvers<ContextType>;
  deleteProductCollectionPayload?: DeleteProductCollectionPayloadResolvers<ContextType>;
  deleteProductImagePayload?: DeleteProductImagePayloadResolvers<ContextType>;
  deleteUserProfilePayload?: DeleteUserProfilePayloadResolvers<ContextType>;
  updateAnnualPassCartPayload?: UpdateAnnualPassCartPayloadResolvers<ContextType>;
  updateAnnualPassPurchasablePricePayload?: UpdateAnnualPassPurchasablePricePayloadResolvers<ContextType>;
  updateCartEntryLineItemPayload?: UpdateCartEntryLineItemPayloadResolvers<ContextType>;
  updateCartPayload?: UpdateCartPayloadResolvers<ContextType>;
  updateCartProductLineItemPayload?: UpdateCartProductLineItemPayloadResolvers<ContextType>;
  updateChallengeEntryPayload?: UpdateChallengeEntryPayloadResolvers<ContextType>;
  updateChallengeEntryProgressPayload?: UpdateChallengeEntryProgressPayloadResolvers<ContextType>;
  updateGenderPayload?: UpdateGenderPayloadResolvers<ContextType>;
  updateProductCollectionPayload?: UpdateProductCollectionPayloadResolvers<ContextType>;
  updateProductImagePayload?: UpdateProductImagePayloadResolvers<ContextType>;
  updateUnauthChallengeEntryPayload?: UpdateUnauthChallengeEntryPayloadResolvers<ContextType>;
  updateUserAddressPayload?: UpdateUserAddressPayloadResolvers<ContextType>;
  updateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  updateUserProfilePayload?: UpdateUserProfilePayloadResolvers<ContextType>;
  uploadMediaObjectPayload?: UploadMediaObjectPayloadResolvers<ContextType>;
};



export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const AcceptTandCDocument = gql`
    mutation AcceptTandC($input: updateUserInput!) {
  updateUser(input: $input) {
    user {
      tosAccepted
    }
  }
}
    `;
export type AcceptTandCMutationFn = Apollo.MutationFunction<AcceptTandCMutation, AcceptTandCMutationVariables>;


export function useAcceptTandCMutation(baseOptions?: Apollo.MutationHookOptions<AcceptTandCMutation, AcceptTandCMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptTandCMutation, AcceptTandCMutationVariables>(AcceptTandCDocument, options);
      }
export type AcceptTandCMutationHookResult = ReturnType<typeof useAcceptTandCMutation>;
export type AcceptTandCMutationResult = Apollo.MutationResult<AcceptTandCMutation>;
export type AcceptTandCMutationOptions = Apollo.BaseMutationOptions<AcceptTandCMutation, AcceptTandCMutationVariables>;
export const AddressesDocument = gql`
    query Addresses {
  userAddresses(archived: false) {
    edges {
      node {
        id
        address1
        address2
        city
        province
        zip
        country
        archived
      }
    }
  }
}
    `;


export function useAddressesQuery(baseOptions?: Apollo.QueryHookOptions<AddressesQuery, AddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AddressesQuery, AddressesQueryVariables>(AddressesDocument, options);
      }
export function useAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AddressesQuery, AddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AddressesQuery, AddressesQueryVariables>(AddressesDocument, options);
        }
export type AddressesQueryHookResult = ReturnType<typeof useAddressesQuery>;
export type AddressesLazyQueryHookResult = ReturnType<typeof useAddressesLazyQuery>;
export type AddressesQueryResult = Apollo.QueryResult<AddressesQuery, AddressesQueryVariables>;
export const AllProfilesDocument = gql`
    query AllProfiles {
  userProfiles {
    edges {
      node {
        id
        initials
        isChild
        name
        dateOfBirth
      }
    }
  }
}
    `;


export function useAllProfilesQuery(baseOptions?: Apollo.QueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
      }
export function useAllProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
        }
export type AllProfilesQueryHookResult = ReturnType<typeof useAllProfilesQuery>;
export type AllProfilesLazyQueryHookResult = ReturnType<typeof useAllProfilesLazyQuery>;
export type AllProfilesQueryResult = Apollo.QueryResult<AllProfilesQuery, AllProfilesQueryVariables>;
export const AnnualPassPurchasablesDocument = gql`
    query AnnualPassPurchasables {
  annualPassPurchasables {
    edges {
      node {
        profile {
          id
          name
          initials
        }
        year
        child
        prices
      }
    }
  }
}
    `;


export function useAnnualPassPurchasablesQuery(baseOptions?: Apollo.QueryHookOptions<AnnualPassPurchasablesQuery, AnnualPassPurchasablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnualPassPurchasablesQuery, AnnualPassPurchasablesQueryVariables>(AnnualPassPurchasablesDocument, options);
      }
export function useAnnualPassPurchasablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnualPassPurchasablesQuery, AnnualPassPurchasablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnualPassPurchasablesQuery, AnnualPassPurchasablesQueryVariables>(AnnualPassPurchasablesDocument, options);
        }
export type AnnualPassPurchasablesQueryHookResult = ReturnType<typeof useAnnualPassPurchasablesQuery>;
export type AnnualPassPurchasablesLazyQueryHookResult = ReturnType<typeof useAnnualPassPurchasablesLazyQuery>;
export type AnnualPassPurchasablesQueryResult = Apollo.QueryResult<AnnualPassPurchasablesQuery, AnnualPassPurchasablesQueryVariables>;
export const AnnualPassesDocument = gql`
    query AnnualPasses {
  annualPasses {
    edges {
      node {
        id
        year
        isChild
        created
      }
    }
  }
}
    `;


export function useAnnualPassesQuery(baseOptions?: Apollo.QueryHookOptions<AnnualPassesQuery, AnnualPassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnualPassesQuery, AnnualPassesQueryVariables>(AnnualPassesDocument, options);
      }
export function useAnnualPassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnualPassesQuery, AnnualPassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnualPassesQuery, AnnualPassesQueryVariables>(AnnualPassesDocument, options);
        }
export type AnnualPassesQueryHookResult = ReturnType<typeof useAnnualPassesQuery>;
export type AnnualPassesLazyQueryHookResult = ReturnType<typeof useAnnualPassesLazyQuery>;
export type AnnualPassesQueryResult = Apollo.QueryResult<AnnualPassesQuery, AnnualPassesQueryVariables>;
export const AvailableEntryMonthsDocument = gql`
    query AvailableEntryMonths {
  availableEntryMonths {
    edges {
      node {
        year
        month
        default
        lateEntry
        monthName
        displayName
      }
    }
  }
}
    `;


export function useAvailableEntryMonthsQuery(baseOptions?: Apollo.QueryHookOptions<AvailableEntryMonthsQuery, AvailableEntryMonthsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableEntryMonthsQuery, AvailableEntryMonthsQueryVariables>(AvailableEntryMonthsDocument, options);
      }
export function useAvailableEntryMonthsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableEntryMonthsQuery, AvailableEntryMonthsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableEntryMonthsQuery, AvailableEntryMonthsQueryVariables>(AvailableEntryMonthsDocument, options);
        }
export type AvailableEntryMonthsQueryHookResult = ReturnType<typeof useAvailableEntryMonthsQuery>;
export type AvailableEntryMonthsLazyQueryHookResult = ReturnType<typeof useAvailableEntryMonthsLazyQuery>;
export type AvailableEntryMonthsQueryResult = Apollo.QueryResult<AvailableEntryMonthsQuery, AvailableEntryMonthsQueryVariables>;
export const CartByIdDocument = gql`
    query CartById($id: ID!) {
  cart(id: $id) {
    id
    syncWithShopify
    checkoutUrl
    priceBreakdown
    productLineItems {
      edges {
        node {
          id
          quantity
          variantId
        }
      }
    }
    address {
      address1
      address2
      city
      province
      zip
      country
    }
    entryLineItems {
      edges {
        node {
          id
          personalisedMedal
          profile {
            id
            initials
          }
          year
          month
          challengeTarget {
            id
            type {
              name
              iconFullPath
              iconFullPathWhite
            }
            displayName
          }
        }
      }
    }
  }
}
    `;


export function useCartByIdQuery(baseOptions: Apollo.QueryHookOptions<CartByIdQuery, CartByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartByIdQuery, CartByIdQueryVariables>(CartByIdDocument, options);
      }
export function useCartByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartByIdQuery, CartByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartByIdQuery, CartByIdQueryVariables>(CartByIdDocument, options);
        }
export type CartByIdQueryHookResult = ReturnType<typeof useCartByIdQuery>;
export type CartByIdLazyQueryHookResult = ReturnType<typeof useCartByIdLazyQuery>;
export type CartByIdQueryResult = Apollo.QueryResult<CartByIdQuery, CartByIdQueryVariables>;
export const ChallengeByIdForCompletionDocument = gql`
    query ChallengeByIdForCompletion($id: ID!) {
  challengeEntry(id: $id) {
    personalisedMedal
    personalisedMedalTargetValue
    completed
    month
    year
    target {
      type {
        name
        iconFullPath
        iconFullPathWhite
      }
      value
      metric
      displayName
    }
    targetValue
    totalProgress
    totalProgressPercentage
  }
}
    `;


export function useChallengeByIdForCompletionQuery(baseOptions: Apollo.QueryHookOptions<ChallengeByIdForCompletionQuery, ChallengeByIdForCompletionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeByIdForCompletionQuery, ChallengeByIdForCompletionQueryVariables>(ChallengeByIdForCompletionDocument, options);
      }
export function useChallengeByIdForCompletionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeByIdForCompletionQuery, ChallengeByIdForCompletionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeByIdForCompletionQuery, ChallengeByIdForCompletionQueryVariables>(ChallengeByIdForCompletionDocument, options);
        }
export type ChallengeByIdForCompletionQueryHookResult = ReturnType<typeof useChallengeByIdForCompletionQuery>;
export type ChallengeByIdForCompletionLazyQueryHookResult = ReturnType<typeof useChallengeByIdForCompletionLazyQuery>;
export type ChallengeByIdForCompletionQueryResult = Apollo.QueryResult<ChallengeByIdForCompletionQuery, ChallengeByIdForCompletionQueryVariables>;
export const ChallengeByIdForEditingDocument = gql`
    query ChallengeByIdForEditing($id: ID!) {
  challengeEntry(id: $id) {
    id
    personalisedMedal
    personalisedMedalTargetValue
    completed
    year
    target {
      type {
        name
        iconFullPath
        iconFullPathWhite
        targets {
          edges {
            node {
              id
              value
              metric
              displayName
            }
          }
        }
      }
      id
      value
      metric
      displayName
    }
    totalProgress
    totalProgressPercentage
  }
}
    `;

export function useChallengeByIdForEditingQuery(baseOptions: Apollo.QueryHookOptions<ChallengeByIdForEditingQuery, ChallengeByIdForEditingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeByIdForEditingQuery, ChallengeByIdForEditingQueryVariables>(ChallengeByIdForEditingDocument, options);
      }
export function useChallengeByIdForEditingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeByIdForEditingQuery, ChallengeByIdForEditingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeByIdForEditingQuery, ChallengeByIdForEditingQueryVariables>(ChallengeByIdForEditingDocument, options);
        }
export type ChallengeByIdForEditingQueryHookResult = ReturnType<typeof useChallengeByIdForEditingQuery>;
export type ChallengeByIdForEditingLazyQueryHookResult = ReturnType<typeof useChallengeByIdForEditingLazyQuery>;
export type ChallengeByIdForEditingQueryResult = Apollo.QueryResult<ChallengeByIdForEditingQuery, ChallengeByIdForEditingQueryVariables>;
export const ChallengeEntriesByMonthAndYearDocument = gql`
    query ChallengeEntriesByMonthAndYear($month: [Int]!, $year: [Int]!, $closed: Boolean = false) {
  challengeEntries(
    year_list: $year
    month_list: $month
    completedOrClosed: $closed
    order: {month: "DESC", year: "DESC"}
  ) {
    edges {
      node {
        id
        year
        month
        closed
        completed
        targetValue
        totalProgress
        totalProgressPercentage
        personalisedMedal
        profile {
          id
        }
        target {
          type {
            iconFullPath
            iconFullPathWhite
            name
          }
          value
          displayName
        }
      }
    }
  }
}
    `;


export function useChallengeEntriesByMonthAndYearQuery(baseOptions: Apollo.QueryHookOptions<ChallengeEntriesByMonthAndYearQuery, ChallengeEntriesByMonthAndYearQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeEntriesByMonthAndYearQuery, ChallengeEntriesByMonthAndYearQueryVariables>(ChallengeEntriesByMonthAndYearDocument, options);
      }
export function useChallengeEntriesByMonthAndYearLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeEntriesByMonthAndYearQuery, ChallengeEntriesByMonthAndYearQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeEntriesByMonthAndYearQuery, ChallengeEntriesByMonthAndYearQueryVariables>(ChallengeEntriesByMonthAndYearDocument, options);
        }
export type ChallengeEntriesByMonthAndYearQueryHookResult = ReturnType<typeof useChallengeEntriesByMonthAndYearQuery>;
export type ChallengeEntriesByMonthAndYearLazyQueryHookResult = ReturnType<typeof useChallengeEntriesByMonthAndYearLazyQuery>;
export type ChallengeEntriesByMonthAndYearQueryResult = Apollo.QueryResult<ChallengeEntriesByMonthAndYearQuery, ChallengeEntriesByMonthAndYearQueryVariables>;
export const ChallengeEntriesByProfileDocument = gql`
    query ChallengeEntriesByProfile {
  userProfiles {
    edges {
      node {
        id
        name
        displayName
        initials
        isOwnerProfile
        challengeEntries {
          edges {
            node {
              id
              year
              month
              targetValue
              totalProgress
              totalProgressPercentage
              target {
                type {
                  iconFullPath
                  iconFullPathWhite
                  name
                }
                value
                displayName
              }
            }
          }
        }
      }
    }
  }
}
    `;


export function useChallengeEntriesByProfileQuery(baseOptions?: Apollo.QueryHookOptions<ChallengeEntriesByProfileQuery, ChallengeEntriesByProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeEntriesByProfileQuery, ChallengeEntriesByProfileQueryVariables>(ChallengeEntriesByProfileDocument, options);
      }
export function useChallengeEntriesByProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeEntriesByProfileQuery, ChallengeEntriesByProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeEntriesByProfileQuery, ChallengeEntriesByProfileQueryVariables>(ChallengeEntriesByProfileDocument, options);
        }
export type ChallengeEntriesByProfileQueryHookResult = ReturnType<typeof useChallengeEntriesByProfileQuery>;
export type ChallengeEntriesByProfileLazyQueryHookResult = ReturnType<typeof useChallengeEntriesByProfileLazyQuery>;
export type ChallengeEntriesByProfileQueryResult = Apollo.QueryResult<ChallengeEntriesByProfileQuery, ChallengeEntriesByProfileQueryVariables>;
export const ChallengeEntryIsProcessedDocument = gql`
    query ChallengeEntryIsProcessed {
  challengeEntries(order: {month: "DESC", year: "DESC"}) {
    edges {
      node {
        sourceCartEntryLineItem {
          id
        }
      }
    }
  }
}
    `;


export function useChallengeEntryIsProcessedQuery(baseOptions?: Apollo.QueryHookOptions<ChallengeEntryIsProcessedQuery, ChallengeEntryIsProcessedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeEntryIsProcessedQuery, ChallengeEntryIsProcessedQueryVariables>(ChallengeEntryIsProcessedDocument, options);
      }
export function useChallengeEntryIsProcessedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeEntryIsProcessedQuery, ChallengeEntryIsProcessedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeEntryIsProcessedQuery, ChallengeEntryIsProcessedQueryVariables>(ChallengeEntryIsProcessedDocument, options);
        }
export type ChallengeEntryIsProcessedQueryHookResult = ReturnType<typeof useChallengeEntryIsProcessedQuery>;
export type ChallengeEntryIsProcessedLazyQueryHookResult = ReturnType<typeof useChallengeEntryIsProcessedLazyQuery>;
export type ChallengeEntryIsProcessedQueryResult = Apollo.QueryResult<ChallengeEntryIsProcessedQuery, ChallengeEntryIsProcessedQueryVariables>;
export const GetChallengeTargetDocument = gql`
    query GetChallengeTarget($id: ID!) {
  challengeTarget(id: $id) {
    id
    value
    metric
    displayName
  }
}
    `;


export function useGetChallengeTargetQuery(baseOptions: Apollo.QueryHookOptions<GetChallengeTargetQuery, GetChallengeTargetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallengeTargetQuery, GetChallengeTargetQueryVariables>(GetChallengeTargetDocument, options);
      }
export function useGetChallengeTargetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallengeTargetQuery, GetChallengeTargetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallengeTargetQuery, GetChallengeTargetQueryVariables>(GetChallengeTargetDocument, options);
        }
export type GetChallengeTargetQueryHookResult = ReturnType<typeof useGetChallengeTargetQuery>;
export type GetChallengeTargetLazyQueryHookResult = ReturnType<typeof useGetChallengeTargetLazyQuery>;
export type GetChallengeTargetQueryResult = Apollo.QueryResult<GetChallengeTargetQuery, GetChallengeTargetQueryVariables>;
export const ChallengeTargetsByChallengeDocument = gql`
    query ChallengeTargetsByChallenge($id: ID!) {
  challengeType(id: $id) {
    id
    name
    imageFullPath
    iconFullPath
    iconFullPathWhite
    targets {
      edges {
        node {
          id
          value
          metric
          displayName
        }
      }
    }
  }
}
    `;


export function useChallengeTargetsByChallengeQuery(baseOptions: Apollo.QueryHookOptions<ChallengeTargetsByChallengeQuery, ChallengeTargetsByChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeTargetsByChallengeQuery, ChallengeTargetsByChallengeQueryVariables>(ChallengeTargetsByChallengeDocument, options);
      }
export function useChallengeTargetsByChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeTargetsByChallengeQuery, ChallengeTargetsByChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeTargetsByChallengeQuery, ChallengeTargetsByChallengeQueryVariables>(ChallengeTargetsByChallengeDocument, options);
        }
export type ChallengeTargetsByChallengeQueryHookResult = ReturnType<typeof useChallengeTargetsByChallengeQuery>;
export type ChallengeTargetsByChallengeLazyQueryHookResult = ReturnType<typeof useChallengeTargetsByChallengeLazyQuery>;
export type ChallengeTargetsByChallengeQueryResult = Apollo.QueryResult<ChallengeTargetsByChallengeQuery, ChallengeTargetsByChallengeQueryVariables>;
export const ChallengesListDocument = gql`
    query ChallengesList($forChildren: Boolean!) {
  challengeTypes(isForChildren: $forChildren) {
    edges {
      node {
        id
        isForChildren
        name
        imageFullPath
        iconFullPath
        iconFullPathWhite
        targets {
          edges {
            node {
              id
              value
              metric
              displayName
            }
          }
        }
      }
    }
  }
}
    `;


export function useChallengesListQuery(baseOptions: Apollo.QueryHookOptions<ChallengesListQuery, ChallengesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengesListQuery, ChallengesListQueryVariables>(ChallengesListDocument, options);
      }
export function useChallengesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengesListQuery, ChallengesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengesListQuery, ChallengesListQueryVariables>(ChallengesListDocument, options);
        }
export type ChallengesListQueryHookResult = ReturnType<typeof useChallengesListQuery>;
export type ChallengesListLazyQueryHookResult = ReturnType<typeof useChallengesListLazyQuery>;
export type ChallengesListQueryResult = Apollo.QueryResult<ChallengesListQuery, ChallengesListQueryVariables>;
export const CompleteChallengeDocument = gql`
    mutation CompleteChallenge($challenge_id: ID!, $completed: String, $closed: String, $engravingValue: String) {
  updateChallengeEntry(
    input: {id: $challenge_id, completed: $completed, closed: $closed, personalisedMedalTargetValue: $engravingValue}
  ) {
    challengeEntry {
      withMedal
      personalisedMedal
      personalisedMedalTargetValue
      year
      month
    }
  }
}
    `;
export type CompleteChallengeMutationFn = Apollo.MutationFunction<CompleteChallengeMutation, CompleteChallengeMutationVariables>;


export function useCompleteChallengeMutation(baseOptions?: Apollo.MutationHookOptions<CompleteChallengeMutation, CompleteChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteChallengeMutation, CompleteChallengeMutationVariables>(CompleteChallengeDocument, options);
      }
export type CompleteChallengeMutationHookResult = ReturnType<typeof useCompleteChallengeMutation>;
export type CompleteChallengeMutationResult = Apollo.MutationResult<CompleteChallengeMutation>;
export type CompleteChallengeMutationOptions = Apollo.BaseMutationOptions<CompleteChallengeMutation, CompleteChallengeMutationVariables>;
export const CompletedChallengesDocument = gql`
    query CompletedChallenges($month: Int!, $year: Int!) {
  challengeEntries(
    exists: {completed: true}
    month: $month
    year: $year
    order: {completed: "ASC"}
  ) {
    edges {
      node {
        id
        year
        month
        closed
        completed
        targetValue
        totalProgress
        totalProgressPercentage
        personalisedMedal
        target {
          type {
            iconFullPath
            iconFullPathWhite
            name
          }
          value
          displayName
        }
      }
    }
  }
}
    `;


export function useCompletedChallengesQuery(baseOptions: Apollo.QueryHookOptions<CompletedChallengesQuery, CompletedChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompletedChallengesQuery, CompletedChallengesQueryVariables>(CompletedChallengesDocument, options);
      }
export function useCompletedChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompletedChallengesQuery, CompletedChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompletedChallengesQuery, CompletedChallengesQueryVariables>(CompletedChallengesDocument, options);
        }
export type CompletedChallengesQueryHookResult = ReturnType<typeof useCompletedChallengesQuery>;
export type CompletedChallengesLazyQueryHookResult = ReturnType<typeof useCompletedChallengesLazyQuery>;
export type CompletedChallengesQueryResult = Apollo.QueryResult<CompletedChallengesQuery, CompletedChallengesQueryVariables>;
export const CountriesListDocument = gql`
    query CountriesList {
  countries {
    edges {
      node {
        iso2
        name
      }
    }
  }
}
    `;


export function useCountriesListQuery(baseOptions?: Apollo.QueryHookOptions<CountriesListQuery, CountriesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesListQuery, CountriesListQueryVariables>(CountriesListDocument, options);
      }
export function useCountriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesListQuery, CountriesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesListQuery, CountriesListQueryVariables>(CountriesListDocument, options);
        }
export type CountriesListQueryHookResult = ReturnType<typeof useCountriesListQuery>;
export type CountriesListLazyQueryHookResult = ReturnType<typeof useCountriesListLazyQuery>;
export type CountriesListQueryResult = Apollo.QueryResult<CountriesListQuery, CountriesListQueryVariables>;
export const CreateAddressDocument = gql`
    mutation CreateAddress($input: createUserAddressInput!) {
  createUserAddress(input: $input) {
    userAddress {
      id
      company
      address1
      address2
      city
      province
      zip
      country
      phone
    }
  }
}
    `;
export type CreateAddressMutationFn = Apollo.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>;


export function useCreateAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateAddressMutation, CreateAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, options);
      }
export type CreateAddressMutationHookResult = ReturnType<typeof useCreateAddressMutation>;
export type CreateAddressMutationResult = Apollo.MutationResult<CreateAddressMutation>;
export type CreateAddressMutationOptions = Apollo.BaseMutationOptions<CreateAddressMutation, CreateAddressMutationVariables>;
export const CreateAnnualPassCartDocument = gql`
    mutation CreateAnnualPassCart($input: createAnnualPassCartInput!) {
  createAnnualPassCart(input: $input) {
    annualPassCart {
      id
      checkoutUrl
      priceBreakdown
      syncWithShopify
    }
  }
}
    `;
export type CreateAnnualPassCartMutationFn = Apollo.MutationFunction<CreateAnnualPassCartMutation, CreateAnnualPassCartMutationVariables>;


export function useCreateAnnualPassCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnnualPassCartMutation, CreateAnnualPassCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnnualPassCartMutation, CreateAnnualPassCartMutationVariables>(CreateAnnualPassCartDocument, options);
      }
export type CreateAnnualPassCartMutationHookResult = ReturnType<typeof useCreateAnnualPassCartMutation>;
export type CreateAnnualPassCartMutationResult = Apollo.MutationResult<CreateAnnualPassCartMutation>;
export type CreateAnnualPassCartMutationOptions = Apollo.BaseMutationOptions<CreateAnnualPassCartMutation, CreateAnnualPassCartMutationVariables>;
export const CreateCartDocument = gql`
    mutation CreateCart($input: createCartInput!) {
  createCart(input: $input) {
    cart {
      id
      entryLineItems {
        edges {
          node {
            id
            personalisedMedal
            withMedal
            personalisedMedalTargetValue
            yearMonthString
          }
        }
      }
      productLineItems {
        edges {
          node {
            id
            quantity
            variantId
          }
        }
      }
    }
  }
}
    `;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;


export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const CreateCartEntryLineItemDocument = gql`
    mutation CreateCartEntryLineItem($input: createCartEntryLineItemInput!) {
  createCartEntryLineItem(input: $input) {
    cartEntryLineItem {
      id
      profile {
        id
      }
      challengeTarget {
        id
      }
      year
      month
      withMedal
      personalisedMedal
      personalisedMedalTargetValue
      dateOfBirth
    }
  }
}
    `;
export type CreateCartEntryLineItemMutationFn = Apollo.MutationFunction<CreateCartEntryLineItemMutation, CreateCartEntryLineItemMutationVariables>;

export function useCreateCartEntryLineItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartEntryLineItemMutation, CreateCartEntryLineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartEntryLineItemMutation, CreateCartEntryLineItemMutationVariables>(CreateCartEntryLineItemDocument, options);
      }
export type CreateCartEntryLineItemMutationHookResult = ReturnType<typeof useCreateCartEntryLineItemMutation>;
export type CreateCartEntryLineItemMutationResult = Apollo.MutationResult<CreateCartEntryLineItemMutation>;
export type CreateCartEntryLineItemMutationOptions = Apollo.BaseMutationOptions<CreateCartEntryLineItemMutation, CreateCartEntryLineItemMutationVariables>;
export const CreateCartProductLineItemDocument = gql`
    mutation CreateCartProductLineItem($input: createCartProductLineItemInput!) {
  createCartProductLineItem(input: $input) {
    cartProductLineItem {
      cart {
        id
      }
      quantity
      variantId
    }
  }
}
    `;
export type CreateCartProductLineItemMutationFn = Apollo.MutationFunction<CreateCartProductLineItemMutation, CreateCartProductLineItemMutationVariables>;


export function useCreateCartProductLineItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartProductLineItemMutation, CreateCartProductLineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartProductLineItemMutation, CreateCartProductLineItemMutationVariables>(CreateCartProductLineItemDocument, options);
      }
export type CreateCartProductLineItemMutationHookResult = ReturnType<typeof useCreateCartProductLineItemMutation>;
export type CreateCartProductLineItemMutationResult = Apollo.MutationResult<CreateCartProductLineItemMutation>;
export type CreateCartProductLineItemMutationOptions = Apollo.BaseMutationOptions<CreateCartProductLineItemMutation, CreateCartProductLineItemMutationVariables>;
export const CreateChallengeEntryProgressDocument = gql`
    mutation CreateChallengeEntryProgress($input: createChallengeEntryProgressInput!) {
  createChallengeEntryProgress(input: $input) {
    challengeEntryProgress {
      id
      entry {
        id
        completed
        displayName
      }
      progress
      evidenceDate
      evidence {
        edges {
          node {
            id
            contentUrl
            created
          }
        }
      }
      progressString
    }
  }
}
    `;
export type CreateChallengeEntryProgressMutationFn = Apollo.MutationFunction<CreateChallengeEntryProgressMutation, CreateChallengeEntryProgressMutationVariables>;


export function useCreateChallengeEntryProgressMutation(baseOptions?: Apollo.MutationHookOptions<CreateChallengeEntryProgressMutation, CreateChallengeEntryProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChallengeEntryProgressMutation, CreateChallengeEntryProgressMutationVariables>(CreateChallengeEntryProgressDocument, options);
      }
export type CreateChallengeEntryProgressMutationHookResult = ReturnType<typeof useCreateChallengeEntryProgressMutation>;
export type CreateChallengeEntryProgressMutationResult = Apollo.MutationResult<CreateChallengeEntryProgressMutation>;
export type CreateChallengeEntryProgressMutationOptions = Apollo.BaseMutationOptions<CreateChallengeEntryProgressMutation, CreateChallengeEntryProgressMutationVariables>;
export const CreateCustomTargetDocument = gql`
    mutation CreateCustomTarget($entryId: ID!, $targetValue: Int!) {
  updateChallengeEntry(
    input: {id: $entryId, overrideChallengeTargetValue: $targetValue}
  ) {
    challengeEntry {
      id
      overrideChallengeTargetValue
    }
  }
}
    `;
export type CreateCustomTargetMutationFn = Apollo.MutationFunction<CreateCustomTargetMutation, CreateCustomTargetMutationVariables>;


export function useCreateCustomTargetMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomTargetMutation, CreateCustomTargetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomTargetMutation, CreateCustomTargetMutationVariables>(CreateCustomTargetDocument, options);
      }
export type CreateCustomTargetMutationHookResult = ReturnType<typeof useCreateCustomTargetMutation>;
export type CreateCustomTargetMutationResult = Apollo.MutationResult<CreateCustomTargetMutation>;
export type CreateCustomTargetMutationOptions = Apollo.BaseMutationOptions<CreateCustomTargetMutation, CreateCustomTargetMutationVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($user: String!, $name: String!, $dateOfBirth: String!) {
  createUserProfile(
    input: {user: $user, name: $name, dateOfBirth: $dateOfBirth, isOwnerProfile: false, isDefaultProfile: false}
  ) {
    userProfile {
      id
      initials
    }
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;


export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const CreateUserAddressDocument = gql`
    mutation CreateUserAddress($input: createUserAddressInput!) {
  createUserAddress(input: $input) {
    userAddress {
      id
      company
      address1
      address2
      city
      province
      zip
      country
      phone
    }
  }
}
    `;
export type CreateUserAddressMutationFn = Apollo.MutationFunction<CreateUserAddressMutation, CreateUserAddressMutationVariables>;


export function useCreateUserAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserAddressMutation, CreateUserAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserAddressMutation, CreateUserAddressMutationVariables>(CreateUserAddressDocument, options);
      }
export type CreateUserAddressMutationHookResult = ReturnType<typeof useCreateUserAddressMutation>;
export type CreateUserAddressMutationResult = Apollo.MutationResult<CreateUserAddressMutation>;
export type CreateUserAddressMutationOptions = Apollo.BaseMutationOptions<CreateUserAddressMutation, CreateUserAddressMutationVariables>;
export const CurrentChallengeMonthsDocument = gql`
    query CurrentChallengeMonths($years: [Int]!, $closed: Boolean = false) {
  challengeEntries(
    completedOrClosed: $closed
    year_list: $years
    order: {month: "DESC", year: "DESC"}
  ) {
    edges {
      node {
        month
        year
      }
    }
  }
}
    `;


export function useCurrentChallengeMonthsQuery(baseOptions: Apollo.QueryHookOptions<CurrentChallengeMonthsQuery, CurrentChallengeMonthsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentChallengeMonthsQuery, CurrentChallengeMonthsQueryVariables>(CurrentChallengeMonthsDocument, options);
      }
export function useCurrentChallengeMonthsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentChallengeMonthsQuery, CurrentChallengeMonthsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentChallengeMonthsQuery, CurrentChallengeMonthsQueryVariables>(CurrentChallengeMonthsDocument, options);
        }
export type CurrentChallengeMonthsQueryHookResult = ReturnType<typeof useCurrentChallengeMonthsQuery>;
export type CurrentChallengeMonthsLazyQueryHookResult = ReturnType<typeof useCurrentChallengeMonthsLazyQuery>;
export type CurrentChallengeMonthsQueryResult = Apollo.QueryResult<CurrentChallengeMonthsQuery, CurrentChallengeMonthsQueryVariables>;
export const CurrentChallengesDocument = gql`
    query CurrentChallenges($closed: Boolean!) {
  userProfiles {
    edges {
      node {
        id
        name
        displayName
        initials
        challengeEntries(exists: {closed: $closed}, order: {month: "ASC"}) {
          edges {
            node {
              id
              year
              month
              closed
              completed
              targetValue
              totalProgress
              totalProgressPercentage
              personalisedMedal
              profile {
                id
              }
              target {
                type {
                  iconFullPath
                  iconFullPathWhite
                  name
                }
                value
                displayName
              }
            }
          }
        }
      }
    }
  }
}
    `;


export function useCurrentChallengesQuery(baseOptions: Apollo.QueryHookOptions<CurrentChallengesQuery, CurrentChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentChallengesQuery, CurrentChallengesQueryVariables>(CurrentChallengesDocument, options);
      }
export function useCurrentChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentChallengesQuery, CurrentChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentChallengesQuery, CurrentChallengesQueryVariables>(CurrentChallengesDocument, options);
        }
export type CurrentChallengesQueryHookResult = ReturnType<typeof useCurrentChallengesQuery>;
export type CurrentChallengesLazyQueryHookResult = ReturnType<typeof useCurrentChallengesLazyQuery>;
export type CurrentChallengesQueryResult = Apollo.QueryResult<CurrentChallengesQuery, CurrentChallengesQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  users {
    edges {
      node {
        id
        email
        requirements
        tosAccepted
        currencyPreference
        countryIso
        addresses {
          edges {
            node {
              address1
              address2
              city
              province
              phone
              zip
              country
            }
          }
        }
        ownerProfile {
          id
          name
          initials
          isDefaultProfile
          isOwnerProfile
          ageInYears
          dateOfBirth
          gender {
            id
            name
          }
          requirements
          isChild
          addresses {
            edges {
              node {
                address1
                address2
                city
                province
                phone
                zip
                country
              }
            }
          }
        }
        profiles {
          edges {
            node {
              id
              name
              initials
              requirements
              dateOfBirth
              gender {
                id
                name
              }
              addresses {
                edges {
                  node {
                    address1
                    address2
                    city
                    province
                    phone
                    zip
                    country
                  }
                }
              }
              isDefaultProfile
              isOwnerProfile
              ageInYears
              isChild
            }
          }
        }
      }
    }
  }
}
    `;


export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const DeleteAddressByIdDocument = gql`
    mutation DeleteAddressById($id: ID!) {
  updateUserAddress(input: {id: $id, archived: true}) {
    userAddress {
      id
    }
  }
}
    `;
export type DeleteAddressByIdMutationFn = Apollo.MutationFunction<DeleteAddressByIdMutation, DeleteAddressByIdMutationVariables>;


export function useDeleteAddressByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAddressByIdMutation, DeleteAddressByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAddressByIdMutation, DeleteAddressByIdMutationVariables>(DeleteAddressByIdDocument, options);
      }
export type DeleteAddressByIdMutationHookResult = ReturnType<typeof useDeleteAddressByIdMutation>;
export type DeleteAddressByIdMutationResult = Apollo.MutationResult<DeleteAddressByIdMutation>;
export type DeleteAddressByIdMutationOptions = Apollo.BaseMutationOptions<DeleteAddressByIdMutation, DeleteAddressByIdMutationVariables>;
export const EntryValueByIdDocument = gql`
    query EntryValueById($id: ID!) {
  challengeEntry(id: $id) {
    target {
      value
      type {
        name
      }
    }
  }
}
    `;


export function useEntryValueByIdQuery(baseOptions: Apollo.QueryHookOptions<EntryValueByIdQuery, EntryValueByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EntryValueByIdQuery, EntryValueByIdQueryVariables>(EntryValueByIdDocument, options);
      }
export function useEntryValueByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EntryValueByIdQuery, EntryValueByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EntryValueByIdQuery, EntryValueByIdQueryVariables>(EntryValueByIdDocument, options);
        }
export type EntryValueByIdQueryHookResult = ReturnType<typeof useEntryValueByIdQuery>;
export type EntryValueByIdLazyQueryHookResult = ReturnType<typeof useEntryValueByIdLazyQuery>;
export type EntryValueByIdQueryResult = Apollo.QueryResult<EntryValueByIdQuery, EntryValueByIdQueryVariables>;
export const GetCurrenciesDocument = gql`
    query GetCurrencies {
  currencies {
    edges {
      node {
        iso
        symbol
      }
    }
  }
}
    `;


export function useGetCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, options);
      }
export function useGetCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrenciesQuery, GetCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrenciesQuery, GetCurrenciesQueryVariables>(GetCurrenciesDocument, options);
        }
export type GetCurrenciesQueryHookResult = ReturnType<typeof useGetCurrenciesQuery>;
export type GetCurrenciesLazyQueryHookResult = ReturnType<typeof useGetCurrenciesLazyQuery>;
export type GetCurrenciesQueryResult = Apollo.QueryResult<GetCurrenciesQuery, GetCurrenciesQueryVariables>;
export const GetEntryTimelineDocument = gql`
    query GetEntryTimeline($entry_uuid: String!, $entry_profile_uuid: String!) {
  challengeEntryProgresses(
    entry_uuid: $entry_uuid
    entry_profile_uuid: $entry_profile_uuid
    exists: {discarded: false}
    order: {evidenceDate: "DESC"}
  ) {
    edges {
      node {
        id
        progressString
        created
        createdString
        entry {
          target {
            displayName
            value
            type {
              name
              iconFullPath
              iconFullPathWhite
            }
          }
          personalisedMedal
          totalProgress
          totalProgressPercentage
          profile {
            initials
          }
        }
        evidenceDate
        evidence {
          edges {
            node {
              id
              contentUrl
            }
          }
        }
      }
    }
  }
}
    `;


export function useGetEntryTimelineQuery(baseOptions: Apollo.QueryHookOptions<GetEntryTimelineQuery, GetEntryTimelineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntryTimelineQuery, GetEntryTimelineQueryVariables>(GetEntryTimelineDocument, options);
      }
export function useGetEntryTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntryTimelineQuery, GetEntryTimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntryTimelineQuery, GetEntryTimelineQueryVariables>(GetEntryTimelineDocument, options);
        }
export type GetEntryTimelineQueryHookResult = ReturnType<typeof useGetEntryTimelineQuery>;
export type GetEntryTimelineLazyQueryHookResult = ReturnType<typeof useGetEntryTimelineLazyQuery>;
export type GetEntryTimelineQueryResult = Apollo.QueryResult<GetEntryTimelineQuery, GetEntryTimelineQueryVariables>;
export const GetLoginRedirectUriDocument = gql`
    query GetLoginRedirectUri {
  publicConfigs(key: "oauth2_login_url") {
    edges {
      node {
        id
        key
        value
      }
    }
  }
}
    `;


export function useGetLoginRedirectUriQuery(baseOptions?: Apollo.QueryHookOptions<GetLoginRedirectUriQuery, GetLoginRedirectUriQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoginRedirectUriQuery, GetLoginRedirectUriQueryVariables>(GetLoginRedirectUriDocument, options);
      }
export function useGetLoginRedirectUriLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoginRedirectUriQuery, GetLoginRedirectUriQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoginRedirectUriQuery, GetLoginRedirectUriQueryVariables>(GetLoginRedirectUriDocument, options);
        }
export type GetLoginRedirectUriQueryHookResult = ReturnType<typeof useGetLoginRedirectUriQuery>;
export type GetLoginRedirectUriLazyQueryHookResult = ReturnType<typeof useGetLoginRedirectUriLazyQuery>;
export type GetLoginRedirectUriQueryResult = Apollo.QueryResult<GetLoginRedirectUriQuery, GetLoginRedirectUriQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($monthFilter: String) {
  products(MonthFilter_month: $monthFilter) {
    edges {
      node {
        id
        title
        descriptionHtml
        vendor
        productType
        tags
        variants
        images
        options
        collections
      }
    }
  }
}
    `;


export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const PersonalisedMedalPricingDocument = gql`
    query PersonalisedMedalPricing {
  challengeEntryOptions {
    edges {
      node {
        id
        forChildren
        normalMedalPricing
        personalisedMedalPricing
        personalisedMedalPricingDifference
      }
    }
  }
}
    `;


export function usePersonalisedMedalPricingQuery(baseOptions?: Apollo.QueryHookOptions<PersonalisedMedalPricingQuery, PersonalisedMedalPricingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonalisedMedalPricingQuery, PersonalisedMedalPricingQueryVariables>(PersonalisedMedalPricingDocument, options);
      }
export function usePersonalisedMedalPricingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalisedMedalPricingQuery, PersonalisedMedalPricingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonalisedMedalPricingQuery, PersonalisedMedalPricingQueryVariables>(PersonalisedMedalPricingDocument, options);
        }
export type PersonalisedMedalPricingQueryHookResult = ReturnType<typeof usePersonalisedMedalPricingQuery>;
export type PersonalisedMedalPricingLazyQueryHookResult = ReturnType<typeof usePersonalisedMedalPricingLazyQuery>;
export type PersonalisedMedalPricingQueryResult = Apollo.QueryResult<PersonalisedMedalPricingQuery, PersonalisedMedalPricingQueryVariables>;
export const ProfileEntryMonthsDocument = gql`
    query ProfileEntryMonths($id: ID!, $years: [Int]!, $closed: Boolean) {
  userProfile(id: $id) {
    challengeEntries(
      completedOrClosed: $closed
      year_list: $years
      order: {month: "DESC", year: "DESC"}
    ) {
      edges {
        node {
          month
          year
        }
      }
    }
  }
}
    `;


export function useProfileEntryMonthsQuery(baseOptions: Apollo.QueryHookOptions<ProfileEntryMonthsQuery, ProfileEntryMonthsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileEntryMonthsQuery, ProfileEntryMonthsQueryVariables>(ProfileEntryMonthsDocument, options);
      }
export function useProfileEntryMonthsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileEntryMonthsQuery, ProfileEntryMonthsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileEntryMonthsQuery, ProfileEntryMonthsQueryVariables>(ProfileEntryMonthsDocument, options);
        }
export type ProfileEntryMonthsQueryHookResult = ReturnType<typeof useProfileEntryMonthsQuery>;
export type ProfileEntryMonthsLazyQueryHookResult = ReturnType<typeof useProfileEntryMonthsLazyQuery>;
export type ProfileEntryMonthsQueryResult = Apollo.QueryResult<ProfileEntryMonthsQuery, ProfileEntryMonthsQueryVariables>;
export const RemoveCartProductLineItemDocument = gql`
    mutation RemoveCartProductLineItem($cartProductLineItemId: ID!) {
  deleteCartProductLineItem(input: {id: $cartProductLineItemId}) {
    cartProductLineItem {
      id
    }
  }
}
    `;
export type RemoveCartProductLineItemMutationFn = Apollo.MutationFunction<RemoveCartProductLineItemMutation, RemoveCartProductLineItemMutationVariables>;


export function useRemoveCartProductLineItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartProductLineItemMutation, RemoveCartProductLineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartProductLineItemMutation, RemoveCartProductLineItemMutationVariables>(RemoveCartProductLineItemDocument, options);
      }
export type RemoveCartProductLineItemMutationHookResult = ReturnType<typeof useRemoveCartProductLineItemMutation>;
export type RemoveCartProductLineItemMutationResult = Apollo.MutationResult<RemoveCartProductLineItemMutation>;
export type RemoveCartProductLineItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartProductLineItemMutation, RemoveCartProductLineItemMutationVariables>;
export const RemoveChallengeEntryProgressDocument = gql`
    mutation RemoveChallengeEntryProgress($challengeEntryProgressId: ID!) {
  deleteChallengeEntryProgress(input: {id: $challengeEntryProgressId}) {
    challengeEntryProgress {
      id
    }
  }
}
    `;
export type RemoveChallengeEntryProgressMutationFn = Apollo.MutationFunction<RemoveChallengeEntryProgressMutation, RemoveChallengeEntryProgressMutationVariables>;


export function useRemoveChallengeEntryProgressMutation(baseOptions?: Apollo.MutationHookOptions<RemoveChallengeEntryProgressMutation, RemoveChallengeEntryProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveChallengeEntryProgressMutation, RemoveChallengeEntryProgressMutationVariables>(RemoveChallengeEntryProgressDocument, options);
      }
export type RemoveChallengeEntryProgressMutationHookResult = ReturnType<typeof useRemoveChallengeEntryProgressMutation>;
export type RemoveChallengeEntryProgressMutationResult = Apollo.MutationResult<RemoveChallengeEntryProgressMutation>;
export type RemoveChallengeEntryProgressMutationOptions = Apollo.BaseMutationOptions<RemoveChallengeEntryProgressMutation, RemoveChallengeEntryProgressMutationVariables>;
export const RemoveCartEntryLineItemDocument = gql`
    mutation RemoveCartEntryLineItem($cartEntryLineItemId: ID!) {
  deleteCartEntryLineItem(input: {id: $cartEntryLineItemId}) {
    cartEntryLineItem {
      id
    }
  }
}
    `;
export type RemoveCartEntryLineItemMutationFn = Apollo.MutationFunction<RemoveCartEntryLineItemMutation, RemoveCartEntryLineItemMutationVariables>;


export function useRemoveCartEntryLineItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartEntryLineItemMutation, RemoveCartEntryLineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartEntryLineItemMutation, RemoveCartEntryLineItemMutationVariables>(RemoveCartEntryLineItemDocument, options);
      }
export type RemoveCartEntryLineItemMutationHookResult = ReturnType<typeof useRemoveCartEntryLineItemMutation>;
export type RemoveCartEntryLineItemMutationResult = Apollo.MutationResult<RemoveCartEntryLineItemMutation>;
export type RemoveCartEntryLineItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartEntryLineItemMutation, RemoveCartEntryLineItemMutationVariables>;
export const SelectableGendersDocument = gql`
    query SelectableGenders {
  genders {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;


export function useSelectableGendersQuery(baseOptions?: Apollo.QueryHookOptions<SelectableGendersQuery, SelectableGendersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectableGendersQuery, SelectableGendersQueryVariables>(SelectableGendersDocument, options);
      }
export function useSelectableGendersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectableGendersQuery, SelectableGendersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectableGendersQuery, SelectableGendersQueryVariables>(SelectableGendersDocument, options);
        }
export type SelectableGendersQueryHookResult = ReturnType<typeof useSelectableGendersQuery>;
export type SelectableGendersLazyQueryHookResult = ReturnType<typeof useSelectableGendersLazyQuery>;
export type SelectableGendersQueryResult = Apollo.QueryResult<SelectableGendersQuery, SelectableGendersQueryVariables>;
export const SetUserCurrencyPrefsDocument = gql`
    mutation SetUserCurrencyPrefs($currency: String!, $user: ID!) {
  updateUser(input: {id: $user, currencyPreference: $currency}) {
    user {
      id
      currencyPreference
    }
  }
}
    `;
export type SetUserCurrencyPrefsMutationFn = Apollo.MutationFunction<SetUserCurrencyPrefsMutation, SetUserCurrencyPrefsMutationVariables>;


export function useSetUserCurrencyPrefsMutation(baseOptions?: Apollo.MutationHookOptions<SetUserCurrencyPrefsMutation, SetUserCurrencyPrefsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetUserCurrencyPrefsMutation, SetUserCurrencyPrefsMutationVariables>(SetUserCurrencyPrefsDocument, options);
      }
export type SetUserCurrencyPrefsMutationHookResult = ReturnType<typeof useSetUserCurrencyPrefsMutation>;
export type SetUserCurrencyPrefsMutationResult = Apollo.MutationResult<SetUserCurrencyPrefsMutation>;
export type SetUserCurrencyPrefsMutationOptions = Apollo.BaseMutationOptions<SetUserCurrencyPrefsMutation, SetUserCurrencyPrefsMutationVariables>;
export const SetEntryPersonalisedDocument = gql`
    mutation SetEntryPersonalised($entryId: ID!, $personalisedMedal: Int!) {
  updateCartEntryLineItem(
    input: {id: $entryId, personalisedMedal: $personalisedMedal}
  ) {
    clientMutationId
  }
}
    `;
export type SetEntryPersonalisedMutationFn = Apollo.MutationFunction<SetEntryPersonalisedMutation, SetEntryPersonalisedMutationVariables>;


export function useSetEntryPersonalisedMutation(baseOptions?: Apollo.MutationHookOptions<SetEntryPersonalisedMutation, SetEntryPersonalisedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetEntryPersonalisedMutation, SetEntryPersonalisedMutationVariables>(SetEntryPersonalisedDocument, options);
      }
export type SetEntryPersonalisedMutationHookResult = ReturnType<typeof useSetEntryPersonalisedMutation>;
export type SetEntryPersonalisedMutationResult = Apollo.MutationResult<SetEntryPersonalisedMutation>;
export type SetEntryPersonalisedMutationOptions = Apollo.BaseMutationOptions<SetEntryPersonalisedMutation, SetEntryPersonalisedMutationVariables>;
export const UpdateCartDocument = gql`
    mutation UpdateCart($input: updateCartInput!) {
  updateCart(input: $input) {
    cart {
      id
      entryLineItems {
        edges {
          node {
            yearMonthString
          }
        }
      }
    }
  }
}
    `;
export type UpdateCartMutationFn = Apollo.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;


export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, options);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = Apollo.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const UpdateCartProductLineItemDocument = gql`
    mutation UpdateCartProductLineItem($productLineInput: updateCartProductLineItemInput!, $cartInput: updateCartInput!) {
  updateCart(input: $cartInput) {
    cart {
      id
      checkoutUrl
      priceBreakdown
      productLineItems {
        edges {
          node {
            id
            quantity
            variantId
          }
        }
      }
      address {
        address1
        address2
        city
        province
        zip
        country
      }
      entryLineItems {
        edges {
          node {
            id
            challengeTarget {
              displayName
            }
          }
        }
      }
    }
  }
  updateCartProductLineItem(input: $productLineInput) {
    cartProductLineItem {
      id
      variantId
      quantity
    }
  }
}
    `;
export type UpdateCartProductLineItemMutationFn = Apollo.MutationFunction<UpdateCartProductLineItemMutation, UpdateCartProductLineItemMutationVariables>;


export function useUpdateCartProductLineItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartProductLineItemMutation, UpdateCartProductLineItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartProductLineItemMutation, UpdateCartProductLineItemMutationVariables>(UpdateCartProductLineItemDocument, options);
      }
export type UpdateCartProductLineItemMutationHookResult = ReturnType<typeof useUpdateCartProductLineItemMutation>;
export type UpdateCartProductLineItemMutationResult = Apollo.MutationResult<UpdateCartProductLineItemMutation>;
export type UpdateCartProductLineItemMutationOptions = Apollo.BaseMutationOptions<UpdateCartProductLineItemMutation, UpdateCartProductLineItemMutationVariables>;
export const UpdateChallengeDocument = gql`
    mutation UpdateChallenge($input: updateChallengeEntryInput!) {
  updateChallengeEntry(input: $input) {
    challengeEntry {
      id
      target {
        id
        value
        metric
        displayName
      }
    }
  }
}
    `;
export type UpdateChallengeMutationFn = Apollo.MutationFunction<UpdateChallengeMutation, UpdateChallengeMutationVariables>;


export function useUpdateChallengeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChallengeMutation, UpdateChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChallengeMutation, UpdateChallengeMutationVariables>(UpdateChallengeDocument, options);
      }
export type UpdateChallengeMutationHookResult = ReturnType<typeof useUpdateChallengeMutation>;
export type UpdateChallengeMutationResult = Apollo.MutationResult<UpdateChallengeMutation>;
export type UpdateChallengeMutationOptions = Apollo.BaseMutationOptions<UpdateChallengeMutation, UpdateChallengeMutationVariables>;
export const UpdateChallengeEntryProgressDocument = gql`
    mutation UpdateChallengeEntryProgress($input: updateChallengeEntryProgressInput!) {
  updateChallengeEntryProgress(input: $input) {
    challengeEntryProgress {
      id
      progress
      evidence {
        edges {
          node {
            id
          }
        }
      }
      evidenceDate
    }
  }
}
    `;
export type UpdateChallengeEntryProgressMutationFn = Apollo.MutationFunction<UpdateChallengeEntryProgressMutation, UpdateChallengeEntryProgressMutationVariables>;


export function useUpdateChallengeEntryProgressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChallengeEntryProgressMutation, UpdateChallengeEntryProgressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChallengeEntryProgressMutation, UpdateChallengeEntryProgressMutationVariables>(UpdateChallengeEntryProgressDocument, options);
      }
export type UpdateChallengeEntryProgressMutationHookResult = ReturnType<typeof useUpdateChallengeEntryProgressMutation>;
export type UpdateChallengeEntryProgressMutationResult = Apollo.MutationResult<UpdateChallengeEntryProgressMutation>;
export type UpdateChallengeEntryProgressMutationOptions = Apollo.BaseMutationOptions<UpdateChallengeEntryProgressMutation, UpdateChallengeEntryProgressMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: updateUserProfileInput!) {
  updateUserProfile(input: $input) {
    userProfile {
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;


export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserRealDocument = gql`
    mutation UpdateUserReal($input: updateUserInput!) {
  updateUser(input: $input) {
    user {
      id
    }
  }
}
    `;
export type UpdateUserRealMutationFn = Apollo.MutationFunction<UpdateUserRealMutation, UpdateUserRealMutationVariables>;


export function useUpdateUserRealMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRealMutation, UpdateUserRealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRealMutation, UpdateUserRealMutationVariables>(UpdateUserRealDocument, options);
      }
export type UpdateUserRealMutationHookResult = ReturnType<typeof useUpdateUserRealMutation>;
export type UpdateUserRealMutationResult = Apollo.MutationResult<UpdateUserRealMutation>;
export type UpdateUserRealMutationOptions = Apollo.BaseMutationOptions<UpdateUserRealMutation, UpdateUserRealMutationVariables>;
export const UploadEvidenceDocument = gql`
    mutation UploadEvidence($input: uploadMediaObjectInput!) {
  uploadMediaObject(input: $input) {
    mediaObject {
      id
      contentUrl
    }
  }
}
    `;
export type UploadEvidenceMutationFn = Apollo.MutationFunction<UploadEvidenceMutation, UploadEvidenceMutationVariables>;


export function useUploadEvidenceMutation(baseOptions?: Apollo.MutationHookOptions<UploadEvidenceMutation, UploadEvidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadEvidenceMutation, UploadEvidenceMutationVariables>(UploadEvidenceDocument, options);
      }
export type UploadEvidenceMutationHookResult = ReturnType<typeof useUploadEvidenceMutation>;
export type UploadEvidenceMutationResult = Apollo.MutationResult<UploadEvidenceMutation>;
export type UploadEvidenceMutationOptions = Apollo.BaseMutationOptions<UploadEvidenceMutation, UploadEvidenceMutationVariables>;