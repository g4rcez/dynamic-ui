export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Author = {
   __typename?: 'Author';
  name: Scalars['String'];
};

export type Book = {
   __typename?: 'Book';
  title: Scalars['String'];
  author: Author;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Cep = {
   __typename?: 'Cep';
  bairro?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  logradouro?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  cidadeInfo?: Maybe<CidadeInfo>;
  estadoInfo?: Maybe<EstadoInfo>;
};

export type CidadeInfo = {
   __typename?: 'CidadeInfo';
  areaKm2?: Maybe<Scalars['String']>;
  codigoIbge?: Maybe<Scalars['String']>;
};

export type EstadoInfo = {
   __typename?: 'EstadoInfo';
  areaKm2?: Maybe<Scalars['String']>;
  codigoIbge?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
};

export type Library = {
   __typename?: 'Library';
  branch: Scalars['String'];
  books?: Maybe<Array<Book>>;
};

export type Query = {
   __typename?: 'Query';
  libraries?: Maybe<Array<Maybe<Library>>>;
};

