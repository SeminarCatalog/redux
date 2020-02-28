# SeminarCatalog Redux

![npm](https://img.shields.io/npm/v/@seminarcatalog/redux)
![GitHub package.json version](https://img.shields.io/github/package-json/v/SeminarCatalog/redux)
![David](https://img.shields.io/david/seminarcatalog/redux)

This project is the official redux bridge for the [SeminarCatalog Javascript SDK](https://github.com/SeminarCatalog/js-sdk) of the [SeminarCatalog](https://www.databay.de/landing-pages/seminarmanagement)
developed by the [Databay AG](https://www.databay.de).

## Table of contents

* [Installation](#installation)
    * [yarn](#yarn)
    * [npm](#npm)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [License](#license)
* [Documentation](#documentation)
    * [Redux resources](#documentation-for-redux-resources)
    * [Internals](#documentation-for-internals)
* [Appendix](#appendix)

## Installation

### yarn

Install this package via yarn:

```shell
yarn add @seminarcatalog/redux
```

### npm

Install this package via npm:

```shell
npm install @seminarcatalog/redux --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { combineReducers, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {ADDRESS} from "@seminarcatalog/redux";

const reducers = combineReducers({
    address: ADDRESS.reducer
});

const store = createStore(reducers, applyMiddleware(thunk, promise));

store
    .dispatch(ADDRESS.actions.LIST())
    .then(() => console.log(ADDRESS.selectors.getList(store.getState()));
```

## Contributing

SeminarCatalog/redux is an [open-source project](#license) which is mainly developed and maintained by [Databay AG](https://www.databay.de).
You're interested in checking out how seminarcatalog/redux works and/or want to contribute to this project? Then checkout our [contribution guide](CONTRIBUTING.md)!

## License

This project is licensed under the MIT License. See [LICENSE document](/LICENSE).

## Documentation

### Documentation for redux resources

Resource | Api Endpoint | Reducer | Selectors | Actions
------------ | ------------- | ------------- | ------------- | -------------
*Address* | [**AddressApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/AddressApi.md) | `ADDRESS.reducer` | `ADDRESS.selectors` | `ADDRESS.actions`
*AllocationWaitingList* | [**AllocationWaitingListApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/AllocationWaitingListApi.md) | `ALLOCATIONWAITINGLIST.reducer` | `ALLOCATIONWAITINGLIST.selectors` | `ALLOCATIONWAITINGLIST.actions`
*BookingInterest* | [**BookingInterestApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/BookingInterestApi.md) | `BOOKINGINTEREST.reducer` | `BOOKINGINTEREST.selectors` | `BOOKINGINTEREST.actions`
*Category* | [**CategoryApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CategoryApi.md) | `CATEGORY.reducer` | `CATEGORY.selectors` | `CATEGORY.actions`
*Certificate* | [**CertificateApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CertificateApi.md) | `CERTIFICATE.reducer` | `CERTIFICATE.selectors` | `CERTIFICATE.actions`
*ContactPerson* | [**ContactPersonApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ContactPersonApi.md) | `CONTACTPERSON.reducer` | `CONTACTPERSON.selectors` | `CONTACTPERSON.actions`
*Country* | [**CountryApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CountryApi.md) | `COUNTRY.reducer` | `COUNTRY.selectors` | `COUNTRY.actions`
*Coupon* | [**CouponApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CouponApi.md) | `COUPON.reducer` | `COUPON.selectors` | `COUPON.actions`
*CouponCode* | [**CouponCodeApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CouponCodeApi.md) | `COUPONCODE.reducer` | `COUPONCODE.selectors` | `COUPONCODE.actions`
*Currency* | [**CurrencyApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/CurrencyApi.md) | `CURRENCY.reducer` | `CURRENCY.selectors` | `CURRENCY.actions`
*EducationHistoryItem* | [**EducationHistoryItemApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/EducationHistoryItemApi.md) | `EDUCATIONHISTORYITEM.reducer` | `EDUCATIONHISTORYITEM.selectors` | `EDUCATIONHISTORYITEM.actions`
*Event* | [**EventApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/EventApi.md) | `EVENT.reducer` | `EVENT.selectors` | `EVENT.actions`
*Hotel* | [**HotelApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/HotelApi.md) | `HOTEL.reducer` | `HOTEL.selectors` | `HOTEL.actions`
*Language* | [**LanguageApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/LanguageApi.md) | `LANGUAGE.reducer` | `LANGUAGE.selectors` | `LANGUAGE.actions`
*Location* | [**LocationApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/LocationApi.md) | `LOCATION.reducer` | `LOCATION.selectors` | `LOCATION.actions`
*Media* | [**MediaApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/MediaApi.md) | `MEDIA.reducer` | `MEDIA.selectors` | `MEDIA.actions`
*Order* | [**OrderApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/OrderApi.md) | `ORDER.reducer` | `ORDER.selectors` | `ORDER.actions`
*Organizer* | [**OrganizerApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/OrganizerApi.md) | `ORGANIZER.reducer` | `ORGANIZER.selectors` | `ORGANIZER.actions`
*Participant* | [**ParticipantApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ParticipantApi.md) | `PARTICIPANT.reducer` | `PARTICIPANT.selectors` | `PARTICIPANT.actions`
*Participation* | [**ParticipationApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ParticipationApi.md) | `PARTICIPATION.reducer` | `PARTICIPATION.selectors` | `PARTICIPATION.actions`
*ParticipationCode* | [**ParticipationCodeApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ParticipationCodeApi.md) | `PARTICIPATIONCODE.reducer` | `PARTICIPATIONCODE.selectors` | `PARTICIPATIONCODE.actions`
*Partner* | [**PartnerApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/PartnerApi.md) | `PARTNER.reducer` | `PARTNER.selectors` | `PARTNER.actions`
*PaymentMethod* | [**PaymentMethodApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/PaymentMethodApi.md) | `PAYMENTMETHOD.reducer` | `PAYMENTMETHOD.selectors` | `PAYMENTMETHOD.actions`
*Price* | [**PriceApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/PriceApi.md) | `PRICE.reducer` | `PRICE.selectors` | `PRICE.actions`
*Product* | [**ProductApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ProductApi.md) | `PRODUCT.reducer` | `PRODUCT.selectors` | `PRODUCT.actions`
*ProductVariant* | [**ProductVariantApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ProductVariantApi.md) | `PRODUCTVARIANT.reducer` | `PRODUCTVARIANT.selectors` | `PRODUCTVARIANT.actions`
*ProviderInfo* | [**ProviderInfoApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ProviderInfoApi.md) | `PROVIDERINFO.reducer` | `PROVIDERINFO.selectors` | `PROVIDERINFO.actions`
*Receiver* | [**ReceiverApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/ReceiverApi.md) | `RECEIVER.reducer` | `RECEIVER.selectors` | `RECEIVER.actions`
*Region* | [**RegionApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/RegionApi.md) | `REGION.reducer` | `REGION.selectors` | `REGION.actions`
*Restaurant* | [**RestaurantApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/RestaurantApi.md) | `RESTAURANT.reducer` | `RESTAURANT.selectors` | `RESTAURANT.actions`
*RevenueAccount* | [**RevenueAccountApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/RevenueAccountApi.md) | `REVENUEACCOUNT.reducer` | `REVENUEACCOUNT.selectors` | `REVENUEACCOUNT.actions`
*RoleDiscount* | [**RoleDiscountApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/RoleDiscountApi.md) | `ROLEDISCOUNT.reducer` | `ROLEDISCOUNT.selectors` | `ROLEDISCOUNT.actions`
*Seminar* | [**SeminarApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/SeminarApi.md) | `SEMINAR.reducer` | `SEMINAR.selectors` | `SEMINAR.actions`
*SeminarConfiguration* | [**SeminarConfigurationApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/SeminarConfigurationApi.md) | `SEMINARCONFIGURATION.reducer` | `SEMINARCONFIGURATION.selectors` | `SEMINARCONFIGURATION.actions`
*Subscription* | [**SubscriptionApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/SubscriptionApi.md) | `SUBSCRIPTION.reducer` | `SUBSCRIPTION.selectors` | `SUBSCRIPTION.actions`
*SubscriptionConfiguration* | [**SubscriptionConfigurationApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/SubscriptionConfigurationApi.md) | `SUBSCRIPTIONCONFIGURATION.reducer` | `SUBSCRIPTIONCONFIGURATION.selectors` | `SUBSCRIPTIONCONFIGURATION.actions`
*SubscriptionPlan* | [**SubscriptionPlanApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/SubscriptionPlanApi.md) | `SUBSCRIPTIONPLAN.reducer` | `SUBSCRIPTIONPLAN.selectors` | `SUBSCRIPTIONPLAN.actions`
*Task* | [**TaskApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/TaskApi.md) | `TASK.reducer` | `TASK.selectors` | `TASK.actions`
*Test* | [**TestApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/TestApi.md) | `TEST.reducer` | `TEST.selectors` | `TEST.actions`
*TestResult* | [**TestResultApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/TestResultApi.md) | `TESTRESULT.reducer` | `TESTRESULT.selectors` | `TESTRESULT.actions`
*Topic* | [**TopicApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/TopicApi.md) | `TOPIC.reducer` | `TOPIC.selectors` | `TOPIC.actions`
*Trainer* | [**TrainerApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/TrainerApi.md) | `TRAINER.reducer` | `TRAINER.selectors` | `TRAINER.actions`
*User* | [**UserApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/UserApi.md) | `USER.reducer` | `USER.selectors` | `USER.actions`
*UserGroup* | [**UserGroupApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/UserGroupApi.md) | `USERGROUP.reducer` | `USERGROUP.selectors` | `USERGROUP.actions`
*Vat* | [**VatApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/VatApi.md) | `VAT.reducer` | `VAT.selectors` | `VAT.actions`
*WaitingList* | [**WaitingListApi**](https://github.com/SeminarCatalog/js-sdk/blob/master/docs/WaitingListApi.md) | `WAITINGLIST.reducer` | `WAITINGLIST.selectors` | `WAITINGLIST.actions`


### Documentation for internals

#### createAsyncAction

A helper function to create a redux action creator function to handle async calls.

```javascript
function createAsyncAction(type, prepareFn?)
```

Usually this function is only used internaly. But if you want to create your own async action creator function, you can do this with:

```javascript
const asyncTopicList = createAsyncAction('topic/list', ({payload}) => ({
payload: () => new Promise((resolve) => setTimeout(() => { resolve (payload) }, 2000))
}));

const action = asyncTopicList('myPayload');
// { type: 'topic/list/request', payload: () => new Promise() }

console.log(action.toString())
// topic/list/request

console.log(`Action name is ${action}`)
// Action name is topic/list/request

console.log(action.onSuccess.toString());
// topic/list/success

console.log(action.onFailure.toString());
// topic/list/failure
```
The `onSuccess` action is dispatched, if the payload resolves, otherwise `onFailure` is dispatched.

#### createResourceActions

A helper function to create crud action creators for a given resource.

```javascript
function createResourceActions(resource, apiEndpoint)
```

This function can be used to create redux crud actions based on a [@seminarcatalog/sdk](https://github.com/SeminarCatalog/js-sdk)
api endpoint.

```javascript
import {TopicApi} from '@seminarcatalog/sdk';

const topicActions = createResourceActions('topic', TopicApi);

console.log(topicActions);
/*
{
    LIST: Function, // { type: 'topic/list/request', payload: Topic.topicList }
    GET: Function,  // { type: 'topic/get/request', payload: Topic.topicGet }
    CREATE: Function, // { type: 'topic/create/request', payload: Topic.topicCreate }
    UPDATE: Function, // { type: 'topic/update/request', payload: Topic.topicUpdate }
    DELETE: Function, // { type: 'topic/delete/request', payload: Topic.topicDelete }
}
*/
```

#### createResourceSelectors

A helper function to create a collection of selector function to select data from state.

```javascript
function createResourceSelectors(resource)
```

This function can be used to create a set of selectors for a given resource

```javascript
const topicSelectors = createResourceSelectors('topic');

const state = { /* the curent state */ };

console.log(topicSelectors.getList(state));
// A list of topics [{id: 1, ...}, {id: 2, ...}]

console.log(topicSelectors.getItem(state, 1));
// A topic {id: 1, ...}
```

#### createEntityReducer

A helper function to create the entity reducer for a resource

```javascript
function createEntityReducer(resource, actions)
```

This function can be used to create an entity reducer for a set of crud actions and a defined resource.
The created reducers reduces the state for the resource `onSuccess` list, get, create, update or delete action.

```javascript
const action = createResourceActions('topic');
const topicReducer = createEntityReducer('topic', actions);

console.log(topicReducer);
/*
{
    [action.LIST.onSucces]: fn(state, action),
    [action.GET.onSucces]: fn(state, action),
    [action.CREATE.onSucces]: fn(state, action),
    [action.UPDATE.onSucces]: fn(state, action),
    [action.DELETE.onSucces]: fn(state, action)
}
*/
```

#### createResourceReducer

A helper function to create a combined reducer for all resource reducers.

```javascript
function createResourceReducer(resource, actions)
```

This function can be used to create a combined reducer of all resource reducers. Currently the following reducers are
combinded into one resource reducer:

* Reducer created by [createEntityReducer](#createEntityReducer)

```javascript
const actions = createResourceActions('topic');
const resourceReducer = createResourceReducer('topic', actions);

console.log(resourceReducer);
/*
{
    entities: createEntityReducer('topic')
}
*/
```

#### createReduxResource

A helper function to create a collection object for all redux function of a defined resource.

```javascript
function createReduxResource(resource, apoEndpoint)
```

This function is the all-in-one creator function for a resource to create a resource reducer, resource crud actions and
resource selectors and collects them in one object. The library uses this function to provide the full functionality for
all [@seminarcatalog/sdk](https://github.com/SeminarCatalog/js-sdk) endpoints.

```javascript
import {TopicApi} from '@seminarcatalog/sdk';

const TOPIC = createReduxResource('topic', TopicApi);
```

* `TOPIC.reducer`: The reducer created by [createResourceReducer](#createResourceReducer)
* `TOPIC.actions`: The reducer created by [createResourceActions](#createResourceActions)
* `TOPIC.selectors`: The reducer created by [createResourceSelectors](#createResourceSelectors)

## Appendix
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Build package: de.databay.seminarcatalog.codegen.DatabayReduxGenerator
    For more information, please visit [https://www.databay.de](https://www.databay.de)
