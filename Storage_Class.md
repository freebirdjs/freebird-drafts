Storage Class
===============

Storage class for freebird

<br />

## Table of Contents  

* [Constructor](#Constructor)  
* [Properties](#Properties)  
* [Methods](#Methods) 
* [Private Constructor](#Private)

<br />

<a name="Constructor"></a>
## Constructor  

Storage(fileName, maxNum)

**Arguments:**  

1. `fileName` (_String_): The path to the file where the data is persisted.
2. `maxNum` (_Number_): The maximum number that can be stored in this class.

**Returns:**  

* (_Object_) objectBox (instance of Storage class)

<br />

<a name="Properties"></a>
## Properties  

**Examples**

```js
{
    // private
    _count: Number
    _maxNum: Number
    _maxIndex: Number
    _box: Object         //created by Dict class
    _db: Object          //persistent datastore
}
```

**Notice**: id start from 1

<br />

<a name="Methods"></a>
## Methods  

* isEmpty()
    - whether the box is empty
    - return Boolean

* has(id) (?)
    - is objectBox has the object of specify id
    - id (_Number_): object id
    - return Boolean 

* get(id) 
    - get the object of specify id
    - id (_Number_): object id
    - return Object

* set(id, obj, callback)
    - store object to the box and specify the object id, store object to database
    - id (_Number_): object id
    - obj (_Object_): object to be stored
    - callback (_Function): get called when store to objectBox and database

* add(obj, callback)
    - store object to the box and store object to database
    - obj (_Object_): object to be stored
    - callback (_Function): get called when store to objectBox and database

* remove(id, callback)
    - remove the object of specify id and remove object from database
    - id (_Number_): object id
    - callback (_Function): get called when remove from objectBox and database

* getMaxNum() (?)
    - get the maximum number of box
    - return Number

* getCount() (?)
    - obtain the number of objects in a box
    - return Number

* filter(path, value)
    - iterates box and filter out the match object
    - path (_String_): path to the object value 
    - value (_Depends_): the value you want to compare to each object in object box
    - return Object[]

* find(predicate)
    - find the object in the box which is match predicate
    - predicate (_Array|Function|Object|String_)
    - return Object

* exportAllIds()
    - export all object id
    - return Number[]

* modify(id, path, snippet, callback)
    - modify the value of given object path to database
    - id (_Number_): device id
    - path (_String_): path to the value which you want to modify
    - snippet (_Depends_): the value of the object refer by path will be modified to snippet
    - callback (_Function): get called when modification is completed

* replace(id, path, value, callback)
    - replace the value of given object path to database
    - id (_Number_): device id
    - path (_String_): path to the value which you want to replace
    - value (_Depends_): the value of the object refer by path will be replaced to this value
    - callback (_Function): get called when replace property to database is completed

* reload(callback)
    - load each object from database to box
    - callback (_Function_): get called when reload from database is completed

<br />

<a name="Private"></a>
## Private Constructor 

Dict()

#### Property
* elements (_Object_)

#### Method
* has(key)
    - check element of given has in dictionary or not
* get(key)
    - get element by given key
* set(key, val)
    - add element to dictionary by given key
* remove(key)
    - remove element by given key

