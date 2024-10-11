import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeType: { input: any; output: any; }
  DateType: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  MonthType: { input: any; output: any; }
  TimeType: { input: any; output: any; }
  Upload: { input: any; output: any; }
  YearType: { input: any; output: any; }
};

/** авторизованный пользователь */
export type AUser = {
  __typename?: 'AUser';
  auserId?: Maybe<Scalars['String']['output']>;
  auser_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Avatar>;
  city?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  last_application_phone?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Roles>;
  sport_types?: Maybe<Array<Maybe<UserSportType>>>;
};

/** Даты размещения в отелях */
export type AccomodationDatesScheme = {
  __typename?: 'AccomodationDatesScheme';
  dt_begin?: Maybe<Scalars['DateType']['output']>;
  dt_end?: Maybe<Scalars['DateType']['output']>;
  /** запрещать изменять даты размещения в заявках */
  is_forbidden_edit?: Maybe<Scalars['Boolean']['output']>;
};

/** AccomodationDeletingProhibits type definition */
export type AccomodationDeletingProhibits = {
  __typename?: 'AccomodationDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Описание отеля для размещения */
export type AccomodationHotelScheme = NodeInterface & {
  __typename?: 'AccomodationHotelScheme';
  dates?: Maybe<AccomodationDatesScheme>;
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  description?: Maybe<Scalars['String']['output']>;
  display_name: Scalars['String']['output'];
  /** Сколько номеров в целом по отелю можно зарезервировать */
  hotel_limit?: Maybe<Scalars['Int']['output']>;
  /** Количество зарезервированных в отеле номеров */
  hotel_reserved?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  rooms?: Maybe<Array<Maybe<AccomodationRoomScheme>>>;
  rooms_with_types?: Maybe<Array<Maybe<AccomodationRoomWithTypeScheme>>>;
  table: Scalars['String']['output'];
  title_with_dates: Scalars['String']['output'];
};

/** Тип AccomodationInfo определяет данные по размещению в отеле в заявке на размещение */
export type AccomodationInfo = NodeInterface & {
  __typename?: 'AccomodationInfo';
  dt_begin: Scalars['DateType']['output'];
  dt_end: Scalars['DateType']['output'];
  hotel?: Maybe<AccomodationHotelScheme>;
  hotel_id?: Maybe<Scalars['Int']['output']>;
  hotel_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  persons_count?: Maybe<Scalars['Int']['output']>;
  residents?: Maybe<Array<Maybe<AccomodationResident>>>;
  room_accomodation_id?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['String']['output']>;
  room_type?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** Фильтр для списка заявок на проживание */
export type AccomodationListFilter = {
  app_status?: InputMaybe<ApplicationStatusEnum>;
  payment_status?: InputMaybe<PaymentStatusEnum>;
};

/** Описывает проживающего */
export type AccomodationResident = NodeInterface & {
  __typename?: 'AccomodationResident';
  board_name?: Maybe<Scalars['String']['output']>;
  board_type?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  passport_info?: Maybe<Scalars['String']['output']>;
  passport_number?: Maybe<Scalars['String']['output']>;
  passport_series?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** Данные для сохранения проживающего в заявке на проживание */
export type AccomodationResidentInput = {
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};

/** Описание комнаты для размещения */
export type AccomodationRoomScheme = NodeInterface & {
  __typename?: 'AccomodationRoomScheme';
  accomodation_types?: Maybe<Array<Maybe<AccomodationTypeScheme>>>;
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  display_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Количество комнат, доступных для резервирования */
  room_limit?: Maybe<Scalars['Int']['output']>;
  room_name: Scalars['String']['output'];
  /** Количество зарезервированных комнат */
  room_reserved?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
};

/** Описание комнаты с типом размещения */
export type AccomodationRoomWithTypeScheme = NodeInterface & {
  __typename?: 'AccomodationRoomWithTypeScheme';
  display_name: Scalars['String']['output'];
  /** ИД комнаты <room_id:room_accomodation_id> */
  id: Scalars['ID']['output'];
  number_persons?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  room_accomodation_id?: Maybe<Scalars['String']['output']>;
  room_id: Scalars['Int']['output'];
  room_limit?: Maybe<Scalars['Int']['output']>;
  room_name: Scalars['String']['output'];
  /** Количество зарезервированных комнат */
  room_reserved?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
};

/** Описание типа размещения */
export type AccomodationTypeScheme = NodeInterface & {
  __typename?: 'AccomodationTypeScheme';
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  id: Scalars['ID']['output'];
  number_persons?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  table: Scalars['String']['output'];
};

export enum ActionDeletion {
  Delete = 'delete',
  Restore = 'restore'
}

/** ActionDescription type definition */
export type ActionDescription = {
  __typename?: 'ActionDescription';
  allowed?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Информация о фактическом платеже по заявке */
export type ActualPayment = {
  __typename?: 'ActualPayment';
  /** полная сумма (с комиссией) */
  amount?: Maybe<Scalars['Float']['output']>;
  /** сумма комиссии */
  commission?: Maybe<Scalars['Float']['output']>;
  /** идентификатор записи о платеже */
  id?: Maybe<Scalars['String']['output']>;
  /** идентификатор платежа, зависит от типа платежа */
  payment_id?: Maybe<Scalars['Int']['output']>;
  /** тип платежа (напрямую, через платежную систему, ...) */
  payment_type?: Maybe<ActualPaymentTypeEnum>;
  /** исходная сумма (без комиссии) */
  price?: Maybe<Scalars['Float']['output']>;
};

/** Определяет возможные типы оплаты */
export enum ActualPaymentTypeEnum {
  /** Тип оплаты - напрямую */
  Custom = 'custom',
  /** Тип оплаты - через плаежную систему */
  Payment = 'payment'
}

/** Информация по рекламному блоку */
export type Adv = NodeInterface & {
  __typename?: 'Adv';
  adv_block?: Maybe<AdvBlockEnum>;
  count_click?: Maybe<Scalars['Int']['output']>;
  count_view?: Maybe<Scalars['Int']['output']>;
  dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  /** Показывать только в этих соревнованиях */
  events?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  id: Scalars['ID']['output'];
  img?: Maybe<FileType>;
  img_src?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_ended?: Maybe<Scalars['Boolean']['output']>;
  is_started?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать только в этих видах спорта */
  sports?: Maybe<Array<Maybe<SportType>>>;
  table: Scalars['String']['output'];
  target_href?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum AdvBlockEnum {
  CompetitionsList = 'competitions_list',
  Left = 'left',
  Right = 'right',
  UnderMenu = 'under_menu'
}

/** AdvConnection type definition */
export type AdvConnection = {
  __typename?: 'AdvConnection';
  edges?: Maybe<Array<Maybe<Adv>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AdvInput = {
  adv_block: AdvBlockEnum;
  dt_end?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_start: Scalars['DateTimeType']['input'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  img?: InputMaybe<IdInput>;
  img_src?: InputMaybe<Scalars['String']['input']>;
  sports?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  target_href: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type AdvListFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  inactive?: InputMaybe<Scalars['Boolean']['input']>;
  search_string?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Определяет, кто подает заявки в категорию */
export enum ApplicantTypeEnum {
  /** Взрослые любители */
  Amateurs = 'amateurs',
  /** Кто угодно */
  Anyone = 'anyone',
  /** Тренеры */
  Coaches = 'coaches',
  /** Судьи */
  Judges = 'judges',
  /** Спортсмены */
  Sportsmen = 'sportsmen'
}

/** Описание заявки */
export type Application = NodeInterface & {
  __typename?: 'Application';
  /** ИД заявителя */
  applicant_id?: Maybe<Scalars['Int']['output']>;
  /** Тип заявки - индивидуальная, групповая, ... */
  application_type?: Maybe<ApplicationTypeEnum>;
  /** участники (участник) в заявке */
  athletes?: Maybe<Array<Maybe<ApplicationAthlete>>>;
  /** информация о трансляции */
  broadcast_info?: Maybe<ApplicationBroadcastInfo>;
  /** ИД категории, в которй подана заявка на участие */
  category_id?: Maybe<Scalars['Int']['output']>;
  /** название города из справочника */
  city_from_list?: Maybe<Scalars['String']['output']>;
  /** название города, если город не выбран из справочника */
  city_name?: Maybe<Scalars['String']['output']>;
  /** дата подачи заявки */
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  /** тренер группы со своей персоной */
  group_coach?: Maybe<Coach>;
  /** имя тренера группы */
  group_coach_name?: Maybe<Scalars['String']['output']>;
  /** название группы */
  group_name?: Maybe<Scalars['String']['output']>;
  /** ИД заявки на участие */
  id: Scalars['ID']['output'];
  /** Признак групповой заявки */
  is_team?: Maybe<Scalars['Boolean']['output']>;
  /** информация об оплате заявки */
  payment_info?: Maybe<ApplicationPaymentInfo>;
  /** сумма стартового взноса */
  price?: Maybe<Scalars['Float']['output']>;
  /** Статус заявки на участие */
  status?: Maybe<ApplicationStatusEnum>;
  table: Scalars['String']['output'];
};

/** ApplicationAthlete описывает участника в заявке на мероприятие */
export type ApplicationAthlete = NodeInterface & {
  __typename?: 'ApplicationAthlete';
  /** Судейская категория */
  category?: Maybe<Scalars['String']['output']>;
  city_from_list?: Maybe<Scalars['String']['output']>;
  city_name?: Maybe<Scalars['String']['output']>;
  coach?: Maybe<Coach>;
  /** Тренер участника */
  coach_name?: Maybe<Scalars['String']['output']>;
  coaches?: Maybe<Array<Maybe<SportsmanOrganizationCoach>>>;
  comment_field?: Maybe<Scalars['String']['output']>;
  /** Страна участника */
  country?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Maybe<FileStorage>>>;
  /** Дата рождения участника */
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  /** Email участника */
  email?: Maybe<Scalars['String']['output']>;
  fast_view?: Maybe<Scalars['String']['output']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Пол участника */
  gender?: Maybe<Scalars['Int']['output']>;
  /** ИД участника */
  id: Scalars['ID']['output'];
  inspection_dates?: Maybe<AthleteInspectionDates>;
  inspection_ranks?: Maybe<Array<Maybe<AthleteRankTest>>>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<OrganizationForLists>;
  /** Отчество участника */
  patronymic?: Maybe<Scalars['String']['output']>;
  /** Телефон участника */
  phone?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Rank>;
  rank_name?: Maybe<Scalars['String']['output']>;
  rank_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  sportrank?: Maybe<Rank>;
  /** Спорт школа участника */
  sports_school?: Maybe<Scalars['String']['output']>;
  /** спортсмен из чистого списка в заявке */
  sportsman?: Maybe<Sportsman>;
  table: Scalars['String']['output'];
  /** Название команды / группы */
  team?: Maybe<Scalars['String']['output']>;
};

/** Структура участника для сохранения заявки на участие */
export type ApplicationAthleteInput = {
  category?: InputMaybe<JudgeCategoryEnum>;
  city_from_list?: InputMaybe<Scalars['String']['input']>;
  city_name?: InputMaybe<Scalars['String']['input']>;
  /** ссылка на сущность тренера спортсмена */
  coach_id?: InputMaybe<Scalars['ID']['input']>;
  coach_name?: InputMaybe<Scalars['String']['input']>;
  coaches?: InputMaybe<Scalars['String']['input']>;
  comment_field?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** ссылка на сущность-организацию спортсмена */
  organization_id?: InputMaybe<Scalars['ID']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rank_id?: InputMaybe<Scalars['Int']['input']>;
  rank_name?: InputMaybe<Scalars['String']['input']>;
  sports_school?: InputMaybe<Scalars['String']['input']>;
  /** ссылка на атлета из чистого списка (athlete_id) */
  sportsman_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Информация о приобретенной трансляции */
export type ApplicationBroadcastInfo = {
  __typename?: 'ApplicationBroadcastInfo';
  /** ключ трансляции */
  key?: Maybe<Scalars['String']['output']>;
  /** ссылка на трансляцию */
  link?: Maybe<Scalars['String']['output']>;
  /** сообщение */
  message?: Maybe<Scalars['String']['output']>;
};

/** Определяет контексты заявок на мероприятие */
export enum ApplicationContextEnum {
  /** контекст заявок на учестие в меропрятии */
  Athletes = 'athletes',
  /** контекст заявок на проживание */
  Booking = 'booking',
  /** контекст заявок на предоставление услуг или продажу товаров */
  Sales = 'sales',
  /** контекст заявок на трансляции */
  Translations = 'translations'
}

/** Фильтр для списка заявок */
export type ApplicationListFilter = {
  app_status?: InputMaybe<ApplicationStatusEnum>;
  athlete_status?: InputMaybe<AthleteStatusEnum>;
  context?: InputMaybe<ApplicationContextEnum>;
  dt_birthday?: InputMaybe<Scalars['String']['input']>;
  include_paid?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<PaymentStatusEnum>;
  search_string?: InputMaybe<Scalars['String']['input']>;
  sportrank_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Подробная информация об оплате заявки */
export type ApplicationPaymentInfo = {
  __typename?: 'ApplicationPaymentInfo';
  /** Фактически выполненные оплаты */
  actual_payments?: Maybe<Array<Maybe<ActualPayment>>>;
  /** полная стоимость заявки (с комиссией) */
  amount?: Maybe<Scalars['Float']['output']>;
  /** сумма комиссии с участника за заявку */
  commission?: Maybe<Scalars['Float']['output']>;
  /** сумма дополнительной комиссии за заявку (от орг не в реестре например) */
  commission_application?: Maybe<Scalars['Float']['output']>;
  /** полная сумма комиссии (с комиссией) */
  full_commission?: Maybe<Scalars['Float']['output']>;
  /** оплаченная комиссия */
  paid_commission?: Maybe<Scalars['Float']['output']>;
  /** оплаченная сумма */
  paid_sum?: Maybe<Scalars['Float']['output']>;
  /** Флаг, показывающий что доступна частичная оплата заявки */
  pay_part_available?: Maybe<Scalars['Boolean']['output']>;
  /** Варианты долей оплаты заявок в соревновании */
  pay_parts?: Maybe<Array<Maybe<PaymentPart>>>;
  /** Статус оплаты - полная, частичная, ... */
  payment_status?: Maybe<PaymentStatusEnum>;
  /** исходная стоимость заявки (без комиссии) */
  price?: Maybe<Scalars['Float']['output']>;
};

/** ApplicationPaymentInfoByPaymentId type definition */
export type ApplicationPaymentInfoByPaymentId = {
  __typename?: 'ApplicationPaymentInfoByPaymentId';
  amount?: Maybe<Scalars['Int']['output']>;
  app_id?: Maybe<Scalars['Int']['output']>;
  athlete_display_name?: Maybe<Scalars['JSON']['output']>;
  competition_id?: Maybe<Scalars['Int']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

/** Данные для оплаты заявки */
export type ApplicationPaymentInput = {
  app_id: Scalars['ID']['input'];
  pay_part: PaymentPartInput;
};

/** Определяет персону, включенную в заявку на участие. Это может быть спортсмен, тренер ... Дополнительно возвращается информация включена ли персона в проживание. */
export type ApplicationPerson = NodeInterface & {
  __typename?: 'ApplicationPerson';
  /** ИД заявки на участие, в которой подан данный человек */
  app_id?: Maybe<Scalars['Int']['output']>;
  /** статус заявки на участие, в которой подан человек */
  application_status?: Maybe<ApplicationStatusEnum>;
  /** ИД заявки на проживание, в которой подан данный человек */
  booking_app_id?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  person_type?: Maybe<ApplicationPersonTypeEnum>;
  rank?: Maybe<Rank>;
  rank_name?: Maybe<Scalars['String']['output']>;
  /** ИД резидента в БД, т.е. записи с информацие о проживающем. Если NULL - значит человек не резервировал проживание. */
  resident_id?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
};

/** Определяет типы персон в заявке на участие */
export enum ApplicationPersonTypeEnum {
  /** спортсмен */
  Athlete = 'athlete',
  /** тренер */
  Coach = 'coach',
  /** другое */
  Other = 'other'
}

/** ApplicationPersonsConnection type definition */
export type ApplicationPersonsConnection = {
  __typename?: 'ApplicationPersonsConnection';
  edges?: Maybe<Array<Maybe<ApplicationPerson>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Фильтр для списка заявок */
export type ApplicationPersonsFilter = {
  birth_year?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  rank_id?: InputMaybe<Scalars['Int']['input']>;
  search_string?: InputMaybe<Scalars['String']['input']>;
};

/** Определяет возможные статусы заявок */
export enum ApplicationStatusEnum {
  /** Подтверждена – организатор подтвердил заявку */
  Allow = 'allow',
  /** Отменена – заявитель отменил заявку */
  Canceled = 'canceled',
  /** Отклонена – организатор отклонил заявку */
  Deny = 'deny',
  /** Ожидает подтверждения – заявка подана, но еще не обработана организатором */
  Unknown = 'unknown',
  /** В листе ожидания – организатор переместил заявку в лист ожидания */
  Wait = 'wait'
}

/** Определяет типы заявок на участие в мероприятии */
export enum ApplicationTypeEnum {
  /** тип заявки - групповая */
  Group = 'group',
  /** тип заявки - индивидуальная */
  Personal = 'personal'
}

/** Структура данных для различных дат, которые проверяются комиссией по допуску */
export type AthleteInspectionDate = {
  __typename?: 'AthleteInspectionDate';
  athlete_id: Scalars['ID']['output'];
  confirmation_date?: Maybe<Scalars['DateType']['output']>;
  confirmed_by_user?: Maybe<AUser>;
  field_name: Scalars['String']['output'];
  field_value: Scalars['DateType']['output'];
  status?: Maybe<AthleteStatusEnum>;
};

/** Определяет различные даты, которые проверяются комиссией по допуску спортсменов. */
export enum AthleteInspectionDateEnum {
  /** Agreement date. */
  Agreement = 'agreement',
  /** Insurance expiration date. */
  Insurance = 'insurance',
  /** Medcert expiration date. */
  Medcert = 'medcert',
  /** Rank assignment date. */
  Rank = 'rank'
}

/** AthleteInspectionDates описывает даты, которые проверяются комиссией по допуску */
export type AthleteInspectionDates = {
  __typename?: 'AthleteInspectionDates';
  agreement?: Maybe<AthleteInspectionDate>;
  insurance?: Maybe<AthleteInspectionDate>;
  medcert?: Maybe<AthleteInspectionDate>;
  rank?: Maybe<AthleteInspectionDate>;
};

/** Тесты по разрядам, которые проверяются комиссией по допуску */
export type AthleteRankTest = {
  __typename?: 'AthleteRankTest';
  athlete_id: Scalars['ID']['output'];
  commission_id?: Maybe<Scalars['ID']['output']>;
  confirmation_date?: Maybe<Scalars['DateType']['output']>;
  confirmed_by_user?: Maybe<AUser>;
  passed?: Maybe<Scalars['Boolean']['output']>;
  test_key: Scalars['String']['output'];
};

/** Определяет тесты для подтверждения спортивных разрядов. */
export enum AthleteRankTestEnum {
  /** I */
  I = 'i',
  /** II */
  Ii = 'ii',
  /** III */
  Iii = 'iii',
  /** 1 */
  One = 'one',
  /** 3 */
  Three = 'three',
  /** 2 */
  Two = 'two'
}

/** Определяет статусы спортсмена, связанные с присвоением разряда и документами (согласие, мед. справка, страховка). */
export enum AthleteStatusEnum {
  /** документ просрочен */
  Expired = 'expired',
  /** требуется проверка */
  Inspect = 'inspect',
  /** нет данных */
  Nodata = 'nodata',
  /** все ок */
  Ok = 'ok'
}

/** Auser type definition */
export type Auser = NodeInterface & {
  __typename?: 'Auser';
  actual_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fi_actual_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** AuserConnection type definition */
export type AuserConnection = {
  __typename?: 'AuserConnection';
  edges?: Maybe<Array<Maybe<Auser>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** AuserIDInput type definition */
export type AuserIdInput = {
  auser_id: Scalars['Int']['input'];
};

/** Avatar type definition */
export type Avatar = NodeInterface & {
  __typename?: 'Avatar';
  entity: Scalars['String']['output'];
  entity_id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  table: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

/** Calendar type definition */
export type Calendar = NodeInterface & {
  __typename?: 'Calendar';
  avatar?: Maybe<Avatar>;
  child_org_apps_dt_end?: Maybe<Scalars['DateType']['output']>;
  child_org_apps_dt_start?: Maybe<Scalars['DateType']['output']>;
  count_competitions: Scalars['Int']['output'];
  deleted?: Maybe<Scalars['Boolean']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hide_in_organization?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  is_main?: Maybe<Scalars['Boolean']['output']>;
  organization?: Maybe<OrganizationName>;
  organization_avatar?: Maybe<Avatar>;
  owner_display_name?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  to_delete?: Maybe<ActionDescription>;
};

/** CalendarConnection type definition */
export type CalendarConnection = {
  __typename?: 'CalendarConnection';
  edges?: Maybe<Array<Maybe<Calendar>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** CalendarInput type definition */
export type CalendarInput = {
  child_org_apps_dt_end?: InputMaybe<Scalars['DateType']['input']>;
  child_org_apps_dt_start?: InputMaybe<Scalars['DateType']['input']>;
  email_list?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hide_in_organization: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_main: Scalars['Boolean']['input'];
  organization: IdInput;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** CalendarOwner type definition */
export type CalendarOwner = {
  __typename?: 'CalendarOwner';
  auser_id: Scalars['ID']['output'];
  display_name?: Maybe<Scalars['String']['output']>;
  org_id?: Maybe<Scalars['ID']['output']>;
};

export type ChiefPerson = {
  __typename?: 'ChiefPerson';
  dirty_name?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
};

/** Person input with choice: person id or person dirty name */
export type ChiefPersonInput = {
  auser_id?: InputMaybe<Scalars['Int']['input']>;
  dirty_name?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

/** City type definition */
export type City = NodeInterface & {
  __typename?: 'City';
  displayName?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  fullDisplayName?: Maybe<Scalars['String']['output']>;
  full_display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['ID']['output']>;
  region_name?: Maybe<Scalars['String']['output']>;
  shortname?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

export type CityInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  fullDisplayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ClientAppLogInput = {
  log?: InputMaybe<Array<InputMaybe<ClientAppLogRecordInput>>>;
};

/** Определяет уровни логгирования клиентских приложений. */
export enum ClientAppLogLevelEnum {
  /** Тревога. Требуется немедленное действие. */
  Alert = 'alert',
  /** Критическая ошибка. */
  Critical = 'critical',
  /** Отладочное сообщение. */
  Debug = 'debug',
  /** Аварийная ситуация. Система непригодна для использования. */
  Emergency = 'emergency',
  /** Некритическая ошибка. */
  Error = 'error',
  /** Информационное сообщение. */
  Info = 'info',
  /** Уведомление. Нормальная, но при этом значимая ситуация. */
  Notice = 'notice',
  /** Предупреждение о нежелательной ситуации. Например, использование deprecated. */
  Warning = 'warning'
}

export type ClientAppLogRecordInput = {
  dt_create: Scalars['DateTimeType']['input'];
  level: ClientAppLogLevelEnum;
  message: Scalars['String']['input'];
  module: Scalars['String']['input'];
  user_agent: Scalars['String']['input'];
};

/** Coach type definition */
export type Coach = NodeInterface & {
  __typename?: 'Coach';
  coach_category?: Maybe<Scalars['String']['output']>;
  coach_status?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  deleting_prohibits?: Maybe<Array<Maybe<CoachDeletingProhibits>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_honored?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Array<Maybe<CoachOrganizationItem>>>;
  over_time_editing: Scalars['Boolean']['output'];
  /** Персона тренера */
  person?: Maybe<Person>;
  person_id?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};


/** Coach type definition */
export type CoachOrganizationsArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
};

/** CoachByOrganization type definition */
export type CoachByOrganization = NodeInterface & {
  __typename?: 'CoachByOrganization';
  coach_category?: Maybe<Scalars['String']['output']>;
  coach_status?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  displayName?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['DateType']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_honored?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['String']['output']>;
  not_in_school?: Maybe<Scalars['Boolean']['output']>;
  person?: Maybe<Person>;
  person_id?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  to?: Maybe<Scalars['DateType']['output']>;
};

/** CoachByOrganizationConnection type definition */
export type CoachByOrganizationConnection = {
  __typename?: 'CoachByOrganizationConnection';
  edges?: Maybe<Array<Maybe<CoachByOrganization>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** CoachConnection type definition */
export type CoachConnection = {
  __typename?: 'CoachConnection';
  edges?: Maybe<Array<Maybe<Coach>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** CoachDeletingProhibits type definition */
export type CoachDeletingProhibits = {
  __typename?: 'CoachDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CoachListFilter = {
  categorie?: InputMaybe<Scalars['String']['input']>;
  coach_category?: InputMaybe<Scalars['String']['input']>;
  coach_id_list?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dt_birthday?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  parent_organization1_id?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ContingentSportsmanStatusTypeEnum>;
};

/** CoachOrganizationItem type definition */
export type CoachOrganizationItem = {
  __typename?: 'CoachOrganizationItem';
  active: Scalars['Boolean']['output'];
  deleting_prohibits?: Maybe<Array<Maybe<CoachDeletingProhibits>>>;
  from_month?: Maybe<Scalars['MonthType']['output']>;
  from_year?: Maybe<Scalars['YearType']['output']>;
  is_main: Scalars['Boolean']['output'];
  non_active: Scalars['Boolean']['output'];
  organization: Organization;
  over_time_editing: Scalars['Boolean']['output'];
  to_month?: Maybe<Scalars['MonthType']['output']>;
  to_year?: Maybe<Scalars['YearType']['output']>;
};

export type CommissionParticipantApplication = {
  amount: Scalars['Float']['input'];
  days?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContingentSportsmanStatusTypeEnum {
  Denied = 'denied',
  Revoked = 'revoked',
  Verification = 'verification',
  Verified = 'verified'
}

export type Country = NodeInterface & {
  __typename?: 'Country';
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** Данные карты плательщика */
export type CreditCardDataInput = {
  cc_cvc: Scalars['String']['input'];
  cc_exp_month: Scalars['String']['input'];
  cc_exp_year: Scalars['String']['input'];
  cc_pan: Scalars['String']['input'];
};

/** Discipline type definition */
export type Discipline = NodeInterface & {
  __typename?: 'Discipline';
  id: Scalars['ID']['output'];
  max_number_participants?: Maybe<Scalars['Int']['output']>;
  min_number_participants?: Maybe<Scalars['Int']['output']>;
  min_required_number_participants?: Maybe<Scalars['Int']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['Int']['output']>;
  string_key?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type_number_participants?: Maybe<Scalars['String']['output']>;
};

/** DisciplineConnection type definition */
export type DisciplineConnection = {
  __typename?: 'DisciplineConnection';
  edges?: Maybe<Array<Maybe<Discipline>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Направления в которых выступает спорстмен/ тренирует тренер. */
export enum DisciplineTitleEnum {
  /** BMX-фристайл */
  BmxFreestyle = 'bmx_freestyle',
  /** BMX-гонка */
  BmxRace = 'bmx_race'
}

/** Реквизиты для документов Олимпико (договор, заявка, акт) */
export type DocumentOlympico = NodeInterface & {
  __typename?: 'DocumentOlympico';
  /** наименование организации */
  company_name?: Maybe<Scalars['String']['output']>;
  /** электропочта */
  emails?: Maybe<Scalars['String']['output']>;
  /** ИД записи */
  event_id: Scalars['ID']['output'];
  /** тип мероприятия */
  event_type: Scalars['String']['output'];
  /** имя представителя */
  first_name?: Maybe<Scalars['String']['output']>;
  /** ИД записи */
  id: Scalars['ID']['output'];
  /** реквизиты опубликованы */
  is_published?: Maybe<Scalars['Boolean']['output']>;
  /** фаимлия представителя */
  last_name?: Maybe<Scalars['String']['output']>;
  /** форма собственности */
  ownership_type?: Maybe<Scalars['String']['output']>;
  /** отчество представителя */
  patronymic?: Maybe<Scalars['String']['output']>;
  /** должность представителя */
  post?: Maybe<Scalars['String']['output']>;
  /** реквизиты для документов */
  requisites?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  /** место проведения */
  venue?: Maybe<Scalars['String']['output']>;
};

/** Error type definition */
export type Error = {
  __typename?: 'Error';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Event type definition */
export type Event = NodeInterface & {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']['output']>;
  app_info?: Maybe<EventApplicationInfo>;
  /** Информайия о выгрузке заявок в Google Sheets */
  applications_to_google_sheets?: Maybe<EventApplicationsToGoogleSheets>;
  /** Выводит аватар мероприятия, если его нет - аватар календаря, если его нет - организации */
  avatar?: Maybe<Avatar>;
  background?: Maybe<Avatar>;
  calendar_diaplay_name?: Maybe<Scalars['String']['output']>;
  calendar_id?: Maybe<Scalars['Int']['output']>;
  calendar_owner?: Maybe<CalendarOwner>;
  canceled?: Maybe<Scalars['Boolean']['output']>;
  categories?: Maybe<Array<Maybe<EventCategory>>>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']['output']>;
  city_name?: Maybe<Scalars['String']['output']>;
  /** Классификационное мероприятие (Boolean) */
  classification?: Maybe<Scalars['Boolean']['output']>;
  count_active_applications?: Maybe<Scalars['Int']['output']>;
  count_applications?: Maybe<Scalars['Int']['output']>;
  /** количество заявок на утверждение */
  count_applications_to_apply?: Maybe<Scalars['Int']['output']>;
  count_competitors?: Maybe<Scalars['Int']['output']>;
  /** количество заявок от текущего пользователя */
  count_my_applications?: Maybe<Scalars['Int']['output']>;
  count_photo?: Maybe<Scalars['Int']['output']>;
  count_results?: Maybe<Scalars['Int']['output']>;
  count_sportsmen?: Maybe<Scalars['Int']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  country_name?: Maybe<Scalars['String']['output']>;
  /** Статус/шаг создания соревнования */
  creation_state?: Maybe<EventCreationStatesEnum>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  description_place?: Maybe<Scalars['String']['output']>;
  disciplines?: Maybe<Array<Maybe<EventDiscipline>>>;
  dt_closing_photo_seilings?: Maybe<Scalars['DateType']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  dt_end?: Maybe<Scalars['DateType']['output']>;
  dt_start?: Maybe<Scalars['DateType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  event_type?: Maybe<Scalars['String']['output']>;
  has_results?: Maybe<Scalars['Boolean']['output']>;
  /** Есть видео выступлений (Boolean) */
  has_video?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  judges?: Maybe<Array<Maybe<ChiefPerson>>>;
  limit_athletes?: Maybe<Scalars['Int']['output']>;
  limit_athletes_type?: Maybe<EventCategoryLimitAthletesTypeEnum>;
  main_judge?: Maybe<ChiefPerson>;
  main_secretary?: Maybe<ChiefPerson>;
  map_info?: Maybe<EventMapInfo>;
  name: Scalars['String']['output'];
  /** Флаг "организатору разрешено управлять трансляцией" */
  org_can_manage_translation?: Maybe<Scalars['Boolean']['output']>;
  organization_organizers?: Maybe<Array<Maybe<EventOrganizationOrganizer>>>;
  /** Выводит аватар мероприятия, если его нет - аватар календаря, если его нет - организации */
  parent_avatar?: Maybe<Avatar>;
  parent_calendar_requests?: Maybe<Array<Maybe<EventToParentCalendarRequest>>>;
  phone?: Maybe<Scalars['String']['output']>;
  postwall_write_rights?: Maybe<Scalars['String']['output']>;
  preliminary?: Maybe<Scalars['Boolean']['output']>;
  /** Кастомный текст чека */
  receipt_text_custom?: Maybe<Scalars['String']['output']>;
  /** Код для судейской системы */
  refereeing_system_code?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Region>;
  region_id?: Maybe<Scalars['Int']['output']>;
  region_name?: Maybe<Scalars['String']['output']>;
  resources?: Maybe<Array<Maybe<FileType>>>;
  responsible?: Maybe<EventResponsibleUserList>;
  results_published?: Maybe<Scalars['Boolean']['output']>;
  revise_message?: Maybe<Scalars['String']['output']>;
  /** Расписание соревнования по дням */
  schedule?: Maybe<Array<Maybe<EventSchedule>>>;
  shared_link?: Maybe<Scalars['Boolean']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  show_ath_list?: Maybe<Scalars['String']['output']>;
  show_insurance_selling_button?: Maybe<Scalars['Boolean']['output']>;
  show_results?: Maybe<EventShowResultsEnum>;
  sport_id?: Maybe<Scalars['Int']['output']>;
  sport_type?: Maybe<SportType>;
  status?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  /** Доступное время в минутах */
  time_available?: Maybe<Scalars['Int']['output']>;
  /** Техническое время в минутах */
  time_tech?: Maybe<Scalars['Int']['output']>;
  /** Время на арене в минутах */
  time_total?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** Настроенные в соревновании трансляции фейскаст */
  translations?: Maybe<Array<Maybe<EventTranslationItem>>>;
  use_any_user_payment?: Maybe<Scalars['Boolean']['output']>;
  /** DEPRECATED use Event.app_info.use_application instead */
  use_categories?: Maybe<Scalars['Boolean']['output']>;
  user_is_organizer?: Maybe<Scalars['Boolean']['output']>;
  /** Заголовок кнопки оплаты */
  user_payment_button_title: Scalars['String']['output'];
  /** Кастомный заголовок кнопки оплаты */
  user_payment_button_title_custom?: Maybe<Scalars['String']['output']>;
  /** @deprecated Поле перенесено в "app_info" */
  white_list?: Maybe<Scalars['Boolean']['output']>;
  who_are_competing?: Maybe<EventWhoAreCompeting>;
};

/** Описывает заявку на проживание */
export type EventAccomodation = NodeInterface & {
  __typename?: 'EventAccomodation';
  accomodations?: Maybe<Array<Maybe<AccomodationInfo>>>;
  applicant_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  /** информация об оплате заявки */
  payment_info?: Maybe<ApplicationPaymentInfo>;
  payment_status?: Maybe<PaymentStatusEnum>;
  phone?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<ApplicationStatusEnum>;
  table: Scalars['String']['output'];
};

export type EventAccomodationDatesInput = {
  dt_begin: Scalars['DateType']['input'];
  dt_end: Scalars['DateType']['input'];
};

export type EventAccomodationHotelInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  rooms?: InputMaybe<Array<InputMaybe<EventAccomodationRoomInput>>>;
};

export type EventAccomodationInput = {
  dates?: InputMaybe<EventAccomodationDatesInput>;
  hotels?: InputMaybe<Array<InputMaybe<EventAccomodationHotelInput>>>;
  id: Scalars['Int']['input'];
  is_forbidden_edit?: InputMaybe<Scalars['Boolean']['input']>;
  use_booking: Scalars['Boolean']['input'];
};

export type EventAccomodationRoomInput = {
  accommodation_types?: InputMaybe<Array<InputMaybe<EventAccomodationTypeInput>>>;
  amount: Scalars['Int']['input'];
  display_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
};

/** Схема описания параметров размещения в мероприятии */
export type EventAccomodationScheme = {
  __typename?: 'EventAccomodationScheme';
  dates?: Maybe<Array<Maybe<AccomodationDatesScheme>>>;
  event_id: Scalars['ID']['output'];
  hotels?: Maybe<Array<Maybe<AccomodationHotelScheme>>>;
};

export type EventAccomodationTypeInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  number_persons: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

/** EventAccomodationsConnection type definition */
export type EventAccomodationsConnection = {
  __typename?: 'EventAccomodationsConnection';
  edges?: Maybe<Array<Maybe<EventAccomodation>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** EventAdvertising type definition */
export type EventAdvertising = NodeInterface & {
  __typename?: 'EventAdvertising';
  count_view?: Maybe<Scalars['Int']['output']>;
  dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  id: Scalars['ID']['output'];
  image_name?: Maybe<Scalars['String']['output']>;
  image_src?: Maybe<Scalars['String']['output']>;
  reclame_block?: Maybe<Scalars['String']['output']>;
  redirect_href?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  target_href?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum EventAdvertisingPlaceEnum {
  Event = 'event',
  List = 'list'
}

/** Описание заявки на участие в мероприятии */
export type EventApplication = {
  __typename?: 'EventApplication';
  applications?: Maybe<Array<Maybe<Application>>>;
  category: EventCategory;
};

/** EventApplicationByCategory описывает заявки на мероприятие по категориям */
export type EventApplicationByCategory = {
  __typename?: 'EventApplicationByCategory';
  applications?: Maybe<Array<Maybe<Application>>>;
  category: EventCategory;
};

/** EventApplicationByCategoryConnection type definition */
export type EventApplicationByCategoryConnection = {
  __typename?: 'EventApplicationByCategoryConnection';
  edges?: Maybe<Array<Maybe<EventApplicationByCategory>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Информация, относящаяся к заявкам определенного контекста (на участие, на проживание и т.д.) */
export type EventApplicationContextInfo = {
  __typename?: 'EventApplicationContextInfo';
  /** Комиссия сайта с участника */
  commission_participant?: Maybe<Scalars['Float']['output']>;
  /** Комиссия сайта за заявку с участника - в данный момент используется для оорганизаций не в реестре */
  commission_participant_application?: Maybe<Scalars['JSON']['output']>;
  /** Комиссия сайта за заявку с участника - в данный момент используется для оранизаций не в реестре */
  commission_participant_application_default?: Maybe<Scalars['JSON']['output']>;
  /** Фиксированная комиссия сайта с участника */
  commission_participant_fix?: Maybe<Scalars['Float']['output']>;
  commissions?: Maybe<PaymentCommissionSettings>;
  context: ApplicationContextEnum;
  default_commissions?: Maybe<PaymentCommissionSettings>;
  /** Дата закрытия приема оплаты */
  dt_payment_end?: Maybe<Scalars['DateTimeType']['output']>;
  /** Дата открытия приема оплаты */
  dt_payment_start?: Maybe<Scalars['DateTimeType']['output']>;
  /** Дата закрытия подачи заявок на мероприятие */
  dt_registration_end?: Maybe<Scalars['DateTimeType']['output']>;
  /** Дата открытия подачи заявок на мероприятие */
  dt_registration_start?: Maybe<Scalars['DateTimeType']['output']>;
  /** Ид мероприятия */
  id: Scalars['Int']['output'];
  /** Флаг, показывающий что оплата возможна только после утверждения заявки */
  is_accept_before_payment?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что оплата заявки принимаются автоматически */
  is_auto_accept_apps?: Maybe<Scalars['Boolean']['output']>;
  is_partner_commissions_same?: Maybe<Scalars['Boolean']['output']>;
  legalentity?: Maybe<Legalentity>;
  legalentity_id?: Maybe<Scalars['Int']['output']>;
  partner_commissions?: Maybe<PaymentCommissionSettings>;
  /** Флаг, показывающий что прием оплат закрыт */
  payment_closed?: Maybe<Scalars['Boolean']['output']>;
  /** Количество записей по этому контексту в реестре платежей (можно проверять были ли оплаты) */
  payments_count?: Maybe<Scalars['Int']['output']>;
  /** Флаг, показывающий что подача заявок закрыта */
  registration_closed?: Maybe<Scalars['Boolean']['output']>;
};

export type EventApplicationContextSettings = {
  commission_participant?: InputMaybe<Scalars['Float']['input']>;
  commission_participant_application?: InputMaybe<Array<InputMaybe<CommissionParticipantApplication>>>;
  commission_participant_fix?: InputMaybe<Scalars['Float']['input']>;
  commissions?: InputMaybe<PaymentCommissionSettingsInput>;
  dt_payment_end: Scalars['DateType']['input'];
  dt_payment_start: Scalars['DateType']['input'];
  dt_registration_end: Scalars['DateTimeType']['input'];
  dt_registration_start: Scalars['DateTimeType']['input'];
  is_accept_before_payment: Scalars['Boolean']['input'];
  is_auto_accept_apps?: InputMaybe<Scalars['Boolean']['input']>;
  is_partner_commissions_same?: InputMaybe<Scalars['Boolean']['input']>;
  legalentity_id?: InputMaybe<Scalars['Int']['input']>;
  partner_commissions?: InputMaybe<PaymentCommissionSettingsInput>;
  to_reverse_payments?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Заявка на мероприятие для загрузки в суд. системы */
export type EventApplicationForJudgingSystems = {
  __typename?: 'EventApplicationForJudgingSystems';
  appId: Scalars['ID']['output'];
  athleteId: Scalars['ID']['output'];
  categoryId: Scalars['ID']['output'];
  city?: Maybe<Scalars['String']['output']>;
  coach?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['ID']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  school?: Maybe<Scalars['String']['output']>;
  sportcategory?: Maybe<Scalars['String']['output']>;
  tdBirthday?: Maybe<Scalars['String']['output']>;
  team_name?: Maybe<Scalars['String']['output']>;
};

/** Информация, относящаяся к заявкам на мероприятие */
export type EventApplicationInfo = {
  __typename?: 'EventApplicationInfo';
  /** Разрешить подавать заявки от организаций не в реестре */
  allow_not_in_register?: Maybe<Scalars['Boolean']['output']>;
  /** Заявки могут подаваться только ответственными школ */
  app_from_schools?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  athletes_add_app_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  booking_add_app_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать страницу подачи заявок на проживание */
  booking_page_available?: Maybe<Scalars['Boolean']['output']>;
  /** Плейсхолдер поля комментарий в заявке */
  comment_field_placeholder?: Maybe<Scalars['String']['output']>;
  /** Настройки заявок на участие, проживание, трансляцию - в зависимости от контекста */
  context_settings?: Maybe<EventApplicationContextInfo>;
  /** флаг - скрывать стоимость заявок */
  hide_app_price?: Maybe<Scalars['Boolean']['output']>;
  /** id соревнования */
  id: Scalars['Int']['output'];
  /** Флаг, показывающий принимает ли сайт стартовые взносы */
  is_paid?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что доступна частичная оплата заявки */
  pay_part_available?: Maybe<Scalars['Boolean']['output']>;
  pay_part_percentage?: Maybe<Scalars['Float']['output']>;
  /**
   * Варианты долей оплаты заявок в соревновании
   * @deprecated используйте свойство pay_part_percentage
   */
  pay_parts?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Показывать кнопку оплаты */
  payment_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Окончание оплат (самая поздняя дата из всех настроек окончаний оплат разных типов заявок или дата начала соревнования, если иное не настроено) */
  payment_button_dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  /** Начало оплат (самая ранняя дата из всех настроек начал оплат разных типов заявок) */
  payment_button_dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  /** Заголовок кнопки оплаты */
  payment_button_title: Scalars['String']['output'];
  /** Показывать страницу оплаты заявок */
  payment_page_available?: Maybe<Scalars['Boolean']['output']>;
  /** Заголовок страницы оплаты */
  payment_page_title: Scalars['String']['output'];
  /** Заголовок суммы к оплате */
  payment_sum_title: Scalars['String']['output'];
  /** Показывать кнопку купить трансляци */
  reg_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Окончание подачи заявок (самая поздняя дата из всех настроек окончаний подачи разных типов заявок или дата начала соревнования, если иное не настроено) */
  reg_button_dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  /** Начало подачи заявок (самая ранняя дата из всех настроек начал подачи разных типов заявок) */
  reg_button_dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  /** Заголовок кнопки подачи заявки */
  reg_button_title?: Maybe<Scalars['String']['output']>;
  /** Тип кнопки подачи заявки */
  reg_button_type?: Maybe<EventRegButtonTypeEnum>;
  /** Ссылка на внешний сайт при подаче заявки через внешний сайт */
  reg_link?: Maybe<Scalars['String']['output']>;
  /** Показывать страницу подачи заявок на участие */
  reg_page_available?: Maybe<Scalars['Boolean']['output']>;
  /** Способ подачи заявки на мероприятие */
  reg_type?: Maybe<EventRegTypeEnum>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  translations_add_app_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать кнопку купить трансляцию */
  translations_button_available?: Maybe<Scalars['Boolean']['output']>;
  /** Показывать страницу подачи заявок на трансляцию */
  translations_page_available?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что сайт принимает заявки на участие */
  use_application?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что сайт принимает заявки на проживание */
  use_booking?: Maybe<Scalars['Boolean']['output']>;
  /** Использовать поле комментарий в заявке */
  use_comment_field?: Maybe<Scalars['Boolean']['output']>;
  /** Использовать поле документы в заявке */
  use_documents_field?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Флаг, показывающий что оплата возможна только после утверждения заявки
   * @deprecated УСТАРЕЛО, используйте свойство is_accept_before_payment, уникальное для каждого контекста
   */
  use_pay_after_approval?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что сайт принимает заявки на продажу доп услуг */
  use_sales?: Maybe<Scalars['Boolean']['output']>;
  /** Флаг, показывающий что сайт использует заявки на фейскаст трансляциии */
  use_translations?: Maybe<Scalars['Boolean']['output']>;
  /** DEPRECATED use reg_button_available and payment_button_available instead */
  user_can_apply?: Maybe<Scalars['Boolean']['output']>;
  /** Заявки могут подаваться только из белого списка */
  white_list?: Maybe<Scalars['Boolean']['output']>;
};


/** Информация, относящаяся к заявкам на мероприятие */
export type EventApplicationInfoContext_SettingsArgs = {
  context: ApplicationContextEnum;
};

export type EventApplicationInput = {
  application_status?: InputMaybe<ApplicationStatusEnum>;
  application_type: ApplicationTypeEnum;
  athletes?: InputMaybe<Array<InputMaybe<ApplicationAthleteInput>>>;
  group_coach_id?: InputMaybe<Scalars['ID']['input']>;
  group_coach_name?: InputMaybe<Scalars['String']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type EventApplicationSettingsInput = {
  allow_not_in_register?: InputMaybe<Scalars['Boolean']['input']>;
  athletes?: InputMaybe<EventApplicationContextSettings>;
  booking?: InputMaybe<EventApplicationContextSettings>;
  id: Scalars['Int']['input'];
  is_paid?: InputMaybe<Scalars['Boolean']['input']>;
  pay_part_available?: InputMaybe<Scalars['Boolean']['input']>;
  pay_part_percentage?: InputMaybe<Scalars['Float']['input']>;
  receipt_text_custom?: InputMaybe<Scalars['String']['input']>;
  reg_button_title?: InputMaybe<Scalars['String']['input']>;
  reg_email_link?: InputMaybe<Scalars['String']['input']>;
  reg_outer_link?: InputMaybe<Scalars['String']['input']>;
  reg_type: EventRegTypeEnum;
  translations?: InputMaybe<EventApplicationContextSettings>;
  user_payment_button_title?: InputMaybe<EventPaymentButtonTitleEnum>;
  user_payment_button_title_custom?: InputMaybe<Scalars['String']['input']>;
};

/** EventApplicationsConnection type definition */
export type EventApplicationsConnection = {
  __typename?: 'EventApplicationsConnection';
  edges?: Maybe<Array<Maybe<EventApplication>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** EventApplicationsToGoogleSheets type definition */
export type EventApplicationsToGoogleSheets = {
  __typename?: 'EventApplicationsToGoogleSheets';
  event_id?: Maybe<Scalars['Int']['output']>;
  google_api_id?: Maybe<Scalars['Int']['output']>;
  google_file_id?: Maybe<Scalars['String']['output']>;
  google_path?: Maybe<Scalars['String']['output']>;
};

/** EventApplicationsToGoogleSheetsInput type definition */
export type EventApplicationsToGoogleSheetsInput = {
  id: Scalars['Int']['input'];
  path: Scalars['String']['input'];
};

export type EventCategoriesInput = {
  categories?: InputMaybe<Array<InputMaybe<EventCategoryItemInput>>>;
  comment_field_placeholder?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  limit_athletes?: InputMaybe<Scalars['Int']['input']>;
  limit_athletes_type: EventCategoryLimitAthletesTypeEnum;
  time_tech?: InputMaybe<Scalars['Int']['input']>;
  time_total?: InputMaybe<Scalars['Int']['input']>;
  use_categories: Scalars['Boolean']['input'];
  use_comment_field: Scalars['Boolean']['input'];
  use_documents_field: Scalars['Boolean']['input'];
};

/** EventCategory type definition */
export type EventCategory = NodeInterface & {
  __typename?: 'EventCategory';
  /** Цена + комиссия за всю заявку */
  amount?: Maybe<Scalars['Int']['output']>;
  applicant_type?: Maybe<ApplicantTypeEnum>;
  birthday_max?: Maybe<Scalars['DateType']['output']>;
  birthday_min?: Maybe<Scalars['DateType']['output']>;
  collective_category?: Maybe<FsCollectiveCategoryEnum>;
  /** Комиссия */
  commission?: Maybe<Scalars['Int']['output']>;
  /** Комиссия за всю заявку (платную или бесплатную) */
  commission_application?: Maybe<Scalars['Int']['output']>;
  count_active_applications?: Maybe<Scalars['Int']['output']>;
  count_applications?: Maybe<Scalars['Int']['output']>;
  count_applications_fully_paid?: Maybe<Scalars['Int']['output']>;
  count_applications_partially_paid?: Maybe<Scalars['Int']['output']>;
  count_athletes?: Maybe<Scalars['Int']['output']>;
  count_wait_applications?: Maybe<Scalars['Int']['output']>;
  deleting_prohibits?: Maybe<Array<Maybe<EventCategoryDeletingProhibits>>>;
  discipline_char_id?: Maybe<Scalars['String']['output']>;
  discipline_id?: Maybe<Scalars['Int']['output']>;
  entrance_cost?: Maybe<Scalars['Float']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  facecast_id?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<EventCompetitorAthleteGenderEnum>;
  has_video?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  limit_applications?: Maybe<Scalars['Int']['output']>;
  max_number_participants?: Maybe<Scalars['Int']['output']>;
  min_number_participants?: Maybe<Scalars['Int']['output']>;
  min_required_number_participants?: Maybe<Scalars['Int']['output']>;
  /** Цена */
  price?: Maybe<Scalars['Int']['output']>;
  rank_id?: Maybe<Scalars['Int']['output']>;
  score_names?: Maybe<Array<Maybe<ScoreName>>>;
  table: Scalars['String']['output'];
  time_per_exercise?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translation_date?: Maybe<Scalars['DateType']['output']>;
  type_number_participants?: Maybe<EventCategoryTypeNumberParticipantsEnum>;
  use_team_name?: Maybe<Scalars['Boolean']['output']>;
};

/** EventCategoryDeletingProhibits type definition */
export type EventCategoryDeletingProhibits = {
  __typename?: 'EventCategoryDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Категория мероприятия для загрузки в суд. системы */
export type EventCategoryForJudgingSystems = {
  __typename?: 'EventCategoryForJudgingSystems';
  apparatuses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  categoryId: Scalars['ID']['output'];
  discipline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<EventCompetitorTypeEnum>;
};

export type EventCategoryInput = {
  birthday_max?: InputMaybe<Scalars['DateType']['input']>;
  birthday_min?: InputMaybe<Scalars['DateType']['input']>;
  discipline_id?: InputMaybe<Scalars['Int']['input']>;
  entrance_cost?: InputMaybe<Scalars['Float']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  limit_applications?: InputMaybe<Scalars['Int']['input']>;
  max_number_participants?: InputMaybe<Scalars['Int']['input']>;
  min_number_participants?: InputMaybe<Scalars['Int']['input']>;
  min_required_number_participants?: InputMaybe<Scalars['Int']['input']>;
  rank?: InputMaybe<IdInput>;
  score_names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort_order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type_number_participants?: InputMaybe<EventCategoryTypeNumberParticipantsEnum>;
};

export type EventCategoryItemInput = {
  applicant_type?: InputMaybe<ApplicantTypeEnum>;
  collective_category?: InputMaybe<FsCollectiveCategoryEnum>;
  discipline?: InputMaybe<IdInput>;
  entrance_cost?: InputMaybe<Scalars['Float']['input']>;
  gender?: InputMaybe<EventCompetitorAthleteGenderEnum>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  limit_applications?: InputMaybe<Scalars['Int']['input']>;
  max_number_participants?: InputMaybe<Scalars['Int']['input']>;
  min_number_participants?: InputMaybe<Scalars['Int']['input']>;
  min_required_number_participants?: InputMaybe<Scalars['Int']['input']>;
  rank?: InputMaybe<IdInput>;
  score_names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  time_per_exercise?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  type_number_participants?: InputMaybe<EventCategoryTypeNumberParticipantsEnum>;
  years_range?: InputMaybe<EventCategoryItemYearsRangeInput>;
};

export type EventCategoryItemYearsRangeInput = {
  end?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

/** Определяет тип лимита заявок в категориях соревнования */
export enum EventCategoryLimitAthletesTypeEnum {
  /** по количеству заявок */
  Application = 'application',
  /** по количеству оплат */
  Payment = 'payment',
  /** по времени */
  Time = 'time'
}

/** EventCategoryResults type definition */
export type EventCategoryResults = {
  __typename?: 'EventCategoryResults';
  category_title?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  limit_applications?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<SportsmanApplicationResults>>>;
  short_title?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['String']['output']>;
};

export enum EventCategoryTypeNumberParticipantsEnum {
  Duet = 'duet',
  Single = 'single',
  Team = 'team',
  Trio = 'trio'
}

/** EventCompetitor type definition */
export type EventCompetitor = NodeInterface & {
  __typename?: 'EventCompetitor';
  app_id?: Maybe<Scalars['Int']['output']>;
  athletes?: Maybe<Array<Maybe<EventCompetitorAthlete>>>;
  category_id?: Maybe<Scalars['Int']['output']>;
  competition_id?: Maybe<Scalars['Int']['output']>;
  competitor_id: Scalars['String']['output'];
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  final_total?: Maybe<Scalars['Float']['output']>;
  final_total_announced?: Maybe<Scalars['Float']['output']>;
  /** результат первого места в категории если он есть */
  first_rank_final_total?: Maybe<Scalars['Float']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  has_video?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  is_reserve?: Maybe<Scalars['Boolean']['output']>;
  is_vk?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  rank_announced?: Maybe<Scalars['Int']['output']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterface>>>;
  table: Scalars['String']['output'];
  team_name?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  type_score_null?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

/** EventCompetitor2 - описание участника соревнования */
export type EventCompetitor2 = {
  __typename?: 'EventCompetitor2';
  app_id?: Maybe<Scalars['Int']['output']>;
  category_id: Scalars['ID']['output'];
  competition_id: Scalars['ID']['output'];
  competitor_id: Scalars['String']['output'];
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  group_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_reserve?: Maybe<Scalars['Boolean']['output']>;
  is_vk?: Maybe<Scalars['Boolean']['output']>;
  table: Scalars['String']['output'];
  team_name?: Maybe<Scalars['String']['output']>;
};

/** EventCompetitorAthlete type definition */
export type EventCompetitorAthlete = {
  __typename?: 'EventCompetitorAthlete';
  athlete_id?: Maybe<Scalars['Int']['output']>;
  coach_id?: Maybe<Scalars['Int']['output']>;
  coach_person_id?: Maybe<Scalars['Int']['output']>;
  coaches?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<EventCompetitorAthleteGenderEnum>;
  id: Scalars['Int']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Rank>;
  school_id?: Maybe<Scalars['Int']['output']>;
  show_as?: Maybe<Scalars['String']['output']>;
  sports_school?: Maybe<Scalars['String']['output']>;
  start_number?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorAthleteConteinerInterfaceInputCy = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export type EventCompetitorAthleteConteinerInterfaceInputFs = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export type EventCompetitorAthleteConteinerInterfaceInputRg = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export enum EventCompetitorAthleteGenderEnum {
  Female = 'female',
  Male = 'male',
  Unknown = 'unknown'
}

export type EventCompetitorAthleteInput = {
  athlete_id?: InputMaybe<Scalars['Int']['input']>;
  competitor_id: Scalars['String']['input'];
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<EventCompetitorAthleteGenderEnum>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  rank_id?: InputMaybe<Scalars['Int']['input']>;
};

export type EventCompetitorAthleteInterface = {
  __typename?: 'EventCompetitorAthleteInterface';
  dirty_name?: Maybe<Scalars['String']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  show_as?: Maybe<Scalars['String']['output']>;
  sportsman?: Maybe<Sportsman>;
  start_number?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<Scalars['String']['output']>;
};

export type EventCompetitorAthleteInterfaceInput = {
  dirty_name?: InputMaybe<Scalars['String']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  show_as?: InputMaybe<Scalars['String']['input']>;
  sportsman?: InputMaybe<IdInput>;
  start_number?: InputMaybe<Scalars['String']['input']>;
  type_score?: InputMaybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorDeleteInputCy = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  competition_id?: InputMaybe<Scalars['ID']['input']>;
  competitor_id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventCompetitorDeleteInputFs = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  competition_id?: InputMaybe<Scalars['ID']['input']>;
  competitor_id?: InputMaybe<Scalars['ID']['input']>;
};

export type EventCompetitorDeleteInputRg = {
  category_id?: InputMaybe<Scalars['ID']['input']>;
  competition_id?: InputMaybe<Scalars['ID']['input']>;
  competitor_id?: InputMaybe<Scalars['ID']['input']>;
};

/** EventCompetitorGroupPhoto type definition */
export type EventCompetitorGroupPhoto = {
  __typename?: 'EventCompetitorGroupPhoto';
  apparatus?: Maybe<Scalars['String']['output']>;
  apparatus_title?: Maybe<Scalars['String']['output']>;
  category_title?: Maybe<Scalars['String']['output']>;
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_number_id?: Maybe<Scalars['Int']['output']>;
  day_action?: Maybe<Scalars['DateType']['output']>;
  group_hash?: Maybe<Scalars['String']['output']>;
  photo_count?: Maybe<Scalars['Int']['output']>;
};

/** EventCompetitorGroupPhotoConnection type definition */
export type EventCompetitorGroupPhotoConnection = {
  __typename?: 'EventCompetitorGroupPhotoConnection';
  edges?: Maybe<Array<Maybe<EventCompetitorNameGroupPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorInput = {
  app_id?: InputMaybe<Scalars['Int']['input']>;
  athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteInput>>>;
  category_id: Scalars['Int']['input'];
  competition_id: Scalars['Int']['input'];
  competitor_id: Scalars['String']['input'];
  competitor_name: Scalars['String']['input'];
  competitor_type: EventCompetitorTypeEnum;
  hide_video?: InputMaybe<Scalars['Boolean']['input']>;
  is_reserve: Scalars['Boolean']['input'];
  is_vk: Scalars['Boolean']['input'];
  team_name?: InputMaybe<Scalars['String']['input']>;
};

/** EventCompetitorNameGroupPhoto type definition */
export type EventCompetitorNameGroupPhoto = {
  __typename?: 'EventCompetitorNameGroupPhoto';
  competitor_name?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<EventCompetitorGroupPhoto>>>;
  photo_count?: Maybe<Scalars['Int']['output']>;
};

/** EventCompetitorPhoto type definition */
export type EventCompetitorPhoto = NodeInterface & {
  __typename?: 'EventCompetitorPhoto';
  apparatus?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['Int']['output']>;
  competition_id?: Maybe<Scalars['Int']['output']>;
  competitor_id?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  photographer_id?: Maybe<Scalars['Int']['output']>;
  photographer_name?: Maybe<Scalars['String']['output']>;
  preview2_link?: Maybe<Scalars['String']['output']>;
  preview_link?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  small_link?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  time_shoot?: Maybe<Scalars['DateTimeType']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** EventCompetitorPhotoConnection type definition */
export type EventCompetitorPhotoConnection = {
  __typename?: 'EventCompetitorPhotoConnection';
  edges?: Maybe<Array<Maybe<EventCompetitorPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorPhotoFilter = {
  competitor_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search_string?: InputMaybe<Scalars['String']['input']>;
};

export type EventCompetitorPhotoInput = {
  apparatus?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  competition_id?: InputMaybe<Scalars['Int']['input']>;
  competitor_id?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link: Scalars['String']['input'];
  photographer_id: Scalars['Int']['input'];
  preview2_link: Scalars['String']['input'];
  preview_link: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  small_link: Scalars['String']['input'];
  time_shoot: Scalars['DateTimeType']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type EventCompetitorPhotoOrderInput = {
  after_redirect: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** EventCompetitorPhotoPaymentURL type definition */
export type EventCompetitorPhotoPaymentUrl = {
  __typename?: 'EventCompetitorPhotoPaymentURL';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_with_commission?: Maybe<Scalars['Float']['output']>;
  commission?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_url?: Maybe<Scalars['String']['output']>;
};

/** EventCompetitorQueueStatus type definition */
export type EventCompetitorQueueStatus = NodeInterface & {
  __typename?: 'EventCompetitorQueueStatus';
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  dt_update?: Maybe<Scalars['DateTimeType']['output']>;
  errors?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mutation: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

export type EventCompetitorScoreApparatusConteinerInterfaceInputRg = {
  category_char_id: Scalars['String']['input'];
  char_id: Scalars['String']['input'];
  turn_num: Scalars['Int']['input'];
};

export type EventCompetitorScoreApparatusInterfaceRg = {
  __typename?: 'EventCompetitorScoreApparatusInterfaceRG';
  char_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  turn_num?: Maybe<Scalars['Int']['output']>;
};

/** EventCompetitorScoreCY type definition */
export type EventCompetitorScoreCy = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreCY';
  category_id: Scalars['Int']['output'];
  competition_id: Scalars['Int']['output'];
  competitor_id: Scalars['String']['output'];
  dt_on?: Maybe<Scalars['DateTimeType']['output']>;
  dt_out?: Maybe<Scalars['DateTimeType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  is_announced?: Maybe<Scalars['Boolean']['output']>;
  is_dnf?: Maybe<Scalars['Boolean']['output']>;
  is_dns?: Maybe<Scalars['Boolean']['output']>;
  is_dqb?: Maybe<Scalars['Boolean']['output']>;
  is_dsq?: Maybe<Scalars['Boolean']['output']>;
  is_signed?: Maybe<Scalars['Boolean']['output']>;
  program: Scalars['String']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  score_index: Scalars['Int']['output'];
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']['output']>;
  video_chunk_start?: Maybe<Scalars['Int']['output']>;
  video_path?: Maybe<Scalars['String']['output']>;
};

/** EventCompetitorScoreCardRG type definition */
export type EventCompetitorScoreCardRg = {
  __typename?: 'EventCompetitorScoreCardRG';
  category_title?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']['output']>;
  competition_name: Scalars['String']['output'];
  competition_title?: Maybe<Scalars['String']['output']>;
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  description_place?: Maybe<Scalars['String']['output']>;
  dt_end?: Maybe<Scalars['DateType']['output']>;
  dt_start?: Maybe<Scalars['DateType']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  scores?: Maybe<EventCompetitorScoreRg>;
};

export type EventCompetitorScoreDatesInput = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  competition_id: Scalars['Int']['input'];
  competitor_id: Scalars['String']['input'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
};

/** EventCompetitorScoreFS type definition */
export type EventCompetitorScoreFs = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreFS';
  category_id: Scalars['Int']['output'];
  competition_id: Scalars['Int']['output'];
  competitor_id: Scalars['String']['output'];
  dt_on_ice?: Maybe<Scalars['DateTimeType']['output']>;
  dt_out_ice?: Maybe<Scalars['DateTimeType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  is_announced?: Maybe<Scalars['Boolean']['output']>;
  is_dnf?: Maybe<Scalars['Boolean']['output']>;
  is_dns?: Maybe<Scalars['Boolean']['output']>;
  is_dqb?: Maybe<Scalars['Boolean']['output']>;
  is_dsq?: Maybe<Scalars['Boolean']['output']>;
  is_signed?: Maybe<Scalars['Boolean']['output']>;
  program: Scalars['String']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  score_index: Scalars['Int']['output'];
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']['output']>;
  video_chunk_start?: Maybe<Scalars['Int']['output']>;
  video_path?: Maybe<Scalars['String']['output']>;
};

export type EventCompetitorScoreInput = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  competition_id: Scalars['Int']['input'];
  competitor_id: Scalars['String']['input'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  final_d?: InputMaybe<Scalars['Float']['input']>;
  final_d1d2?: InputMaybe<Scalars['Float']['input']>;
  final_d2?: InputMaybe<Scalars['Float']['input']>;
  final_d3d4?: InputMaybe<Scalars['Float']['input']>;
  final_d4?: InputMaybe<Scalars['Float']['input']>;
  final_d1234?: InputMaybe<Scalars['Float']['input']>;
  final_ded?: InputMaybe<Scalars['Float']['input']>;
  final_e?: InputMaybe<Scalars['Float']['input']>;
  final_e1e2?: InputMaybe<Scalars['Float']['input']>;
  final_e3?: InputMaybe<Scalars['Float']['input']>;
  final_e4?: InputMaybe<Scalars['Float']['input']>;
  final_e5?: InputMaybe<Scalars['Float']['input']>;
  final_e6?: InputMaybe<Scalars['Float']['input']>;
  final_e3456?: InputMaybe<Scalars['Float']['input']>;
  final_e123456?: InputMaybe<Scalars['Float']['input']>;
  final_l1?: InputMaybe<Scalars['Float']['input']>;
  final_l2?: InputMaybe<Scalars['Float']['input']>;
  final_o?: InputMaybe<Scalars['Float']['input']>;
  final_t?: InputMaybe<Scalars['Float']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  final_total_announced?: InputMaybe<Scalars['Float']['input']>;
  is_announced?: InputMaybe<Scalars['Boolean']['input']>;
  is_dnf?: InputMaybe<Scalars['Boolean']['input']>;
  is_dns?: InputMaybe<Scalars['Boolean']['input']>;
  is_dqb?: InputMaybe<Scalars['Boolean']['input']>;
  is_dsq?: InputMaybe<Scalars['Boolean']['input']>;
  is_signed?: InputMaybe<Scalars['Boolean']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  rank_announced?: InputMaybe<Scalars['Int']['input']>;
  score_index: Scalars['Int']['input'];
  scores?: InputMaybe<Scalars['JSON']['input']>;
  turn_num?: InputMaybe<Scalars['Int']['input']>;
};

export type EventCompetitorScoreInputV2 = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  competition_id: Scalars['Int']['input'];
  competitor_id: Scalars['String']['input'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  final_a?: InputMaybe<Scalars['Float']['input']>;
  final_a1?: InputMaybe<Scalars['Float']['input']>;
  final_a2?: InputMaybe<Scalars['Float']['input']>;
  final_a3?: InputMaybe<Scalars['Float']['input']>;
  final_a4?: InputMaybe<Scalars['Float']['input']>;
  final_a1234?: InputMaybe<Scalars['Float']['input']>;
  final_d?: InputMaybe<Scalars['Float']['input']>;
  final_d1d2?: InputMaybe<Scalars['Float']['input']>;
  final_d2?: InputMaybe<Scalars['Float']['input']>;
  final_d3d4?: InputMaybe<Scalars['Float']['input']>;
  final_d4?: InputMaybe<Scalars['Float']['input']>;
  final_d1234?: InputMaybe<Scalars['Float']['input']>;
  final_ded?: InputMaybe<Scalars['Float']['input']>;
  final_e?: InputMaybe<Scalars['Float']['input']>;
  final_e1?: InputMaybe<Scalars['Float']['input']>;
  final_e2?: InputMaybe<Scalars['Float']['input']>;
  final_e3?: InputMaybe<Scalars['Float']['input']>;
  final_e4?: InputMaybe<Scalars['Float']['input']>;
  final_e1234?: InputMaybe<Scalars['Float']['input']>;
  final_l1?: InputMaybe<Scalars['Float']['input']>;
  final_l2?: InputMaybe<Scalars['Float']['input']>;
  final_o?: InputMaybe<Scalars['Float']['input']>;
  final_t?: InputMaybe<Scalars['Float']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  final_total_announced?: InputMaybe<Scalars['Float']['input']>;
  is_announced?: InputMaybe<Scalars['Boolean']['input']>;
  is_dnf?: InputMaybe<Scalars['Boolean']['input']>;
  is_dns?: InputMaybe<Scalars['Boolean']['input']>;
  is_dqb?: InputMaybe<Scalars['Boolean']['input']>;
  is_dsq?: InputMaybe<Scalars['Boolean']['input']>;
  is_signed?: InputMaybe<Scalars['Boolean']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  rank_announced?: InputMaybe<Scalars['Int']['input']>;
  score_index: Scalars['Int']['input'];
  scores?: InputMaybe<Scalars['JSON']['input']>;
  turn_num?: InputMaybe<Scalars['Int']['input']>;
};

/** EventCompetitorScoreInterface interface definition */
export type EventCompetitorScoreInterface = {
  category_id: Scalars['Int']['output'];
  competition_id: Scalars['Int']['output'];
  competitor_id: Scalars['String']['output'];
  final_total?: Maybe<Scalars['Float']['output']>;
  is_announced?: Maybe<Scalars['Boolean']['output']>;
  is_dnf?: Maybe<Scalars['Boolean']['output']>;
  is_dns?: Maybe<Scalars['Boolean']['output']>;
  is_dqb?: Maybe<Scalars['Boolean']['output']>;
  is_dsq?: Maybe<Scalars['Boolean']['output']>;
  is_signed?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  video_chunk_end?: Maybe<Scalars['Int']['output']>;
  video_chunk_start?: Maybe<Scalars['Int']['output']>;
  video_path?: Maybe<Scalars['String']['output']>;
};

export type EventCompetitorScoreInterfaceCy = {
  __typename?: 'EventCompetitorScoreInterfaceCY';
  date?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  program?: Maybe<EventCompetitorScoreProgramInterfaceCy>;
  rank?: Maybe<Scalars['Int']['output']>;
  score_index?: Maybe<Scalars['Int']['output']>;
  time_end?: Maybe<Scalars['TimeType']['output']>;
  time_start?: Maybe<Scalars['TimeType']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export type EventCompetitorScoreInterfaceFs = {
  __typename?: 'EventCompetitorScoreInterfaceFS';
  date?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  program?: Maybe<EventCompetitorScoreProgramInterfaceFs>;
  rank?: Maybe<Scalars['Int']['output']>;
  score_index?: Maybe<Scalars['Int']['output']>;
  time_end?: Maybe<Scalars['TimeType']['output']>;
  time_start?: Maybe<Scalars['TimeType']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export type EventCompetitorScoreInterfaceInputCy = {
  date?: InputMaybe<Scalars['DateType']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  program: EventCompetitorScoreProgramConteinerInterfaceInputCy;
  rank?: InputMaybe<Scalars['Int']['input']>;
  score_index?: InputMaybe<Scalars['Int']['input']>;
  time_end?: InputMaybe<Scalars['TimeType']['input']>;
  time_start?: InputMaybe<Scalars['TimeType']['input']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfaceInputFs = {
  date?: InputMaybe<Scalars['DateType']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  program: EventCompetitorScoreProgramConteinerInterfaceInputFs;
  rank?: InputMaybe<Scalars['Int']['input']>;
  score_index?: InputMaybe<Scalars['Int']['input']>;
  time_end?: InputMaybe<Scalars['TimeType']['input']>;
  time_start?: InputMaybe<Scalars['TimeType']['input']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfaceInputRg = {
  apparatus: EventCompetitorScoreApparatusConteinerInterfaceInputRg;
  date?: InputMaybe<Scalars['DateType']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  score_index: Scalars['Int']['input'];
  time_end?: InputMaybe<Scalars['TimeType']['input']>;
  time_start?: InputMaybe<Scalars['TimeType']['input']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfacePersonInput = {
  person: IdInput;
};

export type EventCompetitorScoreInterfaceRg = {
  __typename?: 'EventCompetitorScoreInterfaceRG';
  apparatus?: Maybe<EventCompetitorScoreApparatusInterfaceRg>;
  date?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  score_index?: Maybe<Scalars['Int']['output']>;
  time_end?: Maybe<Scalars['TimeType']['output']>;
  time_start?: Maybe<Scalars['TimeType']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export enum EventCompetitorScoreInterfaceTypeScoreEnum {
  Dnf = 'DNF',
  Dns = 'DNS',
  Dsq = 'DSQ',
  F = 'F'
}

export type EventCompetitorScoreProgramConteinerInterfaceInputCy = {
  category_char_id: Scalars['String']['input'];
  char_id: Scalars['String']['input'];
};

export type EventCompetitorScoreProgramConteinerInterfaceInputFs = {
  category_char_id: Scalars['String']['input'];
  char_id: Scalars['String']['input'];
};

export type EventCompetitorScoreProgramInterfaceCy = {
  __typename?: 'EventCompetitorScoreProgramInterfaceCY';
  char_id?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EventCompetitorScoreProgramInterfaceFs = {
  __typename?: 'EventCompetitorScoreProgramInterfaceFS';
  char_id?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** EventCompetitorScoreRG type definition */
export type EventCompetitorScoreRg = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreRG';
  apparatus: Scalars['String']['output'];
  category_id: Scalars['Int']['output'];
  competition_id: Scalars['Int']['output'];
  competitor_id: Scalars['String']['output'];
  dt_on_carpet?: Maybe<Scalars['DateTimeType']['output']>;
  dt_out_carpet?: Maybe<Scalars['DateTimeType']['output']>;
  final_a?: Maybe<Scalars['Float']['output']>;
  final_a1?: Maybe<Scalars['Float']['output']>;
  final_a2?: Maybe<Scalars['Float']['output']>;
  final_a3?: Maybe<Scalars['Float']['output']>;
  final_a4?: Maybe<Scalars['Float']['output']>;
  final_a1234?: Maybe<Scalars['Float']['output']>;
  final_d?: Maybe<Scalars['Float']['output']>;
  final_d1d2?: Maybe<Scalars['Float']['output']>;
  final_d2?: Maybe<Scalars['Float']['output']>;
  final_d3d4?: Maybe<Scalars['Float']['output']>;
  final_d4?: Maybe<Scalars['Float']['output']>;
  final_d1234?: Maybe<Scalars['Float']['output']>;
  final_ded?: Maybe<Scalars['Float']['output']>;
  final_e?: Maybe<Scalars['Float']['output']>;
  final_e1?: Maybe<Scalars['Float']['output']>;
  final_e1e2?: Maybe<Scalars['Float']['output']>;
  final_e2?: Maybe<Scalars['Float']['output']>;
  final_e3?: Maybe<Scalars['Float']['output']>;
  final_e4?: Maybe<Scalars['Float']['output']>;
  final_e5?: Maybe<Scalars['Float']['output']>;
  final_e6?: Maybe<Scalars['Float']['output']>;
  final_e1234?: Maybe<Scalars['Float']['output']>;
  final_e3456?: Maybe<Scalars['Float']['output']>;
  final_e123456?: Maybe<Scalars['Float']['output']>;
  final_l1?: Maybe<Scalars['Float']['output']>;
  final_l2?: Maybe<Scalars['Float']['output']>;
  final_o?: Maybe<Scalars['Float']['output']>;
  final_t?: Maybe<Scalars['Float']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  is_announced?: Maybe<Scalars['Boolean']['output']>;
  is_dnf?: Maybe<Scalars['Boolean']['output']>;
  is_dns?: Maybe<Scalars['Boolean']['output']>;
  is_dqb?: Maybe<Scalars['Boolean']['output']>;
  is_dsq?: Maybe<Scalars['Boolean']['output']>;
  is_signed?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  score_index: Scalars['Int']['output'];
  turn_num: Scalars['Int']['output'];
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']['output']>;
  video_chunk_start?: Maybe<Scalars['Int']['output']>;
  video_path?: Maybe<Scalars['String']['output']>;
};

/** EventCompetitorScoreVideo type definition */
export type EventCompetitorScoreVideo = {
  __typename?: 'EventCompetitorScoreVideo';
  dt_on_carpet: Scalars['DateTimeType']['output'];
  dt_out_carpet: Scalars['DateTimeType']['output'];
  duration_on_carpet?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  time_start: Scalars['DateTimeType']['output'];
  video_score_time_start?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorScoreVideoInput = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  time_start?: InputMaybe<Scalars['DateTimeType']['input']>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceCy = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceCY';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceFs = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceFS';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceRg = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceRG';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresEventIdInterfaceCy = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceCY';
  id?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorScoresEventIdInterfaceFs = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceFS';
  id?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorScoresEventIdInterfaceRg = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceRG';
  id?: Maybe<Scalars['Int']['output']>;
};

export type EventCompetitorScoresInterfaceCy = {
  __typename?: 'EventCompetitorScoresInterfaceCY';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceCy>>>;
  competitor_id?: Maybe<Scalars['String']['output']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceCy>;
  final_total?: Maybe<Scalars['Float']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  hide_video?: Maybe<Scalars['Boolean']['output']>;
  is_vk?: Maybe<Scalars['Boolean']['output']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']['output']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceCy>>>;
  team_name?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceFs = {
  __typename?: 'EventCompetitorScoresInterfaceFS';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceFs>>>;
  competitor_id?: Maybe<Scalars['String']['output']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceFs>;
  final_total?: Maybe<Scalars['Float']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  hide_video?: Maybe<Scalars['Boolean']['output']>;
  is_vk?: Maybe<Scalars['Boolean']['output']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']['output']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceFs>>>;
  team_name?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceInputCy = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputCy>>>;
  competitor_id?: InputMaybe<Scalars['String']['input']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  hide_video: Scalars['Boolean']['input'];
  is_vk: Scalars['Boolean']['input'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputCy>>>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  type_score?: InputMaybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceInputFs = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputFs>>>;
  competitor_id?: InputMaybe<Scalars['String']['input']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  hide_video: Scalars['Boolean']['input'];
  is_vk: Scalars['Boolean']['input'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputFs>>>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoresInterfaceInputRg = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputRg>>>;
  competitor_id?: InputMaybe<Scalars['String']['input']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  group_name?: InputMaybe<Scalars['String']['input']>;
  hide_video: Scalars['Boolean']['input'];
  is_vk: Scalars['Boolean']['input'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputRg>>>;
  team_name?: InputMaybe<Scalars['String']['input']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoresInterfaceRg = {
  __typename?: 'EventCompetitorScoresInterfaceRG';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceRg>>>;
  competitor_id?: Maybe<Scalars['String']['output']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceRg>;
  final_total?: Maybe<Scalars['Float']['output']>;
  group_name?: Maybe<Scalars['String']['output']>;
  hide_video?: Maybe<Scalars['Boolean']['output']>;
  is_vk?: Maybe<Scalars['Boolean']['output']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']['output']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceRg>>>;
  team_name?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export enum EventCompetitorTypeEnum {
  Duet = 'duet',
  Group = 'group',
  Personal = 'personal',
  Single = 'single',
  Team = 'team',
  Trio = 'trio'
}

export type EventConfidentialityInput = {
  app_from_schools: Scalars['Boolean']['input'];
  google_sheets_access?: InputMaybe<EventApplicationsToGoogleSheetsInput>;
  id: Scalars['Int']['input'];
  postwall_write_rights: EventPostwallWriteRightsEnum;
  shared_link: Scalars['Boolean']['input'];
  show_ath_list: EventShowAthListEnum;
  use_any_user_payment: Scalars['Boolean']['input'];
};

/** EventConnection type definition */
export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<Event>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Статусы/шаги создания соревнования */
export enum EventCreationStatesEnum {
  /** Имя последнего пройденного шага в создании соревнования */
  AcceptApplications = 'accept_applications',
  /** Имя последнего пройденного шага в создании соревнования */
  Booking = 'booking',
  /** Имя последнего пройденного шага в создании соревнования */
  Categories = 'categories',
  /** Имя последнего пройденного шага в создании соревнования */
  Confidentiallity = 'confidentiallity',
  /** Имя последнего пройденного шага в создании соревнования */
  Done = 'done',
  /** Имя последнего пройденного шага в создании соревнования */
  Info = 'info',
  /** Имя последнего пройденного шага в создании соревнования */
  New = 'new',
  /** Имя последнего пройденного шага в создании соревнования */
  Organizer = 'organizer',
  /** Имя последнего пройденного шага в создании соревнования */
  Translations = 'translations'
}

/** EventDiscipline type definition */
export type EventDiscipline = {
  __typename?: 'EventDiscipline';
  applicant_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  ranks?: Maybe<Array<Maybe<Rank>>>;
  short_title?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum EventDocumentsSentFlagsActionTypeEnum {
  Added = 'added',
  Changed = 'changed'
}

export type EventDocumentsSentFlagsInput = {
  action_type: EventDocumentsSentFlagsActionTypeEnum;
  event_id: Scalars['Int']['input'];
  file_id: Scalars['Int']['input'];
};

/** Мероприятие для загрузки в суд. системы */
export type EventForJudgingSystems = {
  __typename?: 'EventForJudgingSystems';
  applications?: Maybe<Array<Maybe<EventApplicationForJudgingSystems>>>;
  categories?: Maybe<Array<Maybe<EventCategoryForJudgingSystems>>>;
  competitionId: Scalars['ID']['output'];
  date1: Scalars['String']['output'];
  date2: Scalars['String']['output'];
  place: Scalars['String']['output'];
  schedule?: Maybe<Array<Maybe<EventSchedule>>>;
  shortTitle?: Maybe<Scalars['String']['output']>;
  team1?: Maybe<Scalars['String']['output']>;
  team2?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  webJudgingUid?: Maybe<Scalars['String']['output']>;
};

export type EventInput = {
  calendar_id?: InputMaybe<Scalars['Int']['input']>;
  classification: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  description_place?: InputMaybe<Scalars['String']['input']>;
  dt_begin: Scalars['DateType']['input'];
  dt_end: Scalars['DateType']['input'];
  event_type: EventTypeEnum;
  id?: InputMaybe<Scalars['Int']['input']>;
  parent_calendar_id?: InputMaybe<Scalars['Int']['input']>;
  place: EventPlaceMapData;
  preliminary: Scalars['Boolean']['input'];
  short_title?: InputMaybe<Scalars['String']['input']>;
  sport_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  who_are_competing?: InputMaybe<EventInputWhoAreCompeting>;
};

export type EventInputWhoAreCompeting = {
  scope1?: InputMaybe<EventWhoAreCompetingEnumType>;
  scope2?: InputMaybe<EventWhoAreCompetingEnumType>;
};

/** EventMapInfo type definition */
export type EventMapInfo = {
  __typename?: 'EventMapInfo';
  id: Scalars['Int']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  latitude_map?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  longitude_map?: Maybe<Scalars['Float']['output']>;
  map_type?: Maybe<Scalars['Int']['output']>;
  show_map?: Maybe<Scalars['Boolean']['output']>;
  zoom?: Maybe<Scalars['Int']['output']>;
};

/** EventOrganizationOrganizer type definition */
export type EventOrganizationOrganizer = NodeInterface & {
  __typename?: 'EventOrganizationOrganizer';
  calendar_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  school_id?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type EventOrganizerContactPersonInput = {
  contact_person: AuserIdInput;
  email: Scalars['String']['input'];
  is_email_published: Scalars['Boolean']['input'];
  is_phone_published: Scalars['Boolean']['input'];
  is_published: Scalars['Boolean']['input'];
  notify_of_new_apps: Scalars['Boolean']['input'];
  notify_of_questions: Scalars['Boolean']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type EventOrganizerInput = {
  contact_persons?: InputMaybe<Array<InputMaybe<EventOrganizerContactPersonInput>>>;
  id: Scalars['Int']['input'];
  judges?: InputMaybe<Array<InputMaybe<ChiefPersonInput>>>;
  main_judge?: InputMaybe<ChiefPersonInput>;
  main_secretary?: InputMaybe<ChiefPersonInput>;
  organization_organizers?: InputMaybe<Array<InputMaybe<EventOrganizerOrganizationInput>>>;
};

export type EventOrganizerOrganizationInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Заголовок кнопки оплаты */
export enum EventPaymentButtonTitleEnum {
  /** Внести целевой взнос */
  Contribute = 'contribute',
  /** Другое */
  Custom = 'custom',
  /** Пожертвовать */
  Donate = 'donate',
  /** Оплатить */
  Pay = 'pay'
}

export type EventPersonEventsFilter = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dt_end?: InputMaybe<Scalars['DateType']['input']>;
  dt_start?: InputMaybe<Scalars['DateType']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rank_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
};

/** EventPersonResultsByCategory type definition */
export type EventPersonResultsByCategory = {
  __typename?: 'EventPersonResultsByCategory';
  category: EventCategory;
  competitor: EventCompetitor;
};

/** EventPersonResultsByCategoryConnection type definition */
export type EventPersonResultsByCategoryConnection = {
  __typename?: 'EventPersonResultsByCategoryConnection';
  athlete_id?: Maybe<Scalars['Int']['output']>;
  edges?: Maybe<Array<Maybe<EventPersonResultsByCategory>>>;
  person_id?: Maybe<Scalars['Int']['output']>;
};

export type EventPlaceMapData = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  latitude_map?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  longitude_map?: InputMaybe<Scalars['Float']['input']>;
  map_type?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  show_map?: InputMaybe<Scalars['Boolean']['input']>;
  zoom?: InputMaybe<Scalars['Int']['input']>;
};

export enum EventPostwallWriteRightsEnum {
  Anyone = 'anyone',
  Disabled = 'disabled',
  OnlySchoolResponsible = 'only_school_responsible'
}

/** Типы кнопки подачи заявки */
export enum EventRegButtonTypeEnum {
  /** Подача заявки */
  Application = 'application',
  /** Покупка билета */
  Ticket = 'ticket'
}

/** Варианты подачи заявки на мероприятие */
export enum EventRegTypeEnum {
  /** Заявка подается по электронной почте */
  Email = 'email',
  /** Заявка подается через сайт Спорт вокруг. */
  Inner = 'inner',
  /** Заявка не принимаются */
  None = 'none',
  /** Заявка подается на другом сайте */
  Outer = 'outer'
}

/** EventResponsibleUser type definition */
export type EventResponsibleUser = NodeInterface & {
  __typename?: 'EventResponsibleUser';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_email_published?: Maybe<Scalars['Boolean']['output']>;
  is_owner?: Maybe<Scalars['Boolean']['output']>;
  is_phone_published?: Maybe<Scalars['Boolean']['output']>;
  is_published?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notify_of_new_apps?: Maybe<Scalars['Boolean']['output']>;
  notify_of_questions?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** EventResponsibleUserList type definition */
export type EventResponsibleUserList = {
  __typename?: 'EventResponsibleUserList';
  is_responsible?: Maybe<Scalars['Boolean']['output']>;
  list?: Maybe<Array<Maybe<EventResponsibleUser>>>;
  organizer?: Maybe<Scalars['Boolean']['output']>;
};

/** EventResultApparatusRG type definition */
export type EventResultApparatusRg = {
  __typename?: 'EventResultApparatusRG';
  apparatus?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** EventResultApparatusScoresDataRG type definition */
export type EventResultApparatusScoresDataRg = {
  __typename?: 'EventResultApparatusScoresDataRG';
  competition_title?: Maybe<Scalars['String']['output']>;
  dt_on_carpet?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
};

/** EventResultApparatusScoresRG type definition */
export type EventResultApparatusScoresRg = {
  __typename?: 'EventResultApparatusScoresRG';
  apparatus?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Array<Maybe<EventResultApparatusScoresDataRg>>>;
};

/** EventResultByCategory type definition */
export type EventResultByCategory = {
  __typename?: 'EventResultByCategory';
  applications?: Maybe<Array<Maybe<EventCompetitor>>>;
  category: EventCategory;
};

/** EventResultByCategoryConnection type definition */
export type EventResultByCategoryConnection = {
  __typename?: 'EventResultByCategoryConnection';
  edges?: Maybe<Array<Maybe<EventResultByCategory>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** EventResultProgramFS type definition */
export type EventResultProgramFs = {
  __typename?: 'EventResultProgramFS';
  color?: Maybe<Scalars['String']['output']>;
  program?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** EventResultProgramScoresDataFS type definition */
export type EventResultProgramScoresDataFs = {
  __typename?: 'EventResultProgramScoresDataFS';
  competition_title?: Maybe<Scalars['String']['output']>;
  dt_on_ice?: Maybe<Scalars['DateType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
};

/** EventResultProgramScoresFS type definition */
export type EventResultProgramScoresFs = {
  __typename?: 'EventResultProgramScoresFS';
  data?: Maybe<Array<Maybe<EventResultProgramScoresDataFs>>>;
  program?: Maybe<Scalars['String']['output']>;
};

/** Редакция правил по художественной гимнастике */
export enum EventRgJudgingRulesEditionEnum {
  /** правила 2017-2020 */
  Rules_2017_2020 = 'rules_2017_2020',
  /** правила 2022-2024 */
  Rules_2022_2024 = 'rules_2022_2024'
}

/** EventSchedule type definition */
export type EventSchedule = NodeInterface & {
  __typename?: 'EventSchedule';
  dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  id: Scalars['ID']['output'];
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type EventScheduleInputType = {
  id: Scalars['ID']['input'];
  schedule?: InputMaybe<Array<InputMaybe<EventScheduleItemInputType>>>;
};

export type EventScheduleItemInputType = {
  dt_end: Scalars['DateTimeType']['input'];
  dt_start: Scalars['DateTimeType']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export enum EventShowAthListEnum {
  HideAll = 'hide_all',
  JustCount = 'just_count',
  ShowAll = 'show_all'
}

export enum EventShowResultsEnum {
  DontShow = 'dont_show',
  FromProtocol = 'from_protocol',
  FromTablo = 'from_tablo'
}

export enum EventStatusEnum {
  Canceled = 'canceled',
  Deleted = 'deleted',
  New = 'new',
  Notpublished = 'notpublished',
  Published = 'published',
  Publishing = 'publishing'
}

/** EventToParentCalendarRequest type definition */
export type EventToParentCalendarRequest = {
  __typename?: 'EventToParentCalendarRequest';
  calendar_id?: Maybe<Scalars['ID']['output']>;
  competition_id?: Maybe<Scalars['ID']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  dt_modify?: Maybe<Scalars['DateTimeType']['output']>;
  initial_calendar_display_name?: Maybe<Scalars['String']['output']>;
  initial_calendar_id?: Maybe<Scalars['ID']['output']>;
  initial_calendar_owner_display_name?: Maybe<Scalars['String']['output']>;
  parent_calendar_id?: Maybe<Scalars['ID']['output']>;
  parent_calendar_legalentity?: Maybe<Legalentity>;
  parent_calendar_title?: Maybe<Scalars['String']['output']>;
  parent_organization_title?: Maybe<Scalars['String']['output']>;
  reject_reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type EventToParentCalendarRequestsFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  calendar_id?: InputMaybe<Scalars['ID']['input']>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dt_end?: InputMaybe<Scalars['DateType']['input']>;
  dt_start?: InputMaybe<Scalars['DateType']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  request_status?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** EventTranslationDeletingProhibits type definition */
export type EventTranslationDeletingProhibits = {
  __typename?: 'EventTranslationDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** EventTranslationItem type definition */
export type EventTranslationItem = {
  __typename?: 'EventTranslationItem';
  /** Цена + комиссия */
  amount?: Maybe<Scalars['Int']['output']>;
  /** Комиссия */
  commission?: Maybe<Scalars['Int']['output']>;
  /** Комиссия за всю заявку (платную или бесплатную) */
  commission_application?: Maybe<Scalars['Int']['output']>;
  deleting_prohibits?: Maybe<Array<Maybe<EventTranslationDeletingProhibits>>>;
  event_id?: Maybe<Scalars['String']['output']>;
  facecast_id?: Maybe<Scalars['String']['output']>;
  facecast_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  translation_date?: Maybe<Scalars['DateType']['output']>;
};

export type EventTranslationItemInput = {
  facecast_id?: InputMaybe<Scalars['String']['input']>;
  facecast_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  translation_date: Scalars['DateType']['input'];
};

export type EventTranslationsInput = {
  id: Scalars['Int']['input'];
  org_can_manage_translation?: InputMaybe<Scalars['Boolean']['input']>;
  translations?: InputMaybe<Array<InputMaybe<EventTranslationItemInput>>>;
  use_translations: Scalars['Boolean']['input'];
};

export enum EventTypeEnum {
  Competition = 'competition',
  Mc = 'mc',
  Meet = 'meet',
  Other = 'other',
  Seminar = 'seminar',
  Testing = 'testing'
}

/** EventVideo type definition */
export type EventVideo = {
  __typename?: 'EventVideo';
  duration?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  preview_link: Scalars['String']['output'];
  time_start: Scalars['DateTimeType']['output'];
};

/** EventVideoGroup type definition */
export type EventVideoGroup = {
  __typename?: 'EventVideoGroup';
  event_city?: Maybe<Scalars['String']['output']>;
  event_dt_begin?: Maybe<Scalars['DateType']['output']>;
  event_dt_end?: Maybe<Scalars['DateType']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  event_title?: Maybe<Scalars['String']['output']>;
  video_count?: Maybe<Scalars['Int']['output']>;
  videos?: Maybe<Array<Maybe<SportsmanEventVideo>>>;
};

/** EventVideoGroupsConnection type definition */
export type EventVideoGroupsConnection = {
  __typename?: 'EventVideoGroupsConnection';
  edges?: Maybe<Array<Maybe<EventVideoGroup>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** EventWhoAreCompeting type definition */
export type EventWhoAreCompeting = {
  __typename?: 'EventWhoAreCompeting';
  scope1?: Maybe<Scalars['String']['output']>;
  scope2?: Maybe<Scalars['String']['output']>;
};

export enum EventWhoAreCompetingEnumType {
  City = 'city',
  Country = 'country',
  District = 'district',
  Nothing = 'nothing',
  Region = 'region',
  School = 'school',
  Society = 'society'
}

export type EventsListFilter = {
  auser_id?: InputMaybe<Scalars['ID']['input']>;
  calendar_id?: InputMaybe<Scalars['ID']['input']>;
  city_id?: InputMaybe<Scalars['ID']['input']>;
  classification?: InputMaybe<Scalars['Boolean']['input']>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discipline_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dt_end?: InputMaybe<Scalars['DateType']['input']>;
  dt_start?: InputMaybe<Scalars['DateType']['input']>;
  event_applicant_type?: InputMaybe<ApplicantTypeEnum>;
  event_type?: InputMaybe<EventTypeEnum>;
  name?: InputMaybe<Scalars['String']['input']>;
  org_id?: InputMaybe<Scalars['ID']['input']>;
  rank_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
  sport_id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<EventStatusEnum>;
  white_list?: InputMaybe<Scalars['Boolean']['input']>;
};

/** FederationTeamSquad type definition */
export type FederationTeamSquad = {
  __typename?: 'FederationTeamSquad';
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<FederationTeamSquadMember>>>;
  organization_id: Scalars['ID']['output'];
  squad_title: Scalars['String']['output'];
  team_title: Scalars['String']['output'];
  year_active_from: Scalars['Int']['output'];
};

/** FederationTeamSquadInput type definition */
export type FederationTeamSquadInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  organization_id: Scalars['ID']['input'];
  squad_title: Scalars['String']['input'];
  team_title: Scalars['String']['input'];
  year_active_from: Scalars['Int']['input'];
};

/** FederationTeamSquadMember type definition */
export type FederationTeamSquadMember = {
  __typename?: 'FederationTeamSquadMember';
  athlete?: Maybe<Sportsman>;
  disciplines?: Maybe<Array<Maybe<Discipline>>>;
  id: Scalars['ID']['output'];
  rank?: Maybe<Rank>;
  status?: Maybe<Scalars['String']['output']>;
  year_active_from: Scalars['Int']['output'];
  year_active_to?: Maybe<Scalars['Int']['output']>;
};

/** FederationTeamSquadMemberInput type definition */
export type FederationTeamSquadMemberInput = {
  athlete_id: Scalars['ID']['input'];
  disciplines?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  team_squad_id: Scalars['ID']['input'];
  year_active_from: Scalars['Int']['input'];
  year_active_to?: InputMaybe<Scalars['Int']['input']>;
};

/** FederationTeamSquads type definition */
export type FederationTeamSquads = {
  __typename?: 'FederationTeamSquads';
  member_filtered_total: Scalars['Int']['output'];
  member_total: Scalars['Int']['output'];
  squads?: Maybe<Array<Maybe<FederationTeamSquad>>>;
};

export type FileInfoInput = {
  document: Scalars['String']['input'];
  entity: Scalars['String']['input'];
  entity_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type FileInput = {
  document?: InputMaybe<Scalars['String']['input']>;
  entity?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type FileNonNullInput = {
  document: Scalars['String']['input'];
  entity: Scalars['String']['input'];
  entity_id?: InputMaybe<Scalars['ID']['input']>;
  extra?: InputMaybe<Scalars['JSON']['input']>;
  file: Scalars['Upload']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

/** FileStorage type definition */
export type FileStorage = {
  __typename?: 'FileStorage';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

/** FileType type definition */
export type FileType = {
  __typename?: 'FileType';
  count_pages?: Maybe<Scalars['Int']['output']>;
  document: Scalars['String']['output'];
  entity: Scalars['String']['output'];
  entity_id: Scalars['Int']['output'];
  entity_uuid?: Maybe<Scalars['String']['output']>;
  file_type?: Maybe<Scalars['String']['output']>;
  fname: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_deleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  preview_uri?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export enum FormSchemeEnum {
  Athlete = 'athlete',
  Coach = 'coach',
  EventAcceptApplications = 'event_accept_applications',
  EventAccommodation = 'event_accommodation',
  EventConfidentiality = 'event_confidentiality',
  EventInfo = 'event_info',
  EventNew = 'event_new',
  EventOrganizer = 'event_organizer',
  EventTranslation = 'event_translation',
  Federation = 'federation',
  Organization = 'organization',
  OrganizationReportDocuments = 'organization_report_documents',
  Person = 'person'
}

/** FormSchemeField type definition */
export type FormSchemeField = {
  __typename?: 'FormSchemeField';
  add_button?: Maybe<FormSchemeaddButton>;
  disabled: Scalars['Boolean']['output'];
  form: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  notice?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<FormSchemeOption>>>;
  over_time_disabled: Scalars['Boolean']['output'];
  params?: Maybe<Scalars['JSON']['output']>;
  required: Scalars['Boolean']['output'];
  scheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  show_to_admin: Scalars['Boolean']['output'];
  show_to_moderator: Scalars['Boolean']['output'];
  show_to_responsible: Scalars['Boolean']['output'];
  tabs?: Maybe<Array<Maybe<FormSchemeTab>>>;
  type: Scalars['String']['output'];
};

/** FormSchemeOption type definition */
export type FormSchemeOption = {
  __typename?: 'FormSchemeOption';
  id?: Maybe<Scalars['ID']['output']>;
  show_to_admin: Scalars['Boolean']['output'];
  show_to_moderator: Scalars['Boolean']['output'];
  show_to_responsible: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** FormSchemeTab type definition */
export type FormSchemeTab = {
  __typename?: 'FormSchemeTab';
  key?: Maybe<Scalars['String']['output']>;
  scheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  title?: Maybe<Scalars['String']['output']>;
};

/** FormSchemeaddButton type definition */
export type FormSchemeaddButton = {
  __typename?: 'FormSchemeaddButton';
  title?: Maybe<Scalars['String']['output']>;
};

/** Определяет типы категорий для танцевальных коллективов в фигурном катании */
export enum FsCollectiveCategoryEnum {
  /** Взрослые (Adult) */
  Adult = 'adult',
  /** Юниоры (Junior) */
  Junior = 'junior',
  /** Смешанная 15- (MIX 15-) */
  Mix_15Minus = 'mix_15_minus',
  /** Смешанная 15+ (MIX 15+) */
  Mix_15Plus = 'mix_15_plus',
  /** Начинающие (Novice) */
  Novice = 'novice',
  /** Дети младшая группа (Pre-Novice A) */
  PreNoviceA = 'pre_novice_a',
  /** Дети старшая группа (Pre-Novice B) */
  PreNoviceB = 'pre_novice_b',
  /** Старшие (Senior) */
  Senior = 'senior'
}

/** Варианты прав доступа к функциям комиссии. */
export enum FsCommissionAccessLevelEnum {
  /** Права доступа отсутствуют. */
  None = 'none',
  /** Права на просмотр. */
  Read = 'read',
  /** Права на просмотр и изменение. */
  Write = 'write'
}

/** Варианты контекста, в котором работает комиссия. */
export enum FsCommissionContextEnum {
  /** Комиссия в мероприятии. */
  Event = 'event',
  /** Комиссия в организации. */
  Org = 'org'
}

/** FsInspectionCommissionMember type definition */
export type FsInspectionCommissionMember = {
  __typename?: 'FsInspectionCommissionMember';
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  table: Scalars['String']['output'];
};

/** FsInspectionCommissionSeason type definition */
export type FsInspectionCommissionSeason = {
  __typename?: 'FsInspectionCommissionSeason';
  dt_begin: Scalars['DateType']['output'];
  dt_end: Scalars['DateType']['output'];
  id: Scalars['ID']['output'];
  members?: Maybe<Array<Maybe<FsInspectionCommissionMember>>>;
  table: Scalars['String']['output'];
};

/** FsInspectionCommissionSeasonInput type definition */
export type FsInspectionCommissionSeasonInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  members?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  year_begin: Scalars['Int']['input'];
  year_end: Scalars['Int']['input'];
};

/** Geocoder type definition */
export type Geocoder = {
  __typename?: 'Geocoder';
  data?: Maybe<Scalars['JSON']['output']>;
  from_cache?: Maybe<Scalars['Boolean']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Токены для Google-API */
export type GoogleTokensType = {
  __typename?: 'GoogleTokensType';
  /** Токен доступа, пока не используется, но может пригодиться в будущем, пока АПИ пользуется только бек */
  access_token?: Maybe<Scalars['String']['output']>;
  /** Ссылка для авторизации, будет запронена только по запросу googleAuthLink */
  auth_link?: Maybe<Scalars['String']['output']>;
  /** Идентификатор пользователя в БД спортвокруг, будет заполнен, только если этот пользователь уже давал нам разрешения */
  id: Scalars['Int']['output'];
  /**
   * Список разрешений, которые не были получены,
   *             заполняется только при запросе токенов по коду,
   *             когда пользователь только что нажал дать согласие и мы можем узнать,
   *             дал ли он нам все необходимые разрешения. В противном случае будет null
   *             Если в этом поле NULL - это не всегда значит, что у нас есть все разрешения!
   */
  missing_scopes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type IdInput = {
  id: Scalars['ID']['input'];
};

export enum IsuCalcTitlesEnum {
  DisplayName = 'display_name',
  ProtocolName = 'protocol_name',
  ShortTitle = 'short_title',
  Title = 'title'
}

/** Judge type definition */
export type Judge = NodeInterface & {
  __typename?: 'Judge';
  categoryjudge?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['String']['output']>;
  is_verified?: Maybe<Scalars['String']['output']>;
  isno_patent_file?: Maybe<Scalars['String']['output']>;
  patent_file?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['Int']['output']>;
  sport?: Maybe<Scalars['String']['output']>;
  sporttype_id?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** Определяет, кто подает заявки в категорию */
export enum JudgeCategoryEnum {
  /** первая категория */
  Judge_1 = 'judge_1',
  /** вторая категория */
  Judge_2 = 'judge_2',
  /** третья категория */
  Judge_3 = 'judge_3',
  /** высшая категория */
  JudgeHigh = 'judge_high',
  /** международная категория */
  JudgeInt = 'judge_int',
  /** без категории */
  JudgeNocat = 'judge_nocat'
}

/** Describe the RG competitor exercise data for web-judge module */
export type JudgingSystemExerciseRg = {
  __typename?: 'JudgingSystemExerciseRG';
  apparatus?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['ID']['output']>;
  competitor_group_name?: Maybe<Scalars['String']['output']>;
  competitor_id?: Maybe<Scalars['ID']['output']>;
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_team_name?: Maybe<Scalars['String']['output']>;
  event_id: Scalars['ID']['output'];
  /** Now "on carpet" exercise data */
  exercise_oncarpet?: Maybe<JudgingSystemExerciseRgBase>;
  exercise_status: RgExerciseStatusEnum;
  /** Whether score accepted by judgin system or not */
  is_accepted?: Maybe<Scalars['Boolean']['output']>;
  /** Judge team number */
  judge_team?: Maybe<Scalars['Int']['output']>;
  /** Exercise score. Can be calculated if exists judge type */
  score?: Maybe<Scalars['Float']['output']>;
};

/** Describe the base structure of RG competitor exercise for judging system. */
export type JudgingSystemExerciseRgBase = {
  __typename?: 'JudgingSystemExerciseRGBase';
  apparatus: Scalars['String']['output'];
  category_id: Scalars['ID']['output'];
  competitor_group_name?: Maybe<Scalars['String']['output']>;
  competitor_id: Scalars['ID']['output'];
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_team_name?: Maybe<Scalars['String']['output']>;
  event_id: Scalars['ID']['output'];
  /** Exercise judge team number */
  judge_team: Scalars['Int']['output'];
};

/** Состояние выступления из судейской системы (ХГ) */
export type JudgingSystemExerciseStatusRgInput = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['ID']['input'];
  competitor_id: Scalars['String']['input'];
  event_id: Scalars['ID']['input'];
  exercise_status: RgExerciseStatusInputEnum;
  judge_team: Scalars['Int']['input'];
  status_values: Scalars['JSONObject']['input'];
};

/** Полная информация по выступлению в веб-судействе */
export type JudgingSystemScoreRg = {
  __typename?: 'JudgingSystemScoreRG';
  apparatus: Scalars['String']['output'];
  category_id: Scalars['ID']['output'];
  competitor_group_name?: Maybe<Scalars['String']['output']>;
  competitor_id: Scalars['ID']['output'];
  competitor_name?: Maybe<Scalars['String']['output']>;
  competitor_team_name?: Maybe<Scalars['String']['output']>;
  dt_on_carpet?: Maybe<Scalars['DateTimeType']['output']>;
  dt_out_carpet?: Maybe<Scalars['DateTimeType']['output']>;
  event_id: Scalars['ID']['output'];
  is_dnf?: Maybe<Scalars['Boolean']['output']>;
  is_dns?: Maybe<Scalars['Boolean']['output']>;
  is_dsq?: Maybe<Scalars['Boolean']['output']>;
  is_signed?: Maybe<Scalars['Boolean']['output']>;
  judge_a1?: Maybe<Scalars['Float']['output']>;
  judge_a2?: Maybe<Scalars['Float']['output']>;
  judge_a3?: Maybe<Scalars['Float']['output']>;
  judge_a4?: Maybe<Scalars['Float']['output']>;
  judge_d1?: Maybe<Scalars['Float']['output']>;
  judge_d2?: Maybe<Scalars['Float']['output']>;
  judge_d3?: Maybe<Scalars['Float']['output']>;
  judge_d4?: Maybe<Scalars['Float']['output']>;
  judge_e1?: Maybe<Scalars['Float']['output']>;
  judge_e2?: Maybe<Scalars['Float']['output']>;
  judge_e3?: Maybe<Scalars['Float']['output']>;
  judge_e4?: Maybe<Scalars['Float']['output']>;
  judge_e5?: Maybe<Scalars['Float']['output']>;
  judge_e6?: Maybe<Scalars['Float']['output']>;
  judge_l1?: Maybe<Scalars['Float']['output']>;
  judge_l2?: Maybe<Scalars['Float']['output']>;
  judge_t?: Maybe<Scalars['Float']['output']>;
  judge_team?: Maybe<Scalars['Int']['output']>;
  sj_da?: Maybe<Scalars['Float']['output']>;
  sj_db?: Maybe<Scalars['Float']['output']>;
  sj_ea?: Maybe<Scalars['Float']['output']>;
  sj_et?: Maybe<Scalars['Float']['output']>;
  turn_num?: Maybe<Scalars['Int']['output']>;
};

/** Оценки за выступление из судейской системы (ХГ) */
export type JudgingSystemScoreRgInput = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['ID']['input'];
  competitor_group_name?: InputMaybe<Scalars['String']['input']>;
  competitor_id: Scalars['ID']['input'];
  competitor_name?: InputMaybe<Scalars['String']['input']>;
  competitor_team_name?: InputMaybe<Scalars['String']['input']>;
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']['input']>;
  event_id: Scalars['ID']['input'];
  is_dnf?: InputMaybe<Scalars['Boolean']['input']>;
  is_dns?: InputMaybe<Scalars['Boolean']['input']>;
  is_dsq?: InputMaybe<Scalars['Boolean']['input']>;
  is_signed?: InputMaybe<Scalars['Boolean']['input']>;
  judge_a1?: InputMaybe<Scalars['Float']['input']>;
  judge_a2?: InputMaybe<Scalars['Float']['input']>;
  judge_a3?: InputMaybe<Scalars['Float']['input']>;
  judge_a4?: InputMaybe<Scalars['Float']['input']>;
  judge_d1?: InputMaybe<Scalars['Float']['input']>;
  judge_d2?: InputMaybe<Scalars['Float']['input']>;
  judge_d3?: InputMaybe<Scalars['Float']['input']>;
  judge_d4?: InputMaybe<Scalars['Float']['input']>;
  judge_e1?: InputMaybe<Scalars['Float']['input']>;
  judge_e2?: InputMaybe<Scalars['Float']['input']>;
  judge_e3?: InputMaybe<Scalars['Float']['input']>;
  judge_e4?: InputMaybe<Scalars['Float']['input']>;
  judge_e5?: InputMaybe<Scalars['Float']['input']>;
  judge_e6?: InputMaybe<Scalars['Float']['input']>;
  judge_l1?: InputMaybe<Scalars['Float']['input']>;
  judge_l2?: InputMaybe<Scalars['Float']['input']>;
  judge_t?: InputMaybe<Scalars['Float']['input']>;
  judge_team: Scalars['Int']['input'];
  sj_da?: InputMaybe<Scalars['Float']['input']>;
  sj_db?: InputMaybe<Scalars['Float']['input']>;
  sj_ea?: InputMaybe<Scalars['Float']['input']>;
  sj_et?: InputMaybe<Scalars['Float']['input']>;
  turn_num?: InputMaybe<Scalars['Int']['input']>;
};

/** Определяет, кто подает заявки в категорию */
export enum LangEnum {
  /** английский */
  En = 'en',
  /** итальянский */
  It = 'it',
  /** русский */
  Ru = 'ru'
}

/** Legalentity type definition */
export type Legalentity = NodeInterface & {
  __typename?: 'Legalentity';
  calendar_id: Scalars['Int']['output'];
  chief_name: Scalars['String']['output'];
  chief_position: Scalars['String']['output'];
  dt_create: Scalars['DateType']['output'];
  id: Scalars['ID']['output'];
  inn: Scalars['String']['output'];
  is_accept_offer: Scalars['Int']['output'];
  is_actual: Scalars['Int']['output'];
  is_same_legal_post_address: Scalars['Int']['output'];
  kpp: Scalars['String']['output'];
  legal_address: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  post_address: Scalars['String']['output'];
  principal: Scalars['String']['output'];
  short_name: Scalars['String']['output'];
  table: Scalars['String']['output'];
  withdrawal_message: Scalars['String']['output'];
};

/** LegalentityConnection type definition */
export type LegalentityConnection = {
  __typename?: 'LegalentityConnection';
  edges?: Maybe<Array<Maybe<Legalentity>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Информация по очереди писем для пользователей */
export type MailingQueue = NodeInterface & {
  __typename?: 'MailingQueue';
  actual_name?: Maybe<Scalars['String']['output']>;
  count_tries?: Maybe<Scalars['Int']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  dt_sending?: Maybe<Scalars['DateTimeType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fi_actual_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  generator_id?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  sent?: Maybe<Scalars['Boolean']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** MailingQueueConnection type definition */
export type MailingQueueConnection = {
  __typename?: 'MailingQueueConnection';
  edges?: Maybe<Array<Maybe<MailingQueue>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type MailingQueueListFilter = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['DateType']['input']>>>;
  generator_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search_string?: InputMaybe<Scalars['String']['input']>;
};

/** Media type definition */
export type Media = {
  __typename?: 'Media';
  albums?: Maybe<Array<Maybe<MediaAlbums>>>;
  events?: Maybe<Array<Maybe<MediaEvent>>>;
  posts?: Maybe<Array<Maybe<MediaPost>>>;
};

/** MediaAction type definition */
export type MediaAction = {
  __typename?: 'MediaAction';
  action_type?: Maybe<Scalars['String']['output']>;
  author_id?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  media_entity_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export enum MediaActionTypeEnum {
  Comment = 'COMMENT',
  Like = 'LIKE',
  Photo = 'PHOTO',
  Tag = 'TAG',
  Video = 'VIDEO'
}

/** MediaAlbums type definition */
export type MediaAlbums = {
  __typename?: 'MediaAlbums';
  author_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  owner_type?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Array<Maybe<MediaAction>>>;
  tags?: Maybe<Scalars['String']['output']>;
  videos?: Maybe<Array<Maybe<MediaAction>>>;
};

/** MediaEvent type definition */
export type MediaEvent = {
  __typename?: 'MediaEvent';
  author_id?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Array<Maybe<MediaAction>>>;
  id?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Maybe<MediaAction>>>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  owner_type?: Maybe<Scalars['String']['output']>;
};

export enum MediaOwnerTypeEnum {
  Employee = 'EMPLOYEE',
  Organization = 'ORGANIZATION',
  Other = 'OTHER',
  Person = 'PERSON'
}

/** MediaPost type definition */
export type MediaPost = {
  __typename?: 'MediaPost';
  author?: Maybe<Person>;
  author_id?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Array<Maybe<MediaAction>>>;
  content?: Maybe<Scalars['String']['output']>;
  dt_create?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Maybe<MediaAction>>>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  owner_type?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<MediaAction>>>;
  uri?: Maybe<Array<Maybe<MediaUri>>>;
};

/** MediaUri type definition */
export type MediaUri = {
  __typename?: 'MediaUri';
  type?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

/** MobileAppSubscription type definition */
export type MobileAppSubscription = {
  __typename?: 'MobileAppSubscription';
  filters?: Maybe<Array<Maybe<NewsFeedFilter>>>;
  status: MobileAppSubscriptionStatus;
};

/** MobileAppSubscriptionStatus type definition */
export type MobileAppSubscriptionStatus = {
  __typename?: 'MobileAppSubscriptionStatus';
  dt_expire?: Maybe<Scalars['DateTimeType']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  sid: Scalars['String']['output'];
};

/** присылается когда в исукалке активируется категория - когда начинается выступление */
export type MobileTabloV1ActiveCategoryInput = {
  active: Scalars['Boolean']['input'];
  category_id: Scalars['Int']['input'];
  category_title: Scalars['String']['input'];
  category_uid: Scalars['String']['input'];
  competition_id: Scalars['Int']['input'];
  competition_title: Scalars['String']['input'];
  dt_activate: Scalars['DateTimeType']['input'];
  ext_id?: InputMaybe<Scalars['Int']['input']>;
  participants?: InputMaybe<Array<InputMaybe<MobileTabloV1ParticipantInput>>>;
};

/** Defines the gender for MobileTabloV1 */
export enum MobileTabloV1GenderEnum {
  /** female */
  Female = 'female',
  /** male */
  Male = 'male'
}

/** MobileTabloV1Info type definition */
export type MobileTabloV1Info = {
  __typename?: 'MobileTabloV1Info';
  category_title?: Maybe<Scalars['String']['output']>;
  category_uid: Scalars['String']['output'];
  competition_id: Scalars['Int']['output'];
  competition_title?: Maybe<Scalars['String']['output']>;
  current_participant?: Maybe<MobileTabloV1Participant>;
  participants?: Maybe<Array<Maybe<MobileTabloV1Participant>>>;
  previous_participant?: Maybe<MobileTabloV1Participant>;
};

/** MobileTabloV1Participant type definition */
export type MobileTabloV1Participant = {
  __typename?: 'MobileTabloV1Participant';
  dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  final_total?: Maybe<Scalars['Float']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  is_current?: Maybe<Scalars['Boolean']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  segment_short_title?: Maybe<Scalars['String']['output']>;
  sports_school?: Maybe<Scalars['String']['output']>;
  start_number?: Maybe<Scalars['Int']['output']>;
  team_name?: Maybe<Scalars['String']['output']>;
  type_score?: Maybe<MobileTabloV1TypeScoreEnum>;
  uid: Scalars['String']['output'];
};

/** MobileTabloV1ParticipantInput type definition */
export type MobileTabloV1ParticipantInput = {
  birthday?: InputMaybe<Scalars['DateType']['input']>;
  ext_id?: InputMaybe<Scalars['ID']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<MobileTabloV1GenderEnum>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  sports_school?: InputMaybe<Scalars['String']['input']>;
  start_number?: InputMaybe<Scalars['Int']['input']>;
  uid: Scalars['String']['input'];
};

/** присылается в начале и в конце каждогов ыстпуления, а так же для суммы баллов */
export type MobileTabloV1ScoreInput = {
  category_id: Scalars['Int']['input'];
  category_uid: Scalars['String']['input'];
  competition_id: Scalars['Int']['input'];
  dt_end?: InputMaybe<Scalars['DateTimeType']['input']>;
  dt_start?: InputMaybe<Scalars['DateTimeType']['input']>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  final_total?: InputMaybe<Scalars['Float']['input']>;
  is_summary: Scalars['Boolean']['input'];
  participant_id: Scalars['Int']['input'];
  participant_uid: Scalars['String']['input'];
  rank?: InputMaybe<Scalars['Int']['input']>;
  segment_short_title?: InputMaybe<Scalars['String']['input']>;
  segment_title?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  type_score?: InputMaybe<MobileTabloV1TypeScoreEnum>;
};

/** Defines the type of score for MobileTabloV1 */
export enum MobileTabloV1TypeScoreEnum {
  /** Did Not Finish */
  Dnf = 'DNF',
  /** Did Not Start */
  Dns = 'DNS',
  /** Disqualified */
  Dsq = 'DSQ',
  /** Early Withdrawal */
  Ewd = 'EWD',
  /** Final Score */
  F = 'F',
  /** Final Not Reached */
  Fnr = 'FNR',
  /** Not Qualified Due to Disqualification */
  Nqd = 'NQD',
  /** Withdrawn Prior */
  Nwd = 'NWD',
  /** Withdrawn Prior */
  Wd = 'WD'
}

/** Mutation interface */
export type Mutation = {
  __typename?: 'Mutation';
  addVideoDataToExercises?: Maybe<Scalars['Boolean']['output']>;
  adjustEventCompetitiorPhotoDates?: Maybe<Scalars['Boolean']['output']>;
  advItemClick?: Maybe<Scalars['Boolean']['output']>;
  advItemView?: Maybe<Scalars['Boolean']['output']>;
  applicationDocuments: Scalars['String']['output'];
  auth?: Maybe<Scalars['String']['output']>;
  authAs?: Maybe<Scalars['Boolean']['output']>;
  autoUnitePersonDoubles: Scalars['Boolean']['output'];
  buildAthleteRating?: Maybe<Scalars['Boolean']['output']>;
  buildVideoIndex?: Maybe<Scalars['String']['output']>;
  cancelEvent?: Maybe<Scalars['Boolean']['output']>;
  cancelEventToParentCalendarRequest?: Maybe<Scalars['Boolean']['output']>;
  cancelRevising?: Maybe<Scalars['Boolean']['output']>;
  changePassword?: Maybe<Scalars['String']['output']>;
  cleanCompetitorPhotoArchives?: Maybe<Scalars['String']['output']>;
  clearDataMobileTabloV1?: Maybe<Scalars['Boolean']['output']>;
  confirmAthleteInspectionDate?: Maybe<AthleteInspectionDate>;
  confirmAthleteRankTests?: Maybe<Array<Maybe<AthleteRankTest>>>;
  confirmEmail?: Maybe<Scalars['String']['output']>;
  copyAthletesFromApplicationsToResults?: Maybe<Scalars['Int']['output']>;
  createEventCompetitorPhotoPayment?: Maybe<EventCompetitorPhotoPaymentUrl>;
  createEventToParentCalendarRequest?: Maybe<Scalars['Boolean']['output']>;
  createRegistrationFee?: Maybe<SportSeason>;
  createRegistrationFeePayment?: Maybe<RegistrationFeePaymentUrl>;
  createSeason?: Maybe<SportSeason>;
  createSeasonWithRegistrationFee?: Maybe<SportSeason>;
  deleteCalendar?: Maybe<Calendar>;
  deleteCalendarMedia?: Maybe<Calendar>;
  deleteEvent?: Maybe<Event>;
  deleteEventApplication?: Maybe<Scalars['Boolean']['output']>;
  deleteEventCompetitorScoresFromInterfaceCY?: Maybe<Scalars['Boolean']['output']>;
  deleteEventCompetitorScoresFromInterfaceFS?: Maybe<Scalars['Boolean']['output']>;
  deleteEventCompetitorScoresFromInterfaceRG?: Maybe<Scalars['Boolean']['output']>;
  deleteEventMedia?: Maybe<Event>;
  deleteFederationTeamSquad?: Maybe<Scalars['Boolean']['output']>;
  deleteFederationTeamSquadMember?: Maybe<Scalars['Boolean']['output']>;
  deleteFile?: Maybe<FileType>;
  deleteOrganization?: Maybe<Organization>;
  deleteOrganizationMedia?: Maybe<Organization>;
  deleteOrganizationReportMedia?: Maybe<OrganizationReportMedia>;
  deletePersonAvatar?: Maybe<Person>;
  deleteSeason?: Maybe<Scalars['Int']['output']>;
  deleteTelegramUser?: Maybe<Scalars['Boolean']['output']>;
  deleteUserAvatar?: Maybe<Scalars['Boolean']['output']>;
  disconnectPersonDoubles?: Maybe<PersonDoubleCouple>;
  downloadRefereeingSystem?: Maybe<Scalars['Int']['output']>;
  downloadXlsxApplicationsListByCategory?: Maybe<Scalars['String']['output']>;
  downloadXlsxTest?: Maybe<Scalars['String']['output']>;
  export_applcations_to_google_sheets?: Maybe<Scalars['Boolean']['output']>;
  fillEventAthleteData?: Maybe<Scalars['Boolean']['output']>;
  generateWebJudgeUid?: Maybe<WebJudgeUidAndUrl>;
  googleSaveTokensByAuthCode?: Maybe<GoogleTokensType>;
  interactWithTelegramBot?: Maybe<TelegramChatConnection>;
  isuCalcXml: Scalars['String']['output'];
  judgingSystemResultsSaveEventCategories?: Maybe<Array<Maybe<EventCategory>>>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  makeApplicationPayment?: Maybe<Scalars['Boolean']['output']>;
  makeApplicationsDocument: Scalars['String']['output'];
  makeSportRankRecommendation: Scalars['String']['output'];
  mobActivateSubscription?: Maybe<Scalars['Boolean']['output']>;
  mobAuth?: Maybe<Scalars['String']['output']>;
  mobCancelSubscription?: Maybe<Scalars['Boolean']['output']>;
  mobGetFreeSubscription?: Maybe<Scalars['Boolean']['output']>;
  mobNewsSubscribe?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobNewsSubscribeFilter?: Maybe<Scalars['Boolean']['output']>;
  mobNewsUnsubscribe?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobOAuth?: Maybe<NewsFeedItemObject>;
  oauth?: Maybe<NewsFeedItemObject>;
  pinPostwallPost?: Maybe<Scalars['Boolean']['output']>;
  postPayments: Scalars['String']['output'];
  register?: Maybe<Scalars['Boolean']['output']>;
  removeAlertPublicationEventFlag?: Maybe<OrganizationAlerts>;
  removeVideostand?: Maybe<Scalars['ID']['output']>;
  removeVideostandEvent?: Maybe<Scalars['ID']['output']>;
  requestEmailChange?: Maybe<Scalars['String']['output']>;
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  requestPhoneChange?: Maybe<Scalars['Boolean']['output']>;
  requestTelegramUserConfirmationCode?: Maybe<Scalars['Boolean']['output']>;
  resendTelegramUserConfirmationCode?: Maybe<Scalars['Boolean']['output']>;
  resetAthleteInspectionDateConfirmation?: Maybe<AthleteInspectionDate>;
  resetAthleteRankTestsConfirmation?: Maybe<Array<Maybe<AthleteRankTest>>>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  restoreCanceledEvent?: Maybe<Scalars['Boolean']['output']>;
  rewritePersonDoubles?: Maybe<Scalars['Boolean']['output']>;
  saveAccomodation?: Maybe<Scalars['Boolean']['output']>;
  saveAdvItem?: Maybe<Adv>;
  saveApplicationPayment?: Maybe<PaymentDetails>;
  saveCalendar?: Maybe<Calendar>;
  saveClientAppLog?: Maybe<Scalars['Boolean']['output']>;
  saveEventAccomodation?: Maybe<EventAccomodationScheme>;
  saveEventApplication?: Maybe<Array<Maybe<Application>>>;
  saveEventApplicationSettings?: Maybe<Event>;
  saveEventCategories?: Maybe<Event>;
  saveEventCompetitor?: Maybe<Scalars['Int']['output']>;
  saveEventCompetitor2?: Maybe<EventCompetitor2>;
  saveEventCompetitorJsonFile?: Maybe<Scalars['Int']['output']>;
  saveEventCompetitorPhoto?: Maybe<Scalars['Boolean']['output']>;
  saveEventCompetitorScoreDates?: Maybe<Scalars['Boolean']['output']>;
  saveEventCompetitorScores?: Maybe<Scalars['Int']['output']>;
  saveEventCompetitorScoresFromInterfaceCY?: Maybe<EventCompetitorScoresInterfaceCy>;
  saveEventCompetitorScoresFromInterfaceFS?: Maybe<EventCompetitorScoresInterfaceFs>;
  saveEventCompetitorScoresFromInterfaceRG?: Maybe<EventCompetitorScoresInterfaceRg>;
  saveEventCompetitorScoresV2?: Maybe<Scalars['Int']['output']>;
  saveEventCompetitorVideo?: Maybe<Scalars['Boolean']['output']>;
  saveEventConfidentiality?: Maybe<Event>;
  saveEventDocumentsSentFlags?: Maybe<Scalars['Boolean']['output']>;
  saveEventInfo?: Maybe<Event>;
  saveEventOrganizer?: Maybe<Event>;
  saveEventRgJudgingRulesEdition?: Maybe<Scalars['Boolean']['output']>;
  saveEventSchedule?: Maybe<Event>;
  saveEventShowResults?: Maybe<Event>;
  saveEventTranslations?: Maybe<Event>;
  saveFsInspectionCommissionSeasons?: Maybe<Scalars['ID']['output']>;
  saveMobileTabloV1ActiveCategory?: Maybe<Scalars['Boolean']['output']>;
  saveMobileTabloV1Score?: Maybe<Scalars['Boolean']['output']>;
  saveOrganization?: Maybe<Organization>;
  saveOrganizationFederationRG?: Maybe<Organization>;
  saveOrganizationPublicationEvent?: Maybe<OrganizationPublicationEvent>;
  savePerson?: Maybe<Person>;
  savePostwall?: Maybe<Postwall>;
  saveRGEventCategoryPlaces?: Maybe<Scalars['Boolean']['output']>;
  saveRGEventCategoryPlacesV2?: Maybe<Scalars['Boolean']['output']>;
  saveRGEventCompetitorScores?: Maybe<Scalars['Boolean']['output']>;
  saveRGEventCompetitorScoresV2?: Maybe<Scalars['Boolean']['output']>;
  saveRefereeingSystemVersion?: Maybe<RefereeingSystemVersion>;
  saveSiteSettings?: Maybe<Array<Maybe<SiteSettings>>>;
  saveSubscriptionPayment?: Maybe<PaymentDetails>;
  saveVideostand?: Maybe<Scalars['ID']['output']>;
  saveVideostandEvent?: Maybe<Scalars['ID']['output']>;
  saveVideostandStreamParams?: Maybe<Scalars['Boolean']['output']>;
  sendEventToRevise?: Maybe<Scalars['Boolean']['output']>;
  setAthleteInspectionDate?: Maybe<AthleteInspectionDate>;
  setEventApplicationStatus?: Maybe<Scalars['Boolean']['output']>;
  setEventToParentCalendarRequestStatus?: Maybe<Scalars['Boolean']['output']>;
  setFederationTeamSquad?: Maybe<Scalars['Boolean']['output']>;
  setFederationTeamSquadMember?: Maybe<Scalars['Boolean']['output']>;
  setFederationTeamSquadMemberStatus?: Maybe<Scalars['Boolean']['output']>;
  subscribeTelegramUserToSport?: Maybe<Scalars['Boolean']['output']>;
  transferCalendarAvatarsFromOldSiteToNewSite?: Maybe<Array<Maybe<FileType>>>;
  unitePersonDoubles: PersonDoublesConnection;
  unpinPostwallPost?: Maybe<Scalars['Boolean']['output']>;
  unsubscribeTelegramUserFromSport?: Maybe<Scalars['Boolean']['output']>;
  updateEventCompetitorPhotoPaymentRegistry?: Maybe<Scalars['String']['output']>;
  updateJudgingSystemExerciseStateRG?: Maybe<JudgingSystemScoreRg>;
  updateJudgingSystemScoreRG?: Maybe<JudgingSystemScoreRg>;
  updatePayment?: Maybe<Scalars['Boolean']['output']>;
  updatePaymentDate: Scalars['String']['output'];
  updateProfile?: Maybe<Scalars['Boolean']['output']>;
  updateRegistrationFee?: Maybe<SportSeason>;
  updateRegistrationFeePaymentRegistry?: Maybe<Scalars['String']['output']>;
  updateSeason?: Maybe<SportSeason>;
  updateSeasonWithRegistrationFee?: Maybe<SportSeason>;
  updateWebJudgeScoreRG?: Maybe<WebJudgeScoreRg>;
  upgradeAuthSession?: Maybe<Scalars['String']['output']>;
  upload?: Maybe<FileType>;
  uploadCalendarMedia?: Maybe<Calendar>;
  uploadEventMedia?: Maybe<Event>;
  uploadOrganizationMedia?: Maybe<Organization>;
  uploadOrganizationReportMedia?: Maybe<OrganizationReportMedia>;
  uploadPersonAvatar?: Maybe<Person>;
  uploadResultsFromIsucalc?: Maybe<Scalars['Boolean']['output']>;
  uploadUserAvatar?: Maybe<Scalars['Boolean']['output']>;
  uploadXlsxToQueue?: Maybe<XlsxQueue>;
  verifyCredentialsChange?: Maybe<Scalars['String']['output']>;
};


/** Mutation interface */
export type MutationAdjustEventCompetitiorPhotoDatesArgs = {
  competition_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationAdvItemClickArgs = {
  id: Scalars['ID']['input'];
  location: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationAdvItemViewArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


/** Mutation interface */
export type MutationApplicationDocumentsArgs = {
  app_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationAuthArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationAuthAsArgs = {
  auth_as_user: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationAutoUnitePersonDoublesArgs = {
  sport_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationCancelEventArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationCancelEventToParentCalendarRequestArgs = {
  competition_id: Scalars['ID']['input'];
  parent_calendar_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationCancelRevisingArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationChangePasswordArgs = {
  new_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationClearDataMobileTabloV1Args = {
  competition_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Mutation interface */
export type MutationConfirmAthleteInspectionDateArgs = {
  athlete_id: Scalars['ID']['input'];
  context: FsCommissionContextEnum;
  field_name: AthleteInspectionDateEnum;
  field_value: Scalars['DateType']['input'];
  object_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationConfirmAthleteRankTestsArgs = {
  athlete_id: Scalars['ID']['input'];
  context: FsCommissionContextEnum;
  object_id: Scalars['ID']['input'];
  tests?: InputMaybe<Array<InputMaybe<AthleteRankTestEnum>>>;
};


/** Mutation interface */
export type MutationConfirmEmailArgs = {
  email: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationCopyAthletesFromApplicationsToResultsArgs = {
  event_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationCreateEventCompetitorPhotoPaymentArgs = {
  data: EventCompetitorPhotoOrderInput;
};


/** Mutation interface */
export type MutationCreateEventToParentCalendarRequestArgs = {
  calendar_id: Scalars['ID']['input'];
  competition_id: Scalars['ID']['input'];
  parent_calendar_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationCreateRegistrationFeeArgs = {
  data: RegistrationFeeInput;
};


/** Mutation interface */
export type MutationCreateRegistrationFeePaymentArgs = {
  data: RegistrationFeeOrderInput;
};


/** Mutation interface */
export type MutationCreateSeasonArgs = {
  data: SportSeasonInput;
};


/** Mutation interface */
export type MutationCreateSeasonWithRegistrationFeeArgs = {
  data: SportSeasonWithRegistrationFeeInput;
};


/** Mutation interface */
export type MutationDeleteCalendarArgs = {
  action: ActionDeletion;
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteCalendarMediaArgs = {
  calendarId: Scalars['Int']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationDeleteEventArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteEventApplicationArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceCyArgs = {
  data: EventCompetitorDeleteInputCy;
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceFsArgs = {
  data: EventCompetitorDeleteInputFs;
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceRgArgs = {
  data: EventCompetitorDeleteInputRg;
};


/** Mutation interface */
export type MutationDeleteEventMediaArgs = {
  document?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteFederationTeamSquadArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationDeleteFederationTeamSquadMemberArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationDeleteFileArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteOrganizationMediaArgs = {
  document?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteOrganizationReportMediaArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeletePersonAvatarArgs = {
  personId: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteSeasonArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDeleteTelegramUserArgs = {
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationDeleteUserAvatarArgs = {
  auser_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Mutation interface */
export type MutationDisconnectPersonDoublesArgs = {
  doubles: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationDownloadRefereeingSystemArgs = {
  federation_filter: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationDownloadXlsxApplicationsListByCategoryArgs = {
  event_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationExport_Applcations_To_Google_SheetsArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  force_done?: InputMaybe<Scalars['Boolean']['input']>;
  force_failed?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Mutation interface */
export type MutationGenerateWebJudgeUidArgs = {
  event_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationGoogleSaveTokensByAuthCodeArgs = {
  code: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};


/** Mutation interface */
export type MutationInteractWithTelegramBotArgs = {
  message?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<TelegramUserInput>;
};


/** Mutation interface */
export type MutationIsuCalcXmlArgs = {
  debug_mode?: InputMaybe<Scalars['Boolean']['input']>;
  event_id: Scalars['ID']['input'];
  titles: IsuCalcTitlesEnum;
  use_patronymic?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Mutation interface */
export type MutationJudgingSystemResultsSaveEventCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCategoryInput>>>;
};


/** Mutation interface */
export type MutationLogoutArgs = {
  token: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationMakeApplicationPaymentArgs = {
  application_payments?: InputMaybe<Array<InputMaybe<ApplicationPaymentInput>>>;
  ccdata: CreditCardDataInput;
  event_id: Scalars['ID']['input'];
  phone_email: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationMakeApplicationsDocumentArgs = {
  director?: InputMaybe<Scalars['String']['input']>;
  doc_type?: InputMaybe<Scalars['String']['input']>;
  doctor?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['ID']['input'];
  first_name_leader?: InputMaybe<Scalars['String']['input']>;
  last_name_leader?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['ID']['input']>;
  patronymic_leader?: InputMaybe<Scalars['String']['input']>;
  phone_leader?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationMakeSportRankRecommendationArgs = {
  person_id: Scalars['ID']['input'];
  sport_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationMobAuthArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationMobNewsSubscribeArgs = {
  object_id: Scalars['ID']['input'];
  object_type: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationMobNewsSubscribeFilterArgs = {
  data?: InputMaybe<NewsFeedFiltersInput>;
};


/** Mutation interface */
export type MutationMobNewsUnsubscribeArgs = {
  object_id: Scalars['ID']['input'];
  object_type: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationMobOAuthArgs = {
  access_code: Scalars['String']['input'];
  service_name?: InputMaybe<OAuthServiceNameEnum>;
};


/** Mutation interface */
export type MutationOauthArgs = {
  access_code: Scalars['String']['input'];
  redirect_uri: Scalars['String']['input'];
  service_name?: InputMaybe<OAuthServiceNameEnum>;
};


/** Mutation interface */
export type MutationPinPostwallPostArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationPostPaymentsArgs = {
  appids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


/** Mutation interface */
export type MutationRegisterArgs = {
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationRemoveAlertPublicationEventFlagArgs = {
  alert_to_moderator?: InputMaybe<Scalars['Boolean']['input']>;
  alert_to_organizer?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationRemoveVideostandArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationRemoveVideostandEventArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationRequestEmailChangeArgs = {
  auser_id?: InputMaybe<Scalars['ID']['input']>;
  new_email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationRequestPasswordResetArgs = {
  login: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationRequestPhoneChangeArgs = {
  new_phone: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationRequestTelegramUserConfirmationCodeArgs = {
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationResendTelegramUserConfirmationCodeArgs = {
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationResetAthleteInspectionDateConfirmationArgs = {
  athlete_id: Scalars['ID']['input'];
  context: FsCommissionContextEnum;
  field_name?: InputMaybe<AthleteInspectionDateEnum>;
  object_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationResetAthleteRankTestsConfirmationArgs = {
  athlete_id: Scalars['ID']['input'];
  context: FsCommissionContextEnum;
  object_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationResetPasswordArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationRestoreCanceledEventArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationSaveAccomodationArgs = {
  app_id?: InputMaybe<Scalars['ID']['input']>;
  dt_end: Scalars['DateType']['input'];
  dt_start: Scalars['DateType']['input'];
  event_id: Scalars['ID']['input'];
  hotel_id: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  phone: Scalars['String']['input'];
  residents?: InputMaybe<Array<InputMaybe<AccomodationResidentInput>>>;
  room_accomodation_id: Scalars['ID']['input'];
  room_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationSaveAdvItemArgs = {
  data: AdvInput;
};


/** Mutation interface */
export type MutationSaveApplicationPaymentArgs = {
  event_id: Scalars['ID']['input'];
  fail_url?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<LangEnum>;
  payments?: InputMaybe<Array<InputMaybe<ApplicationPaymentInput>>>;
  phone_email: Scalars['String']['input'];
  success_url?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationSaveCalendarArgs = {
  data: CalendarInput;
};


/** Mutation interface */
export type MutationSaveClientAppLogArgs = {
  data: ClientAppLogInput;
};


/** Mutation interface */
export type MutationSaveEventAccomodationArgs = {
  data: EventAccomodationInput;
};


/** Mutation interface */
export type MutationSaveEventApplicationArgs = {
  applications?: InputMaybe<Array<InputMaybe<EventApplicationInput>>>;
  apply_from_organization_id?: InputMaybe<Scalars['Int']['input']>;
  category_id?: InputMaybe<Scalars['ID']['input']>;
  event_id: Scalars['ID']['input'];
  translation_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Mutation interface */
export type MutationSaveEventApplicationSettingsArgs = {
  data: EventApplicationSettingsInput;
};


/** Mutation interface */
export type MutationSaveEventCategoriesArgs = {
  data: EventCategoriesInput;
};


/** Mutation interface */
export type MutationSaveEventCompetitorArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitor2Args = {
  data?: InputMaybe<EventCompetitorInput>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorJsonFileArgs = {
  file: Scalars['Upload']['input'];
  mutation_type: MutationsForJsonFileEnum;
};


/** Mutation interface */
export type MutationSaveEventCompetitorPhotoArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorPhotoInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoreDatesArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreDatesInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceCyArgs = {
  data: EventCompetitorScoresInterfaceInputCy;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceFsArgs = {
  data: EventCompetitorScoresInterfaceInputFs;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceRgArgs = {
  data: EventCompetitorScoresInterfaceInputRg;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresV2Args = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInputV2>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorVideoArgs = {
  competition_id: Scalars['Int']['input'];
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreVideoInput>>>;
};


/** Mutation interface */
export type MutationSaveEventConfidentialityArgs = {
  data: EventConfidentialityInput;
};


/** Mutation interface */
export type MutationSaveEventDocumentsSentFlagsArgs = {
  data: EventDocumentsSentFlagsInput;
};


/** Mutation interface */
export type MutationSaveEventInfoArgs = {
  data: EventInput;
};


/** Mutation interface */
export type MutationSaveEventOrganizerArgs = {
  data: EventOrganizerInput;
};


/** Mutation interface */
export type MutationSaveEventRgJudgingRulesEditionArgs = {
  competition_id: Scalars['ID']['input'];
  judging_rules_rg: EventRgJudgingRulesEditionEnum;
};


/** Mutation interface */
export type MutationSaveEventScheduleArgs = {
  data: EventScheduleInputType;
};


/** Mutation interface */
export type MutationSaveEventShowResultsArgs = {
  event_id: Scalars['Int']['input'];
  show_results: EventShowResultsEnum;
};


/** Mutation interface */
export type MutationSaveEventTranslationsArgs = {
  data: EventTranslationsInput;
};


/** Mutation interface */
export type MutationSaveFsInspectionCommissionSeasonsArgs = {
  seasons?: InputMaybe<Array<InputMaybe<FsInspectionCommissionSeasonInput>>>;
};


/** Mutation interface */
export type MutationSaveMobileTabloV1ActiveCategoryArgs = {
  data: MobileTabloV1ActiveCategoryInput;
};


/** Mutation interface */
export type MutationSaveMobileTabloV1ScoreArgs = {
  data?: InputMaybe<Array<InputMaybe<MobileTabloV1ScoreInput>>>;
};


/** Mutation interface */
export type MutationSaveOrganizationArgs = {
  data: OrganizationInput;
};


/** Mutation interface */
export type MutationSaveOrganizationFederationRgArgs = {
  data: OrganizationFederationRg_Input;
};


/** Mutation interface */
export type MutationSaveOrganizationPublicationEventArgs = {
  data: OrganizationPublicationEventInput;
};


/** Mutation interface */
export type MutationSavePersonArgs = {
  data: PersonFormInput;
};


/** Mutation interface */
export type MutationSavePostwallArgs = {
  data: PostwallInput;
};


/** Mutation interface */
export type MutationSaveRgEventCategoryPlacesArgs = {
  data?: InputMaybe<Scalars['JSON']['input']>;
};


/** Mutation interface */
export type MutationSaveRgEventCategoryPlacesV2Args = {
  data?: InputMaybe<Scalars['JSON']['input']>;
};


/** Mutation interface */
export type MutationSaveRgEventCompetitorScoresArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInput>>>;
};


/** Mutation interface */
export type MutationSaveRgEventCompetitorScoresV2Args = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInputV2>>>;
};


/** Mutation interface */
export type MutationSaveRefereeingSystemVersionArgs = {
  federation_filter: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationSaveSiteSettingsArgs = {
  data?: InputMaybe<Array<InputMaybe<SiteSettingsInput>>>;
};


/** Mutation interface */
export type MutationSaveSubscriptionPaymentArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  fail_url?: InputMaybe<Scalars['String']['input']>;
  success_url?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationSaveVideostandArgs = {
  data: VideostandInput;
};


/** Mutation interface */
export type MutationSaveVideostandEventArgs = {
  data: VideostandEventInput;
};


/** Mutation interface */
export type MutationSaveVideostandStreamParamsArgs = {
  params: VideostandStreamParamsInput;
  videostand_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationSendEventToReviseArgs = {
  id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationSetAthleteInspectionDateArgs = {
  athlete_id: Scalars['ID']['input'];
  context: FsCommissionContextEnum;
  field_name: AthleteInspectionDateEnum;
  field_value: Scalars['DateType']['input'];
  object_id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationSetEventApplicationStatusArgs = {
  id: Scalars['ID']['input'];
  status: ApplicationStatusEnum;
};


/** Mutation interface */
export type MutationSetEventToParentCalendarRequestStatusArgs = {
  competition_id: Scalars['ID']['input'];
  parent_calendar_id: Scalars['ID']['input'];
  reject_reason?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationSetFederationTeamSquadArgs = {
  data?: InputMaybe<FederationTeamSquadInput>;
};


/** Mutation interface */
export type MutationSetFederationTeamSquadMemberArgs = {
  data?: InputMaybe<FederationTeamSquadMemberInput>;
};


/** Mutation interface */
export type MutationSetFederationTeamSquadMemberStatusArgs = {
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationSubscribeTelegramUserToSportArgs = {
  sport_type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationUnitePersonDoublesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  state?: InputMaybe<Array<InputMaybe<PersonDoublesStateEnum>>>;
};


/** Mutation interface */
export type MutationUnpinPostwallPostArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation interface */
export type MutationUnsubscribeTelegramUserFromSportArgs = {
  sport_type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation interface */
export type MutationUpdateEventCompetitorPhotoPaymentRegistryArgs = {
  payment_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationUpdateJudgingSystemExerciseStateRgArgs = {
  data: JudgingSystemExerciseStatusRgInput;
};


/** Mutation interface */
export type MutationUpdateJudgingSystemScoreRgArgs = {
  data: JudgingSystemScoreRgInput;
};


/** Mutation interface */
export type MutationUpdatePaymentArgs = {
  data: PaymentDataInput;
  status?: InputMaybe<Scalars['Int']['input']>;
};


/** Mutation interface */
export type MutationUpdatePaymentDateArgs = {
  new_dt: Scalars['DateTimeType']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


/** Mutation interface */
export type MutationUpdateProfileArgs = {
  data: UserProfileInput;
};


/** Mutation interface */
export type MutationUpdateRegistrationFeeArgs = {
  data: RegistrationFeeInput;
};


/** Mutation interface */
export type MutationUpdateRegistrationFeePaymentRegistryArgs = {
  payment_id: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationUpdateSeasonArgs = {
  dt_begin: Scalars['DateType']['input'];
  dt_end: Scalars['DateType']['input'];
  id: Scalars['Int']['input'];
  sport_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationUpdateSeasonWithRegistrationFeeArgs = {
  data: SportSeasonWithRegistrationFeeInput;
};


/** Mutation interface */
export type MutationUpdateWebJudgeScoreRgArgs = {
  data: WebJudgeScoreRgInput;
};


/** Mutation interface */
export type MutationUpgradeAuthSessionArgs = {
  sid: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** Mutation interface */
export type MutationUploadArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadCalendarMediaArgs = {
  calendarId: Scalars['Int']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
  fileInput?: InputMaybe<FileInput>;
};


/** Mutation interface */
export type MutationUploadEventMediaArgs = {
  document?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['Int']['input'];
  fileInput?: InputMaybe<FileInput>;
};


/** Mutation interface */
export type MutationUploadOrganizationMediaArgs = {
  document?: InputMaybe<Scalars['String']['input']>;
  fileInput?: InputMaybe<FileInput>;
  organizationId: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationUploadOrganizationReportMediaArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadPersonAvatarArgs = {
  fileInput?: InputMaybe<FileInput>;
  personId: Scalars['Int']['input'];
};


/** Mutation interface */
export type MutationUploadResultsFromIsucalcArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadUserAvatarArgs = {
  auser_id?: InputMaybe<Scalars['ID']['input']>;
  file_input?: InputMaybe<FileInput>;
};


/** Mutation interface */
export type MutationUploadXlsxToQueueArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
  operation_type: XlsxQueueOperationTypeEnum;
};


/** Mutation interface */
export type MutationVerifyCredentialsChangeArgs = {
  code: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** Тип мутации для передачи участников и результатов из судейской системы на сайт через json файл */
export enum MutationsForJsonFileEnum {
  /** Сохранить участников соревнования */
  SaveEventCompetitor = 'saveEventCompetitor',
  /** Сохранить результаты участников соревнования */
  SaveEventCompetitorScores = 'saveEventCompetitorScores',
  /** Сохранить результаты участников соревнования по правилам 2022-2024 */
  SaveEventCompetitorScoresV2 = 'saveEventCompetitorScoresV2'
}

/** MyEvent type definition */
export type MyEvent = {
  __typename?: 'MyEvent';
  all_apps_count: Scalars['Int']['output'];
  calendar_auser_id: Scalars['Int']['output'];
  calendar_org_id?: Maybe<Scalars['Int']['output']>;
  calendar_owner_name?: Maybe<Scalars['String']['output']>;
  calendar_title?: Maybe<Scalars['String']['output']>;
  dates: Scalars['String']['output'];
  dt_begin: Scalars['String']['output'];
  dt_end: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  new_apps_count: Scalars['Int']['output'];
  parent_calendar_requests?: Maybe<Array<Maybe<EventToParentCalendarRequest>>>;
  results_count: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  table: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** MyEventCalendar type definition */
export type MyEventCalendar = {
  __typename?: 'MyEventCalendar';
  calendar_auser_id: Scalars['Int']['output'];
  calendar_id: Scalars['Int']['output'];
  calendar_org_id?: Maybe<Scalars['Int']['output']>;
  calendar_owner_name?: Maybe<Scalars['String']['output']>;
  calendar_title?: Maybe<Scalars['String']['output']>;
};

/** MyEventConnection type definition */
export type MyEventConnection = {
  __typename?: 'MyEventConnection';
  edges?: Maybe<Array<Maybe<MyEvent>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** MyEventRequest type definition */
export type MyEventRequest = {
  __typename?: 'MyEventRequest';
  allow_revise: Scalars['Boolean']['output'];
  applicant_id: Scalars['ID']['output'];
  applicant_name?: Maybe<Scalars['String']['output']>;
  calendar_id: Scalars['ID']['output'];
  dates: Scalars['String']['output'];
  dt_begin: Scalars['String']['output'];
  dt_end: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  parent_calendar_id: Scalars['ID']['output'];
  request_status: Scalars['String']['output'];
  status: Scalars['String']['output'];
  time: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** MyEventRequestConnection type definition */
export type MyEventRequestConnection = {
  __typename?: 'MyEventRequestConnection';
  edges?: Maybe<Array<Maybe<MyEventRequest>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** NewsFeedFilter type definition */
export type NewsFeedFilter = {
  __typename?: 'NewsFeedFilter';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** NewsFeedFilterInput type definition */
export type NewsFeedFilterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['ID']['input']>;
};

/** NewsFeedFilterInput type definition */
export type NewsFeedFiltersInput = {
  filters?: InputMaybe<Array<InputMaybe<NewsFeedFilterInput>>>;
};

/** NewsFeedItem type definition */
export type NewsFeedItem = {
  __typename?: 'NewsFeedItem';
  attachment_date?: Maybe<Scalars['String']['output']>;
  attachment_filename?: Maybe<Scalars['String']['output']>;
  attachment_preview_url?: Maybe<Scalars['String']['output']>;
  attachment_size?: Maybe<Scalars['String']['output']>;
  attachment_url?: Maybe<Scalars['String']['output']>;
  content_body?: Maybe<Scalars['String']['output']>;
  content_head?: Maybe<Scalars['String']['output']>;
  content_type: Scalars['String']['output'];
  dt_create: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  object_date?: Maybe<Scalars['String']['output']>;
  object_id: Scalars['ID']['output'];
  object_image?: Maybe<Scalars['String']['output']>;
  object_location?: Maybe<Scalars['String']['output']>;
  object_title?: Maybe<Scalars['String']['output']>;
  object_type: Scalars['String']['output'];
  object_url: Scalars['String']['output'];
  pos: Scalars['Int']['output'];
  subscribed: Scalars['Boolean']['output'];
};

/** NewsFeedItemObject type definition */
export type NewsFeedItemObject = {
  __typename?: 'NewsFeedItemObject';
  service_user_id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

/** NodeError type definition */
export type NodeError = NodeInterface & {
  __typename?: 'NodeError';
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  errors?: Maybe<Array<Maybe<NodeErrorError>>>;
  id: Scalars['ID']['output'];
  request?: Maybe<Scalars['JSON']['output']>;
  session?: Maybe<Scalars['JSON']['output']>;
  table: Scalars['String']['output'];
};

/** NodeErrorError type definition */
export type NodeErrorError = {
  __typename?: 'NodeErrorError';
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stacktrace?: Maybe<Scalars['String']['output']>;
};

/** An object with an ID */
export type NodeInterface = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The name of the table in database */
  table: Scalars['String']['output'];
};

/** Определяет имена сервисов для авторизации по протоколу OAuth. */
export enum OAuthServiceNameEnum {
  /** Facebook */
  Fb = 'fb',
  /** VKontakte */
  Vk = 'vk'
}

export type OrderBy = {
  direction: OrderByTypeEnum;
  field: Scalars['String']['input'];
};

export enum OrderByTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export enum OrgSortByEnum {
  DisplayName = 'display_name',
  ProtocolName = 'protocol_name',
  ShortTitle = 'short_title',
  Title = 'title'
}

export enum OrgTypeEnum {
  Federation = 'federation',
  Other = 'other',
  School = 'school',
  Service = 'service',
  Society = 'society'
}

/** Organization type definition */
export type Organization = NodeInterface & {
  __typename?: 'Organization';
  accreditation?: Maybe<OrganizationAccreditation>;
  /** @deprecated Address was splitted to address and address_legal in according with organization/federation form scheme. See "info" field. */
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Avatar>;
  background?: Maybe<Avatar>;
  calendars?: Maybe<Array<Maybe<Calendar>>>;
  child_org_count?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Now city is a part of "info" field in according with organization/federation form scheme. */
  city?: Maybe<City>;
  /** @deprecated Now contingent is a part of "info" field in according with organization/federation form scheme. */
  contingent?: Maybe<Array<Maybe<OrganizationContingentEnum>>>;
  count?: Maybe<OrganizationCounts>;
  country?: Maybe<Country>;
  /** @deprecated Now creator is a part of "info" field in according with organization/federation form scheme. */
  creator?: Maybe<Person>;
  current_publication_event?: Maybe<OrganizationPublicationEvent>;
  deleting_prohibits?: Maybe<Array<Maybe<OrganizationDeletingProhibits>>>;
  description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Now diciplines is a part of "info" field in according with organization/federation form scheme. */
  diciplines?: Maybe<Array<Maybe<OrganizationDiciplinesEnum>>>;
  display_name?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<OrganizationDocuments>;
  dt_foundation?: Maybe<Scalars['DateType']['output']>;
  /** @deprecated Now egrul_file is a part of "documents" field in according with organization/federation form scheme. */
  egrul_file?: Maybe<FileType>;
  /** @deprecated Now email is a part of "info" field in according with organization/federation form scheme. */
  email?: Maybe<Scalars['String']['output']>;
  executive?: Maybe<OrganizationExecutive>;
  /** @deprecated Now extra is a part of "info" field in according with organization/federation form scheme. */
  extra?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  info?: Maybe<OrganizationInfo>;
  is_closed?: Maybe<Scalars['String']['output']>;
  is_in_my_calendar: Scalars['Boolean']['output'];
  is_responsible: Scalars['Boolean']['output'];
  /** true если статус организации not_in_registry. Ы будущем условия могут усложняться */
  is_restricted?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  leader?: Maybe<Scalars['String']['output']>;
  longtitude?: Maybe<Scalars['Float']['output']>;
  org_type?: Maybe<Scalars['String']['output']>;
  parent_organization1?: Maybe<Organization>;
  person_id?: Maybe<Scalars['String']['output']>;
  /** @deprecated Now phone is a part of "info" field in according with organization/federation form scheme. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Название организации для протокола */
  protocol_name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Region>;
  /** @deprecated Now registration_file is a part of "documents" field in according with organization/federation form scheme. */
  registration_file?: Maybe<FileType>;
  requisites?: Maybe<OrganizationRequisites>;
  /** @deprecated Now responsable_contact is a part of "info" field in according with organization/federation form scheme. */
  responsable_contact?: Maybe<Scalars['String']['output']>;
  /** @deprecated Now responsable_position is a part of "info" field in according with organization/federation form scheme. */
  responsable_position?: Maybe<Scalars['String']['output']>;
  revise_state?: Maybe<Scalars['String']['output']>;
  school_id?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Now statute_file is a part of "documents" field in according with organization/federation form scheme. */
  statute_file?: Maybe<FileType>;
  table: Scalars['String']['output'];
  team_squad_actualization?: Maybe<Scalars['Boolean']['output']>;
  team_squad_years?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  type_school?: Maybe<Scalars['String']['output']>;
  /** @deprecated use field revise_state instead */
  verification_status?: Maybe<Scalars['String']['output']>;
};

/** OrganizationAccreditation type definition */
export type OrganizationAccreditation = {
  __typename?: 'OrganizationAccreditation';
  dt_end?: Maybe<Scalars['DateType']['output']>;
  dt_start?: Maybe<Scalars['DateType']['output']>;
  has_accreditation?: Maybe<Scalars['Boolean']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

/** OrganizationAlerts type definition */
export type OrganizationAlerts = {
  __typename?: 'OrganizationAlerts';
  moderation_organizations: Scalars['Int']['output'];
  my_organizations: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** OrganizationConnection type definition */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges?: Maybe<Array<Maybe<Organization>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum OrganizationContingentEnum {
  Adults = 'adults',
  Athletes = 'athletes',
  Boys = 'boys',
  Girls = 'girls',
  Lover = 'lover'
}

/** OrganizationCounts type definition */
export type OrganizationCounts = {
  __typename?: 'OrganizationCounts';
  athlete_count?: Maybe<Scalars['Int']['output']>;
  coach_count?: Maybe<Scalars['Int']['output']>;
};

/** OrganizationDeletingProhibits type definition */
export type OrganizationDeletingProhibits = {
  __typename?: 'OrganizationDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum OrganizationDiciplinesEnum {
  Collective = 'collective',
  Dance = 'dance',
  Pair = 'pair',
  Single = 'single',
  Synchronous = 'synchronous'
}

/** OrganizationDocuments type definition */
export type OrganizationDocuments = {
  __typename?: 'OrganizationDocuments';
  accreditation_file?: Maybe<FileType>;
  contract_file?: Maybe<FileType>;
  egrul_file?: Maybe<FileType>;
  protocol_file?: Maybe<FileType>;
  registration_file?: Maybe<FileType>;
  regulations_file?: Maybe<FileType>;
  statute_accept_file?: Maybe<FileType>;
  statute_file?: Maybe<FileType>;
  tin_file?: Maybe<FileType>;
};

/** OrganizationExecutive type definition */
export type OrganizationExecutive = {
  __typename?: 'OrganizationExecutive';
  authority?: Maybe<Scalars['String']['output']>;
  exec_chief_email?: Maybe<Scalars['String']['output']>;
  exec_chief_name?: Maybe<Scalars['String']['output']>;
  exec_chief_phone?: Maybe<Scalars['String']['output']>;
};

/** OrganizationFederationRG_Input type definition */
export type OrganizationFederationRg_Input = {
  accreditation?: InputMaybe<OrganizationInputAccreditation>;
  display_name: Scalars['String']['input'];
  documents: OrganizationFederationRg_InputDocuments;
  dt_foundation?: InputMaybe<Scalars['DateType']['input']>;
  executive?: InputMaybe<OrganizationFederationRg_InputExecutive>;
  id?: InputMaybe<Scalars['ID']['input']>;
  info: OrganizationFederationRg_InputInfo;
  org_type?: InputMaybe<OrganizationOrgtypesEnum>;
  parent_organization1: ParentOrganizationInput;
  protocol_name: Scalars['String']['input'];
  requisites?: InputMaybe<OrganizationFederationRg_InputRequisites>;
  short_title?: InputMaybe<Scalars['String']['input']>;
  sport_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

/** OrganizationFederationRG_InputDocuments type definition */
export type OrganizationFederationRg_InputDocuments = {
  accreditation_file?: InputMaybe<FileInfoInput>;
  contract_file?: InputMaybe<FileInfoInput>;
  egrul_file?: InputMaybe<FileInfoInput>;
  protocol_file?: InputMaybe<FileInfoInput>;
  registration_file?: InputMaybe<FileInfoInput>;
  regulations_file?: InputMaybe<FileInfoInput>;
  statute_accept_file?: InputMaybe<FileInfoInput>;
  statute_file?: InputMaybe<FileInfoInput>;
  tin_file?: InputMaybe<FileInfoInput>;
};

/** OrganizationFederationRG_InputExecutive type definition */
export type OrganizationFederationRg_InputExecutive = {
  authority?: InputMaybe<Scalars['String']['input']>;
  exec_chief_email?: InputMaybe<Scalars['String']['input']>;
  exec_chief_name?: InputMaybe<Scalars['String']['input']>;
  exec_chief_phone?: InputMaybe<Scalars['String']['input']>;
};

/** OrganizationFederationRG_InputInfo type definition */
export type OrganizationFederationRg_InputInfo = {
  address?: InputMaybe<Scalars['String']['input']>;
  address_legal?: InputMaybe<Scalars['String']['input']>;
  city: CityInput;
  contingent?: InputMaybe<Array<InputMaybe<OrganizationContingentEnum>>>;
  creator: PersonShortInput;
  current_publication_event?: InputMaybe<OrganizationPublicationEventInput>;
  diciplines?: InputMaybe<Array<InputMaybe<OrganizationDiciplinesEnum>>>;
  dt_entry?: InputMaybe<Scalars['DateType']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  press_secretary?: InputMaybe<Scalars['String']['input']>;
  press_secretary_phone?: InputMaybe<Scalars['String']['input']>;
  responsable_contact?: InputMaybe<Scalars['String']['input']>;
  responsable_position?: InputMaybe<Scalars['String']['input']>;
  responsible_users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  site?: InputMaybe<Scalars['String']['input']>;
};

/** OrganizationFederationRG_InputRequisites type definition */
export type OrganizationFederationRg_InputRequisites = {
  chief: ChiefPersonInput;
  chief_phone?: InputMaybe<Scalars['String']['input']>;
  chief_position?: InputMaybe<Scalars['String']['input']>;
  iec?: InputMaybe<Scalars['String']['input']>;
  psrn?: InputMaybe<Scalars['String']['input']>;
  tin?: InputMaybe<Scalars['String']['input']>;
};

/** OrganizationForLists type definition */
export type OrganizationForLists = {
  __typename?: 'OrganizationForLists';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Avatar>;
  background?: Maybe<Avatar>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  leader?: Maybe<Scalars['String']['output']>;
  org_type?: Maybe<Scalars['String']['output']>;
  parent_organization1_id?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  protocol_name?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Region>;
  short_title?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['String']['output']>;
  type_school?: Maybe<Scalars['String']['output']>;
};

/** OrganizationInfo type definition */
export type OrganizationInfo = {
  __typename?: 'OrganizationInfo';
  address?: Maybe<Scalars['String']['output']>;
  address_legal?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  contingent?: Maybe<Array<Maybe<OrganizationContingentEnum>>>;
  creator?: Maybe<Person>;
  current_publication_event?: Maybe<OrganizationPublicationEvent>;
  diciplines?: Maybe<Array<Maybe<OrganizationDiciplinesEnum>>>;
  dt_entry?: Maybe<Scalars['DateType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  press_secretary?: Maybe<Scalars['String']['output']>;
  press_secretary_phone?: Maybe<Scalars['String']['output']>;
  responsable_contact?: Maybe<Scalars['String']['output']>;
  responsable_position?: Maybe<Scalars['String']['output']>;
  responsible_users?: Maybe<Array<Maybe<Auser>>>;
  site?: Maybe<Scalars['String']['output']>;
  tin?: Maybe<Scalars['String']['output']>;
};

/** OrganizationInput type definition */
export type OrganizationInput = {
  display_name: Scalars['String']['input'];
  documents: OrganizationInputDocuments;
  dt_foundation?: InputMaybe<Scalars['DateType']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  info: OrganizationInputInfo;
  org_type?: InputMaybe<OrganizationOrgtypesEnum>;
  parent_organization1: ParentOrganizationInput;
  protocol_name: Scalars['String']['input'];
  short_title?: InputMaybe<Scalars['String']['input']>;
  sport_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

/** OrganizationInputAccreditation type definition */
export type OrganizationInputAccreditation = {
  dt_end?: InputMaybe<Scalars['DateType']['input']>;
  dt_start?: InputMaybe<Scalars['DateType']['input']>;
  has_accreditation?: InputMaybe<Scalars['Boolean']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
};

/** OrganizationInputDocuments type definition */
export type OrganizationInputDocuments = {
  egrul_file?: InputMaybe<FileInfoInput>;
  registration_file?: InputMaybe<FileInfoInput>;
  statute_file?: InputMaybe<FileInfoInput>;
};

/** OrganizationInputInfo type definition */
export type OrganizationInputInfo = {
  address?: InputMaybe<Scalars['String']['input']>;
  city: CityInput;
  contingent?: InputMaybe<Array<InputMaybe<OrganizationContingentEnum>>>;
  creator: PersonShortInput;
  current_publication_event?: InputMaybe<OrganizationPublicationEventInput>;
  diciplines?: InputMaybe<Array<InputMaybe<OrganizationDiciplinesEnum>>>;
  extra?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  responsable_contact?: InputMaybe<Scalars['String']['input']>;
  responsable_position?: InputMaybe<Scalars['String']['input']>;
  responsible_users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tin?: InputMaybe<Scalars['String']['input']>;
};

/** OrganizationName type definition */
export type OrganizationName = {
  __typename?: 'OrganizationName';
  child_org_count?: Maybe<Scalars['Int']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  protocol_name?: Maybe<Scalars['String']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum OrganizationOrgtypesEnum {
  Federation = 'federation',
  Other = 'other',
  School = 'school',
  Service = 'service',
  Society = 'society'
}

/** OrganizationPublicationEvent type definition */
export type OrganizationPublicationEvent = NodeInterface & {
  __typename?: 'OrganizationPublicationEvent';
  active?: Maybe<Scalars['Boolean']['output']>;
  alert_to_moderator?: Maybe<Scalars['Boolean']['output']>;
  alert_to_organizer?: Maybe<Scalars['Boolean']['output']>;
  creator?: Maybe<Person>;
  creator_id?: Maybe<Scalars['Int']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  short_title?: Maybe<Scalars['String']['output']>;
  state?: Maybe<OrganizationPublicationEventStates>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  total_events_count?: Maybe<Scalars['Int']['output']>;
};

/** OrganizationPublicationEventConnection type definition */
export type OrganizationPublicationEventConnection = {
  __typename?: 'OrganizationPublicationEventConnection';
  edges?: Maybe<Array<Maybe<OrganizationPublicationEvent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** OrganizationPublicationEventInput type definition */
export type OrganizationPublicationEventInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  state: OrganizationPublicationEventStates;
};

export enum OrganizationPublicationEventStates {
  Actualization = 'actualization',
  ActualizationCheck = 'actualization_check',
  ActualizationFailed = 'actualization_failed',
  Canceled = 'canceled',
  Created = 'created',
  Denied = 'denied',
  DoesNotExist = 'does_not_exist',
  InRegistry = 'in_registry',
  NotInRegistry = 'not_in_registry',
  WaitRevise = 'wait_revise'
}

/** OrganizationReportMedia type definition */
export type OrganizationReportMedia = {
  __typename?: 'OrganizationReportMedia';
  annual_activity_report?: Maybe<FileType>;
  developing_project?: Maybe<FileType>;
  events_info?: Maybe<FileType>;
  executive_authority_reference?: Maybe<FileType>;
  financial_source_reference?: Maybe<FileType>;
  id?: Maybe<Scalars['ID']['output']>;
  members_info?: Maybe<FileType>;
  membership_payment_confirmation?: Maybe<FileType>;
  sponsor_list?: Maybe<FileType>;
  team_results_reference?: Maybe<FileType>;
};

/** OrganizationRequisites type definition */
export type OrganizationRequisites = {
  __typename?: 'OrganizationRequisites';
  chief?: Maybe<ChiefPerson>;
  chief_phone?: Maybe<Scalars['String']['output']>;
  chief_position?: Maybe<Scalars['String']['output']>;
  iec?: Maybe<Scalars['String']['output']>;
  psrn?: Maybe<Scalars['String']['output']>;
  tin?: Maybe<Scalars['String']['output']>;
};

/** OrganizationStatistics type definition */
export type OrganizationStatistics = {
  __typename?: 'OrganizationStatistics';
  athlete_count: Scalars['Int']['output'];
  coach_count: Scalars['Int']['output'];
  school_count: Scalars['Int']['output'];
};

/** ParentCalendar type definition */
export type ParentCalendar = {
  __typename?: 'ParentCalendar';
  parent_calendar_id: Scalars['ID']['output'];
  parent_calendar_title: Scalars['String']['output'];
  parent_organization_title: Scalars['String']['output'];
};

/** ParentOrganizationInput type definition */
export type ParentOrganizationInput = {
  display_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  protocol_name?: InputMaybe<Scalars['String']['input']>;
  short_title?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentCommissionSettings = {
  __typename?: 'PaymentCommissionSettings';
  /** Комиссия за оплаты напрямую */
  commission_org_custom?: Maybe<Scalars['Float']['output']>;
  /** Комиссия организатора в рублях за оплаты напрямую */
  commission_org_custom_fix?: Maybe<Scalars['Float']['output']>;
  /** Комиссия для организатора в процентах */
  commission_org_system?: Maybe<Scalars['Float']['output']>;
  /** комиссия для организатора в рублях */
  commission_org_system_fix?: Maybe<Scalars['Float']['output']>;
  legalentity_id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentCommissionSettingsInput = {
  commission_org_custom?: InputMaybe<Scalars['Float']['input']>;
  commission_org_custom_fix?: InputMaybe<Scalars['Float']['input']>;
  commission_org_system?: InputMaybe<Scalars['Float']['input']>;
  commission_org_system_fix?: InputMaybe<Scalars['Float']['input']>;
};

/** SubscriptionConfig type definition */
export type PaymentConfig = {
  __typename?: 'PaymentConfig';
  commission_1?: Maybe<Scalars['Float']['output']>;
  commission_2?: Maybe<Scalars['Float']['output']>;
  counteragent_type?: Maybe<Scalars['String']['output']>;
  dt_start?: Maybe<Scalars['String']['output']>;
  id_payment_conf: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  season?: Maybe<Season>;
  table: Scalars['String']['output'];
};

/** Данные для изменения записи в таблице "payment" */
export type PaymentDataInput = {
  additional_info?: InputMaybe<Scalars['String']['input']>;
  amount_in_system?: InputMaybe<Scalars['Float']['input']>;
  commission_in_system?: InputMaybe<Scalars['Float']['input']>;
  pay_account_id?: InputMaybe<Scalars['String']['input']>;
  payment_id: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  without_commission_in_system?: InputMaybe<Scalars['Float']['input']>;
};

/** Подробная информация об оплате заявки */
export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  /** ИД платежа */
  id?: Maybe<Scalars['Int']['output']>;
  /** Ссылка на виджет платежной системы */
  pay_widget_link?: Maybe<Scalars['String']['output']>;
  /** Полная стоимость оплачиваемой суммы */
  total_amount?: Maybe<Scalars['Float']['output']>;
  /** Полная стоимость оплачиваемой комисси */
  total_commission?: Maybe<Scalars['Float']['output']>;
  /** Полная стоимость оплачиваемой комиссии участника */
  total_commission_application?: Maybe<Scalars['Float']['output']>;
  /** Полная стоимость оплачиваемого стартового взноса */
  total_price?: Maybe<Scalars['Float']['output']>;
};

/** Подробная информация об оплате заявки */
export type PaymentPart = {
  __typename?: 'PaymentPart';
  /** полная стоимость (с комиссией) */
  amount?: Maybe<Scalars['Float']['output']>;
  /** сумма комиссии */
  commission?: Maybe<Scalars['Float']['output']>;
  /** сумма дополнительной комиссии за заявку (от орг не в реестре например) */
  commission_application?: Maybe<Scalars['Float']['output']>;
  /** полная сумма комиссии (с комиссией) */
  full_commission?: Maybe<Scalars['Float']['output']>;
  /** исходная стоимость (без комиссии) */
  price?: Maybe<Scalars['Float']['output']>;
};

/** Оплачиваемая часть заявки */
export type PaymentPartInput = {
  amount: Scalars['Float']['input'];
  commission: Scalars['Float']['input'];
  commission_application: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
};

/** Определяет возможные статусы оплаты заявок */
export enum PaymentStatusEnum {
  /** Оплачена полностью – заявка полностью оплачена */
  FullyPaid = 'fully_paid',
  /** переплата */
  OverPaid = 'over_paid',
  /** Оплачена частично – заявка оплачена частично */
  PartiallyPaid = 'partially_paid',
  /** Ожидает оплату – заявка не оплачена */
  Unpaid = 'unpaid'
}

/** Person type definition */
export type Person = NodeInterface & {
  __typename?: 'Person';
  /** True если 24 часа с момента создания персоны ещё не прошли */
  allow_responsible_edit?: Maybe<Scalars['Boolean']['output']>;
  auser_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Avatar>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']['output']>;
  /** информация о тренерской части персоны */
  coach?: Maybe<Coach>;
  country?: Maybe<Country>;
  creator_id?: Maybe<Scalars['Int']['output']>;
  /** направления в которых выступает спортсмен */
  discipline_title?: Maybe<Array<Maybe<PersonDisciplineTitle>>>;
  display_name?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<Maybe<Error>>>;
  first_name?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  is_verified?: Maybe<Scalars['String']['output']>;
  judge?: Maybe<Array<Maybe<Judge>>>;
  last_name?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** информация о спортивной части персоны */
  sportsman?: Maybe<Sportsman>;
  table: Scalars['String']['output'];
  team_squads?: Maybe<Array<Maybe<PersonTeamSquad>>>;
  united_person?: Maybe<Scalars['Int']['output']>;
};


/** Person type definition */
export type PersonJudgeArgs = {
  sporttype_id?: InputMaybe<Scalars['Int']['input']>;
};

/** PersonCoachInput type definition */
export type PersonCoachInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  is_honored?: InputMaybe<Scalars['Boolean']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<PersonCoachOrganizationInput>>>;
};

/** PersonCoachOrganizationInput type definition */
export type PersonCoachOrganizationInput = {
  from_month?: InputMaybe<Scalars['MonthType']['input']>;
  from_year?: InputMaybe<Scalars['YearType']['input']>;
  non_active?: InputMaybe<Scalars['Boolean']['input']>;
  organization?: InputMaybe<ShortOrganizationInput>;
  to_month?: InputMaybe<Scalars['MonthType']['input']>;
  to_year?: InputMaybe<Scalars['YearType']['input']>;
};

/** PersonConnection type definition */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  edges?: Maybe<Array<Maybe<PersonForList>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** PersonForList type definition */
export type PersonDisciplineTitle = {
  __typename?: 'PersonDisciplineTitle';
  code?: Maybe<DisciplineTitleEnum>;
  person_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** PersonDoubleCouple type definition */
export type PersonDoubleCouple = {
  __typename?: 'PersonDoubleCouple';
  coincidence?: Maybe<Scalars['String']['output']>;
  dt_update?: Maybe<Scalars['DateTimeType']['output']>;
  id: Scalars['ID']['output'];
  person1?: Maybe<PersonDoubleItem>;
  person2?: Maybe<PersonDoubleItem>;
  redactor?: Maybe<PersonDoubleRedactor>;
  state: PersonDoublesStateEnum;
};

/** PersonDoubleItem type definition */
export type PersonDoubleItem = {
  __typename?: 'PersonDoubleItem';
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
};

/** PersonDoubleRedactor type definition */
export type PersonDoubleRedactor = {
  __typename?: 'PersonDoubleRedactor';
  actual_name?: Maybe<Scalars['String']['output']>;
  fi_actual_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  is_moderator?: Maybe<Scalars['Boolean']['output']>;
};

/** PersonDoublesConnection type definition */
export type PersonDoublesConnection = {
  __typename?: 'PersonDoublesConnection';
  edges?: Maybe<Array<Maybe<PersonDoubleCouple>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PersonDoublesStateEnum {
  NotDouble = 'not_double',
  United = 'united',
  Waiting = 'waiting'
}

export type PersonFilterType = {
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  only_adult?: InputMaybe<Scalars['Boolean']['input']>;
};

/** PersonForList type definition */
export type PersonForList = NodeInterface & {
  __typename?: 'PersonForList';
  auser_id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Avatar>;
  display_name?: Maybe<Scalars['String']['output']>;
  dt_birthday?: Maybe<Scalars['DateType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Array<Maybe<OrganizationForLists>>>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** PersonFormInput type definition */
export type PersonFormInput = {
  coach?: InputMaybe<PersonCoachInput>;
  discipline_title?: InputMaybe<Array<InputMaybe<DisciplineTitleEnum>>>;
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  sport_id: Scalars['ID']['input'];
  sportsman?: InputMaybe<PersonSportsmanInput>;
};

/** Пол персоны */
export enum PersonGenderEnum {
  /** пол - женский */
  Female = 'female',
  /** пол - мужской */
  Male = 'male'
}

/** PersonShortDataInput type definition */
export type PersonShortDataInput = {
  display_name?: InputMaybe<Scalars['String']['input']>;
  dt_birthday?: InputMaybe<Scalars['DateType']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

/** PersonShortInput type definition */
export type PersonShortInput = {
  auser_id?: InputMaybe<Scalars['Int']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
};

export type PersonSportsmanCoachInput = {
  coach: PersonSportsmanCoachInputInner;
  from_month?: InputMaybe<Scalars['MonthType']['input']>;
  from_year?: InputMaybe<Scalars['YearType']['input']>;
  index_key?: InputMaybe<Scalars['Int']['input']>;
  is_main?: InputMaybe<Scalars['Boolean']['input']>;
  non_active?: InputMaybe<Scalars['Boolean']['input']>;
  to_month?: InputMaybe<Scalars['MonthType']['input']>;
  to_year?: InputMaybe<Scalars['YearType']['input']>;
};

export type PersonSportsmanCoachInputInner = {
  id?: InputMaybe<Scalars['ID']['input']>;
  person?: InputMaybe<PersonShortDataInput>;
};

/** PersonSportsmanInput type definition */
export type PersonSportsmanInput = {
  athlete_agreement_date?: InputMaybe<Scalars['DateType']['input']>;
  athlete_rank_assign_date?: InputMaybe<Scalars['DateType']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_ias_sport?: InputMaybe<Scalars['String']['input']>;
  insurance_exp_date?: InputMaybe<Scalars['DateType']['input']>;
  medcert_exp_date?: InputMaybe<Scalars['DateType']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<PersonSportsmanOrganizationItemInput>>>;
  rank: Scalars['Int']['input'];
  rank_tests?: InputMaybe<Array<InputMaybe<AthleteRankTestEnum>>>;
};

/** PersonSportsmanOrganizationItemInput type definition */
export type PersonSportsmanOrganizationItemInput = {
  coaches?: InputMaybe<Array<InputMaybe<PersonSportsmanCoachInput>>>;
  organization?: InputMaybe<ShortOrganizationInput>;
};

/** PersonTeamSquad type definition */
export type PersonTeamSquad = {
  __typename?: 'PersonTeamSquad';
  id: Scalars['ID']['output'];
  organization_id: Scalars['ID']['output'];
  squad_title: Scalars['String']['output'];
  status: Scalars['String']['output'];
  team_title: Scalars['String']['output'];
  year_active_from: Scalars['Int']['output'];
  year_active_to?: Maybe<Scalars['Int']['output']>;
};

/** Postwall type definition */
export type Postwall = NodeInterface & {
  __typename?: 'Postwall';
  author_actual_name?: Maybe<Scalars['String']['output']>;
  author_id?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<Avatar>;
  content?: Maybe<Scalars['String']['output']>;
  count_children?: Maybe<Scalars['Int']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  dt_deletion?: Maybe<Scalars['DateTimeType']['output']>;
  dt_fixing?: Maybe<Scalars['DateTimeType']['output']>;
  dt_update?: Maybe<Scalars['DateTimeType']['output']>;
  entity?: Maybe<PostwallEntity>;
  entity_id?: Maybe<Scalars['Int']['output']>;
  fixed?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  mailing8_planned_count?: Maybe<Scalars['Int']['output']>;
  mailing_option?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  photo?: Maybe<FileType>;
  published?: Maybe<Scalars['Boolean']['output']>;
  remover_id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sport_id?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
  thread_id?: Maybe<Scalars['Int']['output']>;
};

/** PostwallConnection type definition */
export type PostwallConnection = {
  __typename?: 'PostwallConnection';
  edges?: Maybe<Array<Maybe<Postwall>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PostwallEntity {
  Event = 'event',
  Organization = 'organization',
  Person = 'person',
  Sportvokrug = 'sportvokrug'
}

export type PostwallInput = {
  content: Scalars['String']['input'];
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  entity: PostwallEntity;
  entity_id?: InputMaybe<Scalars['Int']['input']>;
  fixed: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  mailing_option?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  photo?: InputMaybe<FileInfoInput>;
  published: Scalars['Boolean']['input'];
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Query interface */
export type Query = {
  __typename?: 'Query';
  accommodationsForPayment?: Maybe<EventAccomodationsConnection>;
  advManagerInList: AdvConnection;
  advManagerInListItem?: Maybe<Adv>;
  appUserAlerts: OrganizationAlerts;
  applicationPaymentInfoByPaymentId?: Maybe<Array<Maybe<ApplicationPaymentInfoByPaymentId>>>;
  applicationsForPayment?: Maybe<EventApplicationsConnection>;
  ausers: AuserConnection;
  calendars?: Maybe<CalendarConnection>;
  checkEmail?: Maybe<Scalars['String']['output']>;
  checkToken?: Maybe<UserInfo>;
  checkWebJudgingUid?: Maybe<Scalars['Boolean']['output']>;
  cities?: Maybe<Array<Maybe<City>>>;
  coachSportsmans?: Maybe<Array<Maybe<Sportsman>>>;
  coaches?: Maybe<CoachConnection>;
  coachesByOrganization?: Maybe<CoachByOrganizationConnection>;
  countries?: Maybe<Array<Maybe<Country>>>;
  disciplines: DisciplineConnection;
  eventAccomodationScheme?: Maybe<EventAccomodationScheme>;
  eventAccomodatons?: Maybe<EventAccomodationsConnection>;
  eventAdvertising?: Maybe<Array<Maybe<EventAdvertising>>>;
  eventApplicationOrganizations?: Maybe<OrganizationConnection>;
  eventApplicationPersons?: Maybe<ApplicationPersonsConnection>;
  eventApplications?: Maybe<EventApplicationsConnection>;
  eventApplicationsByCategory?: Maybe<EventApplicationByCategoryConnection>;
  eventCompetitorPhotoGroups?: Maybe<EventCompetitorGroupPhotoConnection>;
  eventCompetitorPhotos?: Maybe<EventCompetitorPhotoConnection>;
  eventCompetitorScoresForInterfaceCY?: Maybe<EventCompetitorScoresInterfaceCy>;
  eventCompetitorScoresForInterfaceFS?: Maybe<EventCompetitorScoresInterfaceFs>;
  eventCompetitorScoresForInterfaceRG?: Maybe<EventCompetitorScoresInterfaceRg>;
  eventCompetitorVideoGroups?: Maybe<EventVideoGroupsConnection>;
  eventForJudgingSystems?: Maybe<EventForJudgingSystems>;
  eventOlympicoDocuments?: Maybe<DocumentOlympico>;
  eventPersonResultsApparatusScoresRG?: Maybe<Array<Maybe<EventResultApparatusScoresRg>>>;
  eventPersonResultsApparatusesRG?: Maybe<Array<Maybe<EventResultApparatusRg>>>;
  eventPersonResultsByCategoryCY?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsByCategoryFS?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsByCategoryRG?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsProgramScoresFS?: Maybe<Array<Maybe<EventResultProgramScoresFs>>>;
  eventPersonResultsProgramsFS?: Maybe<Array<Maybe<EventResultProgramFs>>>;
  eventResultBySportsmanCY?: Maybe<Array<Maybe<EventCompetitorScoreCy>>>;
  eventResultBySportsmanFS?: Maybe<Array<Maybe<EventCompetitorScoreFs>>>;
  eventResultBySportsmanRG?: Maybe<EventCompetitorScoreCardRg>;
  eventResultsBycategoryCY?: Maybe<EventResultByCategoryConnection>;
  eventResultsBycategoryFS?: Maybe<EventResultByCategoryConnection>;
  eventResultsBycategoryRG?: Maybe<EventResultByCategoryConnection>;
  eventResultsQueue?: Maybe<Array<Maybe<EventCompetitorQueueStatus>>>;
  eventVideos?: Maybe<Array<Maybe<EventVideo>>>;
  events?: Maybe<EventConnection>;
  federationTeamSquad?: Maybe<FederationTeamSquad>;
  federationTeamSquadMember?: Maybe<FederationTeamSquadMember>;
  federationTeamSquads?: Maybe<FederationTeamSquads>;
  fetchUploadXlsxQueue?: Maybe<XlsxQueue>;
  fetchUploadXlsxQueueList?: Maybe<XlsxQueueConnection>;
  formScheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  fsCommissionAccessLevel?: Maybe<FsCommissionAccessLevelEnum>;
  fsCommissionSeasons?: Maybe<Array<Maybe<FsInspectionCommissionSeason>>>;
  geocoder: Geocoder;
  geocoder_load_organizations?: Maybe<Scalars['Boolean']['output']>;
  getFiles?: Maybe<Array<Maybe<FileType>>>;
  getSportsman?: Maybe<Sportsman>;
  getUserData?: Maybe<AUser>;
  getUserInfo?: Maybe<UserInfo>;
  getUserSportType?: Maybe<Array<Maybe<SportType>>>;
  googleAuthLink?: Maybe<GoogleTokensType>;
  isFfkmResponsible?: Maybe<Scalars['Boolean']['output']>;
  judgingSystemExerciseRG?: Maybe<JudgingSystemExerciseRg>;
  legalentities?: Maybe<LegalentityConnection>;
  mailingQueueList: MailingQueueConnection;
  media?: Maybe<Media>;
  mobileNewsFeed?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobileSubscription?: Maybe<MobileAppSubscription>;
  mobileTabloV1Info?: Maybe<MobileTabloV1Info>;
  myEventCalendars?: Maybe<Array<Maybe<MyEventCalendar>>>;
  myEventNewAppsCount?: Maybe<Scalars['Int']['output']>;
  myEventRequests?: Maybe<MyEventRequestConnection>;
  myEvents?: Maybe<MyEventConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<NodeInterface>;
  nodeError?: Maybe<NodeError>;
  /** Fetches objects given their IDs */
  nodes: Array<Maybe<NodeInterface>>;
  organizationCalendars?: Maybe<CalendarConnection>;
  organizationPublicationEventHistory?: Maybe<Array<Maybe<OrganizationPublicationEvent>>>;
  organizationPublicationEvents?: Maybe<OrganizationPublicationEventConnection>;
  organizationReportYears?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  organizationReportsMedia?: Maybe<OrganizationReportMedia>;
  organizationStatistics?: Maybe<OrganizationStatistics>;
  organizations?: Maybe<OrganizationConnection>;
  organizationsCommonTree?: Maybe<Array<Maybe<OrganizationForLists>>>;
  parentCalendars?: Maybe<Array<Maybe<ParentCalendar>>>;
  paymentConfig?: Maybe<Array<Maybe<PaymentConfig>>>;
  personDoubles: PersonDoublesConnection;
  personEvents?: Maybe<Array<Maybe<SportsmanApplication>>>;
  persons?: Maybe<PersonConnection>;
  postwalls?: Maybe<PostwallConnection>;
  programs?: Maybe<Array<Maybe<SportProgram>>>;
  ranks: RankConnection;
  refereeingSystemVersion?: Maybe<RefereeingSystemVersion>;
  regions?: Maybe<Array<Maybe<Region>>>;
  resultsWidgetEvents?: Maybe<Array<Maybe<ResultsWidgetEvent>>>;
  rgEventRulesEdition?: Maybe<EventRgJudgingRulesEditionEnum>;
  saveEventCompetitorQueueStatus?: Maybe<EventCompetitorQueueStatus>;
  scoreNames?: Maybe<Array<Maybe<ScoreName>>>;
  seasons?: Maybe<SportSeasonConnection>;
  siteSettings?: Maybe<Array<Maybe<SiteSettings>>>;
  sportRank?: Maybe<Array<Maybe<SportRank>>>;
  sportType?: Maybe<SportType>;
  sportTypes: SportTypeConnection;
  sportsmanEventCompetitorPhotoGroups?: Maybe<SportsmanEventCompetitorGroupPhotoConnection>;
  sportsmanEventResults?: Maybe<Array<Maybe<EventCategoryResults>>>;
  sportsmanEvents?: Maybe<Array<Maybe<SportsmanApplication>>>;
  sportsmans?: Maybe<SportsmanConnection>;
  sportsmansOrganizationFlatList?: Maybe<SportsmanConnection>;
  sportsmenForInspectionCommission?: Maybe<SportsmanConnection>;
  telegramUserSubscriptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userFederations?: Maybe<Array<Maybe<UserFederation>>>;
  videostandById?: Maybe<Videostand>;
  videostandBySid?: Maybe<Videostand>;
  videostandEvents?: Maybe<VideostandEvents>;
  videostandVideo?: Maybe<Scalars['JSON']['output']>;
  videostands?: Maybe<Array<Maybe<Videostand>>>;
  webjudgingScoresRG?: Maybe<Array<Maybe<WebJudgeScoreRg>>>;
};


/** Query interface */
export type QueryAccommodationsForPaymentArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<ApplicationListFilter>;
};


/** Query interface */
export type QueryAdvManagerInListArgs = {
  adv_block?: InputMaybe<AdvBlockEnum>;
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<AdvListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  random?: InputMaybe<Scalars['Boolean']['input']>;
  show_off_status?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryAdvManagerInListItemArgs = {
  adv_block?: InputMaybe<AdvBlockEnum>;
  id: Scalars['Int']['input'];
  show_off_status?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryAppUserAlertsArgs = {
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryApplicationPaymentInfoByPaymentIdArgs = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryApplicationsForPaymentArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<ApplicationListFilter>;
};


/** Query interface */
export type QueryAusersArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QueryCalendarsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<SearchStringFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryCheckEmailArgs = {
  email: Scalars['String']['input'];
};


/** Query interface */
export type QueryCheckTokenArgs = {
  token: Scalars['String']['input'];
};


/** Query interface */
export type QueryCheckWebJudgingUidArgs = {
  event_id: Scalars['ID']['input'];
  judging_uid: Scalars['String']['input'];
};


/** Query interface */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryCoachSportsmansArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryCoachesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CoachListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']['input']>;
  only_past_in_org?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryCoachesByOrganizationArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CoachListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryDisciplinesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryEventAccomodationSchemeArgs = {
  event_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventAccomodatonsArgs = {
  app_payment_status?: InputMaybe<Array<InputMaybe<PaymentStatusEnum>>>;
  app_status?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<AccomodationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryEventAdvertisingArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  place: EventAdvertisingPlaceEnum;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryEventApplicationOrganizationsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  event_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QueryEventApplicationPersonsArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<ApplicationPersonsFilter>;
  skip_statuses?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
};


/** Query interface */
export type QueryEventApplicationsArgs = {
  always_show_applications?: InputMaybe<Scalars['Boolean']['input']>;
  app_payment_status?: InputMaybe<Array<InputMaybe<PaymentStatusEnum>>>;
  app_status?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<ApplicationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  show_empty_categories?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryEventApplicationsByCategoryArgs = {
  always_show_applications?: InputMaybe<Scalars['Boolean']['input']>;
  app_payment_status?: InputMaybe<PaymentStatusEnum>;
  app_status?: InputMaybe<ApplicationStatusEnum>;
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<ApplicationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  show_empty_categories?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryEventCompetitorPhotoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<EventCompetitorPhotoFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryEventCompetitorPhotosArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group_hash: Scalars['String']['input'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceCyArgs = {
  competitor_id: Scalars['String']['input'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceFsArgs = {
  competitor_id: Scalars['String']['input'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceRgArgs = {
  competitor_id: Scalars['String']['input'];
  event_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventCompetitorVideoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sportsman_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryEventForJudgingSystemsArgs = {
  event_judging_uid: Scalars['String']['input'];
  sport_type: Scalars['String']['input'];
};


/** Query interface */
export type QueryEventOlympicoDocumentsArgs = {
  event_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventPersonResultsApparatusScoresRgArgs = {
  apparatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportsman_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventPersonResultsApparatusesRgArgs = {
  sportsman_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryCyArgs = {
  event_id: Scalars['Int']['input'];
  person_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryFsArgs = {
  event_id: Scalars['Int']['input'];
  person_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryRgArgs = {
  event_id: Scalars['ID']['input'];
  person_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventPersonResultsProgramScoresFsArgs = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportsman_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventPersonResultsProgramsFsArgs = {
  sportsman_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventResultBySportsmanCyArgs = {
  competitor_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryEventResultBySportsmanFsArgs = {
  competitor_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryEventResultBySportsmanRgArgs = {
  apparatus: Scalars['String']['input'];
  competitor_id: Scalars['String']['input'];
  rg_rules_edition: EventRgJudgingRulesEditionEnum;
};


/** Query interface */
export type QueryEventResultsBycategoryCyArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean']['input'];
};


/** Query interface */
export type QueryEventResultsBycategoryFsArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean']['input'];
};


/** Query interface */
export type QueryEventResultsBycategoryRgArgs = {
  event_id: Scalars['ID']['input'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean']['input'];
};


/** Query interface */
export type QueryEventResultsQueueArgs = {
  ids: Array<InputMaybe<Scalars['Int']['input']>>;
};


/** Query interface */
export type QueryEventVideosArgs = {
  event_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  calendar_id?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<EventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryFederationTeamSquadArgs = {
  id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryFederationTeamSquadMemberArgs = {
  id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryFederationTeamSquadsArgs = {
  filter?: InputMaybe<TeamSquadsFilter>;
  sort_order?: InputMaybe<OrderByTypeEnum>;
  sort_type?: InputMaybe<TeamSquadsSortTypeEnum>;
};


/** Query interface */
export type QueryFetchUploadXlsxQueueArgs = {
  id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryFetchUploadXlsxQueueListArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  entity: Scalars['String']['input'];
  entity_id: Scalars['Int']['input'];
  filter?: InputMaybe<XlsxQueueFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  operation_type: XlsxQueueOperationTypeEnum;
  status?: InputMaybe<Array<InputMaybe<XlsxQueueStatusEnum>>>;
};


/** Query interface */
export type QueryFormSchemeArgs = {
  form: FormSchemeEnum;
  sport_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryFsCommissionAccessLevelArgs = {
  context: FsCommissionContextEnum;
  object_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryFsCommissionSeasonsArgs = {
  organization_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Query interface */
export type QueryGeocoderArgs = {
  geocode?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QueryGetFilesArgs = {
  document: Scalars['String']['input'];
  entity: Scalars['String']['input'];
  entity_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryGetSportsmanArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['Int']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryGetUserDataArgs = {
  auser_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryGetUserInfoArgs = {
  sid: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


/** Query interface */
export type QueryJudgingSystemExerciseRgArgs = {
  event_id: Scalars['ID']['input'];
  judge_team: Scalars['Int']['input'];
  judge_type: RgJudgeTypeEnum;
};


/** Query interface */
export type QueryLegalentitiesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  calendar_id?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryMailingQueueListArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<MailingQueueListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryMediaArgs = {
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  owner_type?: InputMaybe<MediaOwnerTypeEnum>;
  parent_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaActionTypeEnum>;
};


/** Query interface */
export type QueryMobileNewsFeedArgs = {
  feed_type: Scalars['String']['input'];
  object_id?: InputMaybe<Scalars['Int']['input']>;
  object_type?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_add?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryMyEventRequestsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<EventToParentCalendarRequestsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Query interface */
export type QueryMyEventsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<EventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Query interface */
export type QueryNodeArgs = {
  filter?: InputMaybe<NodeFilter>;
  id: Scalars['ID']['input'];
  table: Scalars['String']['input'];
};


/** Query interface */
export type QueryNodeErrorArgs = {
  id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryNodesArgs = {
  filter?: InputMaybe<NodeFilter>;
  ids: Array<Scalars['ID']['input']>;
  table: Scalars['String']['input'];
};


/** Query interface */
export type QueryOrganizationCalendarsArgs = {
  organization_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryOrganizationPublicationEventHistoryArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryOrganizationPublicationEventsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  archive?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  parentless?: InputMaybe<Scalars['Boolean']['input']>;
  sport_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryOrganizationReportsMediaArgs = {
  organization_id?: InputMaybe<Scalars['ID']['input']>;
  report_year?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryOrganizationStatisticsArgs = {
  organization_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  coach_id?: InputMaybe<Scalars['ID']['input']>;
  exclude_organizations?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  exclude_organizations_and_its_subordinates?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  exclude_revise_state?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter_fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  only_active?: InputMaybe<Scalars['Boolean']['input']>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  org_type?: InputMaybe<Array<InputMaybe<OrgTypeEnum>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  parent_organization1?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
  revise_state?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sort_by?: InputMaybe<OrgSortByEnum>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  sporttype_id: Scalars['Int']['input'];
  subordinate_only?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryOrganizationsCommonTreeArgs = {
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  organizations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  show_base_orgs?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Query interface */
export type QueryParentCalendarsArgs = {
  calendar_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryPersonDoublesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Array<InputMaybe<PersonDoublesStateEnum>>>;
};


/** Query interface */
export type QueryPersonEventsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<EventPersonEventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  person_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryPersonsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<PersonFilterType>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryPostwallsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  entity?: InputMaybe<Array<InputMaybe<PostwallEntity>>>;
  entity_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  parent_id: Scalars['ID']['input'];
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QueryProgramsArgs = {
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryRanksArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QueryRefereeingSystemVersionArgs = {
  federation_filter: Scalars['String']['input'];
};


/** Query interface */
export type QueryResultsWidgetEventsArgs = {
  athlete_search?: InputMaybe<Scalars['String']['input']>;
  calendar_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryRgEventRulesEditionArgs = {
  event_id: Scalars['ID']['input'];
};


/** Query interface */
export type QuerySaveEventCompetitorQueueStatusArgs = {
  queue_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryScoreNamesArgs = {
  sport_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySeasonsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySiteSettingsArgs = {
  title?: InputMaybe<Array<InputMaybe<SiteSettingsEnum>>>;
};


/** Query interface */
export type QuerySportRankArgs = {
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};


/** Query interface */
export type QuerySportTypeArgs = {
  federation_filter?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Query interface */
export type QuerySportTypesArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QuerySportsmanEventCompetitorPhotoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sportsman_id: Scalars['ID']['input'];
};


/** Query interface */
export type QuerySportsmanEventResultsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  event_id: Scalars['Int']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  sportsman_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySportsmanEventsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sportsman_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySportsmansArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  coach_id?: InputMaybe<Scalars['ID']['input']>;
  exclude?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_widget?: InputMaybe<Scalars['Boolean']['input']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']['input']>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  only_past_in_org?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  parent_organization1?: InputMaybe<Scalars['Int']['input']>;
  sort_order?: InputMaybe<Scalars['String']['input']>;
  sort_type?: InputMaybe<Scalars['String']['input']>;
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySportsmansOrganizationFlatListArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  only_active?: InputMaybe<Scalars['Boolean']['input']>;
  only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QuerySportsmenForInspectionCommissionArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id: Scalars['Int']['input'];
  sporttype_id: Scalars['Int']['input'];
};


/** Query interface */
export type QueryTelegramUserSubscriptionsArgs = {
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
};


/** Query interface */
export type QueryUserFederationsArgs = {
  sport_id?: InputMaybe<Scalars['ID']['input']>;
};


/** Query interface */
export type QueryVideostandByIdArgs = {
  id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryVideostandBySidArgs = {
  sid: Scalars['String']['input'];
};


/** Query interface */
export type QueryVideostandEventsArgs = {
  videostand_id: Scalars['ID']['input'];
};


/** Query interface */
export type QueryVideostandVideoArgs = {
  videostand_sid: Scalars['String']['input'];
};


/** Query interface */
export type QueryWebjudgingScoresRgArgs = {
  event_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** Статусы выступлений в ХГ */
export enum RgExerciseStatusEnum {
  /** DNF */
  Dnf = 'dnf',
  /** DNS */
  Dns = 'dns',
  /** DSQ */
  Dsq = 'dsq',
  /** Статус выступления не определен */
  None = 'none',
  /** Участник на ковре */
  Oncarpet = 'oncarpet',
  /** Оценка за выступление выставлена */
  Scored = 'scored',
  /** Участник ушел с ковра, получает ценки */
  Scoring = 'scoring',
  /** Оценка за выступление утверждена */
  Signed = 'signed'
}

/** Состояние выступления в ХГ при сохранении нового состояния выступления */
export enum RgExerciseStatusInputEnum {
  /** DNF */
  Dnf = 'dnf',
  /** DNS */
  Dns = 'dns',
  /** DSQ */
  Dsq = 'dsq',
  /** Участник на ковре */
  Oncarpet = 'oncarpet',
  /** Участник ушел с ковра */
  Outcarpet = 'outcarpet',
  /** Оценка за выступление выставлена */
  Scored = 'scored',
  /** Оценка за выступление утверждена */
  Signed = 'signed'
}

/** Роли судей по ХГ */
export enum RgJudgeTypeEnum {
  JudgeA1 = 'judge_a1',
  JudgeA2 = 'judge_a2',
  JudgeA3 = 'judge_a3',
  JudgeA4 = 'judge_a4',
  JudgeD1 = 'judge_d1',
  JudgeD2 = 'judge_d2',
  JudgeD3 = 'judge_d3',
  JudgeD4 = 'judge_d4',
  JudgeE1 = 'judge_e1',
  JudgeE2 = 'judge_e2',
  JudgeE3 = 'judge_e3',
  JudgeE4 = 'judge_e4',
  JudgeE5 = 'judge_e5',
  JudgeE6 = 'judge_e6',
  JudgeL1 = 'judge_l1',
  JudgeL2 = 'judge_l2',
  JudgeT = 'judge_t',
  SjDa = 'sj_da',
  SjDb = 'sj_db',
  SjEa = 'sj_ea',
  SjEt = 'sj_et'
}

/** Rank type definition */
export type Rank = NodeInterface & {
  __typename?: 'Rank';
  id: Scalars['ID']['output'];
  required_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  short_title?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** RankConnection type definition */
export type RankConnection = {
  __typename?: 'RankConnection';
  edges?: Maybe<Array<Maybe<Rank>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** RefereeingSystemVersion type definition */
export type RefereeingSystemVersion = {
  __typename?: 'RefereeingSystemVersion';
  count_downloads?: Maybe<Scalars['Int']['output']>;
  count_downloads_all?: Maybe<Scalars['Int']['output']>;
  creator_id?: Maybe<Scalars['Int']['output']>;
  dt_create?: Maybe<Scalars['DateTimeType']['output']>;
  filter: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  is_actual?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** Region type definition */
export type Region = NodeInterface & {
  __typename?: 'Region';
  cities?: Maybe<Array<Maybe<City>>>;
  country?: Maybe<Country>;
  country_id?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['String']['output']>;
  shortname?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** RegistrationFee type definition */
export type RegistrationFee = NodeInterface & {
  __typename?: 'RegistrationFee';
  active: Scalars['Boolean']['output'];
  commission_inner: Scalars['Float']['output'];
  commission_inner_percent: Scalars['Float']['output'];
  commission_outer: Scalars['Float']['output'];
  commission_outer_percent: Scalars['Float']['output'];
  dt_due_payment?: Maybe<Scalars['DateType']['output']>;
  dt_start_payment?: Maybe<Scalars['DateType']['output']>;
  id: Scalars['ID']['output'];
  legalentity_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  subject: RegistrationFeeSubjectEnum;
  table: Scalars['String']['output'];
};

export type RegistrationFeeInput = {
  active: Scalars['Boolean']['input'];
  commission_inner_percent: Scalars['Float']['input'];
  commission_outer_percent: Scalars['Float']['input'];
  dt_due_payment?: InputMaybe<Scalars['DateType']['input']>;
  dt_start_payment?: InputMaybe<Scalars['DateType']['input']>;
  legalentity_id: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  season_id?: InputMaybe<Scalars['ID']['input']>;
  subject: RegistrationFeeSubjectEnum;
};

export type RegistrationFeeOrderInput = {
  after_redirect: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  persons?: InputMaybe<Array<InputMaybe<RegistrationFeeOrderPersonsInput>>>;
  season_id: Scalars['Int']['input'];
};

export type RegistrationFeeOrderPersonsInput = {
  amount: Scalars['Float']['input'];
  subject: RegistrationFeeSubjectEnum;
  subject_id: Scalars['Int']['input'];
};

/** RegistrationFeePaymentURL type definition */
export type RegistrationFeePaymentUrl = {
  __typename?: 'RegistrationFeePaymentURL';
  amount?: Maybe<Scalars['Float']['output']>;
  amount_with_commission?: Maybe<Scalars['Float']['output']>;
  commission?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_url?: Maybe<Scalars['String']['output']>;
};

export enum RegistrationFeeSubjectEnum {
  Athlete = 'athlete',
  Coach = 'coach'
}

/** ResultsWidgetEvent type definition */
export type ResultsWidgetEvent = {
  __typename?: 'ResultsWidgetEvent';
  count_results?: Maybe<Scalars['Int']['output']>;
  description_place?: Maybe<Scalars['String']['output']>;
  dt_end?: Maybe<Scalars['DateType']['output']>;
  dt_start?: Maybe<Scalars['DateType']['output']>;
  id: Scalars['ID']['output'];
  short_title?: Maybe<Scalars['String']['output']>;
  sport_key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** Roles */
export type Roles = {
  __typename?: 'Roles';
  has_active_organizations?: Maybe<Scalars['Boolean']['output']>;
  has_calendars?: Maybe<Scalars['Boolean']['output']>;
  has_organizations?: Maybe<Scalars['Boolean']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  isFinanceAdmin?: Maybe<Scalars['Boolean']['output']>;
  isModerator?: Maybe<Scalars['Boolean']['output']>;
  is_admin?: Maybe<Scalars['Boolean']['output']>;
  is_federator?: Maybe<Scalars['Boolean']['output']>;
  is_finance_admin?: Maybe<Scalars['Boolean']['output']>;
  is_moderator?: Maybe<Scalars['Boolean']['output']>;
  is_super_federator?: Maybe<Scalars['Boolean']['output']>;
  /** "дерево" организаций пользователя начиная от организции(ий), за которую пользователь отвечает и все подчиненные и вышестоящие */
  organization_tree?: Maybe<Array<Maybe<UserOrganizationTreeItem>>>;
};

/** ScoreName type definition */
export type ScoreName = {
  __typename?: 'ScoreName';
  category_type: EventCompetitorTypeEnum;
  char_id: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  manual_char_id?: Maybe<Scalars['String']['output']>;
  recommended: Scalars['Int']['output'];
  short_title: Scalars['String']['output'];
  show_as_popup: Scalars['Int']['output'];
  sort_order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type SearchStringFilter = {
  search_string?: InputMaybe<Scalars['String']['input']>;
};

/** Season type definition */
export type Season = {
  __typename?: 'Season';
  dt_end?: Maybe<Scalars['String']['output']>;
  dt_start?: Maybe<Scalars['String']['output']>;
  id_season: Scalars['ID']['output'];
  limit?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
};

/** ShortOrganizationInput type definition */
export type ShortOrganizationInput = {
  display_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  protocol_name?: InputMaybe<Scalars['String']['input']>;
  short_title?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** SiteSettings type definition */
export type SiteSettings = {
  __typename?: 'SiteSettings';
  comment?: Maybe<Scalars['String']['output']>;
  title: SiteSettingsEnum;
  value: Scalars['String']['output'];
};

/** Настройки сайта из таблицы site_settings */
export enum SiteSettingsEnum {
  /** on/off */
  AdvStatus = 'adv_status',
  /** как отображать удаленного пользователя */
  DeletedUserDisplayName = 'deleted_user_display_name'
}

export type SiteSettingsInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  title: SiteSettingsEnum;
  value: Scalars['String']['input'];
};

/** SportProgram type definition */
export type SportProgram = {
  __typename?: 'SportProgram';
  id: Scalars['ID']['output'];
  is_custom?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['String']['output']>;
  sporttype_id?: Maybe<Scalars['String']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

/** SportType type definition */
export type SportRank = NodeInterface & {
  __typename?: 'SportRank';
  id: Scalars['ID']['output'];
  short_title?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** Определяет группы спортивных разрядов. */
export enum SportRankRangeEnum {
  /** КМС и выше */
  KmsAndHigher = 'kms_and_higher',
  /** 1С - 2С */
  S1S2 = 's1_s2',
  /** 3С и ниже */
  S3AndLower = 's3_and_lower'
}

/** SportSeason type definition */
export type SportSeason = NodeInterface & {
  __typename?: 'SportSeason';
  dt_begin: Scalars['DateType']['output'];
  dt_end: Scalars['DateType']['output'];
  has_payments: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  registration_fee?: Maybe<RegistrationFee>;
  sport_id: Scalars['Int']['output'];
  table: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** SportSeason type definition */
export type SportSeasonRegistration_FeeArgs = {
  subject: Scalars['String']['input'];
};

/** SportSeasonConnection type definition */
export type SportSeasonConnection = {
  __typename?: 'SportSeasonConnection';
  edges?: Maybe<Array<Maybe<SportSeason>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SportSeasonInput = {
  dt_begin: Scalars['DateType']['input'];
  dt_end: Scalars['DateType']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  sport_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

/** SportSeasonSubjectPayment type definition */
export type SportSeasonSubjectPayment = {
  __typename?: 'SportSeasonSubjectPayment';
  amount_to_pay: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  balance_commission: Scalars['Float']['output'];
  commission_to_pay: Scalars['Float']['output'];
  dt_begin: Scalars['DateType']['output'];
  dt_end: Scalars['DateType']['output'];
  full_commission: Scalars['Float']['output'];
  full_price: Scalars['Float']['output'];
  paid: Scalars['Float']['output'];
  paid_commission: Scalars['Float']['output'];
  season_id: Scalars['ID']['output'];
  season_title: Scalars['String']['output'];
  sport_id: Scalars['Int']['output'];
};

export type SportSeasonWithRegistrationFeeInput = {
  dt_begin: Scalars['DateType']['input'];
  dt_end: Scalars['DateType']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  sport_id: Scalars['Int']['input'];
  sportsman_fee: RegistrationFeeInput;
  title: Scalars['String']['input'];
};

/**
 *
 *   Метаинформация по виду спорта.
 *   Можно запрашивать как по цифровому ID так и по текстовому ключу.
 */
export type SportType = NodeInterface & {
  __typename?: 'SportType';
  displayName?: Maybe<Scalars['String']['output']>;
  /** Буквенный код вида спорта. Используется в адресах веб-страниц. */
  federation_filter?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_as_is?: Maybe<Scalars['Boolean']['output']>;
  is_published?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  table: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** SportTypeConnection type definition */
export type SportTypeConnection = {
  __typename?: 'SportTypeConnection';
  edges?: Maybe<Array<Maybe<SportType>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Sportsman type definition */
export type Sportsman = NodeInterface & {
  __typename?: 'Sportsman';
  achievements?: Maybe<Scalars['String']['output']>;
  /** @deprecated использовать поле "coaches" */
  coach?: Maybe<Array<Maybe<Coach>>>;
  /** Тренеры спортсмена */
  coaches?: Maybe<Array<Maybe<Coach>>>;
  current_season_flags?: Maybe<SportsmanCurrentSeasonPayFlags>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  documents?: Maybe<SportsmanDocuments>;
  id: Scalars['ID']['output'];
  id_ias_sport?: Maybe<Scalars['String']['output']>;
  inspection_dates?: Maybe<AthleteInspectionDates>;
  inspection_ranks?: Maybe<Array<Maybe<AthleteRankTest>>>;
  is_rank_uploaded_from_ias?: Maybe<Scalars['Boolean']['output']>;
  is_verified?: Maybe<Scalars['Int']['output']>;
  not_in_school: Scalars['Boolean']['output'];
  /** организации, в которых спортсмен занимался / занимается */
  organizations?: Maybe<Array<Maybe<SportsmanOrganizationItem>>>;
  over_time_editing: Scalars['Boolean']['output'];
  /** Персона спортсмена */
  person?: Maybe<Person>;
  /** ИД персоны (person_id) */
  person_id?: Maybe<Scalars['Int']['output']>;
  photos_available: Scalars['Boolean']['output'];
  rank?: Maybe<Scalars['Int']['output']>;
  rank_ias_order_number?: Maybe<Scalars['String']['output']>;
  rank_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  rating_rank?: Maybe<Scalars['Int']['output']>;
  rating_result?: Maybe<Scalars['String']['output']>;
  /** ИД вида спорта */
  sport_id?: Maybe<Scalars['Int']['output']>;
  sportrank?: Maybe<Rank>;
  sportrank_id?: Maybe<Scalars['Int']['output']>;
  /** ИД спортсмена (athlete_id) */
  sportsman_id: Scalars['ID']['output'];
  /**
   * статус спортсмена (проверен / на проверке и прочее...)
   * @deprecated Статус спортсмена больше не используется
   */
  sportsman_status?: Maybe<Scalars['String']['output']>;
  /** ИД вида спорта */
  sporttype_id?: Maybe<Scalars['Int']['output']>;
  table: Scalars['String']['output'];
  unpaidSeasons?: Maybe<Array<Maybe<SportSeasonSubjectPayment>>>;
};


/** Sportsman type definition */
export type SportsmanCoachesArgs = {
  only_active?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['ID']['input']>;
  use_query_filter_organization_id?: InputMaybe<Scalars['Boolean']['input']>;
  use_source_organization_id?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sportsman type definition */
export type SportsmanOrganizationsArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
  use_query_filter_organization_id?: InputMaybe<Scalars['Boolean']['input']>;
  use_query_only_mine?: InputMaybe<Scalars['Boolean']['input']>;
  use_source?: InputMaybe<Scalars['Boolean']['input']>;
};

/** SportsmanApplication is shows applications of a concrete person */
export type SportsmanApplication = {
  __typename?: 'SportsmanApplication';
  city?: Maybe<Scalars['String']['output']>;
  city_id?: Maybe<Scalars['String']['output']>;
  coach?: Maybe<Coach>;
  coach_id?: Maybe<Scalars['Int']['output']>;
  coach_name?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['String']['output']>;
  dt_begin?: Maybe<Scalars['String']['output']>;
  dt_end?: Maybe<Scalars['String']['output']>;
  has_scores?: Maybe<Scalars['Boolean']['output']>;
  has_video?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  organization_title?: Maybe<Scalars['String']['output']>;
  region_id?: Maybe<Scalars['String']['output']>;
};

/** SportsmanApplicationResults */
export type SportsmanApplicationResults = {
  __typename?: 'SportsmanApplicationResults';
  category_title?: Maybe<Scalars['String']['output']>;
  categoty_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  score_extra_value?: Maybe<Scalars['String']['output']>;
  score_position?: Maybe<Scalars['Int']['output']>;
  score_title?: Maybe<Scalars['String']['output']>;
  score_value?: Maybe<Scalars['Float']['output']>;
  total_position?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['String']['output']>;
};

/** SportsmanConnection type definition */
export type SportsmanConnection = {
  __typename?: 'SportsmanConnection';
  edges?: Maybe<Array<Maybe<Sportsman>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  overview?: Maybe<SportsmanStatusOverview>;
  parent_organization1?: Maybe<Organization>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** SportsmanCurrentSeasonPayFlags type definition */
export type SportsmanCurrentSeasonPayFlags = {
  __typename?: 'SportsmanCurrentSeasonPayFlags';
  is_exist_current_season?: Maybe<Scalars['Boolean']['output']>;
  is_paid_current_season?: Maybe<Scalars['Boolean']['output']>;
};

/** SportsmanDeletingProhibits type definition */
export type SportsmanDeletingProhibits = {
  __typename?: 'SportsmanDeletingProhibits';
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** SportsmanDocuments type definition */
export type SportsmanDocuments = {
  __typename?: 'SportsmanDocuments';
  athlete_agreement?: Maybe<FileType>;
  athlete_insurance?: Maybe<FileType>;
  athlete_medcert?: Maybe<FileType>;
  id_birth_cert?: Maybe<FileType>;
  id_passport?: Maybe<FileType>;
  record_book?: Maybe<SportsmanDocumentsRecordBook>;
};

/** SportsmanDocumentsRecordBook type definition */
export type SportsmanDocumentsRecordBook = {
  __typename?: 'SportsmanDocumentsRecordBook';
  hi?: Maybe<Array<Maybe<FileType>>>;
  low?: Maybe<Array<Maybe<FileType>>>;
};

/** SportsmanEventCompetitorGroupPhotoConnection type definition */
export type SportsmanEventCompetitorGroupPhotoConnection = {
  __typename?: 'SportsmanEventCompetitorGroupPhotoConnection';
  edges?: Maybe<Array<Maybe<SportsmanEventCompetitorNameGroupPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** SportsmanEventCompetitorNameGroupPhoto type definition */
export type SportsmanEventCompetitorNameGroupPhoto = {
  __typename?: 'SportsmanEventCompetitorNameGroupPhoto';
  event_city?: Maybe<Scalars['String']['output']>;
  event_dt_begin?: Maybe<Scalars['DateType']['output']>;
  event_dt_end?: Maybe<Scalars['DateType']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  event_sport_federation_filter?: Maybe<Scalars['String']['output']>;
  event_title?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<EventCompetitorGroupPhoto>>>;
  photo_count?: Maybe<Scalars['Int']['output']>;
};

/** SportsmanEventVideo type definition */
export type SportsmanEventVideo = {
  __typename?: 'SportsmanEventVideo';
  apparatus?: Maybe<Scalars['String']['output']>;
  apparatus_title?: Maybe<Scalars['String']['output']>;
  category_title?: Maybe<Scalars['String']['output']>;
  day_action?: Maybe<Scalars['DateType']['output']>;
  duration_on_carpet?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  preview_link: Scalars['String']['output'];
  time_start_on_carpet?: Maybe<Scalars['Int']['output']>;
};

export type SportsmanListFilter = {
  athlete_status?: InputMaybe<AthleteStatusEnum>;
  dt_birthday?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<PersonGenderEnum>;
  id_ias_sport?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  parent_organization1?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['String']['input']>;
  sportrank_id?: InputMaybe<Scalars['ID']['input']>;
  sportrank_range?: InputMaybe<SportRankRangeEnum>;
  status?: InputMaybe<ContingentSportsmanStatusTypeEnum>;
};

/** SportsmanOrganizationCoach type definition */
export type SportsmanOrganizationCoach = {
  __typename?: 'SportsmanOrganizationCoach';
  active: Scalars['Boolean']['output'];
  coach?: Maybe<Coach>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  from_month?: Maybe<Scalars['MonthType']['output']>;
  from_year?: Maybe<Scalars['Int']['output']>;
  is_main: Scalars['Boolean']['output'];
  non_active: Scalars['Boolean']['output'];
  over_time_editing: Scalars['Boolean']['output'];
  to_month?: Maybe<Scalars['MonthType']['output']>;
  to_year?: Maybe<Scalars['Int']['output']>;
};

/** SportsmanOrganizationItem type definition */
export type SportsmanOrganizationItem = {
  __typename?: 'SportsmanOrganizationItem';
  coaches?: Maybe<Array<Maybe<SportsmanOrganizationCoach>>>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  organization: Organization;
  over_time_editing: Scalars['Boolean']['output'];
};

/** SportsmanStatusOverview type definition */
export type SportsmanStatusOverview = {
  __typename?: 'SportsmanStatusOverview';
  expired?: Maybe<Scalars['Int']['output']>;
  inspect?: Maybe<Scalars['Int']['output']>;
};

/** Subscription interface */
export type Subscription = {
  __typename?: 'Subscription';
  webJudgeExerciseStateRGSubscribe?: Maybe<JudgingSystemExerciseRg>;
  webJudgeScoreRGSubscribe?: Maybe<WebJudgeScoreRg>;
};


/** Subscription interface */
export type SubscriptionWebJudgeExerciseStateRgSubscribeArgs = {
  event_id: Scalars['ID']['input'];
  judge_team: Scalars['Int']['input'];
  judge_type: RgJudgeTypeEnum;
};


/** Subscription interface */
export type SubscriptionWebJudgeScoreRgSubscribeArgs = {
  event_id?: InputMaybe<Scalars['ID']['input']>;
};

export type TeamSquadsFilter = {
  display_out_members?: InputMaybe<Scalars['Boolean']['input']>;
  member_name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['ID']['input']>;
  year_active_from?: InputMaybe<Scalars['Int']['input']>;
};

export enum TeamSquadsSortTypeEnum {
  Name = 'name'
}

/** TelegramChatConnection type definition */
export type TelegramChatConnection = {
  __typename?: 'TelegramChatConnection';
  site_user?: Maybe<AUser>;
  status?: Maybe<Scalars['String']['output']>;
};

/** TelegramUserInput type definition */
export type TelegramUserInput = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  is_bot?: InputMaybe<Scalars['Boolean']['input']>;
  language_code?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Float']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** UserFederation type definition */
export type UserFederation = {
  __typename?: 'UserFederation';
  id: Scalars['ID']['output'];
  sport_id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** UserInfo */
export type UserInfo = {
  __typename?: 'UserInfo';
  self?: Maybe<AUser>;
  user?: Maybe<AUser>;
};

/** Элемент дерева организаций пользователя */
export type UserOrganizationTreeItem = {
  __typename?: 'UserOrganizationTreeItem';
  /** Array список всех вышестоящих организаций по отношению к текущей */
  branchmark?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Уровень организации. 0 - пользователь является непосредственным ответственным, <Number> - пользователь отвечает за вышестоящую организацию */
  level: Scalars['Int']['output'];
  /** ИД организации */
  organization_id: Scalars['Int']['output'];
  /** ИД вышестоящей организации (куратора) */
  parent_organization1_id: Scalars['Int']['output'];
  revise_state: Scalars['String']['output'];
  /** Вид спорта */
  sport_type: Scalars['String']['output'];
};

export type UserProfileInput = {
  auser_id?: InputMaybe<Scalars['ID']['input']>;
  birthday?: InputMaybe<Scalars['DateType']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  gender?: InputMaybe<PersonGenderEnum>;
  last_name: Scalars['String']['input'];
  patronymic: Scalars['String']['input'];
  sport_types?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UserSportType = {
  __typename?: 'UserSportType';
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Videostand type definition */
export type Videostand = {
  __typename?: 'Videostand';
  active: Scalars['Boolean']['output'];
  auser_id: Scalars['ID']['output'];
  current_and_upcoming_event_count: Scalars['Int']['output'];
  dt_create: Scalars['DateTimeType']['output'];
  dt_modify?: Maybe<Scalars['DateTimeType']['output']>;
  finished_event_count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  sid: Scalars['String']['output'];
  stream_params: VideostandParams;
  stream_summary: VideostandSummary;
  table: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** VideostandEvent type definition */
export type VideostandEvent = {
  __typename?: 'VideostandEvent';
  dt_create: Scalars['DateTimeType']['output'];
  dt_end?: Maybe<Scalars['DateTimeType']['output']>;
  dt_start?: Maybe<Scalars['DateTimeType']['output']>;
  id: Scalars['ID']['output'];
  is_main: Scalars['Boolean']['output'];
  table: Scalars['String']['output'];
  title: Scalars['String']['output'];
  videostand_id: Scalars['ID']['output'];
};

/** VideostandEventInput type definition */
export type VideostandEventInput = {
  dt_end: Scalars['DateTimeType']['input'];
  dt_start: Scalars['DateTimeType']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  is_main: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  videostand_id: Scalars['ID']['input'];
};

/** VideostandEvents type definition */
export type VideostandEvents = {
  __typename?: 'VideostandEvents';
  current_and_upcoming?: Maybe<Array<Maybe<VideostandEvent>>>;
  finished?: Maybe<Array<Maybe<VideostandEvent>>>;
  table: Scalars['String']['output'];
};

/** VideostandInput type definition */
export type VideostandInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sid?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

/** VideostandParams type definition */
export type VideostandParams = {
  __typename?: 'VideostandParams';
  country?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  sport?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

/** VideostandStreamParamsInput type definition */
export type VideostandStreamParamsInput = {
  country?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sport?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/** VideostandSummary type definition */
export type VideostandSummary = {
  __typename?: 'VideostandSummary';
  duration?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** Оценка судьи для модуля веб-судья */
export type WebJudgeScoreRg = {
  __typename?: 'WebJudgeScoreRG';
  apparatus: Scalars['String']['output'];
  category_id: Scalars['ID']['output'];
  competitor_id: Scalars['ID']['output'];
  event_id: Scalars['ID']['output'];
  is_accepted?: Maybe<Scalars['Boolean']['output']>;
  judge_type: RgJudgeTypeEnum;
  score?: Maybe<Scalars['Float']['output']>;
};

/** Оценка за выступление из модуля web-судья (ХГ) */
export type WebJudgeScoreRgInput = {
  apparatus: Scalars['String']['input'];
  category_id: Scalars['ID']['input'];
  competitor_id: Scalars['ID']['input'];
  event_id: Scalars['ID']['input'];
  judge_type: RgJudgeTypeEnum;
  score?: InputMaybe<Scalars['Float']['input']>;
};

/** XlsxQueue type definition */
export type XlsxQueue = {
  __typename?: 'XlsxQueue';
  creator?: Maybe<AUser>;
  entity: Scalars['String']['output'];
  entity_id: Scalars['Int']['output'];
  extra_data?: Maybe<Scalars['JSON']['output']>;
  file?: Maybe<FileType>;
  id: Scalars['Int']['output'];
  last_error?: Maybe<Scalars['String']['output']>;
  operation_type?: Maybe<Scalars['String']['output']>;
  progress_done: Scalars['Int']['output'];
  progress_total: Scalars['Int']['output'];
  status: XlsxQueueStatusEnum;
};

/** XlsxQueueConnection type definition */
export type XlsxQueueConnection = {
  __typename?: 'XlsxQueueConnection';
  edges?: Maybe<Array<Maybe<XlsxQueue>>>;
  filtered_total?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type XlsxQueueFilter = {
  file_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<InputMaybe<XlsxQueueStatusEnum>>>;
};

/** Типы операций для загрузки файлов эксель через очередь */
export enum XlsxQueueOperationTypeEnum {
  /** загрузка спортсменов */
  UploadAthletesXlsx = 'upload_athletes_xlsx',
  /** загрузка ИАС */
  UploadIasXlsx = 'upload_ias_xlsx'
}

/** статусы загрузки файлов эксель через очередь */
export enum XlsxQueueStatusEnum {
  /** ошибка */
  Error = 'error',
  /** невалидный файл */
  Invalid = 'invalid',
  /** в процессе */
  Process = 'process',
  /** успех */
  Success = 'success',
  /** ожидание */
  Wait = 'wait'
}

export type NodeFilter = {
  person_id?: InputMaybe<Scalars['String']['input']>;
  sport_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Данные для доступа к веб-судье. */
export type WebJudgeUidAndUrl = {
  __typename?: 'webJudgeUidAndUrl';
  uid: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type VideostandEventsQueryVariables = Exact<{
  videostand_id: Scalars['ID']['input'];
}>;


export type VideostandEventsQuery = { __typename?: 'Query', videostandEvents?: { __typename?: 'VideostandEvents', current_and_upcoming?: Array<{ __typename?: 'VideostandEvent', title: string, is_main: boolean, dt_start?: any | null, dt_end?: any | null, dt_create: any } | null> | null, finished?: Array<{ __typename?: 'VideostandEvent', title: string, is_main: boolean, dt_start?: any | null, dt_end?: any | null, dt_create: any } | null> | null } | null };


export const VideostandEventsDocument = gql`
    query videostandEvents($videostand_id: ID!) {
  videostandEvents(videostand_id: $videostand_id) {
    current_and_upcoming {
      title
      is_main
      dt_start
      dt_end
      dt_create
    }
    finished {
      title
      is_main
      dt_start
      dt_end
      dt_create
    }
  }
}
    `;

/**
 * __useVideostandEventsQuery__
 *
 * To run a query within a React component, call `useVideostandEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideostandEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideostandEventsQuery({
 *   variables: {
 *      videostand_id: // value for 'videostand_id'
 *   },
 * });
 */
export function useVideostandEventsQuery(baseOptions: Apollo.QueryHookOptions<VideostandEventsQuery, VideostandEventsQueryVariables> & ({ variables: VideostandEventsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideostandEventsQuery, VideostandEventsQueryVariables>(VideostandEventsDocument, options);
      }
export function useVideostandEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideostandEventsQuery, VideostandEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideostandEventsQuery, VideostandEventsQueryVariables>(VideostandEventsDocument, options);
        }
export function useVideostandEventsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VideostandEventsQuery, VideostandEventsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VideostandEventsQuery, VideostandEventsQueryVariables>(VideostandEventsDocument, options);
        }
export type VideostandEventsQueryHookResult = ReturnType<typeof useVideostandEventsQuery>;
export type VideostandEventsLazyQueryHookResult = ReturnType<typeof useVideostandEventsLazyQuery>;
export type VideostandEventsSuspenseQueryHookResult = ReturnType<typeof useVideostandEventsSuspenseQuery>;
export type VideostandEventsQueryResult = Apollo.QueryResult<VideostandEventsQuery, VideostandEventsQueryVariables>;