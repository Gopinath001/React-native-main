import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  Time: any;
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};



export enum Enum_Medals_Type {
  Running = 'running',
  Walking = 'walking',
  Cycling = 'cycling',
  Swimming = 'swimming',
  Wheelchair = 'wheelchair',
  Steps = 'steps',
  Personalised = 'personalised'
}

export enum Enum_Staffhelppages_Category {
  General = 'General',
  Fulfillment = 'Fulfillment'
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type MedalInput = {
  Year?: Maybe<Scalars['Int']>;
  Month?: Maybe<Scalars['Int']>;
  Type?: Maybe<Enum_Medals_Type>;
  Image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Medals = {
  __typename?: 'Medals';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Year?: Maybe<Scalars['Int']>;
  Month?: Maybe<Scalars['Int']>;
  Type?: Maybe<Enum_Medals_Type>;
  Image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MedalsAggregator = {
  __typename?: 'MedalsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<MedalsAggregatorSum>;
  avg?: Maybe<MedalsAggregatorAvg>;
  min?: Maybe<MedalsAggregatorMin>;
  max?: Maybe<MedalsAggregatorMax>;
};

export type MedalsAggregatorAvg = {
  __typename?: 'MedalsAggregatorAvg';
  Year?: Maybe<Scalars['Float']>;
  Month?: Maybe<Scalars['Float']>;
};

export type MedalsAggregatorMax = {
  __typename?: 'MedalsAggregatorMax';
  Year?: Maybe<Scalars['Float']>;
  Month?: Maybe<Scalars['Float']>;
};

export type MedalsAggregatorMin = {
  __typename?: 'MedalsAggregatorMin';
  Year?: Maybe<Scalars['Float']>;
  Month?: Maybe<Scalars['Float']>;
};

export type MedalsAggregatorSum = {
  __typename?: 'MedalsAggregatorSum';
  Year?: Maybe<Scalars['Float']>;
  Month?: Maybe<Scalars['Float']>;
};

export type MedalsConnection = {
  __typename?: 'MedalsConnection';
  values?: Maybe<Array<Maybe<Medals>>>;
  groupBy?: Maybe<MedalsGroupBy>;
  aggregate?: Maybe<MedalsAggregator>;
};

export type MedalsConnectionCreated_At = {
  __typename?: 'MedalsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionId = {
  __typename?: 'MedalsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionImage = {
  __typename?: 'MedalsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionMonth = {
  __typename?: 'MedalsConnectionMonth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionPublished_At = {
  __typename?: 'MedalsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionType = {
  __typename?: 'MedalsConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionUpdated_At = {
  __typename?: 'MedalsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsConnectionYear = {
  __typename?: 'MedalsConnectionYear';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<MedalsConnection>;
};

export type MedalsGroupBy = {
  __typename?: 'MedalsGroupBy';
  id?: Maybe<Array<Maybe<MedalsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MedalsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MedalsConnectionUpdated_At>>>;
  Year?: Maybe<Array<Maybe<MedalsConnectionYear>>>;
  Month?: Maybe<Array<Maybe<MedalsConnectionMonth>>>;
  Type?: Maybe<Array<Maybe<MedalsConnectionType>>>;
  Image?: Maybe<Array<Maybe<MedalsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<MedalsConnectionPublished_At>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Medals | MedalsConnection | MedalsAggregator | MedalsAggregatorSum | MedalsAggregatorAvg | MedalsAggregatorMin | MedalsAggregatorMax | MedalsGroupBy | MedalsConnectionId | MedalsConnectionCreated_At | MedalsConnectionUpdated_At | MedalsConnectionYear | MedalsConnectionMonth | MedalsConnectionType | MedalsConnectionImage | MedalsConnectionPublished_At | CreateMedalPayload | UpdateMedalPayload | DeleteMedalPayload | Pages | PagesConnection | PagesAggregator | PagesGroupBy | PagesConnectionId | PagesConnectionCreated_At | PagesConnectionUpdated_At | PagesConnectionTitle | PagesConnectionContent | PagesConnectionSlug | PagesConnectionPublished_At | CreatePagePayload | UpdatePagePayload | DeletePagePayload | ProgressMessages | ProgressMessagesConnection | ProgressMessagesAggregator | ProgressMessagesAggregatorSum | ProgressMessagesAggregatorAvg | ProgressMessagesAggregatorMin | ProgressMessagesAggregatorMax | ProgressMessagesGroupBy | ProgressMessagesConnectionId | ProgressMessagesConnectionCreated_At | ProgressMessagesConnectionUpdated_At | ProgressMessagesConnectionDayOfMonth | ProgressMessagesConnectionMessage | ProgressMessagesConnectionPublished_At | CreateProgressMessagePayload | UpdateProgressMessagePayload | DeleteProgressMessagePayload | PublicMedia | PublicMediaConnection | PublicMediaAggregator | PublicMediaGroupBy | PublicMediaConnectionId | PublicMediaConnectionCreated_At | PublicMediaConnectionUpdated_At | PublicMediaConnectionName | PublicMediaConnectionSource | PublicMediaConnectionPublished_At | CreatePublicMediaPayload | UpdatePublicMediaPayload | DeletePublicMediaPayload | Snippets | SnippetsConnection | SnippetsAggregator | SnippetsGroupBy | SnippetsConnectionId | SnippetsConnectionCreated_At | SnippetsConnectionUpdated_At | SnippetsConnectionKey | SnippetsConnectionText | SnippetsConnectionPublished_At | CreateSnippetPayload | UpdateSnippetPayload | DeleteSnippetPayload | StaffHelpPages | StaffHelpPagesConnection | StaffHelpPagesAggregator | StaffHelpPagesGroupBy | StaffHelpPagesConnectionId | StaffHelpPagesConnectionCreated_At | StaffHelpPagesConnectionUpdated_At | StaffHelpPagesConnectionCategory | StaffHelpPagesConnectionTitle | StaffHelpPagesConnectionContent | StaffHelpPagesConnectionPublished_At | CreateStaffHelpPagePayload | UpdateStaffHelpPagePayload | DeleteStaffHelpPagePayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createMedal?: Maybe<CreateMedalPayload>;
  updateMedal?: Maybe<UpdateMedalPayload>;
  deleteMedal?: Maybe<DeleteMedalPayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  createProgressMessage?: Maybe<CreateProgressMessagePayload>;
  updateProgressMessage?: Maybe<UpdateProgressMessagePayload>;
  deleteProgressMessage?: Maybe<DeleteProgressMessagePayload>;
  createPublicMedia?: Maybe<CreatePublicMediaPayload>;
  updatePublicMedia?: Maybe<UpdatePublicMediaPayload>;
  deletePublicMedia?: Maybe<DeletePublicMediaPayload>;
  createSnippet?: Maybe<CreateSnippetPayload>;
  updateSnippet?: Maybe<UpdateSnippetPayload>;
  deleteSnippet?: Maybe<DeleteSnippetPayload>;
  createStaffHelpPage?: Maybe<CreateStaffHelpPagePayload>;
  updateStaffHelpPage?: Maybe<UpdateStaffHelpPagePayload>;
  deleteStaffHelpPage?: Maybe<DeleteStaffHelpPagePayload>;
  deleteFile?: Maybe<DeleteFilePayload>;
  createRole?: Maybe<CreateRolePayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  createUser?: Maybe<CreateUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateMedalArgs = {
  input?: Maybe<CreateMedalInput>;
};


export type MutationUpdateMedalArgs = {
  input?: Maybe<UpdateMedalInput>;
};


export type MutationDeleteMedalArgs = {
  input?: Maybe<DeleteMedalInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationCreateProgressMessageArgs = {
  input?: Maybe<CreateProgressMessageInput>;
};


export type MutationUpdateProgressMessageArgs = {
  input?: Maybe<UpdateProgressMessageInput>;
};


export type MutationDeleteProgressMessageArgs = {
  input?: Maybe<DeleteProgressMessageInput>;
};


export type MutationCreatePublicMediaArgs = {
  input?: Maybe<CreatePublicMediaInput>;
};


export type MutationUpdatePublicMediaArgs = {
  input?: Maybe<UpdatePublicMediaInput>;
};


export type MutationDeletePublicMediaArgs = {
  input?: Maybe<DeletePublicMediaInput>;
};


export type MutationCreateSnippetArgs = {
  input?: Maybe<CreateSnippetInput>;
};


export type MutationUpdateSnippetArgs = {
  input?: Maybe<UpdateSnippetInput>;
};


export type MutationDeleteSnippetArgs = {
  input?: Maybe<DeleteSnippetInput>;
};


export type MutationCreateStaffHelpPageArgs = {
  input?: Maybe<CreateStaffHelpPageInput>;
};


export type MutationUpdateStaffHelpPageArgs = {
  input?: Maybe<UpdateStaffHelpPageInput>;
};


export type MutationDeleteStaffHelpPageArgs = {
  input?: Maybe<DeleteStaffHelpPageInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type PageInput = {
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  Slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Pages = {
  __typename?: 'Pages';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  Slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PagesAggregator = {
  __typename?: 'PagesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagesConnection = {
  __typename?: 'PagesConnection';
  values?: Maybe<Array<Maybe<Pages>>>;
  groupBy?: Maybe<PagesGroupBy>;
  aggregate?: Maybe<PagesAggregator>;
};

export type PagesConnectionContent = {
  __typename?: 'PagesConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionCreated_At = {
  __typename?: 'PagesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionId = {
  __typename?: 'PagesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionPublished_At = {
  __typename?: 'PagesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionSlug = {
  __typename?: 'PagesConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionTitle = {
  __typename?: 'PagesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionUpdated_At = {
  __typename?: 'PagesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesGroupBy = {
  __typename?: 'PagesGroupBy';
  id?: Maybe<Array<Maybe<PagesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PagesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PagesConnectionUpdated_At>>>;
  Title?: Maybe<Array<Maybe<PagesConnectionTitle>>>;
  Content?: Maybe<Array<Maybe<PagesConnectionContent>>>;
  Slug?: Maybe<Array<Maybe<PagesConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<PagesConnectionPublished_At>>>;
};

export type ProgressMessageInput = {
  DayOfMonth: Scalars['Int'];
  Message?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ProgressMessages = {
  __typename?: 'ProgressMessages';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  DayOfMonth: Scalars['Int'];
  Message?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ProgressMessagesAggregator = {
  __typename?: 'ProgressMessagesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProgressMessagesAggregatorSum>;
  avg?: Maybe<ProgressMessagesAggregatorAvg>;
  min?: Maybe<ProgressMessagesAggregatorMin>;
  max?: Maybe<ProgressMessagesAggregatorMax>;
};

export type ProgressMessagesAggregatorAvg = {
  __typename?: 'ProgressMessagesAggregatorAvg';
  DayOfMonth?: Maybe<Scalars['Float']>;
};

export type ProgressMessagesAggregatorMax = {
  __typename?: 'ProgressMessagesAggregatorMax';
  DayOfMonth?: Maybe<Scalars['Float']>;
};

export type ProgressMessagesAggregatorMin = {
  __typename?: 'ProgressMessagesAggregatorMin';
  DayOfMonth?: Maybe<Scalars['Float']>;
};

export type ProgressMessagesAggregatorSum = {
  __typename?: 'ProgressMessagesAggregatorSum';
  DayOfMonth?: Maybe<Scalars['Float']>;
};

export type ProgressMessagesConnection = {
  __typename?: 'ProgressMessagesConnection';
  values?: Maybe<Array<Maybe<ProgressMessages>>>;
  groupBy?: Maybe<ProgressMessagesGroupBy>;
  aggregate?: Maybe<ProgressMessagesAggregator>;
};

export type ProgressMessagesConnectionCreated_At = {
  __typename?: 'ProgressMessagesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesConnectionDayOfMonth = {
  __typename?: 'ProgressMessagesConnectionDayOfMonth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesConnectionId = {
  __typename?: 'ProgressMessagesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesConnectionMessage = {
  __typename?: 'ProgressMessagesConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesConnectionPublished_At = {
  __typename?: 'ProgressMessagesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesConnectionUpdated_At = {
  __typename?: 'ProgressMessagesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProgressMessagesConnection>;
};

export type ProgressMessagesGroupBy = {
  __typename?: 'ProgressMessagesGroupBy';
  id?: Maybe<Array<Maybe<ProgressMessagesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProgressMessagesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProgressMessagesConnectionUpdated_At>>>;
  DayOfMonth?: Maybe<Array<Maybe<ProgressMessagesConnectionDayOfMonth>>>;
  Message?: Maybe<Array<Maybe<ProgressMessagesConnectionMessage>>>;
  published_at?: Maybe<Array<Maybe<ProgressMessagesConnectionPublished_At>>>;
};

export type PublicMedia = {
  __typename?: 'PublicMedia';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  source?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PublicMediaAggregator = {
  __typename?: 'PublicMediaAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PublicMediaConnection = {
  __typename?: 'PublicMediaConnection';
  values?: Maybe<Array<Maybe<PublicMedia>>>;
  groupBy?: Maybe<PublicMediaGroupBy>;
  aggregate?: Maybe<PublicMediaAggregator>;
};

export type PublicMediaConnectionCreated_At = {
  __typename?: 'PublicMediaConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaConnectionId = {
  __typename?: 'PublicMediaConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaConnectionName = {
  __typename?: 'PublicMediaConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaConnectionPublished_At = {
  __typename?: 'PublicMediaConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaConnectionSource = {
  __typename?: 'PublicMediaConnectionSource';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaConnectionUpdated_At = {
  __typename?: 'PublicMediaConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PublicMediaConnection>;
};

export type PublicMediaGroupBy = {
  __typename?: 'PublicMediaGroupBy';
  id?: Maybe<Array<Maybe<PublicMediaConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PublicMediaConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PublicMediaConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<PublicMediaConnectionName>>>;
  source?: Maybe<Array<Maybe<PublicMediaConnectionSource>>>;
  published_at?: Maybe<Array<Maybe<PublicMediaConnectionPublished_At>>>;
};

export type PublicMediaInput = {
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  medal?: Maybe<Medals>;
  medals?: Maybe<Array<Maybe<Medals>>>;
  medalsConnection?: Maybe<MedalsConnection>;
  page?: Maybe<Pages>;
  pages?: Maybe<Array<Maybe<Pages>>>;
  pagesConnection?: Maybe<PagesConnection>;
  progressMessage?: Maybe<ProgressMessages>;
  progressMessages?: Maybe<Array<Maybe<ProgressMessages>>>;
  progressMessagesConnection?: Maybe<ProgressMessagesConnection>;
  publicMedia?: Maybe<PublicMedia>;
  publicMedias?: Maybe<Array<Maybe<PublicMedia>>>;
  publicMediasConnection?: Maybe<PublicMediaConnection>;
  snippet?: Maybe<Snippets>;
  snippets?: Maybe<Array<Maybe<Snippets>>>;
  snippetsConnection?: Maybe<SnippetsConnection>;
  staffHelpPage?: Maybe<StaffHelpPages>;
  staffHelpPages?: Maybe<Array<Maybe<StaffHelpPages>>>;
  staffHelpPagesConnection?: Maybe<StaffHelpPagesConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryMedalArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMedalsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMedalsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProgressMessageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProgressMessagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProgressMessagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPublicMediaArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicMediasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPublicMediasConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySnippetArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySnippetsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySnippetsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStaffHelpPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryStaffHelpPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryStaffHelpPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SnippetInput = {
  Key?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Snippets = {
  __typename?: 'Snippets';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Key?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SnippetsAggregator = {
  __typename?: 'SnippetsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SnippetsConnection = {
  __typename?: 'SnippetsConnection';
  values?: Maybe<Array<Maybe<Snippets>>>;
  groupBy?: Maybe<SnippetsGroupBy>;
  aggregate?: Maybe<SnippetsAggregator>;
};

export type SnippetsConnectionCreated_At = {
  __typename?: 'SnippetsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsConnectionId = {
  __typename?: 'SnippetsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsConnectionKey = {
  __typename?: 'SnippetsConnectionKey';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsConnectionPublished_At = {
  __typename?: 'SnippetsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsConnectionText = {
  __typename?: 'SnippetsConnectionText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsConnectionUpdated_At = {
  __typename?: 'SnippetsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SnippetsConnection>;
};

export type SnippetsGroupBy = {
  __typename?: 'SnippetsGroupBy';
  id?: Maybe<Array<Maybe<SnippetsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SnippetsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SnippetsConnectionUpdated_At>>>;
  Key?: Maybe<Array<Maybe<SnippetsConnectionKey>>>;
  Text?: Maybe<Array<Maybe<SnippetsConnectionText>>>;
  published_at?: Maybe<Array<Maybe<SnippetsConnectionPublished_At>>>;
};

export type StaffHelpPageInput = {
  Category?: Maybe<Enum_Staffhelppages_Category>;
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StaffHelpPages = {
  __typename?: 'StaffHelpPages';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  Category?: Maybe<Enum_Staffhelppages_Category>;
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StaffHelpPagesAggregator = {
  __typename?: 'StaffHelpPagesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StaffHelpPagesConnection = {
  __typename?: 'StaffHelpPagesConnection';
  values?: Maybe<Array<Maybe<StaffHelpPages>>>;
  groupBy?: Maybe<StaffHelpPagesGroupBy>;
  aggregate?: Maybe<StaffHelpPagesAggregator>;
};

export type StaffHelpPagesConnectionCategory = {
  __typename?: 'StaffHelpPagesConnectionCategory';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionContent = {
  __typename?: 'StaffHelpPagesConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionCreated_At = {
  __typename?: 'StaffHelpPagesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionId = {
  __typename?: 'StaffHelpPagesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionPublished_At = {
  __typename?: 'StaffHelpPagesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionTitle = {
  __typename?: 'StaffHelpPagesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesConnectionUpdated_At = {
  __typename?: 'StaffHelpPagesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StaffHelpPagesConnection>;
};

export type StaffHelpPagesGroupBy = {
  __typename?: 'StaffHelpPagesGroupBy';
  id?: Maybe<Array<Maybe<StaffHelpPagesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StaffHelpPagesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StaffHelpPagesConnectionUpdated_At>>>;
  Category?: Maybe<Array<Maybe<StaffHelpPagesConnectionCategory>>>;
  Title?: Maybe<Array<Maybe<StaffHelpPagesConnectionTitle>>>;
  Content?: Maybe<Array<Maybe<StaffHelpPagesConnectionContent>>>;
  published_at?: Maybe<Array<Maybe<StaffHelpPagesConnectionPublished_At>>>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateMedalInput = {
  data?: Maybe<MedalInput>;
};

export type CreateMedalPayload = {
  __typename?: 'createMedalPayload';
  medal?: Maybe<Medals>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Pages>;
};

export type CreateProgressMessageInput = {
  data?: Maybe<ProgressMessageInput>;
};

export type CreateProgressMessagePayload = {
  __typename?: 'createProgressMessagePayload';
  progressMessage?: Maybe<ProgressMessages>;
};

export type CreatePublicMediaInput = {
  data?: Maybe<PublicMediaInput>;
};

export type CreatePublicMediaPayload = {
  __typename?: 'createPublicMediaPayload';
  publicMedia?: Maybe<PublicMedia>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSnippetInput = {
  data?: Maybe<SnippetInput>;
};

export type CreateSnippetPayload = {
  __typename?: 'createSnippetPayload';
  snippet?: Maybe<Snippets>;
};

export type CreateStaffHelpPageInput = {
  data?: Maybe<StaffHelpPageInput>;
};

export type CreateStaffHelpPagePayload = {
  __typename?: 'createStaffHelpPagePayload';
  staffHelpPage?: Maybe<StaffHelpPages>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteMedalInput = {
  where?: Maybe<InputId>;
};

export type DeleteMedalPayload = {
  __typename?: 'deleteMedalPayload';
  medal?: Maybe<Medals>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Pages>;
};

export type DeleteProgressMessageInput = {
  where?: Maybe<InputId>;
};

export type DeleteProgressMessagePayload = {
  __typename?: 'deleteProgressMessagePayload';
  progressMessage?: Maybe<ProgressMessages>;
};

export type DeletePublicMediaInput = {
  where?: Maybe<InputId>;
};

export type DeletePublicMediaPayload = {
  __typename?: 'deletePublicMediaPayload';
  publicMedia?: Maybe<PublicMedia>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSnippetInput = {
  where?: Maybe<InputId>;
};

export type DeleteSnippetPayload = {
  __typename?: 'deleteSnippetPayload';
  snippet?: Maybe<Snippets>;
};

export type DeleteStaffHelpPageInput = {
  where?: Maybe<InputId>;
};

export type DeleteStaffHelpPagePayload = {
  __typename?: 'deleteStaffHelpPagePayload';
  staffHelpPage?: Maybe<StaffHelpPages>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMedalInput = {
  Year?: Maybe<Scalars['Int']>;
  Month?: Maybe<Scalars['Int']>;
  Type?: Maybe<Enum_Medals_Type>;
  Image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  Slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProgressMessageInput = {
  DayOfMonth?: Maybe<Scalars['Int']>;
  Message?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPublicMediaInput = {
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSnippetInput = {
  Key?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStaffHelpPageInput = {
  Category?: Maybe<Enum_Staffhelppages_Category>;
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMedalInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMedalInput>;
};

export type UpdateMedalPayload = {
  __typename?: 'updateMedalPayload';
  medal?: Maybe<Medals>;
};

export type UpdatePageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Pages>;
};

export type UpdateProgressMessageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProgressMessageInput>;
};

export type UpdateProgressMessagePayload = {
  __typename?: 'updateProgressMessagePayload';
  progressMessage?: Maybe<ProgressMessages>;
};

export type UpdatePublicMediaInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPublicMediaInput>;
};

export type UpdatePublicMediaPayload = {
  __typename?: 'updatePublicMediaPayload';
  publicMedia?: Maybe<PublicMedia>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSnippetInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSnippetInput>;
};

export type UpdateSnippetPayload = {
  __typename?: 'updateSnippetPayload';
  snippet?: Maybe<Snippets>;
};

export type UpdateStaffHelpPageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStaffHelpPageInput>;
};

export type UpdateStaffHelpPagePayload = {
  __typename?: 'updateStaffHelpPagePayload';
  staffHelpPage?: Maybe<StaffHelpPages>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type MedalImagesQueryVariables = Exact<{
  year: Scalars['Int'];
  month: Scalars['Int'];
  type: Scalars['String'];
}>;


export type MedalImagesQuery = (
  { __typename?: 'Query' }
  & { medals?: Maybe<Array<Maybe<(
    { __typename?: 'Medals' }
    & Pick<Medals, 'id' | 'Year' | 'Month' | 'Type'>
    & { Image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'alternativeText' | 'url'>
    )> }
  )>>> }
);

export type MediaByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type MediaByNameQuery = (
  { __typename?: 'Query' }
  & { publicMedias?: Maybe<Array<Maybe<(
    { __typename?: 'PublicMedia' }
    & Pick<PublicMedia, 'name'>
    & { source?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type PagesBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PagesBySlugQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Pages' }
    & Pick<Pages, 'id' | 'Title' | 'Content'>
  )>>> }
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
  AdminUser: ResolverTypeWrapper<AdminUser>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ENUM_MEDALS_TYPE: Enum_Medals_Type;
  ENUM_STAFFHELPPAGES_CATEGORY: Enum_Staffhelppages_Category;
  FileInfoInput: FileInfoInput;
  FileInput: FileInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  InputID: InputId;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LocaleInput: LocaleInput;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  MedalInput: MedalInput;
  Medals: ResolverTypeWrapper<Medals>;
  MedalsAggregator: ResolverTypeWrapper<MedalsAggregator>;
  MedalsAggregatorAvg: ResolverTypeWrapper<MedalsAggregatorAvg>;
  MedalsAggregatorMax: ResolverTypeWrapper<MedalsAggregatorMax>;
  MedalsAggregatorMin: ResolverTypeWrapper<MedalsAggregatorMin>;
  MedalsAggregatorSum: ResolverTypeWrapper<MedalsAggregatorSum>;
  MedalsConnection: ResolverTypeWrapper<MedalsConnection>;
  MedalsConnectionCreated_at: ResolverTypeWrapper<MedalsConnectionCreated_At>;
  MedalsConnectionId: ResolverTypeWrapper<MedalsConnectionId>;
  MedalsConnectionImage: ResolverTypeWrapper<MedalsConnectionImage>;
  MedalsConnectionMonth: ResolverTypeWrapper<MedalsConnectionMonth>;
  MedalsConnectionPublished_at: ResolverTypeWrapper<MedalsConnectionPublished_At>;
  MedalsConnectionType: ResolverTypeWrapper<MedalsConnectionType>;
  MedalsConnectionUpdated_at: ResolverTypeWrapper<MedalsConnectionUpdated_At>;
  MedalsConnectionYear: ResolverTypeWrapper<MedalsConnectionYear>;
  MedalsGroupBy: ResolverTypeWrapper<MedalsGroupBy>;
  Morph: ResolversTypes['UsersPermissionsMe'] | ResolversTypes['UsersPermissionsMeRole'] | ResolversTypes['UsersPermissionsLoginPayload'] | ResolversTypes['UserPermissionsPasswordPayload'] | ResolversTypes['Medals'] | ResolversTypes['MedalsConnection'] | ResolversTypes['MedalsAggregator'] | ResolversTypes['MedalsAggregatorSum'] | ResolversTypes['MedalsAggregatorAvg'] | ResolversTypes['MedalsAggregatorMin'] | ResolversTypes['MedalsAggregatorMax'] | ResolversTypes['MedalsGroupBy'] | ResolversTypes['MedalsConnectionId'] | ResolversTypes['MedalsConnectionCreated_at'] | ResolversTypes['MedalsConnectionUpdated_at'] | ResolversTypes['MedalsConnectionYear'] | ResolversTypes['MedalsConnectionMonth'] | ResolversTypes['MedalsConnectionType'] | ResolversTypes['MedalsConnectionImage'] | ResolversTypes['MedalsConnectionPublished_at'] | ResolversTypes['createMedalPayload'] | ResolversTypes['updateMedalPayload'] | ResolversTypes['deleteMedalPayload'] | ResolversTypes['Pages'] | ResolversTypes['PagesConnection'] | ResolversTypes['PagesAggregator'] | ResolversTypes['PagesGroupBy'] | ResolversTypes['PagesConnectionId'] | ResolversTypes['PagesConnectionCreated_at'] | ResolversTypes['PagesConnectionUpdated_at'] | ResolversTypes['PagesConnectionTitle'] | ResolversTypes['PagesConnectionContent'] | ResolversTypes['PagesConnectionSlug'] | ResolversTypes['PagesConnectionPublished_at'] | ResolversTypes['createPagePayload'] | ResolversTypes['updatePagePayload'] | ResolversTypes['deletePagePayload'] | ResolversTypes['ProgressMessages'] | ResolversTypes['ProgressMessagesConnection'] | ResolversTypes['ProgressMessagesAggregator'] | ResolversTypes['ProgressMessagesAggregatorSum'] | ResolversTypes['ProgressMessagesAggregatorAvg'] | ResolversTypes['ProgressMessagesAggregatorMin'] | ResolversTypes['ProgressMessagesAggregatorMax'] | ResolversTypes['ProgressMessagesGroupBy'] | ResolversTypes['ProgressMessagesConnectionId'] | ResolversTypes['ProgressMessagesConnectionCreated_at'] | ResolversTypes['ProgressMessagesConnectionUpdated_at'] | ResolversTypes['ProgressMessagesConnectionDayOfMonth'] | ResolversTypes['ProgressMessagesConnectionMessage'] | ResolversTypes['ProgressMessagesConnectionPublished_at'] | ResolversTypes['createProgressMessagePayload'] | ResolversTypes['updateProgressMessagePayload'] | ResolversTypes['deleteProgressMessagePayload'] | ResolversTypes['PublicMedia'] | ResolversTypes['PublicMediaConnection'] | ResolversTypes['PublicMediaAggregator'] | ResolversTypes['PublicMediaGroupBy'] | ResolversTypes['PublicMediaConnectionId'] | ResolversTypes['PublicMediaConnectionCreated_at'] | ResolversTypes['PublicMediaConnectionUpdated_at'] | ResolversTypes['PublicMediaConnectionName'] | ResolversTypes['PublicMediaConnectionSource'] | ResolversTypes['PublicMediaConnectionPublished_at'] | ResolversTypes['createPublicMediaPayload'] | ResolversTypes['updatePublicMediaPayload'] | ResolversTypes['deletePublicMediaPayload'] | ResolversTypes['Snippets'] | ResolversTypes['SnippetsConnection'] | ResolversTypes['SnippetsAggregator'] | ResolversTypes['SnippetsGroupBy'] | ResolversTypes['SnippetsConnectionId'] | ResolversTypes['SnippetsConnectionCreated_at'] | ResolversTypes['SnippetsConnectionUpdated_at'] | ResolversTypes['SnippetsConnectionKey'] | ResolversTypes['SnippetsConnectionText'] | ResolversTypes['SnippetsConnectionPublished_at'] | ResolversTypes['createSnippetPayload'] | ResolversTypes['updateSnippetPayload'] | ResolversTypes['deleteSnippetPayload'] | ResolversTypes['StaffHelpPages'] | ResolversTypes['StaffHelpPagesConnection'] | ResolversTypes['StaffHelpPagesAggregator'] | ResolversTypes['StaffHelpPagesGroupBy'] | ResolversTypes['StaffHelpPagesConnectionId'] | ResolversTypes['StaffHelpPagesConnectionCreated_at'] | ResolversTypes['StaffHelpPagesConnectionUpdated_at'] | ResolversTypes['StaffHelpPagesConnectionCategory'] | ResolversTypes['StaffHelpPagesConnectionTitle'] | ResolversTypes['StaffHelpPagesConnectionContent'] | ResolversTypes['StaffHelpPagesConnectionPublished_at'] | ResolversTypes['createStaffHelpPagePayload'] | ResolversTypes['updateStaffHelpPagePayload'] | ResolversTypes['deleteStaffHelpPagePayload'] | ResolversTypes['I18NLocale'] | ResolversTypes['UploadFile'] | ResolversTypes['UploadFileConnection'] | ResolversTypes['UploadFileAggregator'] | ResolversTypes['UploadFileAggregatorSum'] | ResolversTypes['UploadFileAggregatorAvg'] | ResolversTypes['UploadFileAggregatorMin'] | ResolversTypes['UploadFileAggregatorMax'] | ResolversTypes['UploadFileGroupBy'] | ResolversTypes['UploadFileConnectionId'] | ResolversTypes['UploadFileConnectionCreated_at'] | ResolversTypes['UploadFileConnectionUpdated_at'] | ResolversTypes['UploadFileConnectionName'] | ResolversTypes['UploadFileConnectionAlternativeText'] | ResolversTypes['UploadFileConnectionCaption'] | ResolversTypes['UploadFileConnectionWidth'] | ResolversTypes['UploadFileConnectionHeight'] | ResolversTypes['UploadFileConnectionFormats'] | ResolversTypes['UploadFileConnectionHash'] | ResolversTypes['UploadFileConnectionExt'] | ResolversTypes['UploadFileConnectionMime'] | ResolversTypes['UploadFileConnectionSize'] | ResolversTypes['UploadFileConnectionUrl'] | ResolversTypes['UploadFileConnectionPreviewUrl'] | ResolversTypes['UploadFileConnectionProvider'] | ResolversTypes['UploadFileConnectionProvider_metadata'] | ResolversTypes['deleteFilePayload'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsRoleConnection'] | ResolversTypes['UsersPermissionsRoleAggregator'] | ResolversTypes['UsersPermissionsRoleGroupBy'] | ResolversTypes['UsersPermissionsRoleConnectionId'] | ResolversTypes['UsersPermissionsRoleConnectionName'] | ResolversTypes['UsersPermissionsRoleConnectionDescription'] | ResolversTypes['UsersPermissionsRoleConnectionType'] | ResolversTypes['createRolePayload'] | ResolversTypes['updateRolePayload'] | ResolversTypes['deleteRolePayload'] | ResolversTypes['UsersPermissionsUser'] | ResolversTypes['UsersPermissionsUserConnection'] | ResolversTypes['UsersPermissionsUserAggregator'] | ResolversTypes['UsersPermissionsUserGroupBy'] | ResolversTypes['UsersPermissionsUserConnectionId'] | ResolversTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversTypes['UsersPermissionsUserConnectionUsername'] | ResolversTypes['UsersPermissionsUserConnectionEmail'] | ResolversTypes['UsersPermissionsUserConnectionProvider'] | ResolversTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversTypes['UsersPermissionsUserConnectionBlocked'] | ResolversTypes['UsersPermissionsUserConnectionRole'] | ResolversTypes['createUserPayload'] | ResolversTypes['updateUserPayload'] | ResolversTypes['deleteUserPayload'];
  Mutation: ResolverTypeWrapper<{}>;
  PageInput: PageInput;
  Pages: ResolverTypeWrapper<Pages>;
  PagesAggregator: ResolverTypeWrapper<PagesAggregator>;
  PagesConnection: ResolverTypeWrapper<PagesConnection>;
  PagesConnectionContent: ResolverTypeWrapper<PagesConnectionContent>;
  PagesConnectionCreated_at: ResolverTypeWrapper<PagesConnectionCreated_At>;
  PagesConnectionId: ResolverTypeWrapper<PagesConnectionId>;
  PagesConnectionPublished_at: ResolverTypeWrapper<PagesConnectionPublished_At>;
  PagesConnectionSlug: ResolverTypeWrapper<PagesConnectionSlug>;
  PagesConnectionTitle: ResolverTypeWrapper<PagesConnectionTitle>;
  PagesConnectionUpdated_at: ResolverTypeWrapper<PagesConnectionUpdated_At>;
  PagesGroupBy: ResolverTypeWrapper<PagesGroupBy>;
  ProgressMessageInput: ProgressMessageInput;
  ProgressMessages: ResolverTypeWrapper<ProgressMessages>;
  ProgressMessagesAggregator: ResolverTypeWrapper<ProgressMessagesAggregator>;
  ProgressMessagesAggregatorAvg: ResolverTypeWrapper<ProgressMessagesAggregatorAvg>;
  ProgressMessagesAggregatorMax: ResolverTypeWrapper<ProgressMessagesAggregatorMax>;
  ProgressMessagesAggregatorMin: ResolverTypeWrapper<ProgressMessagesAggregatorMin>;
  ProgressMessagesAggregatorSum: ResolverTypeWrapper<ProgressMessagesAggregatorSum>;
  ProgressMessagesConnection: ResolverTypeWrapper<ProgressMessagesConnection>;
  ProgressMessagesConnectionCreated_at: ResolverTypeWrapper<ProgressMessagesConnectionCreated_At>;
  ProgressMessagesConnectionDayOfMonth: ResolverTypeWrapper<ProgressMessagesConnectionDayOfMonth>;
  ProgressMessagesConnectionId: ResolverTypeWrapper<ProgressMessagesConnectionId>;
  ProgressMessagesConnectionMessage: ResolverTypeWrapper<ProgressMessagesConnectionMessage>;
  ProgressMessagesConnectionPublished_at: ResolverTypeWrapper<ProgressMessagesConnectionPublished_At>;
  ProgressMessagesConnectionUpdated_at: ResolverTypeWrapper<ProgressMessagesConnectionUpdated_At>;
  ProgressMessagesGroupBy: ResolverTypeWrapper<ProgressMessagesGroupBy>;
  PublicMedia: ResolverTypeWrapper<PublicMedia>;
  PublicMediaAggregator: ResolverTypeWrapper<PublicMediaAggregator>;
  PublicMediaConnection: ResolverTypeWrapper<PublicMediaConnection>;
  PublicMediaConnectionCreated_at: ResolverTypeWrapper<PublicMediaConnectionCreated_At>;
  PublicMediaConnectionId: ResolverTypeWrapper<PublicMediaConnectionId>;
  PublicMediaConnectionName: ResolverTypeWrapper<PublicMediaConnectionName>;
  PublicMediaConnectionPublished_at: ResolverTypeWrapper<PublicMediaConnectionPublished_At>;
  PublicMediaConnectionSource: ResolverTypeWrapper<PublicMediaConnectionSource>;
  PublicMediaConnectionUpdated_at: ResolverTypeWrapper<PublicMediaConnectionUpdated_At>;
  PublicMediaGroupBy: ResolverTypeWrapper<PublicMediaGroupBy>;
  PublicMediaInput: PublicMediaInput;
  PublicationState: PublicationState;
  Query: ResolverTypeWrapper<{}>;
  RoleInput: RoleInput;
  SnippetInput: SnippetInput;
  Snippets: ResolverTypeWrapper<Snippets>;
  SnippetsAggregator: ResolverTypeWrapper<SnippetsAggregator>;
  SnippetsConnection: ResolverTypeWrapper<SnippetsConnection>;
  SnippetsConnectionCreated_at: ResolverTypeWrapper<SnippetsConnectionCreated_At>;
  SnippetsConnectionId: ResolverTypeWrapper<SnippetsConnectionId>;
  SnippetsConnectionKey: ResolverTypeWrapper<SnippetsConnectionKey>;
  SnippetsConnectionPublished_at: ResolverTypeWrapper<SnippetsConnectionPublished_At>;
  SnippetsConnectionText: ResolverTypeWrapper<SnippetsConnectionText>;
  SnippetsConnectionUpdated_at: ResolverTypeWrapper<SnippetsConnectionUpdated_At>;
  SnippetsGroupBy: ResolverTypeWrapper<SnippetsGroupBy>;
  StaffHelpPageInput: StaffHelpPageInput;
  StaffHelpPages: ResolverTypeWrapper<StaffHelpPages>;
  StaffHelpPagesAggregator: ResolverTypeWrapper<StaffHelpPagesAggregator>;
  StaffHelpPagesConnection: ResolverTypeWrapper<StaffHelpPagesConnection>;
  StaffHelpPagesConnectionCategory: ResolverTypeWrapper<StaffHelpPagesConnectionCategory>;
  StaffHelpPagesConnectionContent: ResolverTypeWrapper<StaffHelpPagesConnectionContent>;
  StaffHelpPagesConnectionCreated_at: ResolverTypeWrapper<StaffHelpPagesConnectionCreated_At>;
  StaffHelpPagesConnectionId: ResolverTypeWrapper<StaffHelpPagesConnectionId>;
  StaffHelpPagesConnectionPublished_at: ResolverTypeWrapper<StaffHelpPagesConnectionPublished_At>;
  StaffHelpPagesConnectionTitle: ResolverTypeWrapper<StaffHelpPagesConnectionTitle>;
  StaffHelpPagesConnectionUpdated_at: ResolverTypeWrapper<StaffHelpPagesConnectionUpdated_At>;
  StaffHelpPagesGroupBy: ResolverTypeWrapper<StaffHelpPagesGroupBy>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['Morph']>>> }>;
  UploadFileAggregator: ResolverTypeWrapper<UploadFileAggregator>;
  UploadFileAggregatorAvg: ResolverTypeWrapper<UploadFileAggregatorAvg>;
  UploadFileAggregatorMax: ResolverTypeWrapper<UploadFileAggregatorMax>;
  UploadFileAggregatorMin: ResolverTypeWrapper<UploadFileAggregatorMin>;
  UploadFileAggregatorSum: ResolverTypeWrapper<UploadFileAggregatorSum>;
  UploadFileConnection: ResolverTypeWrapper<UploadFileConnection>;
  UploadFileConnectionAlternativeText: ResolverTypeWrapper<UploadFileConnectionAlternativeText>;
  UploadFileConnectionCaption: ResolverTypeWrapper<UploadFileConnectionCaption>;
  UploadFileConnectionCreated_at: ResolverTypeWrapper<UploadFileConnectionCreated_At>;
  UploadFileConnectionExt: ResolverTypeWrapper<UploadFileConnectionExt>;
  UploadFileConnectionFormats: ResolverTypeWrapper<UploadFileConnectionFormats>;
  UploadFileConnectionHash: ResolverTypeWrapper<UploadFileConnectionHash>;
  UploadFileConnectionHeight: ResolverTypeWrapper<UploadFileConnectionHeight>;
  UploadFileConnectionId: ResolverTypeWrapper<UploadFileConnectionId>;
  UploadFileConnectionMime: ResolverTypeWrapper<UploadFileConnectionMime>;
  UploadFileConnectionName: ResolverTypeWrapper<UploadFileConnectionName>;
  UploadFileConnectionPreviewUrl: ResolverTypeWrapper<UploadFileConnectionPreviewUrl>;
  UploadFileConnectionProvider: ResolverTypeWrapper<UploadFileConnectionProvider>;
  UploadFileConnectionProvider_metadata: ResolverTypeWrapper<UploadFileConnectionProvider_Metadata>;
  UploadFileConnectionSize: ResolverTypeWrapper<UploadFileConnectionSize>;
  UploadFileConnectionUpdated_at: ResolverTypeWrapper<UploadFileConnectionUpdated_At>;
  UploadFileConnectionUrl: ResolverTypeWrapper<UploadFileConnectionUrl>;
  UploadFileConnectionWidth: ResolverTypeWrapper<UploadFileConnectionWidth>;
  UploadFileGroupBy: ResolverTypeWrapper<UploadFileGroupBy>;
  UserInput: UserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UserPermissionsPasswordPayload: ResolverTypeWrapper<UserPermissionsPasswordPayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleAggregator: ResolverTypeWrapper<UsersPermissionsRoleAggregator>;
  UsersPermissionsRoleConnection: ResolverTypeWrapper<UsersPermissionsRoleConnection>;
  UsersPermissionsRoleConnectionDescription: ResolverTypeWrapper<UsersPermissionsRoleConnectionDescription>;
  UsersPermissionsRoleConnectionId: ResolverTypeWrapper<UsersPermissionsRoleConnectionId>;
  UsersPermissionsRoleConnectionName: ResolverTypeWrapper<UsersPermissionsRoleConnectionName>;
  UsersPermissionsRoleConnectionType: ResolverTypeWrapper<UsersPermissionsRoleConnectionType>;
  UsersPermissionsRoleGroupBy: ResolverTypeWrapper<UsersPermissionsRoleGroupBy>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserAggregator: ResolverTypeWrapper<UsersPermissionsUserAggregator>;
  UsersPermissionsUserConnection: ResolverTypeWrapper<UsersPermissionsUserConnection>;
  UsersPermissionsUserConnectionBlocked: ResolverTypeWrapper<UsersPermissionsUserConnectionBlocked>;
  UsersPermissionsUserConnectionConfirmed: ResolverTypeWrapper<UsersPermissionsUserConnectionConfirmed>;
  UsersPermissionsUserConnectionCreated_at: ResolverTypeWrapper<UsersPermissionsUserConnectionCreated_At>;
  UsersPermissionsUserConnectionEmail: ResolverTypeWrapper<UsersPermissionsUserConnectionEmail>;
  UsersPermissionsUserConnectionId: ResolverTypeWrapper<UsersPermissionsUserConnectionId>;
  UsersPermissionsUserConnectionProvider: ResolverTypeWrapper<UsersPermissionsUserConnectionProvider>;
  UsersPermissionsUserConnectionRole: ResolverTypeWrapper<UsersPermissionsUserConnectionRole>;
  UsersPermissionsUserConnectionUpdated_at: ResolverTypeWrapper<UsersPermissionsUserConnectionUpdated_At>;
  UsersPermissionsUserConnectionUsername: ResolverTypeWrapper<UsersPermissionsUserConnectionUsername>;
  UsersPermissionsUserGroupBy: ResolverTypeWrapper<UsersPermissionsUserGroupBy>;
  createMedalInput: CreateMedalInput;
  createMedalPayload: ResolverTypeWrapper<CreateMedalPayload>;
  createPageInput: CreatePageInput;
  createPagePayload: ResolverTypeWrapper<CreatePagePayload>;
  createProgressMessageInput: CreateProgressMessageInput;
  createProgressMessagePayload: ResolverTypeWrapper<CreateProgressMessagePayload>;
  createPublicMediaInput: CreatePublicMediaInput;
  createPublicMediaPayload: ResolverTypeWrapper<CreatePublicMediaPayload>;
  createRoleInput: CreateRoleInput;
  createRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  createSnippetInput: CreateSnippetInput;
  createSnippetPayload: ResolverTypeWrapper<CreateSnippetPayload>;
  createStaffHelpPageInput: CreateStaffHelpPageInput;
  createStaffHelpPagePayload: ResolverTypeWrapper<CreateStaffHelpPagePayload>;
  createUserInput: CreateUserInput;
  createUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  deleteFileInput: DeleteFileInput;
  deleteFilePayload: ResolverTypeWrapper<DeleteFilePayload>;
  deleteMedalInput: DeleteMedalInput;
  deleteMedalPayload: ResolverTypeWrapper<DeleteMedalPayload>;
  deletePageInput: DeletePageInput;
  deletePagePayload: ResolverTypeWrapper<DeletePagePayload>;
  deleteProgressMessageInput: DeleteProgressMessageInput;
  deleteProgressMessagePayload: ResolverTypeWrapper<DeleteProgressMessagePayload>;
  deletePublicMediaInput: DeletePublicMediaInput;
  deletePublicMediaPayload: ResolverTypeWrapper<DeletePublicMediaPayload>;
  deleteRoleInput: DeleteRoleInput;
  deleteRolePayload: ResolverTypeWrapper<DeleteRolePayload>;
  deleteSnippetInput: DeleteSnippetInput;
  deleteSnippetPayload: ResolverTypeWrapper<DeleteSnippetPayload>;
  deleteStaffHelpPageInput: DeleteStaffHelpPageInput;
  deleteStaffHelpPagePayload: ResolverTypeWrapper<DeleteStaffHelpPagePayload>;
  deleteUserInput: DeleteUserInput;
  deleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  editFileInput: EditFileInput;
  editLocaleInput: EditLocaleInput;
  editMedalInput: EditMedalInput;
  editPageInput: EditPageInput;
  editProgressMessageInput: EditProgressMessageInput;
  editPublicMediaInput: EditPublicMediaInput;
  editRoleInput: EditRoleInput;
  editSnippetInput: EditSnippetInput;
  editStaffHelpPageInput: EditStaffHelpPageInput;
  editUserInput: EditUserInput;
  updateMedalInput: UpdateMedalInput;
  updateMedalPayload: ResolverTypeWrapper<UpdateMedalPayload>;
  updatePageInput: UpdatePageInput;
  updatePagePayload: ResolverTypeWrapper<UpdatePagePayload>;
  updateProgressMessageInput: UpdateProgressMessageInput;
  updateProgressMessagePayload: ResolverTypeWrapper<UpdateProgressMessagePayload>;
  updatePublicMediaInput: UpdatePublicMediaInput;
  updatePublicMediaPayload: ResolverTypeWrapper<UpdatePublicMediaPayload>;
  updateRoleInput: UpdateRoleInput;
  updateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  updateSnippetInput: UpdateSnippetInput;
  updateSnippetPayload: ResolverTypeWrapper<UpdateSnippetPayload>;
  updateStaffHelpPageInput: UpdateStaffHelpPageInput;
  updateStaffHelpPagePayload: ResolverTypeWrapper<UpdateStaffHelpPagePayload>;
  updateUserInput: UpdateUserInput;
  updateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdminUser: AdminUser;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  FileInfoInput: FileInfoInput;
  FileInput: FileInput;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  I18NLocale: I18NLocale;
  InputID: InputId;
  JSON: Scalars['JSON'];
  LocaleInput: LocaleInput;
  Long: Scalars['Long'];
  MedalInput: MedalInput;
  Medals: Medals;
  MedalsAggregator: MedalsAggregator;
  MedalsAggregatorAvg: MedalsAggregatorAvg;
  MedalsAggregatorMax: MedalsAggregatorMax;
  MedalsAggregatorMin: MedalsAggregatorMin;
  MedalsAggregatorSum: MedalsAggregatorSum;
  MedalsConnection: MedalsConnection;
  MedalsConnectionCreated_at: MedalsConnectionCreated_At;
  MedalsConnectionId: MedalsConnectionId;
  MedalsConnectionImage: MedalsConnectionImage;
  MedalsConnectionMonth: MedalsConnectionMonth;
  MedalsConnectionPublished_at: MedalsConnectionPublished_At;
  MedalsConnectionType: MedalsConnectionType;
  MedalsConnectionUpdated_at: MedalsConnectionUpdated_At;
  MedalsConnectionYear: MedalsConnectionYear;
  MedalsGroupBy: MedalsGroupBy;
  Morph: ResolversParentTypes['UsersPermissionsMe'] | ResolversParentTypes['UsersPermissionsMeRole'] | ResolversParentTypes['UsersPermissionsLoginPayload'] | ResolversParentTypes['UserPermissionsPasswordPayload'] | ResolversParentTypes['Medals'] | ResolversParentTypes['MedalsConnection'] | ResolversParentTypes['MedalsAggregator'] | ResolversParentTypes['MedalsAggregatorSum'] | ResolversParentTypes['MedalsAggregatorAvg'] | ResolversParentTypes['MedalsAggregatorMin'] | ResolversParentTypes['MedalsAggregatorMax'] | ResolversParentTypes['MedalsGroupBy'] | ResolversParentTypes['MedalsConnectionId'] | ResolversParentTypes['MedalsConnectionCreated_at'] | ResolversParentTypes['MedalsConnectionUpdated_at'] | ResolversParentTypes['MedalsConnectionYear'] | ResolversParentTypes['MedalsConnectionMonth'] | ResolversParentTypes['MedalsConnectionType'] | ResolversParentTypes['MedalsConnectionImage'] | ResolversParentTypes['MedalsConnectionPublished_at'] | ResolversParentTypes['createMedalPayload'] | ResolversParentTypes['updateMedalPayload'] | ResolversParentTypes['deleteMedalPayload'] | ResolversParentTypes['Pages'] | ResolversParentTypes['PagesConnection'] | ResolversParentTypes['PagesAggregator'] | ResolversParentTypes['PagesGroupBy'] | ResolversParentTypes['PagesConnectionId'] | ResolversParentTypes['PagesConnectionCreated_at'] | ResolversParentTypes['PagesConnectionUpdated_at'] | ResolversParentTypes['PagesConnectionTitle'] | ResolversParentTypes['PagesConnectionContent'] | ResolversParentTypes['PagesConnectionSlug'] | ResolversParentTypes['PagesConnectionPublished_at'] | ResolversParentTypes['createPagePayload'] | ResolversParentTypes['updatePagePayload'] | ResolversParentTypes['deletePagePayload'] | ResolversParentTypes['ProgressMessages'] | ResolversParentTypes['ProgressMessagesConnection'] | ResolversParentTypes['ProgressMessagesAggregator'] | ResolversParentTypes['ProgressMessagesAggregatorSum'] | ResolversParentTypes['ProgressMessagesAggregatorAvg'] | ResolversParentTypes['ProgressMessagesAggregatorMin'] | ResolversParentTypes['ProgressMessagesAggregatorMax'] | ResolversParentTypes['ProgressMessagesGroupBy'] | ResolversParentTypes['ProgressMessagesConnectionId'] | ResolversParentTypes['ProgressMessagesConnectionCreated_at'] | ResolversParentTypes['ProgressMessagesConnectionUpdated_at'] | ResolversParentTypes['ProgressMessagesConnectionDayOfMonth'] | ResolversParentTypes['ProgressMessagesConnectionMessage'] | ResolversParentTypes['ProgressMessagesConnectionPublished_at'] | ResolversParentTypes['createProgressMessagePayload'] | ResolversParentTypes['updateProgressMessagePayload'] | ResolversParentTypes['deleteProgressMessagePayload'] | ResolversParentTypes['PublicMedia'] | ResolversParentTypes['PublicMediaConnection'] | ResolversParentTypes['PublicMediaAggregator'] | ResolversParentTypes['PublicMediaGroupBy'] | ResolversParentTypes['PublicMediaConnectionId'] | ResolversParentTypes['PublicMediaConnectionCreated_at'] | ResolversParentTypes['PublicMediaConnectionUpdated_at'] | ResolversParentTypes['PublicMediaConnectionName'] | ResolversParentTypes['PublicMediaConnectionSource'] | ResolversParentTypes['PublicMediaConnectionPublished_at'] | ResolversParentTypes['createPublicMediaPayload'] | ResolversParentTypes['updatePublicMediaPayload'] | ResolversParentTypes['deletePublicMediaPayload'] | ResolversParentTypes['Snippets'] | ResolversParentTypes['SnippetsConnection'] | ResolversParentTypes['SnippetsAggregator'] | ResolversParentTypes['SnippetsGroupBy'] | ResolversParentTypes['SnippetsConnectionId'] | ResolversParentTypes['SnippetsConnectionCreated_at'] | ResolversParentTypes['SnippetsConnectionUpdated_at'] | ResolversParentTypes['SnippetsConnectionKey'] | ResolversParentTypes['SnippetsConnectionText'] | ResolversParentTypes['SnippetsConnectionPublished_at'] | ResolversParentTypes['createSnippetPayload'] | ResolversParentTypes['updateSnippetPayload'] | ResolversParentTypes['deleteSnippetPayload'] | ResolversParentTypes['StaffHelpPages'] | ResolversParentTypes['StaffHelpPagesConnection'] | ResolversParentTypes['StaffHelpPagesAggregator'] | ResolversParentTypes['StaffHelpPagesGroupBy'] | ResolversParentTypes['StaffHelpPagesConnectionId'] | ResolversParentTypes['StaffHelpPagesConnectionCreated_at'] | ResolversParentTypes['StaffHelpPagesConnectionUpdated_at'] | ResolversParentTypes['StaffHelpPagesConnectionCategory'] | ResolversParentTypes['StaffHelpPagesConnectionTitle'] | ResolversParentTypes['StaffHelpPagesConnectionContent'] | ResolversParentTypes['StaffHelpPagesConnectionPublished_at'] | ResolversParentTypes['createStaffHelpPagePayload'] | ResolversParentTypes['updateStaffHelpPagePayload'] | ResolversParentTypes['deleteStaffHelpPagePayload'] | ResolversParentTypes['I18NLocale'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['UploadFileConnection'] | ResolversParentTypes['UploadFileAggregator'] | ResolversParentTypes['UploadFileAggregatorSum'] | ResolversParentTypes['UploadFileAggregatorAvg'] | ResolversParentTypes['UploadFileAggregatorMin'] | ResolversParentTypes['UploadFileAggregatorMax'] | ResolversParentTypes['UploadFileGroupBy'] | ResolversParentTypes['UploadFileConnectionId'] | ResolversParentTypes['UploadFileConnectionCreated_at'] | ResolversParentTypes['UploadFileConnectionUpdated_at'] | ResolversParentTypes['UploadFileConnectionName'] | ResolversParentTypes['UploadFileConnectionAlternativeText'] | ResolversParentTypes['UploadFileConnectionCaption'] | ResolversParentTypes['UploadFileConnectionWidth'] | ResolversParentTypes['UploadFileConnectionHeight'] | ResolversParentTypes['UploadFileConnectionFormats'] | ResolversParentTypes['UploadFileConnectionHash'] | ResolversParentTypes['UploadFileConnectionExt'] | ResolversParentTypes['UploadFileConnectionMime'] | ResolversParentTypes['UploadFileConnectionSize'] | ResolversParentTypes['UploadFileConnectionUrl'] | ResolversParentTypes['UploadFileConnectionPreviewUrl'] | ResolversParentTypes['UploadFileConnectionProvider'] | ResolversParentTypes['UploadFileConnectionProvider_metadata'] | ResolversParentTypes['deleteFilePayload'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsRoleConnection'] | ResolversParentTypes['UsersPermissionsRoleAggregator'] | ResolversParentTypes['UsersPermissionsRoleGroupBy'] | ResolversParentTypes['UsersPermissionsRoleConnectionId'] | ResolversParentTypes['UsersPermissionsRoleConnectionName'] | ResolversParentTypes['UsersPermissionsRoleConnectionDescription'] | ResolversParentTypes['UsersPermissionsRoleConnectionType'] | ResolversParentTypes['createRolePayload'] | ResolversParentTypes['updateRolePayload'] | ResolversParentTypes['deleteRolePayload'] | ResolversParentTypes['UsersPermissionsUser'] | ResolversParentTypes['UsersPermissionsUserConnection'] | ResolversParentTypes['UsersPermissionsUserAggregator'] | ResolversParentTypes['UsersPermissionsUserGroupBy'] | ResolversParentTypes['UsersPermissionsUserConnectionId'] | ResolversParentTypes['UsersPermissionsUserConnectionCreated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at'] | ResolversParentTypes['UsersPermissionsUserConnectionUsername'] | ResolversParentTypes['UsersPermissionsUserConnectionEmail'] | ResolversParentTypes['UsersPermissionsUserConnectionProvider'] | ResolversParentTypes['UsersPermissionsUserConnectionConfirmed'] | ResolversParentTypes['UsersPermissionsUserConnectionBlocked'] | ResolversParentTypes['UsersPermissionsUserConnectionRole'] | ResolversParentTypes['createUserPayload'] | ResolversParentTypes['updateUserPayload'] | ResolversParentTypes['deleteUserPayload'];
  Mutation: {};
  PageInput: PageInput;
  Pages: Pages;
  PagesAggregator: PagesAggregator;
  PagesConnection: PagesConnection;
  PagesConnectionContent: PagesConnectionContent;
  PagesConnectionCreated_at: PagesConnectionCreated_At;
  PagesConnectionId: PagesConnectionId;
  PagesConnectionPublished_at: PagesConnectionPublished_At;
  PagesConnectionSlug: PagesConnectionSlug;
  PagesConnectionTitle: PagesConnectionTitle;
  PagesConnectionUpdated_at: PagesConnectionUpdated_At;
  PagesGroupBy: PagesGroupBy;
  ProgressMessageInput: ProgressMessageInput;
  ProgressMessages: ProgressMessages;
  ProgressMessagesAggregator: ProgressMessagesAggregator;
  ProgressMessagesAggregatorAvg: ProgressMessagesAggregatorAvg;
  ProgressMessagesAggregatorMax: ProgressMessagesAggregatorMax;
  ProgressMessagesAggregatorMin: ProgressMessagesAggregatorMin;
  ProgressMessagesAggregatorSum: ProgressMessagesAggregatorSum;
  ProgressMessagesConnection: ProgressMessagesConnection;
  ProgressMessagesConnectionCreated_at: ProgressMessagesConnectionCreated_At;
  ProgressMessagesConnectionDayOfMonth: ProgressMessagesConnectionDayOfMonth;
  ProgressMessagesConnectionId: ProgressMessagesConnectionId;
  ProgressMessagesConnectionMessage: ProgressMessagesConnectionMessage;
  ProgressMessagesConnectionPublished_at: ProgressMessagesConnectionPublished_At;
  ProgressMessagesConnectionUpdated_at: ProgressMessagesConnectionUpdated_At;
  ProgressMessagesGroupBy: ProgressMessagesGroupBy;
  PublicMedia: PublicMedia;
  PublicMediaAggregator: PublicMediaAggregator;
  PublicMediaConnection: PublicMediaConnection;
  PublicMediaConnectionCreated_at: PublicMediaConnectionCreated_At;
  PublicMediaConnectionId: PublicMediaConnectionId;
  PublicMediaConnectionName: PublicMediaConnectionName;
  PublicMediaConnectionPublished_at: PublicMediaConnectionPublished_At;
  PublicMediaConnectionSource: PublicMediaConnectionSource;
  PublicMediaConnectionUpdated_at: PublicMediaConnectionUpdated_At;
  PublicMediaGroupBy: PublicMediaGroupBy;
  PublicMediaInput: PublicMediaInput;
  Query: {};
  RoleInput: RoleInput;
  SnippetInput: SnippetInput;
  Snippets: Snippets;
  SnippetsAggregator: SnippetsAggregator;
  SnippetsConnection: SnippetsConnection;
  SnippetsConnectionCreated_at: SnippetsConnectionCreated_At;
  SnippetsConnectionId: SnippetsConnectionId;
  SnippetsConnectionKey: SnippetsConnectionKey;
  SnippetsConnectionPublished_at: SnippetsConnectionPublished_At;
  SnippetsConnectionText: SnippetsConnectionText;
  SnippetsConnectionUpdated_at: SnippetsConnectionUpdated_At;
  SnippetsGroupBy: SnippetsGroupBy;
  StaffHelpPageInput: StaffHelpPageInput;
  StaffHelpPages: StaffHelpPages;
  StaffHelpPagesAggregator: StaffHelpPagesAggregator;
  StaffHelpPagesConnection: StaffHelpPagesConnection;
  StaffHelpPagesConnectionCategory: StaffHelpPagesConnectionCategory;
  StaffHelpPagesConnectionContent: StaffHelpPagesConnectionContent;
  StaffHelpPagesConnectionCreated_at: StaffHelpPagesConnectionCreated_At;
  StaffHelpPagesConnectionId: StaffHelpPagesConnectionId;
  StaffHelpPagesConnectionPublished_at: StaffHelpPagesConnectionPublished_At;
  StaffHelpPagesConnectionTitle: StaffHelpPagesConnectionTitle;
  StaffHelpPagesConnectionUpdated_at: StaffHelpPagesConnectionUpdated_At;
  StaffHelpPagesGroupBy: StaffHelpPagesGroupBy;
  Time: Scalars['Time'];
  Upload: Scalars['Upload'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['Morph']>>> };
  UploadFileAggregator: UploadFileAggregator;
  UploadFileAggregatorAvg: UploadFileAggregatorAvg;
  UploadFileAggregatorMax: UploadFileAggregatorMax;
  UploadFileAggregatorMin: UploadFileAggregatorMin;
  UploadFileAggregatorSum: UploadFileAggregatorSum;
  UploadFileConnection: UploadFileConnection;
  UploadFileConnectionAlternativeText: UploadFileConnectionAlternativeText;
  UploadFileConnectionCaption: UploadFileConnectionCaption;
  UploadFileConnectionCreated_at: UploadFileConnectionCreated_At;
  UploadFileConnectionExt: UploadFileConnectionExt;
  UploadFileConnectionFormats: UploadFileConnectionFormats;
  UploadFileConnectionHash: UploadFileConnectionHash;
  UploadFileConnectionHeight: UploadFileConnectionHeight;
  UploadFileConnectionId: UploadFileConnectionId;
  UploadFileConnectionMime: UploadFileConnectionMime;
  UploadFileConnectionName: UploadFileConnectionName;
  UploadFileConnectionPreviewUrl: UploadFileConnectionPreviewUrl;
  UploadFileConnectionProvider: UploadFileConnectionProvider;
  UploadFileConnectionProvider_metadata: UploadFileConnectionProvider_Metadata;
  UploadFileConnectionSize: UploadFileConnectionSize;
  UploadFileConnectionUpdated_at: UploadFileConnectionUpdated_At;
  UploadFileConnectionUrl: UploadFileConnectionUrl;
  UploadFileConnectionWidth: UploadFileConnectionWidth;
  UploadFileGroupBy: UploadFileGroupBy;
  UserInput: UserInput;
  Boolean: Scalars['Boolean'];
  UserPermissionsPasswordPayload: UserPermissionsPasswordPayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleAggregator: UsersPermissionsRoleAggregator;
  UsersPermissionsRoleConnection: UsersPermissionsRoleConnection;
  UsersPermissionsRoleConnectionDescription: UsersPermissionsRoleConnectionDescription;
  UsersPermissionsRoleConnectionId: UsersPermissionsRoleConnectionId;
  UsersPermissionsRoleConnectionName: UsersPermissionsRoleConnectionName;
  UsersPermissionsRoleConnectionType: UsersPermissionsRoleConnectionType;
  UsersPermissionsRoleGroupBy: UsersPermissionsRoleGroupBy;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserAggregator: UsersPermissionsUserAggregator;
  UsersPermissionsUserConnection: UsersPermissionsUserConnection;
  UsersPermissionsUserConnectionBlocked: UsersPermissionsUserConnectionBlocked;
  UsersPermissionsUserConnectionConfirmed: UsersPermissionsUserConnectionConfirmed;
  UsersPermissionsUserConnectionCreated_at: UsersPermissionsUserConnectionCreated_At;
  UsersPermissionsUserConnectionEmail: UsersPermissionsUserConnectionEmail;
  UsersPermissionsUserConnectionId: UsersPermissionsUserConnectionId;
  UsersPermissionsUserConnectionProvider: UsersPermissionsUserConnectionProvider;
  UsersPermissionsUserConnectionRole: UsersPermissionsUserConnectionRole;
  UsersPermissionsUserConnectionUpdated_at: UsersPermissionsUserConnectionUpdated_At;
  UsersPermissionsUserConnectionUsername: UsersPermissionsUserConnectionUsername;
  UsersPermissionsUserGroupBy: UsersPermissionsUserGroupBy;
  createMedalInput: CreateMedalInput;
  createMedalPayload: CreateMedalPayload;
  createPageInput: CreatePageInput;
  createPagePayload: CreatePagePayload;
  createProgressMessageInput: CreateProgressMessageInput;
  createProgressMessagePayload: CreateProgressMessagePayload;
  createPublicMediaInput: CreatePublicMediaInput;
  createPublicMediaPayload: CreatePublicMediaPayload;
  createRoleInput: CreateRoleInput;
  createRolePayload: CreateRolePayload;
  createSnippetInput: CreateSnippetInput;
  createSnippetPayload: CreateSnippetPayload;
  createStaffHelpPageInput: CreateStaffHelpPageInput;
  createStaffHelpPagePayload: CreateStaffHelpPagePayload;
  createUserInput: CreateUserInput;
  createUserPayload: CreateUserPayload;
  deleteFileInput: DeleteFileInput;
  deleteFilePayload: DeleteFilePayload;
  deleteMedalInput: DeleteMedalInput;
  deleteMedalPayload: DeleteMedalPayload;
  deletePageInput: DeletePageInput;
  deletePagePayload: DeletePagePayload;
  deleteProgressMessageInput: DeleteProgressMessageInput;
  deleteProgressMessagePayload: DeleteProgressMessagePayload;
  deletePublicMediaInput: DeletePublicMediaInput;
  deletePublicMediaPayload: DeletePublicMediaPayload;
  deleteRoleInput: DeleteRoleInput;
  deleteRolePayload: DeleteRolePayload;
  deleteSnippetInput: DeleteSnippetInput;
  deleteSnippetPayload: DeleteSnippetPayload;
  deleteStaffHelpPageInput: DeleteStaffHelpPageInput;
  deleteStaffHelpPagePayload: DeleteStaffHelpPagePayload;
  deleteUserInput: DeleteUserInput;
  deleteUserPayload: DeleteUserPayload;
  editFileInput: EditFileInput;
  editLocaleInput: EditLocaleInput;
  editMedalInput: EditMedalInput;
  editPageInput: EditPageInput;
  editProgressMessageInput: EditProgressMessageInput;
  editPublicMediaInput: EditPublicMediaInput;
  editRoleInput: EditRoleInput;
  editSnippetInput: EditSnippetInput;
  editStaffHelpPageInput: EditStaffHelpPageInput;
  editUserInput: EditUserInput;
  updateMedalInput: UpdateMedalInput;
  updateMedalPayload: UpdateMedalPayload;
  updatePageInput: UpdatePageInput;
  updatePagePayload: UpdatePagePayload;
  updateProgressMessageInput: UpdateProgressMessageInput;
  updateProgressMessagePayload: UpdateProgressMessagePayload;
  updatePublicMediaInput: UpdatePublicMediaInput;
  updatePublicMediaPayload: UpdatePublicMediaPayload;
  updateRoleInput: UpdateRoleInput;
  updateRolePayload: UpdateRolePayload;
  updateSnippetInput: UpdateSnippetInput;
  updateSnippetPayload: UpdateSnippetPayload;
  updateStaffHelpPageInput: UpdateStaffHelpPageInput;
  updateStaffHelpPagePayload: UpdateStaffHelpPagePayload;
  updateUserInput: UpdateUserInput;
  updateUserPayload: UpdateUserPayload;
};

export type AdminUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminUser'] = ResolversParentTypes['AdminUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MedalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Medals'] = ResolversParentTypes['Medals']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['ENUM_MEDALS_TYPE']>, ParentType, ContextType>;
  Image?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsAggregator'] = ResolversParentTypes['MedalsAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['MedalsAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['MedalsAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['MedalsAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['MedalsAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsAggregatorAvg'] = ResolversParentTypes['MedalsAggregatorAvg']> = {
  Year?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  Month?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsAggregatorMax'] = ResolversParentTypes['MedalsAggregatorMax']> = {
  Year?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  Month?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsAggregatorMin'] = ResolversParentTypes['MedalsAggregatorMin']> = {
  Year?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  Month?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsAggregatorSum'] = ResolversParentTypes['MedalsAggregatorSum']> = {
  Year?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  Month?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnection'] = ResolversParentTypes['MedalsConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Medals']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['MedalsGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['MedalsAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionCreated_at'] = ResolversParentTypes['MedalsConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionId'] = ResolversParentTypes['MedalsConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionImage'] = ResolversParentTypes['MedalsConnectionImage']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionMonthResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionMonth'] = ResolversParentTypes['MedalsConnectionMonth']> = {
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionPublished_at'] = ResolversParentTypes['MedalsConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionType'] = ResolversParentTypes['MedalsConnectionType']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionUpdated_at'] = ResolversParentTypes['MedalsConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsConnectionYearResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsConnectionYear'] = ResolversParentTypes['MedalsConnectionYear']> = {
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedalsGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedalsGroupBy'] = ResolversParentTypes['MedalsGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionUpdated_at']>>>, ParentType, ContextType>;
  Year?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionYear']>>>, ParentType, ContextType>;
  Month?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionMonth']>>>, ParentType, ContextType>;
  Type?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionType']>>>, ParentType, ContextType>;
  Image?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionImage']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['MedalsConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['Morph'] = ResolversParentTypes['Morph']> = {
  __resolveType: TypeResolveFn<'UsersPermissionsMe' | 'UsersPermissionsMeRole' | 'UsersPermissionsLoginPayload' | 'UserPermissionsPasswordPayload' | 'Medals' | 'MedalsConnection' | 'MedalsAggregator' | 'MedalsAggregatorSum' | 'MedalsAggregatorAvg' | 'MedalsAggregatorMin' | 'MedalsAggregatorMax' | 'MedalsGroupBy' | 'MedalsConnectionId' | 'MedalsConnectionCreated_at' | 'MedalsConnectionUpdated_at' | 'MedalsConnectionYear' | 'MedalsConnectionMonth' | 'MedalsConnectionType' | 'MedalsConnectionImage' | 'MedalsConnectionPublished_at' | 'createMedalPayload' | 'updateMedalPayload' | 'deleteMedalPayload' | 'Pages' | 'PagesConnection' | 'PagesAggregator' | 'PagesGroupBy' | 'PagesConnectionId' | 'PagesConnectionCreated_at' | 'PagesConnectionUpdated_at' | 'PagesConnectionTitle' | 'PagesConnectionContent' | 'PagesConnectionSlug' | 'PagesConnectionPublished_at' | 'createPagePayload' | 'updatePagePayload' | 'deletePagePayload' | 'ProgressMessages' | 'ProgressMessagesConnection' | 'ProgressMessagesAggregator' | 'ProgressMessagesAggregatorSum' | 'ProgressMessagesAggregatorAvg' | 'ProgressMessagesAggregatorMin' | 'ProgressMessagesAggregatorMax' | 'ProgressMessagesGroupBy' | 'ProgressMessagesConnectionId' | 'ProgressMessagesConnectionCreated_at' | 'ProgressMessagesConnectionUpdated_at' | 'ProgressMessagesConnectionDayOfMonth' | 'ProgressMessagesConnectionMessage' | 'ProgressMessagesConnectionPublished_at' | 'createProgressMessagePayload' | 'updateProgressMessagePayload' | 'deleteProgressMessagePayload' | 'PublicMedia' | 'PublicMediaConnection' | 'PublicMediaAggregator' | 'PublicMediaGroupBy' | 'PublicMediaConnectionId' | 'PublicMediaConnectionCreated_at' | 'PublicMediaConnectionUpdated_at' | 'PublicMediaConnectionName' | 'PublicMediaConnectionSource' | 'PublicMediaConnectionPublished_at' | 'createPublicMediaPayload' | 'updatePublicMediaPayload' | 'deletePublicMediaPayload' | 'Snippets' | 'SnippetsConnection' | 'SnippetsAggregator' | 'SnippetsGroupBy' | 'SnippetsConnectionId' | 'SnippetsConnectionCreated_at' | 'SnippetsConnectionUpdated_at' | 'SnippetsConnectionKey' | 'SnippetsConnectionText' | 'SnippetsConnectionPublished_at' | 'createSnippetPayload' | 'updateSnippetPayload' | 'deleteSnippetPayload' | 'StaffHelpPages' | 'StaffHelpPagesConnection' | 'StaffHelpPagesAggregator' | 'StaffHelpPagesGroupBy' | 'StaffHelpPagesConnectionId' | 'StaffHelpPagesConnectionCreated_at' | 'StaffHelpPagesConnectionUpdated_at' | 'StaffHelpPagesConnectionCategory' | 'StaffHelpPagesConnectionTitle' | 'StaffHelpPagesConnectionContent' | 'StaffHelpPagesConnectionPublished_at' | 'createStaffHelpPagePayload' | 'updateStaffHelpPagePayload' | 'deleteStaffHelpPagePayload' | 'I18NLocale' | 'UploadFile' | 'UploadFileConnection' | 'UploadFileAggregator' | 'UploadFileAggregatorSum' | 'UploadFileAggregatorAvg' | 'UploadFileAggregatorMin' | 'UploadFileAggregatorMax' | 'UploadFileGroupBy' | 'UploadFileConnectionId' | 'UploadFileConnectionCreated_at' | 'UploadFileConnectionUpdated_at' | 'UploadFileConnectionName' | 'UploadFileConnectionAlternativeText' | 'UploadFileConnectionCaption' | 'UploadFileConnectionWidth' | 'UploadFileConnectionHeight' | 'UploadFileConnectionFormats' | 'UploadFileConnectionHash' | 'UploadFileConnectionExt' | 'UploadFileConnectionMime' | 'UploadFileConnectionSize' | 'UploadFileConnectionUrl' | 'UploadFileConnectionPreviewUrl' | 'UploadFileConnectionProvider' | 'UploadFileConnectionProvider_metadata' | 'deleteFilePayload' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsRoleConnection' | 'UsersPermissionsRoleAggregator' | 'UsersPermissionsRoleGroupBy' | 'UsersPermissionsRoleConnectionId' | 'UsersPermissionsRoleConnectionName' | 'UsersPermissionsRoleConnectionDescription' | 'UsersPermissionsRoleConnectionType' | 'createRolePayload' | 'updateRolePayload' | 'deleteRolePayload' | 'UsersPermissionsUser' | 'UsersPermissionsUserConnection' | 'UsersPermissionsUserAggregator' | 'UsersPermissionsUserGroupBy' | 'UsersPermissionsUserConnectionId' | 'UsersPermissionsUserConnectionCreated_at' | 'UsersPermissionsUserConnectionUpdated_at' | 'UsersPermissionsUserConnectionUsername' | 'UsersPermissionsUserConnectionEmail' | 'UsersPermissionsUserConnectionProvider' | 'UsersPermissionsUserConnectionConfirmed' | 'UsersPermissionsUserConnectionBlocked' | 'UsersPermissionsUserConnectionRole' | 'createUserPayload' | 'updateUserPayload' | 'deleteUserPayload', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMedal?: Resolver<Maybe<ResolversTypes['createMedalPayload']>, ParentType, ContextType, RequireFields<MutationCreateMedalArgs, never>>;
  updateMedal?: Resolver<Maybe<ResolversTypes['updateMedalPayload']>, ParentType, ContextType, RequireFields<MutationUpdateMedalArgs, never>>;
  deleteMedal?: Resolver<Maybe<ResolversTypes['deleteMedalPayload']>, ParentType, ContextType, RequireFields<MutationDeleteMedalArgs, never>>;
  createPage?: Resolver<Maybe<ResolversTypes['createPagePayload']>, ParentType, ContextType, RequireFields<MutationCreatePageArgs, never>>;
  updatePage?: Resolver<Maybe<ResolversTypes['updatePagePayload']>, ParentType, ContextType, RequireFields<MutationUpdatePageArgs, never>>;
  deletePage?: Resolver<Maybe<ResolversTypes['deletePagePayload']>, ParentType, ContextType, RequireFields<MutationDeletePageArgs, never>>;
  createProgressMessage?: Resolver<Maybe<ResolversTypes['createProgressMessagePayload']>, ParentType, ContextType, RequireFields<MutationCreateProgressMessageArgs, never>>;
  updateProgressMessage?: Resolver<Maybe<ResolversTypes['updateProgressMessagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateProgressMessageArgs, never>>;
  deleteProgressMessage?: Resolver<Maybe<ResolversTypes['deleteProgressMessagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteProgressMessageArgs, never>>;
  createPublicMedia?: Resolver<Maybe<ResolversTypes['createPublicMediaPayload']>, ParentType, ContextType, RequireFields<MutationCreatePublicMediaArgs, never>>;
  updatePublicMedia?: Resolver<Maybe<ResolversTypes['updatePublicMediaPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePublicMediaArgs, never>>;
  deletePublicMedia?: Resolver<Maybe<ResolversTypes['deletePublicMediaPayload']>, ParentType, ContextType, RequireFields<MutationDeletePublicMediaArgs, never>>;
  createSnippet?: Resolver<Maybe<ResolversTypes['createSnippetPayload']>, ParentType, ContextType, RequireFields<MutationCreateSnippetArgs, never>>;
  updateSnippet?: Resolver<Maybe<ResolversTypes['updateSnippetPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSnippetArgs, never>>;
  deleteSnippet?: Resolver<Maybe<ResolversTypes['deleteSnippetPayload']>, ParentType, ContextType, RequireFields<MutationDeleteSnippetArgs, never>>;
  createStaffHelpPage?: Resolver<Maybe<ResolversTypes['createStaffHelpPagePayload']>, ParentType, ContextType, RequireFields<MutationCreateStaffHelpPageArgs, never>>;
  updateStaffHelpPage?: Resolver<Maybe<ResolversTypes['updateStaffHelpPagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateStaffHelpPageArgs, never>>;
  deleteStaffHelpPage?: Resolver<Maybe<ResolversTypes['deleteStaffHelpPagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteStaffHelpPageArgs, never>>;
  deleteFile?: Resolver<Maybe<ResolversTypes['deleteFilePayload']>, ParentType, ContextType, RequireFields<MutationDeleteFileArgs, never>>;
  createRole?: Resolver<Maybe<ResolversTypes['createRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, never>>;
  updateRole?: Resolver<Maybe<ResolversTypes['updateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, never>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['deleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, never>>;
  createUser?: Resolver<Maybe<ResolversTypes['createUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
  updateUser?: Resolver<Maybe<ResolversTypes['updateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, never>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['deleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, never>>;
  upload?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFile']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id' | 'info'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UserPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'password' | 'passwordConfirmation' | 'code'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
};

export type PagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pages'] = ResolversParentTypes['Pages']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesAggregator'] = ResolversParentTypes['PagesAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnection'] = ResolversParentTypes['PagesConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pages']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['PagesGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['PagesAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionContent'] = ResolversParentTypes['PagesConnectionContent']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionCreated_at'] = ResolversParentTypes['PagesConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionId'] = ResolversParentTypes['PagesConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionPublished_at'] = ResolversParentTypes['PagesConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionSlugResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionSlug'] = ResolversParentTypes['PagesConnectionSlug']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionTitle'] = ResolversParentTypes['PagesConnectionTitle']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesConnectionUpdated_at'] = ResolversParentTypes['PagesConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagesGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagesGroupBy'] = ResolversParentTypes['PagesGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionUpdated_at']>>>, ParentType, ContextType>;
  Title?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionTitle']>>>, ParentType, ContextType>;
  Content?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionContent']>>>, ParentType, ContextType>;
  Slug?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionSlug']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PagesConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessages'] = ResolversParentTypes['ProgressMessages']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  DayOfMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesAggregator'] = ResolversParentTypes['ProgressMessagesAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['ProgressMessagesAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['ProgressMessagesAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['ProgressMessagesAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['ProgressMessagesAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesAggregatorAvg'] = ResolversParentTypes['ProgressMessagesAggregatorAvg']> = {
  DayOfMonth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesAggregatorMax'] = ResolversParentTypes['ProgressMessagesAggregatorMax']> = {
  DayOfMonth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesAggregatorMin'] = ResolversParentTypes['ProgressMessagesAggregatorMin']> = {
  DayOfMonth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesAggregatorSum'] = ResolversParentTypes['ProgressMessagesAggregatorSum']> = {
  DayOfMonth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnection'] = ResolversParentTypes['ProgressMessagesConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessages']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['ProgressMessagesGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['ProgressMessagesAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionCreated_at'] = ResolversParentTypes['ProgressMessagesConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionDayOfMonthResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionDayOfMonth'] = ResolversParentTypes['ProgressMessagesConnectionDayOfMonth']> = {
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionId'] = ResolversParentTypes['ProgressMessagesConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionMessage'] = ResolversParentTypes['ProgressMessagesConnectionMessage']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionPublished_at'] = ResolversParentTypes['ProgressMessagesConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesConnectionUpdated_at'] = ResolversParentTypes['ProgressMessagesConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressMessagesGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressMessagesGroupBy'] = ResolversParentTypes['ProgressMessagesGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionUpdated_at']>>>, ParentType, ContextType>;
  DayOfMonth?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionDayOfMonth']>>>, ParentType, ContextType>;
  Message?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionMessage']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessagesConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMedia'] = ResolversParentTypes['PublicMedia']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaAggregator'] = ResolversParentTypes['PublicMediaAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnection'] = ResolversParentTypes['PublicMediaConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMedia']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['PublicMediaGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['PublicMediaAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionCreated_at'] = ResolversParentTypes['PublicMediaConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionId'] = ResolversParentTypes['PublicMediaConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionName'] = ResolversParentTypes['PublicMediaConnectionName']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionPublished_at'] = ResolversParentTypes['PublicMediaConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionSource'] = ResolversParentTypes['PublicMediaConnectionSource']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaConnectionUpdated_at'] = ResolversParentTypes['PublicMediaConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicMediaGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicMediaGroupBy'] = ResolversParentTypes['PublicMediaGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionName']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionSource']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMediaConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  medal?: Resolver<Maybe<ResolversTypes['Medals']>, ParentType, ContextType, RequireFields<QueryMedalArgs, 'id'>>;
  medals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Medals']>>>, ParentType, ContextType, RequireFields<QueryMedalsArgs, never>>;
  medalsConnection?: Resolver<Maybe<ResolversTypes['MedalsConnection']>, ParentType, ContextType, RequireFields<QueryMedalsConnectionArgs, never>>;
  page?: Resolver<Maybe<ResolversTypes['Pages']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'id'>>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pages']>>>, ParentType, ContextType, RequireFields<QueryPagesArgs, never>>;
  pagesConnection?: Resolver<Maybe<ResolversTypes['PagesConnection']>, ParentType, ContextType, RequireFields<QueryPagesConnectionArgs, never>>;
  progressMessage?: Resolver<Maybe<ResolversTypes['ProgressMessages']>, ParentType, ContextType, RequireFields<QueryProgressMessageArgs, 'id'>>;
  progressMessages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProgressMessages']>>>, ParentType, ContextType, RequireFields<QueryProgressMessagesArgs, never>>;
  progressMessagesConnection?: Resolver<Maybe<ResolversTypes['ProgressMessagesConnection']>, ParentType, ContextType, RequireFields<QueryProgressMessagesConnectionArgs, never>>;
  publicMedia?: Resolver<Maybe<ResolversTypes['PublicMedia']>, ParentType, ContextType, RequireFields<QueryPublicMediaArgs, 'id'>>;
  publicMedias?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicMedia']>>>, ParentType, ContextType, RequireFields<QueryPublicMediasArgs, never>>;
  publicMediasConnection?: Resolver<Maybe<ResolversTypes['PublicMediaConnection']>, ParentType, ContextType, RequireFields<QueryPublicMediasConnectionArgs, never>>;
  snippet?: Resolver<Maybe<ResolversTypes['Snippets']>, ParentType, ContextType, RequireFields<QuerySnippetArgs, 'id'>>;
  snippets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Snippets']>>>, ParentType, ContextType, RequireFields<QuerySnippetsArgs, never>>;
  snippetsConnection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType, RequireFields<QuerySnippetsConnectionArgs, never>>;
  staffHelpPage?: Resolver<Maybe<ResolversTypes['StaffHelpPages']>, ParentType, ContextType, RequireFields<QueryStaffHelpPageArgs, 'id'>>;
  staffHelpPages?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPages']>>>, ParentType, ContextType, RequireFields<QueryStaffHelpPagesArgs, never>>;
  staffHelpPagesConnection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType, RequireFields<QueryStaffHelpPagesConnectionArgs, never>>;
  files?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFile']>>>, ParentType, ContextType, RequireFields<QueryFilesArgs, never>>;
  filesConnection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType, RequireFields<QueryFilesConnectionArgs, never>>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>>, ParentType, ContextType, RequireFields<QueryRolesArgs, never>>;
  rolesConnection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType, RequireFields<QueryRolesConnectionArgs, never>>;
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
  usersConnection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType, RequireFields<QueryUsersConnectionArgs, never>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
};

export type SnippetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Snippets'] = ResolversParentTypes['Snippets']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsAggregator'] = ResolversParentTypes['SnippetsAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnection'] = ResolversParentTypes['SnippetsConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['Snippets']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['SnippetsGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['SnippetsAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionCreated_at'] = ResolversParentTypes['SnippetsConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionId'] = ResolversParentTypes['SnippetsConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionKey'] = ResolversParentTypes['SnippetsConnectionKey']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionPublished_at'] = ResolversParentTypes['SnippetsConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionText'] = ResolversParentTypes['SnippetsConnectionText']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsConnectionUpdated_at'] = ResolversParentTypes['SnippetsConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['SnippetsConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SnippetsGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['SnippetsGroupBy'] = ResolversParentTypes['SnippetsGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionUpdated_at']>>>, ParentType, ContextType>;
  Key?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionKey']>>>, ParentType, ContextType>;
  Text?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionText']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['SnippetsConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPages'] = ResolversParentTypes['StaffHelpPages']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Category?: Resolver<Maybe<ResolversTypes['ENUM_STAFFHELPPAGES_CATEGORY']>, ParentType, ContextType>;
  Title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesAggregator'] = ResolversParentTypes['StaffHelpPagesAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnection'] = ResolversParentTypes['StaffHelpPagesConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPages']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['StaffHelpPagesGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['StaffHelpPagesAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionCategory'] = ResolversParentTypes['StaffHelpPagesConnectionCategory']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionContent'] = ResolversParentTypes['StaffHelpPagesConnectionContent']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionCreated_at'] = ResolversParentTypes['StaffHelpPagesConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionId'] = ResolversParentTypes['StaffHelpPagesConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionPublished_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionPublished_at'] = ResolversParentTypes['StaffHelpPagesConnectionPublished_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionTitle'] = ResolversParentTypes['StaffHelpPagesConnectionTitle']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesConnectionUpdated_at'] = ResolversParentTypes['StaffHelpPagesConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['StaffHelpPagesConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StaffHelpPagesGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffHelpPagesGroupBy'] = ResolversParentTypes['StaffHelpPagesGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionUpdated_at']>>>, ParentType, ContextType>;
  Category?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionCategory']>>>, ParentType, ContextType>;
  Title?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionTitle']>>>, ParentType, ContextType>;
  Content?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionContent']>>>, ParentType, ContextType>;
  published_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['StaffHelpPagesConnectionPublished_at']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['Morph']>>>, ParentType, ContextType, RequireFields<UploadFileRelatedArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregator'] = ResolversParentTypes['UploadFileAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorSum']>, ParentType, ContextType>;
  avg?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorAvg']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorMin']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['UploadFileAggregatorMax']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileAggregatorAvgResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorAvg'] = ResolversParentTypes['UploadFileAggregatorAvg']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileAggregatorMaxResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorMax'] = ResolversParentTypes['UploadFileAggregatorMax']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileAggregatorMinResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorMin'] = ResolversParentTypes['UploadFileAggregatorMin']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileAggregatorSumResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileAggregatorSum'] = ResolversParentTypes['UploadFileAggregatorSum']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnection'] = ResolversParentTypes['UploadFileConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFile']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UploadFileGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UploadFileAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionAlternativeTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionAlternativeText'] = ResolversParentTypes['UploadFileConnectionAlternativeText']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionCaptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionCaption'] = ResolversParentTypes['UploadFileConnectionCaption']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionCreated_at'] = ResolversParentTypes['UploadFileConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionExtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionExt'] = ResolversParentTypes['UploadFileConnectionExt']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionFormatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionFormats'] = ResolversParentTypes['UploadFileConnectionFormats']> = {
  key?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionHashResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionHash'] = ResolversParentTypes['UploadFileConnectionHash']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionHeightResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionHeight'] = ResolversParentTypes['UploadFileConnectionHeight']> = {
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionId'] = ResolversParentTypes['UploadFileConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionMimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionMime'] = ResolversParentTypes['UploadFileConnectionMime']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionName'] = ResolversParentTypes['UploadFileConnectionName']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionPreviewUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionPreviewUrl'] = ResolversParentTypes['UploadFileConnectionPreviewUrl']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionProvider'] = ResolversParentTypes['UploadFileConnectionProvider']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionProvider_MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionProvider_metadata'] = ResolversParentTypes['UploadFileConnectionProvider_metadata']> = {
  key?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionSizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionSize'] = ResolversParentTypes['UploadFileConnectionSize']> = {
  key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionUpdated_at'] = ResolversParentTypes['UploadFileConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionUrl'] = ResolversParentTypes['UploadFileConnectionUrl']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileConnectionWidthResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileConnectionWidth'] = ResolversParentTypes['UploadFileConnectionWidth']> = {
  key?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UploadFileConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileGroupBy'] = ResolversParentTypes['UploadFileGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionUpdated_at']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionName']>>>, ParentType, ContextType>;
  alternativeText?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionAlternativeText']>>>, ParentType, ContextType>;
  caption?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionCaption']>>>, ParentType, ContextType>;
  width?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionWidth']>>>, ParentType, ContextType>;
  height?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionHeight']>>>, ParentType, ContextType>;
  formats?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionFormats']>>>, ParentType, ContextType>;
  hash?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionHash']>>>, ParentType, ContextType>;
  ext?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionExt']>>>, ParentType, ContextType>;
  mime?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionMime']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionSize']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionUrl']>>>, ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionPreviewUrl']>>>, ParentType, ContextType>;
  provider?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionProvider']>>>, ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadFileConnectionProvider_metadata']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPermissionsPasswordPayload'] = ResolversParentTypes['UserPermissionsPasswordPayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  controller?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsPermission']>>>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, never>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleAggregator'] = ResolversParentTypes['UsersPermissionsRoleAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnection'] = ResolversParentTypes['UsersPermissionsRoleConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRole']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleConnectionDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionDescription'] = ResolversParentTypes['UsersPermissionsRoleConnectionDescription']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionId'] = ResolversParentTypes['UsersPermissionsRoleConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleConnectionNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionName'] = ResolversParentTypes['UsersPermissionsRoleConnectionName']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleConnectionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleConnectionType'] = ResolversParentTypes['UsersPermissionsRoleConnectionType']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleGroupBy'] = ResolversParentTypes['UsersPermissionsRoleGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionId']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionName']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionDescription']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsRoleConnectionType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserAggregatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserAggregator'] = ResolversParentTypes['UsersPermissionsUserAggregator']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnection'] = ResolversParentTypes['UsersPermissionsUserConnection']> = {
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUser']>>>, ParentType, ContextType>;
  groupBy?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserGroupBy']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserAggregator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionBlockedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionBlocked'] = ResolversParentTypes['UsersPermissionsUserConnectionBlocked']> = {
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionConfirmedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionConfirmed'] = ResolversParentTypes['UsersPermissionsUserConnectionConfirmed']> = {
  key?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionCreated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionCreated_at'] = ResolversParentTypes['UsersPermissionsUserConnectionCreated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionEmail'] = ResolversParentTypes['UsersPermissionsUserConnectionEmail']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionId'] = ResolversParentTypes['UsersPermissionsUserConnectionId']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionProvider'] = ResolversParentTypes['UsersPermissionsUserConnectionProvider']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionRole'] = ResolversParentTypes['UsersPermissionsUserConnectionRole']> = {
  key?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionUpdated_AtResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at'] = ResolversParentTypes['UsersPermissionsUserConnectionUpdated_at']> = {
  key?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserConnectionUsernameResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserConnectionUsername'] = ResolversParentTypes['UsersPermissionsUserConnectionUsername']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connection?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserGroupBy'] = ResolversParentTypes['UsersPermissionsUserGroupBy']> = {
  id?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionId']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionCreated_at']>>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionUpdated_at']>>>, ParentType, ContextType>;
  username?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionUsername']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionEmail']>>>, ParentType, ContextType>;
  provider?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionProvider']>>>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionConfirmed']>>>, ParentType, ContextType>;
  blocked?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionBlocked']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<Array<Maybe<ResolversTypes['UsersPermissionsUserConnectionRole']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMedalPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createMedalPayload'] = ResolversParentTypes['createMedalPayload']> = {
  medal?: Resolver<Maybe<ResolversTypes['Medals']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createPagePayload'] = ResolversParentTypes['createPagePayload']> = {
  page?: Resolver<Maybe<ResolversTypes['Pages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProgressMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createProgressMessagePayload'] = ResolversParentTypes['createProgressMessagePayload']> = {
  progressMessage?: Resolver<Maybe<ResolversTypes['ProgressMessages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePublicMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createPublicMediaPayload'] = ResolversParentTypes['createPublicMediaPayload']> = {
  publicMedia?: Resolver<Maybe<ResolversTypes['PublicMedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createRolePayload'] = ResolversParentTypes['createRolePayload']> = {
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSnippetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createSnippetPayload'] = ResolversParentTypes['createSnippetPayload']> = {
  snippet?: Resolver<Maybe<ResolversTypes['Snippets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateStaffHelpPagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createStaffHelpPagePayload'] = ResolversParentTypes['createStaffHelpPagePayload']> = {
  staffHelpPage?: Resolver<Maybe<ResolversTypes['StaffHelpPages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['createUserPayload'] = ResolversParentTypes['createUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteFilePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteFilePayload'] = ResolversParentTypes['deleteFilePayload']> = {
  file?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteMedalPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteMedalPayload'] = ResolversParentTypes['deleteMedalPayload']> = {
  medal?: Resolver<Maybe<ResolversTypes['Medals']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePagePayload'] = ResolversParentTypes['deletePagePayload']> = {
  page?: Resolver<Maybe<ResolversTypes['Pages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteProgressMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteProgressMessagePayload'] = ResolversParentTypes['deleteProgressMessagePayload']> = {
  progressMessage?: Resolver<Maybe<ResolversTypes['ProgressMessages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletePublicMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePublicMediaPayload'] = ResolversParentTypes['deletePublicMediaPayload']> = {
  publicMedia?: Resolver<Maybe<ResolversTypes['PublicMedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteRolePayload'] = ResolversParentTypes['deleteRolePayload']> = {
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteSnippetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteSnippetPayload'] = ResolversParentTypes['deleteSnippetPayload']> = {
  snippet?: Resolver<Maybe<ResolversTypes['Snippets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteStaffHelpPagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteStaffHelpPagePayload'] = ResolversParentTypes['deleteStaffHelpPagePayload']> = {
  staffHelpPage?: Resolver<Maybe<ResolversTypes['StaffHelpPages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteUserPayload'] = ResolversParentTypes['deleteUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMedalPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateMedalPayload'] = ResolversParentTypes['updateMedalPayload']> = {
  medal?: Resolver<Maybe<ResolversTypes['Medals']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatePagePayload'] = ResolversParentTypes['updatePagePayload']> = {
  page?: Resolver<Maybe<ResolversTypes['Pages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProgressMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateProgressMessagePayload'] = ResolversParentTypes['updateProgressMessagePayload']> = {
  progressMessage?: Resolver<Maybe<ResolversTypes['ProgressMessages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePublicMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updatePublicMediaPayload'] = ResolversParentTypes['updatePublicMediaPayload']> = {
  publicMedia?: Resolver<Maybe<ResolversTypes['PublicMedia']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRolePayload'] = ResolversParentTypes['updateRolePayload']> = {
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSnippetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateSnippetPayload'] = ResolversParentTypes['updateSnippetPayload']> = {
  snippet?: Resolver<Maybe<ResolversTypes['Snippets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateStaffHelpPagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateStaffHelpPagePayload'] = ResolversParentTypes['updateStaffHelpPagePayload']> = {
  staffHelpPage?: Resolver<Maybe<ResolversTypes['StaffHelpPages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateUserPayload'] = ResolversParentTypes['updateUserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AdminUser?: AdminUserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Medals?: MedalsResolvers<ContextType>;
  MedalsAggregator?: MedalsAggregatorResolvers<ContextType>;
  MedalsAggregatorAvg?: MedalsAggregatorAvgResolvers<ContextType>;
  MedalsAggregatorMax?: MedalsAggregatorMaxResolvers<ContextType>;
  MedalsAggregatorMin?: MedalsAggregatorMinResolvers<ContextType>;
  MedalsAggregatorSum?: MedalsAggregatorSumResolvers<ContextType>;
  MedalsConnection?: MedalsConnectionResolvers<ContextType>;
  MedalsConnectionCreated_at?: MedalsConnectionCreated_AtResolvers<ContextType>;
  MedalsConnectionId?: MedalsConnectionIdResolvers<ContextType>;
  MedalsConnectionImage?: MedalsConnectionImageResolvers<ContextType>;
  MedalsConnectionMonth?: MedalsConnectionMonthResolvers<ContextType>;
  MedalsConnectionPublished_at?: MedalsConnectionPublished_AtResolvers<ContextType>;
  MedalsConnectionType?: MedalsConnectionTypeResolvers<ContextType>;
  MedalsConnectionUpdated_at?: MedalsConnectionUpdated_AtResolvers<ContextType>;
  MedalsConnectionYear?: MedalsConnectionYearResolvers<ContextType>;
  MedalsGroupBy?: MedalsGroupByResolvers<ContextType>;
  Morph?: MorphResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pages?: PagesResolvers<ContextType>;
  PagesAggregator?: PagesAggregatorResolvers<ContextType>;
  PagesConnection?: PagesConnectionResolvers<ContextType>;
  PagesConnectionContent?: PagesConnectionContentResolvers<ContextType>;
  PagesConnectionCreated_at?: PagesConnectionCreated_AtResolvers<ContextType>;
  PagesConnectionId?: PagesConnectionIdResolvers<ContextType>;
  PagesConnectionPublished_at?: PagesConnectionPublished_AtResolvers<ContextType>;
  PagesConnectionSlug?: PagesConnectionSlugResolvers<ContextType>;
  PagesConnectionTitle?: PagesConnectionTitleResolvers<ContextType>;
  PagesConnectionUpdated_at?: PagesConnectionUpdated_AtResolvers<ContextType>;
  PagesGroupBy?: PagesGroupByResolvers<ContextType>;
  ProgressMessages?: ProgressMessagesResolvers<ContextType>;
  ProgressMessagesAggregator?: ProgressMessagesAggregatorResolvers<ContextType>;
  ProgressMessagesAggregatorAvg?: ProgressMessagesAggregatorAvgResolvers<ContextType>;
  ProgressMessagesAggregatorMax?: ProgressMessagesAggregatorMaxResolvers<ContextType>;
  ProgressMessagesAggregatorMin?: ProgressMessagesAggregatorMinResolvers<ContextType>;
  ProgressMessagesAggregatorSum?: ProgressMessagesAggregatorSumResolvers<ContextType>;
  ProgressMessagesConnection?: ProgressMessagesConnectionResolvers<ContextType>;
  ProgressMessagesConnectionCreated_at?: ProgressMessagesConnectionCreated_AtResolvers<ContextType>;
  ProgressMessagesConnectionDayOfMonth?: ProgressMessagesConnectionDayOfMonthResolvers<ContextType>;
  ProgressMessagesConnectionId?: ProgressMessagesConnectionIdResolvers<ContextType>;
  ProgressMessagesConnectionMessage?: ProgressMessagesConnectionMessageResolvers<ContextType>;
  ProgressMessagesConnectionPublished_at?: ProgressMessagesConnectionPublished_AtResolvers<ContextType>;
  ProgressMessagesConnectionUpdated_at?: ProgressMessagesConnectionUpdated_AtResolvers<ContextType>;
  ProgressMessagesGroupBy?: ProgressMessagesGroupByResolvers<ContextType>;
  PublicMedia?: PublicMediaResolvers<ContextType>;
  PublicMediaAggregator?: PublicMediaAggregatorResolvers<ContextType>;
  PublicMediaConnection?: PublicMediaConnectionResolvers<ContextType>;
  PublicMediaConnectionCreated_at?: PublicMediaConnectionCreated_AtResolvers<ContextType>;
  PublicMediaConnectionId?: PublicMediaConnectionIdResolvers<ContextType>;
  PublicMediaConnectionName?: PublicMediaConnectionNameResolvers<ContextType>;
  PublicMediaConnectionPublished_at?: PublicMediaConnectionPublished_AtResolvers<ContextType>;
  PublicMediaConnectionSource?: PublicMediaConnectionSourceResolvers<ContextType>;
  PublicMediaConnectionUpdated_at?: PublicMediaConnectionUpdated_AtResolvers<ContextType>;
  PublicMediaGroupBy?: PublicMediaGroupByResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Snippets?: SnippetsResolvers<ContextType>;
  SnippetsAggregator?: SnippetsAggregatorResolvers<ContextType>;
  SnippetsConnection?: SnippetsConnectionResolvers<ContextType>;
  SnippetsConnectionCreated_at?: SnippetsConnectionCreated_AtResolvers<ContextType>;
  SnippetsConnectionId?: SnippetsConnectionIdResolvers<ContextType>;
  SnippetsConnectionKey?: SnippetsConnectionKeyResolvers<ContextType>;
  SnippetsConnectionPublished_at?: SnippetsConnectionPublished_AtResolvers<ContextType>;
  SnippetsConnectionText?: SnippetsConnectionTextResolvers<ContextType>;
  SnippetsConnectionUpdated_at?: SnippetsConnectionUpdated_AtResolvers<ContextType>;
  SnippetsGroupBy?: SnippetsGroupByResolvers<ContextType>;
  StaffHelpPages?: StaffHelpPagesResolvers<ContextType>;
  StaffHelpPagesAggregator?: StaffHelpPagesAggregatorResolvers<ContextType>;
  StaffHelpPagesConnection?: StaffHelpPagesConnectionResolvers<ContextType>;
  StaffHelpPagesConnectionCategory?: StaffHelpPagesConnectionCategoryResolvers<ContextType>;
  StaffHelpPagesConnectionContent?: StaffHelpPagesConnectionContentResolvers<ContextType>;
  StaffHelpPagesConnectionCreated_at?: StaffHelpPagesConnectionCreated_AtResolvers<ContextType>;
  StaffHelpPagesConnectionId?: StaffHelpPagesConnectionIdResolvers<ContextType>;
  StaffHelpPagesConnectionPublished_at?: StaffHelpPagesConnectionPublished_AtResolvers<ContextType>;
  StaffHelpPagesConnectionTitle?: StaffHelpPagesConnectionTitleResolvers<ContextType>;
  StaffHelpPagesConnectionUpdated_at?: StaffHelpPagesConnectionUpdated_AtResolvers<ContextType>;
  StaffHelpPagesGroupBy?: StaffHelpPagesGroupByResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileAggregator?: UploadFileAggregatorResolvers<ContextType>;
  UploadFileAggregatorAvg?: UploadFileAggregatorAvgResolvers<ContextType>;
  UploadFileAggregatorMax?: UploadFileAggregatorMaxResolvers<ContextType>;
  UploadFileAggregatorMin?: UploadFileAggregatorMinResolvers<ContextType>;
  UploadFileAggregatorSum?: UploadFileAggregatorSumResolvers<ContextType>;
  UploadFileConnection?: UploadFileConnectionResolvers<ContextType>;
  UploadFileConnectionAlternativeText?: UploadFileConnectionAlternativeTextResolvers<ContextType>;
  UploadFileConnectionCaption?: UploadFileConnectionCaptionResolvers<ContextType>;
  UploadFileConnectionCreated_at?: UploadFileConnectionCreated_AtResolvers<ContextType>;
  UploadFileConnectionExt?: UploadFileConnectionExtResolvers<ContextType>;
  UploadFileConnectionFormats?: UploadFileConnectionFormatsResolvers<ContextType>;
  UploadFileConnectionHash?: UploadFileConnectionHashResolvers<ContextType>;
  UploadFileConnectionHeight?: UploadFileConnectionHeightResolvers<ContextType>;
  UploadFileConnectionId?: UploadFileConnectionIdResolvers<ContextType>;
  UploadFileConnectionMime?: UploadFileConnectionMimeResolvers<ContextType>;
  UploadFileConnectionName?: UploadFileConnectionNameResolvers<ContextType>;
  UploadFileConnectionPreviewUrl?: UploadFileConnectionPreviewUrlResolvers<ContextType>;
  UploadFileConnectionProvider?: UploadFileConnectionProviderResolvers<ContextType>;
  UploadFileConnectionProvider_metadata?: UploadFileConnectionProvider_MetadataResolvers<ContextType>;
  UploadFileConnectionSize?: UploadFileConnectionSizeResolvers<ContextType>;
  UploadFileConnectionUpdated_at?: UploadFileConnectionUpdated_AtResolvers<ContextType>;
  UploadFileConnectionUrl?: UploadFileConnectionUrlResolvers<ContextType>;
  UploadFileConnectionWidth?: UploadFileConnectionWidthResolvers<ContextType>;
  UploadFileGroupBy?: UploadFileGroupByResolvers<ContextType>;
  UserPermissionsPasswordPayload?: UserPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleAggregator?: UsersPermissionsRoleAggregatorResolvers<ContextType>;
  UsersPermissionsRoleConnection?: UsersPermissionsRoleConnectionResolvers<ContextType>;
  UsersPermissionsRoleConnectionDescription?: UsersPermissionsRoleConnectionDescriptionResolvers<ContextType>;
  UsersPermissionsRoleConnectionId?: UsersPermissionsRoleConnectionIdResolvers<ContextType>;
  UsersPermissionsRoleConnectionName?: UsersPermissionsRoleConnectionNameResolvers<ContextType>;
  UsersPermissionsRoleConnectionType?: UsersPermissionsRoleConnectionTypeResolvers<ContextType>;
  UsersPermissionsRoleGroupBy?: UsersPermissionsRoleGroupByResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserAggregator?: UsersPermissionsUserAggregatorResolvers<ContextType>;
  UsersPermissionsUserConnection?: UsersPermissionsUserConnectionResolvers<ContextType>;
  UsersPermissionsUserConnectionBlocked?: UsersPermissionsUserConnectionBlockedResolvers<ContextType>;
  UsersPermissionsUserConnectionConfirmed?: UsersPermissionsUserConnectionConfirmedResolvers<ContextType>;
  UsersPermissionsUserConnectionCreated_at?: UsersPermissionsUserConnectionCreated_AtResolvers<ContextType>;
  UsersPermissionsUserConnectionEmail?: UsersPermissionsUserConnectionEmailResolvers<ContextType>;
  UsersPermissionsUserConnectionId?: UsersPermissionsUserConnectionIdResolvers<ContextType>;
  UsersPermissionsUserConnectionProvider?: UsersPermissionsUserConnectionProviderResolvers<ContextType>;
  UsersPermissionsUserConnectionRole?: UsersPermissionsUserConnectionRoleResolvers<ContextType>;
  UsersPermissionsUserConnectionUpdated_at?: UsersPermissionsUserConnectionUpdated_AtResolvers<ContextType>;
  UsersPermissionsUserConnectionUsername?: UsersPermissionsUserConnectionUsernameResolvers<ContextType>;
  UsersPermissionsUserGroupBy?: UsersPermissionsUserGroupByResolvers<ContextType>;
  createMedalPayload?: CreateMedalPayloadResolvers<ContextType>;
  createPagePayload?: CreatePagePayloadResolvers<ContextType>;
  createProgressMessagePayload?: CreateProgressMessagePayloadResolvers<ContextType>;
  createPublicMediaPayload?: CreatePublicMediaPayloadResolvers<ContextType>;
  createRolePayload?: CreateRolePayloadResolvers<ContextType>;
  createSnippetPayload?: CreateSnippetPayloadResolvers<ContextType>;
  createStaffHelpPagePayload?: CreateStaffHelpPagePayloadResolvers<ContextType>;
  createUserPayload?: CreateUserPayloadResolvers<ContextType>;
  deleteFilePayload?: DeleteFilePayloadResolvers<ContextType>;
  deleteMedalPayload?: DeleteMedalPayloadResolvers<ContextType>;
  deletePagePayload?: DeletePagePayloadResolvers<ContextType>;
  deleteProgressMessagePayload?: DeleteProgressMessagePayloadResolvers<ContextType>;
  deletePublicMediaPayload?: DeletePublicMediaPayloadResolvers<ContextType>;
  deleteRolePayload?: DeleteRolePayloadResolvers<ContextType>;
  deleteSnippetPayload?: DeleteSnippetPayloadResolvers<ContextType>;
  deleteStaffHelpPagePayload?: DeleteStaffHelpPagePayloadResolvers<ContextType>;
  deleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  updateMedalPayload?: UpdateMedalPayloadResolvers<ContextType>;
  updatePagePayload?: UpdatePagePayloadResolvers<ContextType>;
  updateProgressMessagePayload?: UpdateProgressMessagePayloadResolvers<ContextType>;
  updatePublicMediaPayload?: UpdatePublicMediaPayloadResolvers<ContextType>;
  updateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  updateSnippetPayload?: UpdateSnippetPayloadResolvers<ContextType>;
  updateStaffHelpPagePayload?: UpdateStaffHelpPagePayloadResolvers<ContextType>;
  updateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
};



export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const MedalImagesDocument = gql`
    query MedalImages($year: Int!, $month: Int!, $type: String!) {
  medals(where: {Year: $year, Month: $month, Type: $type}) {
    id
    Year
    Month
    Type
    Image {
      alternativeText
      url
    }
  }
}
    `;


export function useMedalImagesQuery(baseOptions: Apollo.QueryHookOptions<MedalImagesQuery, MedalImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MedalImagesQuery, MedalImagesQueryVariables>(MedalImagesDocument, options);
      }
export function useMedalImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedalImagesQuery, MedalImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MedalImagesQuery, MedalImagesQueryVariables>(MedalImagesDocument, options);
        }
export type MedalImagesQueryHookResult = ReturnType<typeof useMedalImagesQuery>;
export type MedalImagesLazyQueryHookResult = ReturnType<typeof useMedalImagesLazyQuery>;
export type MedalImagesQueryResult = Apollo.QueryResult<MedalImagesQuery, MedalImagesQueryVariables>;
export const MediaByNameDocument = gql`
    query MediaByName($name: String!) {
  publicMedias(where: {name: $name}) {
    name
    source {
      url
      alternativeText
    }
  }
}
    `;


export function useMediaByNameQuery(baseOptions: Apollo.QueryHookOptions<MediaByNameQuery, MediaByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MediaByNameQuery, MediaByNameQueryVariables>(MediaByNameDocument, options);
      }
export function useMediaByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediaByNameQuery, MediaByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MediaByNameQuery, MediaByNameQueryVariables>(MediaByNameDocument, options);
        }
export type MediaByNameQueryHookResult = ReturnType<typeof useMediaByNameQuery>;
export type MediaByNameLazyQueryHookResult = ReturnType<typeof useMediaByNameLazyQuery>;
export type MediaByNameQueryResult = Apollo.QueryResult<MediaByNameQuery, MediaByNameQueryVariables>;
export const PagesBySlugDocument = gql`
    query PagesBySlug($slug: String!) {
  pages(where: {Slug: $slug}) {
    id
    Title
    Content
  }
}
    `;


export function usePagesBySlugQuery(baseOptions: Apollo.QueryHookOptions<PagesBySlugQuery, PagesBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesBySlugQuery, PagesBySlugQueryVariables>(PagesBySlugDocument, options);
      }
export function usePagesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesBySlugQuery, PagesBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesBySlugQuery, PagesBySlugQueryVariables>(PagesBySlugDocument, options);
        }
export type PagesBySlugQueryHookResult = ReturnType<typeof usePagesBySlugQuery>;
export type PagesBySlugLazyQueryHookResult = ReturnType<typeof usePagesBySlugLazyQuery>;
export type PagesBySlugQueryResult = Apollo.QueryResult<PagesBySlugQuery, PagesBySlugQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Morph": [
      "UsersPermissionsMe",
      "UsersPermissionsMeRole",
      "UsersPermissionsLoginPayload",
      "UserPermissionsPasswordPayload",
      "Medals",
      "MedalsConnection",
      "MedalsAggregator",
      "MedalsAggregatorSum",
      "MedalsAggregatorAvg",
      "MedalsAggregatorMin",
      "MedalsAggregatorMax",
      "MedalsGroupBy",
      "MedalsConnectionId",
      "MedalsConnectionCreated_at",
      "MedalsConnectionUpdated_at",
      "MedalsConnectionYear",
      "MedalsConnectionMonth",
      "MedalsConnectionType",
      "MedalsConnectionImage",
      "MedalsConnectionPublished_at",
      "createMedalPayload",
      "updateMedalPayload",
      "deleteMedalPayload",
      "Pages",
      "PagesConnection",
      "PagesAggregator",
      "PagesGroupBy",
      "PagesConnectionId",
      "PagesConnectionCreated_at",
      "PagesConnectionUpdated_at",
      "PagesConnectionTitle",
      "PagesConnectionContent",
      "PagesConnectionSlug",
      "PagesConnectionPublished_at",
      "createPagePayload",
      "updatePagePayload",
      "deletePagePayload",
      "ProgressMessages",
      "ProgressMessagesConnection",
      "ProgressMessagesAggregator",
      "ProgressMessagesAggregatorSum",
      "ProgressMessagesAggregatorAvg",
      "ProgressMessagesAggregatorMin",
      "ProgressMessagesAggregatorMax",
      "ProgressMessagesGroupBy",
      "ProgressMessagesConnectionId",
      "ProgressMessagesConnectionCreated_at",
      "ProgressMessagesConnectionUpdated_at",
      "ProgressMessagesConnectionDayOfMonth",
      "ProgressMessagesConnectionMessage",
      "ProgressMessagesConnectionPublished_at",
      "createProgressMessagePayload",
      "updateProgressMessagePayload",
      "deleteProgressMessagePayload",
      "PublicMedia",
      "PublicMediaConnection",
      "PublicMediaAggregator",
      "PublicMediaGroupBy",
      "PublicMediaConnectionId",
      "PublicMediaConnectionCreated_at",
      "PublicMediaConnectionUpdated_at",
      "PublicMediaConnectionName",
      "PublicMediaConnectionSource",
      "PublicMediaConnectionPublished_at",
      "createPublicMediaPayload",
      "updatePublicMediaPayload",
      "deletePublicMediaPayload",
      "Snippets",
      "SnippetsConnection",
      "SnippetsAggregator",
      "SnippetsGroupBy",
      "SnippetsConnectionId",
      "SnippetsConnectionCreated_at",
      "SnippetsConnectionUpdated_at",
      "SnippetsConnectionKey",
      "SnippetsConnectionText",
      "SnippetsConnectionPublished_at",
      "createSnippetPayload",
      "updateSnippetPayload",
      "deleteSnippetPayload",
      "StaffHelpPages",
      "StaffHelpPagesConnection",
      "StaffHelpPagesAggregator",
      "StaffHelpPagesGroupBy",
      "StaffHelpPagesConnectionId",
      "StaffHelpPagesConnectionCreated_at",
      "StaffHelpPagesConnectionUpdated_at",
      "StaffHelpPagesConnectionCategory",
      "StaffHelpPagesConnectionTitle",
      "StaffHelpPagesConnectionContent",
      "StaffHelpPagesConnectionPublished_at",
      "createStaffHelpPagePayload",
      "updateStaffHelpPagePayload",
      "deleteStaffHelpPagePayload",
      "I18NLocale",
      "UploadFile",
      "UploadFileConnection",
      "UploadFileAggregator",
      "UploadFileAggregatorSum",
      "UploadFileAggregatorAvg",
      "UploadFileAggregatorMin",
      "UploadFileAggregatorMax",
      "UploadFileGroupBy",
      "UploadFileConnectionId",
      "UploadFileConnectionCreated_at",
      "UploadFileConnectionUpdated_at",
      "UploadFileConnectionName",
      "UploadFileConnectionAlternativeText",
      "UploadFileConnectionCaption",
      "UploadFileConnectionWidth",
      "UploadFileConnectionHeight",
      "UploadFileConnectionFormats",
      "UploadFileConnectionHash",
      "UploadFileConnectionExt",
      "UploadFileConnectionMime",
      "UploadFileConnectionSize",
      "UploadFileConnectionUrl",
      "UploadFileConnectionPreviewUrl",
      "UploadFileConnectionProvider",
      "UploadFileConnectionProvider_metadata",
      "deleteFilePayload",
      "UsersPermissionsPermission",
      "UsersPermissionsRole",
      "UsersPermissionsRoleConnection",
      "UsersPermissionsRoleAggregator",
      "UsersPermissionsRoleGroupBy",
      "UsersPermissionsRoleConnectionId",
      "UsersPermissionsRoleConnectionName",
      "UsersPermissionsRoleConnectionDescription",
      "UsersPermissionsRoleConnectionType",
      "createRolePayload",
      "updateRolePayload",
      "deleteRolePayload",
      "UsersPermissionsUser",
      "UsersPermissionsUserConnection",
      "UsersPermissionsUserAggregator",
      "UsersPermissionsUserGroupBy",
      "UsersPermissionsUserConnectionId",
      "UsersPermissionsUserConnectionCreated_at",
      "UsersPermissionsUserConnectionUpdated_at",
      "UsersPermissionsUserConnectionUsername",
      "UsersPermissionsUserConnectionEmail",
      "UsersPermissionsUserConnectionProvider",
      "UsersPermissionsUserConnectionConfirmed",
      "UsersPermissionsUserConnectionBlocked",
      "UsersPermissionsUserConnectionRole",
      "createUserPayload",
      "updateUserPayload",
      "deleteUserPayload"
    ]
  }
};
      export default result;
    